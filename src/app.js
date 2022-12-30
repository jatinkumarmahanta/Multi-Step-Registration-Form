const  express = require('express');
const path= require("path")
const app = express();
require("./db/conn")

const Register = require("./models/registers")

const port = process.env.PORT || 2000;


app.use(express.json());
app.use(express.urlencoded({extended:false}));


const static_path= path.join(__dirname , "../public")
app.use(express.static(static_path))

// app.get('/', (req, res) =>{ 
//     res.send('Hello World!')
// });

app.get("/" , (req , res ) => {
    res.send("index");
})

app.post("/register" , async (req , res ) => {
   try{
  const reg = new Register({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    dob:req.body.dob,
    email:req.body.email,
    fatherfirstname:req.body.firstnamef,
    fatherlastname:req.body.lastnamef,
    motherfirstname:req.body.firstnamem,
    motherlastname:req.body.lastnamem,
    gender:req.body.gender,
    nationality:req.body.nationality,
    street:req.body.street,
    city:req.body.city,
    country:req.body.country,
    phone:req.body.phone,
    mob:req.body.mob,
    HSCName:req.body.hsc,
    HSC_Board:req.body.HSC_Board,
    HSCPercentage:req.body.hscp,
    SSCName:req.body.ssc,
    SSC_Board:req.body.SSC_Board,
    SSCPercentage:req.body.sscp,
    Current_Board:req.body.Current_Board,
    CurrentInstituteName:req.body.current,
    CurrentPercentage:req.body.currentp,
    Backloge:req.body.backlog,
  })
    Register= reg.save();
   res.status(201).send("index");

   

   }catch(e){
    res.status(400).send(e);
   }
})





app.listen(port, () =>{
console.log(`Example app listening on port ${port}!`)
});