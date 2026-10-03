(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,23229,e=>{"use strict";let t=/^!\[([^\]]*)\]\(([^)]+)\)$/,o=/investor education and awareness initiative/i,i=/^(cl|ci)[\s-]*\d{2,}$/i;e.s(["coverOf",0,function(e){if(e.image)return{src:e.image,alt:e.title,fit:"cover"};for(let t of e.body){let o=/^!\[([^\]]*)\]\(([^)]+)\)$/.exec(t.trim());if(o)return{src:o[2].trim(),alt:o[1].trim()||e.title,fit:"contain"}}return null},"findPost",0,function(e,t){return e.blog.find(e=>e.slug===t)},"formatPostDate",0,function(e){if(!e)return"";let t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"})},"parseBody",0,function(e){let r=[];for(let a of e.map(e=>e.trim()).filter(Boolean)){if(function(e){let t=e.trim().replace(/^#+\s*/,"").replace(/^-\s*/,"");return!t||o.test(t)||i.test(t)}(a))continue;if(a.startsWith("- ")){let e=r[r.length-1];e?.kind==="list"?e.items.push(a.slice(2).trim()):r.push({kind:"list",items:[a.slice(2).trim()]});continue}if(a.startsWith("## ")){r.push({kind:"heading",text:a.slice(3).trim()});continue}let e=t.exec(a);if(e){r.push({kind:"image",alt:e[1].trim(),src:e[2].trim()});continue}r.push({kind:"paragraph",text:a})}return r}])},53801,e=>{"use strict";var t=e.i(62359),o=e.i(72382),i=e.i(66393);e.s(["usePageCopy",0,function(){return function(e){let o=function(e){let{advisor:t,services:o,serviceCategories:r,whyChoose:a,tools:n}=e,s=t.name.trim().split(/\s+/)[0]||"we",l=t.yearsExperience.trim();return{about:{eyebrow:"About",title:"Helping families make informed investment decisions.",lead:t.philosophy},story:{eyebrow:"The Story",title:l?`${l} years of sitting on the same side of the table`:"Sitting on the same side of the table",lead:""},milestones:{eyebrow:"Milestones",title:"How the practice grew",lead:"Slowly, and almost entirely by word of mouth."},approach:{eyebrow:"The Approach",title:`${(0,i.countWord)(a.length)} commitments I make to every client`,lead:""},blog:{eyebrow:"Blog",title:"Notes on investing, written for investors",lead:"Longer pieces on the questions that come up in conversation, written in plain language, with no product being sold at the end of them."},news:{eyebrow:"News",title:"What is happening in the industry",lead:"Mutual fund and market news, gathered from across the industry. Headlines link to the publisher, nothing here is our own reporting."},questions:{eyebrow:"Mutual Funds",title:"The questions investors actually ask",lead:"Plain answers to what mutual funds are, how they work and how to buy and sell them. No scheme is recommended anywhere on this page, it is here to be useful, not to sell you anything."},disclosure:{eyebrow:"Transparency",title:"What we earn when you invest",lead:"Published because you are entitled to know it, not because a form required it."},services:{eyebrow:"Services",title:"Investment services built around your life",lead:r.length>1?`${(0,i.countWord)(r.length)} lines of business: ${r.map(e=>e.title.toLowerCase()).join(", ")}, each starting from your goals, never from a product.`:`${(0,i.countWord)(o.length)} ways I help investors put their money to work with intent, each one starting from your goals, never from a product.`},fees:{eyebrow:"Transparency",title:"How I get paid",lead:"No hidden charges and no advisory fee. As an AMFI-registered distributor, I am compensated through the standard commission built into regular mutual fund plans, disclosed to you upfront, exactly as SEBI requires."},insights:{eyebrow:"Insights",title:"Learn before you invest",lead:"Short, jargon-free explainers on the ideas that make the biggest difference to long-term investors."},contact:{eyebrow:"Contact",title:"Let's talk about your goals",lead:`Reach out however suits you, call, WhatsApp, email, or leave your details below and ${s} will get back to you within one working day.`},faq:{eyebrow:"Before You Call",title:"Questions people usually ask first",lead:""},tools:{eyebrow:"Investment Tools",title:"Plan Your Investments",lead:`${(0,i.countWord)(n.length)} free ${1===n.length?"tool":"tools"} to size a SIP, plan an income, price a goal, and work out what retirement and your child's education will actually cost. No sign-up, no email required.`}}}(e),r={};for(let i of t.COPY_BLOCK_KEYS){let t=e.pageCopy?.[i];r[i]={eyebrow:t?.eyebrow?.trim()||o[i].eyebrow,title:t?.title?.trim()||o[i].title,lead:t?.lead?.trim()||o[i].lead}}return r}((0,o.useConfig)())}])},21882,e=>{"use strict";var t=e.i(43476),o=e.i(71645),i=e.i(53070),r=e.i(97053),a=e.i(52531),n=e.i(28478),s=e.i(8424),l=e.i(72382),d=e.i(69236),c=e.i(53801),m=e.i(23229);function p(){let e=(0,c.usePageCopy)(),{blog:i}=(0,l.useConfig)(),{PageHeader:r,pageParts:a}=(0,d.useTemplate)(),{Band:s}=a,[m,p]=(0,o.useState)("All"),u=(0,o.useMemo)(()=>["All",...Array.from(new Set(i.map(e=>e.category).filter(Boolean)))],[i]),h=(0,o.useMemo)(()=>[..."All"===m?i:i.filter(e=>e.category===m)].sort((e,t)=>e.date<t.date?1:e.date>t.date?-1:0),[i,m]),[f,...g]=h;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{eyebrow:e.blog.eyebrow,title:e.blog.title,lead:e.blog.lead}),(0,t.jsxs)(s,{tone:"alt",children:[u.length>1&&(0,t.jsx)(n.Reveal,{children:(0,t.jsx)(C,{children:u.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(I,{type:"button","aria-pressed":m===e,onClick:()=>p(e),children:e})},e))})}),0===h.length?(0,t.jsxs)($,{children:[(0,t.jsx)(T,{children:"No posts yet"}),(0,t.jsx)(P,{children:"The first pieces are being written. In the meantime, the Mutual Funds page answers the questions that come up most often."})]}):(0,t.jsxs)(t.Fragment,{children:[f&&(0,t.jsx)(n.Reveal,{children:(0,t.jsx)(_,{children:(0,t.jsx)(j,{post:f,index:0,lead:!0})})}),(0,t.jsx)(N,{children:g.map((e,o)=>(0,t.jsx)("li",{children:(0,t.jsx)(n.Reveal,{delay:55*Math.min(o,6),children:(0,t.jsx)(j,{post:e,index:o+1})})},e.slug))})]})]})]})}let u=r.default.div.withConfig({displayName:"blog__Well",componentId:"sc-7f0a2b33-0"})`
  position: absolute;
  inset: 0;
  background: var(--color-surface);
  /* The compensation is exact, not eyeballed. An element at translateZ(-z)
     under perspective P projects at P / (P + z): at z = 50 and P = 1400 that
     is 0.9655, so it is scaled back up by 1 / 0.9655 = 1.036 and lands on the
     card edge. A guessed 1.12 here overflowed the card by 6% on every side,
     and because this element carries its own clip nothing above it caught the
     overflow.

     transform-style stays flat: this element needs its own Z, nothing inside
     it does, and staying flat is what lets it clip the photograph at all. */
  transform: translateZ(-50px) scale(1.036);
  transform-style: flat;
  overflow: hidden;
  border-radius: inherit;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 1;
    transition: opacity 0.7s var(--ease-out), transform 1.2s var(--ease-out);
  }

  img[data-fit='contain'] {
    object-fit: contain;
    padding: 12%;
  }
