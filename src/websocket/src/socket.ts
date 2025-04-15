import { IncomingMessage } from "http";


import  { createServer } from "http"
const { WebSocketServer }= require("ws");
const clients = new Map;

const server = createServer();
const wss = new WebSocketServer({ server });
export {wss,clients,server}