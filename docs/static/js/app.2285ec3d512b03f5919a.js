webpackJsonp([0],{"1Pfb":function(t,e){},"8F+s":function(t,e){t.exports=[{toLink:"/job",title:"JOB"},{toLink:"/aboutme",title:"ABOUT ME"},{toLink:"/output",title:"OUTPUT"}]},COS0:function(t,e){},D9fZ:function(t,e){},DV1R:function(t,e){t.exports=[{toLink:"/",thumbnail:"https://www.tam-tam.co.jp/tipsnote/wpdata/wp-content/uploads/2015/11/vuejs2.png",title:"for half a year",description:["Webapplication Engineer"],tag:"now, job"},{toLink:"/",thumbnail:"https://connpass-tokyo.s3.amazonaws.com/thumbs/9a/24/9a2447c229f9ee20efdd146ed3ca8a04.png",title:"for half a yaers",description:["Webapplication Engineer"],tag:"now, job"},{toLink:"/",thumbnail:"http://work.haufegroup.io/images/logaggregation-efk.png",title:"for half a yaers",description:["Webapplication Engineer"],tag:"now, job"},{toLink:"/",thumbnail:"https://cyberomin.github.io/assets/article_images/terraform/terraform.png",title:"for 3 months",description:["Webapplication Engineer"],tag:"now, job"},{toLink:"/",thumbnail:"https://i.pinimg.com/236x/eb/67/88/eb67889aed64f8f58315eca4c9a15b26--android-logo-business-logos.jpg",title:"for 2 yaers",description:["Webapplication Engineer"],tag:"past, job, teach"}]},FNVW:function(t,e){},JbZR:function(t,e){t.exports=[{toLink:"/",thumbnail:"../assets/group_detection.png",title:"Web Engeneer Hiring Video",description:["My company's video"],tag:"presentation, job"},{toLink:"/",thumbnail:"../assets/group_detection.png",title:"RYOTA KOSHIBA",description:["This is my homepage"],tag:"Coding, Hobby, Vue.js, HTML, CSS"},{toLink:"/",thumbnail:"../assets/group_detection.png",title:"寿司は左から食え",description:["This is my weblog"],tag:"Writing, Hooby"},{toLink:"/",thumbnail:"../assets/group_detection.png",title:"Group Detection",description:["This is my study with sensing of Android app"],tag:"presentation, Writing, Coding, Java, Firebase, mobile sensing"},{toLink:"/",thumbnail:"../assets/group_detection.png",title:"三題噺",description:["This is iOS application"],tag:"Coding, Hobby, Objective-C"}]},JcLE:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o={name:"ItemLink",props:{toLink:{required:!0,type:String,default:"/"},title:{required:!0,type:String,default:""}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("router-link",{staticClass:"item-link",attrs:{to:this.toLink}},[e("h1",{staticClass:"item-link__text"},[this._v(this._s(this.title))])])},staticRenderFns:[]};var a=n("VU/8")(o,s,!1,function(t){n("JcLE")},"data-v-d04ba7f4",null).exports,r=n("WHyA"),c=n.n(r),u={name:"app",components:{"item-link":a},data:function(){return{linkJson:c.a}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"top"},[e("div",{staticStyle:{background:"white"}}),this._v(" "),this._l(this.linkJson,function(t){return e("item-link",{key:t.id,staticClass:"top__header",attrs:{toLink:t.toLink,title:t.title}})}),this._v(" "),e("div",{staticStyle:{background:"white"}}),this._v(" "),e("router-view",{staticClass:"top__contents"})],2)])},staticRenderFns:[]};var l=n("VU/8")(u,p,!1,function(t){n("D9fZ")},null,null).exports,d=n("/ocq"),m=n("8F+s"),h=n.n(m),g={name:"Contents",components:{"item-link":a},data:function(){return{linkJson:h.a}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contents"},this._l(this.linkJson,function(t){return e("item-link",{key:t.id,attrs:{toLink:t.toLink,title:t.title}})}))},staticRenderFns:[]};var b=n("VU/8")(g,f,!1,function(t){n("uwdl")},"data-v-dd1e994a",null).exports,v={name:"ItemLink",props:{thumbnail:{type:String,required:!0},title:{type:String,required:!0},description:{type:Array,required:!0},tag:{type:String,required:!0}},data:function(){return{delta:0,itemWidth:0,page:0,startPosition:"null",transition_name:"show-next"}},computed:{translateX:function(){return-this.itemWidth*this.page+this.delta}},methods:{onTouchStart:function(t){this.startPosition=this.getTouchPos(t),document.addEventListener("touchmove",this.onTouchMove),document.addEventListener("touchend",this.onTouchEnd),document.addEventListener("mousemove",this.onTouchMove),document.addEventListener("mouseup",this.onTouchEnd)},onTouchMove:function(t){this.delta=this.getTouchPos(t)-this.startPosition},onTouchEnd:function(t){this.delta<-100?this.next():this.delta>100&&this.back(),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd),document.removeEventListener("mousemove",this.onTouchMove),document.removeEventListener("moouseup",this.onTouchEnd)},getTouchPos:function(t){return t.changedTouches?t.changedTouches[0].pageX:t.pageX},back:function(){this.page>0&&(this.delta=0,this.page-=1)},next:function(){this.page<this.description.length-1&&(this.delta=0,this.page+=1)}},mounted:function(){this.itemWidth=this.$refs.carousel[0].clientWidth}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-info"},[n("div",[n("h1",{staticClass:"item-info__title"},[t._v(t._s(t.title))])]),t._v(" "),n("img",{staticClass:"item-info__image",attrs:{src:t.thumbnail}}),t._v(" "),n("div",{staticClass:"item-info__description"},[n("span",{staticClass:"item-info--btn",class:[0==this.page?"item-info--hidden":""],on:{click:t.back}},[t._v("\n      <\n    ")]),t._v(" "),n("div",{staticClass:"item-info--carousel",style:"width:"+100*t.description.length+"%; transform: translateX("+t.translateX+"px"},t._l(t.description,function(e,i){return n("div",{key:i,ref:"carousel",refInFor:!0,staticClass:"item-info__description__body",on:{touchstart:t.onTouchStart,mousedown:t.onTouchStart}},[t._v("\n        "+t._s(e)+"\n      ")])})),t._v(" "),this.page!=this.description.length-1?n("span",{staticClass:"item-info--btn",on:{click:t.next}},[t._v("\n      >\n    ")]):t._e()]),t._v(" "),n("div",{staticClass:"item-info__tag"},[n("p",[t._v(t._s(t.tag))])])])},staticRenderFns:[]};var k={name:"ItemPage",components:{"item-info":n("VU/8")(v,_,!1,function(t){n("1Pfb")},"data-v-16fd5df9",null).exports},props:{itemJson:{type:Array,required:!0}}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item-page"},this._l(this.itemJson,function(t){return e("item-info",{key:t.id,attrs:{thumbnail:t.thumbnail,title:t.title,description:t.description,tag:t.tag}})}))},staticRenderFns:[]};var w=n("VU/8")(k,y,!1,function(t){n("fkxM")},"data-v-0626270e",null).exports,L=n("dp1i"),E=n.n(L),C={name:"AboutMe",components:{"item-page":w},data:function(){return{linkJson:E.a}}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aboutme"},[e("item-page",{attrs:{itemJson:this.linkJson}})],1)},staticRenderFns:[]};var J=n("VU/8")(C,T,!1,function(t){n("COS0")},"data-v-5ca2f44e",null).exports,j=n("DV1R"),x=n.n(j),S={name:"Job",components:{"item-page":w},data:function(){return{linkJson:x.a}}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"job"},[e("item-page",{attrs:{itemJson:this.linkJson}})],1)},staticRenderFns:[]};var A=n("VU/8")(S,W,!1,function(t){n("Yo9y")},"data-v-783e487d",null).exports,F=n("JbZR"),R=n.n(F),M={name:"Output",components:{"item-page":w},data:function(){return{itemJson:R.a}}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"output"},[e("item-page",{attrs:{itemJson:this.itemJson}})],1)},staticRenderFns:[]};var V=n("VU/8")(M,O,!1,function(t){n("FNVW")},"data-v-2e85916b",null).exports;i.a.use(d.a);var U=new d.a({routes:[{path:"/",name:"Contents",component:b},{path:"/aboutme",name:"AboutMe",component:J},{path:"/job",name:"Job",component:A},{path:"/output",name:"Output",component:V}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:U,template:"<App/>",components:{App:l}})},WHyA:function(t,e){t.exports=[{toLink:"/",title:"RYOTA KOSHIBA"}]},Yo9y:function(t,e){},dp1i:function(t,e){t.exports=[{toLink:"/",thumbnail:"http://sweeprecord.com/wp-content/uploads/efdea4d1ce25b16c641d5b0b390b6642.png",title:"4.2018 ~ Now",description:["Webapplication Engineer","video streaming department"],tag:"now, employee"},{toLink:"/",thumbnail:"https://www.asahicom.jp/articles/images/AS20170622004426_commL.jpg",title:"3.2018 ~ Now",description:["live in"],tag:"now, citizen"},{toLink:"/",thumbnail:"http://www.naist.jp/about/img/logomark_R.jpg",title:"4.2015 ~ 3.2017",description:["Ubiquitous Computing Systems Lab.","Division of Infomation Science"],tag:"past, student"},{toLink:"/",thumbnail:"https://stat.ameba.jp/user_images/20160703/23/ryos0813/60/5d/p/o0800023313688630645.png?caw=800",title:"5.2014 ~ 3.2017",description:["Mentor","programming education for students"],tag:"past, part-time job"},{toLink:"/",thumbnail:"http://154450.com/doushisya/images/dlogo.jpg",title:"4.2011 ~ 3.2015",description:["Ultrasonic Electronics Lab.","Faculty of Science and Engineering"],tag:"past, student"},{toLink:"/",thumbnail:"http://uenomiya.com/wp-content/uploads/2017/07/ug_logo_new-300x50.png",title:"4.2008 ~ 3.2011",description:["High School Student"],tag:"past, student"},{toLink:"/",thumbnail:"https://www.city.higashiosaka.lg.jp/cmsfiles/contents/0000014/14043/ragbynomachi_blue(1024-768).png",title:"8.1992 ~ 3.2017",description:["my home town"],tag:"past, citizen"}]},fkxM:function(t,e){},uwdl:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2285ec3d512b03f5919a.js.map