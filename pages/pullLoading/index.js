let flag = false;
Page({
  data: {
    list3: [
      {
        icon: 'https://img.example.com/example1.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example2.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example3.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example4.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example5.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example6.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example7.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example8.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example9.png',
        text: 'Title',
        desc: 'text',
      },
    ],
  },
  onItemClick(ev) {
    flag = true;
    this.setData({
      flag
    })
  },
  formSubmit: function(e) {
    console.log('form has a submit event, carrying data ', e.detail.value)
  },
  formReset: function() {
    console.log('form has a reset event')
  }
});