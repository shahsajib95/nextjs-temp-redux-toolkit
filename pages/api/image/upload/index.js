import nextConnect from "next-connect";
import postImage from "../../../../component/middleware/postImage";
const fs = require("fs");
// const resizeImg = require("resize-image-buffer");
// import sharp from "sharp";

const handler = nextConnect();
handler.use(postImage);


handler.post(async (req, res) => {
  const data = await fs.readFileSync(req.files.upload[0].path);
  console.log(data);
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
