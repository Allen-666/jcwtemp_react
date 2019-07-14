import React, { Fragment, Component } from "react";
import Head from "@/components/layout/infohead/Head"
import Main from "@/components/layout/infomain/Main"
import axios from 'axios'
export default class Info extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {

        return (
            <Fragment>
                <Head></Head>
                <Main></Main>
            </Fragment>
        )
    }
    componentDidMount(){
        axios.get('https://m.juooo.com/calendar/index').then((res)=>{
            console.log(res)
        })
    }
}
