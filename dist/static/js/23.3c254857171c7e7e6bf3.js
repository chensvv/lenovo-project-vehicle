webpackJsonp([23],{"Hoz/":function(t,e){},qoUw:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("gRE1"),a=i.n(n),o=i("pWbq"),s=i("2hMI"),r={data:function(){return{list:[],perList:[],infoList:[],phoneList:[],grayList:[],totalClass:"",currentItem:{id:"",gray:"",version:""},editRules:{},editVisible:!1,infoVisible:!1,currentPage:1,pageSize:10,totalCount:1,showTitle:!0,editBtnLoading:!1,listLoading:!0,infoListLoading:!0,isshow:!0,issueshow:!0}},created:function(){var t=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(e){t.perList.push(a()(e).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("history:updateGray")&&(this.isshow=!1),-1==this.perList.indexOf("history:details")&&(this.issueshow=!1)},methods:{onShowNameTipsMouseenter:function(t){var e=t.target,i=e.clientWidth,n=e.scrollWidth;this.showTitle=!(i<n)},formTime:function(t,e){var i=t.createTime,n=new Date(i);return n.getFullYear()+"-"+Object(o.a)(n.getMonth()+1)+"-"+Object(o.a)(n.getDate())+" "+Object(o.a)(n.getHours())+":"+Object(o.a)(n.getMinutes())},handleSizeChange:function(t){this.pageSize=t,this.currentPage=1,this.getList()},handleCurrentChange:function(t){this.currentPage=t,this.getList()},handleEdit:function(t,e){this.getGrayList(),this.editVisible=!0,this.currentItem={id:e.id,version:e.version,gray:JSON.parse("["+e.grayId+"]")}},closeFun:function(t){var e=this;this.$nextTick(function(){e.$refs[t]&&e.$refs[t].clearValidate()})},editHandleClose:function(){this.editVisible=!1},infoHandleClose:function(){this.infoList=[],this.infoVisible=!1},handleDel:function(t,e){var i=this,n={id:e.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s._28)(n).then(function(t){200==t.data.code?(i.$message({message:"删除成功",type:"success",duration:1e3}),i.getList()):i.$message({message:t.data.errorMessage,type:"error",duration:1e3})})}).catch(function(t){console.log(t)})},editHandleConfirm:function(t){var e=this,i={id:this.currentItem.id,grayId:this.currentItem.gray.join()};this.$refs[t].validate(function(t){if(!t)return!1;e.editBtnLoading=!0,Object(s._22)(i).then(function(t){e.editBtnLoading=!1,200==t.data.code?(e.$message({message:"编辑成功",type:"success",duration:1e3}),e.getList(),e.editVisible=!1):e.$message({message:t.data.errorMessage,type:"error",duration:1e3})}).catch(function(t){e.editBtnLoading=!1})})},handleInfo:function(t,e){var i=this;this.getPhoneTypeList();var n={resources:e.resources};this.infoListLoading=!0,Object(s._29)(n).then(function(t){200==t.data.code?(i.infoVisible=!0,i.infoListLoading=!1,i.infoList=t.data.data):i.$message({message:t.data.errorMessage,type:"error",duration:1e3})}).catch(function(t){})},getList:function(){var t=this;this.listLoading=!0;Object(s._30)({}).then(function(e){t.listLoading=!1,200==e.data.code?(t.list=e.data.data,t.totalCount=e.data.count,t.totalClass=e.data.data.length):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(){t.listLoading=!1})},getPhoneTypeList:function(){var t=this;Object(s.R)({parentCode:3}).then(function(e){t.phoneList=e.data.data})},getGrayList:function(){var t=this,e={pgstr:this.pageSize,pcstr:this.currentPage};Object(s._21)(e).then(function(e){t.grayList=e.data.data})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table height-85"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),i("el-breadcrumb-item",{attrs:{to:{path:"/qa/list"}}},[t._v("规则定义")]),t._v(" "),i("el-breadcrumb-item",{attrs:{to:{path:"/showmode/conf"}}},[t._v("资源发布")]),t._v(" "),i("el-breadcrumb-item",[t._v(t._s(this.$route.meta.title))])],1),t._v(" "),i("div",{staticClass:"table-box"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],class:this.totalClass<="7"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:t.list}},[i("el-table-column",{attrs:{type:"index",align:"center",label:"#"}}),t._v(" "),i("el-table-column",{attrs:{label:"版本号",prop:"version",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.version,placement:"top"}},[i("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.version)+"\n                    ")])]),t._v(" "),t.showTitle?i("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.version)+"\n                ")]):t._e()]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"发布时间",prop:"createTime",align:"center",formatter:t.formTime,"min-width":"120"}}),t._v(" "),t.isshow?i("el-table-column",{attrs:{label:"灰度",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{directives:[{name:"has",rawName:"v-has",value:"history:updateGray",expression:"'history:updateGray'"}],attrs:{size:"mini"},on:{click:function(i){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")])]}}],null,!1,25406760)}):t._e(),t._v(" "),i("el-table-column",{attrs:{label:"是否灰度",prop:"isGray",align:"center","min-width":"80","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s("0"==e.row.isGray?"不灰度":"灰度"))])]}}])}),t._v(" "),t.issueshow?i("el-table-column",{attrs:{label:"操作",align:"center","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{directives:[{name:"has",rawName:"v-has",value:"history:details",expression:"'history:details'"}],attrs:{size:"mini"},on:{click:function(i){return t.handleInfo(e.$index,e.row)}}},[t._v("详情")]),t._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"history:delete",expression:"'history:delete'"}],attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.handleDel(e.$index,e.row)}}},[t._v("删除")])]}}],null,!1,1854793281)}):t._e()],1),t._v(" "),i("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1),t._v(" "),i("el-dialog",{attrs:{title:"编辑",visible:t.editVisible,width:"40%",top:"10vh","before-close":t.editHandleClose},on:{"update:visible":function(e){t.editVisible=e},close:function(e){return t.closeFun("currentItem")}}},[i("el-form",{ref:"currentItem",attrs:{"label-position":"right","label-width":"120px",size:"small",rules:t.editRules,model:t.currentItem}},[i("el-form-item",{attrs:{label:"版本号"}},[i("el-input",{attrs:{type:"text",readonly:"","auto-complete":"off"},model:{value:t.currentItem.version,callback:function(e){t.$set(t.currentItem,"version","string"==typeof e?e.trim():e)},expression:"currentItem.version"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"新灰度内容",prop:"gray"}},[i("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:t.currentItem.gray,callback:function(e){t.$set(t.currentItem,"gray",e)},expression:"currentItem.gray"}},t._l(t.grayList,function(t){return i("el-option",{key:t.grayId,attrs:{label:t.name,value:t.grayId}})}),1)],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.editHandleClose}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary",loading:t.editBtnLoading},on:{click:function(e){return t.editHandleConfirm("currentItem")}}},[t._v("确 定")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"详情",visible:t.infoVisible,width:"70%","before-close":t.infoHandleClose},on:{"update:visible":function(e){t.infoVisible=e}}},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.infoListLoading,expression:"infoListLoading"}],class:this.totalCount<=5?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:t.infoList,height:"400"}},[i("el-table-column",{attrs:{type:"index",align:"center",label:"#"}}),t._v(" "),i("el-table-column",{attrs:{label:"渠道",prop:"channelStr",align:"left","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{label:"资源图片",align:"left"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("img",{staticClass:"thum",attrs:{src:t.row.phoneImg}})]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"资源说明",prop:"description",align:"left","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{label:"名称",prop:"name",align:"left","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{label:"类型",prop:"typeStr",align:"left","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{label:"VIP",prop:"vip",align:"left","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s("0"==e.row.vip?"否":"是"))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"付费",prop:"paid",align:"left","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s("0"==e.row.paid?"否":"是"))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"机型",align:"left",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-select",{attrs:{multiple:"",disabled:"",placeholder:"请选择"},model:{value:e.row.modelConfigList,callback:function(i){t.$set(e.row,"modelConfigList",i)},expression:"scope.row.modelConfigList"}},t._l(t.phoneList,function(t){return i("el-option",{key:t.id,attrs:{label:t.context,value:t.id}})}),1)]}}])})],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.infoHandleClose}},[t._v("关 闭")])],1)],1)],1)},staticRenderFns:[]};var c=i("VU/8")(r,l,!1,function(t){i("Hoz/")},"data-v-8d78c71e",null);e.default=c.exports}});