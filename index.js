import express from 'express';
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();
const PORT = process.env.APP_PORT;



app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));



// Set path views
app.set("views", path.join(__dirname, "/views"));
const title = "HBD Web Page"
app.get('/',(req,res)=>{

    res.render('index',{
        title
    });
});


app.get('/main', (req,res)=>{
    
    res.render('mainGreeting',{
        title
    })
});



app.listen(PORT,()=>{
    console.log('run on port ', PORT);
});