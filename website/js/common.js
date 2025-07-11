const Common = {
	header : "",
	footer : `<footer class="text-muted" style="background: #0d0d0d">
        <div class="container-fluid py-5">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <div class="row gy-4">
                <div class="col-lg-4">
                  <h2 class="h4 text-white mb-4">About me</h2>
                  <p class="text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                  <ul class="list-unstyled text-sm mb-0 text-white">
                    <li class="mb-1"><a class="reset-anchor" href="#!"> <i class="fas text-muted me-2 fa-fw fa-globe-americas"></i>4274  Williams Avenue, California.</a></li>
                    <li class="mb-1"><a class="reset-anchor" href="#!"> <i class="fas text-muted me-2 fa-fw fa-mobile"></i>123-456-789</a></li>
                    <li class="mb-1"><a class="reset-anchor" href="#!"> <i class="fas text-muted me-2 fa-fw fa-envelope"></i>Jason@example.com</a></li>
                  </ul>
                </div>
                <div class="col-lg-4">               
                  <h2 class="h4 text-white mb-4">Follow me</h2>
                  <ul class="list-inline">
                    <div class="row text-white text-sm">
                      <div class="col-6">
                        <ul class="list-unstyled">
                          <li><a class="reset-anchor" href="#!"><i class="fab me-2 mb-2 fa-fw fa-facebook-f"></i>Facebook</a></li>
                          <li><a class="reset-anchor" href="#!"><i class="fab me-2 mb-2 fa-fw fa-twitter"></i>Twitter</a></li>
                          <li><a class="reset-anchor" href="#!"><i class="fab me-2 mb-2 fa-fw fa-instagram"></i>Instagram</a></li>
                          <li><a class="reset-anchor" href="#!"><i class="fab me-2 mb-2 fa-fw fa-dribbble"></i>Dribbble</a></li>
                        </ul>
                      </div>
                      <div class="col-6">
                        <ul class="list-unstyled">
                          <li><a class="reset-anchor" href="#!"><i class="fab me-2 mb-2 fa-fw fa-linkedin-in"></i>Linkedin</a></li>
                          <li><a class="reset-anchor" href="#!"><i class="fab me-2 mb-2 fa-fw fa-pinterest"></i>Pinterest</a></li>
                          <li><a class="reset-anchor" href="#!"><i class="fab me-2 mb-2 fa-fw fa-vimeo"></i>Vimeo</a></li>
                          <li><a class="reset-anchor" href="#!"><i class="fab me-2 mb-2 fa-fw fa-youtube"></i>Youtube</a></li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <h2 class="h4 text-white mb-4">News</h2>
                  <ul class="list-unstyled mb-0">
                    <li><a class="reset-anchor" href="#!"> 
                        <div class="d-flex">
                          <div class="flex-shrink-0"><img class="rounded-circle" src="img/news-1.jpg" alt="Design is all" width="50"></div>
                          <div class="ms-3">
                            <p class="text-white mb-0">Design is all</p>
                            <p class="small mb-1"></p>
                            <p class="text-gray text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                          </div>
                        </div></a></li>
                    <li><a class="reset-anchor" href="#!"> 
                        <div class="d-flex">
                          <div class="flex-shrink-0"><img class="rounded-circle" src="img/news-2.jpg" alt="Power is art" width="50"></div>
                          <div class="ms-3">
                            <p class="text-white mb-0">Power is art</p>
                            <p class="small mb-1">23 Dec 2019</p>
                            <p class="text-gray text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                          </div>
                        </div></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-dark py-4">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-10 mx-auto">
                <div class="row text-white">
                  <div class="col-md-6 text-center text-md-start">
                    <p class="text-sm mb-3 mb-md-0"><span class="text-muted">&copy; All rights reserved - Your company.</span></p>
                  </div>
                  <div class="col-md-6 text-center text-md-end">
                    <p class="text-sm mb-0">
                      <a target="_blank" href="http://www.mobanwang.com/" title="网页模板" class="reset-anchor">网页模板</a>
                    </p>
                  </div>
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

// 翻译文章
var lg = translate.util.browserDefaultLanguage();
console.log(lg)
translate.service.use('client.edge');
translate.changeLanguage(l);
translate.execute();

