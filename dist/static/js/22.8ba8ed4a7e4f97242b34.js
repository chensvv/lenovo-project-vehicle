webpackJsonp([22],{LPzw:function(e,t){},kkQr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("pWbq"),i=a("2hMI"),r={data:function(){return{searchItem:{name:"",type:"",cn:"",refreshTime:"",putTime:""},addList:{name:"",alias:""},list:[],addRules:{name:[{required:!0,message:"应用名",trigger:"change"}],alias:[{required:!0,message:"",trigger:"change"}]},currentPage:1,pageSize:30,pageSizes:[10,20,30],totalCount:1,btnLoading:!1,addVisible:!1,addBtnLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var e=this,t={pgstr:this.currentPage,pcstr:this.pageSize,startStr:this.searchItem.refreshTime,endStr:this.searchItem.putTime,name:this.searchItem.name,type:this.searchItem.type,cn:this.searchItem.cn};Object(i.s)(t).then(function(t){e.list=t.data.data,e.totalCount=t.data.count})},formTime:function(e,t){var a=e.upTime,i=new Date(a);return i.getFullYear()+"-"+Object(n.a)(i.getMonth()+1)+"-"+Object(n.a)(i.getDate())+" "+Object(n.a)(i.getHours())+":"+Object(n.a)(i.getMinutes())+":"+Object(n.a)(i.getSeconds())},formVal:function(e,t){return!0===e.isIndex?"true":"false"},resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.btnLoading=!0,this.currentPage=1,this.getList(),this.btnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleDel:function(e,t){var a=this,n={name:t.name};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.r)(n).then(function(e){200==e.data.code?(a.$message({message:"删除成功",type:"success",duration:1e3}),a.getList()):a.$message.error("错误")})}).catch(function(){})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},addHandleClose:function(){this.addVisible=!1},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this,a={name:this.addList.name,alias:this.addList.alias};this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(i.q)(a).then(function(e){200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.getList(),t.addBtnLoading=!1,t.addVisible=!1):(t.addBtnLoading=!1,t.$message({message:e.data.errorMessage,type:"error",duration:1e3}))})})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"joke"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("应用搜索")]),e._v(" "),e._l(e.$route.meta,function(t,n){return a("el-breadcrumb-item",{key:n},[e._v(e._s(t))])})],2),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline cache",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[a("el-form-item",{attrs:{label:"名字",prop:"name"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.name,callback:function(t){e.$set(e.searchItem,"name","string"==typeof t?t.trim():t)},expression:"searchItem.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.type,callback:function(t){e.$set(e.searchItem,"type","string"==typeof t?t.trim():t)},expression:"searchItem.type"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类别",prop:"cn"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.cn,callback:function(t){e.$set(e.searchItem,"cn","string"==typeof t?t.trim():t)},expression:"searchItem.cn"}})],1),e._v(" "),a("el-form-item",{staticClass:"width140",attrs:{label:"开始时间",prop:"refreshTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.searchItem.refreshTime,callback:function(t){e.$set(e.searchItem,"refreshTime",t)},expression:"searchItem.refreshTime"}})],1),e._v(" "),a("el-form-item",{staticClass:"width140",attrs:{label:"结束时间",prop:"putTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.searchItem.putTime,callback:function(t){e.$set(e.searchItem,"putTime",t)},expression:"searchItem.putTime"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini",loading:e.btnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"app:cacheadd",expression:"'app:cacheadd'"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[a("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"名称",prop:"name",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"拼音",prop:"pinyin",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"类型",prop:"atype",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"类别",prop:"cname",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"是否别名",prop:"isAlias",align:"center",formatter:e.formVal}}),e._v(" "),a("el-table-column",{attrs:{label:"原名",prop:"sname",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"是否索引",prop:"isIndex",align:"center",formatter:e.formVal}}),e._v(" "),a("el-table-column",{attrs:{label:"更新时间",prop:"upTime",align:"center",formatter:e.formTime}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"app:cachedel",expression:"'app:cachedel'"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}}),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"300","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[a("el-form",{ref:"addList",attrs:{"label-position":"left","label-width":"100px",rules:e.addRules,model:e.addList}},[a("el-form-item",{attrs:{label:"应用名",prop:"name"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.name,callback:function(t){e.$set(e.addList,"name","string"==typeof t?t.trim():t)},expression:"addList.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"别名",prop:"alias"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.alias,callback:function(t){e.$set(e.addList,"alias","string"==typeof t?t.trim():t)},expression:"addList.alias"}}),e._v(" "),a("span",{staticStyle:{"font-size":"12px"}},[e._v("别名对应的原始名—只对别名有效")])],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(r,s,!1,function(e){a("LPzw")},"data-v-6a489a99",null);t.default=l.exports}});