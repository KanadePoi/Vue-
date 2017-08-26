

	$(function(){
		$(".allpro").on("click",function(){
			if($(".list").hasClass("selected")){
				$(".list").removeClass("selected");
			}else{
				$(".list").addClass("selected");
			}
		});
	});


Vue.component("pageTop",{
	template:`<div><div class="hd_top">
		<div class="container">
			<div class="left">
				<img src="images/zheng.png">
				<p>您好，欢迎来到大白商城</p>
			</div>
			<div class="right">
				<ul>
					<li><a class="login" href="">登录</a>/<a href="">注册</a></li>
					<li>|</li>
					<li><a href="">我的订单</a></li>
					<li>|</li>
					<li><a href="">我的大白 <i class="fa fa-angle-down"></i></a></li>
					<li>|</li>
					<li><a href="">帮助中心</a></li>
				</ul>
			</div>
		</div>
	</div><div class="container hd_middle">
		<div class="row">
			<div class="col-md-2">
				<a href="index.html">
					<img src="images/logo.png">
				</a>
			</div>
			<div class="col-md-4"></div>
			<div class="col-md-5">
				<div class="search">
					<div class="input-group">
						<input type="text" class="form-control" aria-describedby="basic-addon2">
						<span class="input-group-btn">
							<button class="btn btn-default" type="button">Go!</button>
						</span>
					</div>
					<ul>
						<li class="hotSearch">热门搜索：</li>
						<li>CX无人机</li>
						<li>AT无人机</li>
						<li>保养工具</li>
						<li>高清摄像头</li>
					</ul>
					<!-- <p>热门搜索：<span>CX无人机 AT无人机 保养工具 高清摄像头</span></p> -->
				</div>
			</div>
			<div class="col-md-1">
					<div class="shop">
					<a href="#">
					<img src="images/Shopping-Cart.png">
					<span class="badge">(0)</span>
					</a>
				</div>
			</div>
		</div>
	</div><div class="hd_bottom">
		<div class="container row">
			<div class="col-md-3">
				<div class="one">
					<button class="allpro">
						全部商品分类<i class="fa fa-angle-down"></i>
					</button>
				</div>
			</div>
			<div class="col-md-7">
				<ul>
					<li><a href="">首页</a></li>
					<li><a href="">配件商促</a></li>
					<li><a href="">保养讲堂</a></li>
					<li><a href="">技巧讲堂</a></li>
					<li><a href="">大咖秀</a></li>
				</ul>
			</div>
			<div class="col-md-2"></div>
		</div>
	</div><ul class="list selected">
			<li>
				<div class="dropdown">
								<button type="button" class="dropdown-toggle" id="dropdownMenu1" 
										data-toggle="dropdown">XC级固定翼无人机
									<span class="fa fa-angle-right"></span>
								</button>
								<ul class="dropdown-menu pull-right" role="menu" 
									aria-labelledby="dropdownMenu1">
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">机体配件</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">纤维机翼</a><i>|</i><a role="menuitem" tabindex="-1" href="#">碳化轮组</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">四轴螺旋桨</a><i>|</i><a role="menuitem" tabindex="-1" href="#">起落架</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">摇杆配件</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">电容操作杆</a><i>|</i>
										<a role="menuitem" tabindex="-1" href="#">可视化操作柄</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">距离信号灯</a><i>|</i><a role="menuitem" tabindex="-1" href="#">多频天线</a>
									</li>
								</ul>
				</div>
			</li>
			<li>
				<div class="dropdown">
								<button type="button" class="dropdown-toggle" id="dropdownMenu1" 
										data-toggle="dropdown">AT级固定翼无人机
									<span class="fa fa-angle-right"></span>
								</button>
								<ul class="dropdown-menu pull-right" role="menu" 
									aria-labelledby="dropdownMenu1">
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">机体配件</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">纤维机翼</a><i>|</i><a role="menuitem" tabindex="-1" href="#">碳化轮组</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">四轴螺旋桨</a><i>|</i><a role="menuitem" tabindex="-1" href="#">起落架</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">摇杆配件</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">电容操作杆</a><i>|</i>
										<a role="menuitem" tabindex="-1" href="#">可视化操作柄</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">距离信号灯</a><i>|</i><a role="menuitem" tabindex="-1" href="#">多频天线</a>
									</li>
								</ul>
				</div>
			</li>
			<li>
				<div class="dropdown">
								<button type="button" class="dropdown-toggle" id="dropdownMenu1" 
										data-toggle="dropdown">通用类配件
									<span class="fa fa-angle-right"></span>
								</button>
								<ul class="dropdown-menu pull-right" role="menu" 
									aria-labelledby="dropdownMenu1">
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">机体配件</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">纤维机翼</a><i>|</i><a role="menuitem" tabindex="-1" href="#">碳化轮组</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">四轴螺旋桨</a><i>|</i><a role="menuitem" tabindex="-1" href="#">起落架</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">摇杆配件</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">电容操作杆</a><i>|</i>
										<a role="menuitem" tabindex="-1" href="#">可视化操作柄</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">距离信号灯</a><i>|</i><a role="menuitem" tabindex="-1" href="#">多频天线</a>
									</li>
								</ul>
				</div>
			</li>
			<li>
				<div class="dropdown">
								<button type="button" class="dropdown-toggle" id="dropdownMenu1" 
										data-toggle="dropdown">维护/保养套装
									<span class="fa fa-angle-right"></span>
								</button>
								<ul class="dropdown-menu pull-right" role="menu" 
									aria-labelledby="dropdownMenu1">
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">机体配件</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">纤维机翼</a><i>|</i><a role="menuitem" tabindex="-1" href="#">碳化轮组</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">四轴螺旋桨</a><i>|</i><a role="menuitem" tabindex="-1" href="#">起落架</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">摇杆配件</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">电容操作杆</a><i>|</i>
										<a role="menuitem" tabindex="-1" href="#">可视化操作柄</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">距离信号灯</a><i>|</i><a role="menuitem" tabindex="-1" href="#">多频天线</a>
									</li>
								</ul>
				</div>
			</li>
			<li>
				<div class="dropdown">
								<button type="button" class="dropdown-toggle" id="dropdownMenu1" 
										data-toggle="dropdown">地面固定式发射架
									<span class="fa fa-angle-right"></span>
								</button>
								<ul class="dropdown-menu pull-right" role="menu" 
									aria-labelledby="dropdownMenu1">
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">机体配件</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">纤维机翼</a><i>|</i><a role="menuitem" tabindex="-1" href="#">碳化轮组</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">四轴螺旋桨</a><i>|</i><a role="menuitem" tabindex="-1" href="#">起落架</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">摇杆配件</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">电容操作杆</a><i>|</i>
										<a role="menuitem" tabindex="-1" href="#">可视化操作柄</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">距离信号灯</a><i>|</i><a role="menuitem" tabindex="-1" href="#">多频天线</a>
									</li>
								</ul>
				</div>
			</li>
			<li>
				<div class="dropdown">
								<button type="button" class="dropdown-toggle" id="dropdownMenu1" 
										data-toggle="dropdown">遥感多频增程器
									<span class="fa fa-angle-right"></span>
								</button>
								<ul class="dropdown-menu pull-right" role="menu" 
									aria-labelledby="dropdownMenu1">
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">机体配件</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">纤维机翼</a><i>|</i><a role="menuitem" tabindex="-1" href="#">碳化轮组</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">四轴螺旋桨</a><i>|</i><a role="menuitem" tabindex="-1" href="#">起落架</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">摇杆配件</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">电容操作杆</a><i>|</i>
										<a role="menuitem" tabindex="-1" href="#">可视化操作柄</a>
									</li>
									<li role="presentation">
										<a role="menuitem" tabindex="-1" href="#">距离信号灯</a><i>|</i><a role="menuitem" tabindex="-1" href="#">多频天线</a>
									</li>
								</ul>
				</div>
			</li>
		</ul></div>`,
});

