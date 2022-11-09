var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abcd@1234',
    database: 'student'
});
dbConn.connect();

app.get('/students', function (req, res) {
    dbConn.query('SELECT * FROM student', function (error, results, fields) {
        if (error) throw error;
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header("Access-Control-Allow-Credentials", true);
        return res.send(results);
    });
});

app.get('/student/:id', function (req, res) {
    let user_id = req.params.id;
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
    dbConn.query('SELECT * FROM student where id=?', user_id, function (error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });
});

app.post('/students', function (req, res) {
    let user_id = req.body.id;
    let user_name = req.body.name;
    let user_address = req.body.address;
    if (!user_id || !user_name || !user_address) {
        return res.status(400).send({ error: student, message: 'Please provide student id, name and address' });
    }
    dbConn.query("INSERT INTO student VALUES (?, ?, ?)", [user_id, user_address, user_name], function (error, results, fields) {
        if (error) throw error;
        return res.send('Student added successfully.');
    });
});

app.put('/student', function (req, res) {
    let user_id = req.body.id;
    let user_name = req.body.name;
    let user_address = req.body.address;
    if (!user_id || !user_name || !user_address) {
        return res.status(400).send({ error: student, message: 'Please provide student id, name and address' });
    }
    dbConn.query("UPDATE student SET name = ? ,address = ? WHERE id = ?", [user_name, user_address, user_id], function (error, results, fields) {
        if (error) throw error;
        return res.send('student-data has been updated.');
    });
});

app.delete('/student/:id', function (req, res) {
    let user_id = req.params.id;
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
    dbConn.query('DELETE FROM student WHERE id = ?', [user_id], function (error, results, fields) {
        if (error) throw error;
        return res.send('student-data has been deleted.');
    });
});

app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});
module.exports = app;