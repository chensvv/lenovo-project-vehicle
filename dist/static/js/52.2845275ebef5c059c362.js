webpackJsonp([52],{LroN:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("mvHQ"),n=a.n(s),i=a("gRE1"),r=a.n(i),o=a("pWbq"),l=a("2YME"),d=a("2hMI"),c={data:function(){return{pickerOptions:{disabledDate:function(e){var t=Date.now()-864e5;return e.getTime()>t}},list:[],perList:[],channelList:[],typeList:[],phoneTypeList:[],resTypeList:[],selectList:[{typeLabel:"是",typeVal:"1"},{typeLabel:"否",typeVal:"0"}],addResList:{resType:"",resChannel:""},searchItem:{putTime:"",channelVal:"",refreshTime:""},addResRules:{resType:[{required:!0,message:"请选择资源类型",trigger:"blur"}],resChannel:[{required:!0,message:"请输入资源渠道",trigger:"blur"}]},addResVisible:!1,currentPage:1,pageSize:10,pageSizes:[10,20,30],totalCount:1,seaBtnLoading:!1,addResBtnLoading:!1,listLoading:!0,isshow:!0,issueshow:!0}},components:{Cropper:l.a},watch:{addDefaultImgList:{handler:function(e,t){this.addProductImageList=e},deep:!0}},created:function(){var e=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(t){e.perList.push(r()(t).join())}),this.getList(),this.getChannelList()},mounted:function(){-1==this.perList.indexOf("showmode:update")&&(this.isshow=!1),-1==this.perList.indexOf("showmode:toBeReleased")&&(this.issueshow=!1)},methods:{formTime:function(e,t){var a=e.createTime,s=new Date(a);return s.getFullYear()+"-"+Object(o.a)(s.getMonth()+1)+"-"+Object(o.a)(s.getDate())+" "+Object(o.a)(s.getHours())+":"+Object(o.a)(s.getMinutes())},resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,console.log("当前页: "+e),this.getList()},handleEdit:function(e,t){this.$router.push({path:"/showmode/edit",query:{data:n()(t)}})},handleIssue:function(e,t){var a=this,s={id:t.id,publishStatus:t.publishStatus};Object(d._74)(s).then(function(e){200==e.data.code?(a.$message({message:"操作成功",type:"success",duration:1e3}),a.getList()):a.$message({message:e.data.errorMessage,type:"error",duration:1e3})})},openResFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},addResHandleClose:function(){this.addResVisible=!1},handleAdd:function(){this.$router.push({path:"/showmode/add"})},handleAddChannel:function(){this.addResVisible=!0,this.getResTypeList()},addResHandleConfirm:function(e){var t=this,a={parentCode:this.addResList.resType,context:this.addResList.resChannel};this.$refs[e].validate(function(e){if(!e)return!1;t.addResBtnLoading=!0,Object(d.L)(a).then(function(e){t.addResBtnLoading=!1,200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.getList(),t.getChannelList(),t.addResVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(e){t.addBtnLoading=!1})})},getList:function(){var e=this;this.listLoading=!0;var t={pgstr:this.currentPage,pcstr:this.pageSize,startStr:this.searchItem.refreshTime,endStr:this.searchItem.putTime,channel:this.searchItem.channelVal};Object(d._73)(t).then(function(t){e.listLoading=!1,e.list=t.data.data,e.totalCount=t.data.count})},getChannelList:function(){var e=this;Object(d.M)({parentCode:1}).then(function(t){e.channelList=t.data.data})},getTypeList:function(){var e=this;Object(d.M)({parentCode:2}).then(function(t){e.typeList=t.data.data})},getPhoneTypeList:function(){var e=this;Object(d.M)({parentCode:3}).then(function(t){e.phoneTypeList=t.data.data})},getResTypeList:function(){var e=this;Object(d.M)({parentCode:0}).then(function(t){e.resTypeList=t.data.data})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("规则定义")]),e._v(" "),e._l(e.$route.meta,function(t,s){return a("el-breadcrumb-item",{key:s},[e._v(e._s(t))])})],2),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[a("el-form-item",{attrs:{label:"渠道",prop:"channelVal"}},[a("el-select",{attrs:{placeholder:"请选择",clearable:"",size:"mini"},model:{value:e.searchItem.channelVal,callback:function(t){e.$set(e.searchItem,"channelVal",t)},expression:"searchItem.channelVal"}},e._l(e.channelList,function(e){return a("el-option",{key:e.id,attrs:{label:e.context,value:e.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"起始时间",prop:"refreshTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},model:{value:e.searchItem.refreshTime,callback:function(t){e.$set(e.searchItem,"refreshTime",t)},expression:"searchItem.refreshTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"结束时间",prop:"putTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},model:{value:e.searchItem.putTime,callback:function(t){e.$set(e.searchItem,"putTime",t)},expression:"searchItem.putTime"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"showmode:add",expression:"'showmode:add'"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("创建资源")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"config:list",expression:"'config:list'"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAddChannel()}}},[e._v("添加渠道类型")])],1),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list}},[a("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"渠道",prop:"channelStr",align:"center","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"资源图片",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticClass:"thum",attrs:{src:e.row.phoneImg}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"资源说明",prop:"description",align:"center","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"名称",prop:"name",align:"center","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"类型",prop:"typeStr",align:"center","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",prop:"createTime",align:"center",formatter:e.formTime,"min-width":"120"}}),e._v(" "),e.issueshow?a("el-table-column",{attrs:{label:"添加到待发布",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"showmode:toBeReleased",expression:"'showmode:toBeReleased'"}],attrs:{size:"mini"},on:{click:function(a){return e.handleIssue(t.$index,t.row)}}},[e._v(e._s(0==t.row.publishStatus?"添加":"撤回"))])]}}],null,!1,796387518)}):e._e(),e._v(" "),e.isshow?a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"showmode:update",expression:"'showmode:update'"}],attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("详情")])]}}],null,!1,356581388)}):e._e()],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"添加资源渠道类型",visible:e.addResVisible,width:"300","before-close":e.addResHandleClose},on:{"update:visible":function(t){e.addResVisible=t},open:function(t){return e.openResFun("addResList")}}},[a("el-form",{ref:"addResList",attrs:{"label-position":"left","label-width":"100px",rules:e.addResRules,model:e.addResList}},[a("el-form-item",{attrs:{label:"资源类型",prop:"resType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addResList.resType,callback:function(t){e.$set(e.addResList,"resType",t)},expression:"addResList.resType"}},e._l(e.resTypeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.context,value:e.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"资源渠道",prop:"resChannel"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addResList.resChannel,callback:function(t){e.$set(e.addResList,"resChannel","string"==typeof t?t.trim():t)},expression:"addResList.resChannel"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.addResHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addResBtnLoading},on:{click:function(t){return e.addResHandleConfirm("addResList")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var h=a("VU/8")(c,u,!1,function(e){a("P+gj")},"data-v-2314302a",null);t.default=h.exports},"P+gj":function(e,t){}});