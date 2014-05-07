require.register("config.jsenv",function(e,t,r){r.exports={BUILD:"git-e425ed1"}});var deferSrcSetters,show;deferSrcSetters=[],angular.element(document).ready(function(){var e,t,r,n,o=[];for(e=0,r=(t=deferSrcSetters).length;r>e;++e)n=t[e],o.push(n());return o}),angular.module("g0v.tw",["firebase","btford.markdown","pascalprecht.translate"]).config(["$httpProvider","$translateProvider"].concat(function(e,t){var r;return e.defaults.useXDomain=!0,delete e.defaults.headers.common["X-Requested-With"],t.useStaticFilesLoader({prefix:"/translations/",suffix:".json"}),r=window.location.pathname.split("/")[1],r.match("html")&&(r=window.navigator.language),"zh-TW"===r||"en-US"===r?t.preferredLanguage(r):void 0})).factory({fireRoot:["angularFireCollection"].concat(function(){var e;return e="https://g0vsite.firebaseio.com",new Firebase(e)})}).factory({eventsPromise:["$http"].concat(function(e){var t,r;return t="http://www.kimonolabs.com/api/dzdrrgx6",r={params:{apikey:"c626b7443a0cbcb5525f492411d10567",callback:"JSON_CALLBACK"}},e.jsonp(t,r).then(function(e){var t,r,n,o;return t=e.data.results,r=function(e){return{link:e.event.href,title:e.event.text}},n=t.recent.map(r),o=t.past.map(r),{recent:n,past:o}})})}).directive("deferSrc",function(){return{restrict:"A",link:function(e,t){var r;return r=t.attr("defer-src"),deferSrcSetters.push(function(){return t.attr("src",r)})}}}).controller({EventCtrl:["$scope","eventsPromise"].concat(function(e,t){return t.then(function(t){var r,n;return r=t.recent.map(function(e){return e.finished=!1,e}),n=t.past.map(function(e){return e.finished=!0,e}),e.events=r.concat(n)})})}).controller({BlogCtrl:["$scope","angularFireCollection","fireRoot"].concat(function(e,t,r){return e.articles=t(r.child("feed/blog/articles").limit(4))})}).controller({FeaturedCtrl:["$scope","angularFireCollection"].concat(function(e,t){var r;return r=new Firebase("https://g0vhub.firebaseio.com/projects"),e.projects=t(r),e.nextProject=function(){return void 0!==e.idx?($("#prj-img").css("opacity",0),++e.idx,e.idx%=e.featured.length):void 0},e.$watch("projects.length",function(){var t,r,n,o,i;for(t=[],r=0,o=(n=e.projects).length;o>r;++r)i=n[r],i.thumbnail&&t.push(i);return e.featured=t,e.idx=Math.floor(Math.random()*e.featured.length)}),e.$watch("idx",function(t,r){return void 0!==r?e.project=e.featured[r]:void 0})})}).controller({CommuniqueCtrl:["$scope","$http","$element"].concat(function(e,t,r){return t.get("http://g0v-communique-api.herokuapp.com/api/1.0/entry/all?limit=50").success(function(t){return e.idx=0,e.nextCommunique=function(){return void 0!==e.idx?(++e.idx,e.idx%=t.length):void 0},e.$watch("idx",function(n,o){var i,c,a,u;for(void 0!==o&&(e.communique=t[o]),i=0,a=(c=e.communique.urls).length;a>i;++i)u=c[i],e.communique.content=e.communique.content.replace(u.name,'<a target="_blank" href="'+u.url+'">'+u.name+"</a>");return r.find(".description").html(e.communique.content)})}).error(function(t,r){return e.message=r})})}).controller({BuildIdCtrl:["$scope"].concat(function(e){var t;return t=require("config.jsenv"),e.buildId=t.BUILD})}).controller({langCtrl:["$scope","$window"].concat(function(e,t){return e.changeLang=function(e){var r;return r=t.location.pathname.split("/")[2],t.location.href="/"+e+"/"+r}})}),show=function(){var e,t;return e=$("#prj-img"),e.animate({opacity:1},500),t=[40+e.height()][0],$("#prj-img-div").animate({height:t+"px"},500)},$(function(){return $(".ui.dropdown").dropdown({on:"hover",transition:"fade"})});