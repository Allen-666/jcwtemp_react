import React, { Fragment, Component } from "react"
import { connect } from "react-redux"
import axios from "axios"
import { loadListDataAsyanc } from "./actionCreator"

// 组件
import Banner from '@/components/layout/swiper/Banner'
import Header from '@/components/layout/header/Header'
import Nav from '@/components/layout/nav/Nav'
import HotTour from '@/components/layout/hot_tour/Hot_tour'
import Category from '@/components/layout/category/Category'
import HotVenue from '@/components/layout/swiper/Hot_venue'
import Home_recommend from '@/components/layout/home_recommend/Home_recommend'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bannerList: [],
            navListtitle: [],
            navListpic: [],
        }
    }
    render() {
        // if (this.props.theatre_listData.size != 0 && this.state.bannerList.length != 0 && this.state.navListtitle.length != 0 && this.state.navListpic.length != 0) {
        return (
            <Fragment>
                <Header caid={this.props.location.state} />
                <Home_recommend change={sum => { this.changeCount(sum) }}>
                    <Banner bannerList={this.state.bannerList} />
                    <Nav navListtitle={this.state.navListtitle} navListpic={this.state.navListpic} ></Nav>
                    <HotTour></HotTour>
                    <Category></Category>
                    <HotVenue theatreList={this.props.theatre_listData}></HotVenue>
                </Home_recommend>
            </Fragment>
        )
    }
    componentDidMount() {
        const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('https://m.juooo.com/home/getSildeList?abbreviation=&limit=&&version=5.1.4&referer=2')
            .then(res => {
                // console.log(res.data.data.silde_list)
                _this.setState({ bannerList: res.data.data.silde_list })
            });
        axios.get('https://m.juooo.com/home/getClassifyItem?city_id=0&operation_limit=5&&version=5.1.4&referer=2').then(res => {
            // console.log(res.data.data)
            _this.setState({ navListtitle: res.data.data.classify_list, navListpic: res.data.data.operation_list })
        });
        this.props.handleTest();
    }
}
const mapStateToProps = (store) => {
    // console.log(store)
    return {
        theatre_listData: store.getIn(["homeReducer", "theatre_list"])
    }
}
const mapDispathToProps = (dispatch) => ({
    handleTest() {
        dispatch(loadListDataAsyanc(dispatch))
    }
})
export default connect(mapStateToProps, mapDispathToProps)(Home)
