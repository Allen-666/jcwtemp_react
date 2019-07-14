import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
import img1 from '@/static/img/fanhui.png'
import img2 from '@/static/img/share.png'
import img3 from '@/static/img/loc.png'
import img4 from "@/static/img/weibo.png"
import img5 from "@/static/img/qq.png";
import img6 from "@/static/img/qzone.png"
import img7 from "@/static/img/here.png"
import {Link} from "react-router-dom"

const Views = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
    overflow: auto;
    .view{
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 2;
        .navbar {
            position: absolute;
            border-bottom: 0;
            color: #fff;
            background: transparent;
            box-shadow: none;
            transition: all 1s cubic-bezier(0, 0, 0.25, 1);
            z-index: 500;
            backface-visibility: hidden;
            margin: 0;
            width: 100%;
            height: 1.87733rem;
            font-size: 0.72533rem;
            left: 0;
            top: 0;
            .navbar-inner{
                align-items: center;
                justify-content: space-between;
                -webkit-box-align: center;
                display: flex;
                position: absolute;
                left: 0;
                top: 0;
                padding: 0 0.68267rem 0 0.2rem;
                width: 100%;
                height: 100%;
                margin-left:0.2rem;
                -webkit-box-pack: justify;
                .left{
                    width: 2.56rem;
                    top: 0;
                    height: 1.87733rem;
                    line-height: 1.87733rem;
                    margin-right: 10px;
                    font-size: 0.59733rem;
                    display: flex;
                    z-index: 5;
                    flex-shrink: 0;
                    -webkit-box-pack: start;
                    justify-content: flex-start;
                    -webkit-box-align: center;
                    align-items: center;
                    transform: translate3d(0, 0, 0);
                    position: absolute;
                    .link{
                        display: flex;
                        -webkit-box-align: center;
                        vertical-align: middle;
                        align-items: center;
                        .icon{
                            vertical-align: text-top;
                            margin-right: 0.384rem;
                            font-size: 0.85333rem;
                            color: inherit;
                            display: block;
                            font-family: "iconfont" !important;
                            font-style: normal;
                            font-weight: normal;
                            font-variant: normal;
                            text-transform: none;
                            line-height: 1;
                            -webkit-font-smoothing: antialiased;
                            -webkit-text-stroke-width: 0.2px;
                            -moz-osx-font-smoothing: grayscale;
                            cursor: pointer;
                        }
                    }
                }
                .center{
                        font-weight: normal;
                        width: 62%;
                        position: relative;
                        overflow: hidden;
                        margin: 0 auto;
                        font-size: 0.52533rem;
                        text-align: center;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        flex-shrink: 10;
                        -webkit-box-align: center;
                        align-items: center;
                        display: block;
                        color:#fff;
                        
                }
                .right{
                    justify-content: flex-end;
                    -webkit-box-pack: end;
                    width: 2.56rem;
                    margin-left: 10px;
                    right: 0.64rem;
                    top: 0;
                    height: 1.87733rem;
                    line-height: 1.87733rem;
                    padding-left: 0.42667rem;
                    display: flex;
                    z-index: 5;
                    flex-shrink: 0;
                    -webkit-box-align: center;
                    align-items: center;
                    -webkit-tap-highlight-color: transparent;
                    outline: 0;
                    .icon-only{
                        margin-left: 1.06667rem;
                        .icon-share{
                            width: 0.42533rem;
                            height: 0.42533rem;
                            background: url(${img2}) 0 0 no-repeat;
                            background-size: 100%;
                            margin-right: 0.91333rem;
                        }
                    }

                }
            }
        }
        .detail-header{
            border-bottom: 0;
            color: #fff;
            background: transparent;
            box-shadow: none;
            transition: all 1s cubic-bezier(0, 0, 0.25, 1);
        }
        .shadow-bg{
            position: fixed;
            top: 0;
            left: 0;
            z-index: 0;
            width: 100%;
            height: 100%;
            background: #000;
            opacity: 0;
        }
        .share-wrapper{
            position: fixed;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 2;
            margin: 0 auto;
            width: 16rem;
            background: #fff;
            transform: translate3d(0, 100%, 0);
            .share-layout{
                height: 9.05333rem;
                .title{
                    -webkit-box-pack: center;
                    -webkit-box-align: center;
                    position: relative;
                    height: 2.13333rem;
                    text-align: center;
                    background: #fafafa;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 0.64rem;
                    .icon{
                        position: absolute;
                        top: 0.704rem;
                        right: 0.55467rem;
                        font-family: "iconfont" !important;
                        font-style: normal;
                        font-weight: normal;
                        font-variant: normal;
                        text-transform: none;
                        line-height: 1;
                        -webkit-font-smoothing: antialiased;
                        -webkit-text-stroke-width: 0.2px;
                        color: #d8d8d8;
                        cursor: pointer;
                    }
                }
                .share-methods{
                    display: flex;
                    .item{
                        -webkit-box-orient: vertical;
                        -webkit-box-direction: normal;
                        -webkit-box-pack: end;
                        -webkit-box-align: center;
                        height: 4.48rem;
                        -webkit-flex-direction: column;
                        flex: 0 0 33.33333%;
                        justify-content: flex-end;
                        width: 33.333%;
                        align-items: center;
                        .icon-weibo{
                            background: url(${img4}) center center no-repeat;
                            background-size: 2.26133rem 2.26133rem;
                            display: block;
                            margin-bottom: 0.55467rem;
                            border-radius: 100%;
                            width: 2.26133rem;
                            height: 2.26133rem;
                        }
                        .icon-qq{
                            background: url(${img5}) center center no-repeat;
                            background-size: 2.26133rem 2.26133rem;
                            display: block;
                            margin-bottom: 0.55467rem;
                            border-radius: 100%;
                            width: 2.26133rem;
                            height: 2.26133rem;
                        }
                        .icon-qzone{
                            background: url(${img6}) center center no-repeat;
                            background-size: 2.26133rem 2.26133rem;
                            display: block;
                            margin-bottom: 0.55467rem;
                            border-radius: 100%;
                            width: 2.26133rem;
                            height: 2.26133rem;
                        }
                    }
                }
            }
        }
        .share-wechat-wrapper{
            transform: translate3d(0, 0, 0);
            display: none;
            height: 0;
            top: 0;
            background: transparent;
            z-index: 1;
            position: fixed;
            right: 0;
            bottom: 0;
            left: 0;
            margin: 0 auto;
            width: 16rem;
            .share-pointer{
                display: block;
                width: 6.208rem;
                height: 5.39733rem;
                position: absolute;
                right: 1.06667rem;
                top: 0.32rem;
                background: url(${img7}) 0 0 no-repeat;
                background-size: 100%;
            }
        }
        .pages{
            position: relative;
            overflow-x: hidden;
            overflow-y: auto;
            width: 100%;
            height: 100%;
            .js-main-content{
                -webkit-box-sizing: border-box;
                margin: 0;
                padding: 0;
                -webkit-tap-highlight-color: transparent;
                outline: 0;
                display: block;
                font-family: Arial, "微软雅黑", sans-serif;
                font-size: 0.59733rem;
                color: #666;
                .poster{
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    -webkit-box-pack: end;
                    position: relative;
                    height: 8.264rem;
                    -webkit-flex-direction: column;
                    display: flex;
                    justify-content: flex-end;
                    overflow: hidden;
                    .poster-bg-shadow{
                        opacity: 0.5;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 11.09333rem;
                        overflow: hidden;
                        z-index: 4;
                        background: #000;
                    }
                    .poster-bg-wrapper{
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 98%;
                        overflow: hidden;
                        z-index: 3;
                        .poster-bg{
                            width: 100%;
                            z-index: 3;
                            border: none;
                            max-width: 100%;
                            outline: none;
                        }
                    }
                    .poster-fg{
                        overflow: hidden;
                        position: absolute;
                        bottom: -0.42667rem;
                        left: -25%;
                        z-index: 5;
                        border-top: 1px solid #ccc;
                        border-radius: 50%;
                        width: 150%;
                        height: 2.56rem;
                        background: #fff;
                    }
                    .poster-img{
                        z-index: 5;
                        -webkit-box-pack: center;
                        position: relative;
                        margin-bottom: 0.64rem;
                        display: flex;
                        justify-content: center;
                        .img-bg{
                            position: relative;
                            padding: 2px;
                            width: 3.40267rem;
                            height: 4.68rem;
                            background: #e9e9e9;
                            .img-fg{
                                width: 100%;
                                height: 100%;
                                border: none;
                                max-width: 100%;
                                outline: none;
                            }
                        }
                        .round-num{
                            position: absolute;
                            right: 0.42667rem;
                            bottom: 2.048rem;
                            border: 1px solid #dadada;
                            border-radius: 0.17067rem;
                            padding: 0.21333rem;
                            color: #dadada;
                        }
                    }
                }
                .text-desc{
                    padding: 0 0.42667rem 0.21333rem 0.64rem;
                    background: #fff;
                    .title{
                        overflow: hidden;
                        margin-bottom: 0.53333rem;
                        font-weight: normal;
                        word-break: break-word;
                        color: #212121;
                    }
                    .row{
                        font-size: 0.39733rem;
                        color: #666;
                        padding-bottom: 0.21333rem;
                        .time{
                            -webkit-box-sizing: border-box;
                            -webkit-tap-highlight-color: transparent;
                            outline: 0;
                            margin: 0;
                            padding: 0;
                            font-size:0.38rem;
                        }
                    }
                }
                .round-list{
                    overflow: hidden;
                    position: relative;
                    margin-top: 0.46933rem;
                    padding-top: 0.42667rem;
                    background: #fff;
                    width: 100%;
                    height: 100%;
                    .v-line{
                        display: block;
                        position: absolute;
                        top: 2.28667rem;
                        left: 2.86867rem;
                        width: 2px;
                        height: 100%;
                        background: #e6e6e6;
                        z-index: 0;
                    }
                    .round-list-wrapper{
                        z-index: 5;
                        .active{
                            color: #ff7919;
                        }
                        .item{
                            position: relative;
                            padding-top: 0.74667rem;
                            width: 100%;
                            height: 1.52rem;
                            display: flex;
                            margin-bottom:0;
                            .item-left{
                                -webkit-box-orient: vertical;
                                -webkit-box-direction: normal;
                                padding-top: 0.10667rem;
                                text-align: center;
                                -webkit-flex-direction: column;
                                .day{
                                    color: #999;
                                    display: block;
                                    font-size: 0.384rem;
                                }
                                .time{
                                    color: #999;
                                    display: block;
                                    font-size: 0.384rem;
                                }
                            }
                            .item-center{
                                position: relative;
                                padding-top: 0.21333rem;
                                width: 0.64rem;
                                flex: 0 0 0.64rem;
                                .dot{
                                    display: block;
                                    position: absolute;
                                    right: 0;
                                    left: 0;
                                    z-index: 5;
                                    margin: 0 auto;
                                    border: 0.064rem solid #fff;
                                    border-radius: 50%;
                                    width: 0.164rem;
                                    height: 0.164rem;
                                    background: #e6e6e6;
                                    margin-right:0.8rem;
                                }
                            }
                            .item-right{
                                color: #999;    
                                -webkit-box-orient: vertical;
                                -webkit-box-direction: normal;
                                margin-right: 0.42667rem;
                                border-bottom: 1px solid #e6e6e6;
                                padding-left: 0.12667rem;
                                font-size: 0.384rem;
                                -webkit-flex-direction: column;
                                -webkit-box-flex: 12;
                                flex: 12;
                                display: flex;
                                .locate{
                                    color: #999;
                                    display: block;
                                    overflow: hidden;
                                    padding-top: 0.09867rem;
                                    font-size: 0.38467rem;
                                    width: 8.53333rem;
                                    height: 1.74933rem;
                                    text-overflow: ellipsis;
                                    .icon{
                                        margin-right: 0.10667rem;
                                        font-family: "iconfont" !important;
                                        font-style: normal;
                                        font-weight: normal;
                                        font-variant: normal;
                                        text-transform: none;
                                        line-height: 1;
                                        -webkit-font-smoothing: antialiased;
                                        -webkit-text-stroke-width: 0.2px;
                                        color: #d8d8d8;
                                        cursor: pointer;
                                    }
                                }
                            }
                            .buy-btn{
                                position: absolute;
                                right: 0.06rem;
                                bottom: 0.64rem;
                                border-radius: 0.128rem;
                                padding: 0 0.576rem;
                                height: 0.66667rem;
                                line-height: 1.06667rem;
                                color: #fff;
                                background: #ff7919;
                                width:0.1rem;
                            }
                            .btn{
                                display: inline-block;
                                vertical-align: middle;
                                overflow: hidden;
                                border: 1px solid #b2b2b2;
                                margin: 0;
                                text-decoration: none;
                                text-align: center;
                                -webkit-appearance: none;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                font-size: 0.312rem;
                                font-family: inherit;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
    }
`
class Romeo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Fragment>
                <Views>
                    <div className="view">
                        < header className="navbar detail-header">
                            <div className="navbar-inner navbar-on-center">
                                <Link to="/Home">
                                    <div className="left js-personal-link">
                                        <span className="link">
                                            <img className="icon icon-menu-left" src={img1} />
                                        </span>
                                    </div>
                                </Link>
                                <div className="center">
                                    巡演详情
                                </div>
                                <div className="right">
                                    <a href="#" className="link open-panel icon-only js-share-btn">
                                        <img className="icon icon-share"></img>
                                    </a>
                                </div>
                            </div>
                        </header>
                        <div className="shadow-bg js-shadow-bg"></div>
                        <div className="share-wrapper">
                            <div className="share-layout">
                                <div className="title">分享<i className="icon icon-remove js-share-close js-close-btn"></i></div>
                                <div className="share-methods">
                                    <div className="item">
                                        <a className="icon-weibo" src="javascript:;"></a>
                                        <span>微博</span>
                                    </div>
                                    <div className="item">
                                        <a className="icon-qq" src="javascript:;"></a>
                                        <span>腾讯微博</span>
                                    </div>
                                    <div className="item">
                                        <a className="icon-qzone" src="javascript:;"></a>
                                        <span>QQ空间</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="share-wechat-wrapper">
                            <div className="share-pointer"></div>
                        </div>

                        <div className="pages">
                            <main className="js-main-content">
                                <article className="poster">
                                    <div className="poster-bg-shadow">
                                    </div>
                                    <div className="poster-bg-wrapper">
                                        <img className="poster-bg" src="http://image.juooo.com//group1/M00/02/95/rAoKNVxiRKOAXzXQAACMoAN8LQw887.jpg" alt="2019年法语音乐剧《罗密欧与朱丽叶》" title="2019年法语音乐剧《罗密欧与朱丽叶》" />
                                    </div>
                                    <div className="poster-fg"></div>
                                    <div className="poster-img">
                                        <div className="img-bg">
                                            <img className="img-fg" src="http://image.juooo.com//group1/M00/02/95/rAoKNVxiRKOAXzXQAACMoAN8LQw887.jpg" alt="2019年法语音乐剧《罗密欧与朱丽叶》" title="2019年法语音乐剧《罗密欧与朱丽叶》" />
                                        </div>
                                        <a className="round-num" href="javascript:;">47场巡演</a>
                                    </div>
                                </article>

                                <article className="text-desc">
                                    <h3 className="title">
                                        2019年法语音乐剧《罗密欧与朱丽叶》
                                        </h3>
                                    <div className="row">
                                        时间：<span className="time">2019.06.09 - 2019.08.11</span>
                                    </div>
                                </article>

                                <article className="round-list">
                                    <div className="v-line"></div>
                                    <ul className="round-list-wrapper">
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.9</span>
                                                <span className="time">周日 14:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="93395">
                                                <span>北京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>世纪剧院</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.9</span>
                                                <span className="time">周日 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="92963">
                                                <span>北京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>世纪剧院</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.11</span>
                                                <span className="time">周二 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="92964">
                                                <span>北京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>世纪剧院</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.13</span>
                                                <span className="time">周四 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="92966">
                                                <span>北京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>世纪剧院</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.14</span>
                                                <span className="time">周五 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="92967">
                                                <span>北京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>世纪剧院</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.15</span>
                                                <span className="time">周六 14:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="95066">
                                                <span>北京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>世纪剧院</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.15</span>
                                                <span className="time">周六 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="95067">
                                                <span>北京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>世纪剧院</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.16</span>
                                                <span className="time">周日 14:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="95068">
                                                <span>北京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>世纪剧院</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.16</span>
                                                <span className="time">周日 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="95069">
                                                <span>北京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>世纪剧院</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.18</span>
                                                <span className="time">周二 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="95070">
                                                <span>北京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>世纪剧院</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.19</span>
                                                <span className="time">周三 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="95071">
                                                <span>北京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>世纪剧院</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.20</span>
                                                <span className="time">周四 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="95072">
                                                <span>北京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>世纪剧院</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.21</span>
                                                <span className="time">周五 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="95073">
                                                <span>北京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>世纪剧院</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.22</span>
                                                <span className="time">周六 14:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="95075">
                                                <span>北京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>世纪剧院</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.22</span>
                                                <span className="time">周六 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="95074">
                                                <span>北京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>世纪剧院</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.23</span>
                                                <span className="time">周日 14:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="95076">
                                                <span>北京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>世纪剧院</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.28</span>
                                                <span className="time">周五 19:45</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="93188">
                                                <span>西安站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>别克，陕西大剧院-歌剧厅</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.29</span>
                                                <span className="time">周六 14:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="93189">
                                                <span>西安站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>别克，陕西大剧院-歌剧厅</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.29</span>
                                                <span className="time">周六 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="93190">
                                                <span>西安站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>别克，陕西大剧院-歌剧厅</span>
                                            </div>
                                        </li>
                                        <li className="item  overdue">
                                            <div className="item-left">
                                                <span className="day">6.30</span>
                                                <span className="time">周日 14:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="93191">
                                                <span>西安站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>别克，陕西大剧院-歌剧厅</span>
                                            </div>
                                        </li>
                                        <li className="item active ">
                                            <div className="item-left">
                                                <span className="day">7.5</span>
                                                <span className="time">周五 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="95936">
                                                <span>南京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>江苏广电荔枝大剧院</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="95936">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">7.6</span>
                                                <span className="time">周六 14:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="95937">
                                                <span>南京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>江苏广电荔枝大剧院</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="95937">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">7.6</span>
                                                <span className="time">周六 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="95938">
                                                <span>南京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>江苏广电荔枝大剧院</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="95938">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">7.7</span>
                                                <span className="time">周日 14:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="95939">
                                                <span>南京站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>江苏广电荔枝大剧院</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="95939">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">7.12</span>
                                                <span className="time">周五 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="94871">
                                                <span>深圳站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>南山文体中心剧院大剧院</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="94871">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">7.13</span>
                                                <span className="time">周六 14:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="94873">
                                                <span>深圳站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>南山文体中心剧院大剧院</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="94873">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">7.13</span>
                                                <span className="time">周六 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="94874">
                                                <span>深圳站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>南山文体中心剧院大剧院</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="94874">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">7.14</span>
                                                <span className="time">周日 14:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="94875">
                                                <span>深圳站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>南山文体中心剧院大剧院</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="94875">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">7.14</span>
                                                <span className="time">周日 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="96624">
                                                <span>深圳站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>南山文体中心剧院大剧院</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="96624">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">7.16</span>
                                                <span className="time">周二 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="96625">
                                                <span>深圳站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>南山文体中心剧院大剧院</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="96625">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">7.17</span>
                                                <span className="time">周三 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="96626">
                                                <span>深圳站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>南山文体中心剧院大剧院</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="96626">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">7.18</span>
                                                <span className="time">周四 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="96628">
                                                <span>深圳站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>南山文体中心剧院大剧院</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="96628">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">7.24</span>
                                                <span className="time">周三 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="94787">
                                                <span>苏州站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>苏州文化艺术中心大剧院</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="94787">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">7.25</span>
                                                <span className="time">周四 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="96548">
                                                <span>苏州站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>苏州文化艺术中心大剧院</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="96548">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">7.26</span>
                                                <span className="time">周五 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="94788">
                                                <span>苏州站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>苏州文化艺术中心大剧院</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="94788">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">7.27</span>
                                                <span className="time">周六 14:00</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="94789">
                                                <span>苏州站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>苏州文化艺术中心大剧院</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="94789">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">7.27</span>
                                                <span className="time">周六 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="96549">
                                                <span>苏州站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>苏州文化艺术中心大剧院</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="96549">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">7.28</span>
                                                <span className="time">周日 14:00</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="96550">
                                                <span>苏州站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>苏州文化艺术中心大剧院</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="96550">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">8.2</span>
                                                <span className="time">周五 19:00</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="100590">
                                                <span>广州站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>广州白云国际会议中心</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="100590">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">8.2</span>
                                                <span className="time">周五 20:00</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="100138">
                                                <span>广州站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>广州白云国际会议中心</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="100138">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">8.3</span>
                                                <span className="time">周六 14:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="101341">
                                                <span>广州站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>广州白云国际会议中心</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="101341">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">8.3</span>
                                                <span className="time">周六 20:00</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="101342">
                                                <span>广州站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>广州白云国际会议中心</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="101342">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">8.4</span>
                                                <span className="time">周日 14:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="102783">
                                                <span>广州站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>广州白云国际会议中心</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="102783">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">8.9</span>
                                                <span className="time">周五 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="94825">
                                                <span>香港站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>香港文化中心(大剧院)</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="94825">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">8.10</span>
                                                <span className="time">周六 14:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="94831">
                                                <span>香港站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>香港文化中心(大剧院)</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="94831">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">8.10</span>
                                                <span className="time">周六 19:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="94832">
                                                <span>香港站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>香港文化中心(大剧院)</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="94832">购票</div>
                                        </li>
                                        <li className="item  ">
                                            <div className="item-left">
                                                <span className="day">8.11</span>
                                                <span className="time">周日 14:30</span>
                                            </div>
                                            <div className="item-center">
                                                <div className="dot"></div>
                                            </div>
                                            <div className="item-right js-buy-ticket" id="94833">
                                                <span>香港站</span>
                                                <span className="locate"><img className="icon icon-map-marker" src={img3}></img>香港文化中心(大剧院)</span>
                                            </div>
                                            <div className="buy-btn btn btn-default" id="94833">购票</div>
                                        </li>
                                    </ul>
                                </article>
                            </main>
                        </div>

                    </div>
                </Views>
            </Fragment>
        )
    }
}
export default Romeo;