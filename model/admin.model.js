

import pool from '../db/connectDB.js';

export default class Admin{
    constructor(email ,password){
        this.email = email;
        this.password = password;
    }


authenticate(){
    return new Promise((resove , reject)=>{
        pool.getConnection((err , con)=>{
            if(!err){
                console.log("data : ",this.email, this.password);
                
                let sql = "select * from admin where email = ? and password = ? ";
                con.query(sql , [this.email, this.password],(err, result)=>{
                    console.log("result : ",result);
                    con.release();
                    if(err){
                        reject(err)
                    }else{
                        if(result.length !== 0){
                            resove(result);
                        }else{
                            reject("Id And Passwor not Found : ")
                        }
                    }
                    
                })
            }
            else{
                reject(err);
            }
        })
    })
}
}
