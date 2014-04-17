require.register("config.jsenv",function(e,t,r){r.exports={BUILD:"git-963a0a1"}});var deferSrcSetters,show;deferSrcSetters=[],angular.element(document).ready(function(){var e,t,r,n,o=[];for(e=0,r=(t=deferSrcSetters).length;r>e;++e)n=t[e],o.push(n());return o}),angular.module("g0v.tw",["firebase","btford.markdown"]).config(["$httpProvider",function(e){var t,r;return e.defaults.useXDomain=!0,r=(t=e.defaults.headers.common)["X-Requested-With"],delete t["X-Requested-With"],r}]).factory({fireRoot:["angularFireCollection"].concat(function(){var e;return e="https://g0vsite.firebaseio.com",new Firebase(e)})}).directive("deferSrc",function(){return{restrict:"A",link:function(e,t){var r;return r=t.attr("defer-src"),deferSrcSetters.push(function(){return t.attr("src",r)})}}}).controller({EventCtrl:["$scope","angularFireCollection","fireRoot"].concat(function(e,t,r){return e.events=t(r.child("feed/events/articles").limit(2))})}).controller({BlogCtrl:["$scope","angularFireCollection","fireRoot"].concat(function(e,t,r){return e.articles=t(r.child("feed/blog/articles").limit(4))})}).controller({FeaturedCtrl:["$scope","angularFireCollection","$timeout"].concat(function(e,t,r){var n;return n=new Firebase("https://g0vhub.firebaseio.com/projects"),e.projects=t(n),e.nextProject=function(){return void 0!==e.idx?($("#prj-img").css("opacity",0),++e.idx,e.idx%=e.featured.length):void 0},e.$watch("projects.length",function(){var t,r,n,o,i;for(t=[],r=0,o=(n=e.projects).length;o>r;++r)i=n[r],i.thumbnail&&t.push(i);return e.featured=t,e.idx=Math.floor(Math.random()*e.featured.length)}),e.$watch("idx",function(t,r){return void 0!==r?e.project=e.featured[r]:void 0}),e.onTimeout=function(){return e.nextProject(),r(e.onTimeout,1e4)},r(e.onTimeout,15e3)})}).controller({CommuniqueCtrl:["$scope","$http","$element","$timeout"].concat(function(e,t,r,n){return t.get("http://g0v-communique-api.herokuapp.com/api/1.0/entry/all?limit=50").success(function(t){return e.communiques=t,e.check=0,e.idx=0,e.nextCommunique=function(){return void 0!==e.idx?(++e.idx,e.idx%=e.communiques.length):void 0},e.$watch("idx",function(t,n){var o,i,u,c;for(0===e.check?e.check=1:n++,n%=e.communiques.length,void 0!==n&&(e.communique=e.communiques[n]),o=0,u=(i=e.communique.urls).length;u>o;++o)c=i[o],e.communique.content=e.communique.content.replace(c.name,'<a target="_blank" href="'+c.url+'">'+c.name+"</a>");return r.find(".description").html(e.communique.content)}),e.onTimeout=function(){return e.nextCommunique(),n(e.onTimeout,1e4)},n(e.onTimeout,15e3)}).error(function(t,r){return e.message=r})})}).controller({BuildIdCtrl:["$scope"].concat(function(e){var t;return t=require("config.jsenv"),e.buildId=t.BUILD})}),show=function(){var e,t;return e=$("#prj-img"),e.animate({opacity:1},500),t=[40+e.height()][0],$("#prj-img-div").animate({height:t+"px"},500)},$(function(){return $(".ui.dropdown").dropdown({on:"hover",transition:"fade"})});