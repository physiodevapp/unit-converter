const Measure = require("../models/measure.model");
const createError = require("http-errors");

module.exports.exists = (req, res, next) => {
  Measure.findById ( req.params.measureId )
    .then((measure) => {
      if (measure) {
        req.measure = measure;
        next();
      } else {
        next(createError(404, "Resource not found"))
      }
    })
    .catch(next);
};
