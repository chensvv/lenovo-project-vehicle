webpackJsonp([14],{AwzA:function(e,t){},f2Us:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("D7x1"),s=i("4/BI"),l={name:"applicationlist",components:{iTable:n.a},data:function(){var e=this;return{index:"",d_title:"",d_url:"",d_mint:"",list:[],currentItem:{ruleDes:""},addList:{jnms:""},searchItem:{classnames:""},columns:[{prop:"index",label:"序号",width:100,align:"center",hasSort:!0},{prop:"ruleDes",label:"技能描述",align:"center",hasSort:!0},{prop:"inc",label:"说法数量",align:"center",hasSort:!0},{prop:"inc",label:"答案数量",align:"center",hasSort:!0},{prop:"inc",label:"调用次数",align:"center",hasSort:!0},{prop:"inc",label:"用户数",align:"center",hasSort:!0},{prop:"inc",label:"失败数",align:"center",hasSort:!0},{prop:"refreshTime",label:"修改时间",align:"center",hasSort:!0,render:function(e,t){var i=parseInt(t.row.refreshTime);return e("span",Object(s.a)(new Date(i),"yyyy-MM-dd hh:mm"))}}],options:{stripe:!1,loading:!0,highlightCurrentRow:!1,mutiSelect:!1,border:!1},operates:{width:200,show:!1,list:[{id:"1",label:"编辑",show:!0,plain:!0,disabled:!1,method:function(t,i){e.handleEdit(t,i)}},{id:"2",label:"删除",type:"danger",show:!0,plain:!1,disabled:!1,method:function(t,i){e.handleDel(t,i)}},{id:"3",label:"详情",show:!0,plain:!1,disabled:!1,method:function(t,i){e.handleInfo(t,i)}}]},addRules:{jnms:[{required:!0,message:"请输入技能描述",trigger:"blur"}]},editRules:{ruleDes:[{required:!0,message:"请输入技能描述",trigger:"blur"}]},editVisible:!1,addVisible:!1,currentPage:1,pageSize:10,pageSizes:[10,20,30],totalCount:1}},created:function(){this.d_title=this.$route.query.d_title,this.d_url=this.$route.query.d_url,this.d_mint=this.$route.query.d_mint,this.index=this.$route.query.index,this.getList()},methods:{resetForm:function(e){this.$refs[e].resetFields()},onSubmit:function(){console.log(this.searchItem)},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,console.log("当前页: "+e)},handleEdit:function(e,t){console.log(e,t),this.editVisible=!0,this.currentItem={ruleDes:t.ruleDes}},handleDel:function(e,t){var i=this;console.log(t.id),console.log(e),this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.list.splice(e,1)}).catch(function(){console.log("no")})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},closeFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].clearValidate()})},editHandleClose:function(){this.editVisible=!1},addHandleClose:function(){this.addList={},this.addVisible=!1},editHandleConfirm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;console.log(t.currentItem),t.editVisible=!1})},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;console.log(t.addList),t.addVisible=!1})},getList:function(){var e=this;this.$http.get("/api/data").then(function(t){e.list=t.data,t.data.forEach(function(t){t.index=t.id%e.pageSize,0==t.index&&(t.index=e.pageSize)}),e.totalCount=e.list.length,e.options.loading=!1})},handleInfo:function(e,t){console.log(),this.$router.push({path:"/home/skill/detail/speak",query:{index:this.index,d_info:t.ruleDes,d_title:this.d_title,d_url:this.d_url,d_mint:this.d_mint}}),console.log(this.d_url,this.d_mint)}}},a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"table"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),i("el-breadcrumb-item",[e._v("LASF KV")]),e._v(" "),i("el-breadcrumb-item",{attrs:{to:{path:"/home/skill"}}},[e._v("应用列表")]),e._v(" "),e._l(e.$route.meta,function(t,n){return i("el-breadcrumb-item",{key:n},[e._v(e._s(t))])})],2),e._v(" "),i("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[i("div",{staticClass:"d_t"},[i("span",{staticClass:"d_title"},[e._v(e._s(e.d_title)+"  \n                ")]),i("span",[e._v(e._s(e.d_url)+" "+e._s(e.d_mint))])]),e._v(" "),i("el-form-item",{attrs:{label:"应用名称",prop:"classnames"}},[i("el-input",{model:{value:e.searchItem.classnames,callback:function(t){e.$set(e.searchItem,"classnames",t)},expression:"searchItem.classnames"}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),i("el-button",{on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1),e._v(" "),i("el-button",{staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")])],1),e._v(" "),i("div",{staticClass:"table-box"},[i("i-table",{attrs:{list:e.list.slice((e.currentPage-1)*e.pageSize,e.currentPage*e.pageSize),options:e.options,columns:e.columns,operates:e.operates}}),e._v(" "),i("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),i("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"300","before-close":e.editHandleClose},on:{"update:visible":function(t){e.editVisible=t},close:function(t){return e.closeFun("currentItem")}}},[i("el-form",{ref:"currentItem",attrs:{"label-position":"left","label-width":"120px",rules:e.editRules,model:e.currentItem}},[i("el-form-item",{attrs:{label:"技能描述",prop:"ruleDes"}},[i("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.ruleDes,callback:function(t){e.$set(e.currentItem,"ruleDes",t)},expression:"currentItem.ruleDes"}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.editHandleClose}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.editHandleConfirm("currentItem")}}},[e._v("确 定")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"300","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[i("el-form",{ref:"addList",attrs:{"label-position":"left","label-width":"100px",rules:e.addRules,model:e.addList}},[i("el-form-item",{attrs:{label:"技能描述",prop:"jnms"}},[i("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.jnms,callback:function(t){e.$set(e.addList,"jnms",t)},expression:"addList.jnms"}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var r=i("VU/8")(l,a,!1,function(e){i("AwzA")},"data-v-6ac70e71",null);t.default=r.exports}});