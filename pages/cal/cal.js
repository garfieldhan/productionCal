// pages/cal/cal.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    idb: "back",
    id9: "9",
    id8: "8",
    id7: "7",
    id6: "6",
    id5: "5",
    id4: "4",
    id3: "3",
    id2: "2",
    id1: "1",
    id0: "0",
    ide: "＝",
    screenData: "0",
    titleMsg: ""
  },

  /**
   * 生命周期函数--监听页面加载(页面初始化 options为页面跳转所带来的参数)
   */
  onLoad: function (options) {
    var stepRecord = wx.getStorageSync('stepRecord');
    console.log("当前是第"+stepRecord+"步");
    if (stepRecord == 1){
      var titleMsg = wx.getStorageSync('titleMsg');
      this.setData({ "titleMsg": titleMsg });
    } else if (stepRecord == 2){
      this.setData({ "titleMsg": "2" });
    } else if (stepRecord == 3){
      this.setData({ "titleMsg": "3" });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成(页面渲染完成)
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示(页面显示)
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏(页面隐藏)
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载(页面关闭)
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  clickBtn: function (event) {
    var inputData = event.target.id;
    var screenNum = this.data.screenData;  //获取当前屏幕上的数字
    if (inputData == this.data.idb) {  //如果操作是退格←
      if (screenNum == "0") {  //如果屏幕上显示的只有0就returned
        return;
      } else{
        screenNum = screenNum.substring(0, screenNum.length - 1); //获取屏幕上数字的第0位到倒数第二位(这里实现了退格←效果)
        if (screenNum == "") {
          screenNum = 0;
        }
      }
    } else {  //正常录入数字
      if (screenNum == 0) {
        screenNum = inputData;
      } else {
        screenNum += inputData;
      }
    }
    this.setData({ "screenData": screenNum });
  },

  goto: function () {
    var stepRecord = wx.getStorageSync('stepRecord');
    if (stepRecord<4){
      wx.setStorageSync("stepRecord", stepRecord+1);  //每点一次"下一步",记录数就+1
      wx.navigateTo({
        url: '../cal/cal',
      })
    } else {
      wx.navigateTo({
        url: '../result/result',
      })
    }
  }
})