const express=require('express')
const app = express();
const port = 3000

//express.json();     //middleware

//loading middleware into the app(inbuilt middleware)
app.use(express.json());  //parses valid json to obj

 app.get('/',(req,res)=>{
    console.log(req.body);
    res.send('Hello World')
 })

 //not parsing properly before we used app.use()
 app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)   //output:undefined
 })

//now in body we've got json and we need to parse it first 