webpackJsonp([26],{"4myv":function(e,t){},v3Rh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("pWbq"),i=a("2hMI"),s={data:function(){return{list:[],currentItem:{id:"",name:"",alias:"",wapUrl:""},addList:{name:"",alias:"",wapUrl:""},searchItem:{name:"",source:"",refreshTime:"",putTime:""},addRules:{name:[{required:!0,message:"请输入网站名称add",trigger:"change"}],alias:[{required:!0,message:"请输入说法",trigger:"change"}],wapUrl:[{required:!0,message:"请输入手机网址",trigger:"change"}]},editRules:{name:[{required:!0,message:"请输入网站名称add",trigger:"blur"}],alias:[{required:!0,message:"请输入说法",trigger:"blur"}],wapUrl:[{required:!0,message:"请输入手机网址",trigger:"blur"}]},editVisible:!1,addVisible:!1,currentPage:1,pageSize:10,pageSizes:[10,20,30],totalCount:1,seaBtnLoading:!1,addBtnLoading:!1,editBtnLoading:!1}},created:function(){this.getList()},methods:{formTime:function(e,t){var a=e.createTime,i=new Date(a);return i.getFullYear()+"-"+Object(r.a)(i.getMonth()+1)+"-"+Object(r.a)(i.getDate())+" "+Object(r.a)(i.getHours())+":"+Object(r.a)(i.getMinutes())},resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleEdit:function(e,t){this.editVisible=!0,this.currentItem={id:t.id,name:t.name,alias:t.alias,wapUrl:t.wapUrl}},handleDel:function(e,t){var a=this,r={id:t.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i._90)(r).then(function(e){200==e.data.code?(a.$message({message:"删除成功",type:"success",duration:1e3}),a.getList()):a.$message({message:e.data.errorMessage,type:"error",duration:1e3})})}).catch(function(){})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},closeFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].clearValidate()})},editHandleClose:function(){this.editVisible=!1},addHandleClose:function(){this.addVisible=!1},editHandleConfirm:function(e){var t=this,a={id:this.currentItem.id,name:this.currentItem.name,alias:this.currentItem.alias,wapUrl:this.currentItem.wapUrl};this.$refs[e].validate(function(e){if(!e)return!1;t.editBtnLoading=!0,Object(i._92)(a).then(function(e){200==e.data.code?(t.$message({message:"编辑成功",type:"success",duration:1e3}),t.getList(),t.editBtnLoading=!1,t.editVisible=!1):(t.editBtnLoading=!1,t.$message({message:e.data.errorMessage,type:"error",duration:1e3}))})})},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this,a={name:this.addList.name,alias:this.addList.alias,wapUrl:this.addList.wapUrl};this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(i._89)(a).then(function(e){200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.getList(),t.addVisible=!1,t.addBtnLoading=!1):(t.$message({message:e.data.errorMessage,type:"error",duration:1e3}),t.addBtnLoading=!1)})})},getList:function(){var e=this,t={title:this.searchItem.name,source:this.searchItem.source,startStr:this.searchItem.refreshTime,endStr:this.searchItem.putTime,pgstr:this.currentPage,pcstr:this.pageSize};Object(i._91)(t).then(function(t){e.list=t.data.data.data,e.totalCount=t.data.data.total})}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("闲聊数据")]),e._v(" "),e._l(e.$route.meta,function(t,r){return a("el-breadcrumb-item",{key:r},[e._v(e._s(t))])})],2),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[a("el-form-item",{attrs:{label:"网站名",prop:"name"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.name,callback:function(t){e.$set(e.searchItem,"name","string"==typeof t?t.trim():t)},expression:"searchItem.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"来源",prop:"source"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.source,callback:function(t){e.$set(e.searchItem,"source","string"==typeof t?t.trim():t)},expression:"searchItem.source"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"开始时间",prop:"refreshTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.searchItem.refreshTime,callback:function(t){e.$set(e.searchItem,"refreshTime",t)},expression:"searchItem.refreshTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"结束时间",prop:"putTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.searchItem.putTime,callback:function(t){e.$set(e.searchItem,"putTime",t)},expression:"searchItem.putTime"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"was:add",expression:"'was:add'"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")])],1),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[a("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"网站名称",prop:"name",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"别名",prop:"alias",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"手机网址",prop:"wapUrl",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"WEB网址",prop:"url",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"来源",prop:"source",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"更新时间",prop:"createTime",align:"center",formatter:e.formTime}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"was:update",expression:"'was:update'"}],attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"was:delete",expression:"'was:delete'"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"300","before-close":e.editHandleClose},on:{"update:visible":function(t){e.editVisible=t},close:function(t){return e.closeFun("currentItem")}}},[a("el-form",{ref:"currentItem",attrs:{"label-position":"left","label-width":"120px",rules:e.editRules,model:e.currentItem}},[a("el-form-item",{attrs:{label:"网站名称modify",prop:"name"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.name,callback:function(t){e.$set(e.currentItem,"name","string"==typeof t?t.trim():t)},expression:"currentItem.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"说法",prop:"alias"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.alias,callback:function(t){e.$set(e.currentItem,"alias","string"==typeof t?t.trim():t)},expression:"currentItem.alias"}}),e._v(" "),a("span",{staticStyle:{"font-size":"12px"}},[e._v("(多个说法用' / '分隔。例：网址导航/联想导航)")])],1),e._v(" "),a("el-form-item",{attrs:{label:"手机网址",prop:"wapUrl"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.wapUrl,callback:function(t){e.$set(e.currentItem,"wapUrl","string"==typeof t?t.trim():t)},expression:"currentItem.wapUrl"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.editHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.editBtnLoading},on:{click:function(t){return e.editHandleConfirm("currentItem")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"300","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[a("el-form",{ref:"addList",attrs:{"label-position":"left","label-width":"120px",rules:e.addRules,model:e.addList}},[a("el-form-item",{attrs:{label:"网站名称add",prop:"name"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.name,callback:function(t){e.$set(e.addList,"name","string"==typeof t?t.trim():t)},expression:"addList.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"说法",prop:"alias"}},[a("el-input",{attrs:{type:"text",placeholder:"(多个说法用' / '分隔。例：网址导航/联想导航)","auto-complete":"off"},model:{value:e.addList.alias,callback:function(t){e.$set(e.addList,"alias","string"==typeof t?t.trim():t)},expression:"addList.alias"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机网址",prop:"wapUrl"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.wapUrl,callback:function(t){e.$set(e.addList,"wapUrl","string"==typeof t?t.trim():t)},expression:"addList.wapUrl"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(s,n,!1,function(e){a("4myv")},"data-v-6e16a206",null);t.default=l.exports}});