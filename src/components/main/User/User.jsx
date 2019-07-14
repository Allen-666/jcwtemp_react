import React, { Fragment, Component } from "react"
import styled from 'styled-components'
import { withRouter } from "react-router-dom";
import axios from 'axios'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import './User.scss'

// import '../../../mock/userInfo.js'

import imgs from '../../../static/img/qqq.png'
const H1 = styled.h1`
    /* height: 1.024rem; */
    font-size: 0.5rem;
    font-weight: 700;
    font-stretch: normal;
    line-height: 2.8024rem;
    color: #232323;
    margin-left:0.6rem;
`
const Left = styled.div`
    width: 0.3rem;
    height: 0.3rem;
    border-top: 0.05rem solid #867f7a;
    border-right: 0.05rem solid #867f7a;
    transform: rotate(-135deg);
    box-sizing: border-box;
    margin-left:0.5rem;
`
const Odiv = styled.div`
    padding-top:0.5rem;
    background-image: url('https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/login_bg.png') ;
    height:100%;
    padding-bottom:5rem;
`
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true,
            uname: '',
            upwd: '',
            utel: '',
            gData: ''
        }
    }
    //登录成功
    loadingToast(res, data) {
        console.log(data);
        Toast.loading(res.data.msg, 2, () => {
            this.setState({ flag: true })
            this.props.history.push({
                pathname: '/Userinfo',
                state: this.state.flag,
                userData: data
            })
        });
    }
    //登录失败 密码错误
    failToast(res) {
        Toast.fail(res.data.msg, 2, () => {
            alert('请检查用户名或密码')
        });
    }
    //注册失败 账号已存在
    offline(res) {
        Toast.offline(res.data.msg, 2, () => {
            alert(res.data.msg)
        });
    }
    render() {
        return (
            <Fragment>
                <Odiv>
                    <Left onClick={this.back.bind(this)}></Left>
                    <H1>欢迎来到聚橙网</H1>
                    <div className='login' style={this.state.flag ? { display: 'block' } : { display: 'none' }}>
                        <p>
                            <input type="text" placeholder='请输入用户名' value={this.state.uname} onChange
                                ={this.change1.bind(this)} />
                        </p>
                        <p>
                            <input type="password" placeholder='请输入密码' value={this.state.upwd} onChange
                                ={this.change2.bind(this)} />
                        </p>
                        <p>
                            <button className='btn' className={this.state.uname.length == 0 ? 'btn1' : 'btn2'} onClick={this.loginBtn.bind(this)}>登陆</button>
                        </p>
                        <p className='btn-botton'>
                            <span className='sp1'>忘记密码</span>

                            <span className='sp1' onClick={this.btnTab.bind(this)}>去注册</span>
                        </p>
                    </div>
                    <div className='login2' style={this.state.flag ? { display: 'none' } : { display: 'block' }}>
                        <p>
                            <input type="text" placeholder='请输入用户名' value={this.state.uname} onChange
                                ={this.change1.bind(this)} />
                        </p>
                        <p>
                            <input type="password" placeholder='请输入密码' value={this.state.upwd} onChange
                                ={this.change2.bind(this)} />
                        </p>
                        <p>
                            <button className='btn' className={this.state.uname.length == 0 ? 'btn1' : 'btn2'} onClick={this.editBtn.bind(this)}>注册</button>
                        </p>
                        <p className='btn-botton'>
                            <span className='sp1' >邮箱注册</span>
                            <span className='sp1' onClick={this.btnTab1.bind(this)}>已有账号，去登录</span>
                        </p>
                    </div>
                    <div className='other'>
                        <img src={imgs} alt="" />
                    </div>
                </Odiv>
            </Fragment >
        )
    }
    //切换注册
    btnTab() {
        this.setState({ flag: false })
    }
    //切换登录
    btnTab1() {
        this.setState({ flag: true })
    }
    //登录
    loginBtn() {
        // this.setState({ flag: true })
        var data = {
            uname: this.state.uname,
            upwd: this.state.upwd
        }
        axios.get('/login', {
            params: data || localStorage.getItem('userInfo')
        }).then((res) => {
            // console.log(res);
            if (res.data.code == 1) {
                this.loadingToast(res, data)
            } else if (res.data.code == -1) {
                this.failToast(res)
            } else {
                alert(res.data.msg + ',请重新输入')
            }
        }).catch((error) => {
            console.log(error);
        });
    }
    //注册
    editBtn() {
        var data = {
            username: this.state.uname,
            password: this.state.upwd
        }
        axios.get('/edit', {
            params: data
        }).then((res) => {
            // console.log(res);
            if (res.data.code == 1) {
                this.setState({ flag: true })
                // localStorage.setItem('userInfo', res.config.data)
            } else {
                this.offline(res)
            }
        }).catch((error) => {
            console.log(error);
        });
    }
    //输入框取值
    change1(e) {
        this.setState({ uname: e.target.value })
    }
    //输入框取值
    change2(e) {
        this.setState({ upwd: e.target.value })
    }
    back() {
        this.props.history.goBack()
    }
}
export default withRouter(User)