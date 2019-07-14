import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import img2 from '@/static/img/card.png'
import img3 from '@/static/img/houtui.png'


const Ticket=styled.div`
    height: 100%;
    height:17.79rem;
    .ticket-list{
        background: #f5f5f5;
        height: 100%;
        .ticket-list__title{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1;
        }
        .title{
            height: 1.17333rem;
            width: 100%;
            background-color: #fff;
            font-size: .48rem;
            color: #232323;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ebebeb;
            box-sizing: border-box;
            .title__text{
                position: absolute;
                text-align: center;
                left: 0;
                right: 0;
            }
            .title_back{
            position: relative;
            width: .53333rem;
            height: .53333rem;
            padding: .29333rem .53333rem .29333rem .26667rem;
            background-image: url(${img3});
            background-size: .53333rem .53333rem;
            background-repeat: no-repeat;
            background-position: 50%;
            margin-left:0.5rem;
            }
        }
        .ticket-empty{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            background: #fefefe;
            align-items: center;
            .ticket-empty__img{
                width: 2.90667rem;
                height: 2.06667rem;
                margin-top: 4.92rem;
            }
            .ticket-empty__tips{
                color: #999;
                font-size: .34667rem;
                margin-top: .66667rem;
            }
        }
    }
`
class Bull extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <Ticket>
                <div className="ticket-list">
                    <div className="title ticket-list__title">
                        <span className="title__text">票夹</span>
                        <Link to="/Home">
                            <span className="title_back"></span>
                        </Link>
                    </div>
                    <div className="ticket-empty">
                        <img className="ticket-empty__img" src={img2}></img>
                        <div className="ticket-empty__tips">暂无电子票</div>
                    </div>
                </div>
            </Ticket>
        )
    }
}
export default Bull
