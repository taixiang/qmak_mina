const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const windowMsg = () => {
  var winSize = {};
  wx.getSystemInfo({
    success: function (res) {
      winSize.winWidth = res.windowWidth;
      winSize.winHeight = res.windowHeight;

    },
  })
  console.log(winSize)
  return winSize;
}

module.exports = {
  formatTime: formatTime,
  windowMsg: windowMsg
}
