var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
var app = getApp();
Page({
  data: {
    address: {
      id:0,
      province_id: 0,
      city_id: 0,
      district_id: 0,
      address: '',
      full_region: '',
      userName: '',
      telNumber: '',
     
      is_default: 0
    },
    addressId: 0,
    status: 0
   
  
  },
  bindinputMobile(event) {
    let address = this.data.address;
    address.telNumber = event.detail.value;
    this.setData({
      address: address
    });
  },
  bindinputName(event) {
    let address = this.data.address;
    address.userName = event.detail.value;
    this.setData({
      address: address
    });
  },
  bindinputAddress (event){
    let address = this.data.address;
    address.detailInfo = event.detail.value;
    this.setData({
      address: address
    });
  },
  bindIsDefault(){
    let address = this.data.address;
    address.is_default = !address.is_default;
    this.setData({
      address: address
    });
  },
  getAddressDetail() {
    let that = this;
    util.request(api.AddressDetail, { id: that.data.addressId }).then(function (res) {
      if (res.errno === 0) {
        if(res.data){
            that.setData({
                address: res.data
            });
        }
      }
    });
  },

 
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log('ffdsafdsaf----------------------------'+options.status)
    
      this.setData({
      
        status: options.status
      });
      
   

  

  },
  onReady: function () {

  },
 

  cancelAddress(){
    wx.navigateBack({
      url: '/pages/ucenter/order/order',
    })
  },
  saveAddress(){

    wx.navigateTo({
          url: '/pages/ucenter/order/order',
        })
    // console.log(this.data.address)
    // let address = this.data.address;

    // if (address.userName == '') {
    //   util.showErrorToast('请输入姓名');

    //   return false;
    // }

    // if (address.telNumber == '') {
    //   util.showErrorToast('请输入手机号码');
    //   return false;
    // }

    // if (address.district_id == 0) {
    //   util.showErrorToast('请输入省市区');
    //   return false;
    // }

    // if (address.detailInfo == '') {
    //   util.showErrorToast('请输入详细地址');
    //   return false;
    // }

    // let that = this;
    // util.request(api.AddressSave, { 
    //   id: address.id,
    //   userName: address.userName,
    //   telNumber: address.telNumber,
    //   province_id: address.province_id,
    //   city_id: address.city_id,
    //   district_id: address.district_id,
    //   is_default: address.is_default,
    //   provinceName: address.province_name,
    //   cityName: address.city_name,
    //   countyName: address.district_name,
    //   detailInfo: address.detailInfo,
    // }, 'POST').then(function (res) {
    //   if (res.errno === 0) {
    //     wx.navigateBack({
    //       url: '/pages/ucenter/order/order',
    //     })
    //   }
    // });

  },
  onShow: function () {
    // 页面显示

  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭

  }
})