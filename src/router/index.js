const routerHome = require('./home')
const routerLoai = require('./loai')
const routerLogin = require('./login')
const routerAdmin = require('./admin')


function router(app){
   
    app.use('/loai', routerLoai)
    app.use('/admin', routerAdmin)
    app.use('/login',routerLogin)
    app.use('/', routerHome)
}

module.exports = router;