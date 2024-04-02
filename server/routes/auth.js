import { Router } from "express";
import { db } from "../db.js";
import { tokenSet } from "../lib/tokenSettings.js";
const router = Router();
//const bcrypt = require("bcrypt");
//const Joi = require("joi");

router.post("/login", async (req, res) => {
	try {
	   console.log("Req Body\n",req.body)
		const [user,] = await db.query("select * from users where email = ?",[req.body.email]);
		if (!user[0])
			return res.status(401).send({ message: "Email topilmadi" });

		if (req.body.password != user[0].password)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = await tokenSet(user[0].id,res);
		res.status(200).send({ data: token, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.post("/register", async (req, res) => {
	try {
	   const {email,ism,familiya,gender,password} = req.body;
	   const fullName = `${ism} ${familiya}`
      console.log("ReqBody: ",req.body)
		const [row,] = await db.query("select * from users where email = ?",[email]);
	//	console.log("user: ",user)
		if (row[0]){
		   res.status(409).send({ message: "Email band" });
		}else{
		  const boyProfilePic =
		  `https://avatar.iran.liara.run/public/boy?username=${ism}`;
		  const girlProfilePic =
		  `https://avatar.iran.liara.run/public/girl?username=${ism}`;
		  console.log(gender)
		  const usPic = gender =="erkak" ? boyProfilePic : girlProfilePic;
		   const [d,] = await db.query("insert into users(email,name,password,img) values(?,?,?,?)",[email,fullName,password,usPic]);
		   res.status(201).send({ message: "User created successfully" });
		
		}
	} catch (error) {
		res.status(404).send({ message: "Internal Server Error" });
	}
});



export default router;
