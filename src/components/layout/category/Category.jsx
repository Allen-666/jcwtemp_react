import React, { Component } from 'react';
import styled from 'styled-components'
import axios from "axios"
import Swiper_wrap from '@/components/layout/swiper/Swiper-wrap'
import { withRouter } from "react-router-dom";

let jiantou = require('@/static/img/jiantou.png')
let log_r = require("@/static/img/log_r.png")

const Cate = styled.div`
      margin-top: 0.53333rem;
      background-color: #fff;
      .category {
        padding-bottom: 1.06667rem;
        .title-wrap {
            overflow: hidden;
        h3 {
          font-size: .53333rem;
          font-weight: 700;
          color: #232323;
          float: left;
          padding-left: .4rem;
          height: .61333rem;
          line-height: .61333rem;
        }
        a {
            display: block;
            float: right;
            width: 0.53333rem;
            height: 0.53333rem;
            margin-right: 0.26667rem;
            margin-top: 0.04rem;
            color: #232323;
            img {
            border: none;
            border-color: transparent;
            vertical-align: middle;
            width: 100%;
            height: 100%;
            }
        }
      }
        .category-large {
          background: rgb(100, 90, 78);
          margin-top: 0.53333rem;
          .bg_c {
            background-color: rgba(0, 0, 0, 0.2);
            padding: 0.37333rem 0 0.37333rem 0.4rem;
            a {
              display: flex;
              color: #232323;
              .top {
                width: 2.85333rem;
                height: 3.89333rem;
                border-radius: 0.10667rem;
                border: 1px solid #ebebeb;
                position: relative;
                overflow: hidden;
                img {
                  border: none;
                  border-color: transparent;
                  vertical-align: middle;
                  width: 100%;
                  height: 100%;
                }
                .juooo_sponsor{
                  .logo_i{
                    position: absolute;
                    left: .10667rem;
                    top: -.02667rem;
                    width: .77333rem;
                    height: .93333rem;
                    display: block;
                    background: url(${log_r}) 50% no-repeat;
                    background-size: 100%;
                  }
                }
              }
              .btm {
                flex: 1;
                margin-left: 0.4rem;
                color: #fefefe;
                padding-top: 0.42667rem;
                width: 261px;
                .show {
                  font-size: 0.32rem;
                  height: 0.64rem;
                  line-height: 0.64rem;
                  letter-spacing: 1px;
                }
                h3 {
                  width: 90%;
                  font-size: 0.45333rem;
                  line-height: 0.6rem;
                  max-height: 1.2rem;
                  min-height: 0.6rem;
                  margin-top: 0.33333rem;
                  word-break: break-all;
                  display: -webkit-box;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
                .text {
                  margin-top: 0.33333rem;
                  width: 5.6rem;
                  font-size: 0.32rem;
                  height: 0.64rem;
                  line-height: 0.64rem;
                }
              }
            }
          }
        }
    }
`

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ychtitleList: [],
    }
  }
  render() {
    return (
      <Cate>
        {
          this.state.ychtitleList.map((el, index) => (
            <div className="category" key={index}>
              <div className="title-wrap">
                <h3 className="title">{el.title}</h3>
                <a href="javascript:;"><img src={jiantou} /></a>
              </div>
              <div className="category-large" onClick={this.toDetail.bind(this, el)}>
                <div className="bg_c">
                  <a href="javascript:;">
                    <div className="top">
                      <img src={el.list[0].pic} />
                      <div className="juooo_sponsor"><span className="logo_i"></span></div>
                    </div>
                    <div className="btm">
                      <p className="show">
                        <strong>{el.list[0].date}</strong> {el.list[0].week}
                      </p>
                      <h3>{el.list[0].schedular_name}</h3>
                      <p className="text">{el.list[0].city_name}  |  {el.list[0].venue_name}</p>
                    </div>
                  </a>
                </div>
              </div>
              <Swiper_wrap item={el.list.slice(1, 10)}>
              </Swiper_wrap>
            </div>
          ))
        }
      </Cate>
    )
  }
  componentDidMount() {
    const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
    axios.get('https://m.juooo.com/home/getFloorShow?city_abb=&city_id=0&&version=5.1.4&referer=2')
      .then(res => {
        // console.log(res.data.data)
        _this.setState({ ychtitleList: res.data.data })
      });
  }
  toDetail(el) {
    // console.log(el.list[0].sche_id);
    let s_id = el.list[0].sche_id
    this.props.history.push({
      pathname: `/details/${s_id}`,
      state: s_id
    })
  }
};
export default withRouter(Category) 