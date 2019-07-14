import React, { Component, PureComponent } from 'react';
import styled from 'styled-components'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import Showlist from "@/components/layout/showlist/Showlist"
import Citylist from "@/components/layout/citylist/Citylist"
import axios from "axios"
import { callbackify } from 'util';
let Loc = require('@/static/img/loc.png')
const ShowTabbar = styled.div`
   .tabbox{
    display: flex;
    padding-left: .4rem;
    padding-bottom: .26667rem;
    padding-top: .26667rem;
    background-color: #fefefe;
    position: fixed;
    left: 0;
    top: 1.17333rem;
    z-index: 1;
    width: 100%;
    box-sizing: border-box;
    box-shadow: #ccc 0 0 .05rem;
    .swiper-container{
        flex: 1;
    overflow: hidden;
        .swiper-wrapper{
        display: flex;
       .swiper-slide{
           width:auto;  
            font-size: .4rem;
            color: #232323;
            padding: 0 .13333rem;
            border-bottom: .04rem solid transparent;
            border-radius: .02667rem;
            height: .64rem;
            line-height: .64rem;
            margin-right: .4rem;
         } 
         .selected{
            color: #ff6743;
            border-color: #ff6743;
         }
        }
    }   
    .city{
        width: 2rem;
        border-left: .02667rem solid #e0e0e0;
        font-size: .4rem;
        color: #666;
        height: .37333rem;
        line-height: .37333rem;
        margin-top: .13333rem;
        text-align: center;
        span:nth-child(1){
            text-align: center;
            color: #666;
            font-size: .4rem;
            line-height: .37333rem;
        }
        span:nth-child(2){
            display: inline-block;
            width: .29333rem;
            height: .34667rem;
            background-image: url(${Loc}) ;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50%;
        } 
    }
   }
   
`
class showTabbar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            current: 202,
            tablist: [],
            citylist: [],
            bool: false,
            city: "全国"
        }
    }
    componentWillReceiveProps(nextProps) {
        this.test()
    }
    fn(data) {
        this.setState({
            bool: false, //把父组件中的parentText替换为子组件传递的值
            city: data,
        }, () => {
            //    console.log(this.state.city);//setState是异步操作，但是我们可以在它的回调函数里面进行操作
        });

    }
    render() {
        // console.log(this.props.caid);
        // let caid = this.props.caid.split('&')[1].split('=')[1]
        // console.log(caid);
        return (
            <ShowTabbar className="showbox">
                <div className="tabbox">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className={['swiper-slide', this.state.current === 202 ? 'selected' : ''].join(" ")}
                                onClick={this.itemNav.bind(this, 202, 0)} >全部</div>
                            {
                                this.props.tabtitle.toJS().map((el, index) => (
                                    <div key={index} className={['swiper-slide', index === this.state.current ? 'selected' : ''].join(" ")} onClick={this.itemNav.bind(this, index, el.category_id)}>
                                        <span>{el.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="city">
                        <span onClick={this.changeBool.bind(this, this.state.bool)}>{this.state.city}</span>
                        <span></span>
                    </div>
                </div>
                <Showlist tablist={this.state.tablist}></Showlist>
                {
                    this.state.bool ? <Citylist citylist={this.state.citylist} pfn={this.fn.bind(this)} /> : ""
                }
            </ShowTabbar>
        )
    }
    componentDidMount() {
        let sum = this.props.caid.split('&')[1].split("=")[1]
        // this.setState({ current: sum })
        this.itemNav(202, sum)
        // console.log(this.props);
    }
    test() {
        new Swiper('.swiper-container', {
            slidesPerView: 'auto',
        });
    }
    changeBool(data) {
        axios({
            method: 'get',
            url: '/apis/Search/getCity',
            params: {
                version: "5.1.4",
                referer: "2"
            }
        }).then((res) => {
            //  数据就变成了可以触发事件监听类型 
            // console.log(res);
            this.setState({
                bool: !data,
                citylist: res.data.data.city_list,
            })
        })
    }
    itemNav(index, el) {
        // console.log(index, el)
        axios({
            method: 'get',
            url: '/apis/Search/getShowList',
            params: {
                category: el,
                city_id: "0",
                page: "1",
                keywords: "",
                version: "5.1.4",
                referer: "2"
            }
        }).then((res) => {
            this.setState({
                tablist: res.data.data.list,
                current: index
            })
        })
    }
}
export default showTabbar;