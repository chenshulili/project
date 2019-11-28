import Mock from "mockjs"
import * as HomeApi from "./api"//*代表别名
// 生成路径
Mock.mock("/home/list","post",HomeApi.HomeData) //post
Mock.mock("/home/getlist","post",HomeApi.getList) //post

// Mock.mock(/^\/home\/list/,"get",HomeApi.HomeData)

export default Mock