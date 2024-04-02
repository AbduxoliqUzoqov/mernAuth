const tokenSet = (id,res)=>{
   const random = Math.floor(Math.random() * 100000000000000);
   const token = `${id}${random}`;
   //console.log(token)
   res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: "strict",});
	return token;
}

const tokenGet = (token)=>{
   const id = Math.floor(token/100000000000000);
   //console.log(id)
   return id;
}
export {tokenSet,tokenGet}
