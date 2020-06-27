const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const webhookRouter = require("./routes/webhook");

const app = express();
const port = 4000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/webhook", webhookRouter);

app.listen(port, () => {
  console.log(`Application is listening on port ${port}`);
});

module.exports = app;
