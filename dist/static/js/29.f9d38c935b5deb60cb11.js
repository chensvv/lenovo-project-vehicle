webpackJsonp([29],{D7th:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("gRE1"),s=a.n(i),l=(a("pWbq"),a("2hMI")),n={data:function(){return{list:[],perList:[],totalClass:"",currentItem:{id:"",albumName:"",albumQqId:"",albumQqMid:"",albumQqSingerId:"",albumQqPhoto:""},addList:{albumName:"",albumQqId:"",albumQqMid:"",albumQqSingerId:"",albumQqPhoto:""},searchItem:{name:""},addRules:{albumName:[{required:!0,message:"请输入专辑名称",trigger:"change"}],albumQqId:[{required:!0,message:"请输入专辑QQ音乐ID",trigger:"change"}],albumQqMid:[{required:!0,message:"请输入专辑QQ音乐MID",trigger:"change"}],albumQqSingerId:[{required:!0,message:"请输入专辑对应歌手ID",trigger:"change"}],albumQqPhoto:[{required:!0,message:"请输入专辑QQ音乐图片",trigger:"change"}]},editRules:{albumName:[{required:!0,message:"请输入歌手名称",trigger:"change"}],albumQqId:[{required:!0,message:"请输入QQ音乐ID",trigger:"change"}],albumQqMid:[{required:!0,message:"请输入QQ音乐MID",trigger:"change"}],albumQqSingerId:[{required:!0,message:"请输入专辑对应歌手ID",trigger:"change"}],albumQqPhoto:[{required:!0,message:"请输入专辑QQ音乐图片",trigger:"change"}]},editVisible:!1,addVisible:!1,currentPage:1,pageSize:10,totalCount:1,showTitle:!0,seaBtnLoading:!1,addBtnLoading:!1,editBtnLoading:!1,listLoading:!0,isshow:!0}},created:function(){var e=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(t){e.perList.push(s()(t).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("skill:music:updatealbuml")&&-1==this.perList.indexOf("skill:music:deletealbum")&&(this.isshow=!1)},methods:{onShowNameTipsMouseenter:function(e){var t=e.target,a=t.clientWidth,i=t.scrollWidth;this.showTitle=!(a<i)},resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleEdit:function(e,t){this.editVisible=!0,this.currentItem={id:t.id,albumName:t.albumName,albumQqId:t.albumQqId,albumQqMid:t.albumQqMid,albumQqSingerId:t.albumQqSingerId,albumQqPhoto:t.albumQqPhoto}},handleDel:function(e,t){var a=this,i={albumQqId:t.id};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(l.b)(i).then(function(e){200==e.data.code?(a.$message({message:"删除成功",type:"success",duration:1e3}),a.getList()):a.$message({message:e.data.errorMessage,type:"error",duration:1e3})})}).catch(function(e){console.log(e)})},openFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})},closeFun:function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].clearValidate()})},editHandleClose:function(){this.editVisible=!1},addHandleClose:function(){this.addVisible=!1},editHandleConfirm:function(e){var t=this,a={id:this.currentItem.id,albumName:this.currentItem.albumName,albumQqId:this.currentItem.albumQqId,albumQqMid:this.currentItem.albumQqMid,albumQqPhoto:this.currentItem.albumQqPhoto,albumQqIntroduce:this.currentItem.albumQqIntroduce,albumQqPosterUrl:this.currentItem.albumQqPosterUrl};this.$refs[e].validate(function(e){if(!e)return!1;t.editBtnLoading=!0,Object(l.d)(a).then(function(e){t.editBtnLoading=!1,200==e.data.code?(t.$message({message:"编辑成功",type:"success",duration:1e3}),t.getList(),t.editVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(e){t.editBtnLoading=!1})})},handleAdd:function(){this.addVisible=!0},addHandleConfirm:function(e){var t=this,a={albumName:this.addList.albumName,albumQqId:this.addList.albumQqId,albumQqMid:this.addList.albumQqMid,albumQqSingerId:this.addList.albumQqSingerId,albumQqPhoto:this.addList.albumQqPhoto};this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(l.a)(a).then(function(e){t.addBtnLoading=!1,200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.getList(),t.addVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1e3})}).catch(function(e){t.addBtnLoading=!1})})},getList:function(){var e=this;this.listLoading=!0;var t={name:this.searchItem.name,pgstr:this.currentPage,pcstr:this.pageSize};Object(l.c)(t).then(function(t){e.listLoading=!1,200==t.data.code?(e.list=t.data.data,e.totalCount=t.data.count,e.totalClass=t.data.data.length):e.$message({message:t.data.errorMessage,type:"error",duration:1e3})}).catch(function(){e.listLoading=!1})},handleSong:function(){this.$router.push({path:"/lasf-kv/song"})},handleSinger:function(){this.$router.push({path:"/skill/music/singerlist"})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table height-85"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/outer/list"}}},[e._v("技能管理")]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(this.$route.meta.title))])],1),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline height50 width130",attrs:{inline:!0,model:e.searchItem,"label-width":"90px",size:"mini"}},[a("div",{staticClass:"form-input height50"},[a("el-form-item",{attrs:{label:"专辑名称",prop:"name"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.name,callback:function(t){e.$set(e.searchItem,"name","string"==typeof t?t.trim():t)},expression:"searchItem.name"}})],1)],1),e._v(" "),a("div",{staticClass:"form-btn"},[a("el-button",{attrs:{size:"mini",type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:music:addalbum",expression:"'skill:music:addalbum'"}],attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:music:songlist",expression:"'skill:music:songlist'"}],attrs:{size:"mini"},on:{click:function(t){return e.handleSong()}}},[e._v("歌曲列表")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:music:singerlist",expression:"'skill:music:singerlist'"}],attrs:{size:"mini"},on:{click:function(t){return e.handleSinger()}}},[e._v("歌手管理")])],1)]),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],class:this.totalClass<="7"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:e.list}},[a("el-table-column",{attrs:{type:"index",align:"center",label:"#"}}),e._v(" "),a("el-table-column",{attrs:{label:"名称",prop:"albumName",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.albumName,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.albumName)+"\n                        ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.albumName)+"\n                    ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"专辑ID",prop:"id",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.id,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.id)+"\n                        ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.id)+"\n                    ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"QQ音乐ID",prop:"albumQqId",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.albumQqId,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.albumQqId)+"\n                        ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.albumQqId)+"\n                    ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"QQ音乐MID",prop:"albumQqMid",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.albumQqMid,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.albumQqMid)+"\n                        ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.albumQqMid)+"\n                    ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"专辑对应歌手ID",prop:"albumQqSingerId",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.albumQqSingerId,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.albumQqSingerId)+"\n                        ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.albumQqSingerId)+"\n                    ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"更新时间",prop:"displayUpdateTime",align:"center","min-width":"120"}}),e._v(" "),e.isshow?a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:music:updatealbuml",expression:"'skill:music:updatealbuml'"}],attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:music:deletealbum",expression:"'skill:music:deletealbum'"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}],null,!1,1001749079)}):e._e()],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"40%",top:"10vh","before-close":e.editHandleClose},on:{"update:visible":function(t){e.editVisible=t},close:function(t){return e.closeFun("currentItem")}}},[a("el-form",{ref:"currentItem",attrs:{"label-position":"right","label-width":"130px",size:"small",rules:e.editRules,model:e.currentItem}},[a("el-form-item",{attrs:{label:"专辑名称",prop:"albumName"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.albumName,callback:function(t){e.$set(e.currentItem,"albumName","string"==typeof t?t.trim():t)},expression:"currentItem.albumName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专辑QQ音乐ID",prop:"albumQqId"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.albumQqId,callback:function(t){e.$set(e.currentItem,"albumQqId","string"==typeof t?t.trim():t)},expression:"currentItem.albumQqId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专辑QQ音乐MID",prop:"albumQqMid"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.albumQqMid,callback:function(t){e.$set(e.currentItem,"albumQqMid","string"==typeof t?t.trim():t)},expression:"currentItem.albumQqMid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专辑对应歌手ID",prop:"albumQqSingerId"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.albumQqSingerId,callback:function(t){e.$set(e.currentItem,"albumQqSingerId","string"==typeof t?t.trim():t)},expression:"currentItem.albumQqSingerId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专辑QQ音乐图片",prop:"albumQqPhoto"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.albumQqPhoto,callback:function(t){e.$set(e.currentItem,"albumQqPhoto","string"==typeof t?t.trim():t)},expression:"currentItem.albumQqPhoto"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.editHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.editBtnLoading},on:{click:function(t){return e.editHandleConfirm("currentItem")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addVisible,width:"40%",top:"10vh","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[a("el-form",{ref:"addList",attrs:{"label-position":"right","label-width":"130px",size:"small",rules:e.addRules,model:e.addList}},[a("el-form-item",{attrs:{label:"专辑名称",prop:"albumName"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.albumName,callback:function(t){e.$set(e.addList,"albumName","string"==typeof t?t.trim():t)},expression:"addList.albumName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专辑QQ音乐ID",prop:"albumQqId"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.albumQqId,callback:function(t){e.$set(e.addList,"albumQqId","string"==typeof t?t.trim():t)},expression:"addList.albumQqId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专辑QQ音乐MID",prop:"albumQqMid"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.albumQqMid,callback:function(t){e.$set(e.addList,"albumQqMid","string"==typeof t?t.trim():t)},expression:"addList.albumQqMid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专辑对应歌手ID",prop:"albumQqSingerId"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.albumQqSingerId,callback:function(t){e.$set(e.addList,"albumQqSingerId","string"==typeof t?t.trim():t)},expression:"addList.albumQqSingerId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"专辑QQ音乐图片",prop:"albumQqPhoto"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.albumQqPhoto,callback:function(t){e.$set(e.addList,"albumQqPhoto","string"==typeof t?t.trim():t)},expression:"addList.albumQqPhoto"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(n,o,!1,function(e){a("D9fM")},"data-v-7528f7bb",null);t.default=r.exports},D9fM:function(e,t){}});