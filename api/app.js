require("dotenv").config();
require("./config/db.config");

const mongoose = require("mongoose");

const logger = require("morgan");

const express = require("express");
const app = express();

const router = require("./config/routes.config");

const cors = require("./config/cors.config")

const createError = require("http-errors");

app.use(cors);

app.use(express.json());

app.use(logger("dev"));

app.use('/api-measures/v1', router);

app.use((req, res, next) => {
  next(createError(404, "Resource not found"));
});
app.use((error, req, res, next) => {
  // console.error('Errors handling', error);
  if (error instanceof mongoose.Error.ValidationError) {
    error = createError(400, error)  
  } else if (error instanceof mongoose.Error.CastError && error.path === "_id") {
    const resourceModel = error.model().constructor.modelName;
    error = createError(404, `${resourceModel} not found`);
  } else if (!error.status) {
    error = createError(500, error)
  }

  const data = {
    message: error.message
  }

  if (error.errors) {
    const errors = Object.keys(error.errors)
    .reduce((errors, errorKey) => {
      errors[errorKey] = error.errors[errorKey]?.message || error.errors[errorKey];
      return errors;
    });

    data.errors = errors
  }

  res.status(error.status).json(data);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
