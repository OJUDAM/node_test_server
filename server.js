/**
 * Use Express framework
 */
const express = require('express');
const path = require('path');
const app = express();
const db = require('./db.js');
const route = require('./route.js');

app.set('view engine','pug');
app.set('views',path.join(__dirname,'html'));
db();
app.use(express.static(path.join(__dirname,'html')));   //정적요소를 사용한다는 의미(html, js등)
app.use('/',route)
app.listen(8090,()=>{
    console.log('Express App on port 8090!');
});
/**
 * Plain (js스크립트를 따로 등록해야함)
 */
// const http = require('http');
// const url = require('url');
// const fs = require('fs');

// http.createServer((request, response) => {
//     const path = url.parse(request.url, true).pathname;
//     if (request.method === 'GET') {
//         if (path === '/about') {
//             response.writeHead(200, {
//                 'Content-Type': 'text/html'
//             });
//             fs.readFile(__dirname + '/about.html', (err, data) => {
//                 if (err) {
//                     return console.error(err);
//                 }
//                 response.end(data, 'utf-8');
//             });
//         } else if (path === '/') {
//             response.writeHead(200, {
//                 'Content-Type': 'text/html'
//             });
//             fs.readFile(__dirname + '/main.html', (err, data) => {
//                 if (err) {
//                     return console.error(err);
//                 }
//                 response.end(data, 'utf-8');
//             });
//         } else {
//             response.statusCode = 404;
//             response.end('주소가 없습니다.');
//         }
//     }
// }).listen(8090);
