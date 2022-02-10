const use = require ('../models/use')
var jwt = require('jsonwebtoken');
const { monggoosetoObiect } = require('./mongoose')
const { utilmoogosetoObject } = require('./mongoose')

class login {
    index(req, res, next) {
        res.render('login', { layout: 'login' })
    }
    login(req, res, next) {
        use.findOne({ email : req.body.email, password : req.body.password })
        
            .then( data => {
                if(data){                    
                    var token = jwt.sign({ _id : data._id }, 'mk');
                    const name= data.name
                    const dataone = { 
                        data,
                        token,
                        name
                    }
                    res.render('admin', { dataone })         
                }
                else{
                    res.status(500).json('đăng nhập thất bại')

                }
            }    
            )
            .catch(err =>{
                console.log(err)
                res.status(500).json('Lỗi server')
            })
        
    }
}

module.exports = new login;