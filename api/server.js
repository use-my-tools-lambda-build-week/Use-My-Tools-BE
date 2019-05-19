const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require('morgan')
const authRouter = require("../routers/authRouter.js");
const usersRouter = require("../routers/usersRouter.js");
const authorization = require("../routers/authorization.js");


const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan('dev'))
server.use(express.json());


server.use("/api/auth", authRouter);
server.use("/api/users", authorization, usersRouter);

module.exports = server;
