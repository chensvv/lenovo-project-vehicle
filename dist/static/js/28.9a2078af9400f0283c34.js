webpackJsonp([28],{"+WY+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("pWbq");var i=a("2hMI"),n={name:"applicationlist",data:function(){return{list:[],currentItem:{id:"",albumName:"",albumQqId:"",albumQqMid:"",albumQqSingerId:"",albumQqPhoto:""},addList:{albumName:"",albumQqId:"",albumQqMid:"",albumQqSingerId:"",albumQqPhoto:""},searchItem:{name:""},addRules:{albumName:[{required:!0,message:"请输入专辑名称",trigger:"change"}],albumQqId:[{required:!0,message:"请输入专辑QQ音乐ID",trigger:"change"}],albumQqMid:[{required:!0,message:"请输入专辑QQ音乐MID",trigger:"change"}],albumQqSingerId:[{required:!0,message:"请输入专辑对应歌手ID",trigger:"change"}],albumQqPhoto:[{required:!0,message:"请输入专辑QQ音乐图片",trigger:"change"}]},editRules:{albumName:[{required:!0,message:"请输入歌手名称",trigger:"change"}],albumQqId:[{required:!0,message:"请输入QQ音乐ID",trigger:"change"}],albumQqMid:[{required:!0,message:"请输入QQ音乐MID",trigger:"change"}],albumQqSingerId:[{required:!0,message:"请输入专辑对应歌手ID",trigger:"change"}],albumQqPhoto:[{required:!0,message:"请输入专辑QQ音乐图片",trigger:"change"}]},editVisible:!1,addVisible:!1,currentPage:1,pageSize:30,pageSizes:[10,20,30],totalCount:1,seaBtnLoading:!1,addBtnLoading:!1,editBtnLoading:!1}},created:function(){this.getList()},methods:{resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleEdit:function(e,t){this.editVisible=!0,this.currentItem={id:t.id,albumName:t.albumName,albumQqId:t.albumQqId,albumQqMid:t.albumQqMid,albumQqSingerId:t.albumQqSingerId,albumQqPhoto:t.albumQqPhoto}},handleDel:function(e,t){var a=this,n={albumQqId:t.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.b)(n).then(function(e){200==e.data.code?(a.$message({message:"删除成功",type:"success",duration:1e3}),a.getList()):a.$message({message:e.data.errorMessage,type:"error",duration:1e3})})}).catch(function(){})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},closeFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].clearValidate()})},editHandleClose:function(){this.editVisible=!1},addHandleClose:function(){this.addVisible=!1},editHandleConfirm:function(e){var t=this,a={id:this.currentItem.id,albumName:this.currentItem.albumName,albumQqId:this.currentItem.albumQqId,albumQqMid:this.currentItem.albumQqMid,albumQqPhoto:this.currentItem.albumQqPhoto,albumQqIntroduce:this.currentItem.albumQqIntroduce,albumQqPosterUrl:this.currentItem.albumQqPosterUrl};this.$refs[e].validate(function(e){if(!e)return!1;t.editBtnLoading=!0,Object(i.d)(a).then(function(e){200==e.data.code?(t.$message({message:"修改成功",type:"success",duration:1e3}),t.getList(),t.editBtnLoading=!1,t.editVisible=!1):(t.editBtnLoading=!1,t.$message({message:e.data.errorMessage,type:"error",duration:1e3}))})})},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this,a={albumName:this.addList.albumName,albumQqId:this.addList.albumQqId,albumQqMid:this.addList.albumQqMid,albumQqSingerId:this.addList.albumQqSingerId,albumQqPhoto:this.addList.albumQqPhoto};this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(i.a)(a).then(function(e){200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.getList(),t.addVisible=!1,t.addBtnLoading=!1):(t.$message({message:e.data.errorMessage,type:"error",duration:1e3}),t.addBtnLoading=!1)})})},handlePub:function(){var e=this;albumPub().then(function(t){1==t.data.again?(e.$message({message:"发布成功",type:"success",duration:1e3}),e.getList(),e.addVisible=!1,e.addBtnLoading=!1):(e.$message({message:t.data.errorMessage,type:"error",duration:1e3}),e.addBtnLoading=!1)})},getList:function(){var e=this,t={name:this.searchItem.name,pgstr:this.currentPage,pcstr:this.pageSize};Object(i.c)(t).then(function(t){e.list=t.data.data,e.totalCount=t.data.count})},handleSong:function(){this.$router.push({path:"/lasf-kv/song"})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("LASF KV")]),e._v(" "),e._l(e.$route.meta,function(t,i){return a("el-breadcrumb-item",{key:i},[e._v(e._s(t))])})],2),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[a("el-form-item",{attrs:{label:"专辑名称",prop:"name"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.name,callback:function(t){e.$set(e.searchItem,"name","string"==typeof t?t.trim():t)},expression:"searchItem.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:154,expression:"154"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:157,expression:"157"}],staticClass:"success",attrs:{size:"mini"},on:{click:function(t){return e.handleSong()}}},[e._v("歌曲列表")])],1),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[a("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"名称",prop:"albumName",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"专辑ID",prop:"id",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"QQ音乐ID",prop:"albumQqId"}}),e._v(" "),a("el-table-column",{attrs:{label:"QQ音乐MID",prop:"albumQqMid",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"专辑对应歌手ID",prop:"albumQqSingerId",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"更新时间",prop:"displayUpdateTime",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:155,expression:"155"}],attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:156,expression:"156"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"300","before-close":e.editHandleClose},on:{"update:visible":function(t){e.editVisible=t},close:function(t){return e.closeFun("currentItem")}}},[a("el-form",{ref:"currentItem",attrs:{"label-position":"left","label-width":"130px",rules:e.editRules,model:e.currentItem}},[a("el-form-item",{attrs:{label:"专辑名称",prop:"albumName"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.albumName,callback:function(t){e.$set(e.currentItem,"albumName","string"==typeof t?t.trim():t)},expression:"currentItem.albumName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专辑QQ音乐ID",prop:"albumQqId"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.albumQqId,callback:function(t){e.$set(e.currentItem,"albumQqId","string"==typeof t?t.trim():t)},expression:"currentItem.albumQqId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专辑QQ音乐MID",prop:"albumQqMid"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.albumQqMid,callback:function(t){e.$set(e.currentItem,"albumQqMid","string"==typeof t?t.trim():t)},expression:"currentItem.albumQqMid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专辑对应歌手ID",prop:"albumQqSingerId"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.albumQqSingerId,callback:function(t){e.$set(e.currentItem,"albumQqSingerId","string"==typeof t?t.trim():t)},expression:"currentItem.albumQqSingerId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专辑QQ音乐图片",prop:"albumQqPhoto"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.albumQqPhoto,callback:function(t){e.$set(e.currentItem,"albumQqPhoto","string"==typeof t?t.trim():t)},expression:"currentItem.albumQqPhoto"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.editHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.editBtnLoading},on:{click:function(t){return e.editHandleConfirm("currentItem")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"300","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[a("el-form",{ref:"addList",attrs:{"label-position":"left","label-width":"130px",rules:e.addRules,model:e.addList}},[a("el-form-item",{attrs:{label:"专辑名称",prop:"albumName"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.albumName,callback:function(t){e.$set(e.addList,"albumName","string"==typeof t?t.trim():t)},expression:"addList.albumName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专辑QQ音乐ID",prop:"albumQqId"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.albumQqId,callback:function(t){e.$set(e.addList,"albumQqId","string"==typeof t?t.trim():t)},expression:"addList.albumQqId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专辑QQ音乐MID",prop:"albumQqMid"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.albumQqMid,callback:function(t){e.$set(e.addList,"albumQqMid","string"==typeof t?t.trim():t)},expression:"addList.albumQqMid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专辑对应歌手ID",prop:"albumQqSingerId"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.albumQqSingerId,callback:function(t){e.$set(e.addList,"albumQqSingerId","string"==typeof t?t.trim():t)},expression:"addList.albumQqSingerId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专辑QQ音乐图片",prop:"albumQqPhoto"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.albumQqPhoto,callback:function(t){e.$set(e.addList,"albumQqPhoto","string"==typeof t?t.trim():t)},expression:"addList.albumQqPhoto"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(n,r,!1,function(e){a("FB4G")},"data-v-45d504c0",null);t.default=l.exports},FB4G:function(e,t){}});