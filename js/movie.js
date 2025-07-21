var arrData = [
	{
		title : "关于时间堡垒机器人的设计讲解",
		desc : "包含设计的由来，功能原理，功能作用，商业用途等",
		vidio : "/atlas/donghua/sjsm.mp4"
	},
	{
		title : "关于时间堡垒机器人的发明由来",
		desc : "包含知识的积累过程，发明产品的动机，产品必要性的阐述等",
		vidio : "/atlas/donghua/xzg_47834.mp4"
	},
	{
		title : "关于我把我妈打了一顿的这件事",
		desc : "所有事情与我无关，我不知道任何事情，也没做任何事情。我真的只玩手机，需要和你一起报警吗？",
		vidio : "/atlas/donghua/wbzdy.mp4"
	}
];

var listData = '';
for (var i = 0; i < arrData.length; i++) {
	listData = listData + `<div class="col-lg-4 col-md-6 grid-item">
		  <div class="listing-item ps-0">
			<div class="position-relative">
			  <ul class="list-inline listing-tags m-0">
				<li class="list-inline-item"><a class="reset-anchor fw-normal text-gray text-sm" href="detail.html">求职/招聘</a></li>
			  </ul>
			  <a class="reset-anchor d-block listing-img-holder" href="cpdq.html">
			  <video class="img-fluid rounded-lg" controls src="${arrData[i]['vidio']}"></video>
				<p class="mb-0 text-primary small d-flex align-items-center listing-btn"> <span>查看</span>
				  <svg class="svg-icon text-primary svg-icon-sm ms-1">
					<use xlink:href="#arrow-right-1"> </use>
				  </svg>
				</p>
				</a>
			</div>
			<div class="py-3"><a class="reset-anchor" href="cpdq.html">
				<h2 class="h5 listing-item-heading">${arrData[i]['title']}</h2></a>
			  <p class="text-sm mb-0 listing-item-description">${arrData[i]['desc']}</p>
			</div>
		  </div>
		</div>`;
}

var MovieList = document.getElementById("movie-list")
var i = document.createElement('div');
i.innerHTML = listData;
MovieList.appendChild(i)