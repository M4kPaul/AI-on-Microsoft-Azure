## Covid Helpline Bot


### Use Case:

This is a simple QnA bot created using [Bot Framework Composer](https://docs.microsoft.com/en-us/composer/introduction).

It integrates language understanding services ([LUIS](https://www.luis.ai/)) and [QnA Maker](https://www.qnamaker.ai/) and allows composition of bot replies using Language Generation.

It's knowledge base was build based on top of two main Covid-19 sites with verified informations in the form of a faq:
* [who.int](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19)
* [cdc.gov](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19)

### Architecture:

// TODO


### How to recreate the bot:

1. Install [Bot Framework Composer](https://github.com/microsoft/BotFramework-Composer/releases) and [Bot Framework Emulator](https://github.com/Microsoft/BotFramework-Emulator/releases).
2. Open Bot Framework Composer, create a new bot (Create from template -> QnA Maker and LUIS).
3. Create new resource group on Azure.
4. Add QnA Maker Service to that group.
5. Login at [qnamaker.ai](https://www.qnamaker.ai/) and select created QnA service from the previous step.
6. Add selected sites as URL source for the knowledge base.
7. After importing the questions choose "Save and train".
8. Go to "PUBLISH" tab and confirm the process.
9. Copy knowledgebase id, host, and authorization EndpointKey.
10. Open Cognitive Services created in step 2., go to "Keys and Endpoint" and copy the key and the endpoint.
11. Paste the info in proper settings fields in the Bot Framework Composer.
12. Modify bot flow using Design GUI.
13. Press "Start" in the upper-right corner, after successful build you can test the bot in Bot Framework Emulator.
