const express=require("express");
const bodyParser=require("body-parser");
const path=require("path");
const date=require(path.join(__dirname,"/date.js"));


const app=express();
let items=["room Clean","web-D"];
let workItems=[];

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    let day=date();
   
    res.render("list",{listTitle:day,newListItems:  items});
});

app.post("/",function(req,res){
    let item = req.body.newItem;
    if(req.body.list==="Work"){
    workItems.push(item);
    res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }

    
});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newListItems:workItems});
});

app.post("/work",function(req,res){
  let item=res.body.newItem;
  workItems.push(item);
  res.redirect("/work");

});

app.get("/about",function(req,res){
res.render("about");
});
    


app.listen(3000 ,function(){
    console.log("server is esatblished succesfully");
});