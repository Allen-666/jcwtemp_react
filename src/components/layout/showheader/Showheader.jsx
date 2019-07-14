import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";
let Jiantouplus = require('@/static/img/jiantouplus.png')
// let nav_icon=require('@/static/img/nav_icon_search.png')
const ShowHeader = styled.div`
    z-index:10;
    position: fixed;
    top:0;
    background: #fff;
    width:100%;
    text-align:center;
    height: 1.17333rem;
    line-height: 1.17333rem;
    border-bottom: 0.01rem solid #ebebeb;
   span{
        background: url(${Jiantouplus}) no-repeat .4rem 50%;
        background-size: .49rem .42rem;
        position: absolute;
        top: 0;
        left:0;
        display: inline-block;
        width: 1.33333rem;
        height: 1.17333rem;
    }
    h3{
        font-size: .6rem;
        font-weight: 600;
        color: #232323;
        padding: 0 1.33333rem;
    }
`
class showHeaderTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <ShowHeader className="showbox">
                <div className="box">
                    <Link to="/Home">
                        <span type="primary"></span>
                    </Link>
                    <h3>演出</h3>
                </div>
            </ShowHeader>
        );
    }
}

export default showHeaderTwo;