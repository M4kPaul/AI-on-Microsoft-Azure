## Azure Bot Service


### QnA maker and Azure Bot Service

1. **Intro**

   QnA Maker is a cognitive service used to create and publish a knowledge base with built-in natural language processing capabilities.
   Azure Bot Service provides a framework for developing, publishing, and managing bots on Azure.

2. **Use cases**

   * Answering CVOID related questions instead of calling the hotline.
   * Looking for a specific room in a building.
   * Quickly checking invoices status

3. **How to**

   * How to use this service?
   
      1. Provision a QnA Maker Azure resource.
      2. Define questions and answers:
         - Generated from an existing FAQ document or web page.
         - Imported from a pre-defined chit-chat data source.
         - Entered and edited manually.

         Optionally assign alternative phrasing to the questions.
      3. Train and test the knowledge base.
      4. Publish the knowledge base.
      5. Build a bot with the Azure Bot Service.
      6. Connect channels.

   * [Pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/qna-maker/) - EU West:
   
   ```
   Free     - 3 TPS - 1MB / document              - 3 managed documents free per month
                      100 transactions / min
                      50,000 transactions / month
   Standard - 3 TPS - 100 transactions / min      - $10 for unlimited managed documents
   ```


### Bot Framework Composer

1. **Intro**

   Bot Framework Composer is an IDE for building bots and other types of conversations software.

2. **Use cases**

   * Allow non developers click through basics and create a sample bot.
   * Generate a simple bot code with all the connections to other services for further development.

3. **How to**

   * How to use this service?
   
      1. Download [Bot Framework Composer](https://github.com/microsoft/BotFramework-Composer/releases).
      2. Install the application.
      3. Create a bot using GUI.

   * Pricing:
   
      It's open-source and free.
