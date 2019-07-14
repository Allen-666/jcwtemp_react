import React, { Fragment, PureComponent } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import styled from 'styled-components'
import { withRouter } from "react-router-dom"

let jiantou = require("@/static/img/jiantou.png")
let sandian = require('@/static/img/sandian.png')
const Hottour = styled.div`
    margin-top: .53333rem;
    padding-left: .4rem;
    background-color: #fff;
    .title-wrap {
        overflow: hidden;
        display:flex;
        justify-content:space-between;
        h3 {
            font-size: .53333rem;
            font-weight: 700;
            color: #232323;
        }
        a {
            display: block;
            width: 0.53333rem;
            height: 0.53333rem;
            margin-right: 0.26667rem;
            margin-top: 0.04rem;
            color: #232323;
            img {
            display:block;
            width: 100%;
            height: 100%;
            }
        }
    }
    .venue-list{
        margin-top: .53333rem;
        .swiper-slide{
            width: 6.77333rem!important;
            margin-right: 20px;
            height: 7.92rem;
            border-radius: .10667rem;
            border: 1px solid #ebebeb;
            padding: .53333rem .45333rem;
            box-sizing: border-box;
            .venue-info {
                height: 1.36rem;
                display:flex;
                justify-content:space-between;
                .venue-icon{
                    width: 1.33333rem;
                    height: 1.33333rem;
                    border-radius: .10667rem;
                    border: 1px solid #ebebeb;
                   >a{
                        display: block;
                        width: 100%;
                        outline: none;
                        height: 100%;
                        color: #232323;
                        img{
                            width: 100%;
                            display: block;
                             height: 100%;
                        }
                    }
                }
                .venue-name{
                    margin-left: .26667rem;
                    width: 3.33333rem;
                    h3{
                        margin-top: .06667rem;
                        font-size: .45333rem;
                        color: #232323;
                        height: .6rem;
                        line-height: .6rem;
                        white-space: nowrap;
                        font-weight: 700;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    p{
                        margin-top: .2rem;
                        font-size: .32rem;
                        color: #666;
                        height: .4rem;
                        line-height: .4rem;
                    }
                    
                }
                .more{
                    width: .37333rem;
                    height: .37333rem;
                    background-image: url(${sandian});
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: 50%;
                    margin-top: .49333rem;
                    display:block;
                }
            }
            .time-shaft{
                width: 100%;
                height: .05333rem;
                background-color: #ebebeb;
                border-radius: .02667rem;
                margin-top: 1.06667rem;
                position: relative;
                left: 0;
                right: 0;
                .left{
                    width: 50%;
                    height: .90667rem;
                    position: absolute;
                    text-align: center;
                    bottom: -.06667rem;
                    left:0;
                }
                .right{
                    width: 50%;
                    height: .90667rem;
                    position: absolute;
                    text-align: center;
                    bottom: -.06667rem;
                    right:0;
                }
                .date{
                    font-size: .37333rem;
                    color: #b3b3b3;
                    height: .46667rem;
                    line-height: .46667rem;
                    display: block;
                }
                .circle{
                    width: .18667rem;
                    height: .18667rem;
                    background-color: #ccc;
                    border-radius: 50%;
                    margin: .25333rem auto 0;
                    display: block;
                }
            }
            .show-list {
                margin-top: .46667rem;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                justify-content: space-between;
                .item{
                    width: 2.85333rem;
                    height: 3.89333rem;
                    border-radius: .10667rem;
                    border: 1px solid #ebebeb;
                    overflow: hidden;
                    a{
                        display: block;
                        width: 100%;
                        height: 100%;
                        color: #232323;
                        img{
                            width: 100%;
                            display: block;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
`
class Hottours extends PureComponent {
    componentWillReceiveProps(nextProps) {
        this.test()

    }
    render() {
        // console.log(this.props);
        return (
            <Hottour>
                <div className="title-wrap">
                    <h3 className="title">热门场馆</h3>
                    <a href="javascript:;" className="more-r">
                        <img src={jiantou} />
                    </a>
                </div>
                <div className="venue-list">
                    <div className="swiper-container sh">
                        <div className="swiper-wrapper">
                            {
                                this.props.theatreList.toJS().map((el, index) =>
                                    (
                                        <div className="swiper-slide" key={index}>
                                            <div className="venue-info" onClick={this.toTheatre.bind(this, el)}>
                                                <div className="venue-icon">
                                                    <a href="javascript:;">
                                                        <img src={el.pic} />
                                                    </a>
                                                </div>
                                                <div className="venue-name">
                                                    <h3>{el.name}</h3>
                                                    <p>{el.count}在售演出</p>
                                                </div>
                                                <a href="javascript:;" className='more'></a>
                                            </div>
                                            <div className="time-shaft">
                                                <p className='left'>
                                                    <span className='date'>{el.show_list[0].show_time}</span>
                                                    <span className="circle"></span>
                                                </p>
                                                <p className="right">
                                                    <span className='date'>{el.show_list[1].show_time}</span>
                                                    <span className="circle"></span>
                                                </p>
                                            </div>
                                            <div className="show-list">
                                                {
                                                    el.show_list.map((item, index) =>
                                                        (
                                                            <div className="item" key={index} onClick={this.toDetail.bind(this, item)}>
                                                                <a href="javascript:;">
                                                                    <img src={item.pic} />
                                                                </a>
                                                            </div>
                                                        ))
                                                }
                                            </div>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </Hottour>
        )
    }
    test() {
        new Swiper('.sh', {
            observer: true,
            slidesPerView: 'auto',
        })
    }
    toDetail(el) {
        // console.log(el.id);
        let s_id = el.id
        this.props.history.push({
            pathname: `/details/${s_id}`,
            state: s_id
        })
    }
    toTheatre(el) {
        // console.log(el.theatre_url);
        let theatre_id = el.theatre_url.split('index')[1]
        this.props.history.push({
            pathname: `/Theatre/${theatre_id}`,
            data: el
        })
    }
}
export default withRouter(Hottours) 