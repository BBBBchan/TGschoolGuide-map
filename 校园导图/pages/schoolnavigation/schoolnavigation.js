var app = getApp() 
Page({
  data: {
    long: "",
    lati: "",
    openPicker: false,
    openLocation:false,
    openSort:false,
    // contentHeight: 0,
    // markers:[
    // ],
    // controls:[
    // ],
    controls: [{
      id: 1,
      iconPath: "/imgs/news.png",
      position: {
        left: 10,
        top: 55 - 50,
        width: 40,
        height: 40
      },
      clickable: true
    },
      {
        id: 2,
        iconPath: "/imgs/warn.png",
        position: {
          left: 10,
          top: 100 - 50,
          width: 40,
          height: 40
        },
        clickable: true
      },
      {
        id: 3,
        iconPath: "/imgs/school.png",
        position: {
          left: 325,
          top: 50 - 50,
          width: 50,
          height: 50
        },
        clickable:false
      },
      ],
    tab: [  
      {
        id: 1,
        title: "地图"
      }, {
        id: 2,
        title: "餐饮"
      }, {
        id: 3,
        title: "住宿"
      }, {
        id: 4,
        title: "出行"
      }, {
        id: 5,
        title: "学习"
      },{
        id: 6,
        title: "校园服务"
      }
    ]
  },
  onLoad: function () {
    var _this = this;
    wx.getSystemInfo(
      {
        success: function (res) {
          var _innerWidth = res.windowWidth
          _this.data.controls.forEach(function (item) {
            item.position.left = (item.position.left / 375) * _innerWidth
            item.position.top = (item.position.top / 375) * _innerWidth
            item.position.width = (item.position.width / 375) * _innerWidth
            item.position.height = (item.position.height / 375) * _innerWidth
          })
          _this.setData(
            {
              controls: _this.data.controls
            }
          )
        }
      }
    )
    this.mapCtx = wx.createMapContext('map')

    var t = {
      currentTarget: {
        dataset: {
          id: 1
        }
      }
    };
    //console.log(t);
    this.Showmarker(t);
  },
  
  Showmarker: function (t) {
        
   var innerMap = [
     {
       id: 0,
       latitude: "34.120857",
       longitude: "108.833662",
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "西安电子科技大学",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     }
   ] 
   var eat = [
    {
      id: 11,
      latitude: 34.128250,
      longitude: 108.837771  ,
      iconPath: "/imgs/ic_position.png",
      title: "#",
      callout: {
        content: "老综合楼",
        color: "#ffffff",
        fontSize: 14,
        bgColor: "#661AFF",
        borderRadius: 10,
        padding: 5,
        display: "ALWAYS"
      }
    },
    {
      id: 12,
      latitude: 34.127228,
      longitude: 108.839267,
      iconPath: "/imgs/ic_position.png",
      title: "#",
      callout: {
        content: "新综合楼",
        color: "#ffffff",
        fontSize: 14,
        bgColor: "#661AFF",
        borderRadius: 10,
        padding: 5,
        display: "ALWAYS"
      }
    },
    {
      id: 13,
      latitude: 34.126158,
      longitude: 108.838989,
      iconPath: "/imgs/ic_position.png",
      title: "#",
      callout: {
        content: "竹园餐厅",
        color: "#ffffff",
        fontSize: 14,
        bgColor: "#661AFF",
        borderRadius: 10,
        padding: 5,
        display: "ALWAYS"
      }
    },
    {
      id: 14,
      latitude: 34.129133,
      longitude: 108.833812,
      iconPath: "/imgs/ic_position.png",
      title: "#",
      callout: {
        content: "海棠餐厅",
        color: "#ffffff",
        fontSize: 14,
        bgColor: "#661AFF",
        borderRadius: 10,
        padding: 5,
        display: "ALWAYS"
      }
    },
    {
      id: 15,
      latitude: 34.123796,
      longitude: 108.829794,
      iconPath: "/imgs/ic_position.png",
      title: "#",
      callout: {
        content: "丁香餐厅",
        color: "#ffffff",
        fontSize: 14,
        bgColor: "#661AFF",
        borderRadius: 10,
        padding: 5,
        display: "ALWAYS"
      }
    },
   ]    
   var house = [
     {
       id: 1,
       latitude: 34.129906,
       longitude: 108.833333,
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "海棠公寓",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 2,
       latitude: 34.127108,
       longitude: 108.839697,
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "竹园公寓",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 3,
       latitude: 34.122899,
       longitude: 108.828936,
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "丁香公寓",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     }
   ]
   var car = [
     {
       id: 1,
       latitude: 34.120905,
       longitude: 108.840501,
       iconPath: "/imgs/ic_position.png",
       title: "916",
       callout: {
         content: "916",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 2,
       latitude: 34.120704,
       longitude: 108.840502,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "921",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 3,
       latitude: 34.120793,
       longitude: 108.840383,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "173",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }

     },
     {
       id: 4,
       latitude: 34.120802,
       longitude: 108.840740,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "4-08",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 5,
       latitude: 34.120701,
       longitude: 108.840705,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "4-16",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 6,
       latitude: 34.128787,
       longitude: 108.837862,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "4-11",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     }
   ]
   var learn = [
     {
       id: 1,
       latitude: 34.126869,
       longitude: 108.830931,
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "A楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 2,
       latitude: 34.126105,
       longitude: 108.831961,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "B楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 3,
       latitude: 34.125998,
       longitude: 108.833141,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "C楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 4,
       latitude: 34.124915,
       longitude: 108.834064,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "D楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 5,
       latitude: 34.123742,
       longitude: 108.836854,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "E楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 6,
       latitude: 34.124098,
       longitude: 108.837154,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "F楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 7,
       latitude: 34.123778,
       longitude: 108.837841,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "G楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 8,
       latitude: 34.125332,
       longitude: 108.838817,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "信远楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 9,
       latitude: 34.124186,
       longitude: 108.833163,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "图书馆",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     
   ]
   var campus = [
     {
       id: 20,
       latitude: "34.120857",
       longitude: "108.833662",
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "校园服务",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     }
   ] 
   var flags = [innerMap, eat, house, car, learn, campus];
   
   var e = t.currentTarget.dataset.id  //e = id
    this.setData({
      lati: innerMap[0].latitude,
      long: innerMap[0].longitude, 
      markers:flags[e-1],
    });
    console.log("id:"+this.data.markers[0].id);
    console.log(this.data.lati+ ":" + this.data.long);
    this.setData({
      now_tab: e
    });
    
  },
  controltap: function (t) {
    console.log(t)
    if(1 === t.controlId){
      wx.navigateTo({
        url: "news"
      })
    }
        else if (2 === t.controlId) {  
          wx.navigateTo({
            url: "report"
          });
        }
            
  },
  
  onPickHeaderClick: function () {
    this.setData({
      openPicker: !this.data.openPicker,
      
    })
  },
  onPickLocation:function(){
    this.setData({
      openLocation:!this.data.openLocation,
    })
  },
  onPickSort:function(){
    this.setData({
      openSort:!this.data.openSort,
    })
  },
  onPickOrder:function(){
    this.setData({
      openOrder:!this.data.openOrder,
    })
  },
  onPickRestaurant:function(){
    wx.navigateTo({
      url: 'store',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    this.setData({
      openLocation: !this.data.openLocation,
    })
  },
 onPickRestaurantClass:function(){
   wx.navigateTo({
     url: 'store',
     success: function (res) { },
     fail: function (res) { },
     complete: function (res) { },
   })
   this.setData({
     openSort: !this.data.openSort,
   })
 },
  onPickRestaurantOrder:function(){
    wx.navigateTo({
      url: 'store',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    this.setData({
      openOrder: !this.data.openOrder,
    })
  },
  markertap: function (t) {
    if (0 == t.markerId) {
      wx.openLocation({
        latitude: 34.120857,
        longitude: 108.833662,
        scale: 18,
        name: '西安电子科技大学',
        address: '西安电子科技大学郭杜镇兴隆乡',
      })
    }
    if(11 === t.markerId) {
      console.log(t)
      wx.navigateTo({
        url: 'store'
      })
    }
    if (12 === t.markerId) {
      console.log(t)
      wx.navigateTo({
        url: 'store'
      })
    }
    if (13 === t.markerId) {
      console.log(t)
      wx.navigateTo({
        url: 'store'
      })
    }
    if (14 === t.markerId) {
      console.log(t)
      wx.navigateTo({
        url: 'store'
      })
    }
    if (15 === t.markerId) {
      console.log(t)
      wx.navigateTo({
        url: 'store'
      })
    }
    if (20 == t.markerId) {
      wx.navigateTo({
        url: 'schoolthings'
      })
    }
  },

})