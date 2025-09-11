import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://rayhanfardous:rayhan8314472@cluster0.rva7dsc.mongodb.net/food-delivery').then(()=>console.log("DB connected"));
}