webpackJsonp([33],{U8hO:function(e,t){},Vqo1:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("D7x1"),a=s("2hMI"),n={name:"applicationlist",components:{iTable:i.a},data:function(){return{list:[],appId:"",functionId:"",skillDetail:{appName:"",functionName:""},currentItem:{id:"",version:"",state:""},addList:{version:"",answer:""},strList:{minVer:"",maxVer:"",serIn:"",serCon:"",serNot:""},addRules:{version:[{required:!0,message:"请输入答案说明",trigger:"change"}],answer:[{required:!0,message:"请输入答案",trigger:"change"}]},editRules:{version:[{required:!0,message:"请输入答案说明",trigger:"blur"}],answer:[{required:!0,message:"请输入答案",trigger:"blur"}]},editVisible:!1,addVisible:!1,strVisible:!1,currentPage:1,pageSize:10,pageSizes:[10,20,30],totalCount:1,addBtnLoading:!1,editBtnLoading:!1,relBtnLoading:!1,strBtnLoading:!1}},created:function(){this.appId=this.$route.query.appId,this.functionId=this.$route.query.functionId,this.getList()},methods:{formVal:function(e,t){return!0===e.state?"true":"false"},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleEdit:function(e,t){this.editVisible=!0,this.currentItem={id:t.id,version:t.versionIllustration,answer:t.versionAnswer}},handleStr:function(e,t){this.strVisible=!0,this.strList={id:t.id,minVer:t.versionMinCode,maxVer:t.versionMaxCode}},handleDel:function(e,t){var s=this,i={versionId:t.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(a._19)(i).then(function(e){200==e.data.code?(s.$message({message:"删除成功",type:"success",duration:1e3}),s.getList()):s.$message({message:e.data.errorMessage,type:"error",duration:1e3})})}).catch(function(){})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},closeFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].clearValidate()})},editHandleClose:function(){this.editVisible=!1},addHandleClose:function(){this.addVisible=!1},editHandleConfirm:function(e){var t=this,s={versionId:this.currentItem.id,versionAnswer:this.currentItem.answer,versionIllustration:this.currentItem.version};this.$refs[e].validate(function(e){if(!e)return!1;t.editBtnLoading=!0,Object(a._22)(s).then(function(e){200==e.data.code?(t.$message({message:"修改成功",type:"success",duration:1e3}),t.getList(),t.editBtnLoading=!1,t.editVisible=!1):(t.editBtnLoading=!1,t.$message({message:e.data.errorMessage,type:"error",duration:1e3}),t.editBtnLoading=!1)})})},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this,s={versionAnswer:this.addList.answer,versionIllustration:this.addList.version};this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(a._18)(s).then(function(e){200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.getList(),t.addVisible=!1,t.addBtnLoading=!1):(t.$message({message:e.data.errorMessage,type:"error",duration:1e3}),t.addBtnLoading=!1)})})},strHandleClose:function(){this.strVisible=!1},strHandleConfirm:function(){var e=this;this.strBtnLoading=!0;var t={versionId:this.strList.id,minVersion:this.strList.minVer,maxVersion:this.strList.maxVer};Object(a._21)(t).then(function(t){200==t.data.code?(e.$message({message:"发布成功",type:"success",duration:1e3}),e.getList(),e.strVisible=!1,e.strBtnLoading=!1):(e.$message({message:t.data.errorMessage,type:"error",duration:1e3}),e.addBtnLoading=!1)})},getList:function(){var e=this,t={functionId:this.functionId,appId:this.appId,pgstr:this.currentPage,pcstr:this.pageSize};Object(a._20)(t).then(function(t){e.skillDetail.functionName=t.data.lasfControlFunction.functionName,e.list=t.data.lasfControlVersionPage.data,e.totalCount=t.data.lasfControlVersionPage.total});var s={id:this.appId};Object(a._5)(s).then(function(t){e.skillDetail.appName=t.data.appName})}}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"table"},[s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),s("el-breadcrumb-item",[e._v("LASF KV")]),e._v(" "),s("el-breadcrumb-item",{attrs:{to:{path:"/lasf-kv/skill"}}},[e._v("应用列表")]),e._v(" "),s("el-breadcrumb-item",{attrs:{to:{path:"/lasf-kv/skill/detail",query:{functionId:this.functionId,appId:this.appId}}}},[e._v("应用详情")]),e._v(" "),e._l(e.$route.meta,function(t,i){return s("el-breadcrumb-item",{key:i},[e._v(e._s(t))])})],2),e._v(" "),s("el-form",{staticClass:"demo-form-inline",staticStyle:{"text-align":"right"},attrs:{inline:!0,size:"mini"}},[s("div",{staticClass:"d_t"},[s("span",{staticClass:"d_title"},[e._v(e._s(e.skillDetail.appName)+"  >>")]),s("span",[e._v(e._s(e.skillDetail.functionName))])]),e._v(" "),s("el-form-item",[s("el-button",{directives:[{name:"has",rawName:"v-has",value:140,expression:"140"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")]),e._v(" "),s("router-link",{attrs:{to:{path:"/lasf-kv/skill/detail/speak",query:{functionId:this.functionId,appId:this.appId}}}},[s("el-button",{staticClass:"success",attrs:{size:"mini"}},[e._v("说法列表")])],1)],1)],1),e._v(" "),s("div",{staticClass:"table-box"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[s("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{label:"说明",prop:"versionIllustration",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{label:"启用",prop:"state",align:"center",formatter:e.formVal}}),e._v(" "),s("el-table-column",{attrs:{label:"调用次数",prop:"inc",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{label:"更新时间",prop:"displayUpdateTime",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{directives:[{name:"has",rawName:"v-has",value:141,expression:"141"}],attrs:{size:"mini"},on:{click:function(s){return e.handleEdit(t.$index,t.row)}}},[e._v("修改")]),e._v(" "),s("el-button",{directives:[{name:"has",rawName:"v-has",value:142,expression:"142"}],attrs:{size:"mini",type:"danger"},on:{click:function(s){return e.handleDel(t.$index,t.row)}}},[e._v("删除")]),e._v(" "),s("el-button",{directives:[{name:"has",rawName:"v-has",value:143,expression:"143"}],attrs:{size:"mini"},on:{click:function(s){return e.handleStr(t.$index,t.row)}}},[e._v("策略")])]}}])})],1),e._v(" "),s("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),s("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"300","before-close":e.editHandleClose},on:{"update:visible":function(t){e.editVisible=t},close:function(t){return e.closeFun("currentItem")}}},[s("el-form",{ref:"currentItem",attrs:{"label-position":"left","label-width":"80px",rules:e.editRules,model:e.currentItem}},[s("el-form-item",{attrs:{label:"说明",prop:"version"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.version,callback:function(t){e.$set(e.currentItem,"version",t)},expression:"currentItem.version"}})],1),e._v(" "),s("el-form-item",{staticClass:"ser_t",attrs:{label:"答案",prop:"answer"}},[s("el-input",{attrs:{type:"textarea","auto-complete":"off"},model:{value:e.currentItem.answer,callback:function(t){e.$set(e.currentItem,"answer",t)},expression:"currentItem.answer"}})],1)],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.editHandleClose}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary",loading:e.editBtnLoading},on:{click:function(t){return e.editHandleConfirm("currentItem")}}},[e._v("确 定")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"添加答案",visible:e.addVisible,width:"300","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[s("el-form",{ref:"addList",attrs:{"label-position":"left","label-width":"0px",rules:e.addRules,model:e.addList}},[s("el-form-item",{attrs:{prop:"version"}},[s("el-input",{attrs:{type:"text",placeholder:"在此处添加说明","auto-complete":"off"},model:{value:e.addList.version,callback:function(t){e.$set(e.addList,"version",t)},expression:"addList.version"}})],1),e._v(" "),s("el-form-item",{staticClass:"ser_text",attrs:{prop:"answer"}},[s("el-input",{attrs:{type:"textarea",placeholder:"在此处添加答案","auto-complete":"off"},model:{value:e.addList.answer,callback:function(t){e.$set(e.addList,"answer",t)},expression:"addList.answer"}})],1)],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"发布策略",visible:e.strVisible,width:"300","before-close":e.strHandleClose},on:{"update:visible":function(t){e.strVisible=t}}},[s("el-form",{ref:"strList",attrs:{"label-position":"left","label-width":"80px"}},[s("el-form-item",{staticClass:"ver_text1",attrs:{label:"软件版本"}},[s("el-input",{attrs:{type:"text",placeholder:"最小版本","auto-complete":"off"},model:{value:e.strList.minVer,callback:function(t){e.$set(e.strList,"minVer",t)},expression:"strList.minVer"}}),e._v(" - \n                "),s("el-input",{attrs:{type:"text",placeholder:"最大版本","auto-complete":"off"},model:{value:e.strList.maxVer,callback:function(t){e.$set(e.strList,"maxVer",t)},expression:"strList.maxVer"}})],1),e._v(" "),s("el-form-item",{staticClass:"ver_text2",attrs:{label:"型号"}},[s("el-input",{attrs:{type:"text",placeholder:"in","auto-complete":"off"},model:{value:e.strList.serIn,callback:function(t){e.$set(e.strList,"serIn",t)},expression:"strList.serIn"}}),e._v(" "),s("el-input",{attrs:{type:"text",placeholder:"contains","auto-complete":"off"},model:{value:e.strList.serCon,callback:function(t){e.$set(e.strList,"serCon",t)},expression:"strList.serCon"}}),e._v(" "),s("el-input",{attrs:{type:"text",placeholder:"not","auto-complete":"off"},model:{value:e.strList.serNot,callback:function(t){e.$set(e.strList,"serNot",t)},expression:"strList.serNot"}})],1)],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.strHandleClose}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary",loading:e.strBtnLoading},on:{click:e.strHandleConfirm}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var o=s("VU/8")(n,r,!1,function(e){s("U8hO")},"data-v-14cea100",null);t.default=o.exports}});