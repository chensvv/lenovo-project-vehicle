webpackJsonp([19],{"5aPv":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("gRE1"),a=i.n(n),s=i("pWbq"),r=i("2hMI"),o={data:function(){return{list:[],perList:[],currentItem:{id:"",unit:""},addList:{unit:""},searchItem:{unit:""},addRules:{unit:[{required:!0,message:"请输入要求名称",trigger:"change"}]},editRules:{unit:[{required:!0,message:"请输入要求名称",trigger:"blur"}]},editVisible:!1,addVisible:!1,currentPage:1,pageSize:10,pageSizes:[10,20,30],totalCount:1,seaBtnLoading:!1,addBtnLoading:!1,editBtnLoading:!1,listLoading:!0,AIMLBtnLoading:!1,isshow:!0}},created:function(){var t=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(e){t.perList.push(a()(e).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("unit:update")&&-1==this.perList.indexOf("unit:del")&&(this.isshow=!1)},methods:{formTime:function(t,e){var i=t.updateTime,n=new Date(i);return n.getFullYear()+"-"+Object(s.a)(n.getMonth()+1)+"-"+Object(s.a)(n.getDate())+" "+Object(s.a)(n.getHours())+":"+Object(s.a)(n.getMinutes())},formTime2:function(t,e){var i=t.createTime,n=new Date(i);return n.getFullYear()+"-"+Object(s.a)(n.getMonth()+1)+"-"+Object(s.a)(n.getDate())+" "+Object(s.a)(n.getHours())+":"+Object(s.a)(n.getMinutes())},resetForm:function(t){this.$refs[t].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(t){this.pageSize=t,this.currentPage=1,this.getList()},handleCurrentChange:function(t){this.currentPage=t,console.log("当前页: "+t),this.getList()},handleEdit:function(t,e){this.editVisible=!0,this.currentItem={id:e.id,unit:e.unit}},handleDel:function(t,e){var i=this,n={id:e.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r._86)(n).then(function(t){200==t.data.code?(i.$message({message:"删除成功",type:"success",duration:1e3}),i.getList()):i.$message({message:t.data.errorMessage,type:"error",duration:1e3})})}).catch(function(t){console.log(t)})},openFun:function(t){var e=this;this.$nextTick(function(){e.$refs[t]&&e.$refs[t].resetFields()})},closeFun:function(t){var e=this;this.$nextTick(function(){e.$refs[t]&&e.$refs[t].clearValidate()})},editHandleClose:function(){this.editVisible=!1},addHandleClose:function(){this.addVisible=!1},editHandleConfirm:function(t){var e=this,i={id:this.currentItem.id,ask:this.currentItem.unit};this.$refs[t].validate(function(t){if(!t)return!1;e.editBtnLoading=!0,Object(r._89)(i).then(function(t){e.editBtnLoading=!1,200==t.data.code?(e.$message({message:"编辑成功",type:"success",duration:1e3}),e.getList(),e.editVisible=!1):e.$message({message:t.data.errorMessage,type:"error",duration:1e3})}).catch(function(t){e.editBtnLoading=!1})})},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(t){var e=this,i={ask:this.addList.unit};this.$refs[t].validate(function(t){if(!t)return!1;e.addBtnLoading=!0,Object(r._85)(i).then(function(t){e.addBtnLoading=!1,200==t.data.code?(e.$message({message:"添加成功",type:"success",duration:1e3}),e.getList(),e.addVisible=!1):e.$message({message:t.data.errorMessage,type:"error",duration:1e3})}).catch(function(t){e.addBtnLoading=!1})})},buildAIML:function(){var t=this;this.AIMLBtnLoading=!0,Object(r._88)().then(function(e){t.AIMLBtnLoading=!1,200==e.data.code?t.$message({message:e.data.msg,type:"success",duration:1e3}):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(e){t.AIMLBtnLoading=!1})},getList:function(){var t=this,e={pgstr:this.currentPage,pcstr:this.pageSize,ask:this.searchItem.unit};Object(r._87)(e).then(function(e){t.listLoading=!1,t.list=e.data.data,t.totalCount=e.data.count})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),i("el-breadcrumb-item",[t._v("闲聊数据")]),t._v(" "),t._l(t.$route.meta,function(e,n){return i("el-breadcrumb-item",{key:n},[t._v(t._s(e))])})],2),t._v(" "),i("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:t.searchItem,size:"mini"}},[i("el-form-item",{attrs:{label:"unit",prop:"unit"}},[i("el-input",{attrs:{clearable:""},model:{value:t.searchItem.unit,callback:function(e){t.$set(t.searchItem,"unit","string"==typeof e?e.trim():e)},expression:"searchItem.unit"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",loading:t.seaBtnLoading},on:{click:t.onSubmit}},[t._v("查询")]),t._v(" "),i("el-button",{on:{click:function(e){return t.resetForm("searchItem")}}},[t._v("重置")])],1),t._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"unit:pub",expression:"'unit:pub'"}],staticClass:"success",attrs:{size:"mini",loading:t.AIMLBtnLoading},on:{click:function(e){return t.buildAIML()}}},[t._v("生成AIML")]),t._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"unit:add",expression:"'unit:add'"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(e){return t.handleAdd()}}},[t._v("添加")])],1),t._v(" "),i("div",{staticClass:"table-box"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list}},[i("el-table-column",{attrs:{type:"index",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{label:"unit",prop:"unit",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{label:"创建时间",prop:"createTime",align:"center",formatter:t.formTime2}}),t._v(" "),i("el-table-column",{attrs:{label:"更新时间",prop:"updateTime",align:"center",formatter:t.formTime,"min-width":"120"}}),t._v(" "),t.isshow?i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{directives:[{name:"has",rawName:"v-has",value:"unit:update",expression:"'unit:update'"}],attrs:{size:"mini"},on:{click:function(i){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"unit:del",expression:"'unit:del'"}],attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.handleDel(e.$index,e.row)}}},[t._v("删除")])]}}],null,!1,1900819383)}):t._e()],1),t._v(" "),i("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1),t._v(" "),i("el-dialog",{attrs:{title:"编辑",visible:t.editVisible,width:"300","before-close":t.editHandleClose},on:{"update:visible":function(e){t.editVisible=e},close:function(e){return t.closeFun("currentItem")}}},[i("el-form",{ref:"currentItem",attrs:{"label-position":"left","label-width":"120px",rules:t.editRules,model:t.currentItem}},[i("el-form-item",{attrs:{label:"unit",prop:"unit"}},[i("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.currentItem.unit,callback:function(e){t.$set(t.currentItem,"unit","string"==typeof e?e.trim():e)},expression:"currentItem.unit"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.editHandleClose}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary",loading:t.editBtnLoading},on:{click:function(e){return t.editHandleConfirm("currentItem")}}},[t._v("确 定")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"新增",visible:t.addVisible,width:"300","before-close":t.addHandleClose},on:{"update:visible":function(e){t.addVisible=e},open:function(e){return t.openFun("addList")}}},[i("el-form",{ref:"addList",attrs:{"label-position":"left","label-width":"100px",rules:t.addRules,model:t.addList}},[i("el-form-item",{attrs:{label:"unit",prop:"unit"}},[i("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.addList.unit,callback:function(e){t.$set(t.addList,"unit","string"==typeof e?e.trim():e)},expression:"addList.unit"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.addHandleClose}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary",loading:t.addBtnLoading},on:{click:function(e){return t.addHandleConfirm("addList")}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var u=i("VU/8")(o,l,!1,function(t){i("Vt8T")},"data-v-86cb6706",null);e.default=u.exports},Vt8T:function(t,e){}});