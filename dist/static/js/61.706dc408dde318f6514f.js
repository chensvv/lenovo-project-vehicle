webpackJsonp([61],{Da7z:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("gRE1"),i=a.n(n),s=a("pWbq"),o=a("2hMI"),r={data:function(){return{list:[],perList:[],sourceList:[],totalClass:"",addList:{command:"",interFaceId:""},searchItem:{command:""},addRules:{command:[{required:!0,message:"请输入用户query",trigger:"change"}]},addVisible:!1,currentPage:1,pageSize:10,totalCount:1,showTitle:!0,seaBtnLoading:!1,addBtnLoading:!1,listLoading:!0,isshow:!0}},created:function(){var t=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(e){t.perList.push(i()(e).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("command:norun:delete")&&(this.isshow=!1)},methods:{onShowNameTipsMouseenter:function(t){var e=t.target,a=e.clientWidth,n=e.scrollWidth;this.showTitle=!(a<n)},formTime:function(t,e){var a=t.updateTime,n=new Date(a);return n.getFullYear()+"-"+Object(s.a)(n.getMonth()+1)+"-"+Object(s.a)(n.getDate())+" "+Object(s.a)(n.getHours())+":"+Object(s.a)(n.getMinutes())},resetForm:function(t){this.$refs[t].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(t){this.pageSize=t,this.currentPage=1,this.getList()},handleCurrentChange:function(t){this.currentPage=t,this.getList()},handleDel:function(t,e){var a=this,n={id:e.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o._68)(n).then(function(t){200==t.data.code?(a.$message({message:"删除成功",type:"success",duration:1e3}),a.getList()):a.$message({message:t.data.errorMessage,type:"error",duration:1e3})})}).catch(function(t){console.log(t)})},openFun:function(t){var e=this;this.$nextTick(function(){e.$refs[t]&&e.$refs[t].resetFields()})},addHandleClose:function(){this.addVisible=!1},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(t){var e=this,a={command:this.addList.command};this.$refs[t].validate(function(t){if(!t)return!1;e.addBtnLoading=!0,Object(o._67)(a).then(function(t){e.addBtnLoading=!1,200==t.data.code?(e.$message({message:"添加成功",type:"success",duration:1e3}),e.getList(),e.addVisible=!1):e.$message({message:t.data.errorMessage,type:"error",duration:1e3})}).catch(function(t){e.addBtnLoading=!1})})},getList:function(){var t=this;this.listLoading=!0;var e={command:this.searchItem.command,pgstr:this.currentPage,pcstr:this.pageSize};Object(o._69)(e).then(function(e){t.listLoading=!1,200==e.data.code&&(t.list=e.data.data,t.totalCount=e.data.count,t.totalClass=e.data.data.length)}).catch(function(){t.listLoading=!1})},handleCommand:function(){this.$router.push({path:"/command/list"})},handleOriginal:function(){this.$router.push({path:"/command/mainlist"})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table height-85"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("技能管理")]),t._v(" "),t._l(t.$route.meta,function(e,n){return a("el-breadcrumb-item",{key:n},[t._v(t._s(e))])})],2),t._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline height50 width130",attrs:{inline:!0,model:t.searchItem,"label-width":"90px",size:"mini"}},[a("div",{staticClass:"form-input height50"},[a("el-form-item",{attrs:{label:"用户query",prop:"command"}},[a("el-input",{attrs:{clearable:""},model:{value:t.searchItem.command,callback:function(e){t.$set(t.searchItem,"command","string"==typeof e?e.trim():e)},expression:"searchItem.command"}})],1)],1),t._v(" "),a("div",{staticClass:"form-btn"},[a("el-button",{attrs:{size:"mini",type:"primary",loading:t.seaBtnLoading},on:{click:t.onSubmit}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.resetForm("searchItem")}}},[t._v("重置")]),t._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"command:norun:add",expression:"'command:norun:add'"}],attrs:{size:"mini"},on:{click:function(e){return t.handleAdd()}}},[t._v("添加")]),t._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"command:list",expression:"'command:list'"}],attrs:{size:"mini"},on:{click:function(e){return t.handleCommand()}}},[t._v("相似度命令关联")]),t._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"command:mainlist",expression:"'command:mainlist'"}],attrs:{size:"mini"},on:{click:function(e){return t.handleOriginal()}}},[t._v("原始指令管理")])],1)]),t._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],class:this.totalClass<="7"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:t.list}},[a("el-table-column",{attrs:{type:"index",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{label:"用户query",prop:"command",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.command,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                        "+t._s(e.row.command)+"\n                        ")])]),t._v(" "),t.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                        "+t._s(e.row.command)+"\n                    ")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"修改时间",prop:"updateTime",align:"center",formatter:t.formTime,"min-width":"120"}}),t._v(" "),t.isshow?a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"command:norun:delete",expression:"'command:norun:delete'"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDel(e.$index,e.row)}}},[t._v("删除")])]}}],null,!1,3765542191)}):t._e()],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1),t._v(" "),a("el-dialog",{attrs:{title:"新增",visible:t.addVisible,width:"300","before-close":t.addHandleClose},on:{"update:visible":function(e){t.addVisible=e},open:function(e){return t.openFun("addList")}}},[a("el-form",{ref:"addList",attrs:{"label-position":"right","label-width":"130px",size:"small",rules:t.addRules,model:t.addList}},[a("el-form-item",{attrs:{label:"用户query",prop:"command"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.addList.command,callback:function(e){t.$set(t.addList,"command","string"==typeof e?e.trim():e)},expression:"addList.command"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.addHandleClose}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.addBtnLoading},on:{click:function(e){return t.addHandleConfirm("addList")}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(r,l,!1,function(t){a("lfxx")},"data-v-2a355a51",null);e.default=d.exports},lfxx:function(t,e){}});