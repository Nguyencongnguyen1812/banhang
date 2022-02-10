
var jwt = require('jsonwebtoken');;
const use = require('../models/use')

class check {
   checkLogin(req, res, next) {
       try{
          // console.log('Cookies: ', req.cookies.token)
         
           const id = jwt.verify(req.cookies.token, 'mk')
          use.findOne({ _id: id})
          .then(data=>{
              if(data){
                  req.data=data
                  next()
              }

          })
          .catch(err=>{
              res.status(500).json('token hong hợ lệ')
          })
           
            
       }catch(err){
           res.render('login')

       }

    }
    checkAdmin(req, res, next){
        
       const Role = req.data.role
       if(Role == 0){
        next()
       }else{
           res.send('bạn không có quyền')
       }   
    }
    checkCustomer(req, res, next){
        const Role = req.data.role
        if (Role == 1) {
            next()
        } else(
            res.send('bạn khong có quyền')
        ) 
        
    }
}
module.exports = new check;