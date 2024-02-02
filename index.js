//main server file
import  express  from "express";
import Meme from "./model.js";
import Dbconnection from "./Dbconfig.js";

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/memes', async (req, res) => {
    try{
        //gets all data from database
        // const memes = await Meme.find(); 

        const count = await Meme.countDocuments();
        const randIndex = Math.floor(Math.random() * count);
        const memes = await Meme.findOne().skip(randIndex).skip(randIndex).limit(1);
        res.json(memes);
    } catch(err) {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'});
    }
});


//correct appreach
Dbconnection().then(() => {
    app.listen(port, () => {
      console.log(`Server listining ${port}`)
    })
});