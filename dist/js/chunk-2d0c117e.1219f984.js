(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c117e"],{4529:function(t,e){function a(){var t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"frontmatter-markdown"},[a("nav",{staticClass:"table-of-contents"},[a("ol",[a("li",[a("a",{attrs:{href:"#产品高可靠性"}},[t._v(" 产品高可靠性")])]),a("li",[a("a",{attrs:{href:"#产品高兼容性"}},[t._v(" 产品高兼容性")])]),a("li",[a("a",{attrs:{href:"#产品高可维护性"}},[t._v(" 产品高可维护性")])]),a("li",[a("a",{attrs:{href:"#产品高可运营性"}},[t._v(" 产品高可运营性")])])])]),a("p",[t._v("本文探索分析下我所理解的DFX测试，也包括SANGFOR公司内的当前的一些标准。主要是软件方向哈。")]),t._v(" "),a("p",[t._v("Design for X ：X代表产品生命周期或其中的某一环节，基于此来设计其非功能性测试。")]),t._v(" "),a("h3",{attrs:{id:"产品高可靠性",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#产品高可靠性",target:"_blank"}},[t._v("§")]),t._v(" 产品高可靠性")]),t._v(" "),a("ol",[a("li",[t._v("产品的业务操作应考虑可失败重试，并记录有失败的日志。")]),t._v(" "),a("li",[t._v("业务的关键性配置应该有备份机制或者默认配置，已应对读写异常或文件损坏后快速恢复业务的场景。")]),t._v(" "),a("li",[t._v("系统时间跳变的情况下，服务应该保持正常运行。")]),t._v(" "),a("li",[t._v("高频操作下的服务高可靠。")]),t._v(" "),a("li",[t._v("配置冲突检测及处理。")]),t._v(" "),a("li",[t._v("体积较大的请求体或响应体应该考虑压缩。")]),t._v(" "),a("li",[t._v("定时任务中的超时处理和日志记录。")]),t._v(" "),a("li",[t._v("业务流程图中各业务节点的高可靠性，是否需要做事务处理。")]),t._v(" "),a("li",[t._v("数据导出的服务需要考虑数据完整、文件加密和敏感信息脱敏、数据可读（encode=utf8）、性能、数据可追溯（数据导出的时间）")]),t._v(" "),a("li",[t._v("数据量变带来的负载问题（负载均衡问题）。")]),t._v(" "),a("li",[t._v("并发操作的可靠性考虑。")]),t._v(" "),a("li",[t._v("系统资源占用后主动释放（CPU和内存为主）。")]),t._v(" "),a("li",[t._v("不同微服务对同一文件进行操作时（操作分层为多段操作时），特别是改写或删除，后一服务不该将前一服务所写的删除。\n（如，我同步本地和外部用户信息分为两步，每一步都会先清空再同步写入信息，那么在第二步同步外部用户信息的时候，会将刚同步好的本地用户信息清空，最终只同步到了外部用户信息。所以，在测试这种服务时需要梳理该服务操作的数据源的有哪些，将这些数据源组合起来一起被处理（仿真））")])]),t._v(" "),a("h3",{attrs:{id:"产品高兼容性",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#产品高兼容性",target:"_blank"}},[t._v("§")]),t._v(" 产品高兼容性")]),t._v(" "),a("ol",[a("li",[t._v("不同系统之间交互的API在设计上应该开发考虑到支持不同的组件对接")]),t._v(" "),a("li",[t._v("前端页面及交互应考虑前端浏览器兼容")])]),t._v(" "),a("h3",{attrs:{id:"产品高可维护性",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#产品高可维护性",target:"_blank"}},[t._v("§")]),t._v(" 产品高可维护性")]),t._v(" "),a("ol",[a("li",[t._v("涉及到数据面的配置的，需要考虑配置的导入导出（备份及恢复）")]),t._v(" "),a("li",[t._v("业务操作设计到变量的，都应该都要求可配置化，不管是前端输入还是后台配置")]),t._v(" "),a("li",[t._v("涉及到对对象属性进行操作的，应该将可操作属性抽象出来，以便后续增减可操作属性。\n（如导出数据为Excel文件时从设计上需要将文件格式、限制数量、支持导出的字段抽象处理，以便后续进行可配置化）")]),t._v(" "),a("li")]),t._v(" "),a("h3",{attrs:{id:"产品高可运营性",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#产品高可运营性",target:"_blank"}},[t._v("§")]),t._v(" 产品高可运营性")]),t._v(" "),a("p",[t._v("从运营性角度看，应用过程产生的数据应该可以产生或支持迭代自身的效果。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("产生失败日志以供查看并协助优化配置。")])]),t._v(" "),a("li",[a("p",[t._v("应该具备易用性和数据正确性")])])])])}];return{render:t,staticRenderFns:e}}const _=a();t.exports={attributes:{},vue:{component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=_.render,this.$options.staticRenderFns=_.staticRenderFns}}}}}}]);
//# sourceMappingURL=chunk-2d0c117e.1219f984.js.map