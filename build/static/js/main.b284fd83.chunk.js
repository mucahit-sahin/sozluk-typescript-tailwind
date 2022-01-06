(this.webpackJsonpsozluk=this.webpackJsonpsozluk||[]).push([[0],{44:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(21),r=a.n(s),n=(a(44),a(7)),l=a(4),i=a(3),o=a.n(i),d=a(8),b=a(23),j=a.n(b),m=j.a.create({baseURL:"http://localhost:5000/",headers:{"Content-Type":"application/json"}}),u=a(5),x=a(0),h=function(e){var t=e.title,a=e.count,c=e.slug;return Object(x.jsxs)("li",{className:"flex flex-row py-2 items-center  hover:bg-red-400",children:[Object(x.jsx)(u.b,{to:"/"+c,className:"flex-initial text-mine-shaft-500 break-words ",children:t}),Object(x.jsx)("small",{className:"ml-auto flex-initial text-gray-500",children:a})]})},O=function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e.agenda})),a=t.agenda,s=t.loading;return Object(c.useEffect)((function(){e(function(){var e=Object(d.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"AGENDA_GET_START"}),e.prev=1,e.next=4,m.get("/agenda");case 4:a=e.sent,t({type:"AGENDA_GET_SUCCESS",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"AGENDA_GET_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(x.jsxs)("div",{className:"hidden lg:block w-1/5 sticky top-28 z-0 mt-4 overflow-y-scroll pr-4",style:{height:"calc(100vh - 120px)"},children:[Object(x.jsxs)("div",{className:"flex flex-row mb-2 items-center",children:[Object(x.jsx)("h2",{className:"text-gray text-xl mr-3",children:"g\xfcndem"}),Object(x.jsx)("svg",{width:"10",height:"10",fill:"gray",viewBox:"0 0 24 24",children:Object(x.jsx)("path",{d:"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"})})]}),Object(x.jsx)("ul",{className:"flex-col",children:s?Object(x.jsx)("div",{children:"Loading..."}):a.length>0?a.map((function(e,t){return Object(x.jsx)(h,{title:e.title,slug:e.slug,count:e.todayCount},t)})):Object(x.jsx)("div",{children:"G\xfcndem Bo\u015f"})})]})};var p=a(2),f=a(14),g=a(38),v=a.n(g),y=function(e){var t=e.title,a=e.comment,s=Object(n.b)(),r=Object(l.g)(),i=Object(n.c)((function(e){return e.auth})).user,b=Object(c.useState)({creator:i.username,slug:t?v()(t,"_"):"/",title:t,message:""}),j=Object(f.a)(b,2),u=j[0],h=j[1];return Object(x.jsx)("div",{children:i.username?Object(x.jsxs)("div",{className:"py-4 px-5 mt-3 bg-gray-100 ",children:[Object(x.jsx)("textarea",{className:"p-2 w-full ".concat(a?"h-32":"h-56"),id:"editbox",name:"Content",placeholder:'"'.concat(t,'" hakk\u0131nda bilgi verin'),value:u.message,onChange:function(e){return h(Object(p.a)(Object(p.a)({},u),{},{message:e.target.value}))}}),Object(x.jsx)("button",{onClick:function(){""!==u.message&&s(a?function(e,t,a){return function(){var c=Object(d.a)(o.a.mark((function c(s){var r;return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s({type:"ADD_COMMENT_START"}),c.prev=1,c.next=4,m.post("/post/".concat(e),{message:t});case 4:r=c.sent,s({type:"ADD_COMMENT_SUCCESS",payload:r.data}),a.push("/"+r.data.slug),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),s({type:"ADD_COMMENT_ERROR"});case 12:case"end":return c.stop()}}),c,null,[[1,9]])})));return function(e){return c.apply(this,arguments)}}()}(t,u.message,r):function(e,t){return function(){var a=Object(d.a)(o.a.mark((function a(c){var s;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c({type:"CREATE_POST_START"}),a.prev=1,a.next=4,m.post("/post",e);case 4:s=a.sent,c({type:"CREATE_POST_SUCCESS",payload:s.data}),t.push("/"+s.data.slug),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),c({type:"CREATE_POST_ERROR"});case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()}(u,r))},className:"bg-mantis-500 text-white border border-mantis-700 rounded p-2",children:"yolla"})]}):Object(x.jsx)("div",{className:"mt-4",children:Object(x.jsx)("h3",{children:"Bu ba\u015fl\u0131\u011f\u0131 ilk yazan sen olmak i\xe7in giri\u015f yap\u0131n\u0131z."})})})},N=function(e){var t=e.title,a=e.content,c=e.username,s=e.datetime,r=e.slug;return Object(x.jsxs)("div",{className:"flex flex-col mt-3",children:[Object(x.jsx)("h1",{className:"break-words text-xl text-bahama-blue-500 font-bold mb-2",children:Object(x.jsx)(u.b,{to:"/"+r,children:t})}),Object(x.jsx)("div",{className:"break-words mb-1",children:Object(x.jsx)("span",{children:a})}),Object(x.jsxs)("div",{className:"flex flex-row",children:[Object(x.jsx)(u.b,{to:"/",className:"mr-2",children:Object(x.jsx)("svg",{id:"chevron-up-thick",fill:"blue",width:"10px",viewBox:"0 0 512 512",children:Object(x.jsx)("path",{d:"m496 341l-189-225c-31-27-63-27-94 0l-197 225c-16 15-12 43 4 55 15 16 39 12 55-4l185-209 177 209c16 16 40 20 55 4 20-12 20-40 4-55z"})})}),Object(x.jsx)(u.b,{to:"/",children:Object(x.jsx)("svg",{id:"chevron-down-thick",fill:"blue",width:"10px",viewBox:"0 0 512 512",children:Object(x.jsx)("path",{d:"m492 108c-15-15-43-12-55 4l-177 213-185-209c-16-16-40-20-55-4-16 12-20 40-4 55l197 225c31 31 63 27 94 0l189-225c16-15 16-43-4-59z"})})}),Object(x.jsxs)("div",{className:"ml-auto",children:[Object(x.jsx)("span",{className:"text-gray text-xs mr-2",children:s}),Object(x.jsx)(u.b,{to:"/",className:"text-gray text-sm",children:c})]})]})]})},k=function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e.post})),a=t.posts,s=t.loading;return Object(c.useEffect)((function(){e(function(){var e=Object(d.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_LATEST_POSTS_START"}),e.prev=1,e.next=4,j.a.get("/post");case 4:a=e.sent,t({type:"GET_LATEST_POSTS_SUCCESS",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"GET_LATEST_POSTS_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(x.jsx)("div",{className:"flex flex-col w-full lg:w-3/5 px-6",children:s?Object(x.jsx)("span",{children:"y\xfckleniyor"}):a.map((function(e){return Object(x.jsx)(N,{title:e.title,content:e.comments[e.comments.length-1].message,username:e.comments[e.comments.length-1].username,slug:e.slug,datetime:e.comments[e.comments.length-1].createdAt.toString()})}))})},S=function(){var e=new URLSearchParams(Object(l.h)().search);return Object(x.jsxs)("div",{className:"container mx-auto flex",children:[Object(x.jsx)(O,{}),e.get("q")?Object(x.jsxs)("div",{className:"flex flex-col w-full lg:w-3/5 px-6",children:[Object(x.jsx)("h1",{className:"break-words text-xl text-bahama-blue-500 font-bold mb-2",children:e.get("q")}),Object(x.jsx)("span",{children:"b\xf6yle bir \u015fey yok."}),Object(x.jsx)(y,{title:e.get("q")})]}):Object(x.jsx)(k,{}),Object(x.jsx)("div",{className:"hidden lg:flex flex-col w-1/5",children:"reklam"})]})},w=a(24),E=function(){var e=localStorage.getItem("token");e?m.defaults.headers.common["x-auth-token"]=e:delete m.defaults.headers.common["x-auth-token"]},R=function(){return function(){var e=Object(d.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(),e.next=4,m.get("/user/auth");case 4:a=e.sent,t({type:"USER_LOADED",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:"AUTH_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},T=function(){var e=Object(n.b)(),t=Object(l.g)(),a=Object(w.a)(),c=a.register,s=a.handleSubmit,r=a.formState.errors,i=Object(n.c)((function(e){return e.auth})).error;return Object(x.jsxs)("div",{className:"mx-6 w-96",children:[Object(x.jsx)("h1",{className:"my-6 text-xl font-bold",children:"giri\u015f"}),Object(x.jsxs)("form",{onSubmit:s((function(a){e(function(e){var t=e.email,a=e.password,c=e.history;return function(){var e=Object(d.a)(o.a.mark((function e(s){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"LOGIN_START"}),e.prev=1,e.next=4,m.post("/user/signin",{email:t,password:a});case 4:r=e.sent,s({type:"LOGIN_SUCCESS",payload:r.data}),localStorage.setItem("token",r.data.token),s(R()),c.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),s({type:"LOGIN_ERROR"});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()}({email:a.email,password:a.password,history:t}))})),children:[Object(x.jsxs)("div",{className:"mb-2",children:[Object(x.jsx)("label",{className:"block mb-1",children:" e-mail"}),Object(x.jsx)("input",Object(p.a)({type:"email",className:"border border-gray-300 rounded-sm p-2 text-sm w-full"},c("email",{required:!0}))),r.email&&Object(x.jsx)("span",{className:"text-red-500",children:"bu alan bo\u015f olamaz"})]}),Object(x.jsxs)("div",{className:"mb-2",children:[Object(x.jsx)("label",{className:"block mb-1",children:" \u015fifre"}),Object(x.jsx)("input",Object(p.a)({type:"password",className:"border border-gray-300 rounded-sm p-2 text-sm w-full"},c("password",{required:!0}))),r.password&&Object(x.jsx)("span",{className:"text-red-500",children:"bu alan bo\u015f olamaz"})]}),Object(x.jsxs)("div",{className:"mb-2",children:[Object(x.jsx)("input",Object(p.a)({type:"checkbox"},c("rememberMe"))),Object(x.jsx)("label",{children:"beni hat\u0131rla"})]}),Object(x.jsx)("button",{type:"submit",className:"px-4 py-2 rounded-sm bg-mantis-500 w-full text-white",children:"giri\u015f yap"}),""!==i&&Object(x.jsx)("span",{className:"text-red-500",children:"Auth Failed"})]})]})},_=function(e){var t=e.text,a=e.href,c=e.title,s=e.className;return Object(x.jsx)("li",{className:"mx-2 text-center flex-1 leading-10 border-b-4  border-transparent hover:border-mantis-500 hover:text-mantis-500 font-semibold ".concat(s&&s),children:Object(x.jsx)(u.b,{to:a,title:c,children:t})})},A=function(){var e=Object(c.useState)(!1),t=Object(f.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(""),i=Object(f.a)(r,2),b=i[0],j=i[1],h=Object(n.b)(),O=Object(l.g)(),p=function(){""!==b&&(h(function(e,t){return function(){var a=Object(d.a)(o.a.mark((function a(c){var s;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m.get("/post/isthere/".concat(e));case 3:s=a.sent,c({type:"SEARCH",payload:e}),s.data?t.push("/"+s.data):t.push("/?q="+e),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(b,O)),j(""))},g=Object(n.c)((function(e){return e.auth})).user;return Object(x.jsxs)("div",{className:"sticky top-0 bg-white border-t-4 border-b border-mantis-500",children:[Object(x.jsxs)("div",{className:"mx-2 sm:mx-auto max-w-7xl flex py-2",children:[Object(x.jsxs)(u.b,{to:"/",className:"w-1/6 sm:flex-1 flex items-center",children:[Object(x.jsx)("img",{className:"hidden sm:block h-6",src:"https://ekstat.com/img/new-design/eksisozluk_logo.svg",alt:"logo"}),Object(x.jsx)("img",{className:"h-6 sm:hidden",src:"https://ekstat.com/img/ilogo_smallv2.png",alt:"mobilelogo"})]}),Object(x.jsxs)("div",{className:"w-5/6  sm:flex-1 flex justify-center",children:[Object(x.jsx)("input",{type:"text",placeholder:"Search",value:b,onChange:function(e){return j(e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&p()},className:"flex-1 text-sm px-1 rounded-tl-md rounded-bl-md border-mantis-500 border leading-7"}),Object(x.jsx)("button",{onClick:function(){return p()},className:" bg-mantis-500 h-full leading-7 border border-mantis-500 px-2 rounded-tr-md rounded-br-md",children:Object(x.jsx)("svg",{className:"h-4 ",id:"eksico-search",viewBox:"0 0 512 512",fill:"white",children:Object(x.jsx)("path",{d:"m507 507c-2 3-6 5-10 5-4 0-8-2-11-5l-143-142c-74 63-182 66-259 7-78-59-104-164-63-252 41-88 138-136 233-115 95 21 162 106 162 203 0 50-18 98-51 135l142 143c6 6 6 15 0 21z m-123-299c0-97-79-176-176-176-97 0-176 79-176 176 0 97 79 176 176 176 97 0 176-79 176-176z"})})})]}),Object(x.jsx)("div",{className:"hidden sm:flex flex-1 justify-end items-center text-sm",children:g.username?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{className:"px-2 hover:underline",children:g.username}),Object(x.jsx)(u.b,{to:"/#",onClick:function(){return h((function(e){localStorage.removeItem("token"),e({type:"LOGOUT"})}))},children:"\xe7\u0131k\u0131\u015f yap"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(u.b,{to:"/login",className:"px-2 hover:underline",children:"giri\u015f"}),Object(x.jsx)(u.b,{to:"/signup",className:"ml-1 px-2 hover:underline",children:"\xfcye ol"})]})})]}),Object(x.jsx)("div",{className:"mx-auto max-w-7xl",children:Object(x.jsxs)("ul",{id:"quick-index-nav",className:"flex flex-row",children:[Object(x.jsx)(_,{href:"/#",title:"d\xfcnyam\u0131zda neler olup bitiyor",text:"g\xfcndem"}),Object(x.jsx)(_,{href:"/#",title:"d\xfcn\xfcn en be\u011fenilen entry'leri",text:"debe"}),Object(x.jsx)(_,{href:"/#",title:"d\xfcnyam\u0131zda neler olup bitiyor",text:"sorunsallar"}),Object(x.jsx)(_,{href:"/#",title:"futbol, basketbol, tenis ve curling gibi ata sporlar\u0131",text:"#spor",className:"hidden md:block"}),Object(x.jsx)(_,{href:"/#",title:"sevgili, eski sevgili ve ho\u015flan\u0131lan k\u0131z",text:"#ili\u015fkiler",className:"hidden md:block"}),Object(x.jsx)(_,{href:"/#",title:"partiler, politikac\u0131lar, ter\xf6r, sava\u015f kan ve korku",text:" #siyaset",className:"hidden md:block"}),g.username?Object(x.jsx)("span",{className:" sm:hidden px-2 flex justify-center items-center hover:underline",children:g.username}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(_,{href:"/login",title:"giri\u015f",text:"giri\u015f",className:"sm:hidden"}),Object(x.jsx)(_,{href:"/signup",title:"\xfcye ol",text:"\xfcye ol",className:"sm:hidden"})]}),Object(x.jsxs)("li",{className:"hidden mx-2  flex-1 sm:flex  border-b-4  border-transparent hover:border-mantis-500 font-semibold",children:[Object(x.jsx)(u.b,{to:"/#",title:"kanallar",className:"flex flex-1 justify-center items-center hover:text-mantis-500 ",onClick:function(){return s(!0)},children:Object(x.jsx)("svg",{fill:"black",width:"20",viewBox:"0 0 512 512",children:Object(x.jsx)("path",{d:"m64 192c-34 0-64 30-64 64 0 34 30 64 64 64 34 0 64-30 64-64 0-34-30-64-64-64z m384 0c-34 0-64 30-64 64 0 34 30 64 64 64 34 0 64-30 64-64 0-34-30-64-64-64z m-192 0c-34 0-64 30-64 64 0 34 30 64 64 64 34 0 64-30 64-64 0-34-30-64-64-64z"})})}),a&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{id:"close-panel",onClick:function(){return s(!1)},className:"absolute bg-gray-500 bg-opacity-60 left-0 top-0 w-screen h-screen z-0"}),Object(x.jsxs)("ul",{className:"absolute flex flex-col bg-white border border-gray-400 rounded z-20",children:[Object(x.jsx)("li",{className:"text-center px-7  py-1 hover:bg-gray-300",children:Object(x.jsx)(u.b,{to:"/",children:"deneme1"})}),Object(x.jsx)("li",{className:"text-center px-7 py-1 hover:bg-gray-300",children:Object(x.jsx)(u.b,{to:"/",children:"deneme1"})}),Object(x.jsx)("li",{className:"text-center px-7 py-1 hover:bg-gray-300",children:Object(x.jsx)(u.b,{to:"/",children:"deneme1"})}),Object(x.jsx)("li",{className:"text-center px-7 py-1 hover:bg-gray-300 ",children:Object(x.jsx)(u.b,{to:"/",children:"deneme1"})}),Object(x.jsx)("li",{className:"text-center px-7 py-1 hover:bg-gray-300",children:Object(x.jsx)(u.b,{to:"/",children:"deneme1"})})]})]})]})]})})]})},C=function(){var e=Object(n.b)(),t=Object(l.g)(),a=Object(w.a)(),c=a.register,s=a.handleSubmit,r=a.watch,i=a.formState.errors;return Object(x.jsxs)("div",{className:"mx-6 w-96 mb-6",children:[Object(x.jsx)("h1",{className:"my-6 text-xl font-bold",children:"yeni kullan\u0131c\u0131 kayd\u0131"}),Object(x.jsxs)("form",{onSubmit:s((function(a){e(function(e){var t=e.email,a=e.password,c=e.birtdate,s=e.username,r=e.history;return function(){var e=Object(d.a)(o.a.mark((function e(n){var l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"REGISTER_START"}),e.prev=1,e.next=4,m.post("/user/signup",{email:t,password:a,birtdate:c,username:s});case 4:l=e.sent,n({type:"REGISTER_SUCCESS",payload:l.data}),localStorage.setItem("token",l.data.token),n(R()),r.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),n({type:"REGISTER_ERROR"});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()}({email:a.email,password:a.password,username:a.username,birtdate:a.birtdate,history:t}))})),children:[Object(x.jsxs)("div",{className:"mb-2",children:[Object(x.jsx)("label",{className:"block mb-1",children:" nick"}),Object(x.jsx)("input",Object(p.a)({type:"text",className:"border border-gray-300 rounded-sm p-2 text-sm w-full"},c("username",{required:"Bu alan bo\u015f olamaz.",minLength:{value:5,message:"Bu alan en az 5 karakterli olmal\u0131d\u0131r. "}}))),i.username&&Object(x.jsx)("span",{className:"text-red-500",children:i.username.message})]}),Object(x.jsxs)("div",{className:"mb-2",children:[Object(x.jsx)("label",{className:"block mb-1",children:" email"}),Object(x.jsx)("input",Object(p.a)({type:"email",className:"border border-gray-300 rounded-sm p-2 text-sm w-full"},c("email",{required:"Bu alan bo\u015f olamaz."}))),i.email&&Object(x.jsx)("span",{className:"text-red-500",children:i.email.message})]}),Object(x.jsxs)("div",{className:"mb-2",children:[Object(x.jsx)("label",{className:"block mb-1",children:"do\u011fum tarihi"}),Object(x.jsx)("input",Object(p.a)({type:"date"},c("birtdate",{required:"Bu alan bo\u015f olamaz."}))),i.birtdate&&Object(x.jsx)("span",{className:"text-red-500",children:i.birtdate.message})]}),Object(x.jsxs)("div",{className:"mb-2",children:[Object(x.jsx)("label",{className:"block mb-1",children:" \u015fifre"}),Object(x.jsx)("input",Object(p.a)({type:"password",className:"border border-gray-300 rounded-sm p-2 text-sm w-full"},c("password",{required:"Bu alan bo\u015f olamaz.",minLength:{value:6,message:"Bu alan en az 6 karakterli olmal\u0131d\u0131r. "}}))),i.password&&Object(x.jsx)("span",{className:"text-red-500",children:i.password.message})]}),Object(x.jsxs)("div",{className:"mb-2",children:[Object(x.jsx)("label",{className:"block mb-1",children:" \u015fifre(tekrar)"}),Object(x.jsx)("input",Object(p.a)({type:"password",className:"border border-gray-300 rounded-sm p-2 text-sm w-full"},c("passwordRepeat",{validate:function(e){return e===r("password")||"\u015eifreler e\u015fle\u015fmiyor."}}))),i.passwordRepeat&&Object(x.jsx)("span",{className:"text-red-500",children:i.passwordRepeat.message})]}),Object(x.jsxs)("div",{className:"mb-2",children:[Object(x.jsx)("input",Object(p.a)(Object(p.a)({type:"checkbox"},c("eula",{required:!0})),{},{className:"mr-2"})),Object(x.jsx)("label",{children:"S\xf6zle\u015fmeyi okudum ve kabul ediyorum"}),i.eula&&Object(x.jsx)("span",{className:"text-red-500 block",children:"L\xfctfen s\xf6zle\u015fmeyi kabul ediniz!"})]}),Object(x.jsx)("button",{type:"submit",className:"px-4 py-2 rounded-sm bg-mantis-500 w-full text-white",children:"\xfcye ol"})]})]})},G=function(e){var t=e.content,a=e.username,c=e.datetime;return Object(x.jsxs)("div",{className:"my-5",children:[Object(x.jsx)("div",{className:"break-words mb-1",children:Object(x.jsx)("span",{children:t})}),Object(x.jsxs)("div",{className:"flex flex-row",children:[Object(x.jsx)(u.b,{to:"/like",className:"mr-2",children:Object(x.jsx)("svg",{id:"chevron-up-thick",fill:"blue",width:"10px",viewBox:"0 0 512 512",children:Object(x.jsx)("path",{d:"m496 341l-189-225c-31-27-63-27-94 0l-197 225c-16 15-12 43 4 55 15 16 39 12 55-4l185-209 177 209c16 16 40 20 55 4 20-12 20-40 4-55z"})})}),Object(x.jsx)(u.b,{to:"/dislike",children:Object(x.jsx)("svg",{id:"chevron-down-thick",fill:"blue",width:"10px",viewBox:"0 0 512 512",children:Object(x.jsx)("path",{d:"m492 108c-15-15-43-12-55 4l-177 213-185-209c-16-16-40-20-55-4-16 12-20 40-4 55l197 225c31 31 63 27 94 0l189-225c16-15 16-43-4-59z"})})}),Object(x.jsxs)("div",{className:"ml-auto",children:[Object(x.jsx)("span",{className:"text-gray text-xs mr-2",children:c}),Object(x.jsx)(u.b,{to:"/",className:"text-gray text-sm",children:a})]})]})]})},z=function(){var e,t=Object(n.b)(),a=Object(l.i)().id;Object(c.useEffect)((function(){console.log(a),t(function(e,t){return function(){var a=Object(d.a)(o.a.mark((function a(c){var s;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c({type:"SEARCH_START"}),a.prev=1,a.next=4,m.get("/post/".concat(e,"?page=").concat(t||"1"));case 4:s=a.sent,c({type:"SEARCH_SUCCESS",payload:s.data}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),c({type:"SEARCH_ERROR"});case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()}(a))}),[t,a]);var s=Object(n.c)((function(e){return e.post})),r=s.post,i=s.loading;return Object(x.jsx)("div",{className:"flex flex-col w-full lg:w-3/5 px-6",children:i?Object(x.jsx)("h2",{children:"Y\xfckleniyor"}):Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"break-words text-xl text-bahama-blue-500 font-bold mb-2",children:r.title}),Object(x.jsxs)("div",{className:"flex flex-row",children:[Object(x.jsxs)("div",{className:"text-sm text-bahama-blue-500",children:[Object(x.jsx)(u.b,{to:"/",className:"mr-2",children:"t\xfcm\xfc"}),"|",Object(x.jsx)(u.b,{to:"/",className:"ml-2",children:"bug\xfcn"})]}),Object(x.jsxs)("div",{className:"ml-auto",children:[Object(x.jsx)("a",{href:"?p=1",rel:"prev",title:"\xf6nceki sayfa",className:"ml-1  py-0.5 px-2 border rounded mr-1 border-black ",children:"\xab"}),Object(x.jsxs)("select",{className:"w-12 rounded-sm border border-black mr-1",children:[Object(x.jsx)("option",{selected:!0,children:"1"}),Object(x.jsx)("option",{children:"2"})]}),"/",Object(x.jsx)("a",{href:"?p=16",title:"son sayfa",className:"ml-1  py-0.5 px-2 border border-black rounded",children:r.numberOfPages}),Object(x.jsx)("a",{href:"?p=1",rel:"prev",title:"\xf6nceki sayfa",className:"ml-1  py-0.5 px-2 border border-black rounded",children:"\xbb"})]})]}),null===(e=r.comments)||void 0===e?void 0:e.map((function(e,t){return Object(x.jsx)(G,{content:e.message,datetime:e.createdAt,username:e.username},t)})),Object(x.jsx)("div",{className:"flex",children:Object(x.jsxs)("div",{className:"ml-auto",children:[Object(x.jsx)("a",{href:"?p=1",rel:"prev",title:"\xf6nceki sayfa",className:"ml-1  py-0.5 px-2 border rounded mr-1 border-black ",children:"\xab"}),Object(x.jsxs)("select",{className:"w-12 rounded-sm border border-black mr-1",children:[Object(x.jsx)("option",{selected:!0,children:"1"}),Object(x.jsx)("option",{children:"2"})]}),"/",Object(x.jsx)("a",{href:"?p=16",title:"son sayfa",className:"ml-1  py-0.5 px-2 border border-black rounded",children:r.numberOfPages}),Object(x.jsx)("a",{href:"?p=1",rel:"prev",title:"\xf6nceki sayfa",className:"ml-1  py-0.5 px-2 border border-black rounded",children:"\xbb"})]})}),Object(x.jsx)(y,{title:r.title,comment:!0})]})})},D=function(e){var t=e.path,a=e.exact,c=e.children,s=Object(n.c)((function(e){return e.auth})).user;return Object(x.jsx)(l.b,{path:t,exact:a&&!0,children:s.username?Object(x.jsx)(l.a,{to:"/"}):c})};var L,U=function(){var e=Object(n.b)();return Object(c.useEffect)((function(){e(R())}),[e]),Object(x.jsxs)("div",{className:"",children:[Object(x.jsx)(A,{}),Object(x.jsxs)(l.d,{children:[Object(x.jsx)(l.b,{path:"/",exact:!0,children:Object(x.jsx)(S,{})}),Object(x.jsx)(D,{path:"/login",children:Object(x.jsxs)("div",{className:"container mx-auto flex",children:[Object(x.jsx)(O,{}),Object(x.jsx)(T,{})]})}),Object(x.jsx)(D,{path:"/signup",children:Object(x.jsxs)("div",{className:"container mx-auto flex",children:[Object(x.jsx)(O,{}),Object(x.jsx)(C,{})]})}),Object(x.jsx)(l.b,{path:"/:id",children:Object(x.jsxs)("div",{className:"container mx-auto flex",children:[Object(x.jsx)(O,{}),Object(x.jsx)(z,{})]})})]})]})},I=a(18),B={agenda:[],loading:!1,error:""},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AGENDA_GET_START":return Object(p.a)(Object(p.a)({},e),{},{loading:!0,agenda:{}});case"AGENDA_GET_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,agenda:t.payload});case"AGENDA_GET_ERROR":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,error:"Error"});default:return e}},P={user:{},token:(null===(L=localStorage.getItem("token"))||void 0===L?void 0:L.toString())||"",loading:!1,error:""},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_START":case"REGISTER_START":return Object(p.a)(Object(p.a)({},e),{},{loading:!0,token:"",error:""});case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{token:t.payload.token.toString(),loading:!1});case"LOGIN_ERROR":case"REGISTER_ERROR":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,token:"",user:{},error:"Auth Failed"});case"USER_LOADED":return Object(p.a)(Object(p.a)({},e),{},{user:t.payload,loading:!1});case"AUTH_ERROR":return Object(p.a)(Object(p.a)({},e),{},{user:{}});case"LOGOUT":return Object(p.a)(Object(p.a)({},e),{},{user:{},token:"",loading:!1});default:return e}},H={posts:[],post:{},search:"",loading:!1,error:""},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_START":case"ADD_COMMENT_START":return Object(p.a)(Object(p.a)({},e),{},{loading:!0,post:{}});case"SEARCH_SUCCESS":case"ADD_COMMENT_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,post:t.payload});case"SEARCH_ERROR":case"ADD_COMMENT_ERROR":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,error:"Error"});case"SEARCH":return Object(p.a)(Object(p.a)({},e),{},{search:t.payload});case"GET_LATEST_POSTS_START":return Object(p.a)(Object(p.a)({},e),{},{loading:!0,posts:[]});case"GET_LATEST_POSTS_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,posts:t.payload});case"GET_LATEST_POSTS_ERROR":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,posts:[],error:"Get Latest Posts Error"});default:return e}},J=Object(I.b)({auth:q,post:F,agenda:M}),X=a(39),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.c,V=Object(I.d)(J,K(Object(I.a)(X.a)));r.a.render(Object(x.jsx)(n.a,{store:V,children:Object(x.jsx)(u.a,{children:Object(x.jsx)(U,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.b284fd83.chunk.js.map