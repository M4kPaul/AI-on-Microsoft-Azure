## Azure Cognitive Speech Services


### Speech to text

1. **Intro**

   Speech-to-Text service transcribes audio streams into text.

2. **Use cases**

   * Transcribe group meetings.
   * Use the service during driving.
   * Help hearing impaired to understand the videos.

3. **How to**

   * How to use this service?
   
      1. Create an Azure Speech resource, choose all the specific options.
      2. Get API endpoint and subscription keys from created resource.
      3. Use REST API or provided Speech SDK. [S2T Docs](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/index-speech-to-text)

   * [Pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/speech-services/) - EU West:
   
   ```
   Free 1 concurrent request:
                                                  Standard: 5 audio hours free per month
                                                    Custom: 5 audio hours free per month
                                                            Endpoint hosting: 1 model free per month
     Conversation Transcription Multichannel Audio PREVIEW: 5 audio hours free per month
   Standard 20 concurrent request:
                                                  Standard: $1 per audio hour
                                                    Custom: $1.40 per audio hour
                                                            Endpoint hosting: $1.2904 per model per hour
     Conversation Transcription Multichannel Audio PREVIEW: $2.10 per audio hour
   ```


### Text to Speech

1. **Intro**

   Text-to-speech service synthesizes the text input into human-sounding reproductions.

2. **Use cases**

   * Allow visual impaired to read a newspaper.
   * Read important messages for a driver without having to stop.
   * Create engaging customer service support.

3. **How to**

   * How to use this service?
   
      1. Create an Azure Speech resource, choose all the specific options.
      2. Get API endpoint and subscription keys from created resource.
      3. Use REST API or provided Speech SDK. [T2S Docs](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/index-text-to-speech)

   * [Pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/speech-services/) - EU West:
   
   ```
   Free 1 concurrent request:
     Standard: 5 million characters free per month
       Neural: 0.5 million characters free per month
       Custom: 5 million characters free per month
               Endpoint hosting: 1 model free per month 
   Standard 20 concurrent request:
                  Standard: $4 per 1M characters
                    Neural: $16 per 1M characters 5
                            Long audio creation: $100 per 1M characters
                    Custom: $6 per 1M characters
                            Endpoint hosting: $0.0537 per model per hour
     Custom Neural PREVIEW: Voice building: contact us
                            Real-time synthesis: $24 per 1M characters
                            Endpoint hosting: $4.04 per model per hour
                            Long audio creation: $100 per 1M characters 
   ```
   
   
### Speech Translation

1. **Intro**

   Speech translation service translates and reads aloud spoken phrases in real time allowing to comunicate in two different languages.

2. **Use cases**

   * Translating political speeches during a debate.
   * Calling for a customer support from a different country.
   * Translating lectures video content.

3. **How to**

   * How to use this service?
   
      1. Create an Azure Speech resource, choose all the specific options.
      2. Get API endpoint and subscription keys from created resource.
      3. Use REST API or provided Speech SDK. [ST Docs](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/index-speech-translation)

   * [Pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/speech-services/) - EU West:
   
   ```
   Free 1 concurrent request:
     Standard: 5 audio hours free per month
   Standard 20 concurrent request:
     Standard: $2.50 per audio hour
   ```
