var express = require('express');
var bodyParser= require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/people');
var cors = require('cors');
var Detail = mongoose.model('Detail',mongoose.Schema({
	Name:String,
	Age:Number,
	Gender:String,
	Mobile_number:Number
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname +'/client'));
app.use(cors());
app.get('/api/details',function(req,res){
	Detail.find(function(err,details){
	
		if(err)
			res.send(err);
		res.json(details);
		
	});
	
});
app.get('/api/details/:id',function(req,res){
	
	Detail.findOne({_id:req.params.id},function(err,detail){
	
		if(err)
			res.send(err);
		res.json(detail);
		
	});
});

app.post('/api/details',function(req,res){
	Detail.create(req.body,function(err,details){
	
		if(err)
			res.send(err);
		res.json(details);
		
	});
	
});
app.delete('/api/details/:id',function(req,res){
	
	Detail.findOneAndRemove({_id:req.params.id},function(err,detail){
	
		if(err)
			res.send(err);
		res.json(detail);
		
	});
});
app.put('/api/details/:id',function(req,res){
	var query = {
		Name:req.body.Name,
		Age:req.body.Age,
		Gender:req.body.Gender,
		Mobile_number:req.body.Mobile_number
	};
	Detail.findOneAndUpdate({_id:req.params.id},query,function(err,detail){
	
		if(err)
			res.send(err);
		res.json(detail);
		
	});
});
app.listen(3000,function(){
	console.log('server running on port 3000');
});