const Task = [
	{
		ImgUrl : "img/ls.png",
		ImgSrc : "img/ls.png",
		Title : "刑事律师",
		Content : "帮我起诉派出所警察不立案，帮我向扫黑办报警，帮我打专利的官司，商业窃密相关",
		CFC : "你说了算",
		Money : "你说了算",
		Sales : "1人",
		Documents : "#!",
		Activities : "#!",
		Join : "#!"
	},{
		ImgUrl : "img/rz.png",
		ImgSrc : "img/rz.png",
		Title : "融资经理",
		Content : "向投资机构和知名人物拉投资，向币圈人士售卖虚拟币，长期有效",
		CFC : "你说了算",
		Money : "1%融资分红",
		Sales : "100人",
		Documents : "#!",
		Activities : "#!",
		Join : "#!"
	},
	{
		ImgUrl : "img/db.png",
		ImgSrc : "img/db.png",
		Title : "代办和客服",
		Content : "主流国家的市场调查，开拓市场和解答问题",
		CFC : "你说了算",
		Money : "你说了算",
		Sales : "2人",
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