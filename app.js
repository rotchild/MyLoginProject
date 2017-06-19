/**
 * Created by cx on 17-6-19.
 */
(function(){
var express,http,path,app,settings,routes,server;
    express=require('express');
    http=require('http');
    path=require('path');
    routes=require('./routes/routes.js')
    app=express();
    console.log("app",app);
    settings=require('./settings.js');
    app.set('serverPort',settings.serverPort);
    app.use(express.urlencoded());
   // app.use(express.json());
    app.use(express.static(path.join(__dirname,'web')));
    routes(app);
    server=http.createServer(app).listen(app.get('serverPort'),function(){
        return console.log('server is on port'+app.get('serverPort'));
    });
}).call(this)