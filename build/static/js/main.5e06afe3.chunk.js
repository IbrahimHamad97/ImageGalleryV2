(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(13),l=a.n(c),i=(a(20),a(2)),s=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Image gallery"),r.a.createElement("h2",null,"Your Pictures"),r.a.createElement("p",null,"Add or view any images on the website"))},o=a(8),u=a.n(o),m=a(14),d=a(5);a(28),a(22);d.initializeApp({apiKey:"AIzaSyBF_NWMfsYcUf1_SKdHt0Ivlo3U2ixodE4",authDomain:"imagegalleryv2.firebaseapp.com",databaseURL:"https://imagegalleryv2.firebaseio.com",projectId:"imagegalleryv2",storageBucket:"imagegalleryv2.appspot.com",messagingSenderId:"11687586535",appId:"1:11687586535:web:b08f4511b1f0f410055042"});var f=d.storage(),p=d.firestore(),g=d.firestore.FieldValue.serverTimestamp,v=a(3),b=function(e){var t=e.file,a=e.setFile,c=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),o=s[0],d=s[1],v=Object(n.useState)(null),b=Object(i.a)(v,2),E=b[0],y=b[1];return Object(n.useEffect)((function(){var t=f.ref(e.name),a=p.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){d(e)}),Object(m.a)(u.a.mark((function e(){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=g(),y(n),a.add({url:n,createdAt:r});case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,error:o,url:E}}(t),l=c.url,s=c.progress;return console.log(s,l),Object(n.useEffect)((function(){l&&a(null)}),[l,a]),r.a.createElement(v.a.div,{className:"progress-bar",initial:{width:0},animate:{width:s+"%"}})},E=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),o=s[0],u=s[1],m=["image/png","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(c(t),u("")):(c(null),u("Please select an image file (png or jpeg)"))}}),r.a.createElement("span",null,"+")),r.a.createElement("div",{className:"output"},o&&r.a.createElement("div",{className:"error"},o),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(b,{file:a,setFile:c})))},y=a(9),j=function(e){var t=e.setSelectedImage,a=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=p.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(y.a)(Object(y.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}}("images").docs;return console.log(a),r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(v.a.div,{className:"img-wrap",key:e.id,layout:!0,whileHover:{opacity:1},onClick:function(){return t(e.url)}},r.a.createElement(v.a.img,{src:e.url,alt:"uploaded pic.",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))})))},O=function(e){var t=e.selectedImage,a=e.setSelectedImage;return r.a.createElement(v.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(v.a.img,{src:t,alt:"enlarged pic.",initial:{y:"-100vh"},animate:{y:0}}))};var h=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(E,null),r.a.createElement(j,{setSelectedImage:c}),a&&r.a.createElement(O,{selectedImage:a,setSelectedImage:c}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5e06afe3.chunk.js.map