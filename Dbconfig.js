import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

const Dbconnection = async () => {
    const DB_URI = process.env.MONGO_URI;

    try{
        await mongoose.connect(`${DB_URI}`);
        console.log("Established connection with Database");
    } catch(e){
        console.log("Error connecting to Database");
        console.log(e);
    }
}

export default Dbconnection;