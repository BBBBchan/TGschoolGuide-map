Page({
  data: {
    Type: 0,
    TypeArray: ["报 失", "招 领"]
  },
  TypeChange: function (t) {
    this.setData({
      Type: t.currentTarget.dataset.id
    }), this.onLoad();
  },
  ViewDetail: function (t) {
    wx.navigateTo({
      url: "LostgetInfo?id=" + t.currentTarget.dataset.id
    });
  },
  add: function (t) {
    wx.switchTab({
      url: "LostAdd"
    });
  },
});