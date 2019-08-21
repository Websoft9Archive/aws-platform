(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{194:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建")]),t._v(" "),e("p",[t._v("下面介绍AWS上服务器实例的创建方式。")]),t._v(" "),e("p",[t._v("创建实例最基本的条件是需要给服务器准备一个系统盘的启动模板文件，这个模板最常见的表现形式就是镜像文件")]),t._v(" "),e("p",[t._v("下面介绍基于镜像创建云服务器的操作步骤：")]),t._v(" "),e("h2",{attrs:{id:"创建ec2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建ec2","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建EC2")]),t._v(" "),e("ol",[e("li",[t._v("登录到AWS管理控制台，点击“EC2”，\n"),e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/aws/aws-ec2-websoft9.png",alt:"进入ec2控制台"}})]),t._v(" "),e("li",[t._v("进入EC2控制面板，点击“启动实例”，即开始创建一个新的实例\n"),e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/aws/aws-addec2-websoft9.png",alt:"启动实例"}})]),t._v(" "),e("li",[t._v("在映像一栏，点击“浏览所有公用和专用映像”，然后搜索关键件词“websoft9”，列出相关镜像\n"),e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/aws/aws-ec2image-websoft9.png",alt:"选择Websoft9镜像"}})]),t._v(" "),e("li",[t._v("选择一个你所需的镜像，开始创建EC2实例")]),t._v(" "),e("li",[t._v("后续动作基本都会要求用户完成：选择实例类型、VPC、Key Pair等设置\n"),e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/aws/aws-ec2createpw-websoft9.png",alt:"选择Websoft9镜像"}})]),t._v(" "),e("li",[t._v("等待几分钟，EC2创建完成后，镜像会作为EC2实例的系统盘启动，即镜像自动部署到实例中")])]),t._v(" "),e("h2",{attrs:{id:"秘钥对"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#秘钥对","aria-hidden":"true"}},[t._v("#")]),t._v(" 秘钥对")]),t._v(" "),e("p",[t._v("在创建EC2时，AWS要求使用秘钥对登录，下面是创建秘钥对步骤")]),t._v(" "),e("ol",[e("li",[t._v("登录AWS控制台，打开：EC2 Dashboard->网络与安全->秘钥对，点击“"),e("strong",[t._v("创建秘钥对")]),t._v("”按钮\n"),e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/aws/aws-createkeyps-websoft9.png",alt:"创建秘钥对"}})]),t._v(" "),e("li",[t._v("为秘钥对命名，例如“myKey”\n"),e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/aws/aws-keypsname-websoft9.png",alt:"秘钥对名称"}})]),t._v(" "),e("li",[t._v("将秘钥对文件 myKey.pem 保存到本地电脑")])])])},[],!1,null,null,null);s.default=r.exports}}]);