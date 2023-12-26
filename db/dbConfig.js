import mongoose from "mongoose";
const mongoConnection = () => {
    mongoose.connect(process.env.MONGOURI).then(res => console.log("connected")).catch(err => console.log(err))
}

export default mongoConnection;