(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Ktk9:function(t,e,n){"use strict";var o=n("8Y7J"),i=n("SVse");n("Mgmu"),n("Gkc0"),n("YC02"),n.d(e,"a",function(){return s}),n.d(e,"b",function(){return a});var s=o.mb({encapsulation:0,styles:[[".scroll-effect-content[_ngcontent-%COMP%]   .move-content[_ngcontent-%COMP%]{transition:opacity 2s,transform 2s}.scroll-effect-content[_ngcontent-%COMP%]:not(.show).fade-up   .move-content[_ngcontent-%COMP%]{transform:translateY(100px);opacity:0}"]],data:{}});function a(t){return o.Gb(0,[o.Db(671088640,1,{effectContent:0}),(t()(),o.ob(1,0,[[1,0],["effectContent",1]],null,5,"div",[["class","scroll-effect-content"]],null,null,null,null,null)),o.Cb(512,null,i.s,i.t,[o.q,o.r,o.k,o.B]),o.nb(3,278528,null,0,i.h,[i.s],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Ab(4,2),(t()(),o.ob(5,0,null,null,1,"div",[["class","move-content"]],null,null,null,null,null)),o.yb(null,0)],function(t,e){var n=e.component,o=t(e,4,0,n.effectTypeClass(),n.show?"show":"");t(e,3,0,"scroll-effect-content",o)},null)}},Mgmu:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var o=n("8Y7J"),i=n("XH3k");class s{constructor(t,e){this.toolFn=t,this.anFrame=e,this.effectType=i.a.fadeUp,this.activePosition=3.5,this.onScrollShow=new o.m,this.effectList=i.a,this.scrollTop=0,this.showheight=null,this.show=!1,this.toBottom=!1,this.effectContentSize=null}effectTypeClass(){return this.effectType===this.effectList.fadeUp?"fade-up":this.effectType===this.effectList.null?"null":void 0}setEffectContentSize(){this.effectContentSize=this.effectContent.nativeElement.getBoundingClientRect()}setShowheight(){this.showheight=this.effectContentSize.top+window.pageYOffset-window.innerHeight+window.innerHeight/this.activePosition}watchBottom(){this.toBottom=document.body.scrollHeight-(window.pageYOffset+window.innerHeight)<=20}checkActiveHeight(){this.setEffectContentSize(),this.setShowheight()}checkShow(){this.show=this.scrollTop>=this.showheight||this.toBottom}handleScroll(){this.scrollTop!==window.pageYOffset&&(this.scrollTop=window.pageYOffset,this.checkActiveHeight(),this.watchBottom(),this.checkShow(),this.onScrollShow.emit(this.show))}afterGetDOM(){this.setEffectContentSize(),this.setShowheight(),this.watchBottom(),this.anFrame.bindingAniamtionFrame(()=>this.handleScroll())}ngOnInit(){this.scrollTop=window.pageYOffset}ngAfterViewInit(){this.toolFn.reCheck(this,()=>this.effectContent,this.afterGetDOM)}}},U8Rm:function(t,e,n){"use strict";n.d(e,"a",function(){return o});class o{constructor(){}getTextArray(t){return t.split("\n")}ngOnInit(){}}},XH3k:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(t){return t[t.fadeUp=0]="fadeUp",t[t.null=1]="null",t}({})},YC02:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var o=n("8Y7J"),i=n("C/+5");let s=(()=>{class t{constructor(t){this.router=t,this.requestAnimationFrame=window.requestAnimationFrame,this.aniamtionFrameList=[]}bindingAniamtionFrame(t){let e=this.router.getPathName();this.aniamtionFrameList.push({path:e,fn:t})}filterFrameLis(){const t=this.router.getPathName();this.aniamtionFrameList=this.aniamtionFrameList.filter(e=>e.path===t)}clearFrameList(){this.aniamtionFrameList=[]}unbindingAniamtionFrame(){this.clearFrameList(),this.cancelAnimationFrame()}cancelAnimationFrame(){cancelAnimationFrame(this.animationFrame)}eachAn(){0===this.aniamtionFrameList.length&&this.cancelAnimationFrame(),this.aniamtionFrameList.forEach(t=>t.fn())}startAniamtionFrame(){this.eachAn(),this.animationFrame=this.requestAnimationFrame(()=>this.startAniamtionFrame())}}return t.ngInjectableDef=o.Kb({factory:function(){return new t(o.Lb(i.a))},token:t,providedIn:"root"}),t})()},YjVd:function(t,e,n){"use strict";var o=n("8Y7J"),i=n("SVse");n("ePDk"),n.d(e,"a",function(){return s}),n.d(e,"b",function(){return l});var s=o.mb({encapsulation:0,styles:[['.title-content[_ngcontent-%COMP%]{margin-bottom:80px}.title-content.text-align-l[_ngcontent-%COMP%]{text-align:left}@media screen and (max-width:768px){.title-content[_ngcontent-%COMP%]{margin-bottom:50px}.title-content.text-align-l[_ngcontent-%COMP%]{text-align:center}}.title-content.text-align-c[_ngcontent-%COMP%]{text-align:center}.title-content.text-align-r[_ngcontent-%COMP%]{text-align:right}.title-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{font-size:60px;font-weight:700;letter-spacing:1px;line-height:1.2em}@media screen and (max-width:1550px){.title-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{font-size:48px}}@media screen and (max-width:768px){.title-content.text-align-r[_ngcontent-%COMP%]{text-align:center}.title-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{font-size:36px}}@media screen and (max-width:480px){.title-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{font-size:30px}}.title-content[_ngcontent-%COMP%]:after{display:inline-block;content:"";width:100px;height:3px;background-color:#73f28d;border-radius:1px}']],data:{}});function a(t){return o.Gb(0,[(t()(),o.ob(0,0,null,null,1,"span",[["class","text"]],null,null,null,null,null)),(t()(),o.Fb(1,null,["",""]))],null,function(t,e){t(e,1,0,e.context.$implicit)})}function l(t){return o.Gb(0,[(t()(),o.ob(0,0,null,null,6,"div",[["class","title-content"]],null,null,null,null,null)),o.Cb(512,null,i.s,i.t,[o.q,o.r,o.k,o.B]),o.nb(2,278528,null,0,i.h,[i.s],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Bb(3,{"text-align-l":0,"text-align-c":1,"text-align-r":2}),(t()(),o.ob(4,0,null,null,2,"div",[["class","text-content"]],null,null,null,null,null)),(t()(),o.db(16777216,null,null,1,null,a)),o.nb(6,278528,null,0,i.i,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null)],function(t,e){var n=e.component,o=t(e,3,0,0===n.textAlign,1===n.textAlign,2===n.textAlign);t(e,2,0,"title-content",o),t(e,6,0,n.handleJumpDOM())},null)}},ePDk:function(t,e,n){"use strict";n.d(e,"a",function(){return o});class o{constructor(){this.text="",this.textAlign=0,this.jump=!1}handleJumpDOM(){return this.jump?this.text.split(""):[this.text]}ngOnInit(){}}},ptEM:function(t,e,n){"use strict";n.d(e,"a",function(){return i});class o{constructor(t){Object.assign(this,t)}}const i=[new o({title:"BEER",titleImg:"assets/worksTitleImg/titleImg-beer.jpg",linkPath:"beer",info:{type:"website",year:"2019",design:"\u6797\u5ead\u4f51",coding:"\u6797\u5ead\u4f51",link:["\u7db2\u7ad9\u9023\u7d50","https://lin-ting-yu.github.io/beer/index.html"]},layouts:[{layout:"bigImg",imgs:["assets/workImg/beer/beer-01.png"]},{layout:"imgAndText",layoutType:0,imgs:["assets/workImg/beer/beer-02.png"],text:"\u9152\u7cbe\u81ea\u53e4\u4ee5\u4f86\u90fd\u662f\u8b93\u4eba\u8457\u8ff7\uff0c\u5728\u4e0d\u5f71\u97ff\u5065\u5eb7\u7684\u60c5\u6cc1\u4e0b\uff0c\u9152\u5f80\u5f80\u662f\u5927\u5bb6\u805a\u6703\u9996\u9078\u3002\u5728\u53f0\u7063\uff0c\u5564\u9152\u901a\u5e38\u662f\u5165\u9580\u7684\u9996\u9078\uff0c\u56e0\u6b64\u4f5c\u4e86\u9019\u500b\u7db2\u7ad9\u3002"},{layout:"imgAndText",layoutType:1,imgs:["assets/workImg/beer/beer-03.png"],text:"\u904b\u7528 three.js\u5c07\u5564\u9152\u5448\u73fe\u5728\u7db2\u9801\u4e0a\uff0c\u5c31\u7b97\u6c92\u6709\u770b\u904e\uff0c\u4e5f\u53ef\u4ee5\u99ac\u4e0a\u719f\u6089\u5b83\u3002"}]}),new o({title:"TAIWAN FOLK TOY",titleImg:"assets/worksTitleImg/titleImg-toy.jpg",linkPath:"taiwanfolktoy",info:{type:"book",year:"2015",partner:"\u7c21\u6587\u5a1f\u3001\u5f35\u4fee\u83ef",award:"red dot bast of bast"},layouts:[{layout:"bigImg",imgs:["assets/workImg/taiwan-toy/toy-2.jpg"]},{layout:"imgsAndText",layoutType:1,imgs:["assets/workImg/taiwan-toy/toy-1.jpg","assets/workImg/taiwan-toy/toy-3.jpg"],text:"\u53f0\u7063\u64c1\u6709\u8c50\u5bcc\u591a\u5143\u7684\u81ea\u7136\u4eba\u6587\u666f\u7269\u3002\u5728\u6b77\u53f2\u767c\u5c55\u4e0a\uff0c\u4e5f\u6709\u8a31\u591a\u4f86\u81ea\u5404\u65b9\u7684\u6587\u5316\uff0c\u56e0\u6b64\u6709\u300c\u6c11\u65cf\u6587\u5316\u7194\u7210\u300d\u4e4b\u7a31\u3002\u56e0\u6b64\u6211\u5011\u63a2\u8a0e\u904e\u53bb\u5b58\u5728\uff0c\u4ee5\u7ae5\u73a9\u7684\u65b9\u5f0f\u5448\u73fe\u53f0\u7063\u3002"},{layout:"imgAndText",layoutType:0,imgs:["assets/workImg/taiwan-toy/toy-4.jpg"],text:'\u76d2\u5e95\u7684\u9644\u4ef6\uff0c\u4e5f\u662f\u53f0\u7063\u53e4\u65e9\u6642\u5019\u7684\u73a9\u5177 "\u51b0\u9234\u6a5f"\uff0c\u662f\u7576\u5e74\u96dc\u8ca8\u5e97\u6216\u662f\u70e4\u9b77\u9b5a\u63a8\u8eca\u5fc5\u5099\u7684\u73a9\u5177\uff0c\u4e5f\u662f\u5927\u5bb6\u9592\u6687\u4e4b\u9918\uff0c\u4e0b\u8ab2\u904a\u73a9\u6642\uff0c\u6e2c\u8a66\u4e00\u4e0b\u81ea\u5df1\u904b\u6c23\u7684\u597d\u6771\u897f\u3002'},{layout:"bigImg",imgs:["assets/workImg/taiwan-toy/toy-5.jpg"]},{layout:"twoBigImg",imgs:["assets/workImg/taiwan-toy/toy-folktoypage-01.jpg","assets/workImg/taiwan-toy/toy-folktoypage-02.jpg"]}]}),new o({title:"TAIWAN AMAZING FOOD",titleImg:"assets/worksTitleImg/titleImg-food.jpg",linkPath:"taiwanfood",info:{type:"book",year:"2015",partner:"\u7c21\u6587\u5a1f\u3001\u5f35\u4fee\u83ef",award:"iF design award"},layouts:[{layout:"bigImg",imgs:["assets/workImg/taiwan-food/food-1.jpg"]},{layout:"imgAndText",layoutType:1,imgs:["assets/workImg/taiwan-food/food-2.jpg"],text:"\u8a31\u591a\u570b\u5916\u7684\u670b\u53cb\uff0c\u90fd\u5c0d\u53f0\u7063\u98df\u7269\u7522\u751f\u7121\u6bd4\u7684\u597d\u5947\uff0c\u56e0\u6b64\u5c07\u5177\u6709\u53f0\u7063\u7279\u8272\u7684\u5c0f\u5403\u7f8e\u98df\uff0c\u4ee5\u53ca\u5916\u570b\u4eba\u597d\u5947\u7684\u98df\u7269\u4ecb\u7d39\u7d66\u4e16\u754c\uff0c\u4ee5\u98df\u7269\u4f5c\u70ba\u5a92\u4ecb\uff0c\u8b93\u5916\u570b\u4eba\u66f4\u4e86\u89e3\u53f0\u7063\u6587\u5316\u8207\u7279\u8272\u3002"},{layout:"imgsAndText",layoutType:0,imgs:["assets/workImg/taiwan-food/food-page1.png","assets/workImg/taiwan-food/food-page2.png"],text:"\u4ee5\u5716\u7247\u914d\u5408\u63d2\u756b\uff0c\u8b93\u8b80\u8005\u4e0d\u50c5\u80fd\u5920\u5c0d\u98df\u7269\u6709\uff0c\u4e5f\u53ef\u4ee5\u4e86\u89e3\u53f0\u7063\u5c0f\u5403\u7684\u7531\u4f86\uff0c\u53ca\u98df\u7269\u540d\u7a31\u7684\u8da3\u5473\u539f\u7531\u3002"},{layout:"twoBigImg",imgs:["assets/workImg/taiwan-food/food-icon-01.png","assets/workImg/taiwan-food/food-icon-02.png"]}]}),new o({title:"\u722d\u9bae SuShi Express",titleImg:"assets/worksTitleImg/titleImg-SuShi.jpg",linkPath:"sushi",info:{type:"cis",year:"2016"},layouts:[{layout:"bigImg",imgs:["assets/workImg/sushi/sushi-2.jpg"]},{layout:"imgAndText",layoutType:0,imgs:["assets/workImg/sushi/sushi-juice.jpg"],text:'\u4ee5\u7c21\u7d04\u53ca\u9bae\u9b5a\u70ba\u4e3b\u3002\u5728 "\u722d\u9bae" \u4e8c\u5b57\u4e2d\u85cf\u4e86\u5169\u96bb\u9b5a\u5728\u5176\u4e2d\uff0c\u9b5a\u9c13\u5448\u73fe\u7d05\u8272\uff0c\u8c61\u5fb5\u65b0\u9bae\u3002\u4fd0\u843d\u7684\u7dda\u689d\uff0c\u4f7f\u5927\u773e\u770b\u5230\u6709\u8033\u76ee\u4e00\u65b0\u7684\u611f\u89ba\u3002'},{layout:"bigImg",imgs:["assets/workImg/sushi/sushi-1.jpg"]}]}),new o({title:"\u7c73\u8afe\u5361\u70d8\u7119",titleImg:"assets/worksTitleImg/titleImg-bakery.jpg",linkPath:"milocca",info:{type:"cis",year:"2016"},layouts:[{layout:"twoBigImg",imgs:["assets/workImg/milocca/milocca-01.png","assets/workImg/milocca/milocca-02.png"]},{layout:"imgsAndText",layoutType:0,imgs:["assets/workImg/milocca/milocca-card-01.png","assets/workImg/milocca/milocca-card-02.png"],text:"\u50b3\u7d71\u5716\u7ae0\u5f0f\u7684LOGO\u8a2d\u8a08\u3002\u5f77\u5f7f\u770b\u5230LOGO\u5c31\u76f4\u63a5\u805e\u5230\u50b3\u7d71\u624b\u505a\u9eb5\u5305\u7684\u9999\u6c23\u3002"},{layout:"bigImg",imgs:["assets/workImg/milocca/milocca-something.jpg"]}]}),new o({title:"Catch",titleImg:"assets/worksTitleImg/titleImg-catch.jpg",linkPath:"catch",info:{type:"package",year:"2015"},layouts:[{layout:"bigImg",imgs:["assets/workImg/catch/catch-4.jpg"]},{layout:"imgAndText",layoutType:0,imgs:["assets/workImg/catch/catch-3.jpg"],text:"\u5403\u50b3\u7d71\u5305\u88dd\u7684\u51b0\u68d2\u6642\uff0c\u7e3d\u662f\u56e0\u70ba\u878d\u5316\u901f\u5ea6\u904e\u5feb\uff0c\u5c0e\u81f4\u624b\u8b8a\u5f97\u9ecf\u9ecf\u7684\uff0c\u8b93\u4eba\u706b\u5927\u3002\u56e0\u6b64\u4e86\u6709\u9019\u500b\u60f3\u6cd5\u3002"},{layout:"bigImg",imgs:["assets/workImg/catch/catch-2.jpg"]}]}),new o({title:"\u6c38\u548c\u8c46\u6f3f",titleImg:"assets/worksTitleImg/titleImg-soyMilk.jpg",linkPath:"soymilk",info:{type:"poster",award:"\u6642\u5831\u91d1\u72a2\u734e - \u5165\u9078",year:"2015"},layouts:[{layout:"bigImg",imgs:["assets/workImg/soymilk/soymilk-1.jpg"]},{layout:"imgAndText",layoutType:0,imgs:["assets/workImg/soymilk/soymilk-logo.jpg"],text:'\u4ee5 "\u6c38\u548c\u8c46\u6f3f" LOGO\u5c40\u90e8\u653e\u5927\uff0c\u878d\u5165\u8209\u91cd\u3001\u6500\u5ca9\u53ca\u6cdb\u821f\uff0c\u610f\u65e8\u559d\u8c46\u6f3f\u4f7f\u8eab\u9ad4\u5f37\u58ef\uff0c\u6fc0\u767c\u6dfa\u80fd \uff0c\u8d85\u8d8a\u81ea\u5df1\u3002'}]}),new o({title:"Honor!?",titleImg:"assets/worksTitleImg/titleImg-honor.jpg",linkPath:"honor",info:{type:"poster",year:"2017"},layouts:[{layout:"bigImg",imgs:["assets/workImg/honor/honor-1.jpg"]},{layout:"imgAndText",layoutType:1,imgs:["assets/workImg/honor/honor-2.jpg"],text:'\u5152\u7ae5\u5175\u4e00\u76f4\u662f\u4e00\u500b\u56b4\u91cd\u7684\u554f\u984c\u3002\u9019\u5f35\u6d77\u5831\u662f\u4e00\u500b\u6b63\u5728\u88ab\u8868\u63da\u7684\u5b69\u5b50\uff0c\u4f46\u6210\u5e74\u4eba\u624b\u4e2d\u7684\u6771\u897f\u4e0d\u662f\u4e00\u679a\u52f3\u7ae0\uff0c\u800c\u662f\u4e00\u6392\u5b50\u5f48\uff0c\u9019\u610f\u5473\u8457\u6d17\u8166\u7684\u904e\u7a0b\u3002\u6210\u5e74\u4eba\u548c\u5152\u7ae5\u5f62\u6210 "\uff01\uff1f" \u5f62\u72c0\uff0c\u56e0\u6b64\u6211\u5011\u61f7\u7591\u4e26\u6307\u8cac\u9019\u500b\u884c\u70ba\u3002 \u9ec3\u8272\u80cc\u666f\u8207\u9ed1\u8272\u5716\u6848\uff0c\u6709\u5982\u8b66\u544a\u6a19\u8a8c\u3002'}]}),new o({title:"Another Logo",titleImg:"assets/worksTitleImg/titleImg-logotype.jpg",linkPath:"anotherlogo",info:{type:"logotype",year:"2013-2015"},layouts:[{layout:"twoBigImg",imgs:["assets/workImg/anotherlogo/anotherlogo-01.png","assets/workImg/anotherlogo/anotherlogo-02.png"]},{layout:"bigImg",imgs:["assets/workImg/anotherlogo/anotherlogo-02.jpg"]},{layout:"imgsAndText",layoutType:0,imgs:["assets/workImg/anotherlogo/anotherlogo-03.jpg","assets/workImg/anotherlogo/anotherlogo-04.jpg"],text:'\u4ee5\u7de8\u7e54\u51fa\u7684\u6587\u5b57\uff0c\u50b3\u9054\u51fa\u670d\u98fe\u5e97"\u8a02\u88fd"\u7684\u7279\u8272\uff0c\u6bcf\u4ef6\u8863\u670d\u90fd\u662f\u7cbe\u5fc3\u7de8\u7e54\u7684\u7d50\u679c\u3002'},{layout:"bigImg",imgs:["assets/workImg/anotherlogo/anotherlogo-05.jpg"]},{layout:"bigImg",imgs:["assets/workImg/anotherlogo/anotherlogo-06.jpg"]}]}),new o({title:"PSI",titleImg:"assets/worksTitleImg/titleImg-psi.jpg",linkPath:"psi",info:{type:"logo",year:"2016"},layouts:[{layout:"bigImg",imgs:["assets/workImg/psi/PSI-guitar.jpg"]},{layout:"bigImg",imgs:["assets/workImg/psi/psi-2.jpg"]},{layout:"imgAndText",layoutType:1,imgs:["assets/workImg/psi/psi-3.jpg"],text:"\u4ee5\u97f3\u6a02\u64ad\u653e\u9375\u70ba\u51fa\u767c\u9ede\uff0c\u7d50\u5408\u7bad\u982d\u8207 pick \u5916\u578b\u3002\u6574\u9ad4\u4ee5\u6b63\u4e09\u89d2\u5f62\u5207\u683c\u800c\u6210\uff0c\u8c61\u5fb5\u56b4\u8b39\u7684\u516c\u53f8\u7406\u5ff5\u3002\u7bad\u982d\u6307\u5411\u53f3\u65b9\u8868\u793a\u524d\u9032\u3001\u958b\u59cb\u3002"},{layout:"bigImg",imgs:["assets/workImg/psi/psi-1.jpg"]}]}),new o({title:"\u7cfe\u7d50",titleImg:"assets/worksTitleImg/titleImg-kind.jpg",linkPath:"kink",info:{type:"poster",year:"2017"},layouts:[{layout:"bigImg",imgs:["assets/workImg/kink/kink-1.jpg"]},{layout:"imgsAndText",layoutType:0,imgs:["assets/workImg/kink/kink-2.jpg","assets/workImg/kink/kink-3.jpg"],text:'"\u7cfe\u7d50" \u5728\u5b57\u5f62\u4e0a\uff0c\u662f\u4e00\u500b\u6975\u5177\u756b\u9762\u611f\u7684\u8fad\u5f59\uff0c\u5b83\u5e36\u4f86\u7684\u5370\u8c61\u5c31\u662f\u4e00\u5718\u5718\u7269\u9ad4\u76f8\u4ea4\u7cfe\u7e8f\u3001\u679d\u6748\u91cd\u758a\u7684\u6a21\u6a23\uff0c\u56e0\u6b64\u6211\u628a "\u7cfe\u7d50" \u4e8c\u5b57\u914d\u5408\u4eba\u5011\u9762\u5c0d\u96e3\u984c\u7684\u5fc3\u5883\u4e00\u8d77\u5448\u73fe\u51fa\u4f86\u3002'}]})]},"qrm+":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n("8Y7J");class i{constructor(){this.onLinkClick=new o.m}linkClick(t){this.onLinkClick.emit(t)}ngOnInit(){}}}}]);