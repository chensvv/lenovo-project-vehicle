webpackJsonp([71],{"+8gz":function(e,t){},gl4B:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=s("bOdI"),o=s.n(n),a=s("gRE1"),l=s.n(a),r=(s("pWbq"),s("2hMI")),d=s("krqS"),c={data:function(){return{list:[],perList:[],fileList:[],totalClass:"8",currentItem:{id:"",songName:"",songMid:"",songId:"",songAlbumId:"",songSingerId:"",songSource:""},sourceList:[],addList:{songName:"",songMid:"",songId:"",songAlbumId:"",songSingerId:"",songSource:""},searchItem:{name:""},addRules:{songName:[{required:!0,message:"请输入歌曲名称",trigger:"change"}],songMid:[{required:!0,message:"请输入QQ音乐MID",trigger:"change"}],songId:[{required:!0,message:"请输入QQ音乐ID",trigger:"change"}],songAlbumId:[{required:!0,message:"请输入对应专辑ID",trigger:"change"}],songSingerId:[{required:!0,message:"对应歌手ID",trigger:"change"}],songSource:[{required:!0,message:"请选择歌曲来源",trigger:"change"}]},editRules:{songName:[{required:!0,message:"请输入歌曲名称",trigger:"change"}],songMid:[{required:!0,message:"请输入QQ音乐MID",trigger:"change"}],songId:[{required:!0,message:"请输入QQ音乐ID",trigger:"change"}],songAlbumId:[{required:!0,message:"请输入对应专辑ID",trigger:"change"}],songSingerId:[{required:!0,message:"对应歌手ID",trigger:"change"}],songSource:[{required:!0,message:"请选择歌曲来源",trigger:"change"}]},editVisible:!1,addVisible:!1,currentPage:1,pageSize:10,totalCount:1,showTitle:!0,seaBtnLoading:!1,addBtnLoading:!1,editBtnLoading:!1,listLoading:!0,uploadVisible:!1,fileBtnLoading:!1,isshow:!0}},created:function(){var e=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(t){e.perList.push(l()(t).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("skill:music:updatesong")&&-1==this.perList.indexOf("skill:music:deletesong")&&(this.isshow=!1)},methods:(i={onShowNameTipsMouseenter:function(e){var t=e.target,s=t.clientWidth,i=t.scrollWidth;this.showTitle=!(s<i)},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},importExcel:function(){this.uploadVisible=!0},closeFile:function(){this.uploadVisible=!1},fileChange:function(e,t){this.fileList=t},handleExceed:function(e,t){this.$message.warning("当前限制选择 1 个文件，请删除后继续上传")},beforeUpload:function(e){var t="xls"===e.name.split(".")[1],s="xlsx"===e.name.split(".")[1];return t||s?t||s:(this.$message.warning("上传文件必须是Excel格式!"),!1)},postFile:function(){var e=this;if(console.log(this.fileList),this.$refs.upload.$children[0].fileList.length<1)return this.$message.warning("请选择要上传的文件！"),!1;var t=new FormData;this.fileList.forEach(function(e,s){t.append("file",e.raw)}),this.fileBtnLoading=!0,Object(r._198)(t).then(function(t){e.fileBtnLoading=!1,200==t.data.code?(e.$message({message:t.data.msg,type:"success"}),e.$refs.upload.clearFiles(),e.uploadVisible=!1,e.getList()):e.$message({message:t.data.errorMessage,type:"error",duration:1500})}).catch(function(t){e.$message.error("请稍后重试！"),e.fileBtnLoading=!1})}},o()(i,"closeFile",function(){this.files=[],this.$refs.upload.clearFiles(),this.uploadVisible=!1}),o()(i,"handleEdit",function(e,t){var s=this;this.editVisible=!0,Object(r._197)().then(function(e){s.sourceList=e.data}),this.currentItem={id:t.id,songName:t.songName,songMid:t.songMid,songId:t.songId,songAlbumId:t.songAlbumId,songSingerId:t.songSingerId,songSource:t.songSource}}),o()(i,"handleDel",function(e,t){var s=this,i={id:t.id};i.sign=Object(d.a)(i),this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r._195)(i).then(function(e){200==e.data.code?(s.$message({message:"删除成功",type:"success",duration:1500}),s.getList()):s.$message({message:e.data.errorMessage,type:"error",duration:1500})})}).catch(function(e){console.log(e)})}),o()(i,"openFun",function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].resetFields()})}),o()(i,"closeFun",function(e){var t=this;this.$nextTick(function(){t.$refs[e]&&t.$refs[e].clearValidate()})}),o()(i,"editHandleClose",function(){this.editVisible=!1}),o()(i,"addHandleClose",function(){this.addVisible=!1}),o()(i,"editHandleConfirm",function(e){var t=this,s={id:this.currentItem.id,songName:this.currentItem.songName,songMid:this.currentItem.songMid,songId:this.currentItem.songId,songAlbumId:this.currentItem.songAlbumId,songSingerId:this.currentItem.songSingerId,songSource:this.currentItem.songSource};s.sign=Object(d.a)(s),this.$refs[e].validate(function(e){if(!e)return!1;t.editBtnLoading=!0,Object(r._199)(s).then(function(e){t.editBtnLoading=!1,200==e.data.code?(t.$message({message:"编辑成功",type:"success",duration:1500}),t.getList(),t.editVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1500})}).catch(function(e){t.editBtnLoading=!1})})}),o()(i,"handleAdd",function(){var e=this;this.addVisible=!0,Object(r._197)().then(function(t){e.sourceList=t.data})}),o()(i,"addHandleConfirm",function(e){var t=this,s={songName:this.addList.songName,songMid:this.addList.songMid,songId:this.addList.songId,songAlbumId:this.addList.songAlbumId,songSingerId:this.addList.songSingerId,songSource:this.addList.songSource};s.sign=Object(d.a)(s),this.$refs[e].validate(function(e){if(!e)return!1;t.addBtnLoading=!0,Object(r._194)(s).then(function(e){t.addBtnLoading=!1,200==e.data.code?(t.$message({message:"添加成功",type:"success",duration:1500}),t.getList(),t.addVisible=!1):t.$message({message:e.data.errorMessage,type:"error",duration:1500})}).catch(function(e){t.addBtnLoading=!1})})}),o()(i,"getList",function(){var e=this;this.listLoading=!0;var t={name:this.searchItem.name,pgstr:this.currentPage,pcstr:this.pageSize};t.sign=Object(d.a)(t),Object(r._196)(t).then(function(t){e.listLoading=!1,200==t.data.code?(e.list=t.data.data,e.totalCount=t.data.count,e.totalClass=t.data.data.length):e.$message({message:t.data.errorMessage,type:"error",duration:1500})}).catch(function(){e.listLoading=!1})}),o()(i,"handleAlbum",function(){this.$router.push({path:"/lasf-kv/album"})}),o()(i,"handleSinger",function(){this.$router.push({path:"/skill/music/singerlist"})}),i)},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"table height-105"},[s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),s("el-breadcrumb-item",{attrs:{to:{path:"/skill/applist"}}},[e._v("技能管理")]),e._v(" "),s("el-breadcrumb-item",[e._v(e._s(this.$route.meta.title))])],1),e._v(" "),s("el-form",{ref:"searchItem",staticClass:"demo-form-inline height70 width130",attrs:{inline:!0,model:e.searchItem,"label-width":"90px",size:"mini"}},[s("div",{staticClass:"form-input height70"},[s("el-form-item",{attrs:{label:"歌曲名称",prop:"name"}},[s("el-input",{attrs:{clearable:""},model:{value:e.searchItem.name,callback:function(t){e.$set(e.searchItem,"name","string"==typeof t?t.trim():t)},expression:"searchItem.name"}})],1)],1),e._v(" "),s("div",{staticClass:"form-btn"},[s("el-button",{attrs:{size:"mini",type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),s("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:music:addsong",expression:"'skill:music:addsong'"}],attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")]),e._v(" "),s("el-button",{attrs:{size:"mini",icon:"el-icon-upload"},on:{click:function(t){return e.importExcel()}}},[e._v("导入数据")]),e._v(" "),s("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:music:albumlist",expression:"'skill:music:albumlist'"}],attrs:{size:"mini"},on:{click:function(t){return e.handleAlbum()}}},[e._v("专辑列表")]),e._v(" "),s("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:music:singerlist",expression:"'skill:music:singerlist'"}],attrs:{size:"mini"},on:{click:function(t){return e.handleSinger()}}},[e._v("歌手管理")])],1)]),e._v(" "),s("div",{staticClass:"table-box"},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],class:this.totalClass<="7"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:e.list,stripe:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},[s("el-table-column",{attrs:{type:"index",align:"center",label:"#"}}),e._v(" "),s("el-table-column",{attrs:{label:"歌曲名称",prop:"songName",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.songName,placement:"top"}},[s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.songName)+"\n                        ")])]),e._v(" "),e.showTitle?s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.songName)+"\n                    ")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"歌曲ID",prop:"songId",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.songId,placement:"top"}},[s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.songId)+"\n                        ")])]),e._v(" "),e.showTitle?s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.songId)+"\n                    ")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"专辑ID",prop:"id",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.id,placement:"top"}},[s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.id)+"\n                        ")])]),e._v(" "),e.showTitle?s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.id)+"\n                    ")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"QQ音乐MID",prop:"songMid",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.songMid,placement:"top"}},[s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.songMid)+"\n                        ")])]),e._v(" "),e.showTitle?s("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                        "+e._s(t.row.songMid)+"\n                    ")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"更新时间",prop:"displayUpdateTime",align:"center",width:"140"}}),e._v(" "),e.isshow?s("el-table-column",{attrs:{label:"操作",align:"center",width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:music:updatesong",expression:"'skill:music:updatesong'"}],attrs:{size:"mini"},on:{click:function(s){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),s("el-button",{directives:[{name:"has",rawName:"v-has",value:"skill:music:deletesong",expression:"'skill:music:deletesong'"}],attrs:{size:"mini",type:"danger"},on:{click:function(s){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}],null,!1,2629014775)}):e._e()],1),e._v(" "),s("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),s("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:"编辑",visible:e.editVisible,width:"40%",top:"10vh","before-close":e.editHandleClose},on:{"update:visible":function(t){e.editVisible=t},close:function(t){return e.closeFun("currentItem")}}},[s("el-form",{ref:"currentItem",attrs:{"label-position":"right","label-width":"120px",size:"small",rules:e.editRules,model:e.currentItem}},[s("el-form-item",{attrs:{label:"歌曲名称",prop:"songName"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.songName,callback:function(t){e.$set(e.currentItem,"songName","string"==typeof t?t.trim():t)},expression:"currentItem.songName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"QQ音乐MID",prop:"songMid"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.songMid,callback:function(t){e.$set(e.currentItem,"songMid","string"==typeof t?t.trim():t)},expression:"currentItem.songMid"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"QQ音乐ID",prop:"songId"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.songId,callback:function(t){e.$set(e.currentItem,"songId","string"==typeof t?t.trim():t)},expression:"currentItem.songId"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"对应专辑ID",prop:"songAlbumId"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.songAlbumId,callback:function(t){e.$set(e.currentItem,"songAlbumId","string"==typeof t?t.trim():t)},expression:"currentItem.songAlbumId"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"对应歌手简介",prop:"songSingerId"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.currentItem.songSingerId,callback:function(t){e.$set(e.currentItem,"songSingerId","string"==typeof t?t.trim():t)},expression:"currentItem.songSingerId"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"歌曲来源",prop:"songSource"}},[s("el-select",{attrs:{placeholder:"--",clearable:""},model:{value:e.currentItem.songSource,callback:function(t){e.$set(e.currentItem,"songSource",t)},expression:"currentItem.songSource"}},e._l(e.sourceList,function(e,t){return s("el-option",{key:t,attrs:{label:e.appName,value:e.id}})}),1)],1)],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.editHandleClose}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary",loading:e.editBtnLoading},on:{click:function(t){return e.editHandleConfirm("currentItem")}}},[e._v("确 定")])],1)],1),e._v(" "),s("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:"新增",visible:e.addVisible,width:"40%",top:"10vh","before-close":e.addHandleClose},on:{"update:visible":function(t){e.addVisible=t},open:function(t){return e.openFun("addList")}}},[s("el-form",{ref:"addList",attrs:{"label-position":"right","label-width":"120px",size:"small",rules:e.addRules,model:e.addList}},[s("el-form-item",{attrs:{label:"歌曲名称",prop:"songName"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.songName,callback:function(t){e.$set(e.addList,"songName","string"==typeof t?t.trim():t)},expression:"addList.songName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"QQ音乐MID",prop:"songMid"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.songMid,callback:function(t){e.$set(e.addList,"songMid","string"==typeof t?t.trim():t)},expression:"addList.songMid"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"QQ音乐ID",prop:"songId"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.songId,callback:function(t){e.$set(e.addList,"songId","string"==typeof t?t.trim():t)},expression:"addList.songId"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"对应专辑ID",prop:"songAlbumId"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.songAlbumId,callback:function(t){e.$set(e.addList,"songAlbumId","string"==typeof t?t.trim():t)},expression:"addList.songAlbumId"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"对应歌手ID",prop:"songSingerId"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.addList.songSingerId,callback:function(t){e.$set(e.addList,"songSingerId","string"==typeof t?t.trim():t)},expression:"addList.songSingerId"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"歌曲来源",prop:"songSource"}},[s("el-select",{attrs:{placeholder:"--",clearable:""},model:{value:e.addList.songSource,callback:function(t){e.$set(e.addList,"songSource",t)},expression:"addList.songSource"}},e._l(e.sourceList,function(e,t){return s("el-option",{key:t,attrs:{label:e.appName,value:e.id}})}),1)],1)],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.addHandleClose}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary",loading:e.addBtnLoading},on:{click:function(t){return e.addHandleConfirm("addList")}}},[e._v("确 定")])],1)],1),e._v(" "),s("el-dialog",{staticClass:"eldialog",attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:"上传文件",visible:e.uploadVisible,width:"40%",top:"10vh","before-close":e.closeFile},on:{"update:visible":function(t){e.uploadVisible=t}}},[s("el-form",{staticClass:"eldialogForm"},[s("el-form-item",{attrs:{label:""}},[s("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{drag:"","auto-upload":!1,accept:".xlsx,.xls",action:"","before-upload":e.beforeUpload,"on-change":e.fileChange,"on-exceed":e.handleExceed,filelist:e.fileList,multiple:!1,limit:1}},[s("i",{staticClass:"el-icon-upload"}),e._v(" "),s("div",{staticClass:"el-upload__text"},[e._v("\n              将文件拖到此处，或\n              "),s("em",[e._v("点击上传")])]),e._v(" "),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传Excel文件")])])],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){return e.closeFile()}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary",loading:e.fileBtnLoading},on:{click:function(t){return e.postFile()}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var g=s("VU/8")(c,u,!1,function(e){s("+8gz")},"data-v-3424fbe3",null);t.default=g.exports}});