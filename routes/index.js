const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  return res.status(200).json({ message: "Message here" });
});

module.exports = router;
