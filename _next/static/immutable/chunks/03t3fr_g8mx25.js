(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,53801,e=>{"use strict";var t=e.i(62359),o=e.i(72382),i=e.i(66393);e.s(["usePageCopy",0,function(){return function(e){let o=function(e){let{advisor:t,services:o,serviceCategories:a,whyChoose:n,tools:r}=e,l=t.name.trim().split(/\s+/)[0]||"we",s=t.yearsExperience.trim();return{about:{eyebrow:"About",title:"Helping families make informed investment decisions.",lead:t.philosophy},story:{eyebrow:"The Story",title:s?`${s} years of sitting on the same side of the table`:"Sitting on the same side of the table",lead:""},milestones:{eyebrow:"Milestones",title:"How the practice grew",lead:"Slowly, and almost entirely by word of mouth."},approach:{eyebrow:"The Approach",title:`${(0,i.countWord)(n.length)} commitments I make to every client`,lead:""},blog:{eyebrow:"Blog",title:"Notes on investing, written for investors",lead:"Longer pieces on the questions that come up in conversation, written in plain language, with no product being sold at the end of them."},news:{eyebrow:"News",title:"What is happening in the industry",lead:"Mutual fund and market news, gathered from across the industry. Headlines link to the publisher, nothing here is our own reporting."},questions:{eyebrow:"Mutual Funds",title:"The questions investors actually ask",lead:"Plain answers to what mutual funds are, how they work and how to buy and sell them. No scheme is recommended anywhere on this page, it is here to be useful, not to sell you anything."},disclosure:{eyebrow:"Transparency",title:"What we earn when you invest",lead:"Published because you are entitled to know it, not because a form required it."},services:{eyebrow:"Services",title:"Investment services built around your life",lead:a.length>1?`${(0,i.countWord)(a.length)} lines of business: ${a.map(e=>e.title.toLowerCase()).join(", ")}, each starting from your goals, never from a product.`:`${(0,i.countWord)(o.length)} ways I help investors put their money to work with intent, each one starting from your goals, never from a product.`},fees:{eyebrow:"Transparency",title:"How I get paid",lead:"No hidden charges and no advisory fee. As an AMFI-registered distributor, I am compensated through the standard commission built into regular mutual fund plans, disclosed to you upfront, exactly as SEBI requires."},insights:{eyebrow:"Insights",title:"Learn before you invest",lead:"Short, jargon-free explainers on the ideas that make the biggest difference to long-term investors."},contact:{eyebrow:"Contact",title:"Let's talk about your goals",lead:`Reach out however suits you, call, WhatsApp, email, or leave your details below and ${l} will get back to you within one working day.`},faq:{eyebrow:"Before You Call",title:"Questions people usually ask first",lead:""},tools:{eyebrow:"Investment Tools",title:"Plan Your Investments",lead:`${(0,i.countWord)(r.length)} free ${1===r.length?"tool":"tools"} to size a SIP, plan an income, price a goal, and work out what retirement and your child's education will actually cost. No sign-up, no email required.`}}}(e),a={};for(let i of t.COPY_BLOCK_KEYS){let t=e.pageCopy?.[i];a[i]={eyebrow:t?.eyebrow?.trim()||o[i].eyebrow,title:t?.title?.trim()||o[i].title,lead:t?.lead?.trim()||o[i].lead}}return a}((0,o.useConfig)())}])},65916,e=>{"use strict";var t=e.i(43476),o=e.i(53070),i=e.i(28478),a=e.i(38286),n=e.i(69236),r=e.i(53801),l=e.i(72382),s=e.i(78893),d=e.i(89206),c=e.i(97053);let m=c.default.div.withConfig({displayName:"about__Split",componentId:"sc-321a39b6-0"})`
  display: grid;
  gap: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 4rem;
  }
`,p=(0,c.default)(i.Reveal).withConfig({displayName:"about__AsideCol",componentId:"sc-321a39b6-1"})`
  @media (min-width: 1024px) {
    grid-column: span 5 / span 5;
  }
`,u=c.default.div.withConfig({displayName:"about__MainCol",componentId:"sc-321a39b6-2"})`
  @media (min-width: 1024px) {
    grid-column: span 7 / span 7;
  }
`,h=c.default.div.withConfig({displayName:"about__Sticky",componentId:"sc-321a39b6-3"})`
  @media (min-width: 1024px) {
    position: sticky;
    top: 7rem;
  }
`,f=(0,c.default)(s.AdvisorPhoto).withConfig({displayName:"about__Portrait",componentId:"sc-321a39b6-4"})`
  aspect-ratio: 4 / 5;
`,g=c.default.div.withConfig({displayName:"about__PortraitFrame",componentId:"sc-321a39b6-5"})`
  overflow: hidden;
  border-radius: 18px;
  background: var(--color-mist);
  box-shadow: var(--shadow-lift);
`,y=c.default.div.withConfig({displayName:"about__IdCard",componentId:"sc-321a39b6-6"})`
  margin-top: 1.5rem;
  border-radius: 14px;
  border: 1px solid var(--color-line);
  background: var(--color-surface);
  padding: 1.5rem;
`,b=c.default.p.withConfig({displayName:"about__IdName",componentId:"sc-321a39b6-7"})`
  font-family: var(--font-serif);
  font-size: 21px;
  font-weight: 600;
  color: var(--color-ink);
`,x=c.default.p.withConfig({displayName:"about__IdRole",componentId:"sc-321a39b6-8"})`
  margin-top: 0.25rem;
  font-size: 13.5px;
  color: var(--color-ink-faint);
`,w=c.default.dl.withConfig({displayName:"about__IdStats",componentId:"sc-321a39b6-9"})`
  margin-top: 1.25rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  border-top: 1px solid var(--color-line-soft);
  padding-top: 1.25rem;
  font-variant-numeric: tabular-nums;
`,v=c.default.dt.withConfig({displayName:"about__IdTerm",componentId:"sc-321a39b6-10"})`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-ink-faint);
`,j=c.default.dd.withConfig({displayName:"about__IdDetail",componentId:"sc-321a39b6-11"})`
  margin-top: 0.375rem;
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 600;
  color: var(--color-ink);
`,_=c.default.div.withConfig({displayName:"about__Prose",componentId:"sc-321a39b6-12"})`
  margin-top: 1.5rem;
  font-size: 15.5px;
  line-height: 1.8;
  color: var(--color-ink-soft);

  > * + * {
    margin-top: 1.25rem;
  }

  @media (min-width: 640px) {
    font-size: 16px;
  }
`,C=c.default.div.withConfig({displayName:"about__Pull",componentId:"sc-321a39b6-13"})`
  margin-top: 1.875rem;
  border-radius: 16px;
  border: 1px solid var(--color-line);
  background: var(--color-sand);
  padding: 1.75rem;

  @media (min-width: 640px) {
    padding: 2.25rem;
  }
`,I=c.default.p.withConfig({displayName:"about__PullQuote",componentId:"sc-321a39b6-14"})`
  margin-top: 1rem;
  font-family: var(--font-serif);
  font-size: 19px;
  line-height: 1.6;
  color: var(--color-ink);

  @media (min-width: 640px) {
    font-size: 21px;
  }
`,k=c.default.p.withConfig({displayName:"about__PullBy",componentId:"sc-321a39b6-15"})`
  margin-top: 1rem;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-ink-faint);
`,N=c.default.div.withConfig({displayName:"about__TwoUp",componentId:"sc-321a39b6-16"})`
  margin-top: 1.875rem;
  display: grid;
  gap: 2.25rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,z=c.default.h3.withConfig({displayName:"about__ColTitle",componentId:"sc-321a39b6-17"})`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-family: var(--font-serif);
  font-size: 19px;
  font-weight: 600;
  color: var(--color-ink);
`,T=c.default.ul.withConfig({displayName:"about__Qualifications",componentId:"sc-321a39b6-18"})`
  margin-top: 1.25rem;

  > li + li {
    margin-top: 0.875rem;
  }
`,P=c.default.li.withConfig({displayName:"about__Qualification",componentId:"sc-321a39b6-19"})`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
`,R=c.default.span.withConfig({displayName:"about__Tick",componentId:"sc-321a39b6-20"})`
  margin-top: 0.125rem;
  display: flex;
  height: 18px;
  width: 18px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: color-mix(in oklch, var(--color-gold) 20%, transparent);
`,A=c.default.span.withConfig({displayName:"about__QualificationText",componentId:"sc-321a39b6-21"})`
  font-size: 14.5px;
  line-height: 1.35;
  color: var(--color-ink-soft);
`,S=c.default.ul.withConfig({displayName:"about__Expertise",componentId:"sc-321a39b6-22"})`
  margin-top: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,L=c.default.li.withConfig({displayName:"about__ExpertiseChip",componentId:"sc-321a39b6-23"})`
  border-radius: 999px;
  border: 1px solid var(--color-line);
  background: var(--color-surface);
  padding: 0.5rem 0.875rem;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-ink-soft);
`,B=(0,c.default)(a.ButtonLink).withConfig({displayName:"about__TalkButton",componentId:"sc-321a39b6-24"})`
  margin-top: 1.875rem;
`,$=c.default.div.withConfig({displayName:"about__Commitments",componentId:"sc-321a39b6-25"})`
  margin-top: 1.9rem;
  display: grid;
  gap: 2.5rem 2.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 2.25rem;
  }
`,q=c.default.span.withConfig({displayName:"about__CommitmentRule",componentId:"sc-321a39b6-26"})`
  display: block;
  height: 1px;
  width: 100%;
  background: linear-gradient(
    to right,
    color-mix(in oklch, var(--color-gold-deep) 60%, transparent),
    transparent
  );
`,E=c.default.div.withConfig({displayName:"about__CommitmentHead",componentId:"sc-321a39b6-27"})`
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Q=c.default.h3.withConfig({displayName:"about__CommitmentTitle",componentId:"sc-321a39b6-28"})`
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 600;
  color: var(--color-ink);
`,W=c.default.p.withConfig({displayName:"about__CommitmentBody",componentId:"sc-321a39b6-29"})`
  margin-top: 0.75rem;
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--color-ink-soft);
`;function M(){let{config:e,hasSection:a}=(0,l.useAdvisor)(),{pageParts:s}=(0,n.useTemplate)(),{Band:c,Heading:M,Timeline:F}=s,H=(0,r.usePageCopy)(),{advisor:K,brand:O,images:Y,whyChoose:U,milestones:D}=e,{PageHeader:G,sections:J}=(0,n.useTemplate)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(G,{eyebrow:H.about.eyebrow,title:H.about.title,lead:H.about.lead}),(0,t.jsx)(c,{tone:"default",children:(0,t.jsxs)(m,{children:[(0,t.jsx)(p,{children:(0,t.jsxs)(h,{children:[(0,t.jsx)(g,{children:(0,t.jsx)(f,{src:Y.portrait,alt:`Portrait of ${K.name}`})}),(0,t.jsxs)(y,{children:[(0,t.jsx)(b,{children:K.name}),(0,t.jsx)(x,{children:K.title}),(0,t.jsxs)(w,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(v,{children:"Experience"}),(0,t.jsxs)(j,{children:[K.yearsExperience," yrs"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(v,{children:"AMFI ARN"}),(0,t.jsx)(j,{children:O.arn.replace("ARN-","")})]})]})]})]})}),(0,t.jsxs)(u,{children:[(0,t.jsx)(i.Reveal,{children:(0,t.jsx)(M,{eyebrow:H.story.eyebrow,title:H.story.title,lead:H.story.lead||void 0})}),(0,t.jsx)(i.Reveal,{delay:70,children:(0,t.jsx)(_,{children:K.bioLong.map((e,o)=>(0,t.jsx)("p",{children:e},o))})}),(0,t.jsx)(i.Reveal,{delay:120,children:(0,t.jsxs)(C,{children:[(0,t.jsx)(o.LuQuote,{size:28,style:{color:"var(--color-gold)"},"aria-hidden":!0}),(0,t.jsx)(I,{children:K.philosophy}),(0,t.jsxs)(k,{children:["— Investment philosophy, ",O.name]})]})}),(0,t.jsxs)(N,{children:[(0,t.jsxs)(i.Reveal,{delay:60,children:[(0,t.jsxs)(z,{children:[(0,t.jsx)(o.LuAward,{size:18,style:{color:"var(--color-gold-ink)"}}),"Qualifications"]}),(0,t.jsx)(T,{children:K.qualifications.map(e=>(0,t.jsxs)(P,{children:[(0,t.jsx)(R,{children:(0,t.jsx)(o.LuCheck,{size:10,style:{color:"var(--color-gold-ink)"}})}),(0,t.jsx)(A,{children:e})]},e))})]}),(0,t.jsxs)(i.Reveal,{delay:120,children:[(0,t.jsx)(z,{children:"Areas of expertise"}),(0,t.jsx)(S,{children:K.expertise.map(e=>(0,t.jsx)(L,{children:e},e))})]})]}),(0,t.jsx)(i.Reveal,{delay:160,children:(0,t.jsxs)(B,{to:"/contact",size:"lg",children:["Start a Conversation",(0,t.jsx)(o.LuArrowRight,{size:16})]})})]})]})}),D.length>0&&(0,t.jsxs)(c,{tone:"contrast",children:[(0,t.jsx)(i.Reveal,{children:(0,t.jsx)(M,{eyebrow:H.milestones.eyebrow,title:H.milestones.title,lead:H.milestones.lead||void 0})}),(0,t.jsx)(F,{items:D})]}),(0,t.jsxs)(c,{tone:"alt",children:[(0,t.jsx)(i.Reveal,{children:(0,t.jsx)(M,{eyebrow:H.approach.eyebrow,title:H.approach.title,lead:H.approach.lead||void 0})}),(0,t.jsx)($,{children:U.map((e,o)=>{let a=(0,d.icon)(e.icon);return(0,t.jsxs)(i.Reveal,{delay:o%3*80,children:[(0,t.jsx)(q,{"aria-hidden":!0}),(0,t.jsxs)(E,{children:[(0,t.jsx)(a,{size:18,style:{color:"var(--color-gold-ink)"}}),(0,t.jsx)(Q,{children:e.title})]}),(0,t.jsx)(W,{children:e.description})]},e.title)})})]}),a("team")&&(0,t.jsx)(J.team,{}),a("process")&&(0,t.jsx)(J.process,{}),a("partners")&&(0,t.jsx)(J.partners,{}),(0,t.jsx)(J.leadCta,{})]})}e.s(["AboutPage",0,M,"default",0,M])}]);