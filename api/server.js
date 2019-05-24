const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require('morgan')
const authRouter = require("../routers/authRouter.js");
const usersRouter = require("../routers/usersRouter.js");
const authorization = require("../routers/authorization.js");
const tools =require('../routers/toolsRouter')
const toolRental = require('../routers/rentedToolRouter')


const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan('dev'))
server.use(express.json());


server.use("/api/auth",  authRouter);
server.use("/api/users", authorization, usersRouter);
server.use('/api/tools', authorization, tools)
server.use('/api/toolrental', authorization, toolRental)



server.get("/", (req, res) => {
    res.status(200).json("Am I crazy or do we have a live server?");
  });

module.exports = server;
