import React, { Fragment, Component } from "react"
import Showheader from "@/components/layout/showheader/Showheader"
import Showtabbar from "@/components/layout/showtabbar/Showtabbar"
// import Showlist from "@/components/layout/showlist/Showlist"
// import Citylist from "@/components/layout/citylist/Citylist"
import { loadTabtitleDataAsyanc } from "./actionCreator"
import { loadTablistDataAsyanc } from "./actionCreator"
import { loadCitylistDataAsyanc } from "./actionCreator"
import { connect } from "react-redux";


class Show extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.tabtitle.size != 0) {
            return (
                <Fragment>
                    <Showheader />
                    <Showtabbar tabtitle={this.props.tabtitle} num={this.props.num} caid={this.props.location.state}/>
                    {/* <Showlist tablist={this.props.tablist}/>  */}
                    {/* <Citylist citylist={this.props.citylist}/>*/}
                </Fragment>
            )
        } else {
            return null
        }
    }
    componentDidMount() {
        const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        _this.props.handleTest();
        // console.log();
    }
}

const mapStateToProps = (store) => {
    // console.log(store);
    return {
        tabtitle: store.getIn(["showReducer", "tabtitle"]),
        tablist: store.getIn(["showReducer", "tablist"]),
        citylist: store.getIn(["showReducer", "citylist"]),
    }
}
//里面必需返回一个对象
const mapDispathToProps = (dispatch) => ({
    handleTest() {
        dispatch(loadTabtitleDataAsyanc(dispatch))
        dispatch(loadTablistDataAsyanc(dispatch))
        dispatch(loadCitylistDataAsyanc(dispatch))
    },
})
export default connect(mapStateToProps, mapDispathToProps)(Show);