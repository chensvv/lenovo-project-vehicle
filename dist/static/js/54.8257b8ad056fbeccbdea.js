webpackJsonp([54],{FX4T:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("pWbq"),s=i("2hMI"),n={data:function(){return{pickerOptions:{disabledDate:function(e){var t=Date.now()-864e5;return e.getTime()>t}},list:[],totalClass:"",searchItem:{question:"",refreshTime:"",putTime:""},exList:{},editVisible:!1,addVisible:!1,currentPage:1,pageSize:10,totalCount:1,showTitle:!0,seaBtnLoading:!1,fileBtnLoading:!1,listLoading:!0}},created:function(){this.getList()},methods:{onShowNameTipsMouseenter:function(e){var t=e.target,i=t.clientWidth,a=t.scrollWidth;this.showTitle=!(i<a)},formTime:function(e,t){var i=e.it,s=new Date(i);return s.getFullYear()+"-"+Object(a.a)(s.getMonth()+1)+"-"+Object(a.a)(s.getDate())+" "+Object(a.a)(s.getHours())+":"+Object(a.a)(s.getMinutes())},resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.listLoading=!0,this.getList()},exportFile:function(){var e=this,t={starttime:this.searchItem.refreshTime,endtime:this.searchItem.putTime,question:this.searchItem.question};this.fileBtnLoading=!0,Object(s.I)(t).then(function(t){var i=new Blob([t.data],{type:"text/csv,charset=UTF-8"}),a=document.createElement("a"),s=window.URL.createObjectURL(i),n=""==e.searchItem.refreshTime&&""==e.searchItem.putTime&&""==e.searchItem.question?"chat.csv":""==e.searchItem.refreshTime&&""==e.searchItem.putTime&&""!=e.searchItem.question?e.searchItem.question+".csv":e.searchItem.refreshTime+"-"+e.searchItem.putTime+".csv";a.href=s,a.download=n,a.click(),window.URL.revokeObjectURL(s),e.fileBtnLoading=!1}).catch(function(t){e.fileBtnLoading=!1})},getList:function(){var e=this;this.listLoading=!0;var t={pgstr:this.currentPage,pcstr:this.pageSize,q:this.searchItem.question,ex:"",startStr:this.searchItem.refreshTime,endStr:this.searchItem.putTime};Object(s.J)(t).then(function(t){e.listLoading=!1,200==t.data.code&&(e.list=t.data.data,e.totalCount=t.data.count,e.totalClass=t.data.data.length)}).catch(function(){e.listLoading=!1})}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"table height-85"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),i("el-breadcrumb-item",[e._v("闲聊数据")]),e._v(" "),e._l(e.$route.meta,function(t,a){return i("el-breadcrumb-item",{key:a},[e._v(e._s(t))])})],2),e._v(" "),i("el-form",{ref:"searchItem",staticClass:"demo-form-inline height50 width130",attrs:{inline:!0,model:e.searchItem,"label-width":"90px",size:"mini"}},[i("div",{staticClass:"form-input height50"},[i("el-form-item",{attrs:{label:"问题",prop:"question"}},[i("el-input",{attrs:{clearable:""},model:{value:e.searchItem.question,callback:function(t){e.$set(e.searchItem,"question","string"==typeof t?t.trim():t)},expression:"searchItem.question"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"起始时间",prop:"refreshTime"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},model:{value:e.searchItem.refreshTime,callback:function(t){e.$set(e.searchItem,"refreshTime",t)},expression:"searchItem.refreshTime"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"结束时间",prop:"putTime"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},model:{value:e.searchItem.putTime,callback:function(t){e.$set(e.searchItem,"putTime",t)},expression:"searchItem.putTime"}})],1)],1),e._v(" "),i("div",{staticClass:"form-btn"},[i("el-button",{attrs:{size:"mini",type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),i("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")]),e._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"导出数据默认导出全部数据，如需自定义请在左侧选择起始时间和结束时间或者输入问题导出",placement:"top-end"}},[i("el-button",{directives:[{name:"has",rawName:"v-has",value:"chat:export",expression:"'chat:export'"}],attrs:{size:"mini",loading:e.fileBtnLoading},on:{click:function(t){return e.exportFile()}}},[e._v("导出数据")])],1)],1)]),e._v(" "),i("div",{staticClass:"table-box"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],class:this.totalClass<="7"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:e.list}},[i("el-table-column",{attrs:{type:"index",align:"left"}}),e._v(" "),i("el-table-column",{attrs:{label:"问题",prop:"ques",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.ques,placement:"top"}},[i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.ques)+"\n                    ")])]),e._v(" "),e.showTitle?i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.ques)+"\n                ")]):e._e()]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"答案",prop:"answ",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.answ,placement:"top"}},[i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.answ)+"\n                    ")])]),e._v(" "),e.showTitle?i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.answ)+"\n                ")]):e._e()]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"引擎",prop:"engi",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.engi,placement:"top"}},[i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.engi)+"\n                    ")])]),e._v(" "),e.showTitle?i("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                    "+e._s(t.row.engi)+"\n                ")]):e._e()]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"入库时间",prop:"it",align:"center","min-width":"120",formatter:e.formTime}})],1),e._v(" "),i("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1)},staticRenderFns:[]};var o=i("VU/8")(n,r,!1,function(e){i("hx0A")},"data-v-493076aa",null);t.default=o.exports},hx0A:function(e,t){}});