import { Router } from "express";
import { db } from "../db.js";
import { tokenGet } from "../lib/tokenSettings.js";
const router = Router();

router.get("/", async (req,res)=>{
   try{
      const [row, ] = await db.query("select * from messages where chatid = 1");
      if(!row[0]){
         res.json({data:"Bu chatda xabar mavjud emas"})
      }else{
         res.json(row);
      }
   }catch(e){
      res.status(500).send({ message: "Internal Server Error" });
   }
});

router.post("/create", async (req,res)=>{
   const {senderid,text} = req.body;
   try{
      const [row, ] = await db.query("insert into messages(senderid,text,chatid) values(?,?,1)",[senderid,text]);
      res.json({data: true})
   }catch(e){
      console.log(e)
      res.status(500).json({ message: "Internal Server Error" });
   }
});

/*router.get("/:token", async (req,res)=>{
   const token = req.params.token;
   try{
      const idd = tokenGet(token)
      const [user, ] = await db.query("select * from users where id = ?",[idd]);
      res.json(user[0]);
   }catch(e){
      res.status(500).send({ message: "Internal Server Error" });
   }
});
*/

export default router;