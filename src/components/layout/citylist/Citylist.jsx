import React, { Component } from 'react';
import styled from 'styled-components'


const CityList = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 1.17333rem;
    bottom: 0;
    z-index: 1000;
   .city-bg{
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.6);
        .city-left{
            width: 2.16rem;
            height: 100%;
            float: left;
        }
        .city-right{
            width: 7.84rem;
            height: 100%;
            background-color: #fefefe;
            float: right;
            padding: .4rem .4rem 0;
            box-sizing: border-box;
            position: relative;
             .city-list{
                .title{
                    font-size: .4rem;
                    color: #666;
                    height: .53333rem;
                    line-height: .53333rem;
                    font-weight: bold;
                        span{
                            font-size: .4rem;
                            color: #666;
                            height: .53333rem;
                            line-height: .53333rem;
                        }
                    }
                }
            .list-warp{
                height: 13.6rem;
                padding-bottom: 1.2rem;
                overflow-y: scroll;
                margin-top: .26667rem;              
                box-sizing: border-box;
                text-align: center;
                ul{
                    overflow: hidden;
                    li{
                        float: left;
                        text-align: center;
                        width: 2.24rem;
                        height: .85333rem;
                        line-height: .85333rem;
                        border-radius: .05333rem;
                        background-color: #f5f5f5;
                        color: #232323;
                        font-size: .32rem;
                        margin-right: .16rem;
                        margin-bottom: .16rem;
                        display: block;
                    }
                    li:nth-child(3n){
                        margin-right: 0;
                    }
                    .active{
                        background-color: #fff1e9;
                        color: #ff6743;
                    }
                }
            }
        }
            .footer{
                height: 1.2rem;
                border-top: 1px solid #ebebeb;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                text-align: center;
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                background-color: #fefefe;
                span{
                    -webkit-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    font-size: .37333rem;
                    color: #232323;
                    height: 1.2rem;
                    line-height: 1.2rem;
                }
                .selected{
                    color: #fff;
                    background-color: #ff6743;
                }
            } 
   }
   
`
class cityList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 202,
            bool: true,
            city:'全国',
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ citylist: nextProps.citytitle })
    }
    clickFun(text) {
        this.props.pfn(text)//这个地方把值传递给了props的事件当中
    }
    render() {

        return (
            <CityList className="showbox">
                <div className="city-bg">
                    <div className="city-left"></div>
                    <div className="city-right">
                        <div className="city-list">
                            <h3 className="title">
                                <span>城市</span>
                                <span></span>
                            </h3>
                            <div className="list-warp">
                                <ul>
                                    <li className={this.state.current === 202 ? 'active' : ''} onClick={() => { this.itemNav(202,'全国') }}>全国</li>
                                    {
                                        this.props.citylist.map((el, index) => (
                                            <li key={index} className={index === this.state.current ? 'active' : ''} onClick={() => { this.itemNav(index,el.name) }}>{el.name}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="footer">
                            <span className={this.state.bool === false ? 'selected' : ''} onClick={() => { this.changeBoolFalse() }}>重置</span>
                            <span className={this.state.bool === true ? 'selected' : ''} onClick={() => { this.changeBoolTrue() }} onClick={this.clickFun.bind(this,this.state.city)}>确定</span>
                        </div>
                    </div>
                </div>
            </CityList>
        );
    }
    itemNav = (index,el) => {
        this.setState({
            current: index,
            city:el,
        })
    }
    changeBoolFalse = () => {
        this.setState({
            bool: false,
        })
        this.itemNav(202);

    }
    changeBoolTrue = () => {
        this.setState({
            bool: true,
        })

    }
}

export default cityList;    