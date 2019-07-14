import axios from "axios"

export const GET_Recommend_Data = "get_recommend_data";
export const recommendListData = (res) => {
  return {
    type: GET_Recommend_Data,
    res
  }
}
export const recommendAsyanc = (dispatch) => {
  return () => {
    axios({
      method: 'get',
      url: '/apis/home/getRecommendShow',
      data: {
        version: "5.1.4",
        referer: "2",
        page: 1
      }
    }).then((res) => {
      //  数据就变成了可以触发事件监听类型 
      // console.log(res);
      dispatch(recommendListData(res.data.data.recommend_show_list))
    })
  }
}