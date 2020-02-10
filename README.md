# node-starter
This is a starting point for a simple express app.

## Things of Note
* On startup, this app will look for **fullchain.pem** and **privkey.pem** in the main folder (working directory) and start HTTPS with it. These are the default file names provided by the free automatic certificate authority [Let's Encrypt](https://letsencrypt.org/)
* A **HTTP to HTTPS redirect** will start.
* If no .pem files are found, it will fall back to HTTP.
* Loads **jQuery**, **Pug**, and **Semantic-UI**.
* **Pug** is rendered client-side.

## Getting Started - Beginner Guide
1. Install [Node.js](https://nodejs.org/en/download/).
2. Install [VS Code](https://code.visualstudio.com/download).
3. Install [GitHub Desktop](https://desktop.github.com/).
4. Clone this repo using Github Desktop.
5. Open the folder the repo was cloned to with GitHub Desktop, the button should say "**Open with Visual Studio Code**".
6. In VS Code, click **Terminal** and run **npm install**. This will install the required dependances from [NPM](https://www.npmjs.com/).
7. Once complete, in VS Code, press **F5** then select your operating system's start script. 
8. In the VS Code "**Debug Console**", you should see **listening on:8080**. 
9. In your web browser, go to http://localhost:8080