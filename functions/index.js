/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")('your_test_key');

// API

// App Config

const app = express();

// Middleware

app.use(cors({origin: true}));
app.use(express.json());

// API Routes

app.get('/', (express.request, express.response));

// Listen command

exports.api = functions.https.onRequest(app);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
