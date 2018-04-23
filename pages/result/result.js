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
    machNum: ""
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
    this.setData({ "machNum": machNum})
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