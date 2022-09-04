// pages/Tasks/Tasks.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tasks:[
    {
    id:1,
    taskUrl:"/static/image/TaskPhoto.png",
    task:'记单词20个',
    value:"20",
    finished:"已完成"
    },
    {
      id:2,
      taskUrl:"/static/image/TaskPhoto.png",
      task:'锻炼30分钟',
      value:"50",
      finished:"未完成"
      },
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})