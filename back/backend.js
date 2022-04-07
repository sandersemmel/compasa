import express from 'express';
import * as controller from './controller.js';
import path from 'path';


// TODO change paths when building? to serve built assets instead

const app = express();

app.use(express.static('front'))


app.get('/', function(req,res){

})

app.get('/app', function(req,res){
    //console.log("X",path.resolve())
    //let path = __dirname;
    //console.log(__dirname);
    res.sendFile(path.resolve()+'/front/index.html')
})


console.log("Started")




app.get('/test', async function(req,res){
    console.log("hello")
    //controller.createuser();
    try {
        let result = await controller.test();
        console.log("query result should be true but is: ",result);
        res.send("koira")
    } catch (error) {
        console.log(error);
    }

})


app.get('/getToken', async function(req,res){
    //await 
})



app.listen(3000);