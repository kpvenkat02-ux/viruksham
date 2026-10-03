(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,53801,e=>{"use strict";var t=e.i(62359),i=e.i(72382),o=e.i(66393);e.s(["usePageCopy",0,function(){return function(e){let i=function(e){let{advisor:t,services:i,serviceCategories:n,whyChoose:a,tools:r}=e,s=t.name.trim().split(/\s+/)[0]||"we",l=t.yearsExperience.trim();return{about:{eyebrow:"About",title:"Helping families make informed investment decisions.",lead:t.philosophy},story:{eyebrow:"The Story",title:l?`${l} years of sitting on the same side of the table`:"Sitting on the same side of the table",lead:""},milestones:{eyebrow:"Milestones",title:"How the practice grew",lead:"Slowly, and almost entirely by word of mouth."},approach:{eyebrow:"The Approach",title:`${(0,o.countWord)(a.length)} commitments I make to every client`,lead:""},blog:{eyebrow:"Blog",title:"Notes on investing, written for investors",lead:"Longer pieces on the questions that come up in conversation, written in plain language, with no product being sold at the end of them."},news:{eyebrow:"News",title:"What is happening in the industry",lead:"Mutual fund and market news, gathered from across the industry. Headlines link to the publisher, nothing here is our own reporting."},questions:{eyebrow:"Mutual Funds",title:"The questions investors actually ask",lead:"Plain answers to what mutual funds are, how they work and how to buy and sell them. No scheme is recommended anywhere on this page, it is here to be useful, not to sell you anything."},disclosure:{eyebrow:"Transparency",title:"What we earn when you invest",lead:"Published because you are entitled to know it, not because a form required it."},services:{eyebrow:"Services",title:"Investment services built around your life",lead:n.length>1?`${(0,o.countWord)(n.length)} lines of business: ${n.map(e=>e.title.toLowerCase()).join(", ")}, each starting from your goals, never from a product.`:`${(0,o.countWord)(i.length)} ways I help investors put their money to work with intent, each one starting from your goals, never from a product.`},fees:{eyebrow:"Transparency",title:"How I get paid",lead:"No hidden charges and no advisory fee. As an AMFI-registered distributor, I am compensated through the standard commission built into regular mutual fund plans, disclosed to you upfront, exactly as SEBI requires."},insights:{eyebrow:"Insights",title:"Learn before you invest",lead:"Short, jargon-free explainers on the ideas that make the biggest difference to long-term investors."},contact:{eyebrow:"Contact",title:"Let's talk about your goals",lead:`Reach out however suits you, call, WhatsApp, email, or leave your details below and ${s} will get back to you within one working day.`},faq:{eyebrow:"Before You Call",title:"Questions people usually ask first",lead:""},tools:{eyebrow:"Investment Tools",title:"Plan Your Investments",lead:`${(0,o.countWord)(r.length)} free ${1===r.length?"tool":"tools"} to size a SIP, plan an income, price a goal, and work out what retirement and your child's education will actually cost. No sign-up, no email required.`}}}(e),n={};for(let o of t.COPY_BLOCK_KEYS){let t=e.pageCopy?.[o];n[o]={eyebrow:t?.eyebrow?.trim()||i[o].eyebrow,title:t?.title?.trim()||i[o].title,lead:t?.lead?.trim()||i[o].lead}}return n}((0,i.useConfig)())}])},46491,e=>{"use strict";var t=e.i(43476),i=e.i(53070),o=e.i(28478),n=e.i(38286),a=e.i(69236),r=e.i(53801),s=e.i(72382),l=e.i(89206),d=e.i(97053);let c=d.default.div.withConfig({displayName:"services__Actions",componentId:"sc-a73aa2d-0"})`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`,m=(0,d.default)(c).withConfig({displayName:"services__CenteredActions",componentId:"sc-a73aa2d-1"})`
  margin: 2.5rem 0 0;
  max-width: 28rem;

  @media (min-width: 640px) {
    max-width: none;
  }
`,h=(0,d.default)(function(e){let{pageParts:i}=(0,a.useTemplate)();return(0,t.jsx)(i.Band,{...e})}).withConfig({displayName:"services__IndexBand",componentId:"sc-a73aa2d-2"})`
  padding-block: 1.9rem;

  @media (min-width: 640px) {
    padding-block: 2.1rem;
  }
  @media (min-width: 1024px) {
    padding-block: 2.25rem;
  }
`,u=d.default.span.withConfig({displayName:"services__LineCount",componentId:"sc-a73aa2d-3"})`
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: var(--color-ink-faint);
`,p=d.default.div.withConfig({displayName:"services__LineHead",componentId:"sc-a73aa2d-4"})`
  max-width: 44rem;
  margin-bottom: 2.25rem;
`,g=d.default.p.withConfig({displayName:"services__LineNote",componentId:"sc-a73aa2d-5"})`
  margin-top: 1.25rem;
  padding: 0.9rem 1.15rem;
  border-radius: 14px;
  background: color-mix(in oklch, var(--color-gold) 14%, transparent);
  font-size: 13.5px;
  line-height: 1.65;
  color: var(--color-ink-soft);
`,f=d.default.ul.withConfig({displayName:"services__LineGrid",componentId:"sc-a73aa2d-6"})`
  display: grid;
  gap: 0.85rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  > li {
    height: 100%;
  }
  > li > * {
    height: 100%;
  }
`,y=(0,d.default)(n.Panel).withConfig({displayName:"services__LineTile",componentId:"sc-a73aa2d-7"})`
  height: 100%;
  padding: 1.4rem 1.5rem;
`,w=d.default.span.withConfig({displayName:"services__LineNum",componentId:"sc-a73aa2d-8"})`
  font-size: 12px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.12em;
  color: var(--color-gold-ink);
`,v=d.default.h3.withConfig({displayName:"services__LineTitle",componentId:"sc-a73aa2d-9"})`
  margin-top: 0.65rem;
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.35;
  color: var(--color-ink);
`,x=d.default.p.withConfig({displayName:"services__LineBody",componentId:"sc-a73aa2d-10"})`
  margin-top: 0.5rem;
  font-size: 13.5px;
  line-height: 1.65;
  color: var(--color-ink-soft);
`,b=d.default.p.withConfig({displayName:"services__JumpLabel",componentId:"sc-a73aa2d-11"})`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-ink-faint);
`,j=d.default.ul.withConfig({displayName:"services__JumpList",componentId:"sc-a73aa2d-12"})`
  margin-top: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
`,k=d.default.a.withConfig({displayName:"services__Jump",componentId:"sc-a73aa2d-13"})`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 999px;
  border: 1px solid var(--color-line);
  background: var(--color-surface);
  padding: 0.625rem 1rem;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--color-ink-soft);
  transition: border-color 0.3s, color 0.3s;

  &:hover {
    border-color: color-mix(in oklch, var(--color-navy) 30%, transparent);
    color: var(--color-ink);
  }
`;function _(){let e=(0,r.usePageCopy)(),{config:l,hasSection:d,hasPage:_}=(0,s.useAdvisor)(),{services:I,serviceCategories:L}=l,N=L.length?L:[{key:"services",icon:"Wallet",title:"",description:"",note:void 0,services:I}],{PageHeader:T,sections:z,pageParts:S}=(0,a.useTemplate)(),{Band:A,Heading:B,ServiceDetail:R}=S;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(T,{eyebrow:e.services.eyebrow,title:e.services.title,lead:e.services.lead,children:(0,t.jsxs)(c,{children:[(0,t.jsxs)(n.ButtonLink,{to:"/contact",size:"lg",children:["Talk to us",(0,t.jsx)(i.LuArrowRight,{size:16})]}),_("tools")&&(0,t.jsx)(n.ButtonLink,{to:"/tools",variant:"outline",size:"lg",children:"Try the Calculators"})]})}),(0,t.jsxs)(h,{tone:"default",children:[(0,t.jsx)(o.Reveal,{children:(0,t.jsx)(b,{children:"Jump to a service line"})}),(0,t.jsx)(o.Reveal,{delay:60,children:(0,t.jsx)(j,{children:N.map(e=>(0,t.jsx)("li",{children:(0,t.jsxs)(k,{href:`#${e.key}`,children:[(0,t.jsx)(C,{name:e.icon}),e.title||"Services",(0,t.jsx)(u,{children:e.services.length})]})},e.key))})})]}),N.map((e,i)=>(0,t.jsxs)(A,{tone:i%2==0?"alt":"default",id:e.key,children:[e.title&&(0,t.jsx)(o.Reveal,{children:(0,t.jsxs)(p,{children:[(0,t.jsx)(B,{eyebrow:`Line ${String(i+1).padStart(2,"0")}`,title:e.title,lead:e.description}),e.note&&(0,t.jsx)(g,{children:e.note})]})}),e.services.some(e=>e.detail)?e.services.map((e,i)=>(0,t.jsx)(o.Reveal,{delay:60*Math.min(i,6),children:(0,t.jsx)(R,{service:e,index:i})},e.title)):(0,t.jsx)(f,{children:e.services.map((e,i)=>(0,t.jsx)(o.Reveal,{as:"li",delay:40*Math.min(i,8),children:(0,t.jsxs)(y,{$interactive:!0,children:[(0,t.jsx)(w,{children:String(i+1).padStart(2,"0")}),(0,t.jsx)(v,{children:e.title}),(0,t.jsx)(x,{children:e.description})]})},e.title))})]},e.key)),(0,t.jsxs)(A,{tone:"contrast",children:[(0,t.jsx)(o.Reveal,{children:(0,t.jsx)(B,{eyebrow:e.fees.eyebrow,title:e.fees.title,lead:e.fees.lead})}),(0,t.jsx)(o.Reveal,{delay:90,children:(0,t.jsxs)(m,{children:[(0,t.jsxs)(n.ButtonLink,{to:"/contact",size:"lg",children:["Ask me anything",(0,t.jsx)(i.LuArrowRight,{size:16})]}),_("insights")&&(0,t.jsx)(n.ButtonLink,{to:"/insights",variant:"outline",size:"lg",children:"Read the Insights"})]})})]}),d("process")&&(0,t.jsx)(z.process,{}),(0,t.jsx)(z.leadCta,{})]})}function C({name:e}){let i=(0,l.icon)(e);return(0,t.jsx)(i,{size:16,style:{color:"var(--color-gold-ink)"}})}e.s(["ServicesPage",0,_,"default",0,_])}]);