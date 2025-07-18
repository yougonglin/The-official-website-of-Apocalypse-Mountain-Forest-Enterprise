const Task = [
	{
		ImgUrl : "img/portfolio-3.jpg",
		ImgSrc : "img/portfolio-3.jpg",
		Title : "企业代理人",
		Content : "能告知我国脑计划的历史发展情况的，能提供10名卫星监视我的犯罪人信息和证据的，来当我的帮手管理企业。",
		CFC : "~CFC",
		Money : "50000CFC",
		Sales : "6人",
		Documents : "#!",
		Activities : "#!",
		Join : "#!"
	},
	{
		ImgUrl : "img/portfolio-3.jpg",
		ImgSrc : "img/portfolio-3.jpg",
		Title : "外观设计师（重点一本以上）",
		Content : "负责APP和产品的外观设计",
		CFC : "3000CFC",
		Money : "20000CFC",
		Sales : "2人",
		Documents : "#!",
		Activities : "#!",
		Join : "#!"
	},
	{
		ImgUrl : "img/portfolio-3.jpg",
		ImgSrc : "img/portfolio-3.jpg",
		Title : "全栈开发程序员（211以上）",
		Content : "精通Kotlin和Rust和Sel4系统，负责WEB3软件的编写和机器人交互客户端和MR眼镜操作端",
		CFC : "1000CFC",
		Money : "30000CFC",
		Sales : "3人",
		Documents : "#!",
		Activities : "#!",
		Join : "#!"
	},
	{
		ImgUrl : "img/portfolio-3.jpg",
		ImgSrc : "img/portfolio-3.jpg",
		Title : "量子脑机接口程序员（985以上）",
		Content : "建立人体生物量子数据，进行健康分析。利用超声波解除量子纠缠，建立稳定的超声波细胞修复装置，神经调控类应用编写。",
		CFC : "10000CFC",
		Money : "40000CFC",
		Sales : "3人",
		Documents : "#!",
		Activities : "#!",
		Join : "#!"
	},
	{
		ImgUrl : "img/portfolio-3.jpg",
		ImgSrc : "img/portfolio-3.jpg",
		Title : "机器人工程师（国际大学前30排名数学系计算机博士机械工程专业）",
		Content : "机器人舱室护理功能编写，清洗，按摩，美容，打造全自动机器人工厂。",
		CFC : "10000CFC",
		Money : "50000CFC",
		Sales : "3人",
		Documents : "#!",
		Activities : "#!",
		Join : "#!"
	},
	{
		ImgUrl : "img/portfolio-3.jpg",
		ImgSrc : "img/portfolio-3.jpg",
		Title : "家庭环保焚化机器人套件",
		Content : "焚烧箱和发电机的完美结合，配和智能机器人算法可以做到人来开盖等，需要人设计制作",
		CFC : "30000CFC",
		Money : "100CFC",
		Sales : "300万台/年",
		Documents : "#!",
		Activities : "#!",
		Join : "#!"
	},
	{
		ImgUrl : "img/portfolio-3.jpg",
		ImgSrc : "img/portfolio-3.jpg",
		Title : "全球饮品调制自动工作台",
		Content : "鸡尾酒，茶饮，药饮，香水等全自动流程制备，配和机器算法，可通过一句话按需定制属于自己独特口味的饮品，可通过输入原料参数即可达到全自动的饮品研发，自动试错纠错等",
		CFC : "30000CFC",
		Money : "100CFC",
		Sales : "100万台/年",
		Documents : "#!",
		Activities : "#!",
		Join : "#!"
	},
	{
		ImgUrl : "img/portfolio-3.jpg",
		ImgSrc : "img/portfolio-3.jpg",
		Title : "打造全球革命性安全机器人房车",
		Content : "打造面向未来自动驾驶汽车的安全休息室，兼顾实用与舒适性，科技与品质",
		CFC : "100000CFC",
		Money : "300CFC",
		Sales : "100万台/年",
		Documents : "#!",
		Activities : "#!",
		Join : "#!"
	},
	{
		ImgUrl : "img/portfolio-3.jpg",
		ImgSrc : "img/portfolio-3.jpg",
		Title : "打造全球美食研发制作机器人摆摊舱",
		Content : "兼顾美食研发，摆摊经营，广告营销的未来城市化建设机器人。做到将原材料放入以后，自动清洗，切割，烹饪等。",
		CFC : "100000CFC",
		Money : "300CFC",
		Sales : "100万台/年",
		Documents : "#!",
		Activities : "#!",
		Join : "#!"
	}
]
var xq = document.getElementById("xq");
for (var i = 0; i < Task.length; i++) {
	var tmp = document.createElement('div');
	var {ImgUrl,ImgSrc,Title,Content,CFC,Money,Sales,Documents,Activities,Join} = Task[i];
	var html = `<div class="row mb-5">
		<div class="col-lg-7">
			<a class="glightbox product-view" href="${ImgUrl}" data-gallery="gallery" data-glightbox="Tour de France"><img class="img-fluid mb-4" src="${ImgSrc}"></a>
		</div>
		<div class="col-lg-5 position-sticky">
		  <h2>${Title}</h2>
		  <p class="text-muted">${Content}</p>
		  <div class="p-4 bg-light mb-5">
			<ul class="list-unstyled mb-0">
			  <li class="d-flex mb-2">
				<h6 class="mb-0">酬劳说明:</h6>
				<p class="ms-3 text-muted mb-0">一次性官方代币加每月销售现金分红</p>
			  </li>
			  <li class="d-flex mb-2">
				<h6 class="mb-0">任务酬劳:</h6>
				<p class="ms-3 text-muted mb-0">${CFC}</p>
			  </li>
			  <li class="d-flex mb-2">
				<h6 class="mb-0">分红酬劳:</h6>
				<p class="ms-3 text-muted mb-0">${Money}</p>
			  </li>
			  <li class="d-flex">
				<h6 class="mb-0">预计需求:</h6>
				<p class="ms-3 text-muted mb-0">${Sales}</p>
			  </li>
			</ul>
		  </div>
		  <h2 class="h3 mb-4">报名详情</h2>
		  <ul class="list-inline">
			<li style="margin-bottom: 12px;" class="list-inline-item"><a class="reset-anchor social-share-link facebook" target="_blank" href="${Documents}"><i class="fab me-2 fa-facebook-f"></i>相关文档</a></li>
			<li class="list-inline-item"><a class="reset-anchor social-share-link twitter" target="_blank" href="${Activities}"><i class="fab me-2 fa-twitter"></i>活动介绍</a></li>
			<li class="list-inline-item"><a class="reset-anchor social-share-link instagram" target="_blank" href="${Join}"><i class="fab me-2 fa-instagram"></i>参与活动</a></li>
		  </ul>
		</div>
	  </div>`;
	tmp.innerHTML = html;
	xq.appendChild(tmp);
}