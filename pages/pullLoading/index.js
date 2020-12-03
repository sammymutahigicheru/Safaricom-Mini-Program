let flag = false;
let list;
Page({
  data: {
    list3: [],
  },
  onShow(){
    my.request({
      url: 'http://order-service.1431640ff0d44794b030.westus.aksapp.io/v1/Product',
      method: 'GET',
      data: {
        from: 'Paytm',
        production: 'JSAPI',
      },
      dataType: 'json',
      success: function(res) {
        my.alert({content: 'success'});
      },
      fail: function(res) {
        my.alert({content: 'fail'});
      },
      complete: function(res) {
        my.hideLoading();
        my.alert({content: 'complete'});
      }
    });
  },
  onItemClick(ev) {
   list = this.data.list3
   this.setData({
     list3:list
   })
  }
});