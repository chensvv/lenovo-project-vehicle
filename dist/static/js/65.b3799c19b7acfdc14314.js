webpackJsonp([65],{"0WoW":function(t,e){},J90v:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("2hMI"),i={data:function(){return{list:[],header:[],editVisible:!1,addVisible:!1,currentPage:1,pageSize:10,totalCount:1,seaBtnLoading:!1,fileBtnLoading:!1,listLoading:!0}},created:function(){this.getList()},watch:{$route:function(t,e){this.getList()}},methods:{resetForm:function(t){this.$refs[t].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(t){this.pageSize=t,this.currentPage=1,this.getList()},handleCurrentChange:function(t){this.currentPage=t,this.getList()},getCaption:function(t){var e=t.lastIndexOf("?");return t=t.substring(e+1,t.length)},getList:function(){var t=this;this.listLoading=!0,this.list=[],this.header=[];var e={start:this.currentPage,page:this.pageSize,name:this.getCaption(window.location.href)};Object(n._68)(e).then(function(e){for(var a in t.listLoading=!1,t.totalCount=e.data.data.total,e.data.data.data[0])t.header.push(a);for(var n in e.data.data.data){var i=[];for(var r in e.data.data.data[n])i.push(e.data.data.data[n][r]);t.list.push(i)}})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table common"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("报表系统")]),t._v(" "),t._l(t.$route.meta,function(e,n){return a("el-breadcrumb-item",{key:n},[t._v(t._s(e))])})],2),t._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],class:this.totalCount<=5?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:t.list}},t._l(t.header,function(e,n){return a("el-table-column",{key:e,attrs:{label:e,align:"left","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                  "+t._s(t.list[e.$index][n])+"\n              ")]}}],null,!0)})}),1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)],1)},staticRenderFns:[]};var s=a("VU/8")(i,r,!1,function(t){a("0WoW")},"data-v-0e35310e",null);e.default=s.exports}});