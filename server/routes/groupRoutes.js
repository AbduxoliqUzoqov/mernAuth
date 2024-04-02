import { Router } from "express";
import { db } from "../db.js";
const router = Router();



router.get("/", async (req,res)=>{
   try{
      const [chats, ] = await db.query("select * from chats");
      res.json(chats);
   }catch(e){
      res.status(500).send({ message: "Internal Server Error" });
   }
});

// Add User Chat Id 1
router.get("/chat", async (req,res)=>{
   const adduser = req.query.adduser;
   try{
      const [chats, ] = await db.query("select * from chats where chat_id = 1");
      const users = JSON.parse(chats[0].users);
      if(users.includes(parseInt(adduser))){
         res.json({ data: true })
      }else{
         users.push(parseInt(adduser));
         const newusers = JSON.stringify(users);
         const [neww,] = await db.query("UPDATE chats SET users = ? WHERE chat_id = 1",[newusers]);
         res.json({data : true});
      }
   }catch(e){
      res.status(500).send({ message: "Internal Server Error" });
   }
});

export default router;