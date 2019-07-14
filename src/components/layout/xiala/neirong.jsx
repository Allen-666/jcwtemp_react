
import React from 'react'

import ReactDOM from 'react-dom'    //下拉刷新组件依赖react-dom，所以需要将其引进来

import { PullToRefresh} from 'antd-mobile';

import axios from 'axios';
import "./neirong.scss"

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      data: [],
      num: 1,
      show:''
    };
  }

  componentDidMount() {

    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;


    this.text(this.state.num, (res) => {
      console.log(res.data.datas);
      this.setState({
        height: hei,
        data: res.data.datas
      })
    })


  }

  render() {
    if (this.state.data) {
      return (<div>

        <PullToRefresh
          damping={100}
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
                if(res.data.datas==null){
                      this.setState({show:'<p>没有更多了</p>'})

                      return
                  
                }else{
                  this.setState({
                    data: this.state.data.concat(res.data.datas)
                  })
                }
                
               
              })
            
           




            this.setState({ refreshing: true })


          }}
        >
         <div className="show-wrap">
            {
              this.state.data.map((item, index) => (
                <div className="show-items" key={index} >
                  <div className="img-box">
                    <img className="imgs" src={'http://image.juooo.com' + item.pic} />
                    <span className="logo_i" dangerouslySetInnerHTML={{ __html: item.tag_icon }}></span>
                  </div>
                  <div className="detail-box">
                    <p className="title">{item.schedular_name ? (item.schedular_name.length > 41 ? item.schedular_name.substr(0, 41) + "..." : item.schedular_name) : ""}</p>
                    <p className="time">{item.show_time}</p>
                    <p className="place">{item.name}</p>
                    <p className="ft0">
                      <span className="fs24">¥</span>
                      <span className="fs32">{item.min_price}</span>
                      <span className="fs24">起</span>
                    </p>
                  </div>


                </div>
              ))
            }

          </div>
          <div  dangerouslySetInnerHTML={{ __html: this.state.show }}></div>


        </PullToRefresh>
      </div>);

    } else {
      return (   <div className="show-nodata">抱歉，没有相关演出内容</div>)
    }
  }
  text(num, callback) {

    axios({
      method: 'get',
      url: '/apis/Theatre/showListData',
      params: {
        tid: this.props.list.tid,
        category: this.props.list.category,
        page: num
      }
    }).then((res) => {
      callback(res);
    })
  }
}


export default ListContainer