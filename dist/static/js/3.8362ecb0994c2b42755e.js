webpackJsonp([3],{O6OO:function(t,e){},"cF5/":function(t,e){},"v/Iv":function(t,e,s){t.exports=s.p+"static/img/logo_img.13d2e6f.png"},vkyI:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("BO1k"),i=s.n(n),a=s("mvHQ"),o=s.n(a),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navMenu"},t._l(t.navMenus,function(e){return s("label",[null==e.children?s("el-menu-item",{attrs:{index:e.url,route:e.url}},[s("i",{staticClass:"el-icon-date"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.ruleName))])]):t._e(),t._v(" "),e.children?s("el-submenu",{attrs:{index:e.id}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-document"}),t._v(" "),s("span",[t._v(" "+t._s(e.ruleName))])]),t._v(" "),s("NavMenu",{attrs:{navMenus:e.children}})],2):t._e()],1)}),0)},staticRenderFns:[]};var l={components:{NavMenu:s("VU/8")({name:"NavMenu",props:["navMenus"],data:function(){return{}}},r,!1,function(t){s("cF5/")},"data-v-0253d295",null).exports},data:function(){return{menuData:[],isCollapse:!1,r:this.$route.path,leftpx:200}},created:function(){this.menuData=JSON.parse(sessionStorage.getItem("menuData"))},methods:{openCloseCollapse:function(){this.isCollapse=!this.isCollapse,0==this.isCollapse?this.leftpx=200:this.leftpx=65}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"com-aside"},[s("el-radio-group",{staticClass:"aside-group",style:{left:t.leftpx+"px"},model:{value:t.isCollapse,callback:function(e){t.isCollapse=e},expression:"isCollapse"}},[s("div",{staticClass:"collapse-btn-box",on:{click:t.openCloseCollapse}},[0==t.isCollapse?s("i",{staticClass:"hidebtn el-icon-caret-left"}):t._e(),t._v(" "),1==t.isCollapse?s("i",{staticClass:"hidebtn el-icon-caret-right"}):t._e()])]),t._v(" "),s("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"background-color":"#fff","text-color":"#333","active-text-color":"#409eff",router:"","default-active":t.r,"unique-opened":!0,collapse:t.isCollapse}},[s("el-menu-item",{attrs:{index:"/home/index"}},[s("i",{staticClass:"el-icon-location"}),t._v(" "),s("span",[t._v("首页")])]),t._v(" "),s("NavMenu",{attrs:{navMenus:t.menuData}})],1)],1)},staticRenderFns:[]};var u=s("VU/8")(l,c,!1,function(t){s("O6OO")},null,null).exports,d=s("2hMI"),p=s("iGF/"),v=s("PXCl").Base64,f={data:function(){return{username:"",is404:!1,inform:[],informCount:0,menuData:[],disabledTip:!1,tooltipFlag:!1,disabledTip2:!1,tooltipFlag2:!1,placement:"top",className:"text"}},created:function(){this.username=v.decode(sessionStorage.getItem("username")),this.menuData=JSON.parse(sessionStorage.getItem("menuData"));var t=[],e=!0,s=!1,n=void 0;try{for(var a,r=i()(this.menuData);!(e=(a=r.next()).done);e=!0){var l=a.value;0===l.menutype&&t.push({ruleCode:l.ruleCode});var c=!0,u=!1,d=void 0;try{for(var p,f=i()(l.children);!(c=(p=f.next()).done);c=!0){var m=p.value;2===m.menutype&&t.push({ruleCode:m.ruleCode});var h=!0,_=!1,g=void 0;try{for(var C,b=i()(m.children2);!(h=(C=b.next()).done);h=!0){var y=C.value;0===y.menutype&&t.push({ruleCode:y.ruleCode})}}catch(t){_=!0,g=t}finally{try{!h&&b.return&&b.return()}finally{if(_)throw g}}}}catch(t){u=!0,d=t}finally{try{!c&&f.return&&f.return()}finally{if(u)throw d}}}}catch(t){s=!0,n=t}finally{try{!e&&r.return&&r.return()}finally{if(s)throw n}}sessionStorage.setItem("btnpermission",o()(t)),this.getactivitiNotice()},components:{Aside:u},watch:{$route:function(t,e){"/404"==this.$route.path||"/401"==this.$route.path?this.is404=!0:this.is404=!1}},methods:{handleDropdown:function(t){"logout"==t?(this.logoutMethod(),sessionStorage.clear(),this.$router.push("/login")):"userinfo"==t?this.$router.push("/user/userinfo"):this.$router.push("/user/checkpass")},visibilityChange:function(t){var e=t.target.offsetHeight,s=this.$refs.tlp.$el.parentNode.clientHeight;this.tooltipFlag=s<e},visibilityChange2:function(t){var e=t.target.offsetHeight,s=this.$refs.tlp.$el.parentNode.clientHeight;this.tooltipFlag2=s<e},logoutMethod:function(){Object(p.j)().then(function(t){})},getactivitiNotice:function(){var t=this;Object(d.a)({}).then(function(e){t.inform=e.data,t.informCount=e.data.count})},informBtn:function(t){var e=this,s={id:t};Object(d.b)(s).then(function(t){e.$message({message:"通知已读",type:"success",duration:1e3}),e.getactivitiNotice()})},goPage:function(t){this.$router.push(t)}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("el-header",{class:{is404:t.is404}},[n("div",{staticClass:"head"},[n("div",{staticClass:"head_logo"},[n("img",{staticClass:"logo_img",attrs:{src:s("v/Iv"),alt:""}})]),t._v(" "),n("span",{staticClass:"logo_txt"},[t._v("联想语音管理系统")])]),t._v(" "),n("div",{staticClass:"fr"},[n("el-popover",{staticClass:"inform-popo",attrs:{placement:"bottom",width:"400",trigger:"click","popper-class":"inform-popover"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("div",{staticClass:"pover-body"},[t._l(t.inform.data,function(e){return n("div",{key:e.id,staticClass:"tooltips-wrap"},["1"==t.inform.manager?n("span",{staticClass:"pocont",on:{click:function(s){return t.goPage(e.url)}}},[t._v(t._s(e.dataType)+"有新增数据需要你审核")]):t._e(),t._v(" "),"2"==t.inform.manager?n("span",{staticClass:"pocont",on:{click:function(s){return t.goPage(e.url)}}},[t._v("你添加的"+t._s(e.dataType)+"数据已被审核，审批"+t._s(1==e.status?"通过":"拒绝"))]):t._e(),t._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:function(s){return t.informBtn(e.id)}}},[t._v("标记已读")])],1)}),t._v(" "),0==t.informCount?n("div",{staticClass:"hintnull"},[n("span",[t._v("暂无通知")])]):t._e()],2),t._v(" "),n("el-badge",{staticClass:"inform-item",attrs:{slot:"reference",value:t.informCount,max:99},slot:"reference"},[n("el-button",{staticClass:"inform-button",attrs:{icon:"el-icon-bell",type:"primary"}})],1)],1),t._v(" "),n("el-dropdown",{attrs:{trigger:"click"},on:{command:t.handleDropdown}},[n("span",{staticClass:"el-dropdown-link"},[t._v("\n                    "+t._s(t.username)),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"userinfo"}},[t._v("账号信息")]),t._v(" "),n("el-dropdown-item",{attrs:{command:"checkpass"}},[t._v("修改密码")]),t._v(" "),n("el-dropdown-item",{attrs:{command:"logout"}},[t._v("退出")])],1)],1)],1)]),t._v(" "),n("el-container",[n("el-aside",{class:{is404:t.is404},attrs:{width:"auto"}},[n("Aside")],1),t._v(" "),n("el-main",[n("router-view")],1)],1)],1)},staticRenderFns:[]};var h=s("VU/8")(f,m,!1,function(t){s("wXke")},null,null);e.default=h.exports},wXke:function(t,e){}});