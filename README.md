# Digitify Huzaifa Assessment

This project utilizes React, Node.js, TypeScript, and Framer Motion for creating a modern vertical carousel for poll forms.

## Configuration

To configure the URL for form submissions, you'll need to set the `REACT_APP_FORM_SUBMIT_URL` environment variable. This URL is used by the application to send form data to the specified endpoint. Example env can be found in root project directory.

Add the following line to your .env file in the root of your project:
`REACT_APP_FORM_SUBMIT_URL=your_endpoint_url`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance. You can then serve the static assets with pm2 or ExpressJs.
