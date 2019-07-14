import React, { Fragment, Component } from "react"
import styled from 'styled-components'
import axios from "axios"
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
let Jiantouplus = require('@/static/img/jiantouplus.png')
const CityChose = styled.div`
    .box{
            z-index:10;
            position: fixed;
            top:0;
            background: #fff;
            width:100%;
            text-align:center;
            height: 1.17333rem;
            line-height: 1.17333rem;
            border-bottom: 0.01rem solid #ebebeb;
        span{
                background: url(${Jiantouplus}) no-repeat .4rem 50%;
                background-size: .49rem .42rem;
                position: absolute;
                top: 0;
                left:0;
                display: inline-block;
                width: 1.33333rem;
                height: 1.17333rem;
            }
            h3{
                font-size: .36rem;
                font-weight: 400;
                color: #232323;
                padding: 0 1.33333rem;
            }
        }
   .box2{
        width: 100%;
        min-height: 100%;
        padding-left: .32rem;
        padding-right: .32rem;
        background-color: #fff;
        padding-top: .94rem;
    
    .p{
        font-size: .32rem;
        color: #999999;
        line-height: .512rem;
        padding-top: .5rem;
    }
    .p:nth-last-of-type(1){
        padding-bottom: 0.5rem;
    }
    .div1{
        display: flex;
        flex-wrap: wrap;
        margin-left: -0.32rem;
        margin-right: -0.32rem;
        .a1{
            width: 2.6rem;
            height: 0.8rem;
            line-height: .8rem;
            background-color: #f5f5f5;
            font-size: .36rem;
            color: #212121;
            text-align: center;
            border-radius: 0.10667rem;
            margin: 0.42667rem 0.256rem 0;
            padding-left: 0.10667rem;
            padding-right: 0.10667rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
    .div2{
        display: flex;
        flex-wrap: wrap;
        margin-left: -0.32rem;
        margin-right: -0.32rem;
        .a2{
            width: 2.6rem;
            color: #ff7919;
            height:.8rem;
            line-height: .8rem;
            background-color: #f5f5f5;
            font-size: .36rem;
            text-align: center;
            border-radius: 0.10667rem;
            margin: 0.42667rem 0.256rem 0;
            padding-left: 0.10667rem;
            padding-right: 0.10667rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
    .div3{
        display: flex;
        flex-wrap: wrap;
        margin-left: -0.32rem;
        margin-right: -0.32rem;
        .a3{
            width: 2.6rem;
            height: .8rem;
            line-height: .8rem;
            background-color: #f5f5f5;
            font-size: .36rem;
            color: #212121;
            text-align: center;
            border-radius: 0.10667rem;
            margin: 0.42667rem 0.256rem 0;
            padding-left: 0.10667rem;
            padding-right: 0.10667rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
    .div4{
        .letter{
            display: block;
            height: .5rem;
            line-height: .5rem;
            font-size: 0.34rem;
            color: #666;
            background-color: #f6f6f6;
            margin-left: -0.53333rem;
            margin-right: -0.53333rem;
            padding-left: 0.64rem;
        }
        .div5{
            font-family: Arial, "微软雅黑", sans-serif;
            .a5{
            display: block;
             height: .9rem;
            line-height: .9rem;
             border-top: 1px solid #e6e6e6;
            font-size: .37rem;
            color: #333333;
            padding-left: 0.10667rem;
                }  
            }       
        }       
   }
   .right{
        position: fixed;
        top: 4.26667rem;
        right: 0.32rem;
        width: 1.06667rem;
        overflow-x: hidden;
        .right-letter{
            display: block;
            font-size: 0.23rem;
            color: #666;
            height: 0.38267rem;
            line-height: 0.34667rem;
            text-align: right;

        }
   }
   
`
class cityTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getcity: [],
            list:["全国","广州","深圳","北京","上海","成都","石家庄","重庆","陵水","武汉","廊坊","长沙","杭州","南京","无锡","合肥","苏州","泉州","绍兴","徐州","宜昌",
            "济南","柳州","台北","天津","太原","郑州","澳门","昆明","西安","香港","宁波","厦门","兴安盟","马来西亚","内蒙古","吉隆坡"],
        }
    }
    componentDidMount() {
        this.getList();
    }

    render() {
        // console.log(this.state.getcity)
        if (this.state.getcity.length != 0) {
            //     console.log('ok');
            // return <div>xxx</div>
            return (
                <CityChose>
                    <div className="box">
                        <Link to="/Home">
                            <span type="primary"></span>
                        </Link>
                        <h3>切换城市</h3>
                    </div>
                    <div className="box2">
                        <p className="p">当前城市</p>
                        <div className="div1">
                            <a className="a1" href="javascript:void(0)">内蒙古</a>
                        </div>
                        <p className="p">定位城市</p>
                        <div className="div2">
                            <a className="a2" href="javascript:void(0)">定位中...</a>
                        </div>
                        <p className="p">热门城市</p>
                        <div className="div3">                                        
                          {
                              this.state.list.map((item,index)=>{
                                    return(                                       
                                     <a key={index} className="a3" href="javascript:void(0);" onClick={this.toshow.bind(this,item)}>{item}</a>                                       
                                    )
                              })
                          }
                           
                        </div>
                        <p className="p" >全部城市</p>
                        <div className="div4">
                            {
                                this.state.getcity.map((el, index) => {
                                    return (<div key={index}>
                                        <a href="javascript:void(0)" className="letter" >{el.id}</a>
                                        {
                                            el.lists.map((item, n) =>
                                                <div className="div5" key={n}>
                                                    <a className="a5" href="javascript:void(0)"  onClick={this.toshow.bind(this, item.name)}>{item.name}</a>
                                                </div>
                                            )
                                        }
                                    </div>)
                                })
                            }
                        </div>
                    </div>
                    <div className="right">
                        <a className="right-letter"  href="javascript:void(0)">当前</a>
                        <a className="right-letter"  href="javascript:void(0)">定位</a>
                        <a className="right-letter"  href="javascript:void(0)">热门</a>
                        {
                            this.state.getcity.map((el,index)=>{
                                return(
                                   <div key={index}>
                                       <a href="javascript:void(0)" className="right-letter" >{el.id}</a>
                                   </div> 
                                )
                            })
                        }    
                    </div>
                </CityChose>
            );
        } else {
            return null;
        }
    }
    toshow(el) {
        this.props.history.push({
            pathname: `/home`,
            state:el
        })
    }
    getList() {
        axios({
            method: 'get',
            url: '/apis/Index/getCityList',
        }).then((res) => {
            //  数据就变成了可以触发事件监听类型 
            // console.log(res.data);
            var arr = [];
            for (const key in res.data.city_list) {
                // console.log(res.data.city_list[key]);
                arr.push(res.data.city_list[key])
            }
            // console.log(arr);
            this.setState({
                getcity: arr
            })
        })
    }
}

export default cityTab;







