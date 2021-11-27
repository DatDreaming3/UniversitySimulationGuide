const db = wx.cloud.database();
 Page({
  data: {
    dataObj:""
  },
  addData:function(res){
    var{event}=res.detail.value;  
      wx.showLoading({
        title:"提交中...",
        mask:true
      })
      db.collection("list").add({
        data:{
          event:event
        }
      }).then(res=>{
        console.log(res) 
        wx.hideLoading()
      })
  }
})