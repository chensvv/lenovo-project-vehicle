webpackJsonp([18],{"FAu/":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("gRE1"),i=s.n(a),n=s("2hMI"),o={data:function(){return{addList:{ipAddress:"",port:"",weight:"",scene:"",language:"",rate:"",channel:""},list:[],data:[],perList:[],totalClass:"",addRules:{ipAddress:[{required:!0,message:"请输入ip地址",trigger:"change"}],port:[{required:!0,message:"请输入端口",trigger:"change"}],weight:[{required:!0,message:"请输入权重",trigger:"change"}],scene:[{required:!0,message:"请输入场景",trigger:"change"}],language:[{required:!0,message:"请输入语言",trigger:"change"}],rate:[{required:!0,message:"请输入比率",trigger:"change"}],channel:[{required:!0,message:"请输入来源",trigger:"change"}]},currentPage:1,pageSize:10,totalCount:1,showTitle:!0,btnLoading:!1,addVisible:!1,addBtnLoading:!1,listLoading:!0,isshow:!0}},created:function(){var e=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(t){e.perList.push(i()(t).join())}),this.pageList()},mounted:function(){-1==this.perList.indexOf("app:cachedel")&&(this.isshow=!1)},methods:{onShowNameTipsMouseenter:function(e){var t=e.target,s=t.clientWidth,a=t.scrollWidth;this.showTitle=!(s<a)},pageList:function(){var e=this;this.listLoading=!0;Object(n.w)({}).then(function(t){e.listLoading=!1,200==t.data.code?(e.data=JSON.parse(t.data.data),e.getList()):e.$message({message:t.data.errorMessage,type:"error",duration:1e3})}).catch(function(){e.listLoading=!1})},getList:function(){var e=this;this.listLoading=!1,this.list=this.data.filter(function(t,s){return s<e.currentPage*e.pageSize&&s>=e.pageSize*(e.currentPage-1)}),this.totalCount=this.data.length,this.totalClass=this.list.length},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.listLoading=!0,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.listLoading=!0,this.getList()},handleBtn:function(e,t){var s=this,a={ipAddress:t.ipAddress,port:t.port};Object(n.v)(a).then(function(e){200==e.data.code?(s.$message({message:"操作成功",type:"success",duration:1e3}),s.pageList()):s.$message.error("错误")})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},addHandleClose:function(){this.addVisible=!1},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this,s={ipAddress:this.addList.ipAddress,port:this.addList.port,weight:this.addList.weight,scene:this.addList.scene,language:this.addList.language,rate:this.addList.rate,channel:this.addList.channel};this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(n.u)(s).then(function(e){t.addBtnLoading=!1,200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.pageList(),t.addVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(e){t.addBtnLoading=!1})})}}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"table height-85"},[s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),e._v(" "),s("el-breadcrumb-item",{attrs:{to:{path:"/audiokeeper/list"}}},[e._v("服务管理")]),e._v(" "),s("el-breadcrumb-item",[e._v(e._s(this.$route.meta.title))])],1),e._v(" "),s("el-form",{staticClass:"demo-form-inline height50 width130",staticStyle:{"padding-left":"10px"},attrs:{inline:!0,"label-width":"90px",size:"mini"}},[s("div",{staticClass:"form-btn"},[s("el-button",{directives:[{name:"has",rawName:"v-has",value:"audiokeeper:add",expression:"'audiokeeper:add'"}],attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")])],1)]),e._v(" "),s("div",{staticClass:"table-box"},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],class:this.totalClass<="9"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:e.list}},[s("el-table-column",{attrs:{type:"index",align:"center",label:"#"}}),e._v(" "),s("el-table-column",{attrs:{label:"ip",prop:"ipAddress",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.ipAddress,placement:"top"}},[s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.ipAddress)+"\n                    ")])]),e._v(" "),e.showTitle?s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.ipAddress)+"\n                ")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"端口",prop:"port",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.port,placement:"top"}},[s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.port)+"\n                    ")])]),e._v(" "),e.showTitle?s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.port)+"\n                ")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"权重",prop:"weight",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.weight,placement:"top"}},[s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.weight)+"\n                    ")])]),e._v(" "),e.showTitle?s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.weight)+"\n                ")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"场景",prop:"scene",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.scene,placement:"top"}},[s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.scene)+"\n                    ")])]),e._v(" "),e.showTitle?s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.scene)+"\n                ")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"语言",prop:"language",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.language,placement:"top"}},[s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.language)+"\n                    ")])]),e._v(" "),e.showTitle?s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.language)+"\n                ")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"比率",prop:"rate",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.rate,placement:"top"}},[s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.rate)+"\n                    ")])]),e._v(" "),e.showTitle?s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.rate)+"\n                ")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"来源",prop:"channel",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.channel,placement:"top"}},[s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.channel)+"\n                    ")])]),e._v(" "),e.showTitle?s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.channel)+"\n                ")]):e._e()]}}])}),e._v(" "),e.isshow?s("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{directives:[{name:"has",rawName:"v-has",value:"audiokeeper:expire",expression:"'audiokeeper:expire'"}],attrs:{size:"mini",type:"warning"},on:{click:function(s){return e.handleBtn(t.$index,t.row)}}},[e._v("过期")])]}}],null,!1,466400599)}):e._e()],1),e._v(" "),s("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),s("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"40%",top:"10vh","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[s("el-form",{ref:"addList",attrs:{"label-position":"right","label-width":"100px",size:"small",rules:e.addRules,model:e.addList}},[s("el-form-item",{attrs:{label:"ip",prop:"ipAddress"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.ipAddress,callback:function(t){e.$set(e.addList,"ipAddress","string"==typeof t?t.trim():t)},expression:"addList.ipAddress"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"端口",prop:"port"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.port,callback:function(t){e.$set(e.addList,"port","string"==typeof t?t.trim():t)},expression:"addList.port"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"权重",prop:"weight"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.weight,callback:function(t){e.$set(e.addList,"weight","string"==typeof t?t.trim():t)},expression:"addList.weight"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"场景",prop:"scene"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.scene,callback:function(t){e.$set(e.addList,"scene","string"==typeof t?t.trim():t)},expression:"addList.scene"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"语言",prop:"language"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.language,callback:function(t){e.$set(e.addList,"language","string"==typeof t?t.trim():t)},expression:"addList.language"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"比率",prop:"rate"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.rate,callback:function(t){e.$set(e.addList,"rate","string"==typeof t?t.trim():t)},expression:"addList.rate"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"来源",prop:"channel"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.channel,callback:function(t){e.$set(e.addList,"channel","string"==typeof t?t.trim():t)},expression:"addList.channel"}})],1)],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var l=s("VU/8")(o,r,!1,function(e){s("nkNC")},"data-v-e6d8af78",null);t.default=l.exports},nkNC:function(e,t){}});