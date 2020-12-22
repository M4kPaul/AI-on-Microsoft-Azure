## Computer Vision Services


### Azure Computer Vision API

1. **Intro**

   Computer Vision API allows for varying image processing:
   * identify facial details in pictures
   * analyze images for insights
   * extract text from images
   * generate high-quality thumbnails

2. **Use cases**

   * Digitalize hand written documents using OCR.
   * Recognize missing person using facial recognition.

3. **How to**

   * How to use this service?
   
      1. Create an Computer Vision API resource, choose all the specific options.
      2. Get API endpoint and subscription keys from created resource.
      3. Use REST API or provided Computer Vision API SDK. [Computer Vision Docs](https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/)

   * [Pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/computer-vision/) - EU West:
   
   ```
   Free - 20 transaction per minute: 5,000 transactions free per month
   
   S1   - 10 TPS:
     Features:
       Tag, Face, GetThumbnail, Color, Image Type, GetAreaOfInterest:
            0 -   1M  transactions — $1.00 per 1,000 transactions
           1M -  10M  transactions — $0.65 per 1,000 transactions
          10M - 100M  transactions — $0.60 per 1,000 transactions
                100M+ transactions — $0.40 per 1,000 transactions

       OCR, Adult, Celebrity, Landmark, Detect, Objects, Brand:
           0 -   1M  transactions — $1.00 per 1,000 transactions
          1M -  10M  transactions — $0.65 per 1,000 transactions
         10M - 100M  transactions — $0.60 per 1,000 transactions
               100M+ transactions — $0.40 per 1,000 transactions

       Describe (Non-English languages are in Preview), Read:
         0 - 1M  transactions — $1.50 per 1,000 transactions
             1M+ transactions — $0.60 per 1,000 transactions  

      Spatial analysis: Free during preview 
   ```


### Azure Custom Vision

1. **Intro**

   Custom Vision Service is part of the Cognitive Services suite. Its purpose is to create image classification models that "learn" from labeled images we provide.

2. **Use cases**

   * Sort specified items based on their picture.
   * Detect if a person is wearing a mask and should be allowed into the store.

3. **How to**

   * How to use this service?
      1. Create an Custom Vision resource, choose all the specific options.
      2. Create project on [customvision.ai](http://customvision.ai/), choose all the specific options (classification, detection and the domain of the project). 
      3. Upload and tag images to train the model through the site, API or SDK.
      4. Train and publish the model.
      5. Use REST API or provided Custom Vision SDK to predict images. [Custom Vision Docs](https://docs.microsoft.com/en-us/azure/cognitive-services/custom-vision-service/)

   * [Pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/custom-vision-service/) - EU West:
   
   ```
   Free     -  2 TPS:
     Upload, training, and prediction transactions (up to 2 projects, up to 1 hour training per month):
        5,000 training images free per project
       10,000 predictions per month
   
   Standard - 10 TPS:
     Upload and prediction transactions (up to 100 projects):
          $2 per 1,000 transactions

     Training:
         $20 per compute hour

     Image Storage (up to 6 MB each):
       $0.70 per 1,000 images 
   ```


### Azure Video Indexer

1. **Intro**

   Azure Video Indexer is a service to extract insights from media. It uses machine learning models that can be further customized and trained. The video insights include face identification, text recognition, object labels, scene segmentations, and more. Additional insights are extracted from audio, such as transcription and emotion detection.

2. **Use cases**

   * automaticly block explicit content from detected videos.
   * transcribe the video to people with sight or hearing impairment.

3. **How to**

   * How to use this service?
   
      1. Create an Video Indexer resource, choose all the specific options.
      2. Get API endpoint and subscription keys from created resource.
      3. Use REST API or provided Video Indexer SDK. [Video Indexer Docs](https://docs.microsoft.com/en-us/azure/media-services/video-indexer/)

   * [Pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/video-indexer/) - EU West:

   The Cognitive Services Video Indexer provides up to 10 hours of free indexing to website users and up to 40 hours of free indexing to API users. Customer that need to process more content can do so by linking their existing Azure Media Services resource group to their Video Indexer account or creating a new Azure Media Services resource group. For the customers who choose to create new resource group we will create ten S3 media reserved units. Customers can modify the number of reserved units as needed.

   When customers use Azure Media Services resource group to process additional content over the free limit, the following charges may apply

   * [Audio/Video Analysis](https://azure.microsoft.com/en-us/pricing/details/media-services/#analytics) – charged based on the number of input minutes
   * [Encoding](https://azure.microsoft.com/en-us/pricing/details/media-services/#encoding) – customers can choose between no encoding, single bit-rate or adaptive streaming based on requirements. Standard media encoding charges apply for this operation if used
   * [Streaming](https://azure.microsoft.com/en-us/pricing/details/media-services/#streaming) – charged when video is streamed using the video player widget
   * [Storage](https://azure.microsoft.com/en-us/pricing/details/storage/) - Storage cost is incurred for files that are saved in your storage account linked to your Azure Media Services account
   * [Network egress](https://azure.microsoft.com/en-us/pricing/details/bandwidth/) – charged when customers play the media or download insights (such as thumbnails extracted)
   * [Media Reserved Units](https://azure.microsoft.com/en-us/pricing/details/media-services/#encoding) – customers pay for the number of reserved units available on their subscription
