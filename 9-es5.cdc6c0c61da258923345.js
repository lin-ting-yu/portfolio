(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{UUWk:function(t,n,e){"use strict";e.r(n);var o=e("CcnG"),i=function(){return function(){}}(),l=e("pMnS"),c=e("+PPO"),r=e("hKDJ"),s=e("Ip0R"),a=e("AG2Y"),g=function(){function t(t,n,e){this.listCardService=t,this.toolFunction=n,this.routerEvent=e,this.listCardsLiDom=null,this.targetPos=this.listCardService.targetPos,this.transformNumber=null,this.anmation=null,this.target=null,this.pathData=a.a,this.onCardClickId=null,this.isMobile=!this.toolFunction.DETECTOR.isDesktopDevice,this.imgTrans=null,this.handleCardsShow=[]}return t.prototype.cardInitShow=function(){this.handleCardsShow.forEach(function(t,n,e){setTimeout(function(){e[n]=!0},250*n)})},t.prototype.startSetPos=function(t){if(!this.onCardClickId&&0!==this.onCardClickId){if(this.isMobile)return;this.listCardService.getTargetPos(t),this.setTarget(t.target),this.setDOMTransform(t)}},t.prototype.stopSetPos=function(){this.isMobile||(this.listCardService.reset(),this.transformNumber=null,this.anmation&&(clearInterval(this.anmation),this.anmation=null),this.target&&(this.target.img.style.transform="",this.target.text.style.transform="",this.target.bor.style.transform="",this.target=null))},t.prototype.getTransformNumber=function(t){this.isMobile||(this.transformNumber=this.listCardService.getTransformNumber(t))},t.prototype.setTarget=function(t){this.target={target:t,img:t.querySelector(".img-content"),bor:t.querySelector(".img-border"),text:t.querySelector(".info-text-content")}},t.prototype.setDOMTransform=function(t){var n=this;t&&(this.anmation=setInterval(function(){if(n.transformNumber){var t=n.imgTrans=n.toolFunction.getTransform(n.target.img),e=n.toolFunction.getTransform(n.target.bor),o=n.toolFunction.getTransform(n.target.text),i="rotateX("+(e.rotateX+.2*(1.5*n.transformNumber.rotateX-e.rotateX))+"deg) rotateY("+(e.rotateY+.2*(1.5*n.transformNumber.rotateY-e.rotateY))+"deg)",l="rotateX("+(o.rotateX+.2*(1*n.transformNumber.rotateX-o.rotateX))+"deg) rotateY("+(o.rotateY+.2*(1*n.transformNumber.rotateY-o.rotateY))+"deg)";n.target.img.style.transform="rotateX("+(t.rotateX+.2*(2*n.transformNumber.rotateX-t.rotateX))+"deg) rotateY("+(t.rotateY+.2*(2*n.transformNumber.rotateY-t.rotateY))+"deg)",n.target.bor.style.transform=i,n.target.text.style.transform=l}},60))},t.prototype.onClick=function(t,n,e,o){var i=this,l=!this.isMobile;l||this.setTarget(this.listCardsLiDom[n].nativeElement);var c=this.target.target.querySelector(".link-content"),r=this.target.img,s=this.target.target,a=c.getBoundingClientRect();this.stopSetPos(),s.style.height=this.toolFunction.getStyle(s,"height"),c.style.width=a.width+"px",c.style.height=a.height+"px",c.style.top=a.top+"px",c.style.left=a.left+"px",c.style.transform="translateY(0px) "+(l?"skewY(0deg)":""),c.style.position="fixed";var g=l?parseInt(this.imgTrans.rotateX):1,d=l?parseInt(this.imgTrans.rotateY):1;g=0-g/Math.abs(g),d=0-d/Math.abs(d),r.style.transformOrigin=g>0?"50% 100%":"50% 0%",setTimeout(function(){c.style.transition="0.5s",r.style.transition="0.5s",i.onCardClickId=n,c.style.top="0",c.style.left="0",c.style.width=window.innerWidth+"px",c.style.height="100vh",r.style.transform="rotateX("+15*g+"deg) rotateY("+5*d+"deg) translateY("+-10*g+"px)",setTimeout(function(){r.style.transform="rotateX(0deg) rotateY(0deg) translateY(0)"},300),setTimeout(function(){i.linkClick(e,o)},500)},10)},t.prototype.linkClick=function(t,n){this.routerEvent.linkClick(t,n,!1)},t.prototype.ngOnInit=function(){},t.prototype.ngAfterViewInit=function(){var t=this;this.listCardsLiDom=this.listCardsLi.toArray(),setTimeout(function(){t.listCardsLiDom.forEach(function(n){t.handleCardsShow.push(!1)}),setTimeout(function(){t.cardInitShow()},300)},0)},t.prototype.ngOnDestroy=function(){this.stopSetPos()},t}(),d=function(){function t(){this.targetPos=null}return t.prototype.getTargetPos=function(t){if(t){var n=t.target.getBoundingClientRect();return n.centerX=n.width/2,n.centerY=n.height/2,n.proportionX=5/n.width*2,n.proportionY=5/n.height*2,this.targetPos=n,n}},t.prototype.getTransformNumber=function(t){if(t&&this.targetPos){var n={rotateX:0,rotateY:0},e=t.clientX-this.targetPos.x;return n.rotateX=-(t.clientY-this.targetPos.y-this.targetPos.centerY)*this.targetPos.proportionY,n.rotateY=(e-this.targetPos.centerX)*this.targetPos.proportionX,n}},t.prototype.reset=function(){this.targetPos=null},t.ngInjectableDef=o.Mb({factory:function(){return new t},token:t,providedIn:"root"}),t}(),u=e("Gkc0"),C=e("C/+5"),M=o.ob({encapsulation:0,styles:[['.list-card-content[_ngcontent-%COMP%]{display:flex;width:100%}.list-card-content[_ngcontent-%COMP%]   .list-card-ul[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:100%;justify-content:space-between;padding-right:5px}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]{width:calc(35vw - 40px)}@media screen and (min-width:1025px) and (max-width:1550px){.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]{width:calc(35vw - 40px)}}@media screen and (min-width:769px) and (max-width:1024px){.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]{width:calc(37.5vw - 20px)}}@media screen and (max-width:768px){.list-card-content[_ngcontent-%COMP%]   .list-card-ul[_ngcontent-%COMP%]{padding-right:0}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]{width:calc(50vw - 40px)}}@media screen and (min-width:480px){.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]:not(.isMobile):nth-child(even){margin-top:20px}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]:nth-child(n+3){margin-top:35px}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]:nth-child(n+3):not(.isMobile):nth-child(even){margin-top:55px}}.list-card-content[_ngcontent-%COMP%]   .list-card-li.show.isMobile[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.list-card-content[_ngcontent-%COMP%]   .list-card-li.show[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]{opacity:1;transform:translateY(0) skewY(-2deg)}@media screen and (max-width:480px){.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]{width:calc(100vw - 40px)}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%] + .list-card-li[_ngcontent-%COMP%]{margin-top:30px}.list-card-content[_ngcontent-%COMP%]   .list-card-li.show.isMobile[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]{transform:translateY(0)}.list-card-content[_ngcontent-%COMP%]   .list-card-li.show[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]{transform:translateY(0) skewY(0)}}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]:not(.isMobile):hover   .img-content[_ngcontent-%COMP%]{transition:0s transform,.5s -webkit-filter;transition:0s transform,.5s filter;transition:0s transform,.5s filter,.5s -webkit-filter;-webkit-filter:grayscale(0);filter:grayscale(0)}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]:not(.isMobile):hover   .img-content[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{transform:scale(1.1)}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]:not(.isMobile):hover   .img-border[_ngcontent-%COMP%], .list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]:not(.isMobile):hover   .info-text-content[_ngcontent-%COMP%]{transition:0s}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]:not(.isMobile):hover   .info-text-content[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]{letter-spacing:2px}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]:not(.isMobile):hover   .info-text-content[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]:before{width:90px}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]{transform-style:preserve-3d;transition:.5s transform,.5s -webkit-filter;transition:.5s transform,.5s filter;transition:.5s transform,.5s filter,.5s -webkit-filter;overflow:hidden;-webkit-filter:grayscale(.9);filter:grayscale(.9)}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .img-border[_ngcontent-%COMP%], .list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .info-text-content[_ngcontent-%COMP%]{transform-style:preserve-3d;transition:.5s transform}.list-card-content[_ngcontent-%COMP%]   .list-card-li.isMobile[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]{transform:translateY(100px)}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]{perspective:1000px;width:100%;height:100%;position:relative;transition:transform 1.5s,opacity 1.5s;opacity:0;transform-origin:50% 50%;transform:translateY(100px) skewY(5deg)}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .img-border[_ngcontent-%COMP%], .list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]{width:100%;height:calc(19.6875vw - 22.5px);background-color:#ddd;border-radius:5px}@media screen and (min-width:1025px) and (max-width:1550px){.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .img-border[_ngcontent-%COMP%], .list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]{height:calc(19.6875vw - 19.6875px)}}@media screen and (min-width:769px) and (max-width:1024px){.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .img-border[_ngcontent-%COMP%], .list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]{height:calc(21.09375vw - 11.25px)}}@media screen and (max-width:768px){.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .img-border[_ngcontent-%COMP%], .list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]{height:calc(28.125vw - 22.5px)}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .img-border[_ngcontent-%COMP%]{display:none}}@media screen and (max-width:480px){.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .img-border[_ngcontent-%COMP%], .list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]{height:calc(56.25vw - 22.5px)}}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:100%;height:100%;background-size:cover;background-position:center center;transition:.5s;will-change:background-image}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .img-border[_ngcontent-%COMP%]{background-color:transparent;background-image:none;border:1px solid #fff;-webkit-filter:invert(1);filter:invert(1);position:absolute;top:5px;left:5px}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .info-text-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end;width:100%;margin-top:10px;position:relative;left:5px}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .info-text-content[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]{font-size:24px;letter-spacing:1px;position:relative;margin-top:18px;transition:1s;font-weight:700}@media screen and (max-width:1024px){.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .info-text-content[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]{font-size:18px}}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .info-text-content[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]:before{display:block;content:"";width:80px;height:8px;background-color:#73f28d;border-radius:1px;position:absolute;left:-10px;top:8px;transform:translateY(-100%);transition:1.5s}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .info-text-content[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:block;position:relative}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .info-text-content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]{text-align:right}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .info-text-content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{font-size:14.4px;letter-spacing:1px;font-weight:700}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .info-text-content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .text-content.small[_ngcontent-%COMP%]{font-size:12px;color:rgba(0,0,0,.6);font-weight:700}@media screen and (max-width:768px){.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .info-text-content[_ngcontent-%COMP%]{position:static;margin-top:5px}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .info-text-content[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]{font-size:12px}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .info-text-content[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]:before{height:3px;top:-10px;left:0}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .info-text-content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{font-size:12px}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .info-text-content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .text-content.small[_ngcontent-%COMP%]{font-size:10.2px}}.list-card-content[_ngcontent-%COMP%]   .list-card-li[_ngcontent-%COMP%]   .info-text-content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{white-space:nowrap}.list-card-content[_ngcontent-%COMP%]   .list-card-li.img-zoom-in[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%]{z-index:999;transition:transform .5s,opacity .5s}.list-card-content[_ngcontent-%COMP%]   .list-card-li.img-zoom-in[_ngcontent-%COMP%]   .img-border[_ngcontent-%COMP%], .list-card-content[_ngcontent-%COMP%]   .list-card-li.img-zoom-in[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%], .list-card-content[_ngcontent-%COMP%]   .list-card-li.img-zoom-in[_ngcontent-%COMP%]   .info-text-content[_ngcontent-%COMP%]{transition:.3s}.list-card-content[_ngcontent-%COMP%]   .list-card-li.img-zoom-in[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]{width:100%;height:100%;transform-origin:50% 0;transition:.3s;-webkit-filter:grayscale(0);filter:grayscale(0);border-radius:0}.list-card-content[_ngcontent-%COMP%]   .list-card-li.img-zoom-in[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{transform:scale(1)}.list-card-content[_ngcontent-%COMP%]   .list-card-li.img-zoom-in[_ngcontent-%COMP%]   .img-border[_ngcontent-%COMP%], .list-card-content[_ngcontent-%COMP%]   .list-card-li.img-zoom-in[_ngcontent-%COMP%]   .info-text-content[_ngcontent-%COMP%]{opacity:0}']],data:{animation:[{type:7,name:"fadeIn",definitions:[{type:0,name:"true",styles:{type:6,styles:{opacity:1,transform:"translateY(0) skewY(-2deg)"},offset:null},options:void 0},{type:0,name:"false",styles:{type:6,styles:{opacity:0,transform:"translateY(100px) skewY(5deg)"},offset:null},options:void 0},{type:1,expr:"0 => 1",animation:[{type:4,styles:null,timings:"1000ms ease-out"}],options:null}],options:{}}]}});function P(t){return o.Ib(0,[(t()(),o.qb(0,0,[[1,0],["listCardLi",1]],null,21,"li",[["class","list-card-li"]],null,[[null,"mousemove"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(t,n,e){var o=!0,i=t.component;return"mousemove"===n&&(o=!1!==i.getTransformNumber(e)&&o),"mouseenter"===n&&(o=!1!==i.startSetPos(e)&&o),"mouseleave"===n&&(o=!1!==i.stopSetPos()&&o),"click"===n&&(o=!1!==i.onClick(e,t.context.index,i.pathData.work,{page:t.context.$implicit.linkPath})&&o),o},null,null)),o.Eb(512,null,s.s,s.t,[o.s,o.t,o.k,o.D]),o.pb(2,278528,null,0,s.h,[s.s],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Db(3,{"img-zoom-in":0,isMobile:1,show:2}),(t()(),o.qb(4,0,null,null,17,"div",[["class","link-content"]],null,null,null,null,null)),(t()(),o.qb(5,0,null,null,4,"div",[["class","img-content"]],null,null,null,null,null)),(t()(),o.qb(6,0,null,null,3,"div",[["class","img"]],null,null,null,null,null)),o.Eb(512,null,s.u,s.v,[o.k,o.t,o.D]),o.pb(8,278528,null,0,s.m,[s.u],{ngStyle:[0,"ngStyle"]},null),o.Db(9,{"background-image":0}),(t()(),o.qb(10,0,null,null,0,"div",[["class","img-border"]],null,null,null,null,null)),(t()(),o.qb(11,0,null,null,10,"div",[["class","info-text-content"]],null,null,null,null,null)),(t()(),o.qb(12,0,null,null,2,"div",[["class","title-content"]],null,null,null,null,null)),(t()(),o.qb(13,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(t()(),o.Hb(14,null,["",""])),(t()(),o.qb(15,0,null,null,6,"div",[["class","info-content"]],null,null,null,null,null)),(t()(),o.qb(16,0,null,null,2,"div",[["class","text-content small"]],null,null,null,null,null)),(t()(),o.qb(17,0,null,null,1,"span",[["class","text"]],null,null,null,null,null)),(t()(),o.Hb(18,null,["",""])),(t()(),o.qb(19,0,null,null,2,"div",[["class","text-content"]],null,null,null,null,null)),(t()(),o.qb(20,0,null,null,1,"span",[["class","text"]],null,null,null,null,null)),(t()(),o.Hb(21,null,["",""]))],function(t,n){var e=n.component,o=t(n,3,0,e.onCardClickId===n.context.index,e.isMobile,e.handleCardsShow[n.context.index]);t(n,2,0,"list-card-li",o);var i=t(n,9,0,"url("+n.context.$implicit.titleImg+")");t(n,8,0,i)},function(t,n){t(n,14,0,n.context.$implicit.title),t(n,18,0,n.context.$implicit.info.year),t(n,21,0,n.context.$implicit.info.type)})}function m(t){return o.Ib(0,[o.Fb(671088640,1,{listCardsLi:1}),(t()(),o.qb(1,0,null,null,3,"div",[["class","list-card-content"]],null,null,null,null,null)),(t()(),o.qb(2,0,[["listCardUl",1]],null,2,"ul",[["class","list-card-ul"]],null,null,null,null,null)),(t()(),o.fb(16777216,null,null,1,null,P)),o.pb(4,278528,null,0,s.i,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null)],function(t,n){t(n,4,0,n.component.data)},null)}var p=e("mrSG"),O=e("qrm+"),f=e("ptEM"),_=function(t){function n(){var n=t.call(this)||this;return n.data=f.a,n}return p.__extends(n,t),n}(O.a),h=o.ob({encapsulation:0,styles:[[""]],data:{}});function b(t){return o.Ib(0,[(t()(),o.qb(0,0,null,null,3,"app-layout-common",[],null,[["window","scroll"],["window","resize"]],function(t,n,e){var i=!0;return"window:scroll"===n&&(i=!1!==o.Bb(t,1).onContentScroll(e)&&i),"window:resize"===n&&(i=!1!==o.Bb(t,1).onResize(e)&&i),i},c.b,c.a)),o.pb(1,114688,null,0,r.a,[],{scroll:[0,"scroll"]},null),(t()(),o.qb(2,0,null,0,1,"app-list-card",[],null,null,null,m,M)),o.pb(3,4440064,null,0,g,[d,u.a,C.a],{data:[0,"data"]},null)],function(t,n){var e=n.component;t(n,1,0,!0),t(n,3,0,e.data)},null)}function x(t){return o.Ib(0,[(t()(),o.qb(0,0,null,null,1,"app-works",[],null,null,null,b,h)),o.pb(1,114688,null,0,_,[],null,null)],function(t,n){t(n,1,0)},null)}var w=o.mb("app-works",_,x,{},{onLinkClick:"onLinkClick"},[]),y=e("t/Na"),v=e("eG2b"),k=e("5Ccn"),z=e("ZYCi"),Y=function(){return function(){}}(),S=e("mN3m"),T=e("bDjW"),X=e("Tx//");e.d(n,"WorksModuleNgFactory",function(){return q});var q=o.nb(i,[],function(t){return o.yb([o.zb(512,o.j,o.Y,[[8,[l.a,w]],[3,o.j],o.x]),o.zb(4608,s.l,s.k,[o.u,[2,s.x]]),o.zb(4608,y.k,y.k,[]),o.zb(6144,y.i,null,[y.k]),o.zb(4608,y.g,y.g,[y.i]),o.zb(6144,y.b,null,[y.g]),o.zb(4608,y.f,y.j,[y.b,o.q]),o.zb(4608,y.c,y.c,[y.f]),o.zb(4608,v.g,v.d,[y.c]),o.zb(5120,v.f,v.c,[[3,v.f],v.g,o.B,[2,v.b],[2,s.c]]),o.zb(4608,y.h,y.n,[s.c,o.B,y.l]),o.zb(4608,y.o,y.o,[y.h,y.m]),o.zb(5120,y.a,function(t){return[t]},[y.o]),o.zb(4608,k.b,k.b,[o.B]),o.zb(1073742336,s.b,s.b,[]),o.zb(1073742336,z.m,z.m,[[2,z.r],[2,z.l]]),o.zb(1073742336,Y,Y,[]),o.zb(1073742336,S.a,S.a,[]),o.zb(1073742336,v.a,v.a,[]),o.zb(1073742336,y.e,y.e,[]),o.zb(1073742336,y.d,y.d,[]),o.zb(1073742336,k.a,k.a,[]),o.zb(1073742336,T.a,T.a,[]),o.zb(1073742336,X.a,X.a,[]),o.zb(1073742336,i,i,[]),o.zb(1024,z.j,function(){return[[{path:"",component:_}]]},[]),o.zb(256,y.l,"XSRF-TOKEN",[]),o.zb(256,y.m,"X-XSRF-TOKEN",[])])})}}]);