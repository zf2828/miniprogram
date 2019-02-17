// pages/news/news.js
var newsData = require('../data/newsdata.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatordots: 'true',
    autoplay: true,
    interval: 2000,
    circular: true,
    useData:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
        useData:newsData.initData
    })
  },

  //跳转详情页
  goNewsDetail:function(event){
    // console.log(event);
    var newsId = event.currentTarget.dataset.newsid;
    wx.navigateTo({
      url: 'news-detail/news-detail?newsid='+newsId
    })
  }
})