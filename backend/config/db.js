import mongoose from "mongoose";

export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://arahman2001:arahman2001@arahman2001.0zc8xrf.mongodb.net/ABC').then(()=>console.log("DB Connected"));
}