webpackJsonp([28],{"e+cG":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("2hMI"),n=(a("pWbq"),a("Icdr")),r={data:function(){var e=this;return{pickerOptions:{disabledDate:function(t){var a=Date.now()-864e5,i=e.timeOptionRange;return i?t.getTime()>i.getTime()+5184e5||t.getTime()<i.getTime()-5184e5:t.getTime()>a},onPick:function(t){t.minDate&&!t.maxDate&&(e.timeOptionRange=t.minDate),t.maxDate&&(e.timeOptionRange=null)},shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5);var a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5);var a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}}]},searchItem:{startTime:"",endTime:""},list:[],pickerVal:[],seaBtnLoading:!1,loading:!0}},mounted:function(){this.getChartsData()},methods:{resetForm:function(e){this.$refs[e].resetFields(),this.getChartsData()},onSubmit:function(){this.seaBtnLoading=!0,this.getChartsData(),this.seaBtnLoading=!1},dateChangebirthday:function(e){this.searchItem.startTime=e[0],this.searchItem.endTime=e[1]},computedPosition:function(e,t){return t>=10?this.end=e<=10?50:100-Math.floor(50/e*100):100},getChartsData:function(){var e=this,t={startStr:this.searchItem.startTime,endStr:this.searchItem.endTime},a=n.init(this.$refs.myChart);Object(i.q)(t).then(function(t){e.loading=!1;var i=t.data.data.visit.length;a.setOption({title:{text:"事件统计",left:"center"},tooltip:{trigger:"axis",axisPointer:{type:""}},xAxis:{data:t.data.data.data,axisLabel:{rotate:20}},grid:{x:"5%",y:"10%",x2:"5%",y2:"15%",borderWidth:1},yAxis:{minInterval:1},series:[{name:"数据条数",type:"bar",data:t.data.data.visit,color:"#409eff",barMaxWidth:60,itemStyle:{normal:{label:{show:!0,position:"top",textStyle:{color:"black",fontSize:16}}}}}],dataZoom:[{type:"slider",show:!0,handleSize:2,height:"15px",start:0,end:e.computedPosition(1,i)}]})})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("avater")]),e._v(" "),e._l(e.$route.meta,function(t,i){return a("el-breadcrumb-item",{key:i},[e._v(e._s(t))])})],2),e._v(" "),a("el-form",{ref:"searchItem",staticClass:"demo-form-inline search_box",attrs:{inline:!0,model:e.searchItem,size:"mini"}},[a("el-date-picker",{attrs:{type:"daterange",align:"right",size:"mini","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},on:{change:e.dateChangebirthday},model:{value:e.pickerVal,callback:function(t){e.pickerVal=t},expression:"pickerVal"}}),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.seaBtnLoading},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm("searchItem")}}},[e._v("重置")])],1)],1),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table-box"},[a("div",{ref:"myChart",style:{width:"100%",height:"100%",margin:"20px auto 0"}})])],1)},staticRenderFns:[]};var o=a("VU/8")(r,s,!1,function(e){a("k7EL")},"data-v-6dde8266",null);t.default=o.exports},k7EL:function(e,t){}});