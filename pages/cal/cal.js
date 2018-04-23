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
    if (stepRecord == "mac-1" || stepRecord == "clo-1" || stepRecord == "time-1"){
      var titleMsg = wx.getStorageSync('titleMsg');
      this.setData({ "titleMsg": titleMsg });

    //↓计算安排多少台机
    } else if (stepRecord == "mac-2"){
      this.setData({ "titleMsg": "请输入做货天数" });
    } else if (stepRecord == "mac-3") {
      this.setData({ "titleMsg": "请输入总件数" });
    
    //↓计算做多少件衣服
    } else if (stepRecord == "clo-2"){
      this.setData({ "titleMsg": "请输入开机台数" });
    } else if (stepRecord == "clo-3") {
      this.setData({ "titleMsg": "请输入做货天数" });

    //↓计算做要做多少天
    } else if (stepRecord == "time-2") {
      this.setData({ "titleMsg": "请输入开机台数" });
    } else if (stepRecord == "time-3") {
      this.setData({ "titleMsg": "请输入总件数" });
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
    var stepRecord = wx.getStorageSync('stepRecord');
    console.log("=========当前是第" + stepRecord + "步===============");
    console.log("每件时间:" + wx.getStorageSync("perTime"));
    console.log("货期:" + wx.getStorageSync("finTime"));
    console.log("总件数:" + wx.getStorageSync("cloNum"));
    console.log("开机台数:" + wx.getStorageSync("machNum"));
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
    var stepRecord = wx.getStorageSync('stepRecord');
    if (stepRecord == "mac-3") {
      wx.setStorageSync("stepRecord", "mac-2");
    } else if (stepRecord == "mac-2") {
      wx.setStorageSync("stepRecord", "mac-1");
    } else if (stepRecord == "clo-3") {
      wx.setStorageSync("stepRecord", "clo-2");
    } else if (stepRecord == "clo-2") {
      wx.setStorageSync("stepRecord", "clo-1");
    } else if (stepRecord == "time-3") {
      wx.setStorageSync("stepRecord", "time-2");
    } else if (stepRecord == "time-2") {
      wx.setStorageSync("stepRecord", "time-1");
    }
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
    var data = this.data.screenData;


    //↓计算安排多少台机
    if (stepRecord=="mac-1"){
      wx.setStorageSync("stepRecord", "mac-2");
      wx.setStorageSync("perTime", data);
      wx.navigateTo({
        url: '../cal/cal',
      })
    } else if (stepRecord == "mac-2"){
      wx.setStorageSync("stepRecord", "mac-3");
      wx.setStorageSync("finTime", data);
      wx.navigateTo({
        url: '../cal/cal',
      })
    } else if (stepRecord == "mac-3"){
      wx.setStorageSync("stepRecord", "mac-4");
      wx.setStorageSync("cloNum", data);
      wx.navigateTo({
        url: '../result/result',
      })

    //↓计算做多少件衣服
    } else if (stepRecord == "clo-1"){
      wx.setStorageSync("stepRecord", "clo-2");
      wx.setStorageSync("perTime", data);
      wx.navigateTo({
        url: '../cal/cal',
      })
    } else if (stepRecord == "clo-2") {
      wx.setStorageSync("stepRecord", "clo-3");
      wx.setStorageSync("machNum", data);
      wx.navigateTo({
        url: '../cal/cal',
      })
    } else if (stepRecord == "clo-3") {
      wx.setStorageSync("stepRecord", "clo-4");
      wx.setStorageSync("finTime", data);
      wx.navigateTo({
        url: '../result/result',
      })

    //↓计算做要做多少天
    } else if (stepRecord == "time-1") {
      wx.setStorageSync("stepRecord", "time-2");
      wx.setStorageSync("perTime", data);
      wx.navigateTo({
        url: '../cal/cal',
      })
    } else if (stepRecord == "time-2") {
      wx.setStorageSync("stepRecord", "time-3");
      wx.setStorageSync("machNum", data);
      wx.navigateTo({
        url: '../cal/cal',
      })
    } else if (stepRecord == "time-3") {
      wx.setStorageSync("stepRecord", "time-4");
      wx.setStorageSync("cloNum", data);
      wx.navigateTo({
        url: '../result/result',
      })
    }
  }
})