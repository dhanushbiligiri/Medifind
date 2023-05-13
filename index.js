var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
    host:'localhost',
    port:'8898',
    user:'root',
    password:'root',
    database:'medifind',
});

var server = app.listen(4545, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("start");
});

con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
})


app.get("/users", function(req,res){
    con.query("select * from user", function(error, rows, fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
});
}); 

app.get("/wishlist", function(req,res){
    con.query("select * from Wishlist", function(error, rows, fields){
        if(error) console.log(error);
        
            console.log(rows);
            res.send(rows);
        
});
});

app.get("/wishlistAvailable", function(req,res){
    con.query("select * from WishListAvailable", function(error, rows, fields){
        if(error) console.log(error);
        
            console.log(rows);
            res.send(rows);
            
        });
});

app.get("/cart", function(req,res){
    con.query("select * from Cart", function(error, rows, fields){
        
        if(error) console.log(error);
        console.log(rows.length);
        if(rows.length===0)
        {
            res.send({Msg:"Null"});
        }else{
            console.log(rows);
            var total =0;
            const len = rows.length;
            
            for(var i=0;i<len;i++){
                total = total + (rows[i].Price);
            }
            console.log(total);
            
            res.send({Rows:rows,Msg:"Not Null",Total:total});
        }
            
        });
});

app.post("/orderRetrive", async function(req,res){
    
    const userName1 = req.body.Name;
    console.log(req.body)
    console.log(userName1)
    const tableOrder = userName1+"_orders";
    console.log(tableOrder)
    // await new Promise(resolve => setTimeout(resolve, 3000));
    con.query(`select Medicine, Qty, Time  from ${tableOrder}`, function(error, rows, fields){
        
        if(error) console.log(error);
            
            console.log(rows)
            res.send({Rows:rows});
            
        });
});


app.post("/fecthOrdersMerchant", async function(req,res){
    
   const store = req.body.Store;
   console.log(store)
    con.query(`SELECT DISTINCT(Username) ,Time  FROM ${store}_orders;`, function(error, rows, fields){
        
        if(error) console.log(error);
            
            console.log(rows)
            res.send(rows);
            
        });
});

app.post("/fetchSeparateOrder", async function(req,res){
    
    const store = req.body.Store;
    const Username = req.body.Username;
    console.log(store)
     con.query(`SELECT Medicine, Qty, Price FROM ${store}_orders where Username = "${Username}";`, function(error, rows, fields){
         
         if(error) console.log(error);
             
             console.log(rows)
             res.send(rows);
             
         });
 });


app.post("/search", async function(req,res){
    
    const store = req.body.Value;
    console.log(store)
     con.query(`SELECT * FROM MerchantCred where Store_Name Like  "${store}%";`, function(error, rows, fields){
         
         if(error) console.log(error);
             
             console.log(rows)
             res.send(rows);
             
         });
 });

 app.post("/medicines", async function(req,res){
    
    var store = req.body.Store;
    store = store.replace(/ /g,"_");
    console.log(store)
     con.query(`SELECT * FROM ${store} ;`, function(error, rows, fields){
         
         if(error) console.log(error);
             
             console.log(rows)
             res.send(rows);
             
         });
 });

 app.post("/medicinesCat", async function(req,res){
    
    var store = req.body.Store;
    var cat = req.body.Cat;
    store = store.replace(/ /g,"_");
    console.log(store)
    console.log(cat)
     con.query(`SELECT * FROM ${store} where Category = "${cat}" ;`, function(error, rows, fields){
         
         if(error) console.log(error);
             
             console.log(rows)
             res.send(rows);
             
         });
 });

app.post("/fetchCatMed", async function(req,res){
    
    var Category = req.body.Cat;
    Category =Category.replace(/ /g,"_");
    console.log(Category)

    
    con.query(`select Medical from medical_stores where ${Category} = "yes"`, function(error, rows, fields){
        
        if(error) console.log(error);
            if(rows.length===0)
            {
                res.send({Msg:"No Data"})
            }else{
            console.log(rows)
            res.send({Rows:rows,Msg:""});
            }
        });
});

