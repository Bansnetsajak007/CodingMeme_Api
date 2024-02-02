import mongoose from "mongoose";

const memeSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: true
    },

    imageUrl: {
        type: "string",
        required: true
    },
});

const Meme = mongoose.model("Meme", memeSchema);

export default Meme;