
require("../config/db.config");

const mongoose = require("mongoose")

const Measure = require("../models/measure.model");

Measure.deleteMany().then(() => {
  const measures = [];

  for (let index = 0; index < 6; index++) {
    measures.push({
      value: `${100 * index} km → ${ 62.14 * index} miles`,
    });
  }

  Measure.create(measures).then(() => {
    console.info("Measures created");
    mongoose.disconnect()
    .then(() => {
      console.info(`App disconnected successfully from DB`);
    })
    .catch((error) => {
      console.error(`An error occurred while trying to disconnect from DB ${error}`);
    })
  });
});
