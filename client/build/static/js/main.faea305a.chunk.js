(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{85:function(e,t,n){},89:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(70),s=n.n(r),i=(n(85),n(7)),o=n(17),l=n(5),j=n(75),u=n(101),d=n(103),b=n(100),O=n(73),h=n(8),p=n(77),m=n(0);var x,f,g,v,k,y,_,N=function(e){e._id;var t=e.text,n=e.user;return Object(m.jsxs)("div",{className:"card px-1 py-1",children:[Object(m.jsx)("h3",{children:n}),Object(m.jsx)("p",{children:t}),Object(m.jsx)("br",{})]})},w=n(9),C=n(16),S=n(15),E=n(71),$=n(96),T=n(19),Q=n(102),P=Object(Q.a)(x||(x=Object(T.a)(["\nquery getBooks {\n  books {\n    _id\n    name\n    description\n    price\n    image\n    genre {\n      _id\n      name\n    \n    }\n  }\n}\n"]))),A=Object(Q.a)(f||(f=Object(T.a)(["\n  query getCheckout($books: [ID]!) {\n    checkout(books: $books) {\n      session\n    }\n  }\n"]))),I=(Object(Q.a)(g||(g=Object(T.a)(["\n  {\n    books {\n      _id\n      name\n      description\n      price\n      quantity\n      genre {\n        _id\n        name\n      }\n    }\n  }\n"]))),Object(Q.a)(v||(v=Object(T.a)(["\n  {\n    genres {\n      _id\n      name\n    }\n  }\n"])))),D=Object(Q.a)(k||(k=Object(T.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        books {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),R=Object(Q.a)(y||(y=Object(T.a)(["\nquery clubs {\n  clubs {\n    _id\n    name\n    locked\n    image\n    description\n    book {\n      description\n      name\n      _id\n    }\n    posts {\n      text\n      user\n      _id\n    }\n    users {\n      userName\n      _id\n    }\n  }\n}"])));Object(Q.a)(_||(_=Object(T.a)(["\nquery Posts {\n  posts {\n    text\n    user\n    likes\n    dislikes\n    _id\n  }\n}"])));function U(e,t){return 1===t?e:e+"s"}function B(e,t,n){return new Promise((function(c,a){var r,s,i,o=window.indexedDB.open("shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("books",{keyPath:"_id"}),t.createObjectStore("genres",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"}),t.createObjectStore("clubs",{keyPath:"_id"}),t.createObjectStore("posts",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(a){switch(r=o.result,s=r.transaction(e,"readwrite"),i=s.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":i.put(n),c(n);break;case"get":var l=i.getAll();l.onsuccess=function(){c(l.result)};break;case"delete":i.delete(n._id);break;default:console.log("No valid method")}s.oncomplete=function(){r.close()}}}))}var L=n(76),q="UPDATE_BOOKS",G="ADD_TO_CART",W="ADD_MULTIPLE_TO_CART",F="REMOVE_FROM_CART",M="UPDATE_CART_QUANTITY",Y="TOGGLE_CART",H="UPDATE_GENRES",J="UPDATE_CURRENT_GENRE",V="UPDATE_CLUBS",z=function(e,t){switch(t.type){case q:return Object(i.a)(Object(i.a)({},e),{},{books:Object(C.a)(t.books)});case G:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(C.a)(e.cart),[t.book])});case W:return Object(i.a)(Object(i.a)({},e),{},{cart:[].concat(Object(C.a)(e.cart),Object(C.a)(t.books))});case M:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case F:var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(i.a)(Object(i.a)({},e),{},{cartOpen:n.length>0,cart:n});case"CLEAR_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!1,cart:[]});case Y:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!e.cartOpen});case H:return Object(i.a)(Object(i.a)({},e),{},{genres:Object(C.a)(t.genres)});case J:return Object(i.a)(Object(i.a)({},e),{},{currentGenre:t.currentGenre});case V:return Object(i.a)(Object(i.a)({},e),{},{clubs:t.clubs});default:return e}};var K=["value"],X=Object(c.createContext)(),Z=X.Provider,ee=function(e){e.value;var t,n=Object(L.a)(e,K),a=(t={cart:[],cartOpen:!1,currentGenre:"",books:[],users:[],genres:[],clubs:[]},Object(c.useReducer)(z,t)),r=Object(h.a)(a,2),s=r[0],o=r[1];return Object(m.jsx)(Z,Object(i.a)({value:[s,o]},n))},te=function(){return Object(c.useContext)(X)},ne=function(e){var t=e.item,n=te(),c=Object(h.a)(n,2),a=(c[0],c[1]);return Object(m.jsxs)("div",{className:"flex-row",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[t.name,", $",t.price]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"Qty:"}),Object(m.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(a({type:F,_id:t._id}),B("cart","delete",Object(i.a)({},t))):(a({type:M,_id:t._id,purchaseQuantity:parseInt(n)}),B("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),Object(m.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){a({type:F,_id:e._id}),B("cart","delete",Object(i.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},ce=n(30),ae=n(31),re=n(59),se=n.n(re),ie=new(function(){function e(){Object(ce.a)(this,e)}return Object(ae.a)(e,[{key:"getProfile",value:function(){return se()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return se()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),oe=(n(89),Object(E.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),le=function(){var e=te(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object($.a)(A),s=Object(h.a)(r,2),i=s[0],o=s[1].data;function l(){a({type:Y})}return Object(c.useEffect)((function(){o&&oe.then((function(e){e.redirectToCheckout({sessionId:o.checkout.session})}))}),[o]),Object(c.useEffect)((function(){function e(){return(e=Object(S.a)(Object(w.a)().mark((function e(){var t;return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("cart","get");case 2:t=e.sent,a({type:W,books:Object(C.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.cart.length||function(){e.apply(this,arguments)}()}),[n.cart.length,a]),n.cartOpen?Object(m.jsxs)("div",{className:"cart",children:[Object(m.jsx)("div",{className:"close",onClick:l,children:"[close]"}),Object(m.jsx)("h2",{children:"Shopping Cart"}),n.cart.length?Object(m.jsxs)("div",{children:[n.cart.map((function(e){return Object(m.jsx)(ne,{item:e},e._id)})),Object(m.jsxs)("div",{className:"flex-row space-between",children:[Object(m.jsxs)("strong",{children:["Total: $",function(){var e=0;return n.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),ie.loggedIn()?Object(m.jsx)("button",{onClick:function(){var e=[];n.cart.forEach((function(t){for(var n=0;n<t.purchaseQuantity;n++)e.push(t._id)})),i({variables:{books:e}})},children:"Checkout"}):Object(m.jsx)("span",{children:"(log in to check out)"})]})]}):Object(m.jsxs)("h3",{children:[Object(m.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object(m.jsx)("div",{className:"cart-closed",onClick:l,children:Object(m.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},je=n.p+"static/media/spinner.7e729fec.gif";var ue=function(){var e=te(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),s=Object(h.a)(r,2),l=s[0],j=s[1],u=Object(c.useState)(),d=Object(h.a)(u,2),b=d[0],O=d[1],x=Object(p.b)(R),f=x.loading,g=x.data,v=n.clubs,k=n.cart,y=n.books,_=g.clubs[0].book._id,w=g.clubs[0]._id;return Object(c.useEffect)((function(){console.log(y),console.log(_),j(v.find((function(e){return e._id===w}))),O(y.find((function(e){return e._id===_}))),v.length||(g?(a({type:V,clubs:g.clubs}),g.clubs.forEach((function(e){B("clubs","put",e)}))):f||B("clubs","get").then((function(e){a({type:V,clubs:e})})))}),[]),console.log(l),Object(m.jsxs)(m.Fragment,{children:[l&&k?Object(m.jsxs)("div",{className:"container my-1",children:[Object(m.jsx)(o.b,{to:"/",children:"\u2190 Back to Books"}),Object(m.jsx)("h2",{children:l.name+" - "}),Object(m.jsx)("p",{children:l.description}),Object(m.jsxs)("p",{children:[Object(m.jsx)("button",{onClick:function(){var e=b._id,t=k.find((function(t){return t._id===e}));t?(a({type:M,_id:e,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),B("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(a({type:G,book:Object(i.a)(Object(i.a)({},b),{},{purchaseQuantity:1})}),B("cart","put",Object(i.a)(Object(i.a)({},b),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(m.jsx)("button",{disabled:!k.find((function(e){return e._id===b._id})),onClick:function(){a({type:F,_id:b._id}),B("cart","delete",Object(i.a)({},b))},children:"Remove from Cart"})]}),Object(m.jsx)("img",{src:"/images/".concat(l.image),alt:l.name}),Object(m.jsx)("div",{children:l.posts.map((function(e){return Object(m.jsx)(N,{_id:e._id,text:e.text,user:e.user},e._id)}))})]}):null,f?Object(m.jsx)("img",{src:je,alt:"loading"}):null,Object(m.jsx)(le,{})]})},de=n(72);var be=function(e){var t=te(),n=Object(h.a)(t,2),c=n[0],a=(n[1],e.image),r=e.name,s=e._id,i=e.description,l=e.locked,j=e.book;if(Object(de.a)(c),!l)return Object(m.jsxs)("div",{className:"card px-1 py-1",children:[Object(m.jsxs)(o.b,{to:"/clubs/".concat(s),children:[Object(m.jsx)("img",{alt:r,src:"/images/".concat(a)}),Object(m.jsx)("p",{children:r})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[i," "]}),Object(m.jsx)("span",{children:j.name})]})]})};var Oe=function(){var e=te(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=(n.clubs,Object(p.b)(R)),s=r.loading,i=r.data;return Object(c.useEffect)((function(){i?(a({type:V,clubs:i.clubs}),i.clubs.forEach((function(e){B("clubs","put",e)}))):s||B("clubs","get").then((function(e){a({type:V,clubs:e})}))}),[s]),console.log(i),Object(m.jsxs)("div",{className:"my-2",children:[Object(m.jsx)("h2",{children:"Clubs:"}),n.clubs.length?Object(m.jsx)("div",{className:"flex-row",children:n.clubs.map((function(e){return Object(m.jsx)(be,{_id:e._id,image:e.image,name:e.name,description:e.description,book:e.book,locked:e.locked,posts:e.posts},e._id)}))}):Object(m.jsx)("h3",{children:"You haven't added any clubs yet!"}),s?Object(m.jsx)("img",{src:je,alt:"loading"}):null]})},he=function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(Oe,{}),Object(m.jsx)(le,{})]})};var pe=function(e){var t=te(),n=Object(h.a)(t,2),c=n[0],a=n[1],r=e.image,s=e.name,l=e._id,j=e.price,u=e.quantity,d=c.cart;return Object(m.jsxs)("div",{className:"card px-1 py-2",children:[Object(m.jsxs)(o.b,{to:"/books/".concat(l),children:[Object(m.jsx)("img",{alt:s,src:"/images/".concat(r)}),Object(m.jsx)("p",{className:"itemName",children:s})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"itemStock",children:[u," ",U("item",u)," in stock"]}),Object(m.jsxs)("span",{className:"itemPrice",children:["$",j]})]}),Object(m.jsx)("button",{className:"addCartBtn",onClick:function(){var t=d.find((function(e){return e._id===l}));console.log(t),console.log(d),t?(a({type:M,_id:l,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),B("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(a({type:G,book:Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})}),B("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})};var me=function(){var e=te(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=n.currentGenre,s=Object(p.b)(P),i=s.loading,o=s.data;return Object(c.useEffect)((function(){o?(console.log(o),a({type:q,books:o.books}),o.books.forEach((function(e){B("books","put",e)}))):i||B("books","get").then((function(e){a({type:q,books:e})}))}),[i]),Object(m.jsxs)("div",{className:"my-2",children:[Object(m.jsx)("h2",{className:"bookListHeader",children:"Our Books:"}),n.books.length?Object(m.jsx)("div",{className:"flex-row",children:(r?n.books.filter((function(e){return e.genre._id===r})):n.books).map((function(e){return Object(m.jsx)(pe,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(m.jsx)("h3",{children:"You haven't added any books yet!"}),i?Object(m.jsx)("img",{src:je,alt:"loading"}):null]})};var xe=function(){var e=te(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=(n.genres,n.currentGenre,Object(p.b)(I)),s=r.loading,i=r.data;return Object(c.useEffect)((function(){i?(a({type:H,genres:i.genres}),i.genres.forEach((function(e){B("genres","put",e)}))):s||B("genres","get").then((function(e){a({type:H,genres:e})}))}),[s]),Object(m.jsxs)("div",{className:"bkGenre",children:[Object(m.jsx)("h2",{className:"py-2",children:"Choose a Genre:"}),n.genres.map((function(e){return Object(m.jsx)("button",{className:"genreButton",onClick:function(){var t;t=e._id,a({type:J,currentGenre:t})},children:e.name},e.name)}))]})},fe=function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(xe,{}),Object(m.jsx)(me,{}),Object(m.jsx)(le,{})]})};var ge=function(){var e=te(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(l.o)().id,s=Object(c.useState)(),j=Object(h.a)(s,2),u=j[0],d=j[1],b=Object(p.b)(P),O=b.loading,x=b.data,f=n.books,g=n.cart;return Object(c.useEffect)((function(){console.log(u),f.length?d(f.find((function(e){return e._id===r}))):x?(a({type:q,books:x.books}),x.books.forEach((function(e){B("books","put",e)}))):O||B("books","get").then((function(e){a({type:q,books:e})}))}),[]),Object(m.jsxs)(m.Fragment,{children:[u&&g?Object(m.jsxs)("div",{className:"container my-1",children:[Object(m.jsx)(o.b,{to:"/",children:"\u2190 Back to Books"}),Object(m.jsx)("h2",{children:u.name+" - "}),Object(m.jsx)("p",{children:u.description}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Price:"}),"$",u.price," ",Object(m.jsx)("button",{onClick:function(){var e=g.find((function(e){return e._id===r}));e?(a({type:M,_id:r,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),B("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(a({type:G,book:Object(i.a)(Object(i.a)({},u),{},{purchaseQuantity:1})}),B("cart","put",Object(i.a)(Object(i.a)({},u),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(m.jsx)("button",{disabled:!g.find((function(e){return e._id===u._id})),onClick:function(){a({type:F,_id:u._id}),B("cart","delete",Object(i.a)({},u))},children:"Remove from Cart"})]}),Object(m.jsx)("img",{src:"/images/".concat(u.image),alt:u.name})]}):null,O?Object(m.jsx)("img",{src:je,alt:"loading"}):null,Object(m.jsx)(le,{})]})};var ve,ke,ye,_e,Ne,we,Ce=function(e){var t=e.children;return Object(m.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},Se=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(Ce,{children:[Object(m.jsx)("h1",{children:"404 Page Not Found"}),Object(m.jsx)("h1",{children:Object(m.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},Ee=n(14),$e=n(98),Te=Object(Q.a)(ve||(ve=Object(T.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),Qe=Object(Q.a)(ke||(ke=Object(T.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),Pe=Object(Q.a)(ye||(ye=Object(T.a)(["\nmutation addUser(\n  $userName: String!\n  $email: String!\n  $password: String!\n  ) {\n  addUser(\n    userName: $userName\n    email: $email\n    password: $password\n    ) {\n    token\n    user {\n      _id\n    }\n  }\n}\n"])));Object(Q.a)(_e||(_e=Object(T.a)(["\nmutation addClub(\n  $name: String!\n  $description: String!\n  $image: String!\n  $admin: User\n  $book: Book!\n  ) {\n  addClub(\n    name: $name\n    description: $description\n    image: $image\n    admins: $admins\n    book: $book\n    ) {\n    book\n    club {\n      _id\n    }\n  }\n}\n"]))),Object(Q.a)(Ne||(Ne=Object(T.a)(["\n  mutation addMember(\n    $userName: String!\n  ) {\n    addMember(\n      userName: $firstName\n    )\n  }\n"]))),Object(Q.a)(we||(we=Object(T.a)(["\nmutation addPost($text: String!, $user: String!) {\n  addPost(text: $text, user: $user) {\n    text,\n    user\n  }\n}"])));var Ae=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(h.a)(t,2),a=n[0],r=n[1],s=Object($e.a)(Te),o=Object(h.a)(s,2),l=o[0],j=o[1].error,u=function(){var e=Object(S.a)(Object(w.a)().mark((function e(t){var n,c;return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,l({variables:{email:a.email,password:a.password}});case 4:n=e.sent,c=n.data.login.token,ie.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,n=t.name,c=t.value;r(Object(i.a)(Object(i.a)({},a),{},Object(Ee.a)({},n,c)))};return Object(m.jsx)("section",{className:"main",children:Object(m.jsxs)("div",{className:"login-container",children:[Object(m.jsx)("p",{className:"title",children:"Welcome back!"}),Object(m.jsx)("div",{className:"division"}),Object(m.jsx)("p",{className:"welcome-note",children:"Login using your existing login credentials"}),Object(m.jsxs)("form",{className:"login-form",onSubmit:u,children:[Object(m.jsx)("div",{className:"form-control",children:Object(m.jsx)("input",{className:"py-2",placeholder:"Email",name:"email",type:"email",id:"email",onChange:d})}),Object(m.jsx)("div",{className:"form-control",children:Object(m.jsx)("input",{className:"py-2",placeholder:"Password",name:"password",type:"password",id:"pwd",onChange:d})}),j?Object(m.jsx)("div",{children:Object(m.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(m.jsx)("div",{className:"",children:Object(m.jsx)("button",{type:"submit",className:"submit",children:"Login"})})]})]})})};var Ie=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(h.a)(t,2),a=n[0],r=n[1],s=Object($e.a)(Pe),o=Object(h.a)(s,1)[0],l=function(){var e=Object(S.a)(Object(w.a)().mark((function e(t){var n,c;return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,o({variables:{email:a.email,password:a.password,userName:a.userName}});case 3:n=e.sent,c=n.data.addUser.token,ie.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,n=t.name,c=t.value;r(Object(i.a)(Object(i.a)({},a),{},Object(Ee.a)({},n,c)))};return Object(m.jsx)("section",{className:"main",children:Object(m.jsxs)("div",{className:"login-container",children:[Object(m.jsx)("p",{className:"title",children:"Sign up!"}),Object(m.jsx)("div",{className:"signUpDivision"}),Object(m.jsx)("p",{class:"welcome-note",children:"Please enter a username, as well as a valid email address and password"}),Object(m.jsxs)("form",{className:"login-form",onSubmit:l,children:[Object(m.jsx)("div",{className:"form-control",children:Object(m.jsx)("input",{className:"signup py-2",placeholder:"Username",name:"userName",type:"userName",id:"userName",onChange:j})}),Object(m.jsx)("div",{className:"form-control",children:Object(m.jsx)("input",{className:"signup py-2",placeholder:"Email",name:"email",type:"email",id:"email",onChange:j})}),Object(m.jsx)("div",{className:"form-control",children:Object(m.jsx)("input",{className:"signup py-2",placeholder:"Password",name:"password",type:"password",id:"pwd",onChange:j})}),Object(m.jsx)("div",{className:"",children:Object(m.jsx)("button",{className:"submit",type:"submit",children:"Sign Up"})})]})]})})};var De=function(){return Object(m.jsxs)("header",{className:"flex-row px-1 mx-1 nav-con",children:[Object(m.jsx)("h1",{children:Object(m.jsxs)(o.b,{to:"/",children:[Object(m.jsx)("span",{role:"img","aria-label":"shopping bag",children:"\ud83d\udcd6"}),"OpenBook"]})}),Object(m.jsx)("nav",{children:ie.loggedIn()?Object(m.jsx)("ul",{className:"flex-row nav-con",children:Object(m.jsx)("li",{className:"mx-1",children:Object(m.jsx)("a",{href:"/",onClick:function(){return ie.logout()},children:"Logout"})})}):Object(m.jsxs)("ul",{className:"flex-row",children:[Object(m.jsx)("li",{className:"mx-1 nav-item",children:Object(m.jsx)(o.b,{to:"/signup",children:"Signup"})}),Object(m.jsx)("li",{className:"mx-1 nav-item",children:Object(m.jsx)(o.b,{to:"/login",children:"Login"})}),Object(m.jsx)("li",{className:"mx-1 nav-item",children:Object(m.jsx)(o.b,{to:"/clubs",children:"View Clubs"})})]})})]})};var Re=function(){var e=Object($e.a)(Qe),t=Object(h.a)(e,1)[0];return Object(c.useEffect)((function(){function e(){return(e=Object(S.a)(Object(w.a)().mark((function e(){var n,c,a,r;return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("cart","get");case 2:if(n=e.sent,!(c=n.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:c}});case 7:a=e.sent,r=a.data,r.addOrder.products.forEach((function(e){B("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(m.jsx)("div",{children:Object(m.jsxs)(Ce,{children:[Object(m.jsx)("h1",{children:"Success!"}),Object(m.jsx)("h2",{children:"Thank you for your purchase!"}),Object(m.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var Ue=function(){var e,t=Object(p.b)(D).data;return t&&(e=t.user),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"container my-1",children:[Object(m.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(m.jsxs)("div",{className:"my-2",children:[Object(m.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(m.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var n=e._id,c=e.image,a=e.name,r=e.price;return Object(m.jsxs)("div",{className:"card px-1 py-1",children:[Object(m.jsxs)(o.b,{to:"/products/".concat(n),children:[Object(m.jsx)("img",{alt:a,src:"/images/".concat(c)}),Object(m.jsx)("p",{children:a})]}),Object(m.jsx)("div",{children:Object(m.jsxs)("span",{children:["$",r]})})]},t)}))})]},e._id)}))]}):null]})})},Be=Object(j.a)({uri:"/graphql"}),Le=Object(O.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),qe=new u.a({link:Le.concat(Be),cache:new d.a});var Ge=function(){return Object(m.jsx)(b.a,{client:qe,children:Object(m.jsx)(o.a,{children:Object(m.jsx)("div",{children:Object(m.jsxs)(ee,{children:[Object(m.jsx)(De,{}),Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/",element:Object(m.jsx)(fe,{})}),Object(m.jsx)(l.a,{path:"/login",element:Object(m.jsx)(Ae,{})}),Object(m.jsx)(l.a,{path:"/signup",element:Object(m.jsx)(Ie,{})}),Object(m.jsx)(l.a,{path:"/success",element:Object(m.jsx)(Re,{})}),Object(m.jsx)(l.a,{path:"/orderHistory",element:Object(m.jsx)(Ue,{})}),Object(m.jsx)(l.a,{path:"/books/:id",element:Object(m.jsx)(ge,{})}),Object(m.jsx)(l.a,{path:"/clubs/:id",element:Object(m.jsx)(ue,{})}),Object(m.jsx)(l.a,{path:"/clubs",element:Object(m.jsx)(he,{})}),Object(m.jsx)(l.a,{path:"*",element:Object(m.jsx)(Se,{})})]})]})})})})},We=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Fe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(Ge,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");We?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Fe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Fe(t,e)}))}}()}},[[91,1,2]]]);
//# sourceMappingURL=main.faea305a.chunk.js.map