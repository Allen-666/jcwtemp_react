
import React from 'react'

import ReactDOM from 'react-dom'    //下拉刷新组件依赖react-dom，所以需要将其引进来

import { PullToRefresh } from 'antd-mobile';

import axios from 'axios';
import './xunhui.scss'

class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            data: [],
            num: 1,
            show: ''
        };
    }

    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        this.text(this.state.num, (res) => {
           

            this.setState({
                height: hei,
                data: res.data.data
            })
        })


    }

    render() {
        if (this.state.data) {
            return (<div>
                <header className="navbar tour-navbar" >
                    <div className="navbar-inner navbar-on-center">
                        <div className="left">
                            <a href="javascript:history.go(-1);" className="link">
                                <span className="icon icon-menu-left"></span>
                            </a>
                        </div>
                        <div className="center">巡回演出</div>
                        <div className="right">
                            <div className="link fl back-box">
                                <span className="icon icon-option-horizontal"></span>
                            </div>
                        </div>
                    </div>
                </header>
                <PullToRefresh
                    damping={80}
                    ref={el => this.ptr = el}
                    style={{
                        height: this.state.height,
                        overflow: 'auto',
                    }}
                    indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                    direction={'up'}
                    refreshing={this.state.refreshing}

                    onRefresh={() => {
                        this.state.num++;
                        this.text(this.state.num, res => {
                            if (res.data.data == null) {
                                this.setState({ show: '<p>没有更多了</p>' })
                                return
                            } else {
                              
                                // res.data.data.map((item)=>{
                                //         item.cityItems.splice(0,5)
                                // })
                                this.setState({
                                    data: this.state.data.concat(res.data.data)
                                })
                            }
                        })

                        this.setState({ refreshing: true })


                    }}
                >

                    <ul className='show-wrap tour-show-wrap' style={{ marginTop: '2rem', paddingTop: '0.5rem' }}>
                        {
                            this.state.data.map((item, index) => {
                                return (<li key={index} className='show-item clearfix '>
                                    <a className='show-left fl '>
                                        <img src={item.pic} alt="" />
                                    </a>
                                    <div className='show-right fl '>
                                        <a className='title '>{item.show_name}</a>
                                        <p className='times '>{item.display_show_time}</p>
                                        <div className='city-wrap clearfix ' >
                                            {
                                                item.cityItems.map((item1, index1) => {
                                                    if(index1<5){
                                                        return (<a key={index1} className='item fl '>
                                                        {item1.city_name}

                                                    </a>)  
                                                    }
                                                      
                                                   
                                                })
                                            }
                                            <a className='item fl ' style={item.cityItems.length>=5?{display: 'flex',background:'#999'}:{display:'none'}}>
                                                        查看更多
                                                    </a>
                                        </div>
                                    </div>
                                </li>)
                            })
                        }
                    </ul>
                    <div dangerouslySetInnerHTML={{ __html: this.state.show }}></div>


                </PullToRefresh>
            </div>);

        } else {
            return (<div className="show-nodata">抱歉，没有相关演出内容</div>)
        }
    }
    text(num, callback) {

        axios({
            method: 'get',
            url: '/apis/tour/ShowList',
            params: {
                page: num
            }
        }).then((res) => {
            callback(res);
        })
    }
    componentWillMount() {
        // console.log();
        document.documentElement.style.fontSize = "40px"

    }
    componentWillUnmount() {
        document.documentElement.style.fontSize = "70px"
    }
}


export default ListContainer