import{J as m,ap as S,I as a,d as u,Y as b,b as $,c as I,n as w,p as P,i as C,e as x,k as f,a1 as E,r as D,N as c}from"./entry.16d2866b.js";import j from"./ComponentPlaygroundData.bb4f28bf.js";import"./TabsHeader.9f95c693.js";import"./ComponentPlaygroundProps.768ef008.js";import"./ProseH4.d3ea6c34.js";import"./ProseCodeInline.0472af27.js";import"./Badge.bc4549f4.js";import"./slot.e29e5840.js";import"./node.676c5e99.js";import"./ProseP.30591324.js";import"./ComponentPlaygroundSlots.vue.f36a965b.js";import"./ComponentPlaygroundTokens.vue.8504bd5d.js";async function z(e){const n=m(e);{const{data:o}=await S(`nuxt-component-meta${n?`-${n}`:""}`,()=>$fetch(`/api/component-meta${n?`/${n}`:""}`));return a(()=>o.value)}}const B=e=>(P("data-v-5fd4c706"),e=e(),C(),e),N=B(()=>x("div",{class:"ellipsis-item"},null,-1)),k=[N],V=u({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(e){const n=a(()=>((t=s)=>t.top)()),o=a(()=>((t=s)=>t.left)()),r=a(()=>((t=s)=>t.right)()),i=a(()=>((t=s)=>t.zIndex)()),l=a(()=>((t=s)=>t.width)()),g=a(()=>((t=s)=>t.height)()),y=a(()=>((t=s)=>`blur(${t.blur})`)()),h=a(()=>((t=s)=>{var p,d,_;return`linear-gradient(97.62deg, ${(p=t==null?void 0:t.colors)==null?void 0:p[0]} 2.27%, ${(d=t==null?void 0:t.colors)==null?void 0:d[1]} 50.88%, ${(_=t==null?void 0:t.colors)==null?void 0:_[2]} 98.48%)`})()),s=e,{$pinceau:v}=b(s,void 0,{_cCN_top:n,_eih_insetInlineStart:o,_IfB_insetInlineEnd:r,_SsE_zIndex:i,_wj8_maxWidth:l,_t33_height:g,_Jfd_filter:y,_yUj_background:h});return(t,p)=>($(),I("div",{class:w(["ellipsis",[m(v)]])},k,2))}});const q=f(V,[["__scopeId","data-v-5fd4c706"]]),A=u({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(e){const n=a(()=>E(e.component)),o=D({...e.props}),r=await z(e.component);return{as:n,formProps:o,componentData:r}},render(e){const n=Object.entries(this.$slots).reduce((o,[r,i])=>{if(r.startsWith("component-")){const l=r.replace("component-","");o[l]=i}return o},{});return c("div",{class:"component-playground"},[c("div",{class:"component-playground-wrapper"},[c(q,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),c(e.as,{...e.formProps,class:"component-playground-component"},{...n})]),c(j,{modelValue:e.formProps,componentData:e.componentData,"onUpdate:modelValue":o=>e.formProps=o})])}});const Q=f(A,[["__scopeId","data-v-9ca9b996"]]);export{Q as default};