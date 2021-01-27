import { Component } from '@angular/core';
import { ImageService } from './image.service';

class ImageSnippet {
  pending: boolean = true;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	selectedFile: ImageSnippet;
	response: String;
	bgStyle = { 'background-color': '#1976d2' };

	constructor(private imageService: ImageService){}

	private onSuccess(res) {
    this.selectedFile.pending = false;
		console.log(res);
		this.response = res.predictions[0].tagName + ' ' + (res.predictions[0].probability * 100).toFixed(2); + "%";
		if (res.predictions[0].tagName === 'correct') {
			this.selectedFile.status = 'ok';
			this.bgStyle = { 'background-color': 'green' };
	  } else {
			this.selectedFile.status = 'fail';
			this.bgStyle = { 'background-color': 'red' };
			if (res.predictions[0].tagName === 'incorrect') {
				this.response += '; ' + res.predictions[1].tagName + ' ' + (res.predictions[0].probability * 100).toFixed(2); + "%";
			}
		}
	}

  private onError(err) {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
		this.selectedFile.src = '';
		this.response = "Unexpected Error";
  }

	processFile(event) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

			this.selectedFile.pending = true;
			this.bgStyle = { 'background-color': '#ffdb44' };
      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.onSuccess(res);
        },
        (err) => {
          this.onError(err);
        })
    });

    reader.readAsDataURL(file);
  }
}
