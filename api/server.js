const express = require("express");

const server = express();

server.use(express.json())

// bring in router
const accountsRouter = require('./accounts/accounts-router')
// use router
server.use("/api/accounts", accountsRouter)

module.exports = server;
