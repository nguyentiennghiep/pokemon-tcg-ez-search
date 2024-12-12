(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{615:function(e,a,t){Promise.resolve().then(t.bind(t,5449))},9504:function(e,a,t){"use strict";var s=t(7437),r=t(2265),n=t(3145),i=t(1268),l=t(5217),c=t(3315),o=t(7727),d=t.n(o);a.Z=e=>{let{imageSrc:a,largeImageSrc:t,altText:o,cardName:u,series:h,averageSellPrice:_,setName:g,marketUrl:m}=e,[p,x]=(0,r.useState)(!1),[j,y]=(0,r.useState)(!0),v=()=>{x(!1)};return(0,s.jsxs)("div",{className:d().card,children:[(0,s.jsx)("div",{className:d().imageWrapper,onClick:()=>{x(!0),y(!0)},children:(0,s.jsx)(n.default,{src:a,alt:o,width:220,height:308})}),(0,s.jsx)("p",{className:d().cardName,children:u}),h&&(0,s.jsxs)("p",{className:d().series,children:["Series: ",h]})," ",g&&(0,s.jsxs)("p",{className:d().setName,children:["Set: ",g]})," ",(0,s.jsx)("p",{className:d().price,children:(0,s.jsxs)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:["Average Sell Price: $",null==_?void 0:_.toFixed(2)]})}),p&&(0,s.jsx)("div",{className:d().overlay,onClick:v,children:(0,s.jsxs)("div",{className:d().overlayContent,onClick:e=>e.stopPropagation(),children:[j&&(0,s.jsx)("div",{className:d().spinner,children:(0,s.jsx)(c.Z,{size:50,color:"#123ABC",loading:j})}),(0,s.jsx)(n.default,{className:d().overlayImg,src:t,alt:o,width:490,height:684,onLoad:()=>{y(!1)}}),(0,s.jsx)("button",{className:d().closeButton,onClick:v,children:(0,s.jsx)(i.G,{icon:l.NBC})})]})})]})}},5449:function(e,a,t){"use strict";t.d(a,{default:function(){return k}});var s=t(7437),r=t(2265),n=t(4741),i=t.n(n),l=e=>{let{searchQuery:a,setSearchQuery:t,handleSearchClick:r}=e;return(0,s.jsxs)("section",{className:i().introduction,children:[(0,s.jsx)("h1",{children:"Welcome to Pok\xe9mon TCG"}),(0,s.jsx)("p",{children:"Discover the world of Pok\xe9mon Trading Card Game. Collect, trade, and battle with your favorite Pok\xe9mon cards."}),(0,s.jsxs)("div",{className:i().searchContainer,children:[(0,s.jsx)("input",{type:"text",placeholder:"Search by card name",value:a,onChange:e=>t(e.target.value),className:i().searchBar}),(0,s.jsx)("button",{onClick:r,className:i().searchButton,children:"Search"})]})]})},c=t(3315),o=t(1268),d=t(5217),u=t(9504),h=t(7366),_=t.n(h),g=e=>{let{selectedSet:a,featuredCards:t,loadingCards:r,currentFeaturedPage:n,totalFeaturedPages:i,inputFeaturedPage:l,setCurrentFeaturedPage:h,setInputFeaturedPage:g,fetchFeaturedCards:m}=e;return(0,s.jsxs)("section",{className:_().featuredCards,children:[(0,s.jsxs)("h2",{children:["Featured Cards"," ",a&&"- ".concat(a.series," / ").concat(a.name)]}),r?(0,s.jsx)("div",{className:_().loadingSpinner,children:(0,s.jsx)(c.Z,{size:50,color:"#123ABC",loading:r})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:_().cardGrid,children:t.map(e=>{var a,t;return(0,s.jsx)(u.Z,{imageSrc:e.images.small,largeImageSrc:e.images.large,altText:e.name,cardName:e.name,averageSellPrice:null===(t=e.cardmarket)||void 0===t?void 0:null===(a=t.prices)||void 0===a?void 0:a.averageSellPrice,marketUrl:e.cardmarket.url},e.id)})}),(0,s.jsxs)("div",{className:_().pagination,children:[(0,s.jsx)("button",{onClick:()=>{n>1&&(h(n-1),g((n-1).toString()),m(a.id,n-1))},disabled:1===n,className:_().paginationButton,children:(0,s.jsx)(o.G,{icon:d.A35})}),(0,s.jsx)("input",{type:"number",value:l,onChange:e=>{g(e.target.value)},onBlur:()=>{let e=Number(l);e>0&&e<=i?(h(e),m(a.id,e)):g(n.toString())},min:"1",max:i,className:_().paginationInput}),(0,s.jsxs)("span",{children:["/ ",i]}),(0,s.jsx)("button",{onClick:()=>{n<i&&(h(n+1),g((n+1).toString()),m(a.id,n+1))},disabled:n===i,className:_().paginationButton,children:(0,s.jsx)(o.G,{icon:d._tD})})]})]})]})},m=t(5835),p=t.n(m),x=e=>{let{highestPricedCards:a}=e;return(0,s.jsxs)("section",{className:p().highestPricedCards,children:[(0,s.jsx)("h2",{children:"10 Highest Priced Cards"}),(0,s.jsx)("div",{className:p().cardGrid,children:a.map(e=>(0,s.jsx)(u.Z,{imageSrc:e.images.small,largeImageSrc:e.images.large,altText:e.name,cardName:e.name,series:e.set.series,setName:e.set.name,averageSellPrice:e.cardmarket.prices.averageSellPrice,marketUrl:e.cardmarket.url},e.id))})]})},j=t(9376),y=t(1121);let v=()=>{let[e,a]=(0,r.useState)([]),[t,s]=(0,r.useState)([]),[n,i]=(0,r.useState)([]),[l,c]=(0,r.useState)(!0),[o,d]=(0,r.useState)(!1),[u,h]=(0,r.useState)(1),[_,g]=(0,r.useState)("1"),[m,p]=(0,r.useState)(1),[x,v]=(0,r.useState)("1"),[S,C]=(0,r.useState)(null),[N,f]=(0,r.useState)(""),k=(0,j.useRouter)();(0,r.useEffect)(()=>{(async()=>{try{let e=(await (0,y.K)("sets")).data.sort((e,a)=>{let t=new Date(e.releaseDate).getTime();return new Date(a.releaseDate).getTime()-t}),t=e[0];a(e),P(t.id,1),C(t);let s=await (0,y.K)("cards",{orderBy:"-cardmarket.prices.averageSellPrice",pageSize:"10"});i(s.data)}catch(e){console.error("Error fetching sets or cards:",e)}finally{c(!1)}})()},[]);let P=async(e,a)=>{d(!0);try{let t=await (0,y.K)("cards",{q:"set.id:".concat(e),orderBy:"-cardmarket.prices.averageSellPrice",pageSize:"14",page:a.toString()});s(t.data)}catch(e){console.error("Error fetching cards:",e)}finally{d(!1)}},B=5*u,b=e.slice(B-5,B),I=Math.ceil(e.length/5),w=Math.ceil(((null==S?void 0:S.total)||0)/14);return{featuredCards:t,highestPricedCards:n,loadingSets:l,loadingCards:o,currentPage:u,inputPage:_,currentFeaturedPage:m,inputFeaturedPage:x,selectedSet:S,currentSets:b,searchQuery:N,setsPerPage:5,featuredCardsPerPage:14,totalPages:I,totalFeaturedPages:w,setCurrentPage:h,setInputPage:g,setCurrentFeaturedPage:p,setInputFeaturedPage:v,setSelectedSet:C,setSearchQuery:f,fetchFeaturedCards:P,router:k}};var S=t(6188),C=t(8864),N=t.n(C),f=e=>{let{currentSets:a,loadingSets:t,currentPage:r,totalPages:n,inputPage:i,setCurrentPage:l,setInputPage:u,handleSetClick:h}=e;return(0,s.jsxs)("section",{className:N().latestSets,children:[(0,s.jsx)("h2",{children:"Latest Sets"}),t?(0,s.jsx)("div",{className:N().loadingSpinner,children:(0,s.jsx)(c.Z,{size:50,color:"#123ABC",loading:t})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:N().setsGrid,children:a.map(e=>(0,s.jsx)(S.Z,{id:e.id,name:e.name,series:e.series,releaseDate:e.releaseDate,logo:e.images.logo,onClick:()=>h(e)},e.id))}),(0,s.jsxs)("div",{className:N().pagination,children:[(0,s.jsx)("button",{onClick:()=>{r>1&&(l(r-1),u((r-1).toString()))},disabled:1===r,className:N().paginationButton,children:(0,s.jsx)(o.G,{icon:d.A35})}),(0,s.jsx)("input",{type:"number",value:i,onChange:e=>{u(e.target.value)},onBlur:()=>{let e=Number(i);e>0&&e<=n?l(e):u(r.toString())},min:"1",max:n,className:N().paginationInput}),(0,s.jsxs)("span",{children:["/ ",n]}),(0,s.jsx)("button",{onClick:()=>{r<n&&(l(r+1),u((r+1).toString()))},disabled:r===n,className:N().paginationButton,children:(0,s.jsx)(o.G,{icon:d._tD})})]})]})]})},k=()=>{let{featuredCards:e,highestPricedCards:a,loadingSets:t,loadingCards:r,currentPage:n,inputPage:i,currentFeaturedPage:c,inputFeaturedPage:o,currentSets:d,selectedSet:u,searchQuery:h,totalPages:_,totalFeaturedPages:m,setCurrentPage:p,setInputPage:j,setCurrentFeaturedPage:y,setInputFeaturedPage:S,setSelectedSet:C,setSearchQuery:N,fetchFeaturedCards:k,router:P}=v();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{searchQuery:h,setSearchQuery:N,handleSearchClick:()=>{h.trim()&&P.push("/search?query=".concat(encodeURIComponent(h)))}}),(0,s.jsx)(f,{currentSets:d,loadingSets:t,currentPage:n,totalPages:_,inputPage:i,setCurrentPage:p,setInputPage:j,handleSetClick:e=>{C(e),k(e.id,1),y(1),S("1")}}),(0,s.jsx)(g,{selectedSet:u,featuredCards:e,loadingCards:r,currentFeaturedPage:c,totalFeaturedPages:m,inputFeaturedPage:o,setCurrentFeaturedPage:y,setInputFeaturedPage:S,fetchFeaturedCards:k}),(0,s.jsx)(x,{highestPricedCards:a})]})}},6188:function(e,a,t){"use strict";var s=t(7437),r=t(3145),n=t(1268),i=t(5217),l=t(3334),c=t.n(l);a.Z=e=>{let{id:a,name:t,series:l,releaseDate:o,logo:d,onClick:u,showLink:h=!0}=e;return(0,s.jsxs)("div",{className:c().setContainer,children:[(0,s.jsxs)("div",{className:c().set,onClick:()=>u(a),children:[(0,s.jsx)(r.default,{src:d,alt:"".concat(t," logo"),width:256,height:92}),(0,s.jsx)("h3",{children:t}),(0,s.jsxs)("p",{children:["Series: ",l]}),(0,s.jsxs)("p",{children:["Release Date: ",o]})]}),h&&(0,s.jsxs)("a",{href:"/pokemon-tcg-ez-search/set/".concat(a),className:c().link,children:["View Set Details",(0,s.jsx)(n.G,{icon:i.eFW,className:c().linkIcon})]})]})}},1121:function(e,a,t){"use strict";t.d(a,{K:function(){return r}});let s=t(257).env.NEXT_PUBLIC_POKEMON_API_KEY,r=async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=new URL("".concat("https://api.pokemontcg.io/v2","/").concat(e));Object.keys(a).forEach(e=>t.searchParams.append(e,a[e]));let r=await fetch(t.toString(),{headers:{"X-Api-Key":s||""}});if(!r.ok)throw Error("Error fetching data from ".concat(t,": ").concat(r.statusText));return r.json()}},7727:function(e){e.exports={card:"styles_card__WuWa9",imageWrapper:"styles_imageWrapper__57Hnf",cardName:"styles_cardName__I7_Bh",series:"styles_series__4Dkk4",price:"styles_price__MOkxO",overlay:"styles_overlay__q64vv",overlayContent:"styles_overlayContent__23CeX",overlayImg:"styles_overlayImg__Cx7dw",closeButton:"styles_closeButton__8vE9m",setName:"styles_setName__rWQVt"}},7366:function(e){e.exports={featuredCards:"styles_featuredCards__MvAfS",cardGrid:"styles_cardGrid__SFRuN",loadingSpinner:"styles_loadingSpinner__PoFYk",pagination:"styles_pagination__wUI5M",paginationButton:"styles_paginationButton__VB6Jd",paginationInput:"styles_paginationInput__RRZTE"}},5835:function(e){e.exports={highestPricedCards:"styles_highestPricedCards__Ro1eV",cardGrid:"styles_cardGrid__I5nYC"}},4741:function(e){e.exports={introduction:"styles_introduction__7Jhuw",searchContainer:"styles_searchContainer__Ld1qf",searchBar:"styles_searchBar__0fLa3",searchButton:"styles_searchButton__30i_0"}},8864:function(e){e.exports={latestSets:"styles_latestSets__WXMZU",setsGrid:"styles_setsGrid__Vjzbc",loadingSpinner:"styles_loadingSpinner__M_G8h",pagination:"styles_pagination__GsvnT",paginationButton:"styles_paginationButton__AeTxZ",paginationInput:"styles_paginationInput___qsx_"}},3334:function(e){e.exports={setContainer:"styles_setContainer__phdvx",set:"styles_set__kSeT8",link:"styles_link__akTym",linkIcon:"styles_linkIcon__TH22h"}}},function(e){e.O(0,[837,676,878,274,971,117,744],function(){return e(e.s=615)}),_N_E=e.O()}]);