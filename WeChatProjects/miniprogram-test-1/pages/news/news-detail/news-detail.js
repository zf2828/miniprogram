var newsData = require("../../data/newsdata.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // console.log(options.newsid);
    console.log(newsData.initData[options.newsid]);
    this.setData(newsData.initData[options.newsid])
  }
})