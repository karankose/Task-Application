import express from 'express';
import AdminRouter  from './routes/admin.route.js';
import TaskRouter from './routes/task.route.js';
import  bodyParser from 'body-parser';

const app = express();
const PORT = 8019;

// middleware
app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//router
app.use('/admin',AdminRouter);
app.use('/task',TaskRouter);






















app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`);
    console.log("http://localhost:8019/")
})