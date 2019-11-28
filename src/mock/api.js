//接口
import Mock from "mockjs";
var Random = Mock.Random
// 首页数据
export function HomeData(){
    var HomeList = []
    for(var i =0;i<66;i++){
      var obj ={
          id:i,
          title:Random.title(),
          image:Random.image("150X150"),
          name:Random.name()//中文名 Random.cname
      }
      HomeList.push(obj)
    }
    //必须把值抛出去
    return{
        HomeData:HomeList
    }
}


// 用户列表数据
 export function getList(){
    var list=[]
    for(var x=0;x<10;x++){
     var data = {
         age:Random.int(18,30),
         username:Random.cname(),
         id:Random.id(),
         email:Random.email(),
         province:Random.province()
     }
     list.push(data)
    }
    return{
        list:list
    }
}