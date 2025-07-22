var arrData = [
	{
		title : "关于时间堡垒机器人的设计讲解",
		desc : "包含设计的由来，功能原理，功能作用，商业用途等",
		vidio : "/video/机器人功能说明/output.m3u8"
	},
	{
		title : "关于时间堡垒机器人的发明由来",
		desc : "包含知识的积累过程，发明产品的动机，产品必要性的阐述等",
		vidio : "/video/发明由来/output.m3u8"
	},
	{
		title : "关于我把我妈打了一顿的这件事",
		desc : "所有事情与我无关，我不知道任何事情，也没做任何事情。我真的只玩手机，需要和你一起报警吗？",
		vidio : "/video/妈被打/output.m3u8"
	},
	{
		title : "关于我把我妈打了一顿的这件事",
		desc : "所有事情与我无关，我不知道任何事情，也没做任何事情。我真的只玩手机，需要和你一起报警吗？",
		vidio : "/video/妈被打/output.m3u8"
	}
];

var listData = '';
for (var i = 0; i < arrData.length; i++) {
	listData = listData + `<div class="col-lg-4 col-md-6 grid-item">
		  <div class="listing-item ps-0">
			<div class="position-relative">
			  <ul class="list-inline listing-tags m-0">
				<li class="list-inline-item"><a class="reset-anchor fw-normal text-gray text-sm" href="index.html">求职/招聘</a></li>
			  </ul>
				<video id="my-video${i}" class="video-js vjs-default-skin" controls preload="auto" width="300" height="120">
					<source src="${arrData[i]['vidio']}" type="application/x-mpegURL">
				</video>
			</div>
			<div class="py-3"><a class="reset-anchor" href="cpdq.html">
				<h2 class="h5 listing-item-heading">${arrData[i]['title']}</h2></a>
			  <p class="text-sm mb-0 listing-item-description">${arrData[i]['desc']}</p>
			</div>
		  </div>
		</div>`;
}

var i = document.createElement('div');
i.innerHTML = listData;
var MovieList = document.getElementById("movie-list")
MovieList.appendChild(i)