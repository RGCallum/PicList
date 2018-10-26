const applicationController = {
    index: (req, res) => {
        res.render('app/index', { title: 'PicList' })
    }
}
module.exports = applicationController