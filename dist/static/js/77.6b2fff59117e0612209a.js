webpackJsonp([77],{"6QGq":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("gRE1"),i=a.n(s),n=a("pWbq"),l=a("2hMI"),o={data:function(){return{list:[],perList:[],totalClass:"",currentItem:{id:"",answer:"",speak:""},addList:{speak:"",answer:""},searchItem:{excel:"",speak:""},addRules:{speak:[{required:!0,message:"请输入问题",trigger:"change"}],answer:[{required:!0,message:"请输入答案",trigger:"change"}]},editRules:{speak:[{required:!0,message:"请输入问题",trigger:"blur"}],answer:[{required:!0,message:"请输入答案",trigger:"blur"}]},editVisible:!1,addVisible:!1,uploadVisible:!1,fileBtnLoading:!1,uploadVisible2:!1,fileBtnLoading2:!1,file:[],file2:[],currentPage:1,pageSize:10,totalCount:1,showTitle:!0,seaBtnLoading:!1,addBtnLoading:!1,editBtnLoading:!1,AIMLBtnLoading:!1,listLoading:!0,isshow:!0,btnshow:!0}},created:function(){var e=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(t){e.perList.push(i()(t).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("user:data")&&(this.isshow=!1),-1==this.perList.indexOf("qa:update")&&-1==this.perList.indexOf("qa:del")&&(this.btnshow=!1)},methods:{onShowNameTipsMouseenter:function(e){var t=e.target,a=t.clientWidth,s=t.scrollWidth;this.showTitle=!(a<s)},formTime:function(e,t){var a=e.createTime,s=new Date(a);return s.getFullYear()+"-"+Object(n.a)(s.getMonth()+1)+"-"+Object(n.a)(s.getDate())+" "+Object(n.a)(s.getHours())+":"+Object(n.a)(s.getMinutes())},formTime2:function(e,t){var a=e.updateTime,s=new Date(a);return s.getFullYear()+"-"+Object(n.a)(s.getMonth()+1)+"-"+Object(n.a)(s.getDate())+" "+Object(n.a)(s.getHours())+":"+Object(n.a)(s.getMinutes())},resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleEdit:function(e,t){this.editVisible=!0,this.currentItem={id:t.id,answer:t.answer,speak:t.speak}},handleDel:function(e,t){var a=this,s={id:t.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(l._77)(s).then(function(e){200==e.data.code?(a.$message({message:"删除成功",type:"success",duration:1e3}),a.getList()):a.$message({message:e.data.errorMessage,type:"error",duration:1e3})})}).catch(function(e){console.log(e)})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},closeFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].clearValidate()})},editHandleClose:function(){this.editVisible=!1},addHandleClose:function(){this.addVisible=!1},editHandleConfirm:function(e){var t=this,a={id:this.currentItem.id,q:this.currentItem.speak,a:this.currentItem.answer};this.$refs[e].validate(function(e){if(!e)return!1;t.editBtnLoading=!0,Object(l._81)(a).then(function(e){t.editBtnLoading=!1,200==e.data.code?(t.$message({message:"编辑成功",type:"success",duration:1e3}),t.getList(),t.editVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(e){t.editBtnLoading=!1})})},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this,a={q:this.addList.speak,a:this.addList.answer};this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(l._81)(a).then(function(e){t.addBtnLoading=!1,200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.getList(),t.addVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(e){t.addBtnLoading=!1})})},importExcel:function(){this.uploadVisible=!0},customExcel:function(){this.uploadVisible2=!0},beforeUpload:function(e){var t="xls"===e.name.split(".")[1],a="xlsx"===e.name.split(".")[1],s=e.size/1024<500;return t||a?s?t||a||s:(this.$message.warning("上传文件大小不能超过 500KB!"),!1):(this.$message.warning("上传文件必须是Excel格式!"),!1)},beforeUpload2:function(e){var t="xls"===e.name.split(".")[1],a="xlsx"===e.name.split(".")[1],s=e.size/1024<500;return t||a?s?t||a||s:(this.$message.warning("上传文件大小不能超过 500KB!"),!1):(this.$message.warning("上传文件必须是Excel格式!"),!1)},handleExceed:function(e,t){this.$message.warning("当前限制选择 1 个文件，请删除后继续上传")},handleExceed2:function(e,t){this.$message.warning("当前限制选择 1 个文件，请删除后继续上传")},uploadFile:function(e){this.file=e.file},uploadFile2:function(e){this.file2=e.file},postFile:function(){var e=this;if(""==this.file)return this.$message.warning("请选择要上传的文件！"),!1;var t=this.file,a=new FormData;a.append("ex",t),this.fileBtnLoading=!0,Object(l._82)(a).then(function(t){e.fileBtnLoading=!1,200==t.data.code?(e.$message({message:t.data.msg,type:"success"}),e.$refs.upload.clearFiles(),e.uploadVisible=!1,e.getList()):e.$message({message:t.data.errorMessage,type:"error",duration:1e3})}).catch(function(t){e.fileBtnLoading=!1})},postFile2:function(){var e=this;if(""==this.file2)return this.$message.warning("请选择要上传的文件！"),!1;var t=this.file2,a=new FormData;a.append("ex",t),this.fileBtnLoading2=!0,Object(l._78)(a).then(function(t){e.fileBtnLoading2=!1,200==t.data.code?(e.$message({message:t.data.msg,type:"success"}),e.$refs.upload2.clearFiles(),e.uploadVisible2=!1,e.getList()):e.$message({message:t.data.errorMessage,type:"error",duration:1e3})}).catch(function(t){e.fileBtnLoading2=!1})},closeFile:function(){this.$refs.upload.clearFiles(),this.uploadVisible=!1},closeFile2:function(){this.$refs.upload2.clearFiles(),this.uploadVisible2=!1},buildAIML:function(){var e=this;this.AIMLBtnLoading=!0,Object(l._80)().then(function(t){e.AIMLBtnLoading=!1,200==t.data.code?e.$message({message:t.data.msg,type:"success",duration:1e3}):e.$message({message:t.data.errorMessage,type:"error",duration:1e3})}).catch(function(t){e.AIMLBtnLoading=!1})},getList:function(){var e=this;this.listLoading=!0;var t={pgstr:this.currentPage,pcstr:this.pageSize,q:this.searchItem.speak,ex:this.searchItem.excel};Object(l._79)(t).then(function(t){e.listLoading=!1,200==t.data.code?(e.list=t.data.data,e.totalCount=t.data.count,e.totalClass=t.data.data.length):e.$message({message:t.data.errorMessage,type:"error",duration:1e3})}).catch(function(){e.listLoading=!1})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table height-85"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/qa/list"}}},[e._v("规则定义")]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(this.$route.meta.title))])],1),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline height50 width130",attrs:{inline:!0,model:e.searchItem,"label-width":"101px",size:"mini"}},[a("div",{staticClass:"form-input height50"},[a("el-form-item",{attrs:{label:"问题",prop:"speak"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.speak,callback:function(t){e.$set(e.searchItem,"speak","string"==typeof t?t.trim():t)},expression:"searchItem.speak"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"所属excel文件",prop:"excel"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.excel,callback:function(t){e.$set(e.searchItem,"excel","string"==typeof t?t.trim():t)},expression:"searchItem.excel"}})],1)],1),e._v(" "),a("div",{staticClass:"form-btn"},[a("el-button",{attrs:{size:"mini",type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"qa:pub",expression:"'qa:pub'"}],attrs:{size:"mini",loading:e.AIMLBtnLoading},on:{click:function(t){return e.buildAIML()}}},[e._v("生成AIML")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"qa:save",expression:"'qa:save'"}],attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"qa:excel",expression:"'qa:excel'"}],attrs:{icon:"el-icon-upload",size:"mini"},on:{click:function(t){return e.importExcel()}}},[e._v("导入Excel文件")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"qa:excel",expression:"'qa:excel'"}],attrs:{icon:"el-icon-upload",size:"mini"},on:{click:function(t){return e.customExcel()}}},[e._v("导入自定义Excel文件")])],1)]),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],class:this.totalClass<="7"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:e.list}},[a("el-table-column",{attrs:{type:"index",align:"center",label:"#"}}),e._v(" "),a("el-table-column",{attrs:{label:"问题",prop:"speak",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.speak,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.speak)+"\n                    ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.speak)+"\n                ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"答案",prop:"answer",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.answer,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.answer)+"\n                    ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.answer)+"\n                ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"所属excel文件",prop:"excel",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.excel,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.excel)+"\n                    ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.excel)+"\n                ")]):e._e()]}}])}),e._v(" "),e.isshow?a("el-table-column",{attrs:{label:"状态",prop:"status",align:"center","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{directives:[{name:"has",rawName:"v-has",value:"user:data",expression:"'user:data'"}]},[e._v(e._s(0==t.row.status?"已审批":1==t.row.status?"未审批":2==t.row.status?"申请拒绝":""))])]}}],null,!1,2807680840)}):e._e(),e._v(" "),a("el-table-column",{attrs:{label:"添加时间",prop:"createTime",align:"center",formatter:e.formTime,"min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{label:"更新时间",prop:"updateTime",align:"center",formatter:e.formTime2,"min-width":"120"}}),e._v(" "),e.btnshow?a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"qa:update",expression:"'qa:update'"}],attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"qa:del",expression:"'qa:del'"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}],null,!1,1179343799)}):e._e()],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"40%",top:"10vh","before-close":e.editHandleClose},on:{"update:visible":function(t){e.editVisible=t},close:function(t){return e.closeFun("currentItem")}}},[a("el-form",{ref:"currentItem",attrs:{"label-position":"right","label-width":"120px",size:"small",rules:e.editRules,model:e.currentItem}},[a("el-form-item",{attrs:{label:"问题",prop:"speak"}},[a("el-input",{attrs:{type:"textarea","auto-complete":"off"},model:{value:e.currentItem.speak,callback:function(t){e.$set(e.currentItem,"speak","string"==typeof t?t.trim():t)},expression:"currentItem.speak"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"答案",prop:"answer"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.answer,callback:function(t){e.$set(e.currentItem,"answer","string"==typeof t?t.trim():t)},expression:"currentItem.answer"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.editHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.editBtnLoading},on:{click:function(t){return e.editHandleConfirm("currentItem")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"40%",top:"10vh","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[a("el-form",{ref:"addList",attrs:{"label-position":"right","label-width":"100px",size:"small",rules:e.addRules,model:e.addList}},[a("el-form-item",{attrs:{label:"问题",prop:"speak"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.speak,callback:function(t){e.$set(e.addList,"speak","string"==typeof t?t.trim():t)},expression:"addList.speak"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"答案",prop:"answer"}},[a("el-input",{attrs:{type:"textarea","auto-complete":"off"},model:{value:e.addList.answer,callback:function(t){e.$set(e.addList,"answer","string"==typeof t?t.trim():t)},expression:"addList.answer"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{staticClass:"eldialog",attrs:{title:"上传文件",visible:e.uploadVisible,width:"40%",top:"10vh","before-close":e.closeFile},on:{"update:visible":function(t){e.uploadVisible=t}}},[a("el-form",{staticClass:"eldialogForm"},[a("el-form-item",{attrs:{label:""}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{drag:"","before-upload":e.beforeUpload,"on-exceed":e.handleExceed,limit:1,"http-request":e.uploadFile,multiple:"",action:""}},[a("i",{staticClass:"el-icon-upload"}),e._v(" "),a("div",{staticClass:"el-upload__text"},[e._v("\n            将文件拖到此处，或\n            "),a("em",[e._v("点击上传")])]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("1、只能上传Excel文件，且不超过500kb")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("2、由于需要生成AIML，所以excle文件请使用全英文")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("3、请编辑excel文件时，‘设置单元格格式’->‘文本’")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("4、第一列为‘问题’，第二列为'答案'")])])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.closeFile()}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.fileBtnLoading},on:{click:function(t){return e.postFile()}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{staticClass:"eldialog",attrs:{title:"上传文件",visible:e.uploadVisible2,width:"40%",top:"10vh","before-close":e.closeFile2},on:{"update:visible":function(t){e.uploadVisible2=t}}},[a("el-form",{staticClass:"eldialogForm"},[a("el-form-item",{attrs:{label:""}},[a("el-upload",{ref:"upload2",staticClass:"upload-demo",attrs:{drag:"","before-upload":e.beforeUpload2,"on-exceed":e.handleExceed2,limit:1,"http-request":e.uploadFile2,multiple:"",action:""}},[a("i",{staticClass:"el-icon-upload"}),e._v(" "),a("div",{staticClass:"el-upload__text"},[e._v("\n            将文件拖到此处，或\n            "),a("em",[e._v("点击上传")])]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("1、只能上传Excel文件，且不超过500kb")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("2、由于需要生成AIML，所以excle文件请使用全英文")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("3、请编辑excel文件时，‘设置单元格格式’->‘文本’")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("4、第一列为‘问题’，第二列为'答案'")])])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.closeFile2()}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.fileBtnLoading2},on:{click:function(t){return e.postFile2()}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(o,r,!1,function(e){a("A6jR")},"data-v-0bb4ea4c",null);t.default=c.exports},A6jR:function(e,t){}});