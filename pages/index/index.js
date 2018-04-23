//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '生产计算器v1.00',
    titleMsg: ""
  },

  onShow: function (options) {
    //初始化数据
    wx.setStorageSync("stepRecord", "0");
    wx.setStorageSync("perTime", "0");
    wx.setStorageSync("finTime", "0");
    wx.setStorageSync("cloNum", "0");
    wx.setStorageSync("machNum", "0")
  },

  calMac: function(){
    wx.vibrateShort({
    })
    var titleText = this.data.titleMsg;
    titleText="请输入一件衣服的时间(分钟):";
    this.setData({"titleMsg": titleText});
    wx.setStorageSync("titleMsg", this.data.titleMsg);
    wx.setStorageSync("stepRecord", "mac-1");  //记录到达的页面数
    wx.navigateTo({
    url: '../cal/cal'
    })
  },

  calClo: function () {
    wx.vibrateShort({
    })
    var titleText = this.data.titleMsg;
    titleText = "请输入一件衣服的时间(分钟):";
    this.setData({ "titleMsg": titleText });
    wx.setStorageSync("titleMsg", this.data.titleMsg);
    wx.setStorageSync("stepRecord", "clo-1");  //记录到达的页面数
    wx.navigateTo({
      url: '../cal/cal'
    })
  },

  calTime: function () {
    wx.vibrateShort({
    })
    var titleText = this.data.titleMsg;
    titleText = "请输入一件衣服的时间(分钟):";
    this.setData({ "titleMsg": titleText });
    wx.setStorageSync("titleMsg", this.data.titleMsg);
    wx.setStorageSync("stepRecord", "time-1");  //记录到达的页面数
    wx.navigateTo({
      url: '../cal/cal'
    })
  },

  scanNum: function(){
    wx.scanCode({
      success: (res) => {
        console.log("扫码结果");
        console.log(res);
        this.setData({
          img: res.result
        })
      },
      fail: (res) => {
        console.log(res);
      }
    }) 
  }
})
