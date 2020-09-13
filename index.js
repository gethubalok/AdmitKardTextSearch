const express=require('express');
const app=express();
const port = process.env.PORT || 3000;
const cookieparser=require('cookie-parser');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

// connect to DB..
// mongoose.connect('mongodb+srv://alok:alok@cluster0.atba1.mongodb.net/Text?retryWrites=true&w=majority', // took data from .env file
//     { useUnifiedTopology: true,useNewUrlParser: true }, 
// ()=>console.log('Connected to DB...')
// );
const db=require('./config/db');

// MiddleWares...
app.use(express.static('./assets'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cookieparser());


app.use('/',require('./routes/index'));

app.set('view engine','ejs');
app.set('views','./views'); 



app.listen(port,()=>console.log(`Server Up and running on ${port}`));


