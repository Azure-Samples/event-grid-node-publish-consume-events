/* ----------------------------------------------------------------------------------
 * Microsoft Azure EventGrid Team
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND,
 * EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.
 * ----------------------------------------------------------------------------------
 * The example companies, organizations, products, domain names,
 * e-mail addresses, logos, people, places, and events depicted
 * herein are fictitious.  No association with any real company,
 * organization, product, domain name, email address, logo, person,
 * places, or events is intended or should be inferred.
 * ----------------------------------------------------------------------------------
 */
module.exports = function (context, req) {
    const SubscriptionValidationEvent = "Microsoft.EventGrid.SubscriptionValidationEvent";
    const StorageBlobCreatedEvent = "Microsoft.Storage.BlobCreated";
    const CustomTopicEvent = "Contoso.Items.ItemReceived";

    var parsedReq = JSON.parse(req['rawBody']);
    context.log('JavaScript HTTP trigger function processed a request.' + parsedReq);

    parsedReq.forEach(eventGridEvent => {
        var eventData = eventGridEvent.data; 
        // Deserialize the event data into the appropriate type based on event type using if/elif/else
        if (eventGridEvent.eventType == SubscriptionValidationEvent) {
            context.log('Got SubscriptionValidation event data, validationCode: ' + eventData.validationCode + ', topic: ' + eventGridEvent.topic); 
            context.res = {
                    validationResponse: eventData.validationCode
            };
        } else if (eventGridEvent.eventType == StorageBlobCreatedEvent) {
            context.log('Got Blobcreated event data, blob URI ' + eventData.url);
        } else if (eventGridEvent.eventType == CustomTopicEvent) {
            context.log('Got ContosoItemReceived event data, item SKU ' + eventData.itemSku);
        }
    });
    
    context.done();
};