webpackJsonp([40],{"4qmz":function(e,t){},gUe2:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("pWbq"),a=i("2hMI"),s={data:function(){return{list:[],currentItem:{id:"",unit:""},addList:{unit:""},searchItem:{unit:""},addRules:{unit:[{required:!0,message:"请输入要求名称",trigger:"change"}]},editRules:{unit:[{required:!0,message:"请输入要求名称",trigger:"blur"}]},editVisible:!1,addVisible:!1,currentPage:1,pageSize:10,pageSizes:[10,20,30],totalCount:1,seaBtnLoading:!1,addBtnLoading:!1,editBtnLoading:!1}},created:function(){this.getList()},methods:{formTime:function(e,t){var i=e.updateTime,a=new Date(i);return a.getFullYear()+"-"+Object(n.a)(a.getMonth()+1)+"-"+Object(n.a)(a.getDate())+" "+Object(n.a)(a.getHours())+":"+Object(n.a)(a.getMinutes())},formTime2:function(e,t){var i=e.createTime,a=new Date(i);return a.getFullYear()+"-"+Object(n.a)(a.getMonth()+1)+"-"+Object(n.a)(a.getDate())+" "+Object(n.a)(a.getHours())+":"+Object(n.a)(a.getMinutes())},resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleEdit:function(e,t){this.editVisible=!0,this.currentItem={id:t.id,unit:t.unit}},handleDel:function(e,t){var i=this,n={id:t.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(a._75)(n).then(function(e){200==e.data.code?(i.$message({message:"删除成功",type:"success",duration:1e3}),i.getList()):i.$message({message:e.data.errorMessage,type:"error",duration:1e3})})}).catch(function(){})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},closeFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].clearValidate()})},editHandleClose:function(){this.editVisible=!1},addHandleClose:function(){this.addVisible=!1},editHandleConfirm:function(e){var t=this,i={id:this.currentItem.id,ask:this.currentItem.unit};this.$refs[e].validate(function(e){if(!e)return!1;t.editBtnLoading=!0,Object(a._78)(i).then(function(e){200==e.data.code?(t.$message({message:"编辑成功",type:"success",duration:1e3}),t.getList(),t.editBtnLoading=!1,t.editVisible=!1):(t.editBtnLoading=!1,t.$message({message:e.data.errorMessage,type:"error",duration:1e3}))})})},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this,i={ask:this.addList.unit};this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(a._74)(i).then(function(e){200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.getList(),t.addBtnLoading=!1,t.addVisible=!1):(t.addBtnLoading=!1,t.$message({message:e.data.errorMessage,type:"error",duration:1e3}))})})},buildAIML:function(){var e=this;Object(a._77)().then(function(t){200==t.data.code?e.$message({message:t.data.msg,type:"success",duration:1e3}):e.$message({message:t.data.errorMessage,type:"error",duration:1e3})})},getList:function(){var e=this,t={pgstr:this.currentPage,pcstr:this.pageSize,ask:this.searchItem.unit};Object(a._76)(t).then(function(t){e.list=t.data.data,e.totalCount=t.data.count})}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"table"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),i("el-breadcrumb-item",[e._v("闲聊数据")]),e._v(" "),e._l(e.$route.meta,function(t,n){return i("el-breadcrumb-item",{key:n},[e._v(e._s(t))])})],2),e._v(" "),i("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[i("el-form-item",{attrs:{label:"unit",prop:"unit"}},[i("el-input",{attrs:{clearable:""},model:{value:e.searchItem.unit,callback:function(t){e.$set(e.searchItem,"unit","string"==typeof t?t.trim():t)},expression:"searchItem.unit"}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),i("el-button",{on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1),e._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"unit:pub",expression:"'unit:pub'"}],staticClass:"success",attrs:{size:"mini",loading:e.AIMLBtnLoading},on:{click:function(t){return e.buildAIML()}}},[e._v("生成AIML")]),e._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"unit:add",expression:"'unit:add'"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")])],1),e._v(" "),i("div",{staticClass:"table-box"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[i("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{label:"unit",prop:"unit",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{label:"创建时间",prop:"createTime",align:"center",formatter:e.formTime2}}),e._v(" "),i("el-table-column",{attrs:{label:"更新时间",prop:"updateTime",align:"center",formatter:e.formTime}}),e._v(" "),i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{directives:[{name:"has",rawName:"v-has",value:"unit:update",expression:"'unit:update'"}],attrs:{size:"mini"},on:{click:function(i){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"unit:del",expression:"'unit:del'"}],attrs:{size:"mini",type:"danger"},on:{click:function(i){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),i("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),i("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"300","before-close":e.editHandleClose},on:{"update:visible":function(t){e.editVisible=t},close:function(t){return e.closeFun("currentItem")}}},[i("el-form",{ref:"currentItem",attrs:{"label-position":"left","label-width":"120px",rules:e.editRules,model:e.currentItem}},[i("el-form-item",{attrs:{label:"unit",prop:"unit"}},[i("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.unit,callback:function(t){e.$set(e.currentItem,"unit","string"==typeof t?t.trim():t)},expression:"currentItem.unit"}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.editHandleClose}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.editBtnLoading},on:{click:function(t){return e.editHandleConfirm("currentItem")}}},[e._v("确 定")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"300","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[i("el-form",{ref:"addList",attrs:{"label-position":"left","label-width":"100px",rules:e.addRules,model:e.addList}},[i("el-form-item",{attrs:{label:"unit",prop:"unit"}},[i("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.unit,callback:function(t){e.$set(e.addList,"unit","string"==typeof t?t.trim():t)},expression:"addList.unit"}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var o=i("VU/8")(s,r,!1,function(e){i("4qmz")},"data-v-385095de",null);t.default=o.exports}});