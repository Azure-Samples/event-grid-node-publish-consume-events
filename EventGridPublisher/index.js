/* ----------------------------------------------------------------------------------
 * Microsoft Azure EventGrid Team
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.

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

'use strict';

var uuid = require('uuid').v4;
var msRestAzure = require('ms-rest-azure');
var eventGrid = require("azure-eventgrid");
var url = require('url');

function EventGridSample() {
  // TODO: Enter value for topicKey
  let topicKey = 'enter-topic-key';
  let topicCreds = new msRestAzure.TopicCredentials(topicKey);
  let egClient = new eventGrid(topicCreds);
  // TODO: Enter value for topic-endpoint
  let topicEndPoint = 'enter-topic-endpoint';
  let topicUrl = url.parse(topicEndPoint, true);
  let topicHostName = topicUrl.host;
  let currentDate = new Date();
    
  let events = [
    {
      id: uuid(),
      subject: 'Door1',
      dataVersion: '2.0',
      eventType: 'Contoso.Items.ItemReceivedEvent',
      data: {
        itemUri: 'ContosoSuperItemUri'
      },
      eventTime: currentDate
    }
  ];
  egClient.publishEvents(topicHostName, events).then((result) => {
    return Promise.resolve(console.log('Published events successfully.'));
  }).catch((err) => {
    console.log('An error ocurred ' + err);
  });
}

EventGridSample();
