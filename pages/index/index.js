//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '生产计算器v1.00',
    titleMsg: ""
  },

  calMac: function(){
    var titleText = this.data.titleMsg;
    titleText="请输入一件衣服的时间:";
    this.setData({"titleMsg": titleText});
    wx.setStorageSync("titleMsg", this.data.titleMsg);
    wx.setStorageSync("stepRecord", 1);  //记录到达的页面数
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
