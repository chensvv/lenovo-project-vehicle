webpackJsonp([32],{WVmJ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("pWbq"),i=a("2hMI"),n={data:function(){return{pickerOptions:{disabledDate:function(e){var t=Date.now()-864e5;return e.getTime()>t}},list:[],searchItem:{channel:"",refreshTime:"",putTime:"",username:""},usernameList:[],currentPage:1,pageSize:10,totalCount:1,seaBtnLoading:!1,listLoading:!1,fileBtnLoading:!1}},created:function(){this.getList(),this.getUsernameList()},methods:{resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},formTime:function(e,t){var a=e.createTime,i=new Date(a);return i.getFullYear()+"-"+Object(r.a)(i.getMonth()+1)+"-"+Object(r.a)(i.getDate())+" "+Object(r.a)(i.getHours())+":"+Object(r.a)(i.getMinutes())},formTime2:function(e,t){var a=e.updateTime,i=new Date(a);return i.getFullYear()+"-"+Object(r.a)(i.getMonth()+1)+"-"+Object(r.a)(i.getDate())+" "+Object(r.a)(i.getHours())+":"+Object(r.a)(i.getMinutes())},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},exportFile:function(){var e=this;if(this.fileBtnLoading=!0,""==this.searchItem.refreshTime||""==this.searchItem.putTime)this.$message({message:"请选择起始时间和结束时间！",type:"error",duration:1e3}),this.fileBtnLoading=!1;else{var t={startStr:this.searchItem.refreshTime,endStr:this.searchItem.putTime,channel:this.searchItem.channel};Object(i._111)(t).then(function(t){if(0==t.data.size)e.$message({message:"请选择起始时间和结束时间！",type:"error",duration:1e3}),e.fileBtnLoading=!1;else{var a=new Blob([t.data],{type:"application/vnd.ms-excel"}),r=document.createElement("a"),i=window.URL.createObjectURL(a),n=e.searchItem.refreshTime+"-"+e.searchItem.putTime+".xlsx";r.href=i,r.download=n,r.click(),window.URL.revokeObjectURL(i),e.fileBtnLoading=!1}}).catch(function(t){e.fileBtnLoading=!1})}},getList:function(){var e=this;this.listLoading=!0;var t={pgstr:this.currentPage,pcstr:this.pageSize,startStr:this.searchItem.refreshTime,endStr:this.searchItem.putTime,channel:this.searchItem.channel,userName:this.searchItem.username};Object(i._112)(t).then(function(t){e.listLoading=!1,e.list=t.data.data.data,e.totalCount=t.data.data.total})},getUsernameList:function(){var e=this;Object(i._113)().then(function(t){null==t.data.data[0]?e.usernameList=t.data.data.slice(1):e.usernameList=t.data.data})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table source"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("日志管理")]),e._v(" "),e._l(e.$route.meta,function(t,r){return a("el-breadcrumb-item",{key:r},[e._v(e._s(t))])})],2),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[a("el-form-item",{attrs:{label:"用户",prop:"username"}},[a("el-select",{attrs:{placeholder:"--",clearable:""},model:{value:e.searchItem.username,callback:function(t){e.$set(e.searchItem,"username","string"==typeof t?t.trim():t)},expression:"searchItem.username"}},e._l(e.usernameList,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"channel"}},[a("el-select",{attrs:{placeholder:"--",clearable:""},model:{value:e.searchItem.channel,callback:function(t){e.$set(e.searchItem,"channel","string"==typeof t?t.trim():t)},expression:"searchItem.channel"}},[a("el-option",{attrs:{label:"itemClick",value:"itemClick"}}),e._v(" "),a("el-option",{attrs:{label:"softKeyboard",value:"softKeyboard"}}),e._v(" "),a("el-option",{attrs:{label:"voice",value:"voice"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"起始时间",prop:"refreshTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},model:{value:e.searchItem.refreshTime,callback:function(t){e.$set(e.searchItem,"refreshTime",t)},expression:"searchItem.refreshTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"结束时间",prop:"putTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},model:{value:e.searchItem.putTime,callback:function(t){e.$set(e.searchItem,"putTime",t)},expression:"searchItem.putTime"}})],1),e._v(" "),a("el-form-item",{staticClass:"sub-btn"},[a("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")]),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"请在左侧选择起始时间和结束时间或者选择类型导出",placement:"top-end"}},[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"source:export",expression:"'source:export'"}],attrs:{size:"mini",loading:e.fileBtnLoading},on:{click:function(t){return e.exportFile()}}},[e._v("导出数据")])],1)],1)],1),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],class:this.totalCount<=5?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:e.list}},[a("el-table-column",{attrs:{type:"index",align:"left"}}),e._v(" "),a("el-table-column",{attrs:{label:"ID",prop:"id",align:"left","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"说法",prop:"speak",align:"left","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"领域",prop:"vdm",align:"left","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"结果",prop:"nlpResult",align:"left","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"类型",prop:"sourceType",align:"left","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",prop:"createTime",align:"left",formatter:e.formTime,"min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{label:"修改时间",prop:"updateTime",align:"left",formatter:e.formTime2,"min-width":"120"}})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1)},staticRenderFns:[]};var l=a("VU/8")(n,s,!1,function(e){a("eCvX")},"data-v-83f6a4b0",null);t.default=l.exports},eCvX:function(e,t){}});