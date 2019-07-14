import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from "react-router-dom";

let nav_img = require('@/static/img/nav_img.png')

const Nav = styled.div`
    padding: .53333rem .4rem 0;
    .classify{
    display: flex;
    justify-content: space-between;
        >.item{
        margin: 0;
        padding: 0;
            >a{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #232323;
                img{
                    width: 1.36rem;
                    height: 1.36rem;
                    display:block;
                }
                span {
                font-size: .34667rem;
                color: #232323;
                margin-top: .2rem;
                }
            }
        }
    }
    .advertion{
    margin-top: .8rem;
    width: 100%;
    height: 2.66667rem;
    border-radius: 1.33333rem;
    overflow: hidden;
    border: 1px solid #add8e6;
    >a{
        display: block;
        width: 100%;
        height: 100%;
            img {
                border: none;
                border-color: transparent;
                vertical-align: middle;
                width: 100%;
                height: 100%;
            }
        }
    }
    .operation {
    margin-top: .8rem;
    background-color: #f5f5f5;
    box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
        ul {
          justify-content: space-between;
          display: flex;
          flex-wrap: wrap;
          li:nth-child(1),
          li:nth-child(2) {
            width:49%;
            margin-bottom: 0.16rem;
            a {
                height: 2.4rem;
                align-items: center;
                padding: 0 .46667rem;
                border-radius: .08rem;
                box-sizing: border-box;
                background-color: #fefefe;
                justify-content: space-between;
                flex-direction:row;
            }
          }
          li {
              width:32%;
            a {
              width: 100%;
              height: 2.82667rem;
              flex-direction: column;
              text-align: center;
              display: flex;
              color: #232323;
              border-radius: 0.08rem;
              box-sizing: border-box;
              background-color: #fefefe;
              justify-content: center;
              align-items: center;
              div {
                h3 {
                font-size: .4rem;
                color: #232323;
                height: .6rem;
                line-height: .6rem;
                text-align: center;
                }
                p {
                    font-size: .29333rem;
                    color: #666;
                    height: .53333rem;
                    line-height: .53333rem;
                    letter-spacing: 0;
                  .c_ff6{
                    color: #ff6743!important;
                  }
                }
              }
              .preferential {
                width: 1.2rem;
                height: 1.2rem;
                img {
                    display:block;
                    width: 100%;
                    height: 100%;
                }
              }
            }
          }
        }
    }
`
class Nava extends Component {

    render() {
        let { navListtitle, navListpic } = this.props
        // console.log(this.props);
        if (navListtitle.length != 0 && navListpic.length != 0) {
            return (
                <Nav>
                    <div className='classify'>
                        {
                            navListtitle.map((el, index) => (
                                <div className='item' key={index} onClick={this.toshow.bind(this, el)}>
                                    <a href='javascrpt:;' >
                                        <img src={el.pic} />
                                        <span>{el.name}</span>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                    <div className='advertion'>
                        <a href="javascript:;" onClick={this.toXunyan.bind(this)}>
                            <img src={nav_img} />
                        </a>
                    </div>
                    <div className='operation'>
                        <ul>
                            {
                                navListpic.map((el, index) => (
                                    <li key={index}>
                                        <a href='javascript:;'>
                                            <div>
                                                <h3>{el.name}</h3>
                                                <p dangerouslySetInnerHTML={{ __html: el.describe }}></p>
                                            </div>
                                            <div className='preferential'>
                                                <img src={el.pic} />
                                            </div>
                                        </a>

                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </Nav>
            );
        } else {
            return null
        }
    }
    toshow(el) {
        // cid=0&caid=35
        //  console.log(el.url);
        let q_data = el.url.split('?')[1]
        // console.log(q_data)
        this.props.history.push({
            pathname: `/show/?${q_data}`,
            state: q_data
            // {pathname:`/news/item?name=${item.name}&say=${item.say}`}
        })
    }
    // toCard(el) {
    //     // console.log(el);
    //     let card_id = el.url.split('showCardInfo')[1] || "Cardproduct/index" || 'activity/index' || 'calendar/index'
    //     // console.log(card_id);
    //     // Cardproduct/index Cardproduct/showCardInfo/card_group_id/253 activity/index calendar/index
    //     this.props.history.push({
    //         pathname: `/show/${card_id}`,
    //         state: card_id
    //     })
    // }
    toXunyan() {
        let sid = '?sid=36052'
        this.props.history.push({
            pathname: `/Romeo/${sid}`,
            state: sid
        })
    }
}

export default withRouter(Nava);
