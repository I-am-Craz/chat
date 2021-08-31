import express from "express";
import router from './router';
import http from 'http';
import socket from 'socket.io';

class App {
    private server: http.Server;
    private port:number;
    
    private io: socket.Server;

    constructor(port: number){
        this.port = port;

        const app = express();
        
        app.use(express.static(__dirname + '/public'));
        app.use(express.urlencoded({ extended: false }));
        app.use(express.json());
        app.use('/', router);

        this.server = new http.Server(app);
        this.io = new socket.Server(this.server);

        this.io.on('connection', async (socket: socket.Socket) => {
            require('./services/chat_service')(this.io, socket);
        });

    }
    public start(){
        this.server.listen(this.port);
    }
}

let app = new App(7000);
app.start();
