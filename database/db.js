import { config } from 'dotenv';
import mongoose from "mongoose";
config();

export const startDB = () => {
    console.log("trying to connect to database");

    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;

     mongoose
        .connect(
            `mongodb+srv://${user}:${password}@cluster0.obb4chy.mongodb.net/?retryWrites=true&w=majority`
        )
        .then(() => console.log("connection success"))
        .catch(error => console.log("Erro: "+error));
}