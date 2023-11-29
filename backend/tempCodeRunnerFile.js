app.get("/music",async(req,res)=>{
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