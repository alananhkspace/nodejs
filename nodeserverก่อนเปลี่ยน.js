const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 8080

//Define Variables
var id = 65140322;
var status = "Single";
//Add Variables
var user_list = [
    {name: "Nester", address: "BKK", birth_year: 2003},
    {name: "Annie", address: "PKT", birth_year:1999},
    {name: "Winner", address: "CNK", birth_year:2022}
];

// Add feature bar
    var feature = [
        {
            img : "image/blake.jpg",
            side : " RWBY and pokemon picture"
        },
        {
            img : "image/blakeyang.png",
            side : "RWBY AU"
        }
    ]
// Add Content Font Variables
    var contentfont1 = "Digital art community"
    var contentfont2 = "By Patiparn Chirasutthiyarn"
//Set & Call EJS
app.set('view engine','ejs')
// connect folder
app.use(express.static('public'))

//Back-End NodeJS Display
app.get("/hello",(req,res) =>{
    res.send("Hello NodeJS Test!")
}) 

//New Font-End EJS Show HTML Display
app.get("/",(req,res) =>{
    res.render('index', {userid : id, status : status,
     obj_user_list : user_list
    })
})
// connect index2.ejs
app.get("/index2",(req,res)=>{
    res.render('index2', {obj_feature : feature,contentfont1: contentfont1,
    contentfont2 : contentfont2
    
} )
}) 

//Open Server
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})