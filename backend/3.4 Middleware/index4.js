import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import morgan from "morgan";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(__dirname +"/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});


app.use(bodyParser.urlencoded({extended:true}));
app.post("/submit",(req,res)=>{
  console.log(req.body);
  res.send(req.body["street"]+req.body["pet"]+"❤️‍🔥");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
