

var Investment_Recruitment = [
	{
		title : "",
		url : ""
	}
];

var Life_Record = [
	{
		title : "对想要抄袭者的留言",
		url : "/article.html?Life_Record/对想要抄袭者的留言.md"
	},
	{
		title : "专利侵权与法律法规",
		url : "/article.html?Life_Record/商业侵权判罚.md"
	},
	{
		title : "新世纪中国最大的虚拟人诈骗案件",
		url : "/article.html?Life_Record/新世纪中国最大的虚拟人诈骗案件.md"
	},
	{
		title : "自从遇到狗东西以后我的人生就没消停过",
		url : "/article.html?Life_Record/自从遇到狗东西以后我的人生就没消停过.md"
	},
	{
		title : "请有关部门处理一下这件破事",
		url : "/article.html?Life_Record/请有关部门处理一下这件破事.md"
	}
];
var Life_Record_List = '';
for (var i = 0; i < Life_Record.length; i++) {
	Life_Record_List = Life_Record_List + `<li class="list-inline-item my-2"><a target="_blank" href="${Life_Record[i]['url']}">${Life_Record[i]['title']}</a></li>`;
}

var Product_Documentation = [
	{
		title : "",
		url : ""
	}
];



var introductionText = `<div class="p-4 mb-5 bg-light">
	<div class="row gy-3">
	  <div class="col-sm-9">
		<h1 class="fw-normal">你好我叫 <strong>林星言</strong>. </h1>
		<h2 class="h1 fw-normal mb-4">我是<strong>未来架构师</strong>为发明家提供研发线路</h2>
		<p class="text-muted mb-4">2025年机器人元年，随着人工智能，轻量化机械臂，飞行汽车，自动驾驶等技术的成熟。我作为先驱，架构了未来汽车休息室，面向末日的未来停车场与住房设计，化学设备全面智能化，静态工作场景的机器人设计方案如：菜品研发机器人，机器人医疗护理休眠室，化妆美容等基础功能</p>
		<p class="text-muted mb-4">全球第一，随着时间的推移具有  <a href="https://dribbble.com/juliahanke">里程碑</a> 的意义。像这样的东西我还有一百个，不过暂时就先这样吧。</p>
	  </div>
	  <div class="col-sm-3"><img class="img-fluid img-thumbnail rounded-circle" src="img/about-profile.jpg" alt="Jason Doe"></div>
	  <div class="col-sm-12">
		  <ul class="list-inline mb-0">
			<li class="list-inline-item my-2"><a class="btn btn-primary rounded-pill" href="#bottom"> 
				<svg class="svg-icon me-2 align-middle svg-icon-sm">
				  <use xlink:href="#survey-1"> </use>
				</svg><span href="#foot" class="align-middle">联系方式</span></a>
			</li>
			<li class="list-inline-item my-2"><a target="_blank" class="btn btn-primary rounded-pill" href="#!">
				<svg class="svg-icon me-2 align-middle svg-icon-sm">
				  <use xlink:href="#survey-1"> </use>
				</svg><span class="align-middle">长期投资</span></a>
			</li>
			<li class="list-inline-item my-2"><a target="_blank" class="btn btn-primary rounded-pill" href="https://github.com/yougonglin/The-official-website-of-Apocalypse-Mountain-Forest-Enterprise/discussions">
				<svg class="svg-icon me-2 align-middle svg-icon-sm">
				  <use xlink:href="#survey-1"> </use>
				</svg><span class="align-middle">问题咨询</span></a>
			</li>
			<li class="list-inline-item my-2"><a target="_blank" class="btn btn-primary rounded-pill" href="https://t.me/+ayJmQnUi1kowYTNl">
				<svg class="svg-icon me-2 align-middle svg-icon-sm">
				  <use xlink:href="#survey-1"> </use>
				</svg><span class="align-middle">价值交流</span></a>
			</li>
			<li class="list-inline-item my-2"><a target="_blank" class="btn btn-primary rounded-pill" href="https://t.me/+ayJmQnUi1kowYTNl">
				<svg class="svg-icon me-2 align-middle svg-icon-sm">
				  <use xlink:href="#survey-1"> </use>
				</svg><span class="align-middle">全职/兼职</span></a>
			</li>
			<li class="list-inline-item my-2"><a target="_blank" class="btn btn-primary rounded-pill" href="https://github.com/yougonglin/The-official-website-of-Apocalypse-Mountain-Forest-Enterprise/milestone/1">
				<svg class="svg-icon me-2 align-middle svg-icon-sm">
				  <use xlink:href="#survey-1"> </use>
				</svg><span class="align-middle">举报中心</span></a>
			</li>
		  </ul>
	  </div>
	</div>
  </div>
	<div class="px-lg-5">
		<h2 class="h1">人已疯，精神病精神出轨可以要求分割婚后财产吗</h2>
		<p class="text-muted mb-4">本人大脑数据被窃取10年以上，从未参与过任何脑计划以及使用过卫星量子脑机接口，脑联网中发生的任何事情一概不知，请勿相信，也不承认，所有项目的交流与交易仅在本平台，可本人实地当面认证。我和那些卖黄片，胁迫未成年卖淫，非法赌博，垃圾游戏，传销诈骗，杀猪（情绪化）的，抄袭盗版，网络暴力，教唆犯罪，冒用身份，装腔作势，造谣生事，整天嬉皮笑脸我们我们，几十张烂嘴胡说八道拖人下水恶心人的没有任何关系，我只想让他们滚蛋。猪狗不如的东西还道德谴责我，整件事情就它们搅和起来的。是个人就能干的低端产业，还学我申请专利，一起报警把他们枪毙了吧。尤其关注话越多，笑得越大声，越能装的。</p>
	</div>
	<div class="px-lg-5">
		<ul class="list-inline mb-0" id="list"></ul>
	</div>`
	
var introduction = document.getElementById("introduction")
var i = document.createElement('div');
i.innerHTML = introductionText;
introduction.appendChild(i)