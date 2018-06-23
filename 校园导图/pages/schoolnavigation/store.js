var restaurantslist = require("../../data/posts-data.js")
var picker=0;
Page({
  data:{
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../imgs/normal.png',
    selectedSrc: '../../imgs/selected.png',
    halfSrc: '../../imgs/half.png',
    key: 0,//评分
    page: 1,
    pagesize: 10,
    hasMoreData: true,
    contentlist: [],
    
    currentPage: 1,
    array1:['位置', '海棠餐厅', '竹园餐厅', '丁香餐厅', '老综合楼', '新综合楼'],
    objectArray1: [
        {id: 0},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
    ],
    index1: 0,
    array2: ['品类', '后续开放此功能'],
    // '快餐便当', '米粉面馆', '炸鸡小吃','地方菜类','夹馍饼类', '冒菜香锅','火锅烧烤','饮品甜点','西餐料理'
    objectArray2: [
      {
        id: 0,
        name: '品类'
      },
      {
        id: 1,
        name: '后续开放此功能'
      },
      // {
      //   id: 2,
      //   name: '米粉面馆'
      // },
      // {
      //   id: 3,
      //   name: '炸鸡小吃'
      // },
      // {
      //   id: 4,
      //   name: '地方菜类'
      // },
      // {
      //   id: 5,
      //   name: '夹馍饼类'
      // },
      // {
      //   id: 6,
      //   name: '冒菜香锅'
      // },
      // {
      //   id: 7,
      //   name: '火锅烧烤'
      // },
      // {
      //   id: 8,
      //   name: '饮品甜点'
      // },
      // {
      //   id: 9,
      //   name: '西餐料理'
      // },
    ],
    index2: 0,
    array3: ['排序',  '后续开放此功能'],
    //, '好评优先',
    objectArray3: [
      {
        id: 0,
        name: '品类'
      },
      {
        id: 1,
        name: '后续开放此功能'
      },
      // {
      //   id: 2,
      //   name: '米粉面馆'
      // },
    ],
    index3: 0,
    },
  onLoad: function (res){  
    // this.setData({
    //   restaurant_list: restaurantslist.restaurantlist,
    //   pagesize: 5
    // })
    var self = this
    wx.request({
      url: 'https://wizzcampus.helloyzy.cn/uwsgi/all',
      method: 'GET',
      data: {
        DRID:self.data.DRID,
        NAME: self.data.NAME,
        FLOOR: self.data.FLOOR,
        INFO: self.data.INFO,
        IMAGEURL: self.data.IMAGEURL,
        FLOORINFO: self.data.FLOORINFO,
        // page:1,
        // pagesize:5,
      },
      success: function (res) {  
        // console.log(res.data.data);
        self.setData({
          restaurant_list:res.data
        })
      }
    })
  },
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
    this.filterChanged()
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },
  filterChanged(res){
   
    // var id = this.data.index1;
    console.log(this.data.index1);
    if (this.data.index1==1){
    var self = this;
    wx.showToast({
      title: '载入中',
      icon: 'loading',
      duration: 1000
    })  
    wx.request({
      url: 'https://wizzcampus.helloyzy.cn/uwsgi/all',
      method: 'GET',
      data: {
        DRID: self.data.DRID,
        NAME: self.data.NAME,
        FLOOR: self.data.FLOOR,
        INFO: self.data.INFO,
        IMAGEURL: self.data.IMAGEURL,
        FLOORINFO: self.data.FLOORINFO,
      },
      success: function (res) {
        console.log(233333333);
        var arr = res.data;
        var newArr = [];
        for(var i = 0; i < 66 && i < arr.length; i++) {
          newArr.push(arr[i])
        }
        console.log(newArr);
        self.setData({
          restaurant_list: newArr,
        })
        
      }
      
    })
    }
    if (this.data.index1 == 2) {
      var self = this;
      wx.showToast({
        title: '载入中',
        icon: 'loading',
        duration: 1000
      })
      wx.request({
        url: 'https://wizzcampus.helloyzy.cn/uwsgi/all',
        method: 'GET',
        data: {
          DRID: self.data.DRID,
          NAME: self.data.NAME,
          FLOOR: self.data.FLOOR,
          INFO: self.data.INFO,
          IMAGEURL: self.data.IMAGEURL,
          FLOORINFO: self.data.FLOORINFO,
        },
        success: function (res) {
          console.log(233333333);
          var arr = res.data;
          var newArr = [];
          for (var i = 66; i < 72 && i < arr.length; i++) {
            newArr.push(arr[i])
          }
          console.log(newArr);
          self.setData({
            restaurant_list: newArr,
          })

        }

      })
    }
  if(this.data.index1==3) {
    var self = this;
    wx.showToast({
      title: '载入中',
      icon: 'loading',
      duration: 1000
    })
    wx.request({
      url: 'https://wizzcampus.helloyzy.cn/uwsgi/all',
      method: 'GET',
      data: {
        DRID: self.data.DRID,
        NAME: self.data.NAME,
        FLOOR: self.data.FLOOR,
        INFO: self.data.INFO,
        IMAGEURL: self.data.IMAGEURL,
        FLOORINFO: self.data.FLOORINFO,
      },
      success: function (res) {
        console.log(233333333);
        var arr = res.data;
        var newArr = [];
        for (var i = 72; i < 144 && i < arr.length; i++) {
          newArr.push(arr[i])
        }
        console.log(newArr);
        self.setData({
          restaurant_list: newArr,
        })

      }

    })
  }
  if (this.data.index1 == 4) {
    var self = this;
    wx.showToast({
      title: '载入中',
      icon: 'loading',
      duration: 1000
    })
    wx.request({
      url: 'https://wizzcampus.helloyzy.cn/uwsgi/all',
      method: 'GET',
      data: {
        DRID: self.data.DRID,
        NAME: self.data.NAME,
        FLOOR: self.data.FLOOR,
        INFO: self.data.INFO,
        IMAGEURL: self.data.IMAGEURL,
        FLOORINFO: self.data.FLOORINFO,
      },
      success: function (res) {
        console.log(233333333);
        var arr = res.data;
        var newArr = [];
        for (var i = 144; i < 199 && i < arr.length; i++) {
          newArr.push(arr[i])
        }
        console.log(newArr);
        self.setData({
          restaurant_list: newArr,
        })

      }

    })
  }
  if (this.data.index1 == 5) {
    var self = this;
    wx.showToast({
      title: '载入中',
      icon: 'loading',
      duration: 1000
    })
    wx.request({
      url: 'https://wizzcampus.helloyzy.cn/uwsgi/all',
      method: 'GET',
      data: {
        DRID: self.data.DRID,
        NAME: self.data.NAME,
        FLOOR: self.data.FLOOR,
        INFO: self.data.INFO,
        IMAGEURL: self.data.IMAGEURL,
        FLOORINFO: self.data.FLOORINFO,
      },
      success: function (res) {
        console.log(233333333);
        var arr = res.data;
        var newArr = [];
        for (var i = 199; i < 236 && i < arr.length; i++) {
          newArr.push(arr[i])
        }
        console.log(newArr);
        self.setData({
          restaurant_list: newArr,
        })

      }

    })
  }
  },

  // getMore() {
  //   var self = this
  //   wx.showToast({
  //     title: '载入中',
  //     icon: 'loading',
  //     duration: 60000
  //   })
  //   var self = this;
  //   wx.request({
  //     url: 'https://wizzcampus.helloyzy.cn/uwsgi/all',
  //     data: {
  //       NAME: self.data.NAME,
  //       FLOOR: self.data.FLOOR,
  //       INFO: self.data.INFO,
  //       IMAGEURL: self.data.IMAGEURL,
  //       FLOORINFO: self.data.FLOORINFO,
  //       page: 1,
  //       pagesize: 10,
  //     },
  //     success: function (res) {
  //       // console.log(res.data.data);
  //       var new_house_list = self.data.house_list.concat(res.data.data)
  //       self.setData({
  //         house_list: new_house_list,
  //         page: self.data.page + 1
  //       })
  //     },
  //     fail: function () {
  //       console.log("获取数据失败");
  //     },
  //     complete: function () {
  //       wx.hideToast();
  //     }
  //   })
  // }
  selectLeft: function (e) {
    var key = e.currentTarget.dataset.key
    if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
      //只有一颗星的时候,再次点击,变为0颗
      key = 0;
    }
    console.log("得" + key + "分")
    this.setData({
      key: key
    })

  },
  //点击左边,整颗星
  selectRight: function (e) {
    var key = e.currentTarget.dataset.key
    console.log("得" + key + "分")
    this.setData({
      key: key
    })
  }
});