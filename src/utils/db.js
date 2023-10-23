import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://sureshjangir902:0r3dxF4e9jgq4Jzf@cluster0.5t6tg24.mongodb.net/?retryWrites=true&w=majority");
  } catch (error) {
    throw new Error("Connection Failed");
  }
};

export default connect;
