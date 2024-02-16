import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ZedCartDB")
        .then(() => {
            console.log("Connected to database successfully");
        });
    } catch (error) {
        console.log(`Error connected to databse: ${error}`);
    }
};

export default connectDb;