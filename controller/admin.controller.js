import pool from '../db/connectDB.js';
import Admin from '../model/admin.model.js';
export const signinPage  = ((req, res, next)=>{
    return res.render("signin");
});


export const signin = (req, res) => {
  console.log("body : ",req.body);
    let { email, password } = req.body;
       
    let admin = new Admin(email,password);
    
    
    admin.authenticate().then(result=>{
      console.log(result); 
      return result.length  ? res.render('Dashboard.ejs') : res.redirect('/admin/sign-in');
    }).catch(err=>{
      return res.render("error.ejs",)
    })
  };
  
