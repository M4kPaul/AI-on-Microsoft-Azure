## Azure Cognitive Language Services


### Azure Content Moderator
1. **Intro**

   Content moderator allows to either block, approve, or review the content based on our policies and thresholds.

   Text Moderation API returns the following information:
   - A list of potentially unwanted words found in the text - predefined and/or custom profanity term lists 
   - What type of potentially unwanted words were found (english only) - three classification categories with probability scores (0-1) and whether human review is recomended:
       1. sexually explicit content or adult content
       2. suggestive or mature content
       3. offensive content
    - Possible personally identifiable information (PII) found in the text - detects if personal data is present in the text (email, IP address, US address, US phone number)
2. **Use cases**
   * Moderating real time chats.
   * Detecting and preventing users from posting explicit and adult content in the comments.
3. **How to**
   * How to use this service?
       1. Create and subscribe to a Content Moderator resource
       2. Copy the subscription key
       3. Use it to send requests to the [API](https://westus.dev.cognitive.microsoft.com/docs/services/57cf753a3f9b070c105bd2c1/operations/57cf753a3f9b070868a1f66f)
       4. Evaluate the response
   * [Pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/content-moderator/) - EU West
   ```
   Free     -  1 TPS - 5,000 Moderate + 5,000 Review / month
   Standard - 10 TPS -   0-1M transactions -    $1 per 1,000 transactions
                        1M-5M transactions - $0.75 per 1,000 transactions
                       5M-10M transactions - $0.60 per 1,000 transactions
                         10M+ transactions - $0.40 per 1,000 transactions
   ```


### Language Understanding Intelligent Service (LUIS)

1. **Intro**
   
   LUIS applies custom machine-learning intelligence to a user's conversational natural-language text. It attempts to predict the user's overall meaning and pull out relevant detailed information based on three main aspects:
   - Utterances - input from the user to interpret
   - Intents - a task or action the user wants to do
   - Entities - a word or phrase inside the utterance that you want to extract.
   
   Our applications can use this information to interact with the user.
2. **Use cases**
   - Answering frequently asked questions in the support chat box.
   - Booking a visit to the hairdresser.
3. **How to**
   * How to use this service?
       1. Create a LUIS service resource
       2. Create a LUIS app
           - North America: https://www.luis.ai/
           - Europe: https://eu.luis.ai/
           - Australia: https://au.luis.ai/
       3. Define intents - detecing utterances
       4. Create entities - defining how to detect those intents
       5. Map search subjects to the facet entity - connecting those two
       6. Train Model
       7. Create a public endpoint for the LUIS service
       8. Publish the app and test the endpoints

   * [Pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/language-understanding-intelligent-services/) - EU West
   ```
   Free (text only) -  5 TPS - 10,000 Text Requests* + 1 Million Authoring Transactions / month
   Standard         - 50 TPS -   Text Requests $1.50 per 1,000 transactions*
                               Speech Requests $5.50 per 1,000 transactions*
   *Dispatch will do two text transactions per request.
   ```


### Text Analytics API

1. **Intro**
   
2. **Use cases**
   
3. **How to**
   * How to use this service?
   * [Pricing]() - EU West
   ```
   ```
