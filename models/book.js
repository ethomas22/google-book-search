const mongoose = require("mongoose");

module.exports = mongoose.model("book", new mongoose.Schema({
    title: String, authors: Array, description: String, image: String, link: String
}));
