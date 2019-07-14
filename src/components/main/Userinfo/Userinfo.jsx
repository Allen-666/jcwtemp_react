import React, { Fragment, Component } from "react"
import styled from 'styled-components'
import { withRouter } from "react-router-dom";


let Integral = require('@/static/img/integral.jpg')
let IconCardLogo = require('@/static/img/icon-cardLogo.png')
let picPlusCard = require('@/static/img/pic_plusCard.png')
let youjian = require("@/static/img/jiantou.png")
let login_user = require("@/static/img/logo-user.png")

const User = styled.div`
    .views{
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 2;
        .view{
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 2;
            .pages{
                position: relative;
                overflow-x: hidden;
                overflow-y: auto;
                width: 100%;
                height: 100%;
                 .padding-bottom40{
                    padding-bottom: 0.85333rem;
                    .main-top{
                        position: relative;
                        height:5.52rem;
                        background: url(${Integral}) center 0 no-repeat;
                        background-size: cover;
                        overflow: hidden;
                            .head-logo{
                                position: absolute;
                                top: 1.06667rem;
                                left: 0.64rem;
                                border: 2px solid #e6e6e6;
                                border-radius: 100%;
                                width: 1.13333rem;
                                height: 1.13333rem;
                                background: #f5f5f5;
                                max-width: 100%;
                                outline: none;
                            }
                            .name{
                                top: .8rem;
                                font-size: 0.38267rem;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                position: absolute;
                                left: 2.34933rem;
                                width: 5.66667rem;
                                color: #fff;
                                .nickname{
                                    display: inline-block;
                                    height: 0.98133rem;
                                    line-height: 0.98133rem;
                                    max-width: 5.33333rem;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    vertical-align: middle;
                                }
                            }
                            .grade{
                                top: 1.85333rem;
                                font-size: 0.38267rem;
                                position: absolute;
                                left: 2.34933rem;
                                width: 5.66667rem;
                                color: #fff;
                            }    
                            .icon-menu-right{
                                    position: absolute;
                                    top: 1.81333rem;
                                    right: .64rem;
                                    color: #fff;
                                    display: inline;
                                    background:url(${youjian}) no-repeat;
                                    background-size:0.28rem 0.28rem;
                                }           
                            .plus-noPurchase{
                                width: 8.72rem;
                                position: absolute;
                                bottom: 0;
                                left: 50%;
                                margin-left: -4.36rem;
                                border-radius: 0.42667rem 0.42667rem 0 0;
                                height: 2.2333rem;
                                background: url(${picPlusCard}) center 0 no-repeat;
                                background-size: 10.72rem;
                                .plusModel-rowTxt{
                                    width:100%;
                                    .rowTxt{
                                        margin:0;
                                        display: flex;
                                        justify-content: space-between;
                                        padding: 0.4rem 0.4rem 0 0.4rem;
                                        color: #d8c9a3;
                                        .item{
                                            width: 3.30267rem;
                                            height: 1.02267rem;
                                            background: url(${IconCardLogo}) center 0 no-repeat;
                                            background-size: 3.0267rem .82267rem;
                                            letter-spacing: 0.08533rem;
                                            margin-bottom:0;
                                        }
                                        .item2 {
                                            width: 3.18133rem;
                                            margin-bottom:0;
                                            height: 0.768rem;
                                            line-height: 0.768rem;
                                            border-radius: 0.384rem 0.384rem 0.384rem 0.384rem;
                                            font-size: 0.26933rem;
                                            text-align: center;
                                            background-color: rgba(255, 255, 255, 0.2);
                                            color: #d8c9a3;
                                            letter-spacing: 0.08533rem;
                                            font-weight: bold;
                                            display: block;
                                            box-sizing:border-box;
                                        }
                                    }
                                    .rowTxt2{
                                        font-weight: bold;
                                        font-size: 0.312rem;
                                        color: #d8c9a3;
                                        padding-left: 0.64rem;
                                        padding-top: 0.128rem;
                                        outline: 0;
                                    }
                                }
                                .card_line {
                                    width: 14.72rem;
                                    height: 4.39467rem;
                                    display: block;
                                    position: absolute;
                                    top: -8%;
                                    animation: cardLine 2.6s .6s linear forwards;
                                    .isIcon{
                                        width: 2.048rem;
                                        height: auto;
                                        border: none;
                                        max-width: 100%;
                                        outline: none;
                                    }
                                }
                            }
                        }
                        .category-wrap{
                            padding: 0.4667rem 0;
                            background: #fff;
                            position: relative;
                            z-index: 99;
                            .flex-avg-wrap{
                                display: flex;
                                margin-top:0;
                                .flex-item{
                                    display: flex;
                                    text-align: center;                                                                     
                                    flex-direction: column;
                                    justify-content: center;
                                    align-items: center;
                                    border-right: 1px solid #e6e6e6;
                                    width:33%;
                                    margin:0;
                                    >a{
                                        .warp-p{
                                        font-size: 0.3rem;
                                        color: #ff7919;
                                        .wrap-num{
                                            font-size: 0.66rem;
                                            }
                                        }
                                    .warp-name{
                                        font-size: 0.3rem;
                                        color: #8c8c8c;
                                        }
                                    }
                                }
                            }
                        } 
                        .list{
                            margin-top: 0.46933rem;
                            background: #fff;
                            .text{
                                    margin-top:0.05rem;
                                    border-top: 1px solid #ebebeb;
                                }
                            .list-p{
                                display: block;           
                                position: relative;
                                margin-left: .70667rem;                            
                                height: .92rem;
                                font-size: 0.43rem;
                                line-height: .92rem;
                                .icon-left{
                                    position: absolute;
                                    left: -1.06667rem;
                                    font-size: 0.4rem;
                                    line-height: .92rem;
                                    color: #999;
                                }
                                .list-right{
                                    float: right;
                                    padding-right: 0.64rem;
                                    font-size: 0.43rem;
                                    color: #999;
                                    .icon-menu-right{
                                        color: #ccc;
                                    }
                                }                
                            }
                        }
                        .online-sever{
                            display: block;
                            /* width: 11.09333rem; */
                            height: 1.664rem;
                            line-height: 1.664rem;
                            margin: 0.64rem auto 1.92rem;
                            background-color: #ffffff;
                            border-radius: 0.128rem;
                            border: 1px solid #e6e6e6;
                            text-align: center;
                            color: #ff7919;
                            font-size: 0.39733rem;
                            font-weight: bold;
                            .icon-left{
                                font-size: 0.768rem;
                                color: #ff7919;                       
                            }
                            >span{
                                    display: inline-block;
                                    line-height: 1.664rem;
                                    vertical-align: middle;
                                }
                        }                                          
                    }
                 }
            } 
        }
`
class userInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: ''
        }
    }
    render() {
        return (
            <User>
                <div className="views">
                    <div className="view">
                        <div className="pages">
                            <div className="padding-bottom40">
                                <div className="main-top js-bg plus-top">
                                    <a href="javascript:void(0)">
                                        <div>
                                            <img className="head-logo" src={login_user} />
                                        </div>
                                    </a>
                                    <p className="name">
                                        <a href="javascript:void(0)"><span className="nickname">欢迎回来!</span></a>
                                    </p>
                                    <p className="grade">{this.state.Username}</p>
                                    <a href="javascript:void(0)">
                                        <div className="icon icon-menu-right"></div>
                                    </a>
                                    <div className="card-plusModel isShow js-card-plusModel plus-topAnimate plus-noPurchase">
                                        <div className="plusModel-rowTxt">
                                            <ul className="rowTxt">

                                                <li className="item"></li>

                                                <li className="item2 no-btnTxt" style={{ fontWeight: 'bold' }}>尊享多项特权</li>
                                            </ul>
                                            <p className="rowTxt2" style={{ fontWeight: 'bold' }}>开通橙PLUS卡，限时送<span className="noreadyMoney">100</span>元</p>
                                        </div>
                                        <div className="card_line isShow card_nopurchase" style={{ display: 'block' }}>
                                            <img src='' style={{
                                                width: "2.048rem",
                                                height: 'auto'
                                            }} className="isIcon icon_cardLine" />
                                        </div>
                                    </div>
                                </div>
                                <div className="category-wrap">
                                    <ul className="flex-avg-wrap">
                                        <li className="flex-item">
                                            <a href="javascript:void(0)">
                                                <p className="warp-p">
                                                    <span className="wrap-num">0.00</span>元
                                                    </p>
                                                <p className="warp-name">余额</p>
                                            </a>
                                        </li>
                                        <li className="flex-item">
                                            <a href="javascript:void(0)">
                                                <p className="warp-p">
                                                    <span className="wrap-num">4</span>分
                                                    </p>
                                                <p className="warp-name">积分</p>
                                            </a>
                                        </li>
                                        <li className="flex-item">
                                            <a href="javascript:void(0)">
                                                <p className="warp-p">
                                                    <span className="wrap-num" id="js-coupon-nums">0</span>张
                                                    </p>
                                                <p className="warp-name">优惠券</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list">
                                    <a className="list-p" href="javascript:void(0)">
                                        <span className="icon icon-list-alt icon-left"></span>
                                        我的订单
                                        <div className="list-right"></div>
                                    </a>
                                </div>
                                <div className="list">
                                    <a className="list-p" href="javascript:void(0)">
                                        <span className="icon icon-ETicket icon-left"></span>
                                        电子票夹
                                            <div className="list-right">

                                        </div>
                                    </a>
                                </div>
                                <div className="list">
                                    <a className="list-p" href="javascript:void(0)" id="js-user-year-list">
                                        <span className="icon icon-cart icon-left"></span>
                                        我的卡包
                                            <div className="list-right">
                                            <span className="icon icon-menu-right">了解详情</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="list">
                                    <a className="list-p" href="javascript:void(0)">
                                        <span className="icon icon-email icon-left"></span>
                                        我的关注
                                            <div className="list-right">
                                            <span className="icon icon-menu-right"></span>
                                        </div>
                                    </a>
                                    <a className="list-p text" href="javascript:void(0)">
                                        <span className="icon icon-fixe icon-left"></span>
                                        收货地址
                                            <div className="list-right">

                                            <span className="icon icon-menu-right"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="list">
                                    <a className="list-p" href="javascript:void(0)">
                                        <span className="icon icon-star icon-left"> </span>
                                        我的消息
                                            <div className="list-right">

                                            <span className="icon icon-menu-right"></span>
                                        </div>
                                    </a>
                                    <a className="list-p text" href="javascript:void(0)">
                                        <span className="icon icon-map-marker icon-left text"></span>
                                        意见反馈
                                            <div className="list-right">

                                            <span className="icon icon-menu-right"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="list">
                                    <a className="list-p" href="javascript:void(0)" id="js-user-year-list">
                                        <span className="icon icon-cart icon-left"></span>联系电话
                                            <div className="list-right">
                                            <span className="icon icon-menu-right">400-185-8666</span>
                                        </div>
                                    </a>
                                </div>
                                <a id="juo-meiqia" href="javascript:void(0)" className="online-sever">
                                    <span className="icon icon-headset icon-left"></span>
                                    <span>在线客服</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </User >
        )
    }
    componentDidMount() {
        this.setState({ Username: this.props.location.userData.uname })
    }
}

export default withRouter(userInfo)
