webpackJsonp([67],{"9IhJ":function(e,t){},SDfq:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("gRE1"),i=a.n(n),s=a("pWbq"),r=a("2hMI"),o={data:function(){return{list:[],perList:[],sels:[],totalClass:"",currentItem:{id:"",speak:"",answer:""},searchItem:{title:""},currentPage:1,pageSize:10,totalCount:1,showTitle:!0,seaBtnLoading:!1,listLoading:!0,btnshow:!0}},created:function(){var e=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(t){e.perList.push(i()(t).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("forum:details")&&-1==this.perList.indexOf("forum:delete")&&(this.btnshow=!1)},methods:{onShowNameTipsMouseenter:function(e){var t=e.target,a=t.clientWidth,n=t.scrollWidth;this.showTitle=!(a<n)},formTime:function(e,t){var a=Number(e.createTime+"000"),n=new Date(a);return n.getFullYear()+"-"+Object(s.a)(n.getMonth()+1)+"-"+Object(s.a)(n.getDate())+" "+Object(s.a)(n.getHours())+":"+Object(s.a)(n.getMinutes())},resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleSelectionChange:function(e){this.sels=e},handleInfo:function(e,t){this.$router.push({path:"/forum/detail",query:{articleId:t.articleId}})},handleBatchDel:function(){var e=this,t=this.sels.map(function(e){return e.id});if(0==t.length||t==[]||null==t)this.$message({message:"请选择要删除的数据",type:"warning",duration:1e3});else{var a={ids:t};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r._18)(a).then(function(t){200==t.data.code?(e.$message({message:"删除成功",type:"success",duration:1e3}),e.getList()):e.$message({message:t.data.errorMessage,type:"error",duration:1e3})})}).catch(function(e){console.log(e)})}},handleDel:function(e,t){var a=this,n={id:t.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r._20)(n).then(function(e){200==e.data.code?(a.$message({message:"删除成功",type:"success",duration:1e3}),a.getList()):a.$message({message:e.data.errorMessage,type:"error",duration:1e3})})}).catch(function(e){console.log(e)})},getList:function(){var e=this;this.listLoading=!0;var t={pgstr:this.currentPage,pcstr:this.pageSize,title:this.searchItem.title};Object(r._21)(t).then(function(t){e.listLoading=!1,200==t.data.code?(e.list=t.data.data,e.totalCount=t.data.count,e.totalClass=t.data.data.length):e.$message({message:t.data.errorMessage,type:"error",duration:1e3})}).catch(function(){e.listLoading=!1})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table height-85"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/joke/speakList"}}},[e._v("说法配置")]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(this.$route.meta.title))])],1),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline height50 width130",attrs:{inline:!0,model:e.searchItem,"label-width":"90px",size:"mini"}},[a("div",{staticClass:"form-input height50"},[a("el-form-item",{attrs:{label:"title",prop:"title"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.title,callback:function(t){e.$set(e.searchItem,"title","string"==typeof t?t.trim():t)},expression:"searchItem.title"}})],1)],1),e._v(" "),a("div",{staticClass:"form-btn"},[a("el-button",{attrs:{size:"mini",type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"forum:delbatch",expression:"'forum:delbatch'"}],attrs:{size:"mini"},on:{click:function(t){return e.handleBatchDel()}}},[e._v("批量删除")])],1)]),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],class:this.totalClass<="7"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:e.list,stripe:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",align:"center",label:"#"}}),e._v(" "),a("el-table-column",{attrs:{label:"title",prop:"title",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.title,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.title)+"\n                    ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.title)+"\n                ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",prop:"createTime",align:"center",formatter:e.formTime,"min-wdth":"140"}}),e._v(" "),e.btnshow?a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"forum:details",expression:"'forum:details'"}],attrs:{size:"mini"},on:{click:function(a){return e.handleInfo(t.$index,t.row)}}},[e._v("详情")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"forum:delete",expression:"'forum:delete'"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}],null,!1,1359833633)}):e._e()],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1)},staticRenderFns:[]};var c=a("VU/8")(o,l,!1,function(e){a("9IhJ")},"data-v-23e6dc1c",null);t.default=c.exports}});