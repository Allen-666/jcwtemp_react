import React, { Component } from 'react';
import styled from 'styled-components'

const Head =styled.div`
    .head_nav{
        position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.17333rem;
    line-height: 1.17333rem;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: .05rem solid #ebebeb;
    background-color: #fefefe;
    z-index: 100;
    }
    .title{
        font-size: .48rem;
    font-weight: 400;
    color: #232323;
    padding: 0 1.33333rem;
    }
    .text-single{
        overflow: hidden;
    text-overflow: ellipsis;
    
    }
`

class Header extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <Head>
                <div className="head_nav">
                    <div className="title text-single">剧院</div>
                </div>
            </Head>
        )
    }
}
export default Header;
