webpackJsonp([28],{L0Za:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("pWbq");var s=n("2hMI"),i={data:function(){return{list:[],currentItem:{id:"",songName:"",songMid:"",songId:"",songAlbumId:"",songSingerId:"",songSource:""},sourceList:[],addList:{songName:"",songMid:"",songId:"",songAlbumId:"",songSingerId:"",songSource:""},searchItem:{name:""},addRules:{songName:[{required:!0,message:"请输入歌手名称",trigger:"change"}],songMid:[{required:!0,message:"请输入QQ音乐MID",trigger:"change"}],songId:[{required:!0,message:"请输入QQ音乐ID",trigger:"change"}],songAlbumId:[{required:!0,message:"请输入对应专辑ID",trigger:"change"}],songSingerId:[{required:!0,message:"对应歌手ID",trigger:"change"}],songSource:[{required:!0,message:"请选择歌曲来源",trigger:"change"}]},editRules:{songName:[{required:!0,message:"请输入歌手名称",trigger:"change"}],songMid:[{required:!0,message:"请输入QQ音乐MID",trigger:"change"}],songId:[{required:!0,message:"请输入QQ音乐ID",trigger:"change"}],songAlbumId:[{required:!0,message:"请输入对应专辑ID",trigger:"change"}],songSingerId:[{required:!0,message:"对应歌手ID",trigger:"change"}],songSource:[{required:!0,message:"请选择歌曲来源",trigger:"change"}]},editVisible:!1,addVisible:!1,currentPage:1,pageSize:10,pageSizes:[10,20,30],totalCount:1,seaBtnLoading:!1,addBtnLoading:!1,editBtnLoading:!1,listLoading:!0}},created:function(){this.getList()},methods:{resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,console.log("当前页: "+e),this.getList()},handleEdit:function(e,t){var n=this;this.editVisible=!0,Object(s._67)().then(function(e){n.sourceList=e.data}),this.currentItem={id:t.id,songName:t.songName,songMid:t.songMid,songId:t.songId,songAlbumId:t.songAlbumId,songSingerId:t.songSingerId,songSource:t.songSource}},handleDel:function(e,t){var n=this,i={id:t.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s._65)(i).then(function(e){200==e.data.code?(n.$message({message:"删除成功",type:"success",duration:1e3}),n.getList()):n.$message({message:e.data.errorMessage,type:"error",duration:1e3})})}).catch(function(e){console.log(e)})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},closeFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].clearValidate()})},editHandleClose:function(){this.editVisible=!1},addHandleClose:function(){this.addVisible=!1},editHandleConfirm:function(e){var t=this,n={id:this.currentItem.id,songName:this.currentItem.songName,songMid:this.currentItem.songMid,songId:this.currentItem.songId,songAlbumId:this.currentItem.songAlbumId,songSingerId:this.currentItem.songSingerId,songSource:this.currentItem.songSource};this.$refs[e].validate(function(e){if(!e)return!1;t.editBtnLoading=!0,Object(s._68)(n).then(function(e){t.editBtnLoading=!1,200==e.data.code?(t.$message({message:"编辑成功",type:"success",duration:1e3}),t.getList(),t.editVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(e){t.editBtnLoading=!1})})},handleAdd:function(){var e=this;this.addVisible=!0,Object(s._67)().then(function(t){e.sourceList=t.data,console.log(t.data)})},addHandleConfirm:function(e){var t=this,n={songName:this.addList.songName,songMid:this.addList.songMid,songId:this.addList.songId,songAlbumId:this.addList.songAlbumId,songSingerId:this.addList.songSingerId,songSource:this.addList.songSource};this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(s._64)(n).then(function(e){t.addBtnLoading=!1,200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.getList(),t.addVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(e){t.addBtnLoading=!1})})},getList:function(){var e=this,t={name:this.searchItem.name,pgstr:this.currentPage,pcstr:this.pageSize};Object(s._66)(t).then(function(t){e.listLoading=!1,e.list=t.data.data,e.totalCount=t.data.count})},handleAlbum:function(){this.$router.push({path:"/lasf-kv/album"})}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),n("el-breadcrumb-item",[e._v("LASF KV")]),e._v(" "),e._l(e.$route.meta,function(t,s){return n("el-breadcrumb-item",{key:s},[e._v(e._s(t))])})],2),e._v(" "),n("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[n("el-form-item",{attrs:{label:"歌手名称",prop:"name"}},[n("el-input",{attrs:{clearable:""},model:{value:e.searchItem.name,callback:function(t){e.$set(e.searchItem,"name","string"==typeof t?t.trim():t)},expression:"searchItem.name"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),n("el-button",{on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1),e._v(" "),n("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:music:addsong",expression:"'skill:music:addsong'"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")]),e._v(" "),n("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:music:albumlist",expression:"'skill:music:albumlist'"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAlbum()}}},[e._v("专辑列表")]),e._v(" "),n("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:music:singerlist",expression:"'skill:music:singerlist'"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleSong()}}},[e._v("歌手管理")])],1),e._v(" "),n("div",{staticClass:"table-box"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list}},[n("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"歌曲名称",prop:"songName",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"歌曲ID",prop:"songId",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"专辑ID",prop:"id"}}),e._v(" "),n("el-table-column",{attrs:{label:"QQ音乐MID",prop:"songMid",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"更新时间",prop:"displayUpdateTime",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:music:updatesong",expression:"'skill:music:updatesong'"}],attrs:{size:"mini"},on:{click:function(n){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:music:deletesong",expression:"'skill:music:deletesong'"}],attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),n("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"300","before-close":e.editHandleClose},on:{"update:visible":function(t){e.editVisible=t},close:function(t){return e.closeFun("currentItem")}}},[n("el-form",{ref:"currentItem",attrs:{"label-position":"left","label-width":"120px",rules:e.editRules,model:e.currentItem}},[n("el-form-item",{attrs:{label:"歌曲名称",prop:"songName"}},[n("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.songName,callback:function(t){e.$set(e.currentItem,"songName","string"==typeof t?t.trim():t)},expression:"currentItem.songName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"QQ音乐MID",prop:"songMid"}},[n("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.songMid,callback:function(t){e.$set(e.currentItem,"songMid","string"==typeof t?t.trim():t)},expression:"currentItem.songMid"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"QQ音乐ID",prop:"songId"}},[n("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.songId,callback:function(t){e.$set(e.currentItem,"songId","string"==typeof t?t.trim():t)},expression:"currentItem.songId"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"对应专辑ID",prop:"songAlbumId"}},[n("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.songAlbumId,callback:function(t){e.$set(e.currentItem,"songAlbumId","string"==typeof t?t.trim():t)},expression:"currentItem.songAlbumId"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"对应歌手简介",prop:"songSingerId"}},[n("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.songSingerId,callback:function(t){e.$set(e.currentItem,"songSingerId","string"==typeof t?t.trim():t)},expression:"currentItem.songSingerId"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"歌曲来源",prop:"songSource"}},[n("el-select",{attrs:{placeholder:"--",clearable:""},model:{value:e.currentItem.songSource,callback:function(t){e.$set(e.currentItem,"songSource",t)},expression:"currentItem.songSource"}},e._l(e.sourceList,function(e,t){return n("el-option",{key:t,attrs:{label:e.appName,value:e.id}})}),1)],1)],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.editHandleClose}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary",loading:e.editBtnLoading},on:{click:function(t){return e.editHandleConfirm("currentItem")}}},[e._v("确 定")])],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"300","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[n("el-form",{ref:"addList",attrs:{"label-position":"left","label-width":"120px",rules:e.addRules,model:e.addList}},[n("el-form-item",{attrs:{label:"歌曲名称",prop:"songName"}},[n("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.songName,callback:function(t){e.$set(e.addList,"songName","string"==typeof t?t.trim():t)},expression:"addList.songName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"QQ音乐MID",prop:"songMid"}},[n("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.songMid,callback:function(t){e.$set(e.addList,"songMid","string"==typeof t?t.trim():t)},expression:"addList.songMid"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"QQ音乐ID",prop:"songId"}},[n("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.songId,callback:function(t){e.$set(e.addList,"songId","string"==typeof t?t.trim():t)},expression:"addList.songId"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"对应专辑ID",prop:"songAlbumId"}},[n("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.songAlbumId,callback:function(t){e.$set(e.addList,"songAlbumId","string"==typeof t?t.trim():t)},expression:"addList.songAlbumId"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"对应歌手ID",prop:"songSingerId"}},[n("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.songSingerId,callback:function(t){e.$set(e.addList,"songSingerId","string"==typeof t?t.trim():t)},expression:"addList.songSingerId"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"歌曲来源",prop:"songSource"}},[n("el-select",{attrs:{placeholder:"--",clearable:""},model:{value:e.addList.songSource,callback:function(t){e.$set(e.addList,"songSource",t)},expression:"addList.songSource"}},e._l(e.sourceList,function(e,t){return n("el-option",{key:t,attrs:{label:e.appName,value:e.id}})}),1)],1)],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var r=n("VU/8")(i,a,!1,function(e){n("thN+")},"data-v-56c8dc55",null);t.default=r.exports},"thN+":function(e,t){}});