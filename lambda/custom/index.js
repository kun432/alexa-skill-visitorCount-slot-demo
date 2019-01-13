/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

const SKILL_NAME = '来場者カウント';
const HELP_MESSAGE = '来場者数を教えて、で今日の来場者数をお知らせします';
const HELP_REPROMPT = '何をお調べしますか？';
const STOP_MESSAGE = '終了します';
const ERROR_MESSAGE = 'うまく聞き取れませんでした';
const ERROR_REPROMPT = 'もう一度お願いします';

const visitorCount = 165;

/*
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Welcome to the Alexa Skills Kit, you can say hello!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};
*/

const VisitorCountIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest'
      || ( handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'VisitorCountIntent');
  },
  handle(handlerInput) {
    let intent = handlerInput.requestEnvelope.request.intent;

    let eventCity = intent.slots.eventCity.value;
    let eventName = intent.slots.eventName.value;
    let eventDate = intent.slots.eventDate.value;

    const speechText =
      eventCity + 'の' +
      eventName + 'の' +
      eventDate + 'の来場者数は' +
      visitorCount + '人です';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard(SKILL_NAME, speechText)
      .getResponse();
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE + '、' + HELP_REPROMPT)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak(ERROR_MESSAGE + '、' + ERROR_REPROMPT)
      .reprompt(ERROR_REPROMPT)
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    VisitorCountIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
