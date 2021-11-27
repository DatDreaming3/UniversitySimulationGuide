var n=0;
const db = wx.cloud.database();
Page({
    data: {
        value:"",
        suxing1:0,
        suxing2:0,
        suxing3:'0',
        list:'list',
        clock:0},
    /**
     * 生命周期函数--监听页面加载
     */
    number:function(){
        n+=1;//限制输出事件的数量
        var that=this;
        var temp=this.data.list+Math.ceil(Math.random()*10%2)
        // console.log(temp)
        db.collection(temp).get({
          success:res=>{
            var long=res.data.length
            var number=(Math.ceil(Math.random()*10))%long
            console.log(number)
            if(number==0){
              that.data.suxing1+=1
            }
            else if(number==1){
              that.data.suxing2+=1
            }
            var abc=that.data.value+res.data[number].event+"\n"
            that.setData({
              value:abc,
              suxing1:that.data.suxing1,
              suxing2:that.data.suxing2
            })
          }
        })
        //当已显示事件的数量到达一定数目时，点击按钮“click me”将会变成不可修改的模式
        if(n==10){
            that.setData({
                clock:1
            })
        }
        
    },
    //该函数将关闭当前的页面，并跳转当主页面当中
    jump:function(){
        n=0;//防止页面跳转后n保持不变
        wx:wx.navigateBack({
          delta: 0,
        })
    }
})