webpackJsonp([61],{"3qOn":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("pWbq"),o=a("2hMI"),n=a("krqS"),i={data:function(){return{pickerOptions:{disabledDate:function(e){var t=Date.now();return e.getTime()>t}},list:[],totalClass:"8",searchItem:{sce:"",lenovokey:"",pickerVal:[]},currentPage:1,pageSize:10,totalCount:1,showTitle:!0,seaBtnLoading:!1,listLoading:!0}},created:function(){this.getList()},methods:{onShowNameTipsMouseenter:function(e){var t=e.target,a=t.clientWidth,s=t.scrollWidth;this.showTitle=!(a<s)},formTime:function(e,t){var a=e.createTime,o=new Date(a);return o.getFullYear()+"-"+Object(s.a)(o.getMonth()+1)+"-"+Object(s.a)(o.getDate())+" "+Object(s.a)(o.getHours())+":"+Object(s.a)(o.getMinutes())},formTime2:function(e,t){var a=e.startTime,o=new Date(a);return o.getFullYear()+"-"+Object(s.a)(o.getMonth()+1)+"-"+Object(s.a)(o.getDate())+" "+Object(s.a)(o.getHours())+":"+Object(s.a)(o.getMinutes())},resetForm:function(e){this.$refs[e].resetFields(),this.currentPage=1,this.getList()},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},getList:function(){var e=this;this.listLoading=!0;var t={pgstr:this.currentPage,pcstr:this.pageSize,startStr:this.searchItem.pickerVal[0],endStr:this.searchItem.pickerVal[1],sce:this.searchItem.sce,lenovokey:this.searchItem.lenovokey};t.sign=Object(n.a)(t),Object(o._186)(t).then(function(t){e.listLoading=!1,200==t.data.code?(e.list=t.data.data.data,e.totalCount=t.data.data.total,e.totalClass=t.data.data.data.length):e.$message({message:t.data.errorMessage,type:"error",duration:1500})}).catch(function(){e.listLoading=!1})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table height-105"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/asr/log/client"}}},[e._v("日志管理")]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(this.$route.meta.title))])],1),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline height70 width130",attrs:{inline:!0,model:e.searchItem,"label-width":"90px",size:"mini"}},[a("div",{staticClass:"form-input height70"},[a("el-form-item",{attrs:{label:"sce",prop:"sce"}},[a("el-select",{attrs:{placeholder:"--",clearable:""},model:{value:e.searchItem.sce,callback:function(t){e.$set(e.searchItem,"sce","string"==typeof t?t.trim():t)},expression:"searchItem.sce"}},[a("el-option",{attrs:{label:"cmd",value:"cmd"}}),e._v(" "),a("el-option",{attrs:{label:"long",value:"long"}}),e._v(" "),a("el-option",{attrs:{label:"iat",value:"iat"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"账号",prop:"lenovokey"}},[a("el-input",{attrs:{clearable:""},model:{value:e.searchItem.lenovokey,callback:function(t){e.$set(e.searchItem,"lenovokey","string"==typeof t?t.trim():t)},expression:"searchItem.lenovokey"}})],1),e._v(" "),a("el-form-item",{staticClass:"date-form",attrs:{label:"日期",prop:"pickerVal"}},[a("el-date-picker",{attrs:{type:"daterange",align:"center",size:"mini","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd","default-value":new Date((new Date).setMonth((new Date).getMonth()-1))},model:{value:e.searchItem.pickerVal,callback:function(t){e.$set(e.searchItem,"pickerVal",t)},expression:"searchItem.pickerVal"}})],1)],1),e._v(" "),a("div",{staticClass:"form-btn"},[a("el-button",{attrs:{size:"mini",type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1)]),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],class:this.totalClass<="5"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:e.list,stripe:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},[a("el-table-column",{attrs:{type:"index",align:"center",label:"#"}}),e._v(" "),a("el-table-column",{attrs:{label:"sessionid",prop:"sessionid",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.sessionid,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                "+e._s(t.row.sessionid)+"\n                ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                "+e._s(t.row.sessionid)+"\n            ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"sce",prop:"sce",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.sce,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                "+e._s(t.row.sce)+"\n                ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                "+e._s(t.row.sce)+"\n            ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"lenovokey",prop:"lenovokey",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.lenovokey,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                "+e._s(t.row.lenovokey)+"\n                ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                "+e._s(t.row.lenovokey)+"\n            ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"secretkey",prop:"secretkey",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showTitle?e._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.secretkey,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                "+e._s(t.row.secretkey)+"\n                ")])]),e._v(" "),e.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:e.onShowNameTipsMouseenter}},[e._v("\n                "+e._s(t.row.secretkey)+"\n            ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"插入时间",prop:"createTime",align:"center",formatter:e.formTime,width:"130"}}),e._v(" "),a("el-table-column",{attrs:{label:"调用时间",prop:"startTime",align:"center",formatter:e.formTime2,width:"130"}})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1)},staticRenderFns:[]};var l=a("VU/8")(i,r,!1,function(e){a("5Mjo")},"data-v-374f6296",null);t.default=l.exports},"5Mjo":function(e,t){}});