app.post("/wishlistDelete", async function(req,res){
    const medName = req.body.Name;
    console.log("med "+medName);
    con.query(`DELETE FROM Wishlist WHERE Medicine = '${medName}'`, function(error, rows, fields){
        if(error) console.log(error);
        else{
            // console.log("After deleteing"+rows);
        
        }
    });
    con.query("select * from Wishlist", function(error, rows, fields){
        if(error) console.log(error);
        else{
            console.log("index");
            console.log(rows)
            res.send(rows);
        }
    });
}); 

app.post("/delAva", async function(req,res){
    const medName = req.body.Name;
    console.log("med "+medName);
    con.query(`DELETE FROM WishListAvailable WHERE Medicine = '${medName}'`, function(error, rows, fields){
        if(error) console.log(error);
        else{
            // console.log("After deleteing"+rows);
        
        }
    });
    con.query("select * from WishListAvailable", function(error, rows, fields){
        if(error) console.log(error);
        else{
            console.log("index");
            console.log(rows)
            res.send(rows);
        }
    });
}); 

app.post("/wishlistToCart", async function(req,res){
    console.log("hereeeee")
    let Message ="";
    const medName = req.body.Name;
    const Store = req.body.Store;
    console.log("med "+medName);
    console.log("med "+Store);
    con.query(`DELETE FROM WishListAvailable WHERE Medicine = '${medName}'`, function(error, rows, fields){
        if(error) console.log(error);
        else{
            // console.log("After deleteing"+rows);
        
        }
    });
    con.query(`TRUNCATE TABLE cart`, function(error, rows, fields){
        if(error) console.log(error);
        else{
            // console.log("After deleteing"+rows);
        
        }
    });
    var price = 0;
    con.query(`SELECT Price FROM ${Store} WHERE Medicine = "${medName}"`, function(error, rows, fields){
        if(error){
            console.log(error)
       }
       else{
        console.log(rows[0].Price)
        price = rows[0].Price;
       }
    });
    con.query(`INSERT INTO Cart (Medicine, StoreName, Qty,Price)
    VALUES ("${medName}","${Store}",1,${price});`, function(error, rows, fields){
        if(error){
            console.log(error)
           
       }
       else{
           Message="Added to cart";
           console.log("Createddddddd");
        con.query("select * from WishListAvailable", function(error, rows, fields){
            if(error) console.log(error);
            else{
                console.log("index");
                console.log(rows)
                res.send({Rows:rows,Msg:Message});
            }
        });
        
       }

    });
}); 

app.post("/medicalToCart", async function(req,res){
    console.log("hereeeee")
    let Message ="";
    const medName = req.body.Name;
    const Store = req.body.Store;
    console.log("med "+medName);
    console.log("med "+Store);
    
    con.query(`TRUNCATE TABLE cart`, function(error, rows, fields){
        if(error) console.log(error);
        else{
            // console.log("After deleteing"+rows);
        
        }
    });
    var price = 0;
    con.query(`SELECT Price FROM ${Store} WHERE Medicine = "${medName}"`, function(error, rows, fields){
        if(error){
            console.log(error)
       }
       else{
        console.log(rows[0].Price)
        price = rows[0].Price;
       }
    });
    con.query(`INSERT INTO Cart (Medicine, StoreName, Qty,Price)
    VALUES ("${medName}","${Store}",1,${price});`, function(error, rows, fields){
        if(error){
            console.log(error)
           
       }
       else{
           Message="Added to cart";
           console.log("Createddddddd");
        con.query("select * from WishListAvailable", function(error, rows, fields){
            if(error) console.log(error);
            else{
                console.log("index");
                console.log(rows)
                res.send({Rows:rows,Msg:Message});
            }
        });
        
       }

    });
}); 

