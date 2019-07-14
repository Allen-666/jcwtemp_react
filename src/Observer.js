const EventList = {};

// 封装事件注册
const on = function(eventName,callback) {
    if(!EventList[eventName]) {
        EventList[eventName] = []
    }
    EventList[eventName].push(callback)
}

// 封装事件触发
const emit = function(eventName,params) {
    if(!EventList[eventName]) return;
    EventList[eventName].map( cb => {
        cb(params)
    })
}

// 事件解绑
 const off = function(eventName,callback) {
     if(!EventList[eventName]) return 
     EventList[eventName] = [];
 }
 
 export default {
     $on: on,
     $emit: emit,
     $off: off
 }