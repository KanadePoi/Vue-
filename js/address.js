$(function(){
		$(".address").on("click",function(){
			if($(this).hasClass("edit")){
				$(this).removeClass("edit");
			}else{
				$(".address").removeClass("edit")
				$(this).addClass("edit");
			}
		});
	});



		var array = [
		{name: "邹先生",add:"云南昆明",detailedAdd:"五华区警苑小区2栋",postcode:650100,phone:15812021710,edit: "edit"},
		{name: "邹先生",add:"云南昆明",detailedAdd:"五华区警苑小区2栋",postcode:650100,phone:15812021710,edit: ""},
		{name: "邹先生",add:"云南昆明",detailedAdd:"五华区警苑小区2栋",postcode:650100,phone:15812021710,edit: ""},
		{name: "邹先生",add:"云南昆明",detailedAdd:"五华区警苑小区2栋",postcode:650100,phone:15812021710,edit: ""},
		];

		var app = new Vue({
			el: "#app",
			data: {
				list: array,
			},
			methods: {
				deleteShop: function(item){
					var index = this.list.indexOf(item);//indexOf查找下标 
					//如果找到对象则返回该对象的下标为多少
					//否则返回-1
					if(index != -1){
						//.splice() 
						//数组的移除方法
						//一般填写两个参数
						//第一个参数为要移除的数的下标
						//第二个参数为要移除的个数
						this.list.splice(index,1);
			
					}
				},
			}
		});