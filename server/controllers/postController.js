const Post = require('../Model/Post')


exports.postController = (req, res) => {

    const username = req.body.username
    const post = req.body.post
    const id = req.body.id

    const pst = new Post({
        username: username,
        post: post,
        userId: id
    })
    pst.save()
        .then(result => {
            console.log(result)
            res.json({ message: 'succesful' })
        })
        .catch(err => console.log(err))
}

