const Common = {
	header : `<div class="sidebar-inner d-flex flex-column">
    	<div class="px-4 py-5"><a href="index.html"><img src="img/logo3.png" style="width: 256px;height:128px;border-radius: 12px;"></a></div>
        <div class="sidebar-menu-holder flex-grow-1">
          <ul class="sidebar-menu list-unstyled">
            <li class="mb-2 pb-1">
              <!-- Link--><a class="sidebar-link h6 text-uppercase letter-spacing-2 fw-bold text-sm active1" href="index.html">电影视角</a>
            </li>
    		<li class="mb-2 pb-1">
    			<a class="sidebar-link h6 text-uppercase letter-spacing-2 fw-bold text-sm active2" href="detail.html">需求大厅</a>
    		</li>
            <li class="mb-2 pb-1">
    			<a class="sidebar-link h6 text-uppercase letter-spacing-2 fw-bold text-sm active3" href="cpdq.html">产品大全</a>
            </li>
           <li class="mb-2 pb-1">
              <a class="sidebar-link h6 text-uppercase letter-spacing-2 fw-bold text-sm active4" href="sydg.html">商业帝国</a>
            </li>
    		<li class="mb-4 pb-1">
    			<a class="sidebar-link h6 text-uppercase letter-spacing-2 fw-bold text-sm active5" href="rsjy.html">人生经验</a>
    		</li>
          </ul>
    	  <div class="px-4"><a href="index.html"><img src="atlas/jieshaoshiping.gif" style="width: 256px;height: 256px;border-radius: 12px;"></a></div>
        </div>
      </div>`,
	footer : `<footer id="bottom" class="text-muted" style="background: #0d0d0d">
        <div class="container-fluid py-5">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <div class="row gy-4">
                <div class="col-lg-4">
                  <h2 class="h4 text-white mb-4">关于我</h2>
                  <p class="text-sm">请关注我的社交媒体,以获取我的更多更新动态，合作请发送文档到我的邮箱</p>
                  <ul class="list-unstyled text-sm mb-0 text-white">
                    <li class="mb-1"><a class="reset-anchor" href="#!"> <i class="fas text-muted fa-fw fa-envelope"></i>Email:1289548072@qq.com</a></li>
				  </ul>
                </div>
                <div class="col-lg-4">               
                  <h2 class="h4 text-white mb-4">跟随我</h2>
                  <ul class="list-inline">
                    <div class="row text-white text-sm">
                      <div class="col-6">
                        <ul class="list-unstyled">
							<li><a target="_blank" class="reset-anchor" href="https://x.com/lxy15869449095"><i class="fab me-2 mb-2 fa-fw fa-twitter"></i>X|Twitter</a></li>
							<li><a target="_blank" class="reset-anchor" href="https://www.instagram.com/linzhengying40?igsh=YTd6eHd0N3VlNDVq"><i class="fab me-2 mb-2 fa-fw fa-instagram"></i>Instagram</a></li>
						</ul>
                      </div>
                      <div class="col-6">
                        <ul class="list-unstyled">
                          <li><a target="_blank" class="reset-anchor" href="https://mp.weixin.qq.com/s/bGgrhP4pWThAeYsRt0x0EA"><i class="fab me-2 mb-2 fa-fw fa-twitter"></i>微信公众号</a></li>
						  <li><a target="_blank" class="reset-anchor" href="https://www.youtube.com/@%E6%9E%97%E6%9D%B3-z7o"><i class="fab me-2 mb-2 fa-fw fa-youtube"></i>Youtube</a></li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <h2 class="h4 text-white mb-4">留言</h2>
                  <ul class="list-unstyled mb-0">
                    <li><a class="reset-anchor" href="#!"> 
                        <div class="d-flex">
                          <div class="flex-shrink-0"><img class="rounded-circle" src="img/news-1.jpg" alt="Design is all" width="50"></div>
                          <div class="ms-3">
                            <p class="text-white mb-0">诚实宽容</p>
                            <p class="small mb-1">这些大便还跟谁玩跟谁玩</p>
                            <p class="text-gray text-sm">喜欢玩卑劣手段，喜欢蝇头小利，抄袭，妒忌心强，好色且敏感的这些人不要与我联系</p>
                          </div>
                        </div></a></li>
                    <li><a class="reset-anchor" href="#!"> 
                        <div class="d-flex">
                          <div class="flex-shrink-0"><img class="rounded-circle" src="img/news-2.jpg" alt="Power is art" width="50"></div>
                          <div class="ms-3">
                            <p class="text-white mb-0">简单高效</p>
                            <p class="small mb-1">沟通成本过高我会很难受</p>
                            <p class="text-gray text-sm">喜欢不去纠结鸡毛蒜皮的事，对重要的事情能快速完成的人</p>
                          </div>
                        </div></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>`
}

//插入页脚
var f = document.createElement('div');
f.innerHTML = Common.footer;
document.getElementById('foot').appendChild(f)
var h = document.createElement('div');
h.innerHTML = Common.header;
document.getElementById('header').appendChild(h)
console.log(f.innerHTML)

// 翻译文章
var lg = translate.util.browserDefaultLanguage();
console.log(lg)
translate.service.use('client.edge');
translate.changeLanguage(lg);
translate.execute();