`,h=r.default.span.withConfig({displayName:"blog__Scrim",componentId:"sc-7f0a2b33-1"})`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    to top,
    var(--color-surface) 0%,
    var(--color-surface) 44%,
    color-mix(in oklab, var(--color-surface) 74%, transparent) 60%,
    color-mix(in oklab, var(--color-surface) 22%, transparent) 80%,
    transparent 100%
  );
`,f=(0,r.default)(s.Depth).withConfig({displayName:"blog__Numeral",componentId:"sc-7f0a2b33-2"})`
  position: absolute;
  top: 1.1rem;
  right: 1.4rem;
  transform: translateZ(-55px);
  font-variant-numeric: tabular-nums;
  font-family: var(--font-serif);
  font-size: 3.6rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.04em;
  background: var(--prism-sweep);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0.32;
`,g=(0,r.default)(a.Link).withConfig({displayName:"blog__Face",componentId:"sc-7f0a2b33-3"})`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  min-height: ${e=>e.$lead?"24rem":"17.5rem"};
  padding: 1.6rem;
  transform-style: preserve-3d;
  border-radius: inherit;
  /* No overflow clip here, deliberately. A clip on a preserve-3d element
     forces the browser to flatten the subtree, and the cover, the numeral and
     the type would all collapse to the same plane — which is the entire
     effect. The cover clips itself instead. */

  @media (min-width: 640px) {
    padding: ${e=>e.$lead?"2.4rem":"1.8rem"};
  }
  @media (min-width: 1024px) {
    min-height: ${e=>e.$lead?"28rem":"19.5rem"};
  }

  &:hover img {
    transform: scale(1.04);
  }
`,b=r.default.span.withConfig({displayName:"blog__Tag",componentId:"sc-7f0a2b33-4"})`
  align-self: flex-start;
  border-radius: 999px;
  border: 1px solid color-mix(in oklch, var(--prism-cyan) 40%, transparent);
  background: var(--color-surface);
  padding: 0.3rem 0.7rem;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-gold-ink);
