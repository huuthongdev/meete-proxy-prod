import app from './app'
import Configs from './configs'

// import http from 'http'
// import httpProxy from 'node-http-proxy'

async function main() {
    console.log(` \ 
    \n###### Server information ###### \
    \n \
    \n------- APP ------ \
    \n- Enviroment: ${Configs.ENV}  \
    \n- Public PORT: ${Configs.PORT} \
    \n \
    \n------- ADMIN ACCOUNT ------ \
    \n- Name: ${Configs.ADMIN_NAME} \
    \n- Email: ${Configs.ADMIN_EMAIL} \
    \n- Password: ${Configs.ADMIN_PLAIN_PASSWORD} \
    \n`)

    app.listen(Configs.PORT, () => {
        console.log(`••••• Server start success.\n`);
    });
}

main();

// const http = require('http'), httpProxy = require('http-proxy');
// const proxy = httpProxy.createProxyServer({});

// var server = http.createServer(function (req, res) {
//     // You can define here your custom logic to handle the request
//     // and then proxy the request.
//     proxy.web(req, res, {
//         target: 'https://user.api.meete.co',
//         changeOrigin: true,
//     });
// });

// console.log("listening on port 5050")
// server.listen(5050);