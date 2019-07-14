import React, { Fragment, Component } from "react";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import styled from 'styled-components'
import { withRouter } from "react-router-dom";

const Div = styled.div`
    >img{
    height: 5.22667rem;
    width: 100%;
    display:block;
    }
`
const Box = styled.div`
    background: #fff;
    .swiper-pagination{
        bottom: .2rem;
        left: 0;
        width: 100%;
        span {
        width: .13333rem;
        height: .13333rem;
        background-color: #fff;
        border-radius: 50%;
        opacity: .3;
        margin: 0 .05rem;
        }
        .swiper-pagination-bullet-active{
            width: .35rem;
            opacity: 1;
            border-radius: 0.6667rem;
        }
    }
    
`
class Ban extends Component {
    componentWillReceiveProps() {
        this.test()
    }
    render() {
        let { bannerList } = this.props
        if (bannerList.length != 0) {
            return (
                <Fragment>
                    <Box className="swiper-container sc">
                        <div className="swiper-wrapper">
                            {
                                bannerList.map((el, index) => (
                                    <Div className="swiper-slide" key={index} onClick={this.toDetail.bind(this, index)}>
                                        <img src={el.touch_image_url} />
                                    </Div>
                                ))
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </Box>
                </Fragment>
            )
        } else {
            return null
        }
    }
    test() {
        new Swiper('.sc', {
            autoplay: 2000,
            autoplayDisableOnInteraction: false,//滑动后继续播放（不写官方默认暂停）
            observer: true,
            // loop: true,
            pagination: '.swiper-pagination',
            // }
        })
    }
    toDetail(index) {
        // console.log(index);
        let arr = ['100172', '102335', '102018', '99350', '99899', '101117', '97846', '91320']
        for (let i = 0; i < arr.length; i++) {
            if (index == i) {
                let element_id = arr[i];
                this.props.history.push({
                    pathname: `/Details/${element_id}`,
                    state: element_id
                })
            }
        }
    }
}

export default withRouter(Ban)