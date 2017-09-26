// pages/apply/apply.js
var constant = require('../../utils/constant');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
    ],
    index:0,
    isShowType:false,
    array: ['美国', '中国', '巴西', '日本'],
    proinfp:""
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      isShowType:true,
      index: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    getData(this,options.cardId)
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
function getData(that,cardid) {
  wx.request({
    url: constant.proinfo.concat(cardid),
    success: function (res) {
      console.log("====成功")
      console.log(res)
      that.setData({
        proinfo:res.data.proinfo[0]
      })
    },
    fail: function (res) {
      console.log("====失败")
      console.log(res)
    }

  })
}