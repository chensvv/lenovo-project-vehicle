webpackJsonp([56],{"U9/X":function(e,t){},vyH1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("gRE1"),n=a.n(i),s=a("pWbq"),o=a("2hMI"),l=a("krqS"),r={data:function(){return{pickerOptions:{disabledDate:function(e){var t=Date.now();return e.getTime()>t}},list:[],perList:[],totalClass:"8",currentItem:{hotName:"",pronounceName:"",vdm:"",dataType:""},addList:{hotName:"",pronounceName:"",vdm:"",matcherPattern:"",dataType:""},searchItem:{hotName:"",vdm:"",pickerVal:[],dataType:""},addRules:{hotName:[{required:!0,message:"请输入热词名称",trigger:"change"}],pronounceName:[{required:!0,message:"请输入说法",trigger:"change"}],vdm:[{required:!0,message:"请选择VDM",trigger:"change"}],dataType:[{required:!0,message:"请选择数据类型",trigger:"change"}]},editRules:{hotName:[{required:!0,message:"请输入热词名称",trigger:"change"}],pronounceName:[{required:!0,message:"请输入说法",trigger:"change"}],vdm:[{required:!0,message:"请选择VDM",trigger:"change"}],dataType:[{required:!0,message:"请选择数据类型",trigger:"change"}]},dataTypeArr:[{id:1,typeLabel:"纠正数据",typeVal:"1"},{id:2,typeLabel:"新增数据",typeVal:"2"}],editVisible:!1,addVisible:!1,currentPage:1,pageSize:10,totalCount:1,showTitle:!0,seaBtnLoading:!1,addBtnLoading:!1,editBtnLoading:!1,uploadVisible:!1,fileBtnLoading:!1,file:[],listLoading:!0,isshow:!0}},created:function(){var e=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(t){e.perList.push(n()(t).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("dict:update")&&-1==this.perList.indexOf("dict:del")&&(this.isshow=!1)},methods:{onShowNameTipsMouseenter:function(e){var t=e.target,a=t.clientWidth,i=t.scrollWidth;this.showTitle=!(a<i)},formTime:function(e,t){var a=e.upTime,i=new Date(a);return i.getFullYear()+"-"+Object(s.a)(i.getMonth()+1)+"-"+Object(s.a)(i.getDate())+" "+Object(s.a)(i.getHours())+":"+Object(s.a)(i.getMinutes())},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.listLoading=!0,this.getList()},handleEdit:function(e,t){this.editVisible=!0,this.currentItem={id:t.id,hotName:t.name,pronounceName:t.pronounceName,matcherPattern:t.matcherPattern,vdm:t.vdm,dataType:t.dataType}},handleDel:function(e,t){var a=this,i={id:t.id};i.sign=Object(l.a)(i),this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o._15)(i).then(function(e){200==e.data.code?(a.$message({message:"删除成功",type:"success",duration:1500}),a.getList()):a.$message({message:e.data.errorMessage,type:"error",duration:1500})})}).catch(function(e){console.log(e)})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},closeFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].clearValidate()})},editHandleClose:function(){this.editVisible=!1},addHandleClose:function(){this.addVisible=!1},editHandleConfirm:function(e){var t=this,a={id:this.currentItem.id,vdm:this.currentItem.vdm,name:this.currentItem.hotName,matcherPattern:this.currentItem.matcherPattern,pronounceName:this.currentItem.pronounceName,dataType:this.currentItem.dataType};a.sign=Object(l.a)(a),this.$refs[e].validate(function(e){if(!e)return!1;t.editBtnLoading=!0,Object(o._14)(a).then(function(e){t.editBtnLoading=!1,200==e.data.code?(t.$message({message:"编辑成功",type:"success",duration:1500}),t.getList(),t.editVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1500})}).catch(function(e){t.editBtnLoading=!1})})},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this,a={name:this.addList.hotName,vdm:this.addList.vdm,pronounceName:this.addList.pronounceName,matcherPattern:this.addList.matcherPattern,dataType:this.addList.dataType};a.sign=Object(l.a)(a),this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(o._14)(a).then(function(e){t.addBtnLoading=!1,200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1500}),t.getList(),t.addVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1500})}).catch(function(e){t.addBtnLoading=!1})})},importExcel:function(){this.uploadVisible=!0},beforeUpload:function(e){var t="xls"===e.name.split(".")[1],a="xlsx"===e.name.split(".")[1];return t||a?t||a:(this.$message.warning("上传文件必须是Excel格式!"),!1)},handleExceed:function(e,t){this.$message.warning("当前限制选择 1 个文件，请删除后继续上传")},uploadFile:function(e){this.file=e.file},postFile:function(){var e=this;if(""==this.file)return this.$message.warning("请选择要上传的文件！"),!1;var t=this.file,a=new FormData;a.append("file",t),this.fileBtnLoading=!0,Object(o._16)(a).then(function(t){e.fileBtnLoading=!1,200==t.data.code?(e.$message({message:t.data.msg,type:"success"}),e.$refs.upload.clearFiles(),e.uploadVisible=!1,e.getList()):e.$message({message:t.data.errorMessage,type:"error",duration:1500})}).catch(function(t){e.fileBtnLoading=!1})},closeFile:function(){this.$refs.upload.clearFiles(),this.uploadVisible=!1},getList:function(){var e=this;this.listLoading=!0;var t={pgstr:this.currentPage,pcstr:this.pageSize,startStr:this.searchItem.pickerVal[0],endStr:this.searchItem.pickerVal[1],name:this.searchItem.hotName,vdm:this.searchItem.vdm,dataType:this.searchItem.dataType};t.sign=Object(l.a)(t),Object(o._17)(t).then(function(t){e.listLoading=!1,200==t.data.code?(e.list=t.data.data,e.totalCount=t.data.count,e.totalClass=t.data.data.length):e.$message({message:t.data.errorMessage,type:"error",duration:1500})}).catch(function(){e.listLoading=!1})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table height-105"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/csc/csc"}}},[e._v("闲聊数据")]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(this.$route.meta.title))])],1),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline height70 width130",attrs:{inline:!0,model:e.searchItem,"label-width":"90px",size:"mini"}},[a("div",{staticClass:"form-input height70"},[a("el-form-item",{attrs:{label:"热词",prop:"hotName"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.hotName,callback:function(t){e.$set(e.searchItem,"hotName","string"==typeof t?t.trim():t)},expression:"searchItem.hotName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"VDM",prop:"vdm"}},[a("el-select",{attrs:{placeholder:"--",clearable:""},model:{value:e.searchItem.vdm,callback:function(t){e.$set(e.searchItem,"vdm",t)},expression:"searchItem.vdm"}},[a("el-option",{attrs:{label:"all",value:"all"}}),e._v(" "),a("el-option",{attrs:{label:"les",value:"les"}}),e._v(" "),a("el-option",{attrs:{label:"app",value:"app"}}),e._v(" "),a("el-option",{attrs:{label:"vod",value:"vod"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"数据类型",prop:"dataType"}},[a("el-select",{attrs:{placeholder:"--",clearable:""},model:{value:e.searchItem.dataType,callback:function(t){e.$set(e.searchItem,"dataType","string"==typeof t?t.trim():t)},expression:"searchItem.dataType"}},[a("el-option",{attrs:{label:"纠正数据",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"新增数据",value:"2"}})],1)],1),e._v(" "),a("el-form-item",{staticClass:"date-form",attrs:{label:"日期",prop:"pickerVal"}},[a("el-date-picker",{attrs:{type:"daterange",align:"center",size:"mini","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd","default-value":new Date((new Date).setMonth((new Date).getMonth()-1))},model:{value:e.searchItem.pickerVal,callback:function(t){e.$set(e.searchItem,"pickerVal",t)},expression:"searchItem.pickerVal"}})],1)],1),e._v(" "),a("div",{staticClass:"form-btn"},[a("el-button",{attrs:{size:"mini",type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"enginedict:add",expression:"'enginedict:add'"}],attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"enginedict:excel",expression:"'enginedict:excel'"}],attrs:{size:"mini",icon:"el-icon-upload"},on:{click:function(t){return e.importExcel()}}},[e._v("导入数据")])],1)]),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],class:this.totalClass<="7"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:e.list,stripe:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},[a("el-table-column",{attrs:{type:"index",align:"center",label:"#"}}),e._v(" "),a("el-table-column",{attrs:{label:"VDM",prop:"vdm",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.vdm,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.vdm)+"\n                      ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.vdm)+"\n                  ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"热词",prop:"name",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.name,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.name)+"\n                      ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.name)+"\n                  ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"发音",prop:"pronounceName",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.pronounceName,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.pronounceName)+"\n                      ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.pronounceName)+"\n                  ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"数据类型",prop:"dataType",align:"centr","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s("1"==t.row.dataType?"纠正数据":"新增数据"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"匹配模式",prop:"matcherPattern",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.matcherPattern,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.matcherPattern)+"\n                      ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.matcherPattern)+"\n                  ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"更新时间",prop:"upTime",align:"center",formatter:e.formTime,width:"130"}}),e._v(" "),e.isshow?a("el-table-column",{attrs:{label:"操作",align:"center",width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"enginedict:add",expression:"'enginedict:add'"}],attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"enginedict:del",expression:"'enginedict:del'"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}],null,!1,278430775)}):e._e()],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:"编辑",visible:e.editVisible,width:"40%",top:"10vh","before-close":e.editHandleClose},on:{"update:visible":function(t){e.editVisible=t},close:function(t){return e.closeFun("currentItem")}}},[a("el-form",{ref:"currentItem",attrs:{"label-position":"right","label-width":"100px",size:"small",rules:e.editRules,model:e.currentItem}},[a("el-form-item",{attrs:{label:"热词",prop:"hotName"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.hotName,callback:function(t){e.$set(e.currentItem,"hotName","string"==typeof t?t.trim():t)},expression:"currentItem.hotName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"词语发音",prop:"pronounceName"}},[a("el-input",{attrs:{type:"text",placeholder:"(如热词为‘A180’，此处可填写‘诶裔巴绫’)","auto-complete":"off"},model:{value:e.currentItem.pronounceName,callback:function(t){e.$set(e.currentItem,"pronounceName","string"==typeof t?t.trim():t)},expression:"currentItem.pronounceName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"匹配模式",prop:"matcherPattern"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.matcherPattern,callback:function(t){e.$set(e.currentItem,"matcherPattern","string"==typeof t?t.trim():t)},expression:"currentItem.matcherPattern"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"VDM",prop:"vdm"}},[a("el-select",{attrs:{placeholder:"--"},model:{value:e.currentItem.vdm,callback:function(t){e.$set(e.currentItem,"vdm",t)},expression:"currentItem.vdm"}},[a("el-option",{attrs:{label:"all",value:"all"}}),e._v(" "),a("el-option",{attrs:{label:"les",value:"les"}}),e._v(" "),a("el-option",{attrs:{label:"app",value:"app"}}),e._v(" "),a("el-option",{attrs:{label:"vod",value:"vod"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"数据类型",prop:"dataType"}},[a("el-select",{attrs:{placeholder:"--"},model:{value:e.currentItem.dataType,callback:function(t){e.$set(e.currentItem,"dataType",t)},expression:"currentItem.dataType"}},e._l(e.dataTypeArr,function(e,t){return a("el-option",{key:t,attrs:{label:e.typeLabel,value:e.id}})}),1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.editHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.editBtnLoading},on:{click:function(t){return e.editHandleConfirm("currentItem")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:"新增",visible:e.addVisible,width:"40%",top:"10vh","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[a("el-form",{ref:"addList",attrs:{"label-position":"right","label-width":"100px",size:"small",rules:e.addRules,model:e.addList}},[a("el-form-item",{attrs:{label:"热词",prop:"hotName"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.hotName,callback:function(t){e.$set(e.addList,"hotName","string"==typeof t?t.trim():t)},expression:"addList.hotName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"词语发音",prop:"pronounceName"}},[a("el-input",{attrs:{type:"text",placeholder:"(如热词为‘A180’，此处可填写‘诶裔巴绫’)","auto-complete":"off"},model:{value:e.addList.pronounceName,callback:function(t){e.$set(e.addList,"pronounceName","string"==typeof t?t.trim():t)},expression:"addList.pronounceName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"匹配模式",prop:"matcherPattern"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.matcherPattern,callback:function(t){e.$set(e.addList,"matcherPattern","string"==typeof t?t.trim():t)},expression:"addList.matcherPattern"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"VDM",prop:"vdm"}},[a("el-select",{attrs:{placeholder:"--"},model:{value:e.addList.vdm,callback:function(t){e.$set(e.addList,"vdm",t)},expression:"addList.vdm"}},[a("el-option",{attrs:{label:"all",value:"all"}}),e._v(" "),a("el-option",{attrs:{label:"les",value:"les"}}),e._v(" "),a("el-option",{attrs:{label:"app",value:"app"}}),e._v(" "),a("el-option",{attrs:{label:"vod",value:"vod"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"数据类型",prop:"dataType"}},[a("el-select",{attrs:{placeholder:"--"},model:{value:e.addList.dataType,callback:function(t){e.$set(e.addList,"dataType",t)},expression:"addList.dataType"}},[a("el-option",{attrs:{label:"纠正数据",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"新增数据",value:"2"}})],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{staticClass:"eldialog",attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:"上传文件",visible:e.uploadVisible,width:"40%",top:"10vh","before-close":e.closeFile},on:{"update:visible":function(t){e.uploadVisible=t}}},[a("el-form",{staticClass:"eldialogForm"},[a("el-form-item",{attrs:{label:""}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{drag:"","before-upload":e.beforeUpload,"on-exceed":e.handleExceed,limit:1,"http-request":e.uploadFile,multiple:"",action:""}},[a("i",{staticClass:"el-icon-upload"}),e._v(" "),a("div",{staticClass:"el-upload__text"},[e._v("\n            将文件拖到此处，或\n            "),a("em",[e._v("点击上传")])]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传Excel文件，且每次只能上传一个文件")])])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.closeFile()}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.fileBtnLoading},on:{click:function(t){return e.postFile()}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(r,c,!1,function(e){a("U9/X")},"data-v-4c33dc45",null);t.default=d.exports}});