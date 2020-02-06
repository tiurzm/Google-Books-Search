const db = require("../models");
const axios = require("axios");

module.exports = {
    findAll: function(req, res) {
        axios
            .get("https://www.googleapis.com/books/v1/volumes?q={harry potter}")
            .then(res => console.log(res))
    }
};
