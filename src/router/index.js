import React, { Fragment, Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Home from "@/components/main/Home/Home"
import Info from "@/components/main/Info/Info"
import Cart from "@/components/main/Cart/Cart"
import User from "@/components/main/User/User"
import City from "@/components/main/City/City"
import Search from '@/components/layout/search/search'
import Text from '@/components/layout/show3/show3'
import Theatre from "@/components/main/Theatre/Theatre"
import Show from "@/components/main/Show/Show"
import Details from "@/components/main/Details/Details"
import Show2 from '@/components/layout/xiala/xiala'
import Userinfo from '@/components/main/Userinfo/Userinfo'
import Xunhui from '@/components/layout/xunhui/xunhui'

import Romeo from '@/components/main/Romeo/Romeo'
export default class extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path="/Home" component={Home} />
                    <Route path="/Info" component={Info} />
                    <Route path="/Cart" component={Cart} />
                    <Route path="/User" component={User} />
                    <Route path="/Search" component={Search} />
                    <Route path="/City" component={City} />
                    <Route path="/Show/:data" component={Show} />
                    <Route path="/Show2" component={Show2} />
                    <Route path="/Text" component={Text} />
                    <Route path="/Xunhui" component={Xunhui} />
                    <Route path="/Details/:id" component={Details} />
                    <Route path="/Romeo" component={Romeo} />
                    <Route path="/Theatre" component={Theatre} />
                    <Route path="/Userinfo" component={Userinfo} />
                    {/* exact绝对匹配 */}
                    {/* <Route path="/Test/:name/:id" exact component={Test} /> */}
                    <Redirect path="/" to="/Home" />
                </Switch>

            </Fragment>
        )
    }
    componentDidMount() {

    }
}