app.post("/sameCart", async function(req,res){
    let Message ="";
    const medName = req.body.Name;
    const Store = req.body.Store;
    console.log("med "+medName);
    console.log("med "+Store);
    var prices =0;
    con.query(`DELETE FROM WishListAvailable WHERE Medicine = '${medName}'`, function(error, rows, fields){
        if(error) console.log(error);
        else{
            // console.log("After deleteing"+rows);
        
        }
    });
    
    con.query(`SELECT Price FROM ${Store} WHERE Medicine = "${medName}"`, function(error, rows, fields){
        if(error){
            console.log(error)
       }
       else{
        console.log("price")
        console.log(rows[0].Price)
        prices = rows[0].Price;
        console.log((prices))
       }
    });
    con.query(`INSERT INTO Cart (Medicine, StoreName, Qty, Price)
    VALUES ("${medName}","${Store}",0,${prices});`, function(error, rows, fields){
        if(error){
            console.log(error)
            
       }
       else{
           Message="Added to cart";
           console.log("price2")
           console.log((prices))
        //    console.log("Createddddddd");
        con.query("select * from WishListAvailable", function(error, rows, fields){
            if(error) console.log(error);
            else{
                console.log("index");
                console.log(rows)
                res.send({Rows:rows,Msg:Message});
            }
        });
        
       }

    });
}); 

app.post("/sameCartMedStore", async function(req,res){
    let Message ="";
    const medName = req.body.Name;
    const Store = req.body.Store;
    const prices = req.body.Price;
    console.log("med "+medName);
    console.log("med "+Store);
    console.log("med "+prices);
    // var prices =0;
    
    // con.query(`SELECT Price FROM ${Store} WHERE Medicine = "${medName}"`, function(error, rows, fields){
    //     if(error){
    //         console.log(error)
    //    }
    //    else{
    //     console.log("price")
    //     console.log(rows[0].Price)
    //     prices = rows[0].Price;
    //     console.log((prices))
    //    }
    // });
    con.query(`INSERT INTO Cart (Medicine, StoreName, Qty, Price)
    VALUES ("${medName}","${Store}",1,${prices});`, function(error, rows, fields){
        if(error){
            console.log(error)
            
       }
       else{
           Message="Added to cart";
           console.log("price2")
           console.log((prices))
        //    console.log("Createddddddd");
        con.query(`select * from ${Store}`, function(error, rows, fields){
            if(error) console.log(error);
            else{
                console.log("index");
                console.log(rows)
                res.send({Rows:rows,Msg:Message});
            }
        });
        
       }

    });
}); 

app.post("/addMedToStock", async function(req,res){
    let Message ="";
    const medName = req.body.Name;
    const Qty = req.body.Qty;
    const prices = req.body.Price;
    const Category = req.body.Category;
    const Store = req.body.Store;
    console.log("med "+medName);
    console.log("med "+Qty);
    console.log("med "+prices);
    console.log("med "+Category);
    console.log("med "+Store);
    // var prices =0;
    
    con.query(`INSERT INTO ${Store} (Medicine, Qty, Price, Category) VALUES ("${medName}",${Qty},${prices},"${Category}");`, function(error, rows, fields){
        if(error){
            console.log(error)
            
       }
       else{
           Message="Added to Stock";
           
           res.send({Msg:Message});
        
        
       }

    });
}); 

app.post("/updateMedToStock", async function(req,res){
    let Message ="";
    const medName = req.body.Name;
    const Qty = req.body.Qty;
    const Store = req.body.Store;
    console.log("med "+medName);
    console.log("med "+Qty);
    console.log("med "+Store);
    // var prices =0;
    
    con.query(`UPDATE ${Store} SET Qty = ${Qty} WHERE Medicine = "${medName}";`, function(error, rows, fields){
        if(error){
            console.log(error)
            
       }
       else{
           Message="Updated to Stock";
           
           res.send({Msg:Message});
        
        
       }

    });
}); 

