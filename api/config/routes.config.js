
const express = require("express");
const router = express.Router();
const measureCtrl = require('../controllers/measure.controller')
const measureMid = require("../middlewares/measure.middleware")

router.get("/measures", measureCtrl.list);

router.post("/measures/new", measureCtrl.create);

router.delete("/measures/:measureId", measureMid.exists, measureCtrl.delete);

module.exports = router;
