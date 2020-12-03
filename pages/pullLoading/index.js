
let list1;
Page({
  data: {
    list: []
  },
  onLoad() {
    my.showLoading();
    this.mySchedulde();
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
       // my.alert({content: 'success'});
       list1 = res.data;
       console.log(list1);
      },
      fail: function(res) {
       // my.alert({content: 'fail'});
      },
      complete: function(res) {
        my.hideLoading();
       // my.alert({content: 'complete'});
      }
    });
  },
  /**
   * @method scrollMytrip
   */
  // async scrollMytrip() {
  //   try {
  //     const { page, list, } = this.data;
  //     if (list.length < mockTotal) {
  //       this.setData({ show: true });
  //       const newPage = page + 1;
  //       this.mySchedulde(newPage);
  //     }
  //   } catch (e) {
  //     this.setData({ show: false });
  //     console.log('scrollMytrip Error:', e);
  //   }
  // },
  /**
   * @method mySchedulde
   * @param {int} page 
   */
  async mySchedulde() {
    try {
      let list = this.data.list;
      setTimeout(() => {
        let data = list1;
        for (let i = 0; i < data.length; i++) {
          let newObj = { ...data[i]};
          list.push(newObj);
        }
        this.setData({
          list
        });
      }, 1000);
    } catch (e) {
      console.log('mySchedulde Error:', e);
    }
  }
});
