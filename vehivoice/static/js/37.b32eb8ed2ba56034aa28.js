webpackJsonp([37],{QYqI:function(e,t){},YFle:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("gRE1"),a=i.n(s),n=(i("pWbq"),i("2hMI"));var o=i("FT/c"),r=i("krqS"),l={data:function(){return{pickerOptions:{disabledDate:function(e){var t=Date.now();return e.getTime()>t}},list:[],perList:[],zipLists:[],keywordList:[],exportIds:[],totalClass:"8",downURLs:o.a.proURL,searchItem:{dtp:"",uid:"",clientVersion:"",engineVersion:"",developer:"",keywordType:"",keywordPhrase:"",origin:"",pickerVal:[]},column:{prop:"",order:""},currentPage:1,pageSize:10,totalCount:1,showTitle:!0,seaBtnLoading:!1,zipBtnLoading:!1,listBtnLoading:!1,exportBtnLoading:!1,downloading:!1,zipVisible:!1,listLoading:!0,isshow:!1,btnshow:!0,isPageNumberError:!1,MaxId:"",MinId:"",nextPage:"",isLastPage:!1,lastCurrentPage:""}},created:function(){var e=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(t){e.perList.push(a()(t).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("trigger:download")&&(this.btnshow=!1),this.getKeywordList()},methods:{onShowNameTipsMouseenter:function(e){var t=e.target,i=t.clientWidth,s=t.scrollWidth;this.showTitle=!(i<s)},handleDown:function(e,t){Object(n._145)(t.filePath).then(function(e){var i=new Blob([e.data]),s=document.createElement("a"),a=window.URL.createObjectURL(i),n=t.filePath;s.href=a,s.download=n,s.click(),window.URL.revokeObjectURL(a)})},downZip:function(e){var t=this;this.downloading=!0,Object(n._252)(e).then(function(i){t.downloading=!1;var s=new Blob([i.data]),a=document.createElement("a"),n=window.URL.createObjectURL(s),o=e;a.href=n,a.download=o,a.click(),window.URL.revokeObjectURL(n)})},onSubmit:function(){this.seaBtnLoading=!0,this.getList(1),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleSelectionChange:function(e){this.exportIds=e},turnToPage:function(e){if(-1==(e=parseInt(e)))this.getList(e);else{if(!e||e<1)return console.log("页码输入有误！"),this.isPageNumberError=!0,!1;this.getList(e),this.isPageNumberError=!1}},exportBatch:function(){var e=this,t=this.exportIds.map(function(e){return e.id});if(0==t.length||t==[]||null==t)this.$message({message:"请选择要导出的数据",type:"warning",duration:1500});else{this.exportBtnLoading=!0;var i={ids:t};i.sign=Object(r.a)(i),Object(n._216)(i).then(function(i){e.exportBtnLoading=!1;var s=new Blob([i.data]),a=document.createElement("a"),n=window.URL.createObjectURL(s),o=t.join("-")+".zip";a.href=n,a.download=o,a.click(),window.URL.revokeObjectURL(n)}).catch(function(){e.$message({message:"请稍后再试！",type:"error",duration:1500}),e.exportBtnLoading=!1})}},dataPack:function(){var e=this,t={startStr:this.searchItem.refreshTime,endStr:this.searchItem.putTime,dtp:this.searchItem.dtp,uid:this.searchItem.uid,clientVersion:this.searchItem.clientVersion,engineVersion:this.searchItem.engineVersion,developer:this.searchItem.developer,keywordType:this.searchItem.keywordType,keywordPhrase:this.searchItem.keywordPhrase,origin:this.searchItem.origin,userName:sessionStorage.getItem("username")};t.sign=Object(r.a)(t),this.zipBtnLoading=!0,Object(n._218)(t).then(function(t){e.zipBtnLoading=!1,200==t.data.code?e.$message({message:"打包成功",type:"success",duration:1500}):void 0!=t.data.code&&e.$message({message:t.data.code+"："+t.data.msg,type:"error",duration:2e3})}).catch(function(t){e.zipBtnLoading=!1,e.$message({message:res.data.msg,type:"error",duration:1500})})},packResult:function(){var e=this;this.zipVisible=!0;var t={userName:sessionStorage.getItem("username")};t.sign=Object(r.a)(t),Object(n._253)(t).then(function(t){e.zipLists=t.data.array,0==e.zipLists.length&&(e.isshow=!0)})},zipHandleClose:function(){this.zipVisible=!1},zipFileDownload:function(e){var t=o.a.proURL+"/lasf-mgr/trigger/download?fileName="+e+"&fileType=zip",i=document.createElement("a");i.href=t,i.download=e,i.click()},querySearch:function(e,t){var i=this.keywordList;t(e?i.filter(this.createFilter(e)):i)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},getKeywordList:function(){var e=this;Object(n._215)().then(function(t){e.keywordList=t.data.data})},sortChange:function(e){this.column={prop:e.prop,order:e.order},this.getList(this.lastCurrentPage)},getList:function(e){var t=this;this.listLoading=!0;var i={startStr:null==this.searchItem.pickerVal?"":this.searchItem.pickerVal[0],endStr:null==this.searchItem.pickerVal?"":this.searchItem.pickerVal[1],dtp:this.searchItem.dtp,uid:this.searchItem.uid,clientVersion:this.searchItem.clientVersion,engineVersion:this.searchItem.engineVersion,developer:this.searchItem.developer,keywordType:this.searchItem.keywordType,keywordPhrase:this.searchItem.keywordPhrase,origin:this.searchItem.origin,fieldName:this.column.prop,pgstr:this.nextPage,pcstr:this.pageSize,maxId:this.MaxId,minId:this.MinId,nextPage:1==e||void 0==e?"1":e,currentPage:this.lastCurrentPage,order:"ascending"==this.column.order?"0":""};i.sign=Object(r.a)(i),Object(n._217)(i).then(function(e){t.listLoading=!1,200==e.data.code?(t.list=e.data.data.data,t.totalClass=e.data.data.data.length,t.MaxId=Math.max.apply(Math,t.list.map(function(e){return e.id})),t.MinId=Math.min.apply(Math,t.list.map(function(e){return e.id})),t.isLastPage=e.data.data.lastPage,t.lastCurrentPage=e.data.data.currentPage,t.currentPage=e.data.data.currentPage):void 0!=e.data.code&&t.$message({message:e.data.code+"："+e.data.msg,type:"error",duration:2e3})}).catch(function(){t.listLoading=!1})}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"table height-155"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),i("el-breadcrumb-item",{attrs:{to:{path:"/csc/csc"}}},[e._v("闲聊数据")]),e._v(" "),i("el-breadcrumb-item",[e._v(e._s(this.$route.meta.title))])],1),e._v(" "),i("el-form",{ref:"searchItem",staticClass:"demo-form-inline height120 width130",attrs:{inline:!0,model:e.searchItem,"label-width":"90px",size:"mini"}},[i("div",{staticClass:"form-input height120"},[i("el-form-item",{attrs:{label:"客户端平台",prop:"dtp"}},[i("el-input",{attrs:{clearable:""},model:{value:e.searchItem.dtp,callback:function(t){e.$set(e.searchItem,"dtp","string"==typeof t?t.trim():t)},expression:"searchItem.dtp"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"用户ID",prop:"uid"}},[i("el-input",{attrs:{clearable:""},model:{value:e.searchItem.uid,callback:function(t){e.$set(e.searchItem,"uid","string"==typeof t?t.trim():t)},expression:"searchItem.uid"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"客户端版本",prop:"clientVersion"}},[i("el-input",{attrs:{clearable:""},model:{value:e.searchItem.clientVersion,callback:function(t){e.$set(e.searchItem,"clientVersion","string"==typeof t?t.trim():t)},expression:"searchItem.clientVersion"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"引擎版本",prop:"engineVersion"}},[i("el-input",{attrs:{clearable:""},model:{value:e.searchItem.engineVersion,callback:function(t){e.$set(e.searchItem,"engineVersion","string"==typeof t?t.trim():t)},expression:"searchItem.engineVersion"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"开发者",prop:"developer"}},[i("el-input",{attrs:{clearable:""},model:{value:e.searchItem.developer,callback:function(t){e.$set(e.searchItem,"developer","string"==typeof t?t.trim():t)},expression:"searchItem.developer"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"唤醒词类型",prop:"keywordType"}},[i("el-input",{attrs:{clearable:""},model:{value:e.searchItem.keywordType,callback:function(t){e.$set(e.searchItem,"keywordType","string"==typeof t?t.trim():t)},expression:"searchItem.keywordType"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"唤醒词",prop:"keywordPhrase"}},[i("el-autocomplete",{attrs:{"fetch-suggestions":e.querySearch,clearable:""},on:{select:e.handleSelect},model:{value:e.searchItem.keywordPhrase,callback:function(t){e.$set(e.searchItem,"keywordPhrase",t)},expression:"searchItem.keywordPhrase"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"数据来源",prop:"origin"}},[i("el-input",{attrs:{clearable:""},model:{value:e.searchItem.origin,callback:function(t){e.$set(e.searchItem,"origin","string"==typeof t?t.trim():t)},expression:"searchItem.origin"}})],1),e._v(" "),i("el-form-item",{staticClass:"date-form",attrs:{label:"日期",prop:"pickerVal"}},[i("el-date-picker",{attrs:{type:"daterange",align:"center",size:"mini","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd","default-value":new Date((new Date).setMonth((new Date).getMonth()-1))},model:{value:e.searchItem.pickerVal,callback:function(t){e.$set(e.searchItem,"pickerVal",t)},expression:"searchItem.pickerVal"}})],1)],1),e._v(" "),i("div",{staticClass:"form-btn-block"},[i("el-button",{attrs:{size:"mini",type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"trigger:zip",expression:"'trigger:zip'"}],attrs:{size:"mini",loading:e.zipBtnLoading},on:{click:e.dataPack}},[e._v("数据打包")]),e._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"trigger:zip:list",expression:"'trigger:zip:list'"}],attrs:{size:"mini"},on:{click:e.packResult}},[e._v("打包结果")]),e._v(" "),i("el-button",{directives:[{name:"has",rawName:"v-has",value:"trigger:batchDownload",expression:"'trigger:batchDownload'"}],attrs:{icon:"el-icon-download",size:"mini",loading:e.exportBtnLoading},on:{click:e.exportBatch}},[e._v("批量导出")])],1)]),e._v(" "),i("div",{staticClass:"table-box"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],class:this.totalClass<="7"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:e.list,stripe:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"},on:{"sort-change":e.sortChange,"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"50",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{type:"index",align:"center",label:"#"}}),e._v(" "),i("el-table-column",{attrs:{label:"设备类型",prop:"dtp",align:"center",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.dtp,placement:"top"}},[i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.dtp)+"\n                      ")])]),e._v(" "),e.showTitle?i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.dtp)+"\n                  ")]):e._e()]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"用户ID",prop:"uid",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.uid,placement:"top"}},[i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.uid)+"\n                      ")])]),e._v(" "),e.showTitle?i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.uid)+"\n                  ")]):e._e()]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"客户端版本",prop:"clientVersion",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.clientVersion,placement:"top"}},[i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.clientVersion)+"\n                      ")])]),e._v(" "),e.showTitle?i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.clientVersion)+"\n                  ")]):e._e()]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"引擎版本",prop:"engineVersion",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.engineVersion,placement:"top"}},[i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.engineVersion)+"\n                      ")])]),e._v(" "),e.showTitle?i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.engineVersion)+"\n                  ")]):e._e()]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"开发者",prop:"developer",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.developer,placement:"top"}},[i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.developer)+"\n                      ")])]),e._v(" "),e.showTitle?i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.developer)+"\n                  ")]):e._e()]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"唤醒词类型",prop:"keywordType",align:"center",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.keywordType,placement:"top"}},[i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.keywordType)+"\n                      ")])]),e._v(" "),e.showTitle?i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.keywordType)+"\n                  ")]):e._e()]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"唤醒词",prop:"keywordPhrase",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.keywordPhrase,placement:"top"}},[i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.keywordPhrase)+"\n                      ")])]),e._v(" "),e.showTitle?i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.keywordPhrase)+"\n                  ")]):e._e()]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"数据来源",prop:"origin",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.origin,placement:"top"}},[i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.origin)+"\n                      ")])]),e._v(" "),e.showTitle?i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                      "+e._s(t.row.origin)+"\n                  ")]):e._e()]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"数据日期",prop:"displayDate",align:"center",width:"140"}}),e._v(" "),e.btnshow?i("el-table-column",{attrs:{label:"操作",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{directives:[{name:"has",rawName:"v-has",value:"trigger:download",expression:"'trigger:download'"}],attrs:{size:"mini"},on:{click:function(i){return e.handleDown(t.$index,t.row)}}},[e._v("下载文件")])]}}],null,!1,1535025030)}):e._e()],1),e._v(" "),i("div",{staticClass:"pagination-wrap"},[i("ul",{staticClass:"pagination"},[i("li",[i("button",{attrs:{disabled:1==e.currentPage},on:{click:function(t){return e.turnToPage(1)}}},[i("i",{staticClass:"el-icon-d-arrow-left"})])]),e._v(" "),0!=e.isLastPage&&1!=e.currentPage&&e.currentPage-2>0?i("li",{staticClass:"unum",domProps:{textContent:e._s(e.currentPage-2)},on:{click:function(t){return e.turnToPage(e.currentPage-2)}}}):e._e(),e._v(" "),e.currentPage-1>0?i("li",{staticClass:"unum",domProps:{textContent:e._s(e.currentPage-1)},on:{click:function(t){return e.turnToPage(e.currentPage-1)}}}):e._e(),e._v(" "),i("li",{staticClass:"active",domProps:{textContent:e._s(e.currentPage)},on:{click:function(t){return e.turnToPage(e.currentPage)}}}),e._v(" "),1!=e.isLastPage?i("li",{staticClass:"unum",domProps:{textContent:e._s(e.currentPage+1)},on:{click:function(t){return e.turnToPage(e.currentPage+1)}}}):e._e(),e._v(" "),e.currentPage+1<3&&1!=e.isLastPage?i("li",{staticClass:"unum",domProps:{textContent:e._s(e.currentPage+2)},on:{click:function(t){return e.turnToPage(e.currentPage+2)}}}):e._e(),e._v(" "),i("li",[i("button",{attrs:{disabled:1==e.isLastPage},on:{click:function(t){return e.turnToPage(-1)}}},[i("i",{staticClass:"el-icon-d-arrow-right"})])])])])],1),e._v(" "),i("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:"数据压缩包下载",visible:e.zipVisible,width:"40%",top:"10vh","before-close":e.zipHandleClose},on:{"update:visible":function(t){e.zipVisible=t}}},[i("div",{staticClass:"zip_box"},[e._l(e.zipLists,function(t,s){return i("div",{key:s},[i("el-link",{attrs:{type:"primary",icon:"el-icon-download"},on:{click:function(i){return e.downZip(t.filename)}}},[e._v(e._s(t.lasttime))])],1)}),e._v(" "),e.isshow?i("div",{staticStyle:{"text-align":"center"}},[e._v("暂无数据")]):e._e()],2),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.zipHandleClose}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var d=i("VU/8")(l,c,!1,function(e){i("QYqI")},"data-v-74a3c90e",null);t.default=d.exports}});