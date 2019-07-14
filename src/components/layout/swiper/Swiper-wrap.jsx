import React, { Fragment, PureComponent } from "react";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import styled from 'styled-components'
import { withRouter } from "react-router-dom";

let log_r = require("@/static/img/log_r.png")
const Div = styled.div`
          padding: 0.4rem 0 0 0.4rem;
          .swiper-slide {
            width: 2.85333rem;
            margin-right: 8px;
          }
          a {
            color: #232323;
            .img {
              height: 3.89333rem;
              border-radius: 0.10667rem;
              border: 1px solid #ebebeb;
              width: 2.85333rem;
              position: relative;
              overflow: hidden;
              img {
                border: none;
                border-color: transparent;
                vertical-align: middle;
                width: 100%;
                height: 100%;
              }
              .juooo_sponsor{
                .logo_i{
                position: absolute;
                left: .10667rem;
                top: -.02667rem;
                width: .77333rem;
                height: .93333rem;
                display: block;
                background: url(${log_r}) 50% no-repeat;
                background-size: 100%;
                }
            }
            }
            h3 {
              height: 0.66667rem;
              line-height: 0.66667rem;
              font-size: 0.45333rem;
              color: #232323;
              margin-top: 0.26667rem;
              width: 100%;
              font-weight: 600;
              overflow: hidden;
             text-overflow: ellipsis;
             white-space: nowrap;
            }
            p {
              font-size: 0.29333rem;
              color: #999;
              height: 0.48rem;
              line-height: 0.48rem;
              margin-top: 0.13333rem;
              .c_ff6 {
                font-size: 0.42667rem;
                letter-spacing: 0;
                margin-right: 0.13333rem;
                font-weight: 400;
                color: #ff6743;
              }
            }
          }
        
`
class Swiper_wrap extends PureComponent {
    componentWillReceiveProps(nextProps) {
        this.test()
    }
    render() {
        // console.log(this.props);
        if (this.props.item.length != 0) {
            return (
                <Fragment>
                    <Div className='swiper-wrap'>
                        <div className="swiper-container st">
                            <div className="swiper-wrapper">
                                {this.props.item.map((el, index) => (
                                    <div className="swiper-slide" key={index} onClick={this.toDetail.bind(this, el)}>
                                        <a href="javascript:;">
                                            <div className="img">
                                                <img src={el.pic} />
                                                <div className="juooo_sponsor" dangerouslySetInnerHTML={{ __html: el.ico }}>
                                                </div>
                                            </div>
                                            <h3>{el.schedular_name}</h3>
                                            <p>
                                                <strong className='c_ff6'>{el.high_price}
                                                </strong>起
                                            </p>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Div>
                </Fragment>
            )
        } else {
            return null
        }
    }
    test() {
        new Swiper('.st', {
            observer: true,
            slidesPerView: 'auto',
        })
    }
    toDetail(el) {
        console.log(el.sche_id)
        let sc_id = el.sche_id
        this.props.history.push({
            pathname: `/details/${sc_id}`,
            state: sc_id
        })
    }
}
export default withRouter(Swiper_wrap)
