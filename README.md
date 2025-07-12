# Angular Chatbot Frontend (OpenAI Integration)
This project is a simple chatbot application built with Angular.
It displays a static welcome message, user input messages, and ChatGPT responses using the OpenAI API.

Features
Angular 17+

Dynamic message list (user and ChatGPT messages)

Basic Bootstrap styling

OpenAI API integration using openai npm package

Requirements
Node.js

Angular CLI

An active OpenAI API key

Installation
Clone the repository

Install dependencies:

nginx
Kopieren
Bearbeiten
npm install
Set your own OpenAI API key:
In mainpage.component.ts replace:

ts
Kopieren
Bearbeiten
apiKey: 'YOUR_API_KEY_HERE'
Start the development server:

nginx
Kopieren
Bearbeiten
ng serve
Important Notes
Security Warning:
Using dangerouslyAllowBrowser: true with an OpenAI API key in the frontend is intended for testing purposes only.
For production environments, implement a backend proxy server to handle API calls securely.

