(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573],{2985:function(e,s,t){Promise.resolve().then(t.bind(t,4195))},6188:function(e,s,t){"use strict";var n=t(7437),a=t(3145),i=t(1268),r=t(5217),c=t(3334),l=t.n(c);s.Z=e=>{let{id:s,name:t,series:c,releaseDate:o,logo:h,onClick:d,showLink:u=!0}=e;return(0,n.jsxs)("div",{className:l().setContainer,children:[(0,n.jsxs)("div",{className:l().set,onClick:()=>d(s),children:[(0,n.jsx)(a.default,{src:h,alt:"".concat(t," logo"),width:256,height:92}),(0,n.jsx)("h3",{children:t}),(0,n.jsxs)("p",{children:["Series: ",c]}),(0,n.jsxs)("p",{children:["Release Date: ",o]})]}),u&&(0,n.jsxs)("a",{href:"/pokemon-tcg-ez-search/set/".concat(s),className:l().link,children:["View Set Details",(0,n.jsx)(i.G,{icon:r.eFW,className:l().linkIcon})]})]})}},4195:function(e,s,t){"use strict";t.r(s);var n=t(7437),a=t(2265),i=t(9376),r=t(3078),c=t(6188),l=t(8105),o=t.n(l),h=t(3315);s.default=()=>{let[e,s]=(0,a.useState)([]),[t,l]=(0,a.useState)(!0),[d,u]=(0,a.useState)(""),_=(0,i.useRouter)();(0,a.useEffect)(()=>{(async()=>{try{let e=(await (0,r.K)("sets")).data.sort((e,s)=>new Date(s.releaseDate).getTime()-new Date(e.releaseDate).getTime());s(e)}catch(e){console.error("Error fetching sets:",e)}finally{l(!1)}})()},[]);let f=e=>{_.push("/set/".concat(e))},m=e.filter(e=>e.name.toLowerCase().includes(d.toLowerCase()));return t?(0,n.jsx)("div",{className:o().loadingSpinner,children:(0,n.jsx)(h.Z,{size:50,color:"#123ABC",loading:t})}):(0,n.jsxs)("div",{className:o().setListPage,children:[(0,n.jsx)("h1",{children:"Pok\xe9mon TCG Sets"}),(0,n.jsx)("input",{type:"text",placeholder:"Search by set name",value:d,onChange:e=>{u(e.target.value)},className:o().searchBar}),(0,n.jsx)("div",{className:o().setsGrid,children:m.map(e=>(0,n.jsx)(c.Z,{id:e.id,name:e.name,series:e.series,releaseDate:e.releaseDate,logo:e.images.logo,onClick:()=>f(e.id),showLink:!1},e.id))})]})}},3078:function(e,s,t){"use strict";t.d(s,{K:function(){return a}});let n=t(257).env.NEXT_PUBLIC_POKEMON_API_KEY,a=async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=new URL("".concat("https://api.pokemontcg.io/v2","/").concat(e));Object.keys(s).forEach(e=>t.searchParams.append(e,s[e]));let a=await fetch(t.toString(),{headers:{"X-Api-Key":n||""}});if(!a.ok)throw Error("Error fetching data from ".concat(t,": ").concat(a.statusText));return a.json()}},3334:function(e){e.exports={setContainer:"styles_setContainer__phdvx",set:"styles_set__kSeT8",link:"styles_link__akTym",linkIcon:"styles_linkIcon__TH22h"}},8105:function(e){e.exports={setListPage:"styles_setListPage__Ec8Yl",setsGrid:"styles_setsGrid__N8FYU",loadingSpinner:"styles_loadingSpinner__79x6z",searchBar:"styles_searchBar___4HlY"}}},function(e){e.O(0,[837,676,878,274,971,117,744],function(){return e(e.s=2985)}),_N_E=e.O()}]);