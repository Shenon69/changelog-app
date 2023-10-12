import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";  
import { protect } from "./modules/auth";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req,res,next)=>{
  req.shhhh_secret = "bunny";
  next();
})

app.get("/", (req, res) => {
  console.log("Hello from express");
  res.status(200);
  res.json({ message: "Hello express" });
});

app.use('/api',protect,router)

export default app;
