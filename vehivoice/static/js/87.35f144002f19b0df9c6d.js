webpackJsonp([87],{Uek3:function(t,e){},rN4O:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("gRE1"),o=a.n(s),i=a("pWbq"),n=a("2hMI"),l=a("krqS"),r={data:function(){return{pickerOptions:{disabledDate:function(t){var e=Date.now();return t.getTime()>e}},list:[],perList:[],totalClass:"8",ixid:"",currentPage:1,pageSize:10,totalCount:1,showTitle:!0,seaBtnLoading:!1,listLoading:!0,isLastPage:!1,tableHeight:0,asrlogData:void 0==this.$route.params.logData?void 0:JSON.parse(this.$route.params.logData)||JSON.parse(sessionStorage.getItem("logData"))}},created:function(){var t=this;this.getlogData(),JSON.parse(sessionStorage.getItem("btnpermission")).map(function(e){t.perList.push(o()(e).join())}),this.getList()},mounted:function(){var t=this;setTimeout(function(){t.tableHeight=t.$refs.tables.offsetHeight},0)},methods:{getlogData:function(){0==Boolean(sessionStorage.getItem("logData"))&&sessionStorage.setItem("logData",this.$route.params.logData),void 0==this.asrlogData&&(this.asrlogData=JSON.parse(sessionStorage.getItem("logData")))},onShowNameTipsMouseenter:function(t){var e=t.target,a=e.clientWidth,s=e.scrollWidth;this.showTitle=!(a<s)},formTime:function(t,e){var a=t.startTime,s=new Date(a);return s.getFullYear()+"-"+Object(i.a)(s.getMonth()+1)+"-"+Object(i.a)(s.getDate())+" "+Object(i.a)(s.getHours())+":"+Object(i.a)(s.getMinutes())},formTimeStart:function(t){var e=new Date(t),a=e.getMilliseconds();return e.getFullYear()+"-"+Object(i.a)(e.getMonth()+1)+"-"+Object(i.a)(e.getDate())+" "+Object(i.a)(e.getHours())+":"+Object(i.a)(e.getMinutes())+":"+Object(i.a)(e.getSeconds())+":"+(a<10?"00"+a:a<100?"0"+a:a)},formTimeEnd:function(t,e){var a=t.endTime,s=new Date(a),o=s.getMilliseconds();return s.getFullYear()+"-"+Object(i.a)(s.getMonth()+1)+"-"+Object(i.a)(s.getDate())+" "+Object(i.a)(s.getHours())+":"+Object(i.a)(s.getMinutes())+":"+Object(i.a)(s.getSeconds())+":"+(o<10?"00"+o:o<100?"0"+o:o)},onSubmit:function(){this.seaBtnLoading=!0,this.currentPage=1,this.getList(),this.seaBtnLoading=!1},handleSizeChange:function(t){this.pageSize=t,this.currentPage=1,this.getList()},handleCurrentChange:function(t){this.currentPage=t,this.getList()},turnToPage:function(t){if(-1==(t=parseInt(t)))this.getList(t);else{if(!t||t<1)return console.log("页码输入有误！"),!1;this.getList(t)}},getList:function(){var t=this;this.listLoading=!0;var e={ixidString:this.asrlogData.ixid};e.sign=Object(l.a)(e),this.list=[],Object(n.x)(e).then(function(e){t.listLoading=!1,200==e.data.code?(t.list=e.data.data,t.totalClass=e.data.data.length):void 0!=e.data.code&&t.$message({message:e.data.code+"："+e.data.msg,type:"error",duration:2e3})}).catch(function(){t.listLoading=!1})}},beforeRouteLeave:function(t,e,a){sessionStorage.removeItem("logData"),a()}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table height-40"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",{attrs:{to:{name:"asrloglist",params:{page:this.asrlogData.page}}}},[t._v("识别明细报表")]),t._v(" "),a("el-breadcrumb-item",[t._v(t._s(this.$route.meta.title))])],1),t._v(" "),a("div",{ref:"tables",staticClass:"table-box ruletable asrlogtable"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],class:this.totalClass<="10"?"limitWidth":"",staticStyle:{width:"100%"},attrs:{data:t.list,stripe:"","max-height":t.tableHeight,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},[a("el-table-column",{staticClass:"table-expand",attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"table-expand-form",attrs:{"label-position":"left"}},[a("el-form-item",{attrs:{label:"机器id:"}},[a("span",[t._v(t._s(e.row.did))])]),t._v(" "),a("el-form-item",{attrs:{label:"数据长度:"}},[a("span",[t._v(t._s(e.row.dataLen))])]),t._v(" "),a("el-form-item",{attrs:{label:"应用code:"}},[a("span",[t._v(t._s(e.row.app))])]),t._v(" "),a("el-form-item",{attrs:{label:"lenovokey:"}},[a("span",[t._v(t._s(e.row.lenovokey))])]),t._v(" "),a("el-form-item",{attrs:{label:"secretkey:"}},[a("span",[t._v(t._s(e.row.secretkey))])]),t._v(" "),"failed"==e.row.status?a("el-form-item",{attrs:{label:"错误信息:"}},[a("span",[t._v(t._s(e.row.errorMessage))])]):t._e()],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{type:"index",align:"center",label:"#"}}),t._v(" "),a("el-table-column",{attrs:{label:"用户id",prop:"uid",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.uid,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.uid)+"\n                    ")])]),t._v(" "),t.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.uid)+"\n                ")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"识别会话id",prop:"ixid",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.ixid,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.ixid)+"\n                    ")])]),t._v(" "),t.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.ixid)+"\n                ")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"请求序号",prop:"pidx",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showTitle?t._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.pidx,placement:"top"}},[a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.pidx)+"\n                    ")])]),t._v(" "),t.showTitle?a("div",{staticClass:"toEllipsis",on:{mouseover:t.onShowNameTipsMouseenter}},[t._v("\n                    "+t._s(e.row.pidx)+"\n                ")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"长短语音",prop:"sce",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s("cmd"==e.row.sce?"短语音":"长语音"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"是否尾包",prop:"over",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(0==e.row.over?"否":"是"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"请求耗时",prop:"useTime",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.useTime)+"ms")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"识别请求状态",prop:"status",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"success"===e.row.status?"tag-s":"tag-d"},[t._v(t._s("success"==e.row.status?"成功":"失败"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"请求时间",prop:"startTime",align:"center",formatter:t.formTime,"min-width":"130"}})],1)],1)],1)},staticRenderFns:[]};var u=a("VU/8")(r,c,!1,function(t){a("Uek3")},"data-v-1f614d79",null);e.default=u.exports}});