Vue.component("pageBottom",{
	template:`<div class="container">
		<div class="footer_top">
			<div class="row">
				<ul>
					<li class="col-md-3">
						<img src="images/dibu01.png">
						<p>正品保障</p>
					</li>
					<li class="col-md-3">
						<img src="images/dibu02.png">
						<p>便宜有理</p>
					</li>
					<li class="col-md-3">
						<img src="images/dibu03.png">
						<p>闪电发货</p>
					</li>
					<li class="col-md-3">
						<img src="images/dibu04.png">
						<p>货到付款</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="footer_middle">
			<div class="row">
				<ul>
					<li class="col-md-2">
						<p>关于我们</p>
						<a href="">关于我们</a>
					</li>
					<li class="col-md-2">
						<p>用户指南</p>
						<a href="">新用户注册</a>
						<a href="">如何购买</a>
					</li>
					<li class="col-md-2">
						<p>支付方式</p>
						<a href="">发票制度</a>
						<a href="">货到付款</a>
					</li>
					<li class="col-md-2">
						<p>配送方式</p>
						<a href="">运费及包邮</a>
						<a href="">门店自取</a>
					</li>
					<li class="col-md-2">
						<p>售后服务</p>
						<a href="">退换货政策及办理</a>
						<a href="">退换货</a>
						<a href="">订单跟踪</a>
					</li>
					<li class="col-md-2">
						<p>帮助中心</p>
						<a href="">忘记密码</a>
						<a href="">常见问题</a>
						<a href="">意见反馈</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="footer_bottom">
			<p>Copyright © 2014 - 2017  大白 · 版权所有</p>
		</div>
	</div>`,
});

Vue.component("containerLeft",{
	template:`<div class="left">
			<div class="user">
				<p>会员中心</p>
			</div>
			<div class="userList">
				<ul>
					<li class="listHeader"><a href=""><img src="images/order01.png">个人中心</a></li>
					<li><a href="">个人资料</a></li>
					<li><a href="">收货地址</a></li>
					<li><a href="">修改密码</a></li>
					<li class="listHeader"><a class="active" href=""><img src="images/order02.png">订单中心</a></li>
					<li><a href="">我的订单</a></li>
					<li><a href="">团购订单</a></li>
					<li><a href="">取消订单记录</a></li>
					<li class="listHeader"><a href=""><img src="images/order03.png">关注中心</li>
					<li><a href="">关注的商品</a></li>
					<li><a href="">关注的活动</a></li>
					<li class="listHeader"><a href=""><img src="images/order04.png">客户服务</a></li>
					<li><a href="">退货|换货</a></li>
					<li><a href="">价格保护</a></li>
					<li><a href="">意见建议</a></li>
					<li><a href="">购买咨询</a></li>
					<li><a href="">售后服务</a></li>
					<li class="listHeader"><a href=""><img src="images/order04.png">特色服务</a></li>
					<li><a href="">我的预约</a></li>
				</ul>
			</div>
		</div>`,
});


var app = new Vue({
	el:"#app1",
});

var app = new Vue({
	el:"#app2",
});

var app = new Vue({
	el:"#app3",
});
	