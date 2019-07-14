import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import { Tabs, WhiteSpace } from 'antd-mobile';
import Neirong from './neirong'



class One extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NavList: [
                { title: '全部', tid: 2 ,category: 0 ,page:5},
                { title: '演唱会', tid: 2, category: 35,page:1 },
                { title: '音乐会', tid: 2, category: 36 ,page:2},
                { title: '话剧歌剧', tid: 2, category: 37 ,page:1},
                { title: '儿童亲子', tid: 2, category: 38,page:2 },
                { title: '音乐剧', tid: 2, category: 79 ,page:1},
                { title: '舞蹈芭蕾', tid: 2, category: 86 ,page:1},
                { title: '戏曲综艺', tid: 2, category: 91,page:1 },
                { title: '展览', tid: 2, category: 99,page:1 },

            ],
        }
    }
    render() {
        return (
            <Fragment>

                <div>
                    <WhiteSpace />
                    <div style={{ height: 3 }}></div>
                    <Tabs tabs={this.state.NavList} initialPage={0} animated={false} useOnPan={false} position={true}>
                        {
                            this.state.NavList.map((item,index)=>{
                                return (<div key={index}>
                                        <Neirong list={item}></Neirong>
                                </div>)
                            })
                        }
                        
                     
                    </Tabs>
                <WhiteSpace />
                </div>

                

            </Fragment >
        )
    }

    componentDidMount() {
     
    }
}


export default withRouter(One)
