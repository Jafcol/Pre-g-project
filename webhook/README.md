# Webhook

The project uses Node.js and Express to run a server and handle the webhook route.
Consuming a webhook starts the same way as creating a new endpoint for your own API.
In Pre-g this means creating a new route to handle the incoming call from Dialogflow, process it and send a request to Priaid's API.

To comunicate with the API you need URL and authenticaton token. To get them visit [Priaid](https://apimedic.com/ "Priaid").
I deployed a simple function on Google cloud to get the token every webhook call but you can choose your own method.

The app is ready to be deployed on the host platform you prefer, just add your credentials, follow platform instructions and you are ready to go!