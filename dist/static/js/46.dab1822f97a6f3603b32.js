webpackJsonp([46],{"20SV":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("pWbq"),i=a("2hMI"),s={data:function(){return{list:[],sourceList:[],addList:{command:"",interFaceId:""},searchItem:{command:""},addRules:{command:[{required:!0,message:"请输入用户query",trigger:"change"}],interFaceId:[{required:!0,message:"请选择预设指令",trigger:"change"}]},addVisible:!1,currentPage:1,pageSize:10,pageSizes:[10,20,30],totalCount:1,seaBtnLoading:!1,addBtnLoading:!1,listLoading:!0}},created:function(){this.getList()},methods:{formTime:function(e,t){var a=e.updateTime,i=new Date(a);return i.getFullYear()+"-"+Object(n.a)(i.getMonth()+1)+"-"+Object(n.a)(i.getDate())+" "+Object(n.a)(i.getHours())+":"+Object(n.a)(i.getMinutes())},resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,console.log("当前页: "+e),this.getList()},handleDel:function(e,t){var a=this,n={id:t.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.D)(n).then(function(e){200==e.data.code?(a.$message({message:"删除成功",type:"success",duration:1e3}),a.getList()):a.$message({message:e.data.errorMessage,type:"error",duration:1e3})})}).catch(function(e){console.log(e)})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},addHandleClose:function(){this.addVisible=!1},handleAdd:function(){var e=this;Object(i.E)().then(function(t){e.sourceList=t.data}),this.addVisible=!0},addHandleConfirm:function(e){var t=this,a={command:this.addList.command,interfaceId:this.addList.interFaceId};this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(i.C)(a).then(function(e){t.addBtnLoading=!1,200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.getList(),t.addVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(e){t.addBtnLoading=!1})})},getList:function(){var e=this,t={command:this.searchItem.command,pgstr:this.currentPage,pcstr:this.pageSize};Object(i.F)(t).then(function(t){e.listLoading=!1,e.list=t.data.data,e.totalCount=t.data.count})},handleSong:function(){this.$router.push({path:"/command/norun/list"})},handleOriginal:function(){this.$router.push({path:"/command/mainlist"})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("LASF KV")]),e._v(" "),e._l(e.$route.meta,function(t,n){return a("el-breadcrumb-item",{key:n},[e._v(e._s(t))])})],2),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[a("el-form-item",{attrs:{label:"用户query",prop:"command"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.command,callback:function(t){e.$set(e.searchItem,"command","string"==typeof t?t.trim():t)},expression:"searchItem.command"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"command:add",expression:"'command:add'"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"command:norun:list",expression:"'command:norun:list'"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleSong()}}},[e._v("指令忽略管理")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"command:mainlist",expression:"'command:mainlist'"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleOriginal()}}},[e._v("原始指令管理")])],1),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list}},[a("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"用户query",prop:"command",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"预设指令",prop:"commandSeged",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"功能描述",prop:"commandSegedDelStop",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"修改时间",prop:"updateTime",align:"center",formatter:e.formTime}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"command:delete",expression:"'command:delete'"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"300","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[a("el-form",{ref:"addList",attrs:{"label-position":"left","label-width":"130px",rules:e.addRules,model:e.addList}},[a("el-form-item",{attrs:{label:"用户query",prop:"command"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.command,callback:function(t){e.$set(e.addList,"command","string"==typeof t?t.trim():t)},expression:"addList.command"}})],1),e._v(" "),a("el-form-item",{staticClass:"el__select",attrs:{label:"预设指令",prop:"interFaceId"}},[a("el-select",{attrs:{placeholder:"--",clearable:"",filterable:""},model:{value:e.addList.interFaceId,callback:function(t){e.$set(e.addList,"interFaceId",t)},expression:"addList.interFaceId"}},e._l(e.sourceList,function(t,n){return a("el-option",{key:n,attrs:{label:t.command,value:t.id}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.command))]),e._v(" "),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.commandInterface))])])}),1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(s,r,!1,function(e){a("ZJyO")},"data-v-1d42138e",null);t.default=o.exports},ZJyO:function(e,t){}});