app.post("/addToWishlist", async function(req,res){
    let Message ="";
    const medName = req.body.Name;
    console.log("med "+medName);
    
    con.query(`INSERT INTO Wishlist (Medicine)
    VALUES ("${medName}");`, function(error, rows, fields){
        if(error){
            console.log(error)
           
       }
       else{
           Message="Added to cart";
           res.send({Msg:Message});
        
       }

    });
}); 

app.post("/checkOut", async function(req,res){
    var c = "";
    var cc ="";
    cc =  new Date(new Date().getTime() + 30*60*1000).toLocaleTimeString();
    c = new Date().toLocaleTimeString() 
    console.log(c);
    console.log(cc);
    let Message ="";
    const userName = req.body.Name;
    console.log("med "+userName);
    console.log(req.body.Order);
    const order = req.body.Order;
    console.log("order")
    console.log(order[0].StoreName)
    const st = order[0].StoreName;
    const tableName = userName+"_orders";
    console.log(tableName)
    let values=order.reduce((o,a)=>{
        let ini=[];
        // ini.push(a.StoreName);
        ini.push(a.Medicine);
        ini.push(a.Qty);
        ini.push(a.Price);
        ini.push(userName)
        ini.push(cc)
        o.push(ini);
        return o
  },[])
  let values2=order.reduce((o,a)=>{
    let ini=[];
    // ini.push(a.StoreName);
    ini.push(st);
    ini.push(a.Medicine);
    ini.push(a.Price);
    ini.push(a.Qty)
    ini.push(cc)
    o.push(ini);
    return o
},[])
    console.log(values);
    console.log(values2);
    var sql = `INSERT INTO ${st}_orders ( Medicine, Qty, Price, Username, Time ) VALUES ?`;
    con.query(sql, [values], function (err, result) { //pass values array (from above)  directly here
    if (err) throw err;
        // console.log("Number of records inserted: " + result.affectedRows);
                // res.send({Msg:"Placed"})
        
  });
  var sql = `INSERT INTO ${userName}_orders ( Medical_Store, Medicine, Price, Qty,Time ) VALUES ?`;
    con.query(sql, [values2], function (err, result) { //pass values array (from above)  directly here
    if (err) throw err;
        // console.log("Number of records inserted: " + result.affectedRows);
                // res.send({Msg:"Placed"})
        
  });
  con.query(`TRUNCATE TABLE cart`, function(error, rows, fields){
    if(error) console.log(error);
    else{
        // console.log("After deleteing"+rows);
        res.send({Msg:"Placed"})
    }
});
});
    
    // con.query(`INSERT INTO  "${tableName}
    // VALUES ("${tableName}");`, function(error, rows, fields){
    //     if(error){
    //         console.log(error)
           
    //    }
    //    else{
    //        Message="Added to cart";
    //        res.send({Msg:Message});
        
    //    }

    // });


