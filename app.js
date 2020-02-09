async function StartServer(config){
    const
        express = require('express'),
        fs = require('fs'),
        path = require('path'),
        redirectorPort = config.httpPort || 80,
        privateKey = config.privateKey || 'privkey.pem',
        fullChain = config.fullChain || 'fullchain.pem',
        app = express();

    try{
        var server = require('https').createServer({
            key: fs.readFileSync(privateKey),
            cert: fs.readFileSync(fullChain)
        }, app);

        //Redirect from http port 80 to https
        var redirector = require('http').createServer((req, res) => {
            res.writeHead(301, { 'Location': "https://" + req.headers['host'] });
            res.end();
        }).listen(redirectorPort, () => console.log('HTTP to HTTPS redirector listening on *:' + redirectorPort));
    }catch(error){
        var server = require('http').createServer(app);
        console.log('Unable to start HTTPS, this is likely because we are unable to load the your .pem files. HTTP fall back listening.');
    }

    let publicDir = path.join(__dirname, 'public');
    app.use(express.static(publicDir));
    app.get('/', (req, res) => res.sendFile(path.join(publicDir, 'index.html')));

    let serverPort = config.httpsPort || 443;
    if(!redirector) serverPort = redirectorPort;
    server.listen(serverPort, () => console.log('listening on *:' + serverPort));
}

StartServer({
    httpPort: 8080,
    httpsPort: 4433
});