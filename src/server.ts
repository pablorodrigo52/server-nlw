import express from 'express';

const app = express();

app.get('/hello', (request, response)=>{
    response.json({'name': 'Hello World'});
});
app.listen(3333);