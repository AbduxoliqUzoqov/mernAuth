import { Router } from "express";
import { tokenGet } from "../lib/tokenSettings.js";
import { db } from "../db.js";
const router = Router();
//const bcrypt = require("bcrypt");

router.get("/u", async (req,res)=>{
   const [users,] = await db.query("select * from users");
   
   //setTimeout(()=>{
   res.json(users)
   //},1200):
});


router.get("/token/:token", async (req,res)=>{
   const token = req.params.token;
   try{
      const idd = tokenGet(token)
      const [user, ] = await db.query("select * from users where id = ?",[idd]);
      req.userid = idd;
      res.json(user[0]);
   }catch(e){
      
      res.status(500).send({ message: "Internal Server Error" });
   }
});

router.post("/chat/create", async (req,res)=>{
   //const iff = req.body.iff;
   const users = req.body.users;
   const users2 = JSON.stringify(JSON.parse(users).reverse());
   //const msgs = JSON.parse(req.body.msgs).slice(0,50);
   const [row, ] = await db.query("select * from chats where users = ? or users = ?",[users,users2]);
      console.log(users,users2);
   if(row[0]){
      res.status(401).send({ message: "yaxshi" });
   }else{
      const [s,] = await db.query("insert into chats(users, msgs) values(?,?)",[users,'[]']);
      res.json(s);
   }
});


export default  router;
