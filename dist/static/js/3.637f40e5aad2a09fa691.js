webpackJsonp([3],{cLPj:function(e,t){},i6Ah:function(e,t){},vkyI:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-menu",{attrs:{mode:"vertical","default-active":e.$route.path,router:e.isRouter}},[s("el-menu-item",{attrs:{index:"/home/index"}},[s("i",{staticClass:"el-icon-location"}),e._v(" "),s("span",[e._v("首页")])]),e._v(" "),s("el-submenu",{attrs:{index:"1"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-date"}),e._v(" "),s("span",[e._v("数据管理")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/home/appList"}},[s("i",{staticClass:"el-icon-goods"}),e._v(" "),s("span",[e._v("应用列表")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/home/keyWord"}},[s("i",{staticClass:"el-icon-goods"}),e._v(" "),s("span",[e._v("应用关键词")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/home/aliReg"}},[s("i",{staticClass:"el-icon-goods"}),e._v(" "),s("span",[e._v("应用别名规则")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/home/cache"}},[s("i",{staticClass:"el-icon-goods"}),e._v(" "),s("span",[e._v("应用缓存")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/home/was"}},[s("i",{staticClass:"el-icon-tickets"}),e._v(" "),s("span",[e._v("网站导航数据")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/home/dict"}},[s("i",{staticClass:"el-icon-tickets"}),e._v(" "),s("span",[e._v("热词表")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/home/csc"}},[s("i",{staticClass:"el-icon-service"}),e._v(" "),s("span",[e._v("常用服务电话")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/home/qa"}},[s("i",{staticClass:"el-icon-tickets"}),e._v(" "),s("span",[e._v("定制问答")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/home/rule"}},[s("i",{staticClass:"el-icon-tickets"}),e._v(" "),s("span",[e._v("小不点规则设置")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/home/grey"}},[s("i",{staticClass:"el-icon-tickets"}),e._v(" "),s("span",[e._v("灰度发布")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/home/chat"}},[s("i",{staticClass:"el-icon-tickets"}),e._v(" "),s("span",[e._v("闲聊上报数据")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/home/joke"}},[s("i",{staticClass:"el-icon-tickets"}),e._v(" "),s("span",[e._v("笑话")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/home/sen"}},[s("i",{staticClass:"el-icon-tickets"}),e._v(" "),s("span",[e._v("敏感词")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/home/trigger"}},[s("i",{staticClass:"el-icon-tickets"}),e._v(" "),s("span",[e._v("唤醒词")])])],2),e._v(" "),s("el-submenu",{attrs:{index:"2"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-date"}),e._v(" "),s("span",[e._v("LASF KV")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/home/kv"}},[s("i",{staticClass:"el-icon-document"}),e._v(" "),s("span",[e._v("KV列表")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/home/engine"}},[s("i",{staticClass:"el-icon-document"}),e._v(" "),s("span",[e._v("引擎规则")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/home/outer"}},[s("i",{staticClass:"el-icon-document"}),e._v(" "),s("span",[e._v("三方错误信息")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/home/skill"}},[s("i",{staticClass:"el-icon-document"}),e._v(" "),s("span",[e._v("技能配置信息")])])],2),e._v(" "),s("el-menu-item",{attrs:{index:"/home/setting"}},[s("i",{staticClass:"el-icon-setting"}),e._v(" "),s("span",[e._v("设置")])])],1)},staticRenderFns:[]};var n={data:function(){return{username:""}},created:function(){this.username=window.localStorage.getItem("username")},components:{Aside:s("VU/8")({data:function(){return{isRouter:!0,key:"/home/index"}}},i,!1,function(e){s("i6Ah")},null,null).exports},methods:{handleDropdown:function(e){"logout"==e?(localStorage.removeItem("user_id"),this.$router.push("/login")):this.$router.push("/login")}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("el-header",[e._v("\n        语音服务管理系统\n\n        "),s("el-dropdown",{staticClass:"fr",attrs:{trigger:"click"},on:{command:e.handleDropdown}},[s("span",{staticClass:"el-dropdown-link"},[e._v("\n                "+e._s(e.username)),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"change"}},[e._v("切换账号")]),e._v(" "),s("el-dropdown-item",{attrs:{divided:"",command:"logout"}},[e._v("退出")])],1)],1)],1),e._v(" "),s("el-container",[s("el-aside",{attrs:{width:"200px"}},[s("Aside")],1),e._v(" "),s("el-main",[s("router-view")],1)],1)],1)},staticRenderFns:[]};var o=s("VU/8")(n,a,!1,function(e){s("cLPj")},null,null);t.default=o.exports}});