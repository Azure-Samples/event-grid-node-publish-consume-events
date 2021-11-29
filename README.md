---
page_type: sample
languages:
- javascript
products:
- azure
description: "This contains Node.js samples for publishing events to Azure Event Grid and consuming events from Azure Event Grid."
urlFragment: event-grid-node-publish-consume-events
---

# Microsoft Azure Event Grid Publish/Consume Samples for Node.js

This contains Node.js samples for publishing events to Azure Event Grid and consuming events from Azure Event Grid. 

## Features

These samples demonstrate the following features:

Data Plane:

* How to publish events to Azure Event Grid.
* How to consume events delivered by Azure Event Grid.

The above two samples use the Event Grid data plane SDK (azure-eventgrid).

## Getting Started

### Pre-requisites

- If you don't already have it, [get node.js](https://nodejs.org). Install a version greater than 8.0.
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Azure Functions Extension in Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)


 ### Running the Samples

 The following are the steps to run the data plane samples and see events flowing through Event Grid:

 1.  Clone this repository onto your local machine. 
     ```
     git clone git@github.com:Azure-Samples/event-grid-node-publish-consume-events.git
     ```

 2. Install the dependencies
     ```
      cd event-grid-node-publish-consume-events
      npm install	  
      ```
 3. Create an Event Grid topic: You will need to first create an Event Grid topic. The steps are described at https://docs.microsoft.com/en-us/azure/event-grid/scripts/event-grid-cli-create-custom-topic. Make a note of the topic name and resource group name. 

 4. Publish an Azure Function: In this step, we will be using the EventGridConsumer sample and publishing it as an Azure Function. Here are the steps:

    a. Follow the instructions here to publish an Azure Function - https://code.visualstudio.com/tutorials/functions-extension/getting-started

    b. Once you have published Azure Function, navigate to the newly published Function in Azure Portal.

    c. Click on "Get Function URL" and copy the function URL.

    d. Create an event subscription to the topic you created in step 1, and provide this Azure Function as the endpoint for your event subscription. https://docs.microsoft.com/en-us/azure/event-grid/scripts/event-grid-cli-subscribe-custom-topic describes how to create an event subscription.

    e. Navigate to the Function (you created in step 2) in Azure Portal.

    f. Click on the "Logs" link at the bottom of the page.

 3. Start publishing events: In this step, we will be using the EventGridPublisher sample to start publishing events to the EventGrid topic you created in step1. Here are the steps:
 
    a. In index.js, replace the topic-endpoint and topic-key fields with the topic endpoint and the key of the topic respectively.

    b. Run the application in Visual studio code to publish events to this topic.
    
4. Verify you received the events: In this step, we will be verifying that the events are delivered to your event subscription. Here are the steps:

    a. In the Logs view of the Azure Function, verify that you can see the logs that show the receipt of the EventGridEvent.
 
## Resources

(Any additional resources or related projects)

- https://docs.microsoft.com/en-us/azure/event-grid/overview
- https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node
