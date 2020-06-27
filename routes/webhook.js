var express = require("express");
var router = express.Router();

/* GET webhook. */
router.get("/", (req, res) => {
  res.json({ message: "Please send a POST request to this endpoint." });
});

/* POST webhook. */
router.post("/", (req, res) => {
  const data = req.body;

  res.json({ message: "Webhook response received", data });
});

module.exports = router;
