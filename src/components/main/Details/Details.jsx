import React, { Fragment, Component } from "react";
import styled from 'styled-components';
import img5 from '@/static/img/fanhui.png';
import img6 from '@/static/img/like.png';
import img7 from "@/static/img/house.png";
import img8 from "@/static/img/log_r.png";
import img9 from "@/static/img/v+.png";
import img10 from "@/static/img/address.png";
import img11 from "@/static/img/plus.png"
import img12 from "@/static/img/baixiaoyu.png"
import img13 from "@/static/img/heijiantou.png"
import img14 from "@/static/img/quyue.jpg"
import img15 from "@/static/img/chengjiantou.png"
import img16 from "@/static/img/erji.png"
import img17 from "@/static/img/wanyouyinyue.jpg"
import img18 from "@/static/img/peiqi.jpg"
import img19 from "@/static/img/yinying.png"

import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Detail = styled.div`
    overflow: hidden;
    background-color: #f5f5f5;
    .brief{
        background-color: #fefefe;
        .brief__primary{
            position: relative;
            height: 6.12rem;
            overflow: hidden;
            .brief__primary__bg{
                position: absolute;
                left: 0;
                right: 0;
                height: auto;
                background-color: #b8abab;
                filter: blur(.53333rem);
                border: none;
                border-color: transparent;
                vertical-align: middle;
                width: 100%;
            }
            .brief__primary__mask{
                position: absolute;
                left: 0;
                right: 0;
                height: 6.12rem;
                background-color: rgba(0,0,0,.1);
            }
            .brief__primary__fg{
                position: relative;
                height: 6.12rem;
                .brief__primary__fg__title{
                    position: relative;
                    height: 1.18667rem;
                    .brief__primary__fg__title__text{
                        text-align: center;
                        font-size: .48rem;
                        font-weight: 700;
                        color: #fefefe;
                        height: 1.18667rem;
                        line-height: 1.18667rem;
                        display: block;
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                    } 
                    .brief__primary__fg__title__back{
                        display: block;
                        height: 1.18667rem;
                        background:url(${img5}) no-repeat 50%;
                        background-size: .24rem .48rem;
                        width: 1.04rem;
                        position: absolute;
                        left: 0;
                    }
                    .brief__primary__fg__title__like{
                        background-image: url(${img6});
                        background-size: .53333rem .53333rem;
                        background-repeat: no-repeat;
                        background-position: 50%;
                        width: .93333rem;
                        height: 1.18667rem;
                        display: block;
                        position: absolute;
                        top: 0;
                        right: 1.13333rem;
                    }
                    .brief__primary__fg__title__home{
                        flex-grow: 0;
                        background-image: url(${img7});
                        background-size: .53333rem .53333rem;
                        background-repeat: no-repeat;
                        background-position: 50%;
                        width: .93333rem;
                        height: 1.18667rem;
                        display: block;
                        position: absolute;
                        top: 0;
                        right: .2rem;
                    }
                }
                .brief__primary__fg__content{
                    display: flex;
                    padding: 0 .4rem;
                    position: relative;
                    .cover{
                        border-radius: .10667rem;
                    }
                    .brief__primary__fg__content__cover{
                        width: 2.93333rem;
                        height: 4rem;
                        margin-top: .4rem;
                        -ms-flex-negative: 0;
                        flex-shrink: 0;
                        .cover__img{
                            width: 100%;
                            height: 100%;
                            border-radius: .10667rem;
                        }
                    }
                    .brief__primary__fg__content__tag{
                        position: absolute;
                        top: .4rem;
                        left: .4rem;
                        width: 2.93333rem;
                        height: 4rem;
                        .juooo_sponsor{
                            .logo_i{
                                position: absolute;
                                left: .10667rem;
                                top: -.02667rem;
                                width: .77333rem;
                                height: .93333rem;
                                display: block;
                                background: url(${img8}) 50% no-repeat;
                                background-size: 100%;
                            }
                        }
                    }
                    .brief__primary__fg__content__info{
                        margin-top: .54667rem;
                        margin-left: .38667rem;
                        display: flex;
                        -webkit-box-orient: vertical;
                        -webkit-box-direction: normal;
                        flex-direction: column;
                        .brief__primary__fg__content__info__name{
                            font-size: .50667rem;
                            line-height: .61333rem;
                            font-weight: 700;
                            color: #fefefe;
                        }
                        .brief__primary__fg__content__info__tag{
                            margin-top: .53333rem;
                            font-size: .58667rem;
                            color: #fefefe;
                            display: flex;
                            transform-origin: 0 0;
                            line-height: .58667rem;
                            -webkit-box-align: center;
                            transform: scale(.5);
                            align-items: center;
                        }
                        .brief__primary__fg__content__info__price{
                            align-items: flex-end;
                            padding-bottom: .21333rem;
                            flex-grow: 1;
                            -webkit-box-align: end;
                            display: flex;
                            -webkit-box-flex: 1;
                            .brief__primary__fg__content__info__price__range{
                                font-size: .42667rem;
                                font-weight: 700;
                                height: .42667rem;
                                line-height: .42667rem;
                                color: #fefefe;
                                display: inline-block;
                                white-space: nowrap;
                            }
                            .brief__primary__fg__content__info__price__type{
                                display: flex;
                                transform: scale(.5);
                                transform-origin: 0 100%;
                                .brief__primary__fg__content__info__price__type__plus{
                                    width: 1.28rem;
                                    height: .90667rem;
                                    line-height: .90667rem;
                                    display: inline-block;
                                    margin-left: .32rem;
                                    background-repeat: no-repeat;
                                    background-size: 1.28rem .90667rem;
                                    background-image: url(${img9});

                                }
                            }
                        }
                    }
                }
            }
        }
        .brief__secondary{
            display: flex;
            padding: 0 .4rem .57333rem;
            .brief__secondary__info{
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                flex-direction: column;
                -webkit-box-flex: 1;
                flex-grow: 1;
                .brief__secondary__info__date-time{
                    margin-top: .78667rem;
                    font-size: .48rem;
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    color: #232323;
                    .brief__secondary__info__date-time__date{
                        display: inline-block;
                        font-weight: 700;
                        height: .48rem;
                        line-height: .48rem;
                    }
                    .brief__secondary__info__date-time__time{
                        display: inline-block;
                        font-size: .32rem;
                        height: .48rem;
                        line-height: .48rem;
                        margin-left: .12rem;
                    }
                }
                .brief__secondary__info__place{
                    font-size: .42667rem;
                    font-weight: 700;
                    color: #232323;
                    margin-top: .42667rem;
                    margin-right: 1.52rem;
                    line-height: .61333rem;
                }
            }
            .brief__secondary__pointer{
                flex-shrink: 0;
                margin-top: .88rem;
                width: 1.06667rem;
                height: 1.06667rem;
                background-image: url(${img10});
                background-repeat: no-repeat;
                background-position: 50%;
                background-size: .48rem .58667rem;
                background-color: #ededed;
                outline: none;
                border-radius: 50%;
            }
        }
    }

    .card-plus-tips{
        background: #fefefe;
    }
    .detail__card-tips{
        padding-bottom: .53333rem;
        .base-tips{
            position: relative;
            overflow: hidden;
            height: 1.25333rem;
            background-color: #fefefe;
            .base-tips__tag{
                position: absolute;
                top: 0;
                left: .61333rem;
                width: 1.57333rem;
                height: .37333rem;
                /* border: none;
                border-color: transparent;
                vertical-align: middle; */
            }
            .base-tips__info{
                width: 9.2rem;
                height: 1.2rem;
                margin: .05333rem auto 0;
                background-image: linear-gradient(-50deg,#ff4d4a,#ff9a34),linear-gradient(#ff6743,#ff6743);
                background-blend-mode: normal,normal;
                border-radius: .13333rem;
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                .base-tips__info__name{
                    font-size: .41333rem;
                    color: #fff;
                    margin-left: .4rem;
                    -webkit-box-flex: 1;
                    flex-grow: 1;
                }
                .base-tips__info__arrow{
                    width: .16rem;
                    height: .32rem;
                    display: inline-block;
                    background-image: url(${img12});
                    background-repeat: no-repeat;
                    background-size: .16rem .32rem;
                    margin: 0 .4rem 0 .26667rem;
                    background-position: 50%;
                    transform: rotate(180deg);
                }
            }
        }
    }
    .detail__schedule-discount{
        margin-top: .32rem;
    }

    .schedule-discount{
        background-color: #fefefe;
        .schedule-discount-item{
            display: flex;
            padding: .4rem;
            .schedule-discount-item__name{
                font-size: .37333rem;
                color: #999;
                display: inline-block;
                height: .64rem;
                line-height: .64rem;
                flex-shrink: 0;
            }
            .schedule-discount-item__content{
                flex-grow: 1;
                -webkit-box-flex: 1;
            }
            .enter{
                font-size: .34667rem;
                color: #232323;
                line-height: .64rem;
                padding-top: .02667rem;
                margin-left: .4rem;
                margin-bottom: -.14667rem;
            }
        }
        .divider{
            margin: 0 .4rem;
            border-bottom: 1px solid #ebebeb;
            transform: scaleY(.5);
        }
        .schedule-discount-item{
            display: flex;
            padding: .4rem;
            .schedule-discount-item__name{
                font-size: .37333rem;
                color: #999;
                display: inline-block;
                height: .64rem;
                line-height: .64rem;
                flex-shrink: 0;
            }
            .schedule-discount-item__content{
                -webkit-box-flex: 1;
                flex-grow: 1;
                .support__list{
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    font-size: .32rem;
                    color: #999;
                    flex-wrap: nowrap;
                    height: .64rem;
                    line-height: .64rem;
                    .support__list__item{
                        flex-shrink: 0;
                        display: flex;
                        justify-items: center;
                        .support__list__item__text{
                            display: inline-block;
                            height: .32rem;
                            line-height: .32rem;
                            padding: 0 .4rem;
                        }
                        .support__list__item__divider{
                            display: inline-block;
                            width: .02667rem;
                            height: .32rem;
                            background-color: #999;
                        }
                    }
                }
            }
        }
    }

    .detail__tour-cities{
        margin-top: .32rem;
    }
    .tour-cities{
        height: 4.02667rem;
        background: #fefefe;
        overflow: hidden;
        .tour-cities__desc{
            height: 1.58667rem;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            justify-content: space-between;
            margin-top: .12rem;
            margin-left: .4rem;
            margin-right: .4rem;
            .tour-cities__desc__title{
                font-size: .53333rem;
                font-weight: 700;
                color: #232323;
            }
            .tour-cities__desc__count{
                display: flex;
                font-size: .29333rem;
                -webkit-box-align: center;
                align-items: center;
                .tour-cities__desc__count__num{
                    color: #ff6743;
                }
                .tour-cities__desc__count__arrow{
                    margin-left: .13333rem;
                    width: .13333rem;
                    height: .26667rem;
                    /* border: none;
                    border-color: transparent;
                    vertical-align: middle; */
                }
            }
        }
        .tour-cities__list{
            overflow-x: scroll;
            .tour-cities__list__content{
                display: flex;
                white-space: nowrap;
                flex-wrap: nowrap;
                height: 1.86667rem;
                .tour-cities__list__content__item{
                    width: 2.4rem;
                    height: 1.65333rem;
                    margin-left: .32rem;
                    box-sizing: border-box;
                    flex-shrink: 0;
                    color: #ebebeb;
                    border: .02667rem solid #ebebeb;
                    display: flex;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    flex-direction: column;
                    -webkit-box-pack: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    align-items: center;
                    .tour-cities__list__content__item__city{
                        margin-top: .06667rem;
                        font-weight: 700;
                        font-size: .45333rem;
                        height: .45333rem;
                        line-height: .45333rem;
                        color: #232323;
                    }
                    .tour-cities__list__content__item__city--actived{
                        color: #ff6743;
                    }
                    .tour-cities__list__content__item__date{
                        font-size: .37333rem;
                        height: .37333rem;
                        line-height: .37333rem;
                        margin-top: .16rem;
                        color: #666;
                    }
                    .tour-cities__list__content__item__date--actived{
                        color: #ff6743;
                    }
                }
                .tour-cities__list__content__item--actived{
                    border: .02667rem solid #ff6743;
                }
            }
        }
    }

    .intro {
        /* height: 16.89333rem; */
        background-color: #fefefe;
        padding: 0 .4rem;
        overflow: hidden;
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        .intro__title{
            font-size: .53333rem;
            font-weight: 700;
            line-height: .53333rem;
            color: #232323;
            margin-top: .65333rem;
        }
        .intro__content{
            margin-top: .52rem;
            padding-bottom: .66667rem;
            p{
                font-size: .4rem;
                line-height: .74667rem;
                color: #232323;
                img{
                    border: none;
                    border-color: transparent;
                    vertical-align: middle;
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .intro__mask{
            position: absolute;
            color: #ff6743;
            font-size: .37333rem;
            line-height: .37333rem;
            text-align: center;
            box-sizing: border-box;
            left: 0;
            right: 0;
            height: 1.33333rem;
            bottom: 0;
            background-color: #fff;
            padding-top: .29333rem;
        }
        .intro__more{
            width: 100%;
            height: 2.68rem;
            left: 50%;
            transform: translateX(-50%);
            bottom: 0.33333rem;
            font-weight: 700;
            padding-top: 1.64rem;
            background-image: url(${img19});
            background-repeat: no-repeat;
            position: absolute;
            color: #ff6743;
            font-size: .37333rem;
            line-height: .37333rem;
            text-align: center;
            box-sizing: border-box;
            background-size:10rem 2rem;
        }
    }


    .detail__intro{
        margin-top: .32rem;
    }

    .tips{
        height: 1.86667rem;
        padding: .66667rem .4rem 0;
        background: #fefefe;
    }
    .detail__tips{
        margin-top: .32rem;
        .tips__title{
        display: flex;
        font-size: .53333rem;
        height: .53333rem;
        line-height: .53333rem;
        font-weight: 700;
        color: #232323;
        -webkit-box-align: center;
        align-items: center;
            .tips__title__text{
                -webkit-box-flex: 1;
                flex-grow: 1;
            }
            .tips__title__arrow{
                -webkit-box-flex: 0;
                flex-grow: 0;
                width: .13333rem;
                height: .26667rem;
                background-size: .13333rem .26667rem;
                background-repeat: no-repeat;
                background-image: url(${img13});

            }
        }
        .tips__list{
            margin-top: .53333rem;
            display: flex;
            -webkit-box-pack: justify;
            justify-content: space-between;
            .tips__list__item{
                display: inline-flex;
                -webkit-box-align: center;
                align-items: center;
                .tips__list__item__dot{
                    display: inline-block;
                    width: .10667rem;
                    height: .10667rem;
                    background-color: #999;
                    border-radius: 50%;
                }
                .tips__list__item__text{
                    color: #999;
                    font-size: .34667rem;
                    margin-left: .18667rem;
                    height: .34667rem;
                    line-height: .34667rem; 
                }
            }
        }
    }
    .detail__recommend{
        margin-top: .32rem;
    }
    .recommend{
        padding: .66667rem .4rem 0;
        height: 19.44rem;
        background: #fefefe;
        .recommend__title{
            font-size: .53333rem;
            height: .53333rem;
            line-height: .53333rem;
            font-weight: 700;
            color: #232323;
        }
        .recommend__list{
            margin-top: .08rem;
            .item{
                display: flex;
                height: 4.88rem;
                .cover{
                    border-radius: .10667rem;
                    background-color: #aaa;
                }
                .item__cover{
                    width: 2.93333rem;
                    height: 4rem;
                    margin-top: .44rem;
                    flex-shrink: 0;
                    .cover__img{
                        width: 100%;
                        height: 100%;
                        border-radius: .10667rem;
                        border: none;
                        border-color: transparent;
                        vertical-align: middle;
                    }
                }
                .item__info{
                    margin-left: .38667rem;
                    .item__info__date-week{
                        margin-top: .65333rem;
                        display: flex;
                        -webkit-box-align: center;
                        align-items: center;
                        color: #232323;
                        .item__info__date-week__date{
                            display: inline-block;
                            font-weight: 700;
                            height: .42667rem;
                            line-height: .42667rem;
                            font-size: .42667rem;
                        }
                        .item__info__date-week__week{
                            display: inline-block;
                            font-size: .32rem;
                            height: .32rem;
                            line-height: .32rem;
                            margin-left: .12rem;
                            vertical-align: bottom;
                        }
                    }
                    .item__info__name{
                        display: flex;
                        -webkit-box-align: center;
                        align-items: center;
                        flex-wrap: wrap;
                        height: 2.02667rem;
                        .item__info__name__content{
                            font-size: .45333rem;
                            font-weight: 700;
                            color: #232323;
                            line-height: .61333rem;
                            height: 1.22667rem;
                        }
                        .text-double{
                            word-break: break-all;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }
                    .item__info__place{
                        font-size: .32rem;
                        color: #666;
                        height: .32rem;
                        line-height: .32rem;
                    }
                    .item__info__price{
                        margin-top: .52rem;
                        display: flex;
                        -webkit-box-align: center;
                        align-items: center;
                        .item__info__price__num{
                            display: inline-block;
                            font-size: .42667rem;
                            font-weight: 700;
                            color: #ff6743;
                            height: .42667rem;
                            line-height: .42667rem;
                        }
                        .item__info__price__text{
                            display: inline-block;
                            font-size: .29333rem;
                            height: .29333rem;
                            line-height: .29333rem;
                            color: #999;
                            margin-left: .12rem;
                        }
                    }
                }
            }
        }
        .recommend__more{
            width: 4.24rem;
            height: .96rem;
            border-radius: .10667rem;
            border: 1px solid #ff6743;
            margin-top: .44rem;
            margin-left: auto;
            margin-right: auto;
            font-size: .4rem;
            color: #ff6743;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            .recommend__more__arrow{
                background-image: url(${img15});
                background-size: .13333rem .26667rem;
                background-position: 50%;
                width: .13333rem;
                height: .26667rem;
                display: inline-block;
                margin-left: .16rem;
                background-repeat: no-repeat;
            }
        }
    }
    .bottom-bar{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        border: 1px solid #ebebeb;
        height: 1.32rem;
        width: 100%;
        box-sizing: border-box;
        background-color: #fefefe;
    }
    .detail__bottom-bar{
        position: fixed;
        bottom: 0;
        z-index:999999;
        .bottom-bar__client-service{
            width: 1.36rem;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-flex: 0;
            flex-grow: 0;
            flex-shrink: 0;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            .bottom-bar__client-service__img{
                width: .53333rem;
                height: .53333rem;
            }
            .bottom-bar__client-service__text{
                font-size: .26667rem;
                color: #666;
            }
        }
        .bottom-bar__btn{
            width: 100%;
            height: 1.30667rem;
            background-image: linear-gradient(-50deg,#ff4d4a,#ff9a34),linear-gradient(#fefefe,#fefefe);
            background-blend-mode: normal,normal;
            -webkit-box-flex: 1;
            flex-grow: 1;
            font-size: .45333rem;
            font-weight: 700;
            color: #fefefe;
            text-align: center;
            line-height: 1.30667rem;
        }
    }
    
`

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detailsList: {},
            detailssList: {},
            detailsssList: {},
            detailssssList: [],
            detailsssssList: {},
            bool:true,
            style:{overflow:'hidden',height:'16rem'}
        }
    }

    render() {
        if (this.state.detailsList) {
            return (

                <Fragment>
                    <Detail>
                        <div className="brief detail__brief">
                            <div className="brief__primary">
                                <img className="brief__primary__bg" src={this.state.detailsList.pic} />
                                <div className="brief__primary__mask"></div>
                                <div className="brief__primary__fg">
                                    <div className="brief__primary__fg__title">
                                        <span className="brief__primary__fg__title__text">演出详情</span>
                                        <Link to="/Home">
                                            <span className="brief__primary__fg__title__back"></span>
                                        </Link>
                                        <span className="brief__primary__fg__title__like"></span>
                                        <span className="brief__primary__fg__title__home"></span>
                                    </div>
                                    <div className="brief__primary__fg__content">
                                        <div className="cover brief__primary__fg__content__cover">
                                            <img className="cover__img" src={this.state.detailsList.pic} />
                                        </div>
                                        <div className="brief__primary__fg__content__tag">
                                            <div className="juooo_sponsor">
                                                {<span className="logo_i" dangerouslySetInnerHTML={{ __html: this.state.detailsList.sche_icon }}></span>}
                                            </div>
                                        </div>
                                        <div className="brief__primary__fg__content__info">
                                            <div className="brief__primary__fg__content__info__name">
                                                {this.state.detailsList.schedular_name}
                                            </div>
                                            <div className="brief__primary__fg__content__info__tag"></div>
                                            <div className="brief__primary__fg__content__info__price">
                                                <span className="brief__primary__fg__content__info__price__range">￥{this.state.detailsList.price_interval}</span>
                                                <span className="brief__primary__fg__content__info__price__type">
                                                    <span className="brief__primary__fg__content__info__price__type__plus"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="brief__secondary">
                                <div className="brief__secondary__info">
                                    <div className="brief__secondary__info__date-time">
                                        <span className="brief__secondary__info__date-time__date">{this.state.detailsssssList.day}</span>
                                        <span className="brief__secondary__info__date-time__time">{this.state.detailsssssList.hour}</span>
                                    </div>
                                    <div className="brief__secondary__info__place">{this.state.detailsList.city_name}|{this.state.detailsList.venue_name}</div>
                                </div>
                                <div className="brief__secondary__pointer"></div>
                            </div>
                        </div>
                        <div className="card-plus-tips detail__card-tips">
                            <div className="base-tips">
                                <img className="base-tips__tag" src={img11} />
                                <div className="base-tips__info">
                                    <span className="base-tips__info__name">专享5折起 最高可省￥165</span>
                                    <span className="base-tips__info__arrow"></span>
                                </div>
                            </div>
                        </div>
                        <div className="schedule-discount detail__schedule-discount">
                            <div>
                                <div className="schedule-discount-item">
                                    <span className="schedule-discount-item__name">入场</span>
                                    <span className="schedule-discount-item__content">
                                        <div className="enter">{this.state.detailsList.tips}</div>
                                    </span>
                                </div>
                                <div className="divider"></div>
                            </div>
                            <div>
                                <div className="schedule-discount-item support">
                                    <span className="schedule-discount-item__name">支持：</span>
                                    <span className="schedule-discount-item__content">
                                        <span className="support__list">
                                            <span className="support__list__item">
                                                <span className="support__list__item__text">{this.state.detailssssList[0]}</span>
                                            </span>
                                            <span className="support__list__item">
                                                <span className="support__list__item__text">{this.state.detailssssList[1]}</span>
                                            </span>
                                            <span className="support__list__item">
                                                <span className="support__list__item__text">{this.state.detailssssList[2]}</span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="tour-cities detail__tour-cities">
                            <div className="tour-cities__desc">
                                <span className="tour-cities__desc__title">巡演城市</span>
                                <span className="tour-cities__desc__count">
                                    <span className="tour-cities__desc__count__num">4</span>场
                    <img className="tour-cities__desc__count__arrow" src={img13} />
                                </span>
                            </div>
                            <div className="tour-cities__list">
                                <div className="tour-cities__list__content">
                                    <div className="tour-cities__list__content__item tour-cities__list__content__item--actived">
                                        <div className="tour-cities__list__content__item__city tour-cities__list__content__item__city--actived">陵水</div>
                                        <div className="tour-cities__list__content__item__date tour-cities__list__content__item__date--actived">09/06</div>
                                    </div>
                                    <div className="tour-cities__list__content__item">
                                        <div className="tour-cities__list__content__item__city">长沙</div>
                                        <div className="tour-cities__list__content__item__date">09/10</div>
                                    </div>
                                    <div className="tour-cities__list__content__item">
                                        <div className="tour-cities__list__content__item__city">贵阳</div>
                                        <div className="tour-cities__list__content__item__date">09/12</div>
                                    </div>
                                    <div className="tour-cities__list__content__item">
                                        <div className="tour-cities__list__content__item__city">天津</div>
                                        <div className="tour-cities__list__content__item__date">09/20</div>
                                    </div>
                                    <div className="tour-cities__list__content__item">
                                        <div className="tour-cities__list__content__item__city">济南</div>
                                        <div className="tour-cities__list__content__item__date">09/22</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="intro detail__intro" style={this.state.style}>
                            <div className="intro__title">演出介绍</div>
                            <div className="intro__content" dangerouslySetInnerHTML={{ __html: this.state.detailsList.schedular_desc }}></div>
                            <div className="intro__mask" onClick={this.all.bind(this)} style={{display:this.state.bool?'block':'none'}}>展示全部</div>
                            <div className="intro__more"></div>
                        </div>
                        <div className="tips detail__tips">
                            <div className="tips__title">
                                <span className="tips__title__text">温馨提醒</span>
                                <span className="tips__title__arrow"></span>
                            </div>
                            <div className="tips__list">
                                <span className="tips__list__item">
                                    <span className="tips__list__item__dot"></span>
                                    <span className="tips__list__item__text">快递说明</span>
                                </span>
                                <span className="tips__list__item">
                                    <span className="tips__list__item__dot"></span>
                                    <span className="tips__list__item__text">订票说明</span>
                                </span>
                                <span className="tips__list__item">
                                    <span className="tips__list__item__dot"></span>
                                    <span className="tips__list__item__text">确认订单</span>
                                </span>
                                <span className="tips__list__item">
                                    <span className="tips__list__item__dot"></span>
                                    <span className="tips__list__item__text">购票提醒</span>
                                </span>
                            </div>
                        </div>
                        <div className="recommend detail__recommend">
                            <div className="recommend__title">相关推荐</div>
                            <div className="recommend__list">
                                <div className="item">
                                    <div className="cover item__cover">
                                        <img className="cover__img" src={img14} />
                                    </div>
                                    <div className="item__info">
                                        <div className="item__info__date-week">
                                            <span className="item__info__date-week__date">07/03</span>
                                            <span className="item__info__date-week__week">周三</span>
                                        </div>
                                        <div className="item__info__name">
                                            <div className="item__info__name__content text-double">
                                                2019桂冠之声--“一曲难忘”肖邦24首前奏曲- 曲乐钢琴音乐会-海南陵水
                            </div>
                                        </div>
                                        <div className="item__info__place">陵水 | 雅居乐海上艺术中心</div>
                                        <div className="item__info__price">
                                            <span className="item__info__price__num">￥80</span>
                                            <span className="item__info__price__text">起</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="cover item__cover">
                                        <img className="cover__img" src={img17} />
                                    </div>
                                    <div className="item__info">
                                        <div className="item__info__date-week">
                                            <span className="item__info__date-week__date">07/03</span>
                                            <span className="item__info__date-week__week">周三</span>
                                        </div>
                                        <div className="item__info__name">
                                            <div className="item__info__name__content text-double">
                                                【万有音乐系】《2019“来自英国皇家音乐学院的琴声 ”— 何舜然音乐会》--三亚
                                            </div>
                                        </div>
                                        <div className="item__info__place">陵水 | 雅居乐海上艺术中心</div>
                                        <div className="item__info__price">
                                            <span className="item__info__price__num">￥80</span>
                                            <span className="item__info__price__text">起</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="cover item__cover">
                                        <img className="cover__img" src={img18} />
                                    </div>
                                    <div className="item__info">
                                        <div className="item__info__date-week">
                                            <span className="item__info__date-week__date">07/03</span>
                                            <span className="item__info__date-week__week">周三</span>
                                        </div>
                                        <div className="item__info__name">
                                            <div className="item__info__name__content text-double">
                                                佳能炫飞 • 2019英国正版引进《小猪佩奇舞台剧—佩奇欢乐派对》中文版-徐州站
                                            </div>
                                        </div>
                                        <div className="item__info__place">陵水 | 雅居乐海上艺术中心</div>
                                        <div className="item__info__price">
                                            <span className="item__info__price__num">￥80</span>
                                            <span className="item__info__price__text">起</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="recommend__more" onClick={this.toshow.bind(this)}>
                                查看更多演出<span className="recommend__more__arrow"></span>
                            </div>
                        </div>
                        <div className="bottom-bar detail__bottom-bar">
                            <div className="bottom-bar__client-service">
                                <img className="bottom-bar__client-service__img" src={img16}></img>
                                <span className="bottom-bar__client-service__text">客服</span>
                            </div>
                                <div className="bottom-bar__btn">选座购买</div>
                        </div>
                    </Detail>
                </Fragment>
            )

        } else {
            return null
        }

    }
    componentDidMount() {
        this.detailsList();
        console.log(this.props.location.state)
    }
    detailsList() {
        let num = this.props.location.state;
        axios({
            method: "get",
            url: '/apis/restTicket/getSchDetail',
            params: {
                sch_id: num,
                version: "5.1.4",
                referer: "2"
            }
        }).then((res) => {
            // let detailsList = res.data.data;
            this.setState({ detailsList: res.data.data.scheInfo });
            this.setState({ detailssList: res.data.data.notice })
            this.setState({ detailsssList: res.data.data.pre })
            this.setState({ detailssssList: res.data.data.supportType })
            this.setState({ detailsssssList: res.data.data.scheInfo.time_interval_data })
            // console.log(res)
            // console.log(this.state.detailsList)
            // console.log(this.state.detailssList)
            // console.log(this.state.detailsssList)
            // console.log(this.state.detailssssList)
        })
    }
    toshow() {
        let sid = '?cid=36&caid=36'
        this.props.history.push({
            pathname: `/show/${sid}`,
            state: sid
        })
    }
    all(e){
        let style={};
        this.setState({ style,bool:false})
    }

}
export default withRouter(Details);