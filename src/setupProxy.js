const proxy = require('http-proxy-middleware');
// const bodyParser = require('body-parser')
// const userInfo = require('./mock/userInfo')

module.exports = function (app) {
    var userInfo = [
        {
            username: 'luo',
            password: '123'
        },
        {
            username: 'yxy',
            password: '123'
        },
        {
            username: 'tx',
            password: '123'
        },
        {
            username: 'zym',
            password: '123'
        },
    ]

    app.get("/login", (req, res) => {
        var reqData = req.query
        for (var i = 0; i < userInfo.length; i++) {
            if (userInfo[i].username == reqData.uname) {
                if (userInfo[i].password == reqData.upwd) {
                    return res.send(200, { code: 1, msg: '登录成功' })
                } else {
                    return res.send(200, { code: -1, msg: '密码错误' })
                }
            }
        }
        return res.send(200, { code: 0, msg: '账号不存在' })
    })
    // http://localhost:3000/getUserInfo
    app.get("/edit", (req, res) => {
        var reqData = req.query
        // console.log(reqData);
        for (var i = 0; i < userInfo.length; i++) {
            if (userInfo[i].username == reqData.username) {
                return res.send(200, { code: -1, msg: '注册失败，该用户名已存在' })
            } else {
                // let userData = {
                //     username: reqData.uname,
                //     password: reqData.upwd
                // }
                userInfo.push(reqData)
                // localStorage.setItem('userInfo', userData)
                // console.log(userInfo);
                return res.send(200, { code: 1, msg: '注册成功' })
            }
        }
    })
    app.use(proxy('/apis', {
        // 需要代理的主机 聚橙网
        target: 'https://m.juooo.com',
        // 是否跨域
        changeOrigin: true,
        //代理完成将url复写
        pathRewrite: {
            "^/apis": ""
        }
    }))
}