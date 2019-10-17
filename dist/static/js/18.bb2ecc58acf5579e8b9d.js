webpackJsonp([18],{f1mn:function(e,t){},ygwS:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("D7x1"),n=a("pWbq"),r=a("2hMI"),s={name:"applicationlist",components:{iTable:i.a},data:function(){var e=this;return{list:[],currentItem:{id:"",word:""},addList:{word:""},searchItem:{word:""},columns:[{prop:"word",label:"敏感词",align:"center",hasSort:!0},{prop:"it",label:"更新/入库时间",align:"center",hasSort:!0,render:function(e,t){var a=t.row.it,i=new Date(a);return e("span",i.getFullYear()+"-"+Object(n.a)(i.getMonth()+1)+"-"+Object(n.a)(i.getDate())+" "+Object(n.a)(i.getHours())+":"+Object(n.a)(i.getMinutes())+":"+Object(n.a)(i.getSeconds()))}}],options:{stripe:!1,loading:!1,highlightCurrentRow:!1,mutiSelect:!1,border:!1},operates:{width:150,show:!1,list:[{id:"1",label:"编辑",show:!0,plain:!0,disabled:!1,method:function(t,a){e.handleEdit(t,a)}},{id:"2",label:"删除",type:"danger",show:!0,plain:!1,disabled:!1,method:function(t,a){e.handleDel(t,a)}}]},addRules:{word:[{required:!0,message:"请输入敏感词名称",trigger:"change"}]},editRules:{word:[{required:!0,message:"请输入敏感词名称",trigger:"blur"}]},editVisible:!1,addVisible:!1,currentPage:1,pageSize:30,pageSizes:[10,20,30],totalCount:1,seaBtnLoading:!1,addBtnLoading:!1,editBtnLoading:!1}},created:function(){this.getList()},methods:{formTime:function(e,t){var a=e.it,i=new Date(a);return i.getFullYear()+"-"+Object(n.a)(i.getMonth()+1)+"-"+Object(n.a)(i.getDate())+" "+Object(n.a)(i.getMonth())+":"+Object(n.a)(i.getMinutes())+":"+Object(n.a)(i.getSeconds())},resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleEdit:function(e,t){this.editVisible=!0,this.currentItem={id:t.id,word:t.word}},handleDel:function(e,t){var a=this,i={id:t.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r._20)(i).then(function(e){200==e.data.code?(a.$message({message:"删除成功",type:"success",duration:1e3}),a.getList()):a.$message({message:e.data.errorMessage,type:"error",duration:1e3})})}).catch(function(){})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},closeFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].clearValidate()})},editHandleClose:function(){this.editVisible=!1},addHandleClose:function(){this.addVisible=!1},editHandleConfirm:function(e){var t=this,a={id:this.currentItem.id,word:this.currentItem.word};this.$refs[e].validate(function(e){if(!e)return!1;t.editBtnLoading=!0,Object(r._19)(a).then(function(e){200==e.data.code?(t.$message({message:"编辑成功",type:"success",duration:1e3}),t.getList(),t.editBtnLoading=!1,t.editVisible=!1):(t.editBtnLoading=!1,t.$message({message:e.data.errorMessage,type:"error",duration:1e3}))})})},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this,a={word:this.addList.word};this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(r._19)(a).then(function(e){200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.getList(),t.addVisible=!1,t.addBtnLoading=!1):(t.$message({message:e.data.errorMessage,type:"error",duration:1e3}),t.addBtnLoading=!1)})})},handlePub:function(){var e=this;Object(r._22)().then(function(t){200==t.data.code?(e.$message({message:"发布成功",type:"success",duration:1e3}),e.getList(),e.addVisible=!1,e.addBtnLoading=!1):(e.$message({message:t.data.errorMessage,type:"error",duration:1e3}),e.addBtnLoading=!1)})},getList:function(){var e=this,t={pgstr:this.currentPage,pcstr:this.pageSize,q:this.searchItem.word};Object(r._21)(t).then(function(t){e.list=t.data.data,e.totalCount=t.data.count})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("闲聊数据")]),e._v(" "),e._l(e.$route.meta,function(t,i){return a("el-breadcrumb-item",{key:i},[e._v(e._s(t))])})],2),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[a("el-form-item",{attrs:{label:"敏感词",prop:"word"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.word,callback:function(t){e.$set(e.searchItem,"word","string"==typeof t?t.trim():t)},expression:"searchItem.word"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:63,expression:"63"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAdd("addList")}}},[e._v("添加")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:64,expression:"64"}],staticClass:"success",attrs:{size:"mini"},on:{click:e.handlePub}},[e._v("发布")])],1),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[a("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"敏感词",prop:"word",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"更新/入库时间",prop:"it",align:"center",formatter:e.formTime}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:119,expression:"119"}],attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:65,expression:"65"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"300","before-close":e.editHandleClose},on:{"update:visible":function(t){e.editVisible=t},close:function(t){return e.closeFun("currentItem")}}},[a("el-form",{ref:"currentItem",attrs:{"label-position":"left","label-width":"80px",rules:e.editRules,model:e.currentItem}},[a("el-form-item",{attrs:{label:"敏感词",prop:"word"}},[a("el-input",{attrs:{type:"textarea","auto-complete":"off"},model:{value:e.currentItem.word,callback:function(t){e.$set(e.currentItem,"word","string"==typeof t?t.trim():t)},expression:"currentItem.word"}}),e._v(" "),a("span",{staticStyle:{"font-size":"12px"}},[e._v("编辑时不能带有换行")])],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.editHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.editBtnLoading},on:{click:function(t){return e.editHandleConfirm("currentItem")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"300","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[a("el-form",{ref:"addList",attrs:{"label-position":"left","label-width":"80px",rules:e.addRules,model:e.addList}},[a("el-form-item",{attrs:{label:"敏感词",prop:"word"}},[a("el-input",{attrs:{type:"textarea",placeholder:"可以一次增加多个，用换行分隔。","auto-complete":"off"},model:{value:e.addList.word,callback:function(t){e.$set(e.addList,"word","string"==typeof t?t.trim():t)},expression:"addList.word"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(s,o,!1,function(e){a("f1mn")},"data-v-691d2350",null);t.default=d.exports}});