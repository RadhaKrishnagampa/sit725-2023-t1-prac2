var express = require("express")
var app = express()
var port = process.env.port || 3000;

app.listen(port, ()=>{
    console.log("App listening to: "+port)
})
app.get("/:addition/:number1/:number2", function(req,res){
    var addition = req.params.addition
    if(addition=="addition"){
	var number1 = parseInt(req.params.number1);
	var number2 = parseInt(req.params.number2);
	var result=number1+number2;
    res.send("The result is "+result)
}})    
