function initSubMenuDisplay() {
  return ['hidden', 'hidden', 'hidden'];
}

Page({
  data: {
    subMenuDisplay: initSubMenuDisplay()
  },
  tapMainMenu: function (e) {//        获取当前显示的一级菜单标识
    var index = parseInt(e.currentTarget.dataset.index);        // 生成数组，全为hidden的，只对当前的进行显示
    var newSubMenuDisplay = initSubMenuDisplay();//        如果目前是显示则隐藏，反之亦反之。同时要隐藏其他的菜单
    if (this.data.subMenuDisplay[index] == 'hidden') {
      newSubMenuDisplay[index] = 'show';
    } else {
      newSubMenuDisplay[index] = 'hidden';
    }        // 设置为新的数组
    this.setData({
      subMenuDisplay: newSubMenuDisplay
    });
  },
  
  tapSubMenu: function (e) {        // 隐藏所有一级菜单
    this.setData({
      subMenuDisplay: initSubMenuDisplay()
    });        // 处理二级菜单，首先获取当前显示的二级菜单标识
    var indexArray = e.currentTarget.dataset.index.split('-');        // 初始化状态
    // var newSubMenuHighLight = initSubMenuHighLight;
    for (var i = 0; i < initSubMenuHighLight.length; i++) {            // 如果点中的是一级菜单，则先清空状态，即非高亮模式，然后再高亮点中的二级菜单；如果不是当前菜单，而不理会。经过这样处理就能保留其他菜单的高亮状态
      if (indexArray[0] == i) {
        for (var j = 0; j < initSubMenuHighLight[i].length; j++) {                    // 实现清空
          initSubMenuHighLight[i][j] = '';
        }                // 将当前菜单的二级菜单设置回去
      }
    }        // 与一级菜单不同，这里不需要判断当前状态，只需要点击就给class赋予highlight即可
    initSubMenuHighLight[indexArray[0]][indexArray[1]] = 'highlight';        // 设置为新的数组
    this.setData({
      subMenuHighLight: initSubMenuHighLight
    });
  },
  
});