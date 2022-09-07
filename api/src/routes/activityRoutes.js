const { Router, json } = require("express");
const { postActivity } = require("../controllers/post.js");

const router = Router();

router.use(json());

router.post("/", postActivity);

module.exports = router;
