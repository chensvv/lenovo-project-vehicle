webpackJsonp([52],{hprw:function(t,e){},tJ41:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("gRE1"),o=i.n(a),s=i("pWbq"),n=i("iGF/"),r={data:function(){return{searchItem:{userName:""},list:[],perList:[],infoList:{lenovoId:"",userName:"",userDailyCloudasrCount:"",userDailyCloudttsCount:"",ak:"",sk:""},currentItem:{id:"",userDailyCloudasrCount:"",userDailyCloudttsCount:""},editRules:{userDailyCloudasrCount:[{required:!0,message:"请输入访问次数",trigger:"blur"}],userDailyCloudttsCount:[{required:!0,message:"请输入访问次数",trigger:"blur"}]},user:"",id:"",currentPage:1,pageSize:10,totalCount:1,editVisible:!1,editBtnLoading:!1,btnLoading:!1,infoVisible:!1,listLoading:!0,isshow:!0}},created:function(){var t=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(e){t.perList.push(o()(e).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("userinfo:detail")&&-1==this.perList.indexOf("userinfo:update")&&(this.isshow=!1)},methods:{formTime:function(t,e){var i=t.createTime,a=new Date(1e3*i);return a.getFullYear()+"-"+Object(s.a)(a.getMonth()+1)+"-"+Object(s.a)(a.getDate())+" "+Object(s.a)(a.getHours())+":"+Object(s.a)(a.getMinutes())},formTime2:function(t,e){var i=t.updateTime,a=new Date(1e3*i);return a.getFullYear()+"-"+Object(s.a)(a.getMonth()+1)+"-"+Object(s.a)(a.getDate())+" "+Object(s.a)(a.getHours())+":"+Object(s.a)(a.getMinutes())},resetForm:function(t){this.$refs[t].resetFields(),this.currentPage=1,this.getList()},closeFun:function(t){var e=this;this.$nextTick(function(){e.$refs[t]&&e.$refs[t].clearValidate()})},handleEdit:function(t,e){this.editVisible=!0,this.currentItem={id:e.id,userDailyCloudasrCount:e.userDailyCloudasrCount,userDailyCloudttsCount:e.userDailyCloudttsCount}},editHandleClose:function(){this.editVisible=!1},editHandleConfirm:function(t){var e=this,i={id:this.currentItem.id,userDailyCloudasrCount:this.currentItem.userDailyCloudasrCount,userDailyCloudttsCount:this.currentItem.userDailyCloudttsCount};this.$refs[t].validate(function(t){if(!t)return!1;e.editBtnLoading=!0,Object(n.v)(i).then(function(t){e.editBtnLoading=!1,200==t.data.code?(e.$message({message:"编辑成功",type:"success",duration:1e3}),e.getList(),e.editVisible=!1):e.$message({message:t.data.errorMessage,type:"error",duration:1e3})}).catch(function(t){e.editBtnLoading=!1})})},getAkSk:function(){var t=this,e={userName:this.infoList.userName,lenovoId:this.infoList.lenovoId};Object(n.i)(e).then(function(e){200==e.data.code?(t.$message({message:"更新成功",type:"success",duration:1e3}),t.getAkSkDetail()):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(t){console.log(t)})},getList:function(){var t=this;this.listLoading=!0;var e={pgstr:this.currentPage,pcstr:this.pageSize,q:this.searchItem.userName};Object(n.f)(e).then(function(e){t.listLoading=!1,t.list=e.data.data,t.totalCount=e.data.count})},rowClick:function(t,e){this.infoVisible=!0,this.user=e.userName,this.id=e.lenovoId,this.getAkSkDetail()},getAkSkDetail:function(){var t=this,e={userName:this.user,lenovoId:this.id};Object(n.e)(e).then(function(e){t.infoList={lenovoId:e.data.lenovoId,userName:e.data.userName,userDailyCloudasrCount:e.data.userDailyCloudasrCount,userDailyCloudttsCount:e.data.userDailyCloudttsCount,ak:e.data.lenovoKey,sk:e.data.secretKey}})},handleClose:function(){this.infoVisible=!1},handleConfirm:function(){this.infoVisible=!1},onSubmit:function(){this.btnLoading=!0,this.currentPage=1,this.getList(),this.btnLoading=!1},handleSizeChange:function(t){this.pageSize=t,this.currentPage=1,this.getList()},handleCurrentChange:function(t){this.currentPage=t,this.getList()}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table aksk"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),t._v(" "),i("el-breadcrumb-item",[t._v("权限管理")]),t._v(" "),t._l(t.$route.meta,function(e,a){return i("el-breadcrumb-item",{key:a},[t._v(t._s(e))])})],2),t._v(" "),i("el-form",{ref:"searchItem",staticClass:"demo-form-inline cache",attrs:{inline:!0,model:t.searchItem,size:"mini"}},[i("el-form-item",{attrs:{label:"用户名",prop:"userName"}},[i("el-input",{attrs:{clearable:""},model:{value:t.searchItem.userName,callback:function(e){t.$set(t.searchItem,"userName","string"==typeof e?e.trim():e)},expression:"searchItem.userName"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",size:"mini",loading:t.btnLoading},on:{click:t.onSubmit}},[t._v("查询")]),t._v(" "),i("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.resetForm("searchItem")}}},[t._v("重置")])],1)],1),t._v(" "),i("div",{staticClass:"table-box"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],class:this.totalCount<=5?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:t.list}},[i("el-table-column",{attrs:{label:"lenovoId",prop:"lenovoId",align:"left","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{label:"用户名",prop:"userName",align:"left","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{label:"ASR访问次数",prop:"userDailyCloudasrCount",align:"left","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{label:"TTS访问次数",prop:"userDailyCloudttsCount",align:"left","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{label:"添加时间",prop:"createTime",align:"left",formatter:t.formTime,"min-width":"120"}}),t._v(" "),i("el-table-column",{attrs:{label:"更新时间",prop:"updateTime",align:"left",formatter:t.formTime2,"min-width":"120"}}),t._v(" "),t.isshow?i("el-table-column",{attrs:{label:"操作",align:"center",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{directives:[{name:"has",rawName:"v-has",value:"userinfo:detail",expression:"'userinfo:detail'"}],attrs:{size:"mini"},on:{click:function(i){return t.rowClick(e.$index,e.row)}}},[t._v("详情")]),t._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"userinfo:update",expression:"'userinfo:update'"}],attrs:{size:"mini"},on:{click:function(i){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")])]}}],null,!1,2953732678)}):t._e()],1),t._v(" "),i("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1),t._v(" "),i("el-dialog",{attrs:{title:"详情",visible:t.infoVisible,width:"300","before-close":t.handleClose},on:{"update:visible":function(e){t.infoVisible=e}}},[i("el-form",{attrs:{"label-position":"right","label-width":"100px",size:"small"}},[i("el-form-item",{attrs:{label:"lenovoId"}},[i("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:t.infoList.lenovoId,callback:function(e){t.$set(t.infoList,"lenovoId",e)},expression:"infoList.lenovoId"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"用户名"}},[i("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:t.infoList.userName,callback:function(e){t.$set(t.infoList,"userName",e)},expression:"infoList.userName"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"ASR访问次数"}},[i("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:t.infoList.userDailyCloudasrCount,callback:function(e){t.$set(t.infoList,"userDailyCloudasrCount",e)},expression:"infoList.userDailyCloudasrCount"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"TTS访问次数"}},[i("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:t.infoList.userDailyCloudttsCount,callback:function(e){t.$set(t.infoList,"userDailyCloudttsCount",e)},expression:"infoList.userDailyCloudttsCount"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"AK"}},[i("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:t.infoList.ak,callback:function(e){t.$set(t.infoList,"ak",e)},expression:"infoList.ak"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"SK"}},[i("el-input",{attrs:{type:"text","auto-complete":"off",readonly:""},model:{value:t.infoList.sk,callback:function(e){t.$set(t.infoList,"sk",e)},expression:"infoList.sk"}})],1),t._v(" "),i("el-form-item",{attrs:{label:""}},[i("el-button",{directives:[{name:"has",rawName:"v-has",value:"userinfo:modify",expression:"'userinfo:modify'"}],attrs:{type:"primary",loading:t.regLoading},on:{click:function(e){return t.getAkSk()}}},[t._v("更新AKSK")])],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleConfirm()}}},[t._v("关闭")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"编辑",visible:t.editVisible,width:"300","before-close":t.editHandleClose},on:{"update:visible":function(e){t.editVisible=e},close:function(e){return t.closeFun("currentItem")}}},[i("el-form",{ref:"currentItem",attrs:{"label-position":"right","label-width":"120px",size:"small",rules:t.editRules,model:t.currentItem}},[i("el-form-item",{attrs:{label:"ASR访问次数",prop:"userDailyCloudasrCount"}},[i("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.currentItem.userDailyCloudasrCount,callback:function(e){t.$set(t.currentItem,"userDailyCloudasrCount","string"==typeof e?e.trim():e)},expression:"currentItem.userDailyCloudasrCount"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"TTS访问次数",prop:"userDailyCloudttsCount"}},[i("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.currentItem.userDailyCloudttsCount,callback:function(e){t.$set(t.currentItem,"userDailyCloudttsCount","string"==typeof e?e.trim():e)},expression:"currentItem.userDailyCloudttsCount"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.editHandleClose}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary",loading:t.editBtnLoading},on:{click:function(e){return t.editHandleConfirm("currentItem")}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var u=i("VU/8")(r,l,!1,function(t){i("hprw")},"data-v-3a0dc4a2",null);e.default=u.exports}});