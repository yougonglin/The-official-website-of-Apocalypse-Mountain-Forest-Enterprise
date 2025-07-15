const Task = [
	{
		ImgUrl : "img/portfolio-3.jpg",
		ImgSrc : "img/portfolio-3.jpg",
		Title : "Idea",
		Content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru",
		CFC : "8000美金/台",
		Money : "10美金/台",
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
				<p class="ms-3 text-muted mb-0">官方代币加每月销售现金分红</p>
			  </li>
			  <li class="d-flex mb-2">
				<h6 class="mb-0">代币酬劳:</h6>
				<p class="ms-3 text-muted mb-0">${CFC}</p>
			  </li>
			  <li class="d-flex mb-2">
				<h6 class="mb-0">分红酬劳:</h6>
				<p class="ms-3 text-muted mb-0">${Money}</p>
			  </li>
			  <li class="d-flex">
				<h6 class="mb-0">预计销量:</h6>
				<p class="ms-3 text-muted mb-0">${Sales}</p>
			  </li>
			</ul>
		  </div>
		  <h2 class="h3 mb-4">报名详情</h2>
		  <ul class="list-inline">
			<li class="list-inline-item"><a class="reset-anchor social-share-link facebook" target="_blank" href="${Documents}"><i class="fab me-2 fa-facebook-f"></i>相关文档</a></li>
			<li class="list-inline-item"><a class="reset-anchor social-share-link twitter" target="_blank" href="${Activities}"><i class="fab me-2 fa-twitter"></i>活动介绍</a></li>
			<li class="list-inline-item"><a class="reset-anchor social-share-link instagram" target="_blank" href="${Join}"><i class="fab me-2 fa-instagram"></i>参与活动</a></li>
		  </ul>
		</div>
	  </div>`;
	tmp.innerHTML = html;
	xq.appendChild(tmp);
}