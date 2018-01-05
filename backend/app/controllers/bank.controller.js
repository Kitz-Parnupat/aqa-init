exports.list = function (req, res) {
    r.table('course')
        .coerceTo('array')
        .run()
        .then(function (data) {
            res.json(data)
        })
}