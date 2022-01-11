const use = require ('../models/use')
var jwt = require('jsonwebtoken');

class home {
    index(req, res, next) {
        res.render('login', { layout: 'login' })
    }
    login(req, res, next) {
        console.log(req.body)
        use.findOne({ email : req.body.email, password : req.body.password })
      
            .then( data => {
                if(data){
                    
                    var token = jwt.sign({ _id : data._id }, 'mk');
                    res.json( token )

                }
                else{
                    res.status(500).json('đăng nhập thất bại')
                }
            }    
            )
            .catch(err =>{
                console.log('thất bại')
                res.status(500).json('Lỗi server')
            })
    }
}

module.exports = new home;