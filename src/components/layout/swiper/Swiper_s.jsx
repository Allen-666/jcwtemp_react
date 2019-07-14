import React, { Fragment, PureComponent } from "react";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import styled from 'styled-components'
import { withRouter } from "react-router-dom";

const Div = styled.div`
                width: 2.85333rem !important;
                margin-right: 8px;
                a {
                  display: block;
                  color: #232323;
                  /* outline: none; */
                  div {
                    width: 2.85333rem;
                    height: 3.89333rem;
                    border-radius: 0.10667rem;
                    border: 1px solid #ebebeb;
                    overflow: hidden;
                    img {
                      /* display: block; */
                      border-color: transparent;
                      width: 100%;
                      height: 100%;
                    }
                  }
                  h3 {
                    height: 0.66667rem;
                    line-height: 0.66667rem;
                    font-size: 0.4rem;
                    color: #232323;
                    margin-top: 0.13333rem;
                    width: 100%;
                    font-weight: 700;
                    padding-right: 0.4rem;
                    box-sizing: border-box;
                  }
                }
`
const Box = styled.div`
    background: #fff;
`
class Swipe extends PureComponent {
    componentWillReceiveProps() {
        this.test()
    }
    render() {
        let { hots_show_list } = this.props
        return (
            <Fragment>
                <Box className="swiper-container s1">
                    <div className="swiper-wrapper">
                        {
                            hots_show_list.map((el, index) => (
                                <Div className="swiper-slide" key={index} onClick={this.toDetail.bind(this, el)}>
                                    <a href='javascript:;'>
                                        <div className="item">
                                            <img src={el.pic} />
                                        </div>
                                        <h3>{el.show_name}</h3>
                                    </a>
                                </Div>
                            ))
                        }
                    </div>
                </Box>
            </Fragment>
        )
    }
    test() {
        new Swiper('.s1', {
            observer: true,
            slidesPerView: 'auto',
        })
    }
    toDetail(el) {
        let arr = el.schedular_url.split('ticket/')
        this.props.history.push({
            pathname: `/Details/${arr[1]}`,
            state: arr[1]
        })
    }
}
export default withRouter(Swipe);