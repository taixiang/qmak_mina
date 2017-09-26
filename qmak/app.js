//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log("====登录")
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        getData(this,res.code)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log("====授权")
              console.log(res)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
      }
    })



    // if (this.globalData.userInfo) {
    //   this.setData({
    //     userInfo: this.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   this.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       this.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }

  },
  globalData: {
    userInfo: null
  }
})

/**
   * 网络请求
   */
function getData(that,jscode) {
  wx.request({
    url: "https://api.weixin.qq.com/sns/jscode2session?appid=wx4ba7103c2716111c&secret=15f5b9147542ac225becb1bc3802cbac&js_code="+jscode+"&grant_type=authorization_code",
    success: function (res) {
      console.log("====成功")
      console.log(res)
      
    },
    fail: function (res) {
      console.log("====失败")
      console.log(res)
    }

  })
}