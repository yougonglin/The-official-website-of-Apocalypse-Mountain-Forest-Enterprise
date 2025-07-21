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