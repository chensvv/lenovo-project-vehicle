webpackJsonp([19],{u60l:function(e,t){},ygwS:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("gRE1"),s=i.n(a),n=i("pWbq"),o=i("2hMI"),r=i("FT/c"),l={data:function(){return{list:[],perList:[],totalClass:"",currentItem:{id:"",word:""},addList:{word:""},searchItem:{word:""},addRules:{word:[{required:!0,message:"请输入敏感词名称",trigger:"change"}]},editRules:{word:[{required:!0,message:"请输入敏感词名称",trigger:"blur"}]},editVisible:!1,addVisible:!1,currentPage:1,pageSize:10,totalCount:1,seaBtnLoading:!1,addBtnLoading:!1,editBtnLoading:!1,PubBtnLoading:!1,listLoading:!0,uploadVisible:!1,fileBtnLoading:!1,file:[],isshow:!0}},created:function(){var e=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(t){e.perList.push(s()(t).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("sen:update")&&-1==this.perList.indexOf("sen:del")&&(this.isshow=!1)},methods:{formTime:function(e,t){var i=e.it,a=new Date(i);return a.getFullYear()+"-"+Object(n.a)(a.getMonth()+1)+"-"+Object(n.a)(a.getDate())+" "+Object(n.a)(a.getMonth())+":"+Object(n.a)(a.getMinutes())},resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.listLoading=!0,this.getList()},handleEdit:function(e,t){this.editVisible=!0,this.currentItem={id:t.id,word:t.word}},handleDel:function(e,t){var i=this,a={id:t.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o._85)(a).then(function(e){200==e.data.code?(i.$message({message:"删除成功",type:"success",duration:1e3}),i.getList()):i.$message({message:e.data.errorMessage,type:"error",duration:1e3})})}).catch(function(e){console.log(e)})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},closeFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].clearValidate()})},editHandleClose:function(){this.editVisible=!1},addHandleClose:function(){this.addVisible=!1},editHandleConfirm:function(e){var t=this,i={id:this.currentItem.id,word:this.currentItem.word};this.$refs[e].validate(function(e){if(!e)return!1;t.editBtnLoading=!0,Object(o._84)(i).then(function(e){t.editBtnLoading=!1,200==e.data.code?(t.$message({message:"编辑成功",type:"success",duration:1e3}),t.getList(),t.editVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(e){t.editBtnLoading=!1})})},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this,i={word:this.addList.word};this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(o._84)(i).then(function(e){t.addBtnLoading=!1,200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.getList(),t.addVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(e){t.addBtnLoading=!1})})},handlePub:function(){var e=this;this.PubBtnLoading=!0,Object(o._88)().then(function(t){e.PubBtnLoading=!1,200==t.data.code?(e.$message({message:"发布成功",type:"success",duration:1e3}),e.getList()):e.$message({message:t.data.errorMessage,type:"error",duration:1e3})}).catch(function(t){e.PubBtnLoading=!1})},exportFile:function(){var e=r.a.proURL+"/lasf-mgr/sen/export";window.open(e)},importExcel:function(){this.uploadVisible=!0},beforeUpload:function(e){var t="xls"===e.name.split(".")[1],i="xlsx"===e.name.split(".")[1];return t||i?t||i:(this.$message.warning("上传文件必须是Excel格式!"),!1)},handleExceed:function(e,t){this.$message.warning("当前限制选择 1 个文件，请删除后继续上传")},uploadFile:function(e){this.file=e.file},postFile:function(){var e=this;if(""==this.file)return this.$message.warning("请选择要上传的文件！"),!1;var t=this.file,i=new FormData;i.append("file",t),this.fileBtnLoading=!0,Object(o._86)(i).then(function(t){e.fileBtnLoading=!1,200==t.data.code?(e.$message({message:t.data.msg,type:"success"}),e.$refs.upload.clearFiles(),e.uploadVisible=!1,e.getList()):e.$message({message:t.data.errorMessage,type:"error",duration:1e3})}).catch(function(t){e.fileBtnLoading=!1})},closeFile:function(){this.$refs.upload.clearFiles(),this.uploadVisible=!1},getList:function(){var e=this;this.listLoading=!0;var t={pgstr:this.currentPage,pcstr:this.pageSize,q:this.searchItem.word};Object(o._87)(t).then(function(t){e.listLoading=!1,e.list=t.data.data,e.totalCount=t.data.count,e.totalClass=t.data.data.length})}}},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"table sen"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),i("el-breadcrumb-item",[e._v("闲聊数据")]),e._v(" "),e._l(e.$route.meta,function(t,a){return i("el-breadcrumb-item",{key:a},[e._v(e._s(t))])})],2),e._v(" "),i("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[i("el-form-item",{attrs:{label:"敏感词",prop:"word"}},[i("el-input",{attrs:{clearable:""},model:{value:e.searchItem.word,callback:function(t){e.$set(e.searchItem,"word","string"==typeof t?t.trim():t)},expression:"searchItem.word"}})],1),e._v(" "),i("el-form-item",{staticClass:"sub-btn"},[i("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),i("el-button",{on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")]),e._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"sen:add",expression:"'sen:add'"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAdd("addList")}}},[e._v("添加")]),e._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"sen:pub",expression:"'sen:pub'"}],staticClass:"success",attrs:{size:"mini",loading:e.PubBtnLoading},on:{click:e.handlePub}},[e._v("发布")]),e._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"sen:excel",expression:"'sen:excel'"}],attrs:{icon:"el-icon-upload",size:"mini"},on:{click:function(t){return e.importExcel()}}},[e._v("导入数据")]),e._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"source:export",expression:"'source:export'"}],attrs:{size:"mini"},on:{click:function(t){return e.exportFile()}}},[e._v("导出数据")])],1)],1),e._v(" "),i("div",{staticClass:"table-box"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],class:this.totalClass<="5"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:e.list}},[i("el-table-column",{attrs:{type:"index",align:"left"}}),e._v(" "),i("el-table-column",{attrs:{label:"敏感词",prop:"word",align:"left","show-overflow-tooltip":!0}}),e._v(" "),i("el-table-column",{attrs:{label:"更新/入库时间",prop:"it",align:"left",formatter:e.formTime,"min-width":"120"}}),e._v(" "),e.isshow?i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{directives:[{name:"has",rawName:"v-has",value:"sen:update",expression:"'sen:update'"}],attrs:{size:"mini"},on:{click:function(i){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"sen:del",expression:"'sen:del'"}],attrs:{size:"mini",type:"danger"},on:{click:function(i){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}],null,!1,1084935863)}):e._e()],1),e._v(" "),i("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),i("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"300","before-close":e.editHandleClose},on:{"update:visible":function(t){e.editVisible=t},close:function(t){return e.closeFun("currentItem")}}},[i("el-form",{ref:"currentItem",attrs:{"label-position":"right","label-width":"80px",size:"small",rules:e.editRules,model:e.currentItem}},[i("el-form-item",{attrs:{label:"敏感词",prop:"word"}},[i("el-input",{attrs:{type:"textarea","auto-complete":"off"},model:{value:e.currentItem.word,callback:function(t){e.$set(e.currentItem,"word","string"==typeof t?t.trim():t)},expression:"currentItem.word"}}),e._v(" "),i("span",{staticStyle:{"font-size":"12px"}},[e._v("编辑时不能带有换行")])],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.editHandleClose}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.editBtnLoading},on:{click:function(t){return e.editHandleConfirm("currentItem")}}},[e._v("确 定")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"300","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[i("el-form",{ref:"addList",attrs:{"label-position":"right","label-width":"80px",size:"small",rules:e.addRules,model:e.addList}},[i("el-form-item",{attrs:{label:"敏感词",prop:"word"}},[i("el-input",{attrs:{type:"textarea",placeholder:"可以一次增加多个，用换行分隔。","auto-complete":"off"},model:{value:e.addList.word,callback:function(t){e.$set(e.addList,"word",t)},expression:"addList.word"}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1),e._v(" "),i("el-dialog",{staticClass:"eldialog",attrs:{title:"上传文件",visible:e.uploadVisible,width:"200","before-close":e.closeFile},on:{"update:visible":function(t){e.uploadVisible=t}}},[i("el-form",{staticClass:"eldialogForm"},[i("el-form-item",{attrs:{label:""}},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{drag:"","before-upload":e.beforeUpload,"on-exceed":e.handleExceed,limit:1,"http-request":e.uploadFile,multiple:"",action:""}},[i("i",{staticClass:"el-icon-upload"}),e._v(" "),i("div",{staticClass:"el-upload__text"},[e._v("\n              将文件拖到此处，或\n              "),i("em",[e._v("点击上传")])]),e._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传Excel文件，且每次只能上传一个文件")])])],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){return e.closeFile()}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.fileBtnLoading},on:{click:function(t){return e.postFile()}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var c=i("VU/8")(l,d,!1,function(e){i("u60l")},"data-v-ceaca7d8",null);t.default=c.exports}});