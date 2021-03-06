

var mysql = require('mysql');

var con = mysql.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password: 'Nodeaws@1419',
		database: 'dbchannel'
	}
);

con.connect(function (err){
	if(!err)
		console.log("DB Connected");
	else
		console.log("Error");
});


const express = require('express');
const bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json());

app.listen(8080, ()=>console.log('Express Server Started.'));

//Listen
app.get('/api/speciality', (req,res)=>{
	var sql = 'SELECT * FROM speciality';
	con.query(sql, (err,rows,fields)=>{
		if(!err)
			res.send(rows);
		else
		console.log(err);
	});
});


//GET
app.get('/api/speciality/:id', (req,res)=>{
        var sql = 'SELECT * FROM speciality WHERE id=?';
        con.query(sql, [req.params.id] , (err,rows,fields)=>{
                if(!err)
                        res.send(rows);
                else
                console.log(err);
        });
});

//DELETE
app.delete('/api/speciality/:id', (req,res)=>{
        var sql = 'DELETE FROM speciality WHERE id=?';
        con.query(sql, [req.params.id] , (err,rows,fields)=>{
                if(!err)
                        res.send(rows);
                else
                console.log(err);
        });
});

//POST
app.post('/api/speciality', (req,res)=>{
        var sql = 'INSERT INTO speciality (name) VALUES (?)';
        con.query(sql, [req.body.name] , (err,rows,fields)=>{
                if(!err)
                        res.send("Insert Success");
                else
                console.log(err);
        });
});