`,y=r.default.h2.withConfig({displayName:"blog__Title",componentId:"sc-7f0a2b33-5"})`
  margin-top: 0.9rem;
  font-family: var(--font-serif);
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: -0.025em;
  text-wrap: balance;
  color: var(--color-ink);
  font-size: ${e=>e.$lead?"clamp(1.6rem, 1.15rem + 1.7vw, 2.4rem)":"1.2rem"};
`,w=r.default.p.withConfig({displayName:"blog__Excerpt",componentId:"sc-7f0a2b33-6"})`
  margin-top: 0.7rem;
  max-width: 46ch;
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--color-ink-soft);
`,v=r.default.span.withConfig({displayName:"blog__Meta",componentId:"sc-7f0a2b33-7"})`
  margin-top: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 12.5px;
  font-variant-numeric: tabular-nums;
  color: var(--color-ink-faint);
`,x=r.default.span.withConfig({displayName:"blog__Dot",componentId:"sc-7f0a2b33-8"})`
  height: 3px;
  width: 3px;
  border-radius: 999px;
  background: currentColor;
`,k=r.default.span.withConfig({displayName:"blog__Go",componentId:"sc-7f0a2b33-9"})`
  position: absolute;
  top: 1.4rem;
  left: 1.6rem;
  display: flex;
  height: 2rem;
  width: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid var(--glass-edge);
  background: var(--color-surface);
  color: var(--color-gold-ink);
  box-shadow: var(--shadow-soft);
  transition: transform 0.4s var(--ease-out), background-color 0.4s;

  ${g}:hover & {
    transform: translate(2px, -2px);
    background: color-mix(in oklab, var(--color-gold) 24%, white);
  }
`;function j({post:e,index:o,lead:r}){let a=(0,m.coverOf)(e);return(0,t.jsx)(s.Tilt,{pad:"0",tone:"window",max:r?5:7,lift:r?16:22,children:(0,t.jsxs)(g,{to:`/blog/${e.slug}`,$lead:r,children:[(0,t.jsx)(u,{"aria-hidden":!0,children:a&&(0,t.jsx)("img",{src:a.src,alt:"",loading:"lazy","data-fit":a.fit})}),(0,t.jsx)(h,{"aria-hidden":!0}),(0,t.jsx)(f,{"aria-hidden":!0,children:String(o+1).padStart(2,"0")}),(0,t.jsx)(k,{"aria-hidden":!0,children:(0,t.jsx)(i.LuArrowUpRight,{size:15})}),(0,t.jsxs)(s.Depth,{$z:48,children:[(0,t.jsx)(b,{children:e.category}),(0,t.jsx)(y,{$lead:r,children:e.title}),r&&(0,t.jsx)(w,{children:e.excerpt}),(0,t.jsxs)(v,{children:[(0,m.formatPostDate)(e.date),e.readTime&&(0,t.jsx)(x,{"aria-hidden":!0}),e.readTime]})]})]})})}let _=r.default.div.withConfig({displayName:"blog__LeadWrap",componentId:"sc-7f0a2b33-10"})`
  margin-top: 2.25rem;
`,N=r.default.ul.withConfig({displayName:"blog__Grid",componentId:"sc-7f0a2b33-11"})`
  margin-top: 1.15rem;
  display: grid;
  gap: 1.15rem;
  list-style: none;
  padding: 0;
  grid-template-columns: minmax(0, 1fr);

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1120px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  > li {
    min-width: 0;
  }
`,C=r.default.ul.withConfig({displayName:"blog__Filters",componentId:"sc-7f0a2b33-12"})`
  margin-top: 1.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  list-style: none;
  padding: 0;
`,I=r.default.button.withConfig({displayName:"blog__Filter",componentId:"sc-7f0a2b33-13"})`
  border-radius: 999px;
  border: 1px solid var(--glass-edge);
  background: var(--glass);
  padding: 0.55rem 1.1rem;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--color-ink-soft);
  transition: color 0.25s, background-color 0.25s, border-color 0.25s;

  &:hover {
    color: var(--color-ink);
    border-color: var(--color-gold-deep);
  }

  &[aria-pressed='true'] {
    background: var(--color-navy);
    border-color: var(--color-navy-soft);
    color: var(--color-paper);
  }
`,$=r.default.div.withConfig({displayName:"blog__Notice",componentId:"sc-7f0a2b33-14"})`
  margin-top: 2rem;
  border-radius: var(--radius-bento);
  background: var(--glass);
  border: 1px solid var(--glass-edge);
  box-shadow: var(--shadow-soft);
  padding: 2.5rem;
`,T=r.default.p.withConfig({displayName:"blog__NoticeTitle",componentId:"sc-7f0a2b33-15"})`
  font-family: var(--font-serif);
  font-size: 19px;
  font-weight: 600;
  color: var(--color-ink);
`,P=r.default.p.withConfig({displayName:"blog__NoticeBody",componentId:"sc-7f0a2b33-16"})`
  margin-top: 0.6rem;
  max-width: 46ch;
  font-size: 15px;
  line-height: 1.75;
  color: var(--color-ink-soft);
`;e.s(["BlogPage",0,p,"default",0,p])}]);