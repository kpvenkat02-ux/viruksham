(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,53801,e=>{"use strict";var t=e.i(62359),o=e.i(72382),n=e.i(66393);e.s(["usePageCopy",0,function(){return function(e){let o=function(e){let{advisor:t,services:o,serviceCategories:i,whyChoose:a,tools:r}=e,l=t.name.trim().split(/\s+/)[0]||"we",s=t.yearsExperience.trim();return{about:{eyebrow:"About",title:"Helping families make informed investment decisions.",lead:t.philosophy},story:{eyebrow:"The Story",title:s?`${s} years of sitting on the same side of the table`:"Sitting on the same side of the table",lead:""},milestones:{eyebrow:"Milestones",title:"How the practice grew",lead:"Slowly, and almost entirely by word of mouth."},approach:{eyebrow:"The Approach",title:`${(0,n.countWord)(a.length)} commitments I make to every client`,lead:""},blog:{eyebrow:"Blog",title:"Notes on investing, written for investors",lead:"Longer pieces on the questions that come up in conversation, written in plain language, with no product being sold at the end of them."},news:{eyebrow:"News",title:"What is happening in the industry",lead:"Mutual fund and market news, gathered from across the industry. Headlines link to the publisher, nothing here is our own reporting."},questions:{eyebrow:"Mutual Funds",title:"The questions investors actually ask",lead:"Plain answers to what mutual funds are, how they work and how to buy and sell them. No scheme is recommended anywhere on this page, it is here to be useful, not to sell you anything."},disclosure:{eyebrow:"Transparency",title:"What we earn when you invest",lead:"Published because you are entitled to know it, not because a form required it."},services:{eyebrow:"Services",title:"Investment services built around your life",lead:i.length>1?`${(0,n.countWord)(i.length)} lines of business: ${i.map(e=>e.title.toLowerCase()).join(", ")}, each starting from your goals, never from a product.`:`${(0,n.countWord)(o.length)} ways I help investors put their money to work with intent, each one starting from your goals, never from a product.`},fees:{eyebrow:"Transparency",title:"How I get paid",lead:"No hidden charges and no advisory fee. As an AMFI-registered distributor, I am compensated through the standard commission built into regular mutual fund plans, disclosed to you upfront, exactly as SEBI requires."},insights:{eyebrow:"Insights",title:"Learn before you invest",lead:"Short, jargon-free explainers on the ideas that make the biggest difference to long-term investors."},contact:{eyebrow:"Contact",title:"Let's talk about your goals",lead:`Reach out however suits you, call, WhatsApp, email, or leave your details below and ${l} will get back to you within one working day.`},faq:{eyebrow:"Before You Call",title:"Questions people usually ask first",lead:""},tools:{eyebrow:"Investment Tools",title:"Plan Your Investments",lead:`${(0,n.countWord)(r.length)} free ${1===r.length?"tool":"tools"} to size a SIP, plan an income, price a goal, and work out what retirement and your child's education will actually cost. No sign-up, no email required.`}}}(e),i={};for(let n of t.COPY_BLOCK_KEYS){let t=e.pageCopy?.[n];i[n]={eyebrow:t?.eyebrow?.trim()||o[n].eyebrow,title:t?.title?.trim()||o[n].title,lead:t?.lead?.trim()||o[n].lead}}return i}((0,o.useConfig)())}])},81460,e=>{"use strict";var t=e.i(43476),o=e.i(53070),n=e.i(28478),i=e.i(38286),a=e.i(69236),r=e.i(53801),l=e.i(72382),s=e.i(97053);let d=s.default.div.withConfig({displayName:"contact__PortalCard",componentId:"sc-bf740a96-0"})`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 15px;
  border: 1px solid var(--color-line);
  background: var(--color-surface);
  padding: 1.5rem;

  @media (min-width: 640px) {
    padding: 2rem;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
  }
`,c=s.default.div.withConfig({displayName:"contact__PortalBody",componentId:"sc-bf740a96-1"})`
  max-width: 42rem;
`,u=s.default.h2.withConfig({displayName:"contact__PortalTitle",componentId:"sc-bf740a96-2"})`
  font-family: var(--font-serif);
  font-size: 19px;
  font-weight: 600;
  color: var(--color-ink);

  @media (min-width: 640px) {
    font-size: 21px;
  }
`,h=s.default.p.withConfig({displayName:"contact__PortalNote",componentId:"sc-bf740a96-3"})`
  margin-top: 0.625rem;
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--color-ink-soft);
`,m=s.default.div.withConfig({displayName:"contact__FaqWrap",componentId:"sc-bf740a96-4"})`
  margin-top: 1.75rem;
`,f=s.default.p.withConfig({displayName:"contact__CallNote",componentId:"sc-bf740a96-5"})`
  margin-top: 1.875rem;
  font-size: 14px;
  color: var(--color-ink-soft);
`,p=s.default.a.withConfig({displayName:"contact__PhoneLink",componentId:"sc-bf740a96-6"})`
  font-weight: 600;
  color: var(--color-ink);
  text-decoration: underline;
  text-underline-offset: 4px;
  font-variant-numeric: tabular-nums;

  &:hover {
    color: var(--color-gold-ink);
  }
`;function g(){let{brand:e,clientPortal:s,contact:g,faqs:y}=(0,l.useConfig)(),w=s.enabled&&""!==s.url.trim(),{PageHeader:b,sections:v,pageParts:x}=(0,a.useTemplate)(),{Band:j,Heading:k,Faqs:C}=x,{hasSection:I}=(0,l.useAdvisor)(),_=(0,r.usePageCopy)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b,{eyebrow:_.contact.eyebrow,title:_.contact.title,lead:_.contact.lead}),(0,t.jsx)(v.contact,{heading:!1}),w&&(0,t.jsx)(j,{tone:"default",children:(0,t.jsx)(n.Reveal,{children:(0,t.jsxs)(d,{children:[(0,t.jsxs)(c,{children:[(0,t.jsxs)(u,{children:["Already invest through ",e.name,"?"]}),(0,t.jsx)(h,{children:s.note})]}),(0,t.jsxs)(i.ButtonAnchor,{href:s.url,target:"_blank",rel:"noreferrer",variant:"primary",size:"lg",style:{flexShrink:0},children:[s.label,(0,t.jsx)(o.LuArrowUpRight,{size:16})]})]})})}),I("downloads")&&(0,t.jsx)(v.downloads,{}),(0,t.jsxs)(j,{tone:"alt",children:[(0,t.jsx)(n.Reveal,{children:(0,t.jsx)(k,{eyebrow:_.faq.eyebrow,title:_.faq.title,lead:_.faq.lead||void 0})}),(0,t.jsx)(m,{children:(0,t.jsx)(C,{items:y})}),(0,t.jsx)(n.Reveal,{children:(0,t.jsxs)(f,{children:["Prefer to talk right away?"," ",(0,t.jsx)(p,{href:`tel:${g.phone.replace(/\s/g,"")}`,children:g.phone})]})})]})]})}e.s(["ContactPage",0,g,"default",0,g])}]);