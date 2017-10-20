// pages/apply/apply.js
var constant = require('../../utils/constant');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '公积金贷款', value: '公积金贷款', checked: 'true'  },
      { name: '打卡工资贷款', value: '打卡工资贷款'},
      { name: '按揭房贷贷款', value: '按揭房贷贷款' },
    ],
    index:0,
    isShowType:false,
    array: ['公积金贷款', '打卡工资贷款', '按揭房贷贷款'],
    proinfp:"",
    name:"",
    phone:"",
    cardId:"",
    proId:""
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      isShowType:true,
      index: e.detail.value
    })
  },

  bindName:function(e){
    console.log(e)
    this.setData({
      name:e.detail.value
    })
  },

  bindPhone: function (e) {
    console.log(e)
    this.setData({
      phone: e.detail.value
    })
  },

  bindidcard:function(e){
    console.log(e)
    this.setData({
      cardId: e.detail.value
    })
  },

  //提交
  submitMsg:function(){

    if (this.data.name.trim().length <= 0){
      wx.showToast({
        title: '姓名不能为空'
      })
      return
    }

    if (this.data.phone.trim().length <= 0) {
      wx.showToast({
        title: '手机号不能为空'
      })
      return
    }

    if (this.data.cardId.trim().length <= 0) {
      wx.showToast({
        title: '身份证不能为空'
      })
      return
    }

    console.log(this.data.proId + "  " + this.data.name + "  " + this.data.phone + "  " + this.data.cardId + "   " + app.globalData.openId)

    submit(this, this.data.proId, this.data.name, this.data.phone, this.data.cardId, app.globalData.openId);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      proId: options.cardId
    })
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
   * 网络请求 信用卡详情
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

/**
 * 贷款类型
 */
function getApplyType(that, cardid) {
  wx.request({
    url: constant.applyType,
    success: function (res) {
      console.log("====成功")
      console.log(res)
      that.setData({
        proinfo: res.data.proinfo[0]
      })
    },
    fail: function (res) {
      console.log("====失败")
      console.log(res)
    }

  })
}

//提交
function submit(that,id,name,phone,cardid,openid){
  wx.request({
    url: constant.proSubmit + id + "&name=" + name + "&phone=" + phone + "&cardid=" + cardid + "&check_code=&openid=" + "",
    success: function (res) {
      console.log("====成功")
      console.log(res)
      if(res.data.result == "true"){
        wx.showToast({
          title: '提交成功',
        })
        setTimeout(() => {
          wx.switchTab({
            url: '../home/home',
          })
        }, 1200);
      }else{
        wx.showToast({
          title: res.data.msg,
        })
      }
      
      
    },
    fail: function (res) {
      console.log("====失败")
      console.log(res)
    }
  })
}