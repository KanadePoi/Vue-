$(function(){
		$(".bank").on("click",function(){
				$(".choice").removeClass("hide")
				$(this).children(".choice").addClass("hide");
			});
	});


// 中间VUE渲染
	Vue.component("orderPayment",{
		props: ["item"],
		template: `<div class="row">
			<div class="col-md-2">
				<img :src="item.image">
			</div>
			<div class="col-md-4">
				<p>{{item.p1}}</p>
				<p>{{item.p2}}<span>{{item.price}}</span></p>
				<p>{{item.p3}}</p>
			</div>
		</div>`, 
	});



		var app = new Vue({
			el: "#app",
			data: {
				
				array1:[
					{image: "images/pay01.png",p1:"您的订单已生成，请尽快付款",p2:"应付金额：",price:"￥"+278+"."+"00",p3:"请您在提交订单后72小时内完成支付，否则订单会自动取消"},
				],

				array2:[
					{class:"hide",image:"images/bank01.png"},
					{class:"",image:"images/bank02.png"},
					{class:"",image:"images/bank03.png"},
					{class:"",image:"images/bank04.png"},
					{class:"",image:"images/bank05.png"},
					{class:"",image:"images/bank06.png"},
					{class:"",image:"images/bank07.png"},
					{class:"",image:"images/bank08.png"},
					{class:"",image:"images/bank09.png"},
					{class:"",image:"images/bank10.png"},
					{class:"",image:"images/bank11.png"},
					{class:"",image:"images/bank12.png"},
				],

				array3:[
					{class:"",image:"images/platform01.png"},
					{class:"",image:"images/platform02.png"},
				],

			
			},
		});