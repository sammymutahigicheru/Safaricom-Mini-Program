const mockData = [{
  title: 'List 1',
  remarksa: 'Note 1',
  remarksb: 'Note 2'
}, {
  title: 'List 2',
  remarksa: 'Note 1',
  remarksb: 'Note 2'
}, {
  title: 'List 3',
  remarksa: 'Note 1',
  remarksb: 'Note 2'
}, {
  title: 'List 4',
  remarksa: 'Note 1',
  remarksb: 'Note 2'
}, {
  title: 'List 5',
  remarksa: 'Note 1',
  remarksb: 'Note 2'
}, {
  title: 'List 6',
  remarksa: 'Note 1',
  remarksb: 'Note 2'
}];
const mockTotal = 60;
Page({
  data: {
    show: false,
    page: 1,
    list: []
  },
  onLoad() {
    this.mySchedulde();
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
  async mySchedulde(page = 1) {
    try {
      let list = this.data.list;
      setTimeout(() => {
        let data = mockData;
        for (let i = 0; i < data.length; i++) {
          let newObj = { ...data[i], remarksa: `Page: ${page}` };
          list.push(newObj);
        }
        this.setData({
          list,
          page,
          show: false
        });
      }, 1000);
    } catch (e) {
      console.log('mySchedulde Error:', e);
    }
  }
});
