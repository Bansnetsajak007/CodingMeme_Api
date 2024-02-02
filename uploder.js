import mongoose from "mongoose";
import fs from "fs";
import readline from "readline";

import Meme from "./model.js";

const uplodeFile = async () =>{
const filePath = './imagelink.txt';

const readStream = fs.createReadStream(filePath);
const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity
});

const memeData = [];

rl.on('line', line => {
    memeData.push({ imageUrl: line.trim() }); 
});


rl.on('close', async () => {
    memeData.forEach(async (meme, index) => {
        try {
            const newMeme = new Meme({ name: `meme${index + 1}`, imageUrl: meme.imageUrl });

            // Save the meme to the database
            await newMeme.save();
            console.log(`Meme ${index + 1} inserted successfully.`);
        } catch (error) {
            console.error(`Error inserting meme ${index + 1}:`, error);
        }
    });
})};

export default uplodeFile;
