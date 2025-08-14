import "dotenv/config"
import express from "express";
import cors from "cors";
import router from "./routes.js"

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);


app.listen(process.env.Port, ()=>{
    console.log("Servidor rodando na porta: " + process.env.PORT)
})