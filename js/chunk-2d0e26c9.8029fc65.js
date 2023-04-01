(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e26c9"],{"7f48":function(s,t){function a(){var s=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},t=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"frontmatter-markdown"},[a("nav",{staticClass:"table-of-contents"},[a("ol",[a("li",[a("a",{attrs:{href:"#sql注入"}},[s._v(" SQL注入")])]),a("li",[a("a",{attrs:{href:"#python写一个后台服务"}},[s._v(" Python写一个后台服务")])])])]),a("h3",{attrs:{id:"sql注入",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql注入",target:"_blank"}},[s._v("§")]),s._v(" SQL注入")]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-text"}},[s._v("自行探索sql注入的逻辑，以sqlite3为数据库为例\n")])]),s._v(" "),a("h3",{attrs:{id:"python写一个后台服务",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python写一个后台服务",target:"_blank"}},[s._v("§")]),s._v(" Python写一个后台服务")]),s._v(" "),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-python"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("#! /usr/bin/python3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# -*- coding: utf-8 -*-")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# @Time : 2023/2/24 10:50")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('# @Author :"Liu Jin Yao"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# @Email : 592203122@qq.com")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# @File : Application.py")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" flask "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Flask\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" sqlite3\n\n\n"),a("span",{pre:!0,attrs:{class:"hljs-class"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("sqliteDatabase")]),s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("__init__")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("self")]),s._v("):")]),s._v("\n        self.connect = sqlite3.connect("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"server.sqlite3"')]),s._v(")\n        self.cursor = self.connect.cursor()\n\t\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 建表")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("newTable")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("self, tableName, keyList:"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("list")])]),s._v("):")]),s._v("\n        key = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('", "')]),s._v(".join(keyList)\n        sql = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('f"create table '),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("{tableName}")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("{key}")]),s._v(')"')]),s._v("\n        self.cursor.execute(sql)\n        self.connect.commit()\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("True")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# 查询")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("queryAll")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("self, sql")]),s._v("):")]),s._v("\n        self.cursor.execute(sql)\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" self.cursor.fetchall()\n\n    "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("__del__")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("self")]),s._v("):")]),s._v("\n        self.cursor.close()\n        self.connect.close()\n\n    "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("setup1")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("self")]),s._v("):")]),s._v("\n        self.newTable(tableName="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"addr"')]),s._v(",\n                                  keyList=["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'id INTEGER PRIMARY KEY autoincrement'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"name varchar(15) not null"')]),s._v("])\n        self.newTable(tableName="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"user"')]),s._v(",\n                                  keyList=["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'id INTEGER PRIMARY KEY autoincrement'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"name varchar(15) not null"')]),s._v("])\n\n\napp = Flask(__name__)\n\n"),a("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v('@app.route("/showUser/<name>", methods=["GET"])')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("index")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("name")]),s._v("):")]),s._v("\n    sql = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('f"select * from user where name = \\"'),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("{name}")]),s._v('\\" limit 0, 1"')]),s._v("\n    result = sqliteDatabase().queryAll(sql)\n    print(result)\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"success"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("True")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"result"')]),s._v(": result}\n\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" __name__ == "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'__main__'")]),s._v(":\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# sqliteDatabase().setup1()")]),s._v("\n    app.run("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.0.0.0"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3111")]),s._v(", debug="),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("True")]),s._v(")\n\n")])])])}];return{render:s,staticRenderFns:t}}const e=a();s.exports={attributes:{},vue:{component:{data:function(){return{templateRender:null}},render:function(s){return this.templateRender?this.templateRender():s("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);
//# sourceMappingURL=chunk-2d0e26c9.8029fc65.js.map