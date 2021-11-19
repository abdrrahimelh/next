// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { server } from "../../config";
var status, msg;
export default function handler(req, res) {
  const fetchComments = async () => {
    const { slug } = req.query;
    const response = await fetch(`${server}/` + slug);
    status = response.status;
    msg = response.statusText;
  };
  fetchComments();
  res.status(status).json({ name: msg });
}
