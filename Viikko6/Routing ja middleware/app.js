const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Middleware funktio
app.use(
    function(req,res,next){
        console.log('Minut suoritetaan aina');
        next();
    }
);

app.get('/',
    function(request, response){
        response.send('Hello World');
    }
);

app.use(
    function(req,res,next){
        console.log('Minä olen middleware 2');
        next();
    }
);

app.get('/example',
    function(request,response){
        response.send('I am example');
        console.log('I am example');
    }
);

app.get('/example/:name',
    function(request,response){
        response.send('Hello '+request.params.name);
    }
);

app.get('/example2/:firstName/:lastName',
    function(request, response){
        response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);

app.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);
app.use(
    function(req,res,next){
        console.log('The common middleware called');
        next();
    }
);

app.listen(3000,
    function() {
        console.log('Server running on port 3000');
    }
);