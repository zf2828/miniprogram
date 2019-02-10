Page({
  data: {
    text: 'init data',
    array: [{ msg: '1' }, { msg: '2' }]
  },
  goNews :function() {
    wx.navigateTo({
      url: '../news/news',
    })
  }
})