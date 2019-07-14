import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios"

import { SearchBar } from 'antd-mobile';
import './search.scss'
class SearchBarExample extends React.Component {
  state = {
    value: '',
    List: [],
    searchList: []
  };

  onChange = (value) => {
    this.setState({ value });
    if (value == '') {
      this.setState({ searchList: [] })

    } else {
      axios({
        method: 'get',
        url: '/apis/Search/getShowList',
        params: {
          keywords: value,
          page: '1',
          sort_type: '1',
          version: '5.1.4',
          referer: '1'

        }
      }).then((res) => {
        this.setState({ searchList: res.data.data.list })

      })
    }


  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }

  render() {
    return (<div>

      <SearchBar
        value={this.state.value}
        placeholder='搜索热门演出'
        // onSubmit={value => console.log(value, 'onSubmit')}
        // onClear={value => console.log(value, 'onClear')}
        // onFocus={() => console.log('onFocus')}
        // onBlur={() => console.log('onBlur')}
        onCancel={() => this.props.history.push('/Home')}
        showCancelButton
        onChange={this.onChange}
      />

      <div style={this.state.searchList.length == 0 ? { display: 'block' } : { display: 'none' }}>
        <h1 className='h1'>热门搜索</h1>
        <ul className='ul'>
          {
            this.state.List.map((item, index) => {
              return (<li key={index} onClick={this.search.bind(this, item)}>
                {item}

              </li>)

            })
          }
        </ul>
      </div>
      <div>
        <ul className='ulll'>
          {
            this.state.searchList.map((el, index) => (
              <li key={index}>
                <div className="show-icon">
                  <a href="javascript:;">
                    <img src={el.pic} onClick={this.showticket.bind(this, el)} />
                  </a>
                </div>
                <div className="item-desc">
                  <div className="show-date">
                    <strong>{el.show_time_top}</strong>{el.week}
                  </div>
                  <a href="javascript:;">
                    <h3 className='h3' dangerouslySetInnerHTML={{ __html: el.name }}></h3>
                  </a>
                  <p>{el.city_name} | {el.venue_name}</p>
                  <p className="price">
                    <strong className='c_ff6'>￥{el.min_price}</strong>起
                                            </p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>

    </div>);
  }
  componentDidMount() {
    axios.get('https://m.juooo.com/Search/getHotWord?&version=5.1.4&referer=2')
      .then(res => {
        this.setState({ List: res.data.data })
      });
  }

  showticket(el) {
    
    this.props.history.push({
      pathname: `/details/${el.schedular_id}`,
      state: el.schedular_id
    })
  }
  search(item) {

    this.setState({ value: item })
    axios({
      method: 'get',
      url: '/apis/Search/getShowList',
      params: {
        keywords: item,
        page: '1',
        sort_type: '1',
        version: '5.1.4',
        referer: '1'
      }
    }).then((res) => {
      this.setState({ searchList: res.data.data.list })
    })
  }
}
export default withRouter(SearchBarExample)
// 如果没有在 router里面配置路由的组件是没有编程式路由跳转对象的history
//所有我们使用 withRouter(One) 给当前组件写入 history对象