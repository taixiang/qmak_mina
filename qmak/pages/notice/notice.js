// pages/notice/notice.js
var constant = require("../../utils/constant");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    noticeList: [ ]
  },

  todetail:function(e){
    console.log(e)
    wx.navigateTo({
      url: '../noticedetail/noticedetail?newsid='+e.currentTarget.dataset.newsid,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      getData(this)
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


/**
   * 网络请求
   */
function getData(that) {
  wx.request({
    url: constant.noticeList,
    success: function (res) {
      console.log("====成功")
      console.log(res)
      that.setData({
        noticeList: res.data.noticelist
      })
    },
    fail: function (res) {
      console.log("====失败")
      console.log(res)
    }

  })
}