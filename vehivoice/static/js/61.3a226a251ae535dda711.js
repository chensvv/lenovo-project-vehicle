webpackJsonp([61],{"/IoN":function(t,e){},"9bGk":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("pWbq"),s=a("2hMI"),r=a("krqS"),n=a("Icdr");a("4UDB"),a("miEh"),a("Oq2I"),a("ILx8"),a("80cc");var l={data:function(){var t=this;return{pickerOptions:{disabledDate:function(t){var e=Date.now();return t.getTime()>e}},pickerOptionsChart:{disabledDate:function(e){var a=Date.now(),i=t.timeOptionRange;return i?e.getTime()>i.getTime()+(Date.now()-i.getTime()<1296e6?Date.now()-i.getTime():1296e6)||e.getTime()<i.getTime()-1296e6:e.getTime()>a},onPick:function(e){e.minDate&&!e.maxDate&&(t.timeOptionRange=e.minDate),e.maxDate&&(t.timeOptionRange=null)}},clientList:[],serverList:[],searchItem:{uid:"",dtp:"",pickerVal:[]},searchServ:{uid:"",dtp:"",pickerVal:[]},searchStat:{pickerVal:[]},activeName:"client",ctotalClass:"8",totalClass:"8",clientForm:!0,statForm:!1,servForm:!1,currentPageC:1,CpageSize:10,CtotalCount:1,isPageNumberErrorC:!1,MaxIdC:"",MinIdC:"",nextPageC:"",isLastPageC:!1,lastCurrentPageC:"",currentPageS:1,SpageSize:10,StotalCount:1,showTitle:!0,seaBtnLoading:!1,servBtnLoading:!1,statLoading:!1,chartLoading:!1,ClistLoading:!0,SlistLoading:!0,isPageNumberErrorS:!1,MaxIdS:"",MinIdS:"",nextPageS:"",isLastPageS:!1,lastCurrentPageS:"",column:{prop:"",order:""}}},created:function(){this.getList(),this.getSList()},mounted:function(){},methods:{onShowNameTipsMouseenter:function(t){var e=t.target,a=e.clientWidth,i=e.scrollWidth;this.showTitle=!(a<i)},resetServ:function(t){this.$refs[t].resetFields(),this.MaxIdS="",this.MinIdS="",this.getSList(1)},resetStat:function(t){this.$refs[t].resetFields(),this.getStatistic()},handleClickTabs:function(t,e){var a=this;"server"==t.name?(this.statForm=!1,this.clientForm=!1,this.servForm=!0):"stat"==t.name?(this.clientForm=!1,this.servForm=!1,this.statForm=!0,setTimeout(function(){a.getStatistic()},100)):(this.statForm=!1,this.servForm=!1,this.clientForm=!0)},formTime:function(t,e){var a=t.it,s=new Date(a);return s.getFullYear()+"-"+Object(i.a)(s.getMonth()+1)+"-"+Object(i.a)(s.getDate())+" "+Object(i.a)(s.getHours())+":"+Object(i.a)(s.getMinutes())},onSubmit:function(){this.seaBtnLoading=!0,this.getList(1),this.seaBtnLoading=!1},onServ:function(){this.servBtnLoading=!0,this.getSList(1),this.servBtnLoading=!1},onStat:function(){this.statLoading=!0,this.getStatistic(),this.statLoading=!1},handleSizeChangeC:function(t){this.CpageSize=t,this.currentPageC=1,this.getList()},handleSizeChangeS:function(t){this.SpageSize=t,this.currentPageS=1,this.getList()},handleCurrentChangeC:function(t){this.currentPageC=t,this.getList()},handleCurrentChangeS:function(t){this.currentPageS=t,this.getList()},turnToPageC:function(t){if(-1==(t=parseInt(t)))this.getList(t);else{if(!t||t<1)return console.log("页码输入有误！"),this.isPageNumberErrorC=!0,!1;this.getList(t),this.isPageNumberErrorC=!1}},turnToPageS:function(t){if(-1==(t=parseInt(t)))this.getSList(t);else{if(!t||t<1)return console.log("页码输入有误！"),this.isPageNumberErrorS=!0,!1;this.getSList(t),this.isPageNumberErrorS=!1}},sortChange:function(t){this.column={prop:t.prop,order:t.order},this.getList(this.lastCurrentPageC)},getList:function(t){var e=this;this.ClistLoading=!0;var a={startStr:this.searchItem.pickerVal[0],endStr:this.searchItem.pickerVal[1],uid:this.searchItem.uid,dtp:this.searchItem.dtp,fieldName:this.column.prop,pgstr:this.nextPageC,pcstr:this.CpageSize,maxId:this.MaxIdC,minId:this.MinIdC,nextPage:1==t||void 0==t?"1":t,currentPage:this.lastCurrentPageC,order:"ascending"==this.column.order?"0":""};a.sign=Object(r.a)(a),Object(s.N)(a).then(function(t){e.ClistLoading=!1,200==t.data.code?(e.clientList=t.data.data.data,e.ctotalClass=t.data.data.data.length,e.isLastPageC=t.data.data.lastPage,e.lastCurrentPageC=t.data.data.currentPage,e.currentPageC=t.data.data.currentPage,e.MaxIdC=Math.max.apply(Math,e.clientList.map(function(t){return t.id})),e.MinIdC=Math.min.apply(Math,e.clientList.map(function(t){return t.id}))):e.$message({message:t.data.errorMessage,type:"error",duration:1500})}).catch(function(){e.ClistLoading=!1})},getSList:function(t){var e=this;this.SlistLoading=!0;var a={startStr:this.searchServ.pickerVal[0],endStr:this.searchServ.pickerVal[1],uid:this.searchServ.uid,dtp:this.searchServ.dtp,fieldName:this.column.prop,pgstr:this.nextPageS,pcstr:this.SpageSize,maxId:this.MaxIdS,minId:this.MinIdS,nextPage:1==t||void 0==t?"1":t,currentPage:this.lastCurrentPageS};a.sign=Object(r.a)(a),Object(s.N)(a).then(function(t){e.SlistLoading=!1,200==t.data.code&&(e.serverList=t.data.data.data,e.totalClass=t.data.data.data.length,e.isLastPageS=t.data.data.lastPage,e.lastCurrentPageS=t.data.data.currentPage,e.currentPageS=t.data.data.currentPage,e.MaxIdS=Math.max.apply(Math,e.serverList.map(function(t){return t.id})),e.MinIdS=Math.min.apply(Math,e.serverList.map(function(t){return t.id})))}).catch(function(){e.SlistLoading=!1})},getStatistic:function(){var t=this;this.chartLoading=!0;var e={startStr:this.searchStat.pickerVal[0],endStr:this.searchStat.pickerVal[1]};e.sign=Object(r.a)(e);var a=n.init(this.$refs.myChart);Object(s.O)(e).then(function(e){if(t.chartLoading=!1,200==e.data.code){var i=e.data.data.date;a.setOption({title:{text:"结果数据统计",left:"center"},tooltip:{trigger:"axis",axisPointer:{type:""}},legend:{orient:"horizontal",x:"center",y:"5%",data:["每天总量","取消","无识别结果","没说话点mic取消","每天成功次数","纠正删除"]},xAxis:{type:"category",boundaryGap:!1,axisLabel:{rotate:20},data:i},grid:{x:"10%",y:"10%",x2:"5%",y2:"10%",borderWidth:1},yAxis:{type:"value",minInterval:1},series:[{name:"每天总量",type:"line",data:e.data.data.all},{name:"取消",type:"line",data:e.data.data.abort},{name:"无识别结果",type:"line",data:e.data.data.failed},{name:"没说话点mic取消",type:"line",data:e.data.data.failed1},{name:"每天成功次数",type:"line",data:e.data.data.success},{name:"纠正删除",type:"line",data:e.data.data.success1}]})}else t.$message({message:e.data.msg,type:"error",duration:1500})})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table height-105"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/asr/log/client"}}},[t._v("日志管理")]),t._v(" "),a("el-breadcrumb-item",[t._v(t._s(this.$route.meta.title))])],1),t._v(" "),t.clientForm?a("el-form",{ref:"searchItem",staticClass:"demo-form-inline height70 width130",attrs:{inline:!0,model:t.searchItem,"label-width":"90px",size:"mini"}},[a("div",{staticClass:"form-input height70"},[a("el-form-item",{attrs:{label:"Uid",prop:"uid"}},[a("el-input",{attrs:{clearable:""},model:{value:t.searchItem.uid,callback:function(e){t.$set(t.searchItem,"uid","string"==typeof e?e.trim():e)},expression:"searchItem.uid"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"客户端类型",prop:"dtp"}},[a("el-input",{attrs:{clearable:""},model:{value:t.searchItem.dtp,callback:function(e){t.$set(t.searchItem,"dtp","string"==typeof e?e.trim():e)},expression:"searchItem.dtp"}})],1),t._v(" "),a("el-form-item",{staticClass:"date-form",attrs:{label:"日期",prop:"pickerVal"}},[a("el-date-picker",{attrs:{type:"daterange",align:"center",size:"mini","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions,"value-format":"yyyy-MM-dd","default-value":new Date((new Date).setMonth((new Date).getMonth()-1))},model:{value:t.searchItem.pickerVal,callback:function(e){t.$set(t.searchItem,"pickerVal",e)},expression:"searchItem.pickerVal"}})],1)],1),t._v(" "),a("div",{staticClass:"form-btn"},[a("el-button",{attrs:{size:"mini",type:"primary",loading:t.seaBtnLoading},on:{click:t.onSubmit}},[t._v("查询")])],1)]):t._e(),t._v(" "),t.servForm?a("el-form",{ref:"searchServ",staticClass:"demo-form-inline height70 width130",attrs:{inline:!0,model:t.searchServ,"label-width":"90px",size:"mini"}},[a("div",{staticClass:"form-input height70"},[a("el-form-item",{attrs:{label:"Uid",prop:"uid"}},[a("el-input",{attrs:{clearable:""},model:{value:t.searchServ.uid,callback:function(e){t.$set(t.searchServ,"uid","string"==typeof e?e.trim():e)},expression:"searchServ.uid"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"客户端类型",prop:"dtp"}},[a("el-input",{attrs:{clearable:""},model:{value:t.searchServ.dtp,callback:function(e){t.$set(t.searchServ,"dtp","string"==typeof e?e.trim():e)},expression:"searchServ.dtp"}})],1),t._v(" "),a("el-form-item",{staticClass:"date-form",attrs:{label:"日期",prop:"pickerVal"}},[a("el-date-picker",{attrs:{type:"daterange",align:"center",size:"mini","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions,"value-format":"yyyy-MM-dd","default-value":new Date((new Date).setMonth((new Date).getMonth()-1))},model:{value:t.searchServ.pickerVal,callback:function(e){t.$set(t.searchServ,"pickerVal",e)},expression:"searchServ.pickerVal"}})],1)],1),t._v(" "),a("div",{staticClass:"form-btn"},[a("el-button",{attrs:{size:"mini",type:"primary",loading:t.servBtnLoading},on:{click:t.onServ}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.resetServ("searchServ")}}},[t._v("重置")])],1)]):t._e(),t._v(" "),t.statForm?a("el-form",{ref:"searchStat",staticClass:"demo-form-inline height70 width130",attrs:{inline:!0,model:t.searchStat,"label-width":"90px",size:"mini"}},[a("div",{staticClass:"form-input height70"},[a("el-form-item",{staticClass:"date-form",attrs:{label:"日期",prop:"pickerVal"}},[a("el-date-picker",{attrs:{type:"daterange",align:"center",size:"mini","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptionsChart,"value-format":"yyyy-MM-dd","default-value":new Date((new Date).setMonth((new Date).getMonth()-1))},model:{value:t.searchStat.pickerVal,callback:function(e){t.$set(t.searchStat,"pickerVal",e)},expression:"searchStat.pickerVal"}})],1)],1),t._v(" "),a("div",{staticClass:"form-btn"},[a("el-button",{attrs:{size:"mini",type:"primary",loading:t.statLoading},on:{click:t.onStat}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.resetStat("searchStat")}}},[t._v("重置")])],1)]):t._e(),t._v(" "),a("div",{staticClass:"table-box"},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClickTabs},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{staticClass:"flex-align",attrs:{label:"客户端信息",name:"client"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.ClistLoading,expression:"ClistLoading"}],key:t.activeName,class:this.ctotalClass<="7"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:t.clientList,stripe:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{type:"index",align:"left",label:"#",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"UID",prop:"uid",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.uid,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.uid)+"\n                    ")])]),t._v(" "),t.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.uid)+"\n                ")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"客户端类型",prop:"dtp",align:"center",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.dtp,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.dtp)+"\n                    ")])]),t._v(" "),t.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.dtp)+"\n                ")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"执行状态",prop:"stat",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"success"===e.row.stat?"tag-s":"failed"===e.row.stat?"tag-d":"tag-i"},[t._v(t._s(e.row.stat))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"延时",prop:"cltd",align:"center","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.cltd,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.cltd)+"\n                    ")])]),t._v(" "),t.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.cltd)+"\n                ")]):t._e()]}}])},[a("template",{slot:"header"},[a("el-tooltip",{attrs:{effect:"dark",content:"从结束录音到返回结果",placement:"top"}},[a("span",{attrs:{slot:""},slot:"default"},[t._v("延时")])])],1)],2),t._v(" "),a("el-table-column",{attrs:{label:"内容",prop:"rcn",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.rcn,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.rcn)+"\n                    ")])]),t._v(" "),t.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.rcn)+"\n                ")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"插入时间",prop:"it",align:"center",formatter:t.formTime,width:"130"}})],1),t._v(" "),a("div",{staticClass:"pagination-wrap"},[a("ul",{staticClass:"pagination"},[a("li",[a("button",{attrs:{disabled:1==t.currentPageC},on:{click:function(e){return t.turnToPageC(1)}}},[a("i",{staticClass:"el-icon-d-arrow-left"})])]),t._v(" "),0!=t.isLastPageC&&1!=t.currentPageC&&t.currentPageC-2>0?a("li",{staticClass:"unum",on:{click:function(e){return t.turnToPageC(t.currentPageC-2)}}},[t._v(t._s(t.currentPageC-2))]):t._e(),t._v(" "),t.currentPageC-1>0?a("li",{staticClass:"unum",on:{click:function(e){return t.turnToPageC(t.currentPageC-1)}}},[t._v(t._s(t.currentPageC-1))]):t._e(),t._v(" "),a("li",{staticClass:"active",on:{click:function(e){return t.turnToPageC(t.currentPageC)}}},[t._v(t._s(t.currentPageC))]),t._v(" "),1!=t.isLastPageC?a("li",{staticClass:"unum",on:{click:function(e){return t.turnToPageC(t.currentPageC+1)}}},[t._v(t._s(t.currentPageC+1))]):t._e(),t._v(" "),t.currentPageC+1<3&&1!=t.isLastPageC?a("li",{staticClass:"unum",on:{click:function(e){return t.turnToPageC(t.currentPageC+2)}}},[t._v(t._s(t.currentPageC+2))]):t._e(),t._v(" "),a("li",[a("button",{attrs:{disabled:1==t.isLastPageC},on:{click:function(e){return t.turnToPageC(-1)}}},[a("i",{staticClass:"el-icon-d-arrow-right"})])])])])],1),t._v(" "),a("el-tab-pane",{attrs:{label:"服务器信息",name:"server"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.SlistLoading,expression:"SlistLoading"}],key:t.activeName,class:this.totalClass<="7"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:t.serverList,stripe:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},[a("el-table-column",{attrs:{type:"index",align:"center",label:"#",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"客户端总耗时",prop:"ixcd",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"服务端总耗时",prop:"ixsd",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"网络总延时",prop:"ixnd",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"服务端识别耗时",prop:"ixad",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"执行状态",prop:"stat",align:"center","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"success"===e.row.stat?"tag-s":"failed"===e.row.stat?"tag-d":"tag-i"},[t._v(t._s(e.row.stat))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"延时",prop:"cltd",align:"center"}},[a("template",{slot:"header"},[a("el-tooltip",{attrs:{effect:"dark",content:"从结束录音到返回结果",placement:"top"}},[a("span",{attrs:{slot:""},slot:"default"},[t._v("延时")])])],1)],2),t._v(" "),a("el-table-column",{attrs:{label:"内容",prop:"rcn",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.rcn,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.rcn)+"\n                    ")])]),t._v(" "),t.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.rcn)+"\n                ")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"插入时间",prop:"it",align:"center",formatter:t.formTime,width:"130"}})],1),t._v(" "),a("div",{staticClass:"pagination-wrap"},[a("ul",{staticClass:"pagination"},[a("li",[a("button",{attrs:{disabled:1==t.currentPageS},on:{click:function(e){return t.turnToPageS(1)}}},[a("i",{staticClass:"el-icon-d-arrow-left"})])]),t._v(" "),0!=t.isLastPageS&&1!=t.currentPageS&&t.currentPageS-2>0?a("li",{staticClass:"unum",on:{click:function(e){return t.turnToPageS(t.currentPageS-2)}}},[t._v(t._s(t.currentPageS-2))]):t._e(),t._v(" "),t.currentPageS-1>0?a("li",{staticClass:"unum",on:{click:function(e){return t.turnToPageS(t.currentPageS-1)}}},[t._v(t._s(t.currentPageS-1))]):t._e(),t._v(" "),a("li",{staticClass:"active",on:{click:function(e){return t.turnToPageS(t.currentPageS)}}},[t._v(t._s(t.currentPageS))]),t._v(" "),1!=t.isLastPageS?a("li",{staticClass:"unum",on:{click:function(e){return t.turnToPageS(t.currentPageS+1)}}},[t._v(t._s(t.currentPageS+1))]):t._e(),t._v(" "),t.currentPageS+1<3&&1!=t.isLastPageS?a("li",{staticClass:"unum",on:{click:function(e){return t.turnToPageS(t.currentPageS+2)}}},[t._v(t._s(t.currentPageS+2))]):t._e(),t._v(" "),a("li",[a("button",{attrs:{disabled:1==t.isLastPageS},on:{click:function(e){return t.turnToPageS(-1)}}},[a("i",{staticClass:"el-icon-d-arrow-right"})])])])])],1),t._v(" "),a("el-tab-pane",{attrs:{label:"统计",name:"stat"}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.chartLoading,expression:"chartLoading"}],staticClass:"table-box",staticStyle:{"margin-top":"30px"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},[a("div",{ref:"myChart",style:{width:"100%",height:"100%"}})])])],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(l,o,!1,function(t){a("/IoN")},"data-v-46beca36",null);e.default=c.exports}});