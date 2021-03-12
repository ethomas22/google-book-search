const db = require("../models/book")

module.exports = function (app) {
    app.get("/api/books"), function (req, res) {
        db.find()
        .then(function (book) {
            res.json(book)
        })
    }
    app.post("/api/books"), function (req, res) {
        db.create(req.body)
        .then(function (book){
            res.json(book)
        })

    }

    app.delete("/api/books/:id"), function (req, res) {
        db.findByIdAndDelete(req.params.id)
        .then(res.end)
    }
};