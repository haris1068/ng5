var express = require ('express');
var app = express();

app.use(express.static(__dirname + '/../dist/ng5'));

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/../dist/ng5/index.html');
});

//app.listen(port, () => console.log('Mocks API listening on port 3000!'))
app.listen(4000, () => console.log('Angular Page listening on port 4000!'));
