import nextConnect from 'next-connect'
import multiparty from 'multiparty'

const postImage = nextConnect()

postImage.use(async (req, res, next) => {
  const form = new multiparty.Form()

  await form.parse(req, function (err, fields, files) {
    req.body = fields
    req.files = files
    next()
  })
})

export default postImage