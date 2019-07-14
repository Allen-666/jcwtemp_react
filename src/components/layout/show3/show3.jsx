import React, { Fragment, Component } from "react";
import axios from "axios"
import styled from 'styled-components'
import './show3.scss'
const Odiv=styled.div`
   html{
       font-size:38px!important;
   }

`
class Text extends Component {

    constructor(props) {
        super(props);
        this.state = {
                data:''
        }
    }
    render() {

        return (
            <Fragment>
                <Odiv>
                <div   dangerouslySetInnerHTML={{ __html: this.state.data }}></div>
                </Odiv>
             
            </Fragment>
        )
    }
    componentWillMount(){
        // console.log();
        document.documentElement.style.fontSize="50px"
        
    }
    componentDidMount(){
        // console.log(this.props.location.search);
        axios.get('https://m.juooo.com/tour/tourshowinfo'+this.props.location.search)
        .then(res => {
            console.log(res)
            this.setState({data:res.data})
        });
    }

    componentWillUnmount(){
        document.documentElement.style.fontSize="70px"
    }
}
export default Text