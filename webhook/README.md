# Webhook

The project uses Node.js and Express to run a server and handle the webhook route.
Consuming a webhook starts the same way as creating a new endpoint for your own API.
In Pre-g this means creating a new route to handle the incoming call from Dialogflow, process it and send a request to Infermedica's API.

To comunicate with the API you need URL, APPID and APPKEY. To get them visit [Infermedica](https://infermedica.com/ "Infermedica").
