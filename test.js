const axios = require("axios");
const { response } = require("express");

axios
  .get(
    "https://www.theguardian.com/international"
  )
  .then((response) => console.log("WORKED WAAMA", response.data.div))
  .catch((err) => console.log("ERROR", err));
