// pages/cradlist/cradlist.js
var constant = require('../../utils/constant');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    prolist: []
  },

  apply:function(event){
    console.log(event)
    wx.navigateTo({
      url: '../apply/apply?cardId='+event.target.dataset.cardid,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    getData(this, options.id);
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
  
  },
  

})

/**
   * 网络请求
   */
function getData(that,id) {
  wx.request({
    url: constant.cardList+id,
    success: function (res) {
      console.log("====成功")
      console.log(res)
      that.setData({
        prolist:res.data.prolist
      })
    },
    fail: function (res) {
      console.log("====失败")
      console.log(res)
    }

  })
}