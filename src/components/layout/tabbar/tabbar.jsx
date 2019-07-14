/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { TabBar } from 'antd-mobile';
// import DocumentTitle from 'react-document-title'
import styled from 'styled-components'

let Shouye_one = require('@/static/img/首页.png')
let Shouye_two = require('@/static/img/shouye.png')
let Juyuan_one = require('@/static/img/剧院.png')
let Juyuan_two = require('@/static/img/theatre.png')
let Piaojia = require('@/static/img/票夹.png')
let My = require('@/static/img/我的.png')

const Tab = styled.div`
  position: fixed;
  height: 100%; 
  width: 100%; 
  height: 1.30667rem;
  box-shadow: 0 0 0.06667rem #ebebeb;
  bottom: 0;
  z-index:999;
  .am-tab-bar-bar {
    height:100%;
  }
  .am-tabs-tab-bar-wrap{
    height:100%;
  }
  .am-tab-bar-tab {
    height:100%;
  }
  .am-tab-bar-tab-icon {
    display: block;
    margin: 0 auto;
    width: .8rem;
    height: .8rem;
  }
  .am-tab-bar-tab-title{
    text-align: center;
    font-size: .26667rem!important;
    color: #232323;
    }
`
class TabBarExample extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      bool: true
    };
  }
  renderContent(pageText) {
  }
  render() {
    return (
      <Tab>
        <TabBar
          unselectedTintColor="#232323"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="bottom"
        >
          <TabBar.Item 
            bool={this.state.bool}
            title="首页"
            key="Home"
            icon={<div style={{
              width: '.8rem',
              height: '.8rem',
              background: `url(${Shouye_two}) center center /  .8rem .8rem no-repeat`
            }}
            />
            }
            selectedIcon={<div style={{
              width: '.8rem',
              height: '.8rem',
              background: `url(${Shouye_one}) center center /  .8rem .8rem no-repeat`
            }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.props.history.push('/Home')
              this.tabActive()
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '.8rem',
                height: '.8rem',
                background: `url(${Juyuan_one}) center center /  .8rem no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '.8rem',
                height: '.8rem',
                background: `url(${Juyuan_two}) center center /  .8rem no-repeat`
              }}
              />
            }
            title="剧院"
            key="Info"

            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.props.history.push('/Info')
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '.8rem',
                height: '.8rem',
                background: `url(${Piaojia}) center center /  .8rem .8rem no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '.8rem',
                height: '.8rem',
                background: `url(${Piaojia}) center center /  .8rem .8rem no-repeat`
              }}
              />
            }
            title="票夹"
            key="Cart"

            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.props.history.push('/Cart')
              // this.props.location.pathname: "/Home",
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '.8rem',
                height: '.8rem',
                background: `url(${My}) center center /  .8rem .8rem no-repeat`
              }}
              />
            }
            selectedIcon={<div style={{
              width: '.8rem',
              height: '.8rem',
              background: `url(${My}) center center /  .8rem .8rem no-repeat`
            }}
            />}
            title="我的"
            key="User"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.props.history.push('/User')
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
          </TabBar.Item>
        </TabBar>
      </Tab >
    );
  }
  tabActive() {
    this.setState({bool:false})
  }
}

export default withRouter(TabBarExample);
// badge={0}  显示数量  加在 TabBar.Item
// badge={'新消息'}  显示消息  不显示  空字符串
//   dot  小红点