
const Measure = require("../models/measure.model");

module.exports.list = (req, res, next) => {
  Measure.find()
    .then((measures) => {
      res.status(200).json(measures);
    })
    .catch(next);
};

module.exports.create = (req, res, next) => {
  Measure.create({
    value: req.body.value,
    conversion: req.body.conversion,
  })
    .then((measure) => {
      res.status(201).json(measure);
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Measure.deleteOne({ _id: req.params.measureId })
    .then(() => {
      res.status(204).send();
    })
    .catch(next);
};
