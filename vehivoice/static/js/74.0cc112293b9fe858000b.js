webpackJsonp([74],{B9Pa:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("gRE1"),r=a.n(i),o=a("pWbq"),n=a("krqS"),s=a("2hMI"),l=a("7oYi"),c={data:function(){return{pickerOptions:{disabledDate:function(t){var e=Date.now();return t.getTime()>e}},getpageNum:l.a,list:[],perList:[],totalClass:"8",searchItem:{appName:"",source:"",pickerVal:[]},addRules:{name:[{required:!0,message:"请输入应用名",trigger:"change"}]},editRules:{name:[{required:!0,message:"请输入应用名",trigger:"change"}]},addList:{name:"",url:"",score:"",participants:"",fee:"",cat:"",version:"",dnum:"",platform:"",info:"",caption:"",original:"",source:"",size:""},currentItem:{id:"",name:"",url:"",score:"",participants:"",fee:"",cat:"",version:"",dnum:"",platform:"",info:"",caption:"",original:"",source:"",size:""},sourceArr:[{typeLabel:"百度",typeVal:"baidu"},{typeLabel:"联想",typeVal:"lenovo"}],column:{prop:"",order:""},currentPage:1,pageSize:10,totalCount:1,showTitle:!0,btnLoading:!1,listLoading:!0,addVisible:!1,editVisible:!1,isshow:!0,tableHeight:50}},created:function(){var t=this;JSON.parse(sessionStorage.getItem("btnpermission")).map(function(e){t.perList.push(r()(e).join())}),this.getList()},mounted:function(){-1==this.perList.indexOf("app:update")&&-1==this.perList.indexOf("app:del")&&(this.isshow=!1)},methods:{changeInitCalendarRange:function(){var t=document.querySelector("button.el-picker-panel__icon-btn.el-icon-arrow-left");console.log(t),t&&t.click()},onShowNameTipsMouseenter:function(t){var e=t.target,a=e.clientWidth,i=e.scrollWidth;this.showTitle=!(a<i)},formTime:function(t,e){var a=t.createTime,i=new Date(a);return i.getFullYear()+"-"+Object(o.a)(i.getMonth()+1)+"-"+Object(o.a)(i.getDate())+" "+Object(o.a)(i.getHours())+":"+Object(o.a)(i.getMinutes())},onSubmit:function(){this.currentPage=1,this.btnLoading=!0,this.getList(),this.btnLoading=!1},handleSizeChange:function(t){this.pageSize=t,this.currentPage=1,this.getList()},handleCurrentChange:function(t){this.currentPage=t,this.getList()},dateChangebirthday:function(t){this.searchItem.startTime=t[0],this.searchItem.endTime=t[1]},openFun:function(t){var e=this;this.$nextTick(function(){e.$refs[t]&&e.$refs[t].resetFields()})},closeFun:function(t){var e=this;this.$nextTick(function(){e.$refs[t]&&e.$refs[t].clearValidate()})},editHandleClose:function(){this.editVisible=!1},handleEdit:function(t,e){this.editVisible=!0,this.currentItem={id:e.id,name:e.name,url:e.url,score:e.score,participants:e.participants,fee:e.fee,cat:e.cat,version:e.version,dnum:e.dnum,platform:e.platform,info:e.info,caption:e.caption,original:e.original,source:e.source,size:e.asize}},addHandleClose:function(){this.addVisible=!1},handleAdd:function(){this.addVisible=!0},editHandleConfirm:function(t){var e=this,a={id:this.currentItem.id,name:this.currentItem.name,url:this.currentItem.url,score:this.currentItem.score,participants:this.currentItem.participants,fee:this.currentItem.fee,cat:this.currentItem.cat,version:this.currentItem.version,dnum:this.currentItem.dnum,platform:this.currentItem.platform,info:this.currentItem.info,caption:this.currentItem.caption,original:this.currentItem.original,source:this.currentItem.source,asize:this.currentItem.size};a.sign=Object(n.a)(a),this.$refs[t].validate(function(t){if(!t)return!1;e.editBtnLoading=!0,Object(s.q)(a).then(function(t){e.editBtnLoading=!1,200==t.data.code?(e.$message({message:"编辑成功",type:"success",duration:2e3}),e.getList(),e.editVisible=!1):void 0!=t.data.code&&e.$message({message:t.data.code+"："+t.data.msg,type:"error",duration:2e3})}).catch(function(t){e.editBtnLoading=!1})})},addHandleConfirm:function(t){var e=this,a={name:this.addList.name,url:this.addList.url,score:this.addList.score,participants:this.addList.participants,fee:this.addList.fee,cat:this.addList.cat,version:this.addList.version,dnum:this.addList.dnum,platform:this.addList.platform,info:this.addList.info,caption:this.addList.caption,original:this.addList.original,source:this.addList.source,asize:this.addList.size};a.sign=Object(n.a)(a),this.$refs[t].validate(function(t){if(!t)return!1;e.addBtnLoading=!0,Object(s.i)(a).then(function(t){e.addBtnLoading=!1,200==t.data.code?(e.$message({message:"添加成功",type:"success",duration:2e3}),e.getList(),e.addVisible=!1):void 0!=t.data.code&&e.$message({message:t.data.code+"："+t.data.msg,type:"error",duration:2e3})}).catch(function(t){e.addBtnLoading=!1})})},handleDel:function(t,e){var a=this,i={id:e.id,sign:this.$md5("id="+e.id)};this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s.j)(i).then(function(t){200==t.data.code?(a.$message({message:"删除成功",type:"success",duration:2e3}),a.getList()):void 0!=t.data.code&&a.$message({message:t.data.code+"："+t.data.msg,type:"error",duration:2e3})})}).catch(function(t){console.log(t)})},sortChange:function(t){this.column={prop:t.prop,order:t.order},console.log(this.column),this.getList()},turnToPage:function(t){if(-1==(t=parseInt(t)))this.getList(t);else{if(this.currentPage=t,!t||t<1)return console.log("页码输入有误！"),!1;this.getList(t)}},getList:function(){var t=this;this.listLoading=!0;var e={pgstr:this.currentPage,pcstr:this.pageSize,startStr:null==this.searchItem.pickerVal?"":this.searchItem.pickerVal[0],endStr:this.searchItem.pickerVal[1],appname:this.searchItem.appName,source:this.searchItem.source,fieldName:this.column.prop,order:"ascending"==this.column.order?"0":""};e.sign=Object(n.a)(e),Object(s.k)(e).then(function(e){t.listLoading=!1,200==e.data.code?(t.list=e.data.data,t.totalCount=e.data.count,t.totalClass=e.data.data.length):void 0!=e.data.code&&t.$message({message:e.data.code+"："+e.data.msg,type:"error",duration:2e3})}).catch(function(){t.listLoading=!1})}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table height-105"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/app/list"}}},[t._v("应用搜索")]),t._v(" "),a("el-breadcrumb-item",[t._v(t._s(this.$route.meta.title))])],1),t._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline height70 width130",attrs:{inline:!0,model:t.searchItem,"label-width":"90px",size:"mini"}},[a("div",{staticClass:"form-input height70"},[a("el-form-item",{attrs:{label:"应用名",prop:"appName"}},[a("el-input",{attrs:{clearable:""},model:{value:t.searchItem.appName,callback:function(e){t.$set(t.searchItem,"appName","string"==typeof e?e.trim():e)},expression:"searchItem.appName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"来自于",prop:"source"}},[a("el-select",{attrs:{placeholder:"--",clearable:""},model:{value:t.searchItem.source,callback:function(e){t.$set(t.searchItem,"source","string"==typeof e?e.trim():e)},expression:"searchItem.source"}},[a("el-option",{attrs:{label:"联想",value:"lenovo"}}),t._v(" "),a("el-option",{attrs:{label:"百度",value:"baidu"}})],1)],1),t._v(" "),a("el-form-item",{staticClass:"date-form",attrs:{label:"日期",prop:"pickerVal"}},[a("el-date-picker",{attrs:{type:"daterange",align:"center",size:"mini","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions,"value-format":"yyyy-MM-dd","default-value":new Date((new Date).setMonth((new Date).getMonth()-1))},model:{value:t.searchItem.pickerVal,callback:function(e){t.$set(t.searchItem,"pickerVal",e)},expression:"searchItem.pickerVal"}})],1)],1),t._v(" "),a("div",{staticClass:"form-btn"},[a("el-button",{attrs:{size:"mini",type:"primary",loading:t.btnLoading},on:{click:t.onSubmit}},[t._v("查询")]),t._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"app:add",expression:"'app:add'"}],attrs:{size:"mini"},on:{click:function(e){return t.handleAdd()}}},[t._v("添加")])],1)]),t._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],class:this.totalClass<="7"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:t.list,stripe:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{type:"index",align:"center",label:"#"}}),t._v(" "),a("el-table-column",{attrs:{label:"应用名",prop:"name",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.name,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                        "+t._s(e.row.name)+"\n                        ")])]),t._v(" "),t.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                        "+t._s(e.row.name)+"\n                    ")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"类别",prop:"cat",align:"center",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.cat,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                        "+t._s(e.row.cat)+"\n                        ")])]),t._v(" "),t.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                        "+t._s(e.row.cat)+"\n                    ")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"平台",prop:"platform",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.platform,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                        "+t._s(e.row.platform)+"\n                        ")])]),t._v(" "),t.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                        "+t._s(e.row.platform)+"\n                    ")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"费用",prop:"fee",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"评分",prop:"score",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"下载次数",prop:"dnum",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.dnum,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                        "+t._s(e.row.dnum)+"\n                        ")])]),t._v(" "),t.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                        "+t._s(e.row.dnum)+"\n                    ")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"来源",prop:"source",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"更新时间",prop:"updateTime",align:"center",width:"130"}}),t._v(" "),a("el-table-column",{attrs:{label:"入库时间",prop:"createTime",align:"center",formatter:t.formTime,width:"130"}}),t._v(" "),t.isshow?a("el-table-column",{attrs:{label:"操作",width:"130",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"app:update",expression:"'app:update'"}],attrs:{size:"mini"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"app:del",expression:"'app:del'"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDel(e.$index,e.row)}}},[t._v("删除")])]}}],null,!1,892788183)}):t._e()],1),t._v(" "),a("div",{staticClass:"pagination-wrap"},[a("ul",{staticClass:"pagination"},[a("li",[a("button",{attrs:{disabled:1==t.currentPage},on:{click:function(e){return t.turnToPage(1)}}},[a("i",{staticClass:"el-icon-d-arrow-left"})])]),t._v(" "),t.currentPage==t.getpageNum(t.totalCount)&&1!=t.currentPage&&t.currentPage-2>0?a("li",{staticClass:"unum",domProps:{textContent:t._s(t.currentPage-2)},on:{click:function(e){return t.turnToPage(t.currentPage-2)}}}):t._e(),t._v(" "),t.currentPage-1>0?a("li",{staticClass:"unum",domProps:{textContent:t._s(t.currentPage-1)},on:{click:function(e){return t.turnToPage(t.currentPage-1)}}}):t._e(),t._v(" "),a("li",{staticClass:"active",domProps:{textContent:t._s(t.currentPage)},on:{click:function(e){return t.turnToPage(t.currentPage)}}}),t._v(" "),t.currentPage!=t.getpageNum(t.totalCount)&&0!=t.getpageNum(t.totalCount)?a("li",{staticClass:"unum",domProps:{textContent:t._s(t.currentPage+1)},on:{click:function(e){return t.turnToPage(t.currentPage+1)}}}):t._e(),t._v(" "),t.currentPage+1<3&&t.currentPage!=t.getpageNum(t.totalCount)&&t.getpageNum(t.totalCount)>=3?a("li",{staticClass:"unum",domProps:{textContent:t._s(t.currentPage+2)},on:{click:function(e){return t.turnToPage(t.currentPage+2)}}}):t._e(),t._v(" "),a("li",[a("button",{attrs:{disabled:t.currentPage==t.getpageNum(t.totalCount)||0==t.getpageNum(t.totalCount)},on:{click:function(e){t.turnToPage(t.getpageNum(t.totalCount))}}},[a("i",{staticClass:"el-icon-d-arrow-right"})])])])])],1),t._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:"编辑",visible:t.editVisible,width:"40%",top:"10vh","before-close":t.editHandleClose},on:{"update:visible":function(e){t.editVisible=e},close:function(e){return t.closeFun("currentItem")}}},[a("el-form",{ref:"currentItem",attrs:{"label-position":"right","label-width":"120px",size:"small",rules:t.editRules,model:t.currentItem}},[a("el-form-item",{attrs:{label:"应用名",prop:"name"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.currentItem.name,callback:function(e){t.$set(t.currentItem,"name","string"==typeof e?e.trim():e)},expression:"currentItem.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"url",prop:"url"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.currentItem.url,callback:function(e){t.$set(t.currentItem,"url","string"==typeof e?e.trim():e)},expression:"currentItem.url"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"用户评分",prop:"score"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.currentItem.score,callback:function(e){t.$set(t.currentItem,"score","string"==typeof e?e.trim():e)},expression:"currentItem.score"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"参与评分人数",prop:"participants"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.currentItem.participants,callback:function(e){t.$set(t.currentItem,"participants","string"==typeof e?e.trim():e)},expression:"currentItem.participants"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"费用类型",prop:"fee"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.currentItem.fee,callback:function(e){t.$set(t.currentItem,"fee","string"==typeof e?e.trim():e)},expression:"currentItem.fee"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"app类型",prop:"cat"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.currentItem.cat,callback:function(e){t.$set(t.currentItem,"cat","string"==typeof e?e.trim():e)},expression:"currentItem.cat"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"版本相关信息",prop:"version"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.currentItem.version,callback:function(e){t.$set(t.currentItem,"version","string"==typeof e?e.trim():e)},expression:"currentItem.version"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"下载次数",prop:"dnum"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.currentItem.dnum,callback:function(e){t.$set(t.currentItem,"dnum","string"==typeof e?e.trim():e)},expression:"currentItem.dnum"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"平台",prop:"platform"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.currentItem.platform,callback:function(e){t.$set(t.currentItem,"platform","string"==typeof e?e.trim():e)},expression:"currentItem.platform"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"摘要",prop:"info"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.currentItem.info,callback:function(e){t.$set(t.currentItem,"info","string"==typeof e?e.trim():e)},expression:"currentItem.info"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"应用描述",prop:"caption"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.currentItem.caption,callback:function(e){t.$set(t.currentItem,"caption","string"==typeof e?e.trim():e)},expression:"currentItem.caption"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"数据来源",prop:"original"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.currentItem.original,callback:function(e){t.$set(t.currentItem,"original","string"==typeof e?e.trim():e)},expression:"currentItem.original"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"来源抓取网站",prop:"source"}},[a("el-select",{attrs:{placeholder:"--"},model:{value:t.currentItem.source,callback:function(e){t.$set(t.currentItem,"source",e)},expression:"currentItem.source"}},t._l(t.sourceArr,function(t,e){return a("el-option",{key:e,attrs:{label:t.typeLabel,value:t.typeVal}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"大小",prop:"size"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.currentItem.size,callback:function(e){t.$set(t.currentItem,"size","string"==typeof e?e.trim():e)},expression:"currentItem.size"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.editHandleClose}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.editBtnLoading},on:{click:function(e){return t.editHandleConfirm("currentItem")}}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:"新增",visible:t.addVisible,width:"40%",top:"10vh","before-close":t.addHandleClose},on:{"update:visible":function(e){t.addVisible=e},open:function(e){return t.openFun("addList")}}},[a("el-form",{ref:"addList",attrs:{"label-position":"right","label-width":"100px",size:"small",rules:t.addRules,model:t.addList}},[a("el-form-item",{attrs:{label:"应用名",prop:"name"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.addList.name,callback:function(e){t.$set(t.addList,"name","string"==typeof e?e.trim():e)},expression:"addList.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"url",prop:"url"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.addList.url,callback:function(e){t.$set(t.addList,"url","string"==typeof e?e.trim():e)},expression:"addList.url"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"用户评分",prop:"score"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.addList.score,callback:function(e){t.$set(t.addList,"score","string"==typeof e?e.trim():e)},expression:"addList.score"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"参与评分人数",prop:"participants"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.addList.participants,callback:function(e){t.$set(t.addList,"participants","string"==typeof e?e.trim():e)},expression:"addList.participants"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"费用类型",prop:"fee"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.addList.fee,callback:function(e){t.$set(t.addList,"fee","string"==typeof e?e.trim():e)},expression:"addList.fee"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"app类型",prop:"cat"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.addList.cat,callback:function(e){t.$set(t.addList,"cat","string"==typeof e?e.trim():e)},expression:"addList.cat"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"版本相关信息",prop:"version"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.addList.version,callback:function(e){t.$set(t.addList,"version","string"==typeof e?e.trim():e)},expression:"addList.version"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"下载次数",prop:"dnum"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.addList.dnum,callback:function(e){t.$set(t.addList,"dnum","string"==typeof e?e.trim():e)},expression:"addList.dnum"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"平台",prop:"platform"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.addList.platform,callback:function(e){t.$set(t.addList,"platform","string"==typeof e?e.trim():e)},expression:"addList.platform"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"摘要",prop:"info"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.addList.info,callback:function(e){t.$set(t.addList,"info","string"==typeof e?e.trim():e)},expression:"addList.info"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"应用描述",prop:"caption"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.addList.caption,callback:function(e){t.$set(t.addList,"caption","string"==typeof e?e.trim():e)},expression:"addList.caption"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"数据来源",prop:"original"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.addList.original,callback:function(e){t.$set(t.addList,"original","string"==typeof e?e.trim():e)},expression:"addList.original"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"来源抓取网站",prop:"source"}},[a("el-select",{attrs:{placeholder:"--"},model:{value:t.addList.source,callback:function(e){t.$set(t.addList,"source",e)},expression:"addList.source"}},[a("el-option",{attrs:{label:"百度",value:"baidu"}}),t._v(" "),a("el-option",{attrs:{label:"联想",value:"lenovo"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"大小",prop:"size"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.addList.size,callback:function(e){t.$set(t.addList,"size","string"==typeof e?e.trim():e)},expression:"addList.size"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.addHandleClose}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.addBtnLoading},on:{click:function(e){return t.addHandleConfirm("addList")}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")(c,u,!1,function(t){a("IuOk")},"data-v-2b0d0e73",null);e.default=p.exports},IuOk:function(t,e){}});