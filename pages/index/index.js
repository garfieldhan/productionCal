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
    //使手机发生轻微震动
    //wx.vibrateShort({
    //})
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
    //使手机发生轻微震动
    //wx.vibrateShort({
    //})
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
    //使手机发生轻微震动
    //wx.vibrateShort({
    //})
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
        console.log("扫码结果:"+res);
        var url = 'http://192.168.1.36:8080/servletTest/demo?name=' + res.result;
        console.log('url为:'+url);
        
        //=====↓=====以下为与服务器建立请求,并发送二维码消息=======
        wx.request({
          url: url,
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            wx.showToast({
              title: '出货成功',
            })
          },
          fail: function (res) {
            wx.showModal({
              title: '失败',
              content: '出货失败, 请联系管理员'
            })
          }
        })
      //=======↑================================================

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
