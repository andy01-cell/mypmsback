const express = require("express");

const router = express.Router();

const controller = require("../controller/IdentificationControllers")

router.post("/analyzer", controller.analyzer);

module.exports = router;