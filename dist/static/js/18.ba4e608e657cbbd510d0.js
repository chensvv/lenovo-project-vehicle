webpackJsonp([18],{GohJ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("gRE1"),i=a.n(n),r=a("pWbq"),s=a("2hMI"),o={data:function(){return{list:[],perList:[],articleId:"",currentPage:1,pageSize:10,totalCount:1,seaBtnLoading:!1,listLoading:!0,btnshow:!0}},created:function(){var t=this;this.articleId=this.$route.query.articleId,JSON.parse(sessionStorage.getItem("btnpermission")).map(function(e){t.perList.push(i()(e).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("forum:delete")&&(this.btnshow=!1)},methods:{formTime:function(t,e){var a=Number(t.createTime+"000"),n=new Date(a);return n.getFullYear()+"-"+Object(r.a)(n.getMonth()+1)+"-"+Object(r.a)(n.getDate())+" "+Object(r.a)(n.getHours())+":"+Object(r.a)(n.getMinutes())},handleSizeChange:function(t){this.pageSize=t,this.currentPage=1,this.getList()},handleCurrentChange:function(t){this.currentPage=t,this.getList()},handleDel:function(t,e){var a=this,n={id:e.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s._9)(n).then(function(t){200==t.data.code?(a.$message({message:"删除成功",type:"success",duration:1e3}),a.getList()):a.$message({message:t.data.errorMessage,type:"error",duration:1e3})})}).catch(function(t){console.log(t)})},getList:function(){var t=this;this.listLoading=!0;var e={articleId:this.articleId,pgstr:this.currentPage,pcstr:this.pageSize};Object(s._8)(e).then(function(e){t.listLoading=!1,t.list=e.data.data,t.totalCount=e.data.count})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table ask"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("说法配置")]),t._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/forum/list"}}},[t._v("论坛管理")]),t._v(" "),t._l(t.$route.meta,function(e,n){return a("el-breadcrumb-item",{key:n},[t._v(t._s(e))])})],2),t._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:t.searchItem,size:"mini"}}),t._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],class:this.totalCount<=5?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:t.list}},[a("el-table-column",{attrs:{type:"index",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{label:"content",prop:"content",align:"left","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{label:"创建时间",prop:"createTime",align:"left",formatter:t.formTime,"min-wdth":"140"}}),t._v(" "),t.btnshow?a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"forum:delete",expression:"'forum:delete'"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDel(e.$index,e.row)}}},[t._v("删除")])]}}],null,!1,4031920175)}):t._e()],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)],1)},staticRenderFns:[]};var c=a("VU/8")(o,l,!1,function(t){a("hYrl")},"data-v-ddf87698",null);e.default=c.exports},hYrl:function(t,e){}});