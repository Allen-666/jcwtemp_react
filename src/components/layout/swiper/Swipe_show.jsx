import React, { Fragment, Component, PureComponent } from "react";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import styled from 'styled-components'
import { withRouter } from "react-router-dom";

const Div = styled.div`
    width: 6.53333rem;
    transition: height 0.5s;
    margin-right: 0.3rem;
    a {
    display: block;
    color: #232323;
    div {
        height: 3.73333rem;
        width: 100%;
        border-radius: 0.10667rem;
        border: 1px solid #ebebeb;
        overflow: hidden;
        img {
        border: none;
        border-color: transparent;
        vertical-align: middle;
        width: 100%;
        height: 100%;
        }
    }
    h3 {
        height: .66667rem;
        line-height: .66667rem;
        font-size: .45333rem;
        color: #232323;
        margin-top: .33333rem;
        width: 100%;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    p {
        font-size: .34667rem;
        height: .53333rem;
        line-height: .53333rem;
        color: #666;
        text-align: center;
    }
    }
`
const Box = styled.div`
    background: #fff;
`
class Swipe_show extends PureComponent {
    componentWillReceiveProps() {
        this.test()
    }
    render() {
        let { tour_show_list } = this.props
        return (
            <Fragment>
                <Box className="swiper-container container">
                    <div className="swiper-wrapper">
                        {
                            tour_show_list.map((el, index) => (
                                <Div className="swiper-slide" key={index} onClick={this.toDetail.bind(this, el)}>
                                    <a href='javascript:;'>
                                        <div className="item">
                                            <img src={el.pic} />
                                        </div>
                                        <h3>{el.show_name}</h3>
                                        <p>{el.schedular_num}场巡演</p>
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
        new Swiper('.container', {
            // 设置显示的页数
            slidesPerView: 'auto',
            //默认是阻止事件冒泡的
            preventClicksPropagation: true,
            observer: true,
            effect: "coverflow",
            centeredSlides: true,
            loop: true,
            // loopedSlides: this.goodCount,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: false
            }
        })
    }
    toDetail(el) {
        // console.log(el.tour_show_url);
        let tour_id = el.tour_show_url.split('tourshowinfo')[1]
        this.props.history.push({
            pathname: `/Text/${tour_id}`,
            state: tour_id
        })
    }
}
export default withRouter(Swipe_show);
