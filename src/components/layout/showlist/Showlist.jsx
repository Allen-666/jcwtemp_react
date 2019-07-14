import React, { Component } from 'react';
import styled from 'styled-components'
import { PullToRefresh } from 'antd-mobile';
import axios from "axios"
import ReactDOM from 'react-dom';

const ShowList = styled.div`
    padding-left: .4rem;
    padding-right: .4rem;
    margin-top: 2.24666rem;
    padding-top:.5rem;
    background:#fff;
    ul{
        li{
            display: flex;
            margin-bottom: .86667rem;
            position: relative;
            div:nth-child(1){
                width: 2.93333rem;
                height: 4rem;
                border-radius: .10667rem;
                border: 1px solid #ebebeb;
                position: relative;
                overflow: hidden;
                img{
                    border: none;
                    border-color: transparent;
                    vertical-align: middle;
                    width: 100%;
                    height: 100%;
                }
            }
            div:nth-child(2){
                flex: 1;
                margin-left: .4rem;
                color: #232323;
                padding-top: .13333rem;
                p:nth-child(1){
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
                h3{
                    width: 100%;
                    font-size: .45333rem;
                    line-height: .6rem;
                    min-height: .6rem;
                    max-height: 1.2rem;
                    margin-top: .33333rem;
                    word-break: break-all;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-block-start: 1em;
                    margin-block-end: 1em;
                    margin-inline-start: 0px;
                    margin-inline-end: 0px;
                    font-weight: bold;
                }
                p:nth-child(3){
                    margin-top: .33333rem;
                    width: 5.33333rem;
                    font-size: .32rem;
                    height: .64rem;
                    line-height: .64rem;
                    color: #666;
                    word-break: break-all;
                    overflow: hidden;
                    text-overflow: ellipsis;  
                }
                p:nth-child(4){
                    font-size: .29333rem;
                    color: #999;
                    height: .48rem;
                    line-height: .48rem;
                    margin-top: .26667rem;
                    strong{
                        color: #ff6743;
                        font-size: .42667rem;
                        letter-spacing: 0;
                        margin-right: .13333rem;
                        font-weight: 400; 
                    }
                   
                }
            }
        }
    }
    .end{
        font-size: .32rem;
        color: #666;
        text-align: center;
        height: .53333rem;
        line-height: .53333rem;
        padding-bottom: .26667rem;
        margin-bottom:1.30667rem;;
    }
`
class showList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            data: [],
            num: 1
        }
    }
    componentWillReceiveProps() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        this.getData(this.state.num, (res) => {
            this.setState({
                height: hei,
                // data: res.data.data.list
                data: this.props.tablist
            })
        })
    }
    render() {
        // console.log(this.props.tablist);
        return (
            <div>
                <PullToRefresh
                    damping={60}
                    ref={el => this.ptr = el}
                    style={{
                        height: this.state.height,
                        overflow: 'auto',
                    }}
                    indicator={{ deactivate: '上拉可以刷新' }}
                    direction={'up'}
                    refreshing={true}
                    onRefresh={() => {
                        this.state.num++;
                        this.getData(this.state.num, res => {
                            this.setState({
                                data: this.state.data.concat(res.data.data.list)
                            })
                        })
                    }}
                >
                    <ShowList className="showbox">
                        <ul>
                            {
                                this.state.data.map((el, index) => (
                                    <li key={index}>
                                        <div>
                                            <img src={el.pic} alt="" />
                                        </div>
                                        <div>
                                            <p><strong>{el.show_time_top}</strong>   {el.show_time_bottom}</p>
                                            <h3>{el.name}</h3>
                                            <p>{el.city_name} | {el.venue_name}</p>
                                            <p><strong>￥{el.min_price}</strong>起</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <p className="end">上拉查看更多</p>
                    </ShowList>
                    );
                </PullToRefresh>
            </div >
        )
    }
    getData(num, callback) {
        axios({
            method: 'get',
            url: '/apis/Search/getShowList',
            params: {
                city_id: "0",
                page: num,
                keywords: "",
                version: "5.1.4",
                referer: "2"
            }
        }).then((res) => {
            callback(res)
        })
    }
}

export default showList;