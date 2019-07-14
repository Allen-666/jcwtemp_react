import axios from "axios"
// import { log } from "util";
// import { set } from "immutable";

export const GET_TABTITLE_DATA= "show/get_tabtitle_data";


export const loadTabtitleData=(res)=>{
    return {
        type:GET_TABTITLE_DATA,
        res
    }
}
export const loadTabtitleDataAsyanc=(dispatch)=>{
    return ()=>{
        axios({
            method: 'get',
            url: '/apis/Search/getShowCategory',
            data: {
              version:"5.1.4",
              referer:"2"
            }
          }).then((res)=>{
            //  数据就变成了可以触发事件监听类型 
            // console.log(res);
            
            dispatch(loadTabtitleData(res.data.data.show_category_list))
          })
    }
}
export const GET_TABLIST_DATA= "show/get_tablist_data";


export const loadTablistData=(res)=>{
    return {
        type:GET_TABLIST_DATA,
        res,
    }
}
export const loadTablistDataAsyanc=(dispatch)=>{
  return ()=>{
      axios({
          method: 'get',
          url: '/apis/Search/getShowList',
          data: {
            category:'0',
            city_id:"0",
            page:"1",
            keywords:"",
            version:"5.1.4",
            referer:"2"
          }
        }).then((res)=>{
          //  数据就变成了可以触发事件监听类型 
          // console.log(res);
          
          dispatch(loadTablistData(res.data.data.list))
        })
  }
}
export const GET_CITYLIST_DATA= "show/get_citylist_data";


export const loadCitylistData=(res)=>{
    return {
        type:GET_CITYLIST_DATA,
        res
    }
}
export const loadCitylistDataAsyanc=(dispatch)=>{
  return ()=>{
      axios({
          method: 'get',
          url: '/apis/Search/getCity',
          data: {
            version:"5.1.4",
            referer:"2"
          }
        }).then((res)=>{
          //  数据就变成了可以触发事件监听类型 
          // console.log(res);       
          dispatch(loadCitylistData(res.data.data.city_list))
        })
  }
}
