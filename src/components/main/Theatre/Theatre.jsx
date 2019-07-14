import React, { Fragment, Component } from "react"
import styled from 'styled-components'
import axios from "axios"
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Popover,NavBar,Icon } from 'antd-mobile';

let Jiantouplus = require('@/static/img/jiantouplus.png')
let Sandian = require('@/static/img/sandian.png')

const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
const TheatreCon = styled.div`
    .box{
            z-index:10;
            position: fixed;
            top:0;
            background: #fff;
            width:100%;
            text-align:center;
            height: 1.17333rem;
            line-height: 1.17333rem;
            border-bottom: .01rem solid #ebebeb;
        .jiantou{
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
        .thepic{
            margin-top: 1.17333rem;
            width: 100%;
            height: 4.1rem;
        }
        .tab{
            background: #fff;
            padding-top:.3rem ;
            .tab-d{
                margin: 0 .43333rem;
                padding: .476rem 0;
                display: flex;
                border-radius: 0.21333rem;
                box-shadow: .10667rem .10667rem .21333rem rgba(178, 178, 178, .1);
                >a{
                    display: block;
                    text-align: center;
                    width:25%;
                    height:1.1rem;
                    >div{
                        >img{
                            width: 1rem;
                        }
                    }
                    >p{
                        font-size: .36rem;
                        color: #333;
                    }               
                }
            }

        }
        .hot-warp{
            background: #fff;
            .title{
                font-size: .48rem;
                color: #333;
                padding: .32667rem .43333rem .11333rem;
                font-weight: bold;
                background: #fff;
                position: relative;
            }
            .show-warp{
                .list-warp{
                    padding: 0 .4rem;
                    >a{
                        display: block;
                        height: 3.3rem;
                        padding: .22rem 0;
                        border-bottom: 1px solid #e6e6e6;
                        .left{
                            float: left;
                            width: 2.3rem;
                            height: 3.2rem;
                            border: 1px solid #f2f2f2;
                            margin-right:0.25333rem;
                            >img{
                                width: 100%;
                                height: 100%;
                                border: 1px solid #fff;
                            }
                        }
                        .right{
                            width: 6.34667rem;
                            float: left;
                            >p:nth-child(1){
                                margin-bottom: .43333rem;
                                padding-top: .028rem;
                                min-height: .75333rem;
                                font-size: .39733rem;
                                padding-top: .00667rem;
                                margin-bottom: .11333rem;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                color: #333;
                            }
                            >p:nth-child(2){
                                width: 100%;
                                height: .64667rem;
                                color: #999;
                                font-size: .32rem;
                                line-height: .64667rem;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 1;
                                -webkit-box-orient: vertical;
                            }
                            >p:nth-child(3){
                                width: 100%;
                                height: .64667rem;
                                color: #999;
                                font-size: .32rem;
                                line-height: .64667rem;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 1;
                                -webkit-box-orient: vertical; 
                            }
                            >p:nth-child(4){
                                color: #ff7919;
                                margin-top: .43333rem;
                                font-size: .32rem;
                                >span:nth-child(2){
                                    font-size:.48rem;
                                }
                            }
                        }
                    }
                }
                .all-show{
                    width: 3.12rem;
                    height: 0.68rem;
                    text-align: center;
                    line-height: 0.68rem;
                    font-size: 0.312rem;
                    margin: 0.44rem auto 0.44rem;
                    border-radius: 0.10067rem;
                    border: 1px solid #e6e6e6;
                    background: #fff;
                    margin-bottom:1.2rem;
                    >a{
                        color:#000;
                    }
                }
            }
        }
`
class theCon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            selected: '',
            // dataList:[]
        }
    }
    componentDidMount(){
        console.log(this.props.location.data)
    //  this.setState({dataList:this.props.location.data})
    }
    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
        if(opt.props.value=="scan"){
            this.props.history.push({
                        pathname: `/home`,
                    })
        }else{
            this.props.history.push({
                pathname: `/User`,
            })
        }
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
    render() {  
        // console.log( this.props.location.data);
        return (
            <TheatreCon>
                <div className="box">
                    <Link to="/Home">
                        <span type="primary" className="jiantou"></span>
                    </Link>
                    <h3>{this.props.location.data.name}</h3>
                    <NavBar
                        style={{height:'0',}}
                        mode="light"
                        rightContent={
                            <Popover mask
                                overlayClassName="fortest"
                                overlayStyle={{ color: 'currentColor' }}
                                visible={this.state.visible}
                                overlay={[
                                    (<Item  key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">                                         
                                             主页                                       
                                    </Item>),
                                    (<Item  key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>                                      
                                            我的聚橙                                                          
                                      </Item>),
                                ]}
                               
                                align={{
                                    overflow: { adjustY: 0, adjustX: 0 },
                                    offset: [-10, 0],
                                }}
                                onVisibleChange={this.handleVisibleChange}
                                onSelect={this.onSelect}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '0',
                                    right: '0',
                                    display: 'inline-block',
                                    width: '1.33333rem',
                                    height: '1.17333rem',
                                    color: '#212121',
                                }}
                                >
                                    <Icon type="ellipsis" />
                                </div>
                            </Popover>
                        }
                    >
                    </NavBar>



                </div>
                <img className="thepic " src={this.props.location.data.pic} alt="" />
                <div className="tab">
                    <div className="tab-d">
                        <a href="javascript:void(0);">
                            <div>
                                <img src="https://m.juooo.com/public/basic//Home/app/app-juooo5/images/index/icon-show.png" alt="" />
                            </div>
                            <Link to="/show2">
                                <p type="primary" style={{fontSize: '.36rem', color: '#333'}}>演出</p>
                            </Link>                          
                        </a>
                        <a href="javascript:void(0);">
                            <div>
                                <img src="https://m.juooo.com/public/basic//Home/app/app-juooo5/images/index/icon-calendar.png" alt="" />
                            </div>
                            <p >日历</p>
                        </a>
                        <a href="javascript:void(0);">
                            <div>
                                <img src="https://m.juooo.com/public/basic//Home/app/app-juooo5/images/index/icon-theater.png" alt="" />
                            </div>
                            <p >剧院</p>
                        </a>
                        <a href="javascript:void(0);">
                            <div>
                                <img src="https://m.juooo.com/public/basic//Home/app/app-juooo5/images/index/icon-offer.png" alt="" />
                            </div>
                            <p >特惠</p>
                        </a>
                    </div>
                </div>
                <div className="hot-warp">
                    <div className="title">热门演出</div>
                    <div className="show-warp">
                        <div className="list-warp">
                            {
                                this.props.location.data.show_list.map((el,index)=>{
                               return(
                                    <a href="javascript:void(0);" key={index}>
                                    <div className="left">
                                        <img src={el.pic} alt="" />
                                    </div>
                                    <div className="right">
                                        <p>{el.schedular_name}</p>
                                        <p>2019.07.05 19:30</p>
                                        <p>
                                            <span>{this.props.location.data.name}</span>
                                        </p>
                                        <p>
                                            <span>￥</span>
                                            <span>88</span>
                                            <span>起</span>
                                        </p>
                                    </div>
                                    </a>
                               )
                                })
                            }
                        </div>
                        <div className="all-show">                         
                            <a href="http://localhost:8888/#/show2">查看全部演出</a>
                        </div>
                    </div>
                </div>

            </TheatreCon>
        );
    }

}

export default withRouter(theCon)