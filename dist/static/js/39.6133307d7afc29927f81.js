webpackJsonp([39],{SDfq:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("gRE1"),i=a.n(n),s=a("pWbq"),r=a("2hMI"),o={data:function(){return{list:[],perList:[],sels:[],totalClass:"",currentItem:{id:"",speak:"",answer:""},searchItem:{title:""},currentPage:1,pageSize:10,totalCount:1,showTitle:!0,seaBtnLoading:!1,listLoading:!0,btnshow:!0}},created:function(){var t=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(e){t.perList.push(i()(e).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("forum:details")&&-1==this.perList.indexOf("forum:delete")&&(this.btnshow=!1)},methods:{onShowNameTipsMouseenter:function(t){var e=t.target,a=e.clientWidth,n=e.scrollWidth;this.showTitle=!(a<n)},formTime:function(t,e){var a=Number(t.createTime+"000"),n=new Date(a);return n.getFullYear()+"-"+Object(s.a)(n.getMonth()+1)+"-"+Object(s.a)(n.getDate())+" "+Object(s.a)(n.getHours())+":"+Object(s.a)(n.getMinutes())},resetForm:function(t){this.$refs[t].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(t){this.pageSize=t,this.currentPage=1,this.getList()},handleCurrentChange:function(t){this.currentPage=t,this.getList()},handleSelectionChange:function(t){this.sels=t},handleInfo:function(t,e){this.$router.push({path:"/forum/detail",query:{articleId:e.articleId}})},handleBatchDel:function(){var t=this,e=this.sels.map(function(t){return t.id});if(0==e.length||e==[]||null==e)this.$message({message:"请选择要删除的数据",type:"warning",duration:1e3});else{var a={ids:e};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r._15)(a).then(function(e){200==e.data.code?(t.$message({message:"删除成功",type:"success",duration:1e3}),t.getList()):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})})}).catch(function(t){console.log(t)})}},handleDel:function(t,e){var a=this,n={id:e.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r._17)(n).then(function(t){200==t.data.code?(a.$message({message:"删除成功",type:"success",duration:1e3}),a.getList()):a.$message({message:t.data.errorMessage,type:"error",duration:1e3})})}).catch(function(t){console.log(t)})},getList:function(){var t=this;this.listLoading=!0;var e={pgstr:this.currentPage,pcstr:this.pageSize,title:this.searchItem.title};Object(r._18)(e).then(function(e){t.listLoading=!1,200==e.data.code?(t.list=e.data.data,t.totalCount=e.data.count,t.totalClass=e.data.data.length):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(){t.listLoading=!1})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table height-85"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/joke/speakList"}}},[t._v("说法配置")]),t._v(" "),a("el-breadcrumb-item",[t._v(t._s(this.$route.meta.title))])],1),t._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline height50 width130",attrs:{inline:!0,model:t.searchItem,"label-width":"90px",size:"mini"}},[a("div",{staticClass:"form-input height50"},[a("el-form-item",{attrs:{label:"title",prop:"title"}},[a("el-input",{attrs:{clearable:""},model:{value:t.searchItem.title,callback:function(e){t.$set(t.searchItem,"title","string"==typeof e?e.trim():e)},expression:"searchItem.title"}})],1)],1),t._v(" "),a("div",{staticClass:"form-btn"},[a("el-button",{attrs:{size:"mini",type:"primary",loading:t.seaBtnLoading},on:{click:t.onSubmit}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.resetForm("searchItem")}}},[t._v("重置")]),t._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"forum:delbatch",expression:"'forum:delbatch'"}],attrs:{size:"mini"},on:{click:function(e){return t.handleBatchDel()}}},[t._v("批量删除")])],1)]),t._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],class:this.totalClass<="7"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:t.list},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{type:"index",align:"center",label:"#"}}),t._v(" "),a("el-table-column",{attrs:{label:"title",prop:"title",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.title,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.title)+"\n                    ")])]),t._v(" "),t.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.title)+"\n                ")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"创建时间",prop:"createTime",align:"center",formatter:t.formTime,"min-wdth":"140"}}),t._v(" "),t.btnshow?a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"forum:details",expression:"'forum:details'"}],attrs:{size:"mini"},on:{click:function(a){return t.handleInfo(e.$index,e.row)}}},[t._v("详情")]),t._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"forum:delete",expression:"'forum:delete'"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDel(e.$index,e.row)}}},[t._v("删除")])]}}],null,!1,1359833633)}):t._e()],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)],1)},staticRenderFns:[]};var c=a("VU/8")(o,l,!1,function(t){a("kF0a")},"data-v-5c7c40dc",null);e.default=c.exports},kF0a:function(t,e){}});