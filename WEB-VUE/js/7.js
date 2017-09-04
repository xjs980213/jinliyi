//实例化vue对象
var vm = new Vue({
	el: "#app",
	data: {
		msg: "hello vue.js",
		foods: [{
			name: "苹果",
			price: "2.00"
		}, {
			name: "梨子",
			price: "2.00"
		}, {
			name: "西瓜",
			price: "5.00"
		}]
	},
	//使用methods添加方法
	methods: {
		change: function(txt) {
			//这里的this是实例化之后的vue,相当于当前的vm
			this.msg = txt;
			this.foods.push({
				name: "士多卑利",
				price: "5.00"
			})
		},
		getTime: function() {
			var d = new Date();
			return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
		},
		removeItem: function(index){
			this.foods.splice(index,1);
		}
	}
})