/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import styled from 'styled-components'
import axios from "axios"
import Swipe from '@/components/layout/swiper/Swiper_s'
import Swipe_show from '@/components/layout/swiper/Swipe_show'
import { withRouter } from "react-router-dom";
let jiantou = require('@/static/img/jiantou.png')

const Hot_tour = styled.div`
    margin-top: .53333rem;
    .hot-wrap {
            padding-top: 0.53333rem;
            padding-left: 0.4rem;
            padding-bottom: 0.93333rem;
            background-color: #fff;
            .title {
            padding-left: 0;
            }
            .hot-list {
            margin-top: 0.53333rem;
            }
            .title-wrap {
            overflow: hidden;
                h3 {
                    font-size: 0.4rem;
                    font-weight: 700;
                    color: #232323;
                    float: left;
                    height: 0.61333rem;
                    line-height: 0.61333rem;
                    padding-left: 0.4rem;
                }
                a {
                    display: block;
                    float: right;
                    width: 0.53333rem;
                    height: 0.53333rem;
                    margin-right: 0.26667rem;
                    margin-top: 0.04rem;
                    color: #232323;
                    img {
                    border: none;
                    border-color: transparent;
                    vertical-align: middle;
                    width: 100%;
                    height: 100%;
                    }
                }
        }
    }
    .tour-wrap {
        background-color: #f5f5f5;
        padding-top: 0.53333rem;
        padding-bottom: 0.53333rem;
        .title-wrap {
          overflow: hidden;
          h3 {
            padding-left: 0.4rem;
          }
        }
        .hot-list {
          margin-top: 0.53333rem;
          .tourSwiper{
              .container{
                  background:none!important;
              }
          }
        }
        .title-wrap {
        overflow: hidden;
            h3 {
                font-size: 0.4rem;
                font-weight: 700;
                color: #232323;
                float: left;
                height: 0.61333rem;
                line-height: 0.61333rem;
                padding-left: 0.4rem;
            }
            a {
                display: block;
                float: right;
                width: 0.53333rem;
                height: 0.53333rem;
                margin-right: 0.26667rem;
                margin-top: 0.04rem;
                color: #232323;
                img {
                border: none;
                border-color: transparent;
                vertical-align: middle;
                width: 100%;
                height: 100%;
                }
            }
        }
      }
      
`
class HotTour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hots_show_list: [],
            tour_show_list: []
        }
    }
    render() {
        // let { navListtitle, navListpic } = this.props
        if (this.state.hots_show_list.length != 0 && this.state.tour_show_list.length != 0) {
            return (
                <Hot_tour>
                    <div className="hot-wrap">
                        <div className="title-wrap">
                            <h3>热门演出</h3>
                            <a href="javascript:;">
                                <img src={jiantou}  />
                            </a>
                        </div>
                        <div className="hot-list">
                            <div className='hotSwiper'>
                                <Swipe hots_show_list={this.state.hots_show_list} ></Swipe>
                            </div>
                        </div>
                    </div>
                    <div className="tour-wrap">
                        <div className="title-wrap">
                            <h3>巡回演出</h3>
                            <a href="javascript:;">
                                <img src={jiantou} onClick={ this.xunhui.bind(this)} />
                            </a>
                        </div>
                        <div className="hot-list">
                            <div className='tourSwiper'>
                                <Swipe_show tour_show_list={this.state.tour_show_list}></Swipe_show>
                            </div>
                        </div>
                    </div>
                </Hot_tour>
            );
        } else {
            return null
        }

    }
    componentDidMount() {
        const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('https://m.juooo.com/home/getHotsRecommendList?city_id=0&rows=50&&version=5.1.4&referer=2').then(res => {
            // console.log(res.data.data.hots_show_list.slice(0, 10))
            _this.setState({ hots_show_list: res.data.data.hots_show_list.slice(0, 10) })
        })
        axios.get('https://m.juooo.com/home/getTourRecommendList?city_id=0&rows=6&&version=5.1.4&referer=2').then(res => {
            // console.log(res.data.data.hots_show_list.slice(0, 10))
            _this.setState({ tour_show_list: res.data.data.tour_show_list })
        })
    }
    xunhui(){
        this.props.history.push('/Xunhui')
    }
}

export default withRouter(HotTour) ;
