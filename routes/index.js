
var express = require("express");
const controller = require("../controllers/indexController.js");

var router = express.Router();

router.get("/", controller.home);
router.get("/brands/:idbrand", controller.models);
router.get("/infos/:idbrand/:idmodel", controller.infos);

module.exports = router;