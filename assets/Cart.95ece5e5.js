import{_ as u,u as p,i as h,o,c as l,b,d as n,a as t,F as r,r as v,t as a,w as g,p as y,k}from"./index.bdc25c8b.js";const c=d=>(y("data-v-c7c65eb5"),d=d(),k(),d),x={key:0,class:"container"},f=c(()=>t("div",{class:"row px-lg-0 px-xl-5 position-relative"},[t("section",{class:"col-12 py-5 px-md-5 text-center rounded-3 shadow"},[t("div",{class:"row justify-content-center py-4"},[t("div",null,[t("h3",{class:"mb-3"},"\u8CFC\u7269\u8ECA\u5167\u76EE\u524D\u7121\u4EFB\u4F55\u5546\u54C1")])])])],-1)),C=[f],w={key:1,class:"container"},m={class:"col-12 py-5 px-md-5 text-center rounded-3 shadow"},I={class:"table align-middle"},L=c(()=>t("thead",null,[t("tr",{class:"h4 fw-bold"},[t("td"),t("td",null,"\u5546\u54C1title"),t("td",null,"\u6578\u91CF"),t("td",null,"\u91D1\u984D")])],-1)),S=["onClick"],$=c(()=>t("i",{class:"bi bi-x text-danger",style:{"font-size":"30px"}},null,-1)),N=[$],B={key:1,class:"spinner-border text-danger",role:"status"},q=c(()=>t("span",{class:"visually-hidden"},"Loading...",-1)),z=[q],F=["src"],T={class:"input-group mb-3"},V=["onClick","disabled"],j={class:"form-control w-25 h-25 d-inline-block"},D=["onClick","disabled"],E={class:"h3 text-end text-danger fw-bold"},M={__name:"Cart",setup(d){const e=p();return e.getCart(),(U,A)=>{const _=h("useLoading");return o(),l(r,null,[b(_,{active:n(e).isLoading},null,8,["active"]),n(e).cartLength===0?(o(),l("div",x,C)):(o(),l("div",w,[t("section",m,[t("table",I,[L,t("tbody",null,[(o(!0),l(r,null,v(n(e).cartList,s=>(o(),l("tr",{key:s.id},[t("td",null,[t("div",null,[s.id!=n(e).status.loadingItem?(o(),l("a",{key:0,href:"#",onClick:g(i=>n(e).removeCart(s.id),["prevent"])},N,8,S)):(o(),l("div",B,z))])]),t("td",null,[t("div",null,[t("img",{class:"img-size",src:s.product.imageUrl,alt:""},null,8,F)]),t("p",null,a(s.product.title),1)]),t("td",null,[t("div",T,[t("button",{type:"button",class:"btn btn-secondary w-25 h-25 d-inline-block",onClick:i=>n(e).reduction(s),disabled:s.id===n(e).status.loadingItem||s.qty===1},"-",8,V),t("span",j,a(s.qty),1),t("button",{type:"button",class:"btn btn-secondary w-25 h-25 d-inline-block",onClick:i=>n(e).addition(s),disabled:s.id===n(e).status.loadingItem},"+",8,D)])]),t("td",null,[t("div",null," NT$ "+a(s.final_total),1)])]))),128))])]),t("div",null,[t("div",null,[t("p",E,"NT$ \u7E3D\u91D1\u984D: "+a(n(e).total),1)])])])]))],64)}}},H=u(M,[["__scopeId","data-v-c7c65eb5"]]);export{H as default};