import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import img1 from "@/static/img/sandian.png"
import axios from 'axios'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

const Main = styled.div`
        height: 100%;
        background-color: #fdfdfd;
        padding-top: 1.49333rem;
        padding-bottom: 1.65333rem;
        .wrapper{
            height: 100%;
            .content{
                .theater-list{
                    width:90%;
                    margin:0 auto;
                    .theater-ul{
                        .theater-li{
                            .theater-info-shows{
                                background-color:#fefefe;
                                box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
                                border-radius: .10667rem;
                                border: 1px solid #ebebeb;
                                margin-bottom: .4rem;
                                padding: .54667rem .44rem .56rem;
                                width:90%!important;
                                .theater-info{
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;
                                    .theater-pic-name-count{
                                        display: flex;
                                        color:#232323;
                                        .theater-pic-wrap{
                                            width: 1.33333rem;
                                            height: 1.33333rem;
                                            margin-right: .26667rem;
                                            overflow: hidden;
                                            .theater-pic{
                                                width: 1.33333rem;
                                                vertical-align: middle;
                                                border-radius: .10667rem;
                                            }
                                        }
                                        .theater-name-count-wrap{
                                            max-width: 6rem;
                                            .theater-name{
                                                width: 100%;
                                                overflow: hidden;
                                                white-space: nowrap;
                                                text-overflow: ellipsis;
                                                padding: .08rem 0 .13333rem;
                                                font-size: .45333rem;
                                                color: #232323;
                                                font-weight: 700;
                                            }
                                            .theater-count{
                                                color: #666;
                                                font-size: .32rem;
                                            }
                                        }
                                    }
                                    .theater-link{
                                        display: block;
                                        padding: .26667rem 0 .26667rem .26667rem;
                                        .theater-more-btn{
                                            width: .37333rem;
                                            height: .37333rem;
                                        }
                                    }
                                }
                                .theater-shows{
                                    margin-top: .34667rem;
                                    .theater-show-wrap{
                                        .swiper-container{
                                            width: 100%;
                                            height: 100%;
                                            margin-left: auto;
                                            margin-right: auto;
                                            position: relative;
                                            overflow: hidden;
                                            z-index: 1;
                                            .swiper-wrapper{
                                                position: relative;
                                                width: 100%;
                                                height: 100%;
                                                z-index: 1;
                                                display: flex;
                                                transition-property: transform;
                                                .swiper-slide{
                                                    width: 3.04rem!important;
                                                    flex-shrink: 0;
                                                    height: 100%;
                                                    position: relative;
                                                    .theater-show-date{
                                                        position: relative;
                                                        width: 3.04rem;
                                                        border-bottom: .05333rem solid #ebebeb;
                                                        border-radius: .02667rem;
                                                        padding-bottom: .38667rem;
                                                        margin-bottom: .46667rem;
                                                        .show-date{
                                                            color: #b3b3b3;
                                                            font-size: .37333rem;
                                                            padding-right: .18667rem;
                                                            text-align: center;
                                                            height: .33333rem;
                                                        }
                                                        .dot{
                                                            position: absolute;
                                                            left: 50%;
                                                            bottom: -.12rem;
                                                            display: inline-block;
                                                            width: .18667rem;
                                                            height: .18667rem;
                                                            margin-left: -.18667rem;
                                                            border-radius: 50%;
                                                            background-color: #ccc;
                                                        }
                                                    }
                                                    .theater-show-pic{
                                                        display: block;
                                                        width: 3.04rem;
                                                        height: 3.89333rem;
                                                        line-height: 3.89333rem;
                                                        overflow: hidden;
                                                        .show-pic{
                                                            width: 2.55333rem;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
`

class zhuti extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    render() {
        return (
            <Main>
                <div className="wrapper">
                    <div className="content">
                        <div className="theater-list">
                            <ul className="theater-ul">
                                {this.state.list.map((item, index) => (

                                    <li className="theater-li" key={index}>

                                        <div className="theater-info-shows">
                                            <div className="theater-info" >
                                                <a href="javascrpt:;" className="theater-pic-name-count" onClick={this.toShow.bind(this, item)}>
                                                    <div className="theater-pic-wrap">
                                                        <img src={item.pic} className="theater-pic"></img>
                                                    </div>
                                                    <div className="theater-name-count-wrap">
                                                        <p className="theater-name">{item.name}</p>
                                                        <p className="theater-count">{item.count}场在售出演</p>
                                                    </div>
                                                </a>
                                                <a className="theater-link" onClick={this.toShow.bind(this, item)}>
                                                    <img className="theater-more-btn" src={img1}></img>
                                                </a>
                                            </div>
                                            <div className="theater-shows">
                                                <div className="theater-show-wrap">
                                                    <div className="swiper-container sw swiper-container-horizontal">
                                                        <div className="swiper-wrapper">
                                                            {item.show_list.map((item1, index) => (
                                                                <div className="swiper-slide swiper-slide-active" key={index}>
                                                                    <div className="theater-show-date">
                                                                        <p className="show-date">{item1.show_time}</p>
                                                                        <span className="dot"></span>
                                                                    </div>
                                                                    <a className="theater-show-pic" onClick={this.toDtail.bind(this, item1)}>
                                                                        <img className="show-pic" src={item1.pic} />
                                                                    </a>
                                                                </div>
                                                            ))}
                                                            <div style={{ fontSize: '.5rem', width: '1rem', marginTop: '1.6rem' }} onClick={this.showshow.bind(this)}>查看更多</div>
                                                            {/* <div style={{fontSize:'.5rem',width:'1rem',marginTop:'1.6rem'}} onClick={this.showshow.bind(this)}>查看更多</div> */}
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                ))}

                            </ul>
                        </div>
                    </div>
                </div>
            </Main>
        )
    }
    componentDidMount() {
        this.test();
    }
    test() {
        axios({
            method: 'get',
            url: '/apis/RestTheatre/getTheatreList',
            data: {
                page: '1',
                version: '5.1 .4',
                referer: '2',
            }
        }).then((res) => {
            let temp = res.data.data.theatre_list;
            this.setState({
                list: temp
            });
            new Swiper('.sw', {
                slidesPerView: 3,
                paginationClickable: true,
                spaceBetween: 30
            });
            // console.log(this.state.list)
        })
    }
    showshow() {
        this.props.history.push("/show2")
    }
    toShow(el) {
        // console.log(el.theatre_url);
        let t_id = el.theatre_url.split('index')[1]
        this.props.history.push({
            pathname: `/theatre/${t_id}`,
            data: el
        })
    }
    toDtail(item) {
        // console.log(item.id);
        let D_id = item.id
        this.props.history.push({
            pathname: `/details/${D_id}`,
            state: D_id
        })
    }
}
export default withRouter(zhuti);