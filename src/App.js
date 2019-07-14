import React, { Fragment, Component } from 'react';
// import axios from "axios";
import Route from "@/router"
import 'antd-mobile/dist/antd-mobile.css'
import { withRouter } from "react-router-dom";
import DocumentTitle from 'react-document-title'
// 定义全局样式
import GlobalStyle from "@/common/css/styledGlobal"
//公共底部
import Tabbar from "@/components/layout/tabbar/tabbar"
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.history.location.pathname == '/Home' || this.props.history.location.pathname == '/Info' || this.props.history.location.pathname == '/Userinfo') {
      return (
        <DocumentTitle title='聚橙网-票务网_演唱会门票_演出订票平台_演出资讯_订票热线400-185-8666'>
          <Fragment>
            <GlobalStyle />
            <Route >
            </Route>
            <Tabbar />
          </Fragment>
        </DocumentTitle>
      )
    } else {
      return (
        <DocumentTitle title='聚橙网-票务网_演唱会门票_演出订票平台_演出资讯_订票热线400-185-8666'>
          <Fragment>
            <GlobalStyle />
            <Route >
            </Route>
          </Fragment>
        </DocumentTitle>
      )
    }
  }
  componentDidMount() {
    // console.log(this.props.history.location.pathname);
  }
}

export default withRouter(App);