webpackJsonp([13],{522:function(e,t,a){a(873);var o=a(203)(a(875),a(876),null,null);e.exports=o.exports},873:function(e,t,a){var o=a(874);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(205)("f5363884",o,!0)},874:function(e,t,a){t=e.exports=a(204)(!1),t.push([e.i,".rad-group{margin-bottom:20px}.handle-input{width:300px;display:inline-block}.handle-box2{display:inline-block;float:right}.orange{color:#eb9e05;background-color:transparent}.btn2{margin-bottom:5px;margin-left:0}.diainp{width:217px}.upload-demo .el-upload:hover{border-color:#409eff}",""])},875:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{user_type:1,user_account:"",uploadUrl:"api/project/manage/add",isShow:"1"!=localStorage.getItem("userMsg"),dialogFormVisible:!1,radio3:"全部",form:{file_name:"",project_name:"",user_account:"",project_local:"",project_image:"",comment:""},rules:{project_name:[{required:!0,message:"请输入项目名称",trigger:"blur"}],user_account:[{required:!0,message:"请输入项目管理员",trigger:"blur"}]},formLabelWidth:"120px",fileList:[],loading:!1,listData:[],pageTotal:1,currentPage:1,page_size:10}},created:function(){this.user_type=localStorage.getItem("user_type"),this.user_account=localStorage.getItem("user_account"),this.getProjectList(this.currentPage,this.page_size)},methods:{getProjectList:function(e,t){var a=this,o={page_size:t,current_page:e};a.loading=!0,a.$axios.post("/api/project/manage/page/list",o).then(function(e){a.loading=!1,0==e.data.ret_code?(a.listData=e.data.extra.slice(0,t),a.pageTotal=e.data.total):(a.listData=[],a.$message.error(e.data.ret_msg))})},handleCurrentChange:function(e){this.currentPage=e,this.getProjectList(this.currentPage,this.page_size)},clickDialogBtn:function(){this.form.project_name="",this.dialogFormVisible=!0},delProject:function(e,t,a){var o=this,l={_id:e,project_name:t};o.loading=!0,o.$axios.post("api/project/manage/del",l).then(function(e){o.loading=!1,0==e.data.ret_code?(o.$message({message:"删除成功",type:"success"}),o.listData.splice(a,1)):o.$message.error(e.data.ret_msg)},function(e){o.$message.error("删除失败"),o.loading=!1,console.log(e)})},projectStatusUpdate:function(e,t){var a=this,o={_id:e,project_status:t};a.loading=!0,a.$axios.post("api/project/manage/status/update",o).then(function(e){a.loading=!1,0==e.data.ret_code?a.$message({message:"操作成功",type:"success"}):a.$message.error(e.data.extra)},function(e){a.$message.error("操作失败"),a.loading=!1}),a.getProjectList(a.currentPage,a.page_size)},submitUpload:function(e){console.log("submitUpload",e);var t=this;t.$refs[e].validate(function(e){if(!e)return console.log("验证失败"),!1;t.$refs.upload.submit()})},beforeUpload:function(e){return console.log("beforeUpload",e.name),!0},handleSuccess:function(e,t,a){console.log("handleSuccess",t.name);var o=this;0==e.ret_code?this.$message({message:"创建成功",type:"success"}):this.$message.error("创建失败"),o.fileList=[],o.form.project_name="",o.form.user_account="",o.form.project_local="",o.form.comment="",o.dialogFormVisible=!1,o.$refs.upload.clearFiles(),this.getProjectList(o.currentPage,o.page_size)},handleError:function(e,t,a){console.log("handleError",t.name),this.$message("操作失败"),this.$refs.upload.clearFiles()},handleChange:function(e,t){console.log("handleChange",e.name);var a=new FileReader;a.onload=function(e){},a.readAsBinaryString(e.raw)}},computed:{}}},876:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[e.isShow?a("div",{staticClass:"handle-box rad-group"},[a("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"plus"},on:{click:e.clickDialogBtn}},[e._v("添加项目")])],1):e._e(),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.listData,border:""}},[a("el-table-column",{attrs:{prop:"update_time",label:"创建时间",width:"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"project_name",label:"项目名称",width:"240"}}),e._v(" "),a("el-table-column",{attrs:{prop:"project_local",label:"项目地点",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{label:"项目状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s("normal"==t.row.project_status?"显示":"隐藏"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"project_image",label:"项目图片",width:"450"}}),e._v(" "),a("el-table-column",{attrs:{prop:"comment",label:"备注说明"}}),e._v(" "),e.isShow?a("el-table-column",{attrs:{label:"操作",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"btn1",attrs:{type:"text",size:"small"},on:{click:function(a){e.delProject(t.row._id,t.row.project_name,t.$index)}}},[e._v("删除")]),e._v(" "),"normal"==t.row.project_status?a("el-button",{staticClass:"btn1",attrs:{type:"danger",size:"small"},on:{click:function(a){e.projectStatusUpdate(t.row._id,"hide")}}},[e._v("隐藏")]):a("el-button",{staticClass:"btn1",attrs:{type:"success",size:"small"},on:{click:function(a){e.projectStatusUpdate(t.row._id,"normal")}}},[e._v("可见")])]}}])}):e._e()],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,layout:"prev, pager, next",total:e.pageTotal},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{staticClass:"digcont",attrs:{title:"添加项目",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{label:"上传","label-width":e.formLabelWidth}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{name:"file_name","with-credentials":"",limit:1,action:e.uploadUrl,data:e.form,beforeUpload:e.beforeUpload,"on-change":e.handleChange,"on-success":e.handleSuccess,"on-error":e.handleError,"file-list":e.fileList,"list-type":"picture-card","auto-upload":!1}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取项目图片")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"项目名称",prop:"project_name","label-width":e.formLabelWidth}},[a("el-input",{staticClass:"diainp",attrs:{"auto-complete":"off"},model:{value:e.form.project_name,callback:function(t){e.$set(e.form,"project_name",t)},expression:"form.project_name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"项目地点",prop:"project_local","label-width":e.formLabelWidth}},[a("el-input",{staticClass:"diainp",attrs:{"auto-complete":"off"},model:{value:e.form.project_local,callback:function(t){e.$set(e.form,"project_local",t)},expression:"form.project_local"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注说明",prop:"comment","label-width":e.formLabelWidth}},[a("el-input",{staticClass:"diainp",attrs:{"auto-complete":"off"},model:{value:e.form.comment,callback:function(t){e.$set(e.form,"comment",t)},expression:"form.comment"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitUpload("form")}}},[e._v("添 加")])],1)],1)],1)},staticRenderFns:[]}}});