app.post("/increaseMed", async function(req,res){
    let Message ="";
    const medName = req.body.Name;
    const medStore = req.body.Store;
    const symbol = req.body.Work;
    console.log("med "+medName);
    console.log("med"+medStore);
    console.log("med "+symbol);
    var price =0;
    
    con.query(`SELECT Qty, Price FROM ${medStore} WHERE Medicine = "${medName}"`, function(error, rows, fields){
        if(error){
            console.log(error)
           
       }
       else{
           Message="Added to cart";
           console.log(rows)
           console.log(rows[0].Price);
           console.log(rows[0].Qty);
           const Q = rows[0].Qty;
           price = rows[0].Price;
           console.log("price"+Q)
           con.query(`SELECT Qty FROM Cart WHERE Medicine = "${medName}"`, function(error, rows, fields){
            if(error){
                console.log(error)
               
           }
           else{
               Message="Added to cart";
               console.log(rows[0].Qty);
               var CartQ = rows[0].Qty
               console.log("Cart"+CartQ)
               if(symbol==="-"){
                CartQ = CartQ - 1;
                console.log(CartQ)
                price=price*CartQ;
                if(CartQ === 0){
                    //delete the medicine from cart
                    con.query(`DELETE FROM Cart WHERE Medicine = '${medName}'`, function(error, rows, fields){
                        if(error) console.log(error);
                        else{
                            
                                    con.query("select * from Cart", function(error, rows, fields){
                                        if(error) console.log(error);
                                        else{
                                            if(rows.length===0){
                                                
                                                res.send({Rows:rows,Total:total,Msg:"Null"});
                                            }else{
                                            var total =0;
                                            const len = rows.length;
                                            
                                            for(var i=0;i<len;i++){
                                                total = total + (rows[i].Price);
                                            }
                                            console.log(total);
                                            console.log(rows);
                                            res.send({Rows:rows,Total:total,Msg:""});
                                        }
                                        }   
                                        });
                                
                              
                        }
                    });
                    
                }
                
            }
               if(Q>CartQ){
                //Stock Avaliable
                if(symbol==="+"){
                CartQ = CartQ + 1;
                price =price*CartQ;
                console.log(CartQ)
                }
                
                
                con.query(`UPDATE Cart SET Qty = ${CartQ}, Price = ${price} WHERE Medicine ="${medName}"`, function(error, rows, fields){
                            if(error){
                                console.log(error)
                            
                        }
                        else{
                            // Message="Added to cart";
                            // res.send({Msg:Message});
                            con.query("select * from Cart", function(error, rows, fields){
                                if(error) console.log(error);
                                else{
                                    var total =0;
                                    const len = rows.length;
                                    
                                    for(var i=0;i<len;i++){
                                        total = total + (rows[i].Price);
                                    }
                                    console.log(total);
                                    console.log(rows);
                                    res.send({Rows:rows,Total:total,Msg:""});
                                }  
                        });
                            
                        }

                        });
                
               }
               else{
                console.log("Limit")
                con.query("select * from Cart", function(error, rows, fields){
                    if(error) console.log(error);
                    else{
                        var total =0;
                        const len = rows.length;
                        
                        for(var i=0;i<len;i++){
                            total = total + (rows[i].Price);
                        }
                        console.log(total);
                        console.log(rows);
                        res.send({Rows:rows,Total:total,Msg:"Limit"});
                    }  
            });
                
               }
            //    res.send(rows);
            
           }
        });
        //    res.send(rows);
        
       }

    });
}); 

app.post("/customerSignup", async function(req,res){
    const Name = req.body.Name;
    let Message ="";
    
    
    con.query(`SELECT Username FROM CustomerCred WHERE username = '${Name}'`, async function(err, result, field){
        if(result.length === 0){
            console.log("Does not exist");
            const Email = req.body.Email;
            const Password = req.body.Password;
            const Aadhar_no = req.body.Aadhar;
            const Contact = req.body.Contact;
            con.query(`INSERT INTO CustomerCred (Username, Email, Password, Aadhar_no, Contact)
            VALUES ("${Name}","${Email}","${Password}",${Aadhar_no},${Contact});`, async function(error, res){
                if(error){
                     console.log(error)
                    
                }
                else{
                    Message="Created";
                    console.log("Createddddddd");
                    con.query(`CREATE TABLE ${Name}_cart (Medicine varchar(255), StoreName varchar(255), Qty int, Price int)`, async function(error, res){
                        if(error){
                            console.log(error)
                            
                        }
                        else{
                            con.query(`CREATE TABLE ${Name}_orders (Medical_Store varchar(255), Medicine varchar(255), Price int, Qty int, Time varchar(255))`, async function(error, res){
                                if(error){
                                    console.log(error)
                                    
                                }
                                else{
                                   
                                }
                            })
                        }
                    })
                Message="Created";
                console.log("Createddddddd");
                
            }
        })
                   
            
        } else {  
            console.log("This user exists"); 
            Message="Not Created";
            
        }
        res.send({Name:Name,Msg:Message});
    })
    
})

