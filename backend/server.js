const express = require("express");
const cors = require('cors');
const app = express();
const multer = require("multer");
// const path = require('path');
// const fs = require('fs/promises');
app.use(cors());
app.use('/music', express.static("Uploads"));

// mongodb+srv://mehrajatinsingh112:<password>@cluster1.yydufxj.mongodb.net/

// const musicDirectory = path.join(__dirname, 'Uploads');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });
// app.get("/music",async(req,res)=>{
//     try{
//         const files = await fs.readdir(musicDirectory);
//         const mp3Files = files.filter(file=> path.extname(file)==='.mp3');
//         res.json({songs: mp3Files});
//     }
//     catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });

app.post("/upload", upload.array("musicFiles"), (req, res) => {
    // res.writeHead({"Content-type":"audio/mp3"});
    res.send("File is uploaded succesfully!");
})

app.get("/", (req, res) => {
    res.writeHead({ "Content-type": "application/json" });
    res.send('Hello! there');
})

app.listen(3000, () => {
    console.log(`Server is running at port 3000`);
})
// const express = require("express"); const cors = require('cors'); const app = express(); const multer = require("multer"); app.use(cors()); app.use('/music',express.static("Uploads"));const storage = multer.diskStorage({ destination: (req, file ,cb)=>{ cb(null,'Uploads/'); }, filename: (req,file,cb)=>{ cb(null,file.originalname); }, });const upload = multer ({storage}); app.post("/upload",upload.array("musicFiles"),(req,res)=>{ res.send("File is uploaded succesfully!"); // res.writeHead({"Content-type":"audio/mp3"}); }) app.get("/" , (req , res)=>{ // res.writeHead({"Content-type":"audio/mp3"}); res.send('Hello! there'); }) app.listen(3000 , ()=>{ console.log(Server is running at port 3000); })