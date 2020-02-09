# node-starter
This is a starting point for a simple express app.

## Things of Note
* Will look for *fullchain.pem* and *privkey.pem* in the root and start HTTPS with it. These are the default file names provided by the free automatic certificate authority [Let's Encrypt] (https://letsencrypt.org/)
* A **HTTP to HTTPS redirect** will start as well.
* If no .pem files are found, it will fall back to HTTP.
* Loads **jQuery**, **Pug**, and **Semantic-UI**.
* **Pug** is rendered client-side.
