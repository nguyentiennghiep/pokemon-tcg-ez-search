(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6261:function(e,a,t){Promise.resolve().then(t.bind(t,6567))},2635:function(e,a,t){"use strict";var s=t(7437),r=t(2265),n=t(3145),i=t(1268),l=t(5217),c=t(3315),o=t(7736),d=t.n(o);a.Z=e=>{let{imageSrc:a,largeImageSrc:t,altText:o,cardName:u,series:g,averageSellPrice:h,setName:_,marketUrl:m}=e,[p,x]=(0,r.useState)(!1),[j,v]=(0,r.useState)(!0),C=()=>{x(!1)};return(0,s.jsxs)("div",{className:d().card,children:[(0,s.jsx)("div",{className:d().imageWrapper,onClick:()=>{x(!0),v(!0)},children:(0,s.jsx)(n.default,{src:a,alt:o,width:220,height:308})}),(0,s.jsx)("p",{className:d().cardName,children:u}),g&&(0,s.jsxs)("p",{className:d().series,children:["Series: ",g]})," ",_&&(0,s.jsxs)("p",{className:d().setName,children:["Set: ",_]})," ",(0,s.jsx)("p",{className:d().price,children:(0,s.jsxs)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:["Average Sell Price: $",null==h?void 0:h.toFixed(2)]})}),p&&(0,s.jsx)("div",{className:d().overlay,onClick:C,children:(0,s.jsxs)("div",{className:d().overlayContent,onClick:e=>e.stopPropagation(),children:[j&&(0,s.jsx)("div",{className:d().spinner,children:(0,s.jsx)(c.Z,{size:50,color:"#123ABC",loading:j})}),(0,s.jsx)(n.default,{className:d().overlayImg,src:t,alt:o,width:490,height:684,onLoad:()=>{v(!1)}}),(0,s.jsx)("button",{className:d().closeButton,onClick:C,children:(0,s.jsx)(i.G,{icon:l.NBC})})]})})]})}},6567:function(e,a,t){"use strict";t.d(a,{default:function(){return b}});var s=t(7437),r=t(2265),n=t(4205),i=t.n(n),l=e=>{let{searchQuery:a,setSearchQuery:t,handleSearchClick:r}=e;return(0,s.jsxs)("section",{className:i().introduction,children:[(0,s.jsx)("h1",{children:"Welcome to Pok\xe9mon TCG"}),(0,s.jsx)("p",{children:"Discover the world of Pok\xe9mon Trading Card Game. Collect, trade, and battle with your favorite Pok\xe9mon cards."}),(0,s.jsxs)("div",{className:i().searchContainer,children:[(0,s.jsx)("input",{type:"text",placeholder:"Search by card name",value:a,onChange:e=>t(e.target.value),className:i().searchBar}),(0,s.jsx)("button",{onClick:r,className:i().searchButton,children:"Search"})]})]})},c=t(3315),o=t(1268),d=t(5217),u=t(2635),g=t(9083),h=t.n(g);let _=(e,a,t,s,n,i,l)=>{let c=(0,r.useCallback)(e=>{i(e.target.value)},[i]);return{handleFeaturedPageInputChange:c,handleFeaturedPageInputBlur:(0,r.useCallback)(()=>{let r=Number(s);r>0&&r<=t?(n(r),l(e.id,r)):i(a.toString())},[s,t,n,l,e,i,a]),handlePrevFeaturedPage:(0,r.useCallback)(()=>{a>1&&(n(a-1),i((a-1).toString()),l(e.id,a-1))},[a,n,i,l,e]),handleNextFeaturedPage:(0,r.useCallback)(()=>{a<t&&(n(a+1),i((a+1).toString()),l(e.id,a+1))},[a,t,n,i,l,e])}};var m=e=>{let{selectedSet:a,featuredCards:t,loadingCards:r,currentFeaturedPage:n,totalFeaturedPages:i,inputFeaturedPage:l,setCurrentFeaturedPage:g,setInputFeaturedPage:m,fetchFeaturedCards:p}=e,{handleFeaturedPageInputChange:x,handleFeaturedPageInputBlur:j,handlePrevFeaturedPage:v,handleNextFeaturedPage:C}=_(a,n,i,l,g,m,p);return(0,s.jsxs)("section",{className:h().featuredCards,children:[(0,s.jsxs)("h2",{children:["Featured Cards"," ",a&&"- ".concat(a.series," / ").concat(a.name)]}),r?(0,s.jsx)("div",{className:h().loadingSpinner,children:(0,s.jsx)(c.Z,{size:50,color:"#123ABC",loading:r})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:h().cardGrid,children:t.map(e=>{var a,t,r;return(0,s.jsx)(u.Z,{imageSrc:e.images.small,largeImageSrc:e.images.large,altText:e.name,cardName:e.name,averageSellPrice:null===(t=e.cardmarket)||void 0===t?void 0:null===(a=t.prices)||void 0===a?void 0:a.averageSellPrice,marketUrl:null===(r=e.cardmarket)||void 0===r?void 0:r.url},e.id)})}),(0,s.jsxs)("div",{className:h().pagination,children:[(0,s.jsx)("button",{onClick:v,disabled:1===n,className:h().paginationButton,children:(0,s.jsx)(o.G,{icon:d.A35})}),(0,s.jsx)("input",{type:"number",value:l,onChange:x,onBlur:j,min:"1",max:i,className:h().paginationInput}),(0,s.jsxs)("span",{children:["/ ",i]}),(0,s.jsx)("button",{onClick:C,disabled:n===i,className:h().paginationButton,children:(0,s.jsx)(o.G,{icon:d._tD})})]})]})]})},p=t(3075),x=t.n(p),j=e=>{let{highestPricedCards:a}=e;return(0,s.jsxs)("section",{className:x().highestPricedCards,children:[(0,s.jsx)("h2",{children:"10 Highest Priced Cards"}),(0,s.jsx)("div",{className:x().cardGrid,children:a.map(e=>(0,s.jsx)(u.Z,{imageSrc:e.images.small,largeImageSrc:e.images.large,altText:e.name,cardName:e.name,series:e.set.series,setName:e.set.name,averageSellPrice:e.cardmarket.prices.averageSellPrice,marketUrl:e.cardmarket.url},e.id))})]})},v=t(9376),C=t(1121);let y=()=>{let[e,a]=(0,r.useState)([]),[t,s]=(0,r.useState)([]),[n,i]=(0,r.useState)([]),[l,c]=(0,r.useState)(!0),[o,d]=(0,r.useState)(!1),[u,g]=(0,r.useState)(1),[h,_]=(0,r.useState)("1"),[m,p]=(0,r.useState)(1),[x,j]=(0,r.useState)("1"),[y,S]=(0,r.useState)(null),[N,k]=(0,r.useState)(""),f=(0,v.useRouter)();(0,r.useEffect)(()=>{(async()=>{try{let e=(await (0,C.K)("sets")).data.sort((e,a)=>{let t=new Date(e.releaseDate).getTime();return new Date(a.releaseDate).getTime()-t}),t=e[0];a(e),P(t.id,1),S(t);let s=await (0,C.K)("cards",{orderBy:"-cardmarket.prices.averageSellPrice",pageSize:"10"});i(s.data)}catch(e){console.error("Error fetching sets or cards:",e)}finally{c(!1)}})()},[]);let P=async(e,a)=>{d(!0);try{let t=await (0,C.K)("cards",{q:"set.id:".concat(e),orderBy:"-cardmarket.prices.averageSellPrice",pageSize:"14",page:a.toString()});s(t.data)}catch(e){console.error("Error fetching cards:",e)}finally{d(!1)}},b=5*u,B=e.slice(b-5,b),I=Math.ceil(e.length/5),G=Math.ceil(((null==y?void 0:y.total)||0)/14);return{featuredCards:t,highestPricedCards:n,loadingSets:l,loadingCards:o,currentPage:u,inputPage:h,currentFeaturedPage:m,inputFeaturedPage:x,selectedSet:y,currentSets:B,searchQuery:N,setsPerPage:5,featuredCardsPerPage:14,totalPages:I,totalFeaturedPages:G,setCurrentPage:g,setInputPage:_,setCurrentFeaturedPage:p,setInputFeaturedPage:j,setSelectedSet:S,setSearchQuery:k,fetchFeaturedCards:P,router:f}};var S=t(1958),N=t(853),k=t.n(N);let f=(e,a,t,s,n)=>{let i=(0,r.useCallback)(e=>{n(e.target.value)},[n]);return{handlePageInputChange:i,handlePageInputBlur:(0,r.useCallback)(()=>{let r=Number(t);r>0&&r<=a?s(r):n(e.toString())},[t,a,s,n,e]),handlePrevPage:(0,r.useCallback)(()=>{e>1&&(s(e-1),n((e-1).toString()))},[e,s,n]),handleNextPage:(0,r.useCallback)(()=>{e<a&&(s(e+1),n((e+1).toString()))},[e,a,s,n])}};var P=e=>{let{currentSets:a,loadingSets:t,currentPage:r,totalPages:n,inputPage:i,setCurrentPage:l,setInputPage:u,handleSetClick:g}=e,{handlePageInputChange:h,handlePageInputBlur:_,handlePrevPage:m,handleNextPage:p}=f(r,n,i,l,u);return(0,s.jsxs)("section",{className:k().latestSets,children:[(0,s.jsx)("h2",{children:"Latest Sets"}),t?(0,s.jsx)("div",{className:k().loadingSpinner,children:(0,s.jsx)(c.Z,{size:50,color:"#123ABC",loading:t})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:k().setsGrid,children:a.map(e=>(0,s.jsx)(S.Z,{id:e.id,name:e.name,series:e.series,releaseDate:e.releaseDate,logo:e.images.logo,onClick:()=>g(e)},e.id))}),(0,s.jsxs)("div",{className:k().pagination,children:[(0,s.jsx)("button",{onClick:m,disabled:1===r,className:k().paginationButton,children:(0,s.jsx)(o.G,{icon:d.A35})}),(0,s.jsx)("input",{type:"number",value:i,onChange:h,onBlur:_,min:"1",max:n,className:k().paginationInput}),(0,s.jsxs)("span",{children:["/ ",n]}),(0,s.jsx)("button",{onClick:p,disabled:r===n,className:k().paginationButton,children:(0,s.jsx)(o.G,{icon:d._tD})})]})]})]})},b=()=>{let{featuredCards:e,highestPricedCards:a,loadingSets:t,loadingCards:r,currentPage:n,inputPage:i,currentFeaturedPage:c,inputFeaturedPage:o,currentSets:d,selectedSet:u,searchQuery:g,totalPages:h,totalFeaturedPages:_,setCurrentPage:p,setInputPage:x,setCurrentFeaturedPage:v,setInputFeaturedPage:C,setSelectedSet:S,setSearchQuery:N,fetchFeaturedCards:k,router:f}=y();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{searchQuery:g,setSearchQuery:N,handleSearchClick:()=>{g.trim()&&f.push("/search?query=".concat(encodeURIComponent(g)))}}),(0,s.jsx)(P,{currentSets:d,loadingSets:t,currentPage:n,totalPages:h,inputPage:i,setCurrentPage:p,setInputPage:x,handleSetClick:e=>{S(e),k(e.id,1),v(1),C("1")}}),(0,s.jsx)(m,{selectedSet:u,featuredCards:e,loadingCards:r,currentFeaturedPage:c,totalFeaturedPages:_,inputFeaturedPage:o,setCurrentFeaturedPage:v,setInputFeaturedPage:C,fetchFeaturedCards:k}),(0,s.jsx)(j,{highestPricedCards:a})]})}},1958:function(e,a,t){"use strict";var s=t(7437),r=t(3145),n=t(1268),i=t(5217),l=t(8093),c=t.n(l);a.Z=e=>{let{id:a,name:t,series:l,releaseDate:o,logo:d,onClick:u,showLink:g=!0}=e;return(0,s.jsxs)("div",{className:c().setContainer,children:[(0,s.jsxs)("div",{className:c().set,onClick:()=>u(a),children:[(0,s.jsx)(r.default,{src:d,alt:"".concat(t," logo"),width:256,height:92}),(0,s.jsx)("h3",{children:t}),(0,s.jsxs)("p",{children:["Series: ",l]}),(0,s.jsxs)("p",{children:["Release Date: ",o]})]}),g&&(0,s.jsxs)("a",{href:"/pokemon-tcg-ez-search/set/".concat(a),className:c().link,children:["View Set Details",(0,s.jsx)(n.G,{icon:i.eFW,className:c().linkIcon})]})]})}},1121:function(e,a,t){"use strict";t.d(a,{K:function(){return r}});let s=t(257).env.NEXT_PUBLIC_POKEMON_API_KEY,r=async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=new URL("".concat("https://api.pokemontcg.io/v2","/").concat(e));Object.keys(a).forEach(e=>t.searchParams.append(e,a[e]));let r=await fetch(t.toString(),{headers:{"X-Api-Key":s||""}});if(!r.ok)throw Error("Error fetching data from ".concat(t,": ").concat(r.statusText));return r.json()}},7736:function(e){e.exports={card:"styles_card__P8OIq",imageWrapper:"styles_imageWrapper__nWgO9",cardName:"styles_cardName__AOK6D",series:"styles_series__SI2jg",price:"styles_price___kYfN",overlay:"styles_overlay__0JUcV",overlayContent:"styles_overlayContent__OnbCG",overlayImg:"styles_overlayImg__Wkcs3",closeButton:"styles_closeButton__4_Szk",setName:"styles_setName__Hv_E0"}},9083:function(e){e.exports={featuredCards:"styles_featuredCards__36V58",cardGrid:"styles_cardGrid__Fy1FV",loadingSpinner:"styles_loadingSpinner__m_cuc",pagination:"styles_pagination__CU_nO",paginationButton:"styles_paginationButton__xc88T",paginationInput:"styles_paginationInput__Hsbor"}},3075:function(e){e.exports={highestPricedCards:"styles_highestPricedCards__W9eLg",cardGrid:"styles_cardGrid__HNvdF"}},4205:function(e){e.exports={introduction:"styles_introduction__XCgY_",searchContainer:"styles_searchContainer__KTOhE",searchBar:"styles_searchBar__F2ou_",searchButton:"styles_searchButton__aajAE"}},853:function(e){e.exports={latestSets:"styles_latestSets__YiYt0",setsGrid:"styles_setsGrid__ZZnAj",loadingSpinner:"styles_loadingSpinner__c3PNK",pagination:"styles_pagination__0qp9q",paginationButton:"styles_paginationButton__BWIjC",paginationInput:"styles_paginationInput__KZ6kq"}},8093:function(e){e.exports={setContainer:"styles_setContainer__O5p_5",set:"styles_set__qy_aV",link:"styles_link__kvGaL",linkIcon:"styles_linkIcon__px7Gx"}}},function(e){e.O(0,[937,676,878,274,971,117,744],function(){return e(e.s=6261)}),_N_E=e.O()}]);