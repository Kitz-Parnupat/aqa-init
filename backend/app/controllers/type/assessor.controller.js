exports.list = function (req, res) {
    r.table('type_assessor')
        .orderBy('id')
        .run()
        .then(function (data) {
            res.json(data)
        })
}