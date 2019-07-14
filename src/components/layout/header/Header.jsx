import React, { Component } from 'react';
import styled from 'styled-components'
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Observer from "@/Observer"

// 图片
let head_logo = require('@/static/img/header_logo.png')
let nav_icon = require('@/static/img/nav_icon_search.png')
let nav_search = require('@/static/img/search.png')
let Address = require('@/static/img/adress.png')
let Address1 = require('@/static/img/address.png')

const Head = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    height: 1.17333rem;
    width: 100%;
    padding: 0 .4rem;
    box-sizing: border-box;
    justify-content: space-between;
    z-index: 10;
    display: flex;
    align-items: center;
    .address {
      justify-content: center;
      width: 1.56rem;
      height: 0.74667rem;
      border-radius: 0.46667rem;
      border: 1px solid hsla(0, 0%, 88%, 0.3);
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      .address-icon {
        width: 0.29333rem;
        height: 0.34667rem;
        background: url(${Address}) no-repeat center;
        background-size: cover;
        background-position: 50%;
      }
      .text-single {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #fefefe;
        font-weight: 700;
        margin-left: .08rem;
        font-size: .4rem;
     }
    }
    .search {
      margin-left: .10667rem;
      display: flex;
      align-items: center;
      width: 6.34667rem;
      height: .74667rem;
      border-radius: .53333rem;
      border: 1px solid hsla(0,0%,88%,.2);
      background-color: rgba(0,0,0,.2);
      img {
        display:block;
        width: 0.53333rem;
        height: 0.53333rem;
        margin-left: 0.29333rem;
        margin-right: 0.13333rem;
      }
      span {
        font-size: 0.34667rem;
        color: #fefefe;
      }
    }
    .sp {
      width: 0.72rem;
      height: 0.66667rem;
      a {
        display: block;
        img {
          border: none;
          border-color: transparent;
          vertical-align: middle;
          width: 100%;
          height: 100%;
        }
      }
    }
`
const Heade = styled.div`
  background-color: #fefefe;
  border-bottom: 1px solid #ebebeb;
  box-shadow: -0.05333rem 0 0.12rem 1px rgba(35,35,35,.12);
  position: fixed;
  left: 0;
  right: 0;
  height: 1.17333rem;
  width: 100%;
  padding: 0 .4rem;
  box-sizing: border-box;
  justify-content: space-between;
  z-index: 10;
  display: flex;
  align-items: center;
  .address{
    background-color: #fefefe;
    justify-content: center;
    width: 1.56rem;
    height: .74667rem;
    border-radius: .46667rem;
    display: flex;
    align-items: center;
    border: none;
    .address-icon {
        width: .53333rem;
        height: .53333rem;
        background-image: url(${Address1});
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: .53333rem .53333rem;
      }
      .text-single {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #232323;
        width: .86667rem;
        font-weight: 700;
        margin-left: .08rem;
        width: .86667rem;
        font-size: .4rem;
     }
  }
  .search{
    background-color: #f5f5f5;
    border-color: #ebebeb;
    margin-left: .10667rem;
    display: flex;
    align-items: center;
    width: 6.34667rem;
    height: .74667rem;
    border-radius: .53333rem;
    border: 1px solid hsla(0,0%,88%,.2);
    img {
        display:block;
        width: 0.53333rem;
        height: 0.53333rem;
        margin-left: 0.29333rem;
        margin-right: 0.13333rem;
      }
      span {
        font-size: 0.34667rem;
        color: #b3b3b3;
      }
  }
  .sp{
    width: .72rem;
    height: .66667rem;
    a{
      color: #232323;
      display:block;
      img {
          border: none;
          border-color: transparent;
          vertical-align: middle;
          width: 100%;
          height: 100%;
        }
    }
  }
`
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: false
    }
  }
  render() {
    if (this.state.bool) {
      return (
        <Heade>
          <div className='address'>
            <strong className="address-icon"></strong>
            <Link to="/City">
              <span className="text-single" type="primary">{this.props.caid != undefined ? this.props.caid : "全国"}</span>
            </Link>
          </div>
          <div className="search" onClick={this.Rourers.bind(this)}>
            <img src={nav_search} />
            <span>搜索热门演出</span>
          </div>
          <span className="sp">
            <a href="javascript:;">
              <img src={head_logo} />
            </a>
          </span>
        </Heade>
      )
    } else {
      return (
        <Head>
          <div className='address'>
            <strong className="address-icon"></strong>
            <Link to="/City">
              <span className="text-single" type="primary">{this.props.caid != undefined ? this.props.caid : "全国"}</span>
            </Link>
          </div>
          <div className="search" onClick={this.Rourers.bind(this)}>
            <img src={nav_icon} />
            <span>搜索热门演出</span>
          </div>
          <span className="sp">
            <a href="javascript:;">
              <img src={head_logo} />
            </a>
          </span>
        </Head>
      )
    }
  }
  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll.bind(this), true);
    console.log(this.props.caid);
  }
  Rourers() {
    this.props.history.push('/Search')
  }
  componentDidMount() {
    Observer.$on("topRun", (bool) => {
      // console.log(bool)
      this.setState({ bool: bool })
    })
  }
}
export default withRouter(Header)