app.post("/merchantSignup", async function(req,res){
    const Name = req.body.Name;
    var st = req.body.Store;
    st=st.replace(/ /g,"_");
    console.log(st)
    let Message ="";
    
    
    con.query(`SELECT Store_Name FROM MerchantCred WHERE username = '${Name}'`, async function(err, result, field){
        if(result.length === 0){
            console.log("Does not exist");
            const Email = req.body.Email;
            const Password = req.body.Password;
            const Aadhar_no = req.body.Aadhar;
            const Contact = req.body.Contact;
            con.query(`INSERT INTO MerchantCred (Username, Email, Password, Store_Name, Aadhar_no, Contact)
            VALUES ("${Name}","${Email}","${Password}","${st}",${Aadhar_no},${Contact});`, async function(error, res){
                if(error){
                     console.log(error)
                    
                }
                else{
                    con.query(`CREATE TABLE ${st} (Medicine varchar(255), Qty int, Price int, Category varchar(255))`, async function(error, res){
                            if(error){
                                console.log(error)
                                
                            }
                            else{
                                con.query(`CREATE TABLE ${st}_orders (Medicine varchar(255), Qty int, Price int, Username varchar(255), Time varchar(255))`, async function(error, res){
                                    if(error){
                                        console.log(error)
                                        
                                    }
                                    else{
                                       
                                    }
                                })
                            }
                        })
                    Message="Created";
                    console.log("Createddddddd");
                    
                }
            })
            
        } else {  
            console.log("This user exists"); 
            Message="Not Created";
            
        }
        res.send({Name:Name,Msg:Message});
    })
    
})

app.post("/customerLogin", async function(req,res){
    const Name = req.body.Name;
    const Password = req.body.Password;
    console.log(Name)
    let Message ="";
    
    
    con.query(`SELECT Username,Password,Contact FROM CustomerCred WHERE username = '${Name}'`, async function(err, result, field){
        if(result.length === 0){
            console.log("Does not exist");
            Message="Not Authenticated";
            res.send({Msg:Message});
        } else {  
            console.log("This user exists"); 
            console.log(result)
            console.log(result[0].Username);
            console.log(result[0].Password);
            const user = result[0].Username;
            const pwd = result[0].Password;
            const phnum = result[0].Contact;
            if((Name===user)&&(Password===pwd))
            {
                Message="Authenticated";
                // con.query(`TRUNCATE TABLE cart`, function(error, rows, fields){
                //     if(error) console.log(error);
                //     else{
                //         // console.log("After deleteing"+rows);
                    
                //     }
                // });

            }
            else{
                Message="Not Authenticated";
            }
            res.send({Name:user,Msg:Message,Ph:phnum});
        }
        console.log("hello"+Message)
    })
    
})


app.post("/merchantLogin", async function(req,res){
    const Name = req.body.Name;
    const Password = req.body.Password;
    console.log(Name)
    let Message ="";
    
    
    con.query(`SELECT Username,Password,Store_Name FROM MerchantCred WHERE username = '${Name}'`, async function(err, result, field){
        if(result.length === 0){
            console.log("Does not exist");
            Message="Not Authenticated";
            res.send({Msg:Message});
        } else {  
            console.log("This user exists"); 
            console.log(result)
            console.log(result[0].Username);
            console.log(result[0].Password);
            const user = result[0].Username;
            const pwd = result[0].Password;
            const store = result[0].Store_Name;
            if((Name===user)&&(Password===pwd))
            {
                Message="Authenticated";
            }
            else{
                Message="Not Authenticated";
            }
            res.send({Name:user,Msg:Message,st:store});
        }
        console.log("hello"+Message)
    })
    
})