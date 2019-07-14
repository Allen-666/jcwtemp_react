import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { PullToRefresh } from 'antd-mobile';
import styled from 'styled-components'
import axios from 'axios'
import { withRouter } from "react-router-dom";
import Observer from "@/Observer"

let data_img = require('@/static/img/data_image.png')

const Home_recommend = styled.div`
    background-color: #fff;
    margin-top: 1.06667rem;
    padding: 0 .4rem;
    .title-wrap {
        overflow: hidden;
        h3 {
            font-size: .53333rem;
            font-weight: 700;
            color: #232323;
            }
    }
    .recommend-list{
        margin-top: .53333rem;
        ul{
            li{
                display: flex;
                margin-bottom: .86667rem;
                position: relative;
                .show-icon{
                    width: 2.93333rem;
                    height: 4rem;
                    border-radius: .10667rem;
                    border: 1px solid #ebebeb;
                    position: relative;
                    overflow: hidden;
                    a{
                        display: block;
                        width: 100%;
                        height: 100%;
                        img{
                            width: 100%;
                            height: 100%;
                            display: block;
                        }
                    }
                    .juooo_sponsor{
                        span{
                            position: absolute;
                            left: .10667rem;
                            top: -.02667rem;
                            width: .77333rem;
                            height: .93333rem;
                            display: block;
                            /* background: url(); */
                            background-size: 100%;
                        }
                    }
                }
                .item-desc{
                    flex: 1;
                    margin-left: .4rem;
                    color: #232323;
                    padding-top: .13333rem;
                    .show-date{
                        font-size: .32rem;
                        height: .64rem;
                        line-height: .64rem;
                        letter-spacing: 1px;
                        color: #666;
                        strong{
                            color: #232323;
                            font-size: .42667rem;
                        }
                    }
                    a {
                        display: block;
                        h3{
                            width: 100%;
                            font-size: .45333rem;
                            line-height: .6rem;
                            min-height: .6rem;
                            max-height: 1.2rem;
                            margin-top: .33333rem;
                            color: #232323;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            word-break: break-all;
                            font-weight:bold;
                        }
                    }
                    p{
                        margin-top: .33333rem;
                        width: 5.33333rem;
                        font-size: .32rem;
                        height: .64rem;
                        line-height: .64rem;
                        color: #666;
                    }
                    .price{
                        font-size: .29333rem;
                        color: #999;
                        height: .48rem;
                        line-height: .48rem;
                        margin-top: .26667rem;
                        .c_ff6{
                            font-size: .42667rem;
                            letter-spacing: 0;
                            margin-right: .13333rem;
                            font-weight: 400;color: #ff6743!important;
                        }
                    }
                }
            }
        }
        .btn-more{
            display: block;
            margin: 0 auto;
            width: 4.24rem;
            height: .96rem;
            line-height: .96rem;
            border-radius: .10667rem;
            border: 1px solid #ff6743;
            font-size: .4rem;
            color: #ff6743;
            img{
                width: .13333rem;
                height: .26667rem;
                margin-left: .13333rem;
                vertical-align: initial;
            }
        }
    }
`

class Homerecommend extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            data: [],
            count: 0,
            num: 1
        };
    }

    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        this.getData(this.state.num, (res) => {
            this.setState({
                height: hei,
                data: res.data.data.recommend_show_list
            })
        })
    }
    handleOnScroll() {
        if(ReactDOM.findDOMNode(this.ptr).scrollTop>20){
            Observer.$emit("topRun",true)
        }else{
            Observer.$emit("topRun",false)
        }
    }
    render() {
        return (
            <div>
                <PullToRefresh
                    damping={60}
                    ref={el => this.ptr = el}
                    style={{
                        height: this.state.height,
                        overflow: 'auto',
                    }}
                    onScrollCapture={this.handleOnScroll.bind(this)}
                    indicator={{ deactivate: '上拉可以刷新' }}
                    direction={'up'}
                    refreshing={true}
                    onRefresh={() => {
                        this.state.num++;
                        this.getData(this.state.num, res => {
                            this.setState({
                                data: this.state.data.concat(res.data.data.recommend_show_list)
                            })
                        })
                    }}
                >
                    {this.props.children}
                    <Home_recommend>
                        <div className="title-wrap"><h3 className="title">为你推荐</h3></div>
                        <div className="recommend-list">
                            <ul>
                                {
                                    this.state.data.map((el, index) => (
                                        <li key={index} onClick={this.toDetail.bind(this, el)}>
                                            <div className="show-icon">
                                                <a href="javascript:;">
                                                    <img src={el.schePic} />
                                                </a>
                                            </div>
                                             <div className="item-desc">
                                                <div className="show-date">
                                                    <strong>{el.show_time}</strong>{el.week}
                                                </div>
                                                <a href="javascript:;">
                                                    <h3>{el.show_name}</h3>
                                                </a>
                                                <p>{el.c_name} | {el.v_name}</p>
                                                <p className="price">
                                                    <strong className='c_ff6'>￥{el.low_price}</strong>起
                                            </p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <button className="btn-more">
                                查看更多演出<img src={data_img} /></button>
                        </div>
                    </Home_recommend>
                </PullToRefresh>
            </div >);
    }
    getData(num, callback) {
        axios({
            method: 'get',
            url: '/apis/home/getRecommendShow',
            params: {
                version: "5.1.4",
                referer: "2",
                page: num
            }
        }).then((res) => {
            callback(res);
        })
    }
    toDetail(el) {
        console.log(el.sche_id);
        let s_id = el.sche_id
        this.props.history.push({
            pathname: `/details/${s_id}`,
            state: s_id
        })
    }
}

export default withRouter(Homerecommend)