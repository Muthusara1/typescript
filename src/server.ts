import "reflect-metadata";
import * as express from "express";
import * as compression from "compression";  // compresses requests
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as dotenv from "dotenv";
import * as winston from "winston";
import expressValidator = require("express-validator");
import { useExpressServer, useContainer } from "routing-controllers";
import * as cors from "cors";

dotenv.config({ path: ".env" });

const app = express();

// Express configuation

app.set("port", process.env.PORT || 3000);
app.use(compression());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());


// Morgan configuration
morgan.token("body", (req) => {
  return JSON.stringify(req.body);
});

app.use(morgan("combined"));
app.use(morgan("REQUEST: :body"));

// Winston configuration
winston.default.transports.console.level = (process.env.ENV == "PROD" ? "warn" : "debug");

// Creating a express server
useExpressServer(app, {
  controllers: [__dirname + "/controllers/*.js"]
});

// Starting a express server
app.listen(app.get("port"), () => {
  console.log("App is running at http://localhost:%d", app.get("port"));
  console.log("Build Environment (BUILD_ENV): ", process.env.BUILD_ENV);
});

module.exports = app;