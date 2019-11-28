<template>
     <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid" style="background-color:rgb(32,161,255) ">
      <div class="navbar-header">
        <a class="navbar-brand" href="#" style="color: #fff;margin-left: 210px;">Project name</a>
      </div>
      <div class="username">用户名</div>
      <div class="login" type="button">退出登录</div>
      <div class="head" style="background: grey;">
        <img src="" alt="" name="pic">
      </div>
    </div>
  </nav>

  <div class="container-fluid" style="position: relative;top: 50px;">
    <div class="row">
      <div class="col-sm-3 col-md-2 sidebar"
        style="padding-right: 0;margin-right: 0;background-color: rgb(239,241,247);">
        <ul class="nav nav-sidebar">
          <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Export</a></li>
        </ul>
        <ul class="nav nav-sidebar">
          <li><a href="">Nav item</a></li>
          <li><a href="">Nav item again</a></li>
          <li><a href="">One more nav</a></li>
          <li><a href="">Another nav item</a></li>
          <li><a href="">More navigation</a></li>
        </ul>
        <ul class="nav nav-sidebar">
          <li><a href="">Nav item again</a></li>
          <li><a href="">One more nav</a></li>
          <li><a href="">Another nav item</a></li>
        </ul>
      </div>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" style="padding-left: 20px; margin-left: 0;">
        <h2 class="sub-header">用户管理</h2>
        <form action="" style="background-color: rgb(241,242,241)">
          <div class="form-group" style="display: inline-block; margin: 10px 10px;">
  
            <input type="text" class="form-control" id="inputPassword2" placeholder="姓名">
          </div>
          <button type="button" class="btn btn-default btn1"
            style="background-color: rgb(32,161,255); color: #fff;">查询</button>
            <button type="button" class="btn  btn-default btn2" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap"  style="background-color: rgb(32,161,255); color: #fff;">新增</button>
        </form>
        <div class="table-responsive" style="margin-top: 10px;">
          <table class="table table-striped table-hover">
            <thead style="background-color: rgb(241,242,241);">
              <tr>
                <th> <input type="checkbox" name="" id="box"></th>
                <th>#</th>
                <th>姓名</th>
                <th>电话</th>
                <th>邮箱</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="exampleModalLabel">New message</h4>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="recipient-name" class="control-label">username:</label>
                    <input type="text" class="form-control" id="recipient-name">
                  </div>
                  <div class="form-group">
                    <label for="message-text" class="control-label">password:</label>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style>
   .head {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      right: 5%;
      top: 5px;
    }

    .head img {
      width: 100%;
      height: 100%;
    }
    
    #box {
      background-color: #fff;
      margin-left: 10px;
    }
    .login{
      font-size: 12px;
      float: right;
      line-height:50px ;
    }
    .username{
      position: absolute;
      right: 8%;
      font-size: 14px;
      line-height: 50px;
    }

</style>