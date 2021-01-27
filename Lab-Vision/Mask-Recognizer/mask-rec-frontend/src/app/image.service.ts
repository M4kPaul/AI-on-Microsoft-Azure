import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {}


  public uploadImage(image: File): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Prediction-Key': 'a2ca24a1b1694cb7b216b0e4a635e522'
			})
		};
		
		const formData = new FormData();
    formData.append('image', image, image.name);
    return this.http.post('https://mask-recognizer.cognitiveservices.azure.com/customvision/v3.0/Prediction/c178fcee-1d19-4df6-b318-c25cecde82ad/classify/iterations/Iteration1/image', formData, httpOptions);
  }
}
