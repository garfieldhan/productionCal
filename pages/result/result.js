// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: "",
    perTime: "",
    finTime: "",
    cloNum: "",
    machNum: "",
    perTimeTitle: "每件时间为: ",
    finTimeTitle: "生产天数为: ",
    cloNumTitle: "总共承接件数为: ",
    machNumTitle: "总共开机台数为: "
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var perTime = wx.getStorageSync("perTime");
    var finTime = wx.getStorageSync("finTime");
    var cloNum = wx.getStorageSync("cloNum");
    var machNum = wx.getStorageSync("machNum");

    this.setData({ "perTime": perTime});
    this.setData({ "finTime": finTime});
    this.setData({ "cloNum": cloNum});
    this.setData({ "machNum": machNum});

    var stepRecord = wx.getStorageSync("stepRecord");
    if (stepRecord == "mac-4"){
      this.setData({ machNumTitle: "需要安排机台数为: "})
      if (finTime != 0){
      machNum = cloNum*perTime/1320/finTime;
      } else {
        machNum = 0;
      }
      this.setData({ "machNum": machNum });

    } else if (stepRecord == "clo-4"){
      this.setData({ cloNumTitle: "最多能承接件数为: " })
      if (perTime != 0) {
      cloNum = 1320*machNum*finTime/perTime;
      } else {
        cloNum = 0;
      }
      this.setData({ "cloNum": cloNum });

    } else if (stepRecord == "time-4"){
      this.setData({ finTimeTitle: "需要生产天数为: " })
      if (machNum != 0){
      finTime = cloNum*perTime /1320/machNum;
      } else {
        finTime = 0;
      }
      this.setData({ "finTime": finTime });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.vibrateShort({
    })
    var stepRecord = wx.getStorageSync('stepRecord');
    if (stepRecord == "mac-4"){
      wx.setStorageSync("stepRecord", "mac-3");
    } else if (stepRecord == "clo-4"){
      wx.setStorageSync("stepRecord", "clo-3");
    } else if (stepRecord == "time-4"){
      wx.setStorageSync("stepRecord", "time-3");
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
  
  }

})