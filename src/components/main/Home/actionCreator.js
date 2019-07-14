import axios from "axios"

export const GET_LIST_DATA = "info/get_list_data";
export const loadListData = (res) => {
  return {
    type: GET_LIST_DATA,
    res
  }
}
export const loadListDataAsyanc = (dispatch) => {
  return () => {
    axios({
      method: 'get',
      url: '/apis/home/getHotTheatre',
      data: {
        referer: "2",
        limit: "6",
        version: "5.1.4",
        referer: "2"
      }
    }).then((res) => {
      //  数据就变成了可以触发事件监听类型 
      // console.log(res);
      dispatch(loadListData(res.data.data.theatre_list))
    })
  }
}