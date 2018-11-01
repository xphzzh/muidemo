mui.init()

// 点击li 监听事件
mui.plusReady(function() {
//	console.log('plus 加载完成');
	mui('.mui-table-view').on('click', '.mui-table-view-cell', function() {
//		console.log('111')
			var img = this.getAttribute('img');
      var name = this.getAttribute('name');
      var city = this.getAttribute('city');


		// 打开新页面
		mui.openWindow({
			url: 'detail.html',
			id: 'detail',
			styles: {
				top: '0x',
				bottom: '50px'
			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-left'
			},
			extras: {
//			info: infoDetail
				infoName: name,
				infoImg: img,
				infoCity: city
			}
		})
		
	})
})











// 实例化vue

var vm = new Vue({
	el: "#app",
	data: {
		list: []
	},
	
	methods: {
		getList: function(){
			var that = this;
			mui.get('http://route.showapi.com/126-2',{
				showapi_appid: 79095,
				showapi_sign: '254bdeb23cf24b6fa59108a202acc825'
			}, function (res) {
//					console.log(res)
				if (res.showapi_res_code === 0) {
					that.list = res.showapi_res_body.pagebean.contentlist
//					console.log(that.list)
				} else {
					mui.toast('网络异常, 请稍后重试...')
				}
			})
		}
	},
	
	created: function () {
		this.getList()
	}
})

