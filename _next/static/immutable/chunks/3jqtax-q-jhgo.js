(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,54632,o=>{"use strict";var e=o.i(43476),n=o.i(53070),i=o.i(38286),t=o.i(5428),r=o.i(72382),d=o.i(52531),a=o.i(97053);let l=a.default.section.withConfig({displayName:"not-found__Root",componentId:"sc-592923da-0"})`
  background: var(--color-canvas);
  padding-block: 2.9rem;

  @media (min-width: 640px) {
    padding-block: 8rem;
  }
`,c=(0,a.default)(i.Shell).withConfig({displayName:"not-found__Column",componentId:"sc-592923da-1"})`
  max-width: 42rem;
  text-align: center;
`,s=(0,a.default)(t.Eyebrow).withConfig({displayName:"not-found__CenteredEyebrow",componentId:"sc-592923da-2"})`
  justify-content: center;
`,m=a.default.h1.withConfig({displayName:"not-found__Title",componentId:"sc-592923da-3"})`
  margin-top: 1.25rem;
  font-size: clamp(2rem, 1.5rem + 2.4vw, 3rem);
  line-height: 1.2;
  color: var(--color-ink);
`,f=a.default.p.withConfig({displayName:"not-found__Body",componentId:"sc-592923da-4"})`
  margin-top: 1rem;
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-ink-soft);
`,p=a.default.ul.withConfig({displayName:"not-found__Links",componentId:"sc-592923da-5"})`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.625rem;
`,h=(0,a.default)(d.Link).withConfig({displayName:"not-found__Chip",componentId:"sc-592923da-6"})`
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
`,u=(0,a.default)(i.ButtonLink).withConfig({displayName:"not-found__Home",componentId:"sc-592923da-7"})`
  margin-top: 1.875rem;
`;o.s(["default",0,function(){let{nav:o}=(0,r.useAdvisor)();return(0,e.jsx)(l,{children:(0,e.jsxs)(c,{children:[(0,e.jsx)(s,{children:"Error 404"}),(0,e.jsx)(m,{children:"We couldn't find that page"}),(0,e.jsx)(f,{children:"The link may be out of date. Here is everything else on the site."}),(0,e.jsx)(p,{children:o.map(o=>(0,e.jsx)("li",{children:(0,e.jsx)(h,{to:o.href,children:o.label})},o.href))}),(0,e.jsxs)(u,{to:"/",size:"lg",children:["Back to Home",(0,e.jsx)(n.LuArrowRight,{size:16})]})]})})}])}]);