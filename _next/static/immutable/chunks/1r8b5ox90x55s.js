(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67204,e=>{e.v({amc:"commission-table-module__XJdCgG__amc",amcHead:"commission-table-module__XJdCgG__amcHead",body:"commission-table-module__XJdCgG__body",empty:"commission-table-module__XJdCgG__empty",emptyTitle:"commission-table-module__XJdCgG__emptyTitle",groupRow:"commission-table-module__XJdCgG__groupRow",groupStart:"commission-table-module__XJdCgG__groupStart",hidden:"commission-table-module__XJdCgG__hidden",nil:"commission-table-module__XJdCgG__nil",note:"commission-table-module__XJdCgG__note",noteMark:"commission-table-module__XJdCgG__noteMark",notes:"commission-table-module__XJdCgG__notes",pending:"commission-table-module__XJdCgG__pending",period:"commission-table-module__XJdCgG__period",rate:"commission-table-module__XJdCgG__rate",scroll:"commission-table-module__XJdCgG__scroll",subRow:"commission-table-module__XJdCgG__subRow",table:"commission-table-module__XJdCgG__table",unit:"commission-table-module__XJdCgG__unit",wrap:"commission-table-module__XJdCgG__wrap"})},82344,e=>{"use strict";var t=e.i(43476),i=e.i(52531),o=e.i(28478),a=e.i(72382),n=e.i(69236),s=e.i(62359);function r(e){let{compliance:t,contact:i,advisor:o}=e;return{officer:t.grievanceOfficer||o.name,email:t.grievanceEmail||i.email,phone:t.grievancePhone||i.phone,tat:t.grievanceTat||"3 working days"}}function l(e){var t;let i;return{entity:e.legal.entityName||e.brand.name,jurisdiction:e.legal.jurisdiction||(t=e.contact.officeCity,(i=t.split(",")[0]?.trim())&&!/^\d/.test(i)?i:"")}}let d={privacy:"What this site collects when you get in touch, why, and what you can ask us to do about it.",terms:"The terms on which this website is made available to you.",disclaimer:"What we are registered to do, how we are paid, and the limits of everything published here.",disclosure:"What we earn when you invest through us, who pays it, and what it depends on."};var c=e.i(71645),h=e.i(67204);let m=[{key:"equity",label:"Equity"},{key:"hybrid",label:"Hybrid"},{key:"debt",label:"Debt"},{key:"liquid",label:"Liquid"}];function u({value:e}){let i=e.trim();return i&&"-"!==i&&"—"!==i?/^[\d.]+$/.test(i)?(0,t.jsxs)(t.Fragment,{children:[i,(0,t.jsx)("span",{className:h.default.unit,children:"%"})]}):(0,t.jsx)(t.Fragment,{children:i}):(0,t.jsx)("span",{className:h.default.nil,children:"—"})}function p({rows:e,period:i,notes:o}){let a=e.length>0&&e.every(e=>m.every(t=>{let i=e[t.key];return!i?.min?.trim()&&!i?.max?.trim()}));return(0,t.jsxs)(t.Fragment,{children:[i.trim()&&(0,t.jsxs)("span",{className:h.default.period,children:["Rates for ",i]}),a&&(0,t.jsxs)("p",{className:h.default.pending,children:[(0,t.jsx)("strong",{children:"Rates for this period are still being confirmed."})," The fund houses below are the ones we are empanelled with; each rate is published here as soon as that AMC’s commission communication is received. Ask us in the meantime and we will send you the current rates directly."]}),(0,t.jsx)("div",{className:h.default.wrap,children:0===e.length?(0,t.jsxs)("p",{className:h.default.empty,children:[(0,t.jsx)("span",{className:h.default.emptyTitle,children:"Rates are not published yet"}),"The trail commission rates for this period are being compiled from the communications received from each fund house, and will appear here once they are confirmed. Ask us for them in the meantime and we will send them to you directly."]}):(0,t.jsx)("div",{className:h.default.scroll,children:(0,t.jsxs)("table",{className:h.default.table,children:[(0,t.jsx)("caption",{children:"Trail commission on an annualised basis, expressed as a percentage per annum of the value invested. Ranges, because the rate varies by scheme within each category."}),(0,t.jsxs)("thead",{children:[(0,t.jsxs)("tr",{className:h.default.groupRow,children:[(0,t.jsx)("th",{scope:"col",className:h.default.amcHead,children:"Fund house"}),m.map(e=>(0,t.jsx)("th",{scope:"colgroup",colSpan:2,className:h.default.groupStart,children:e.label},e.key))]}),(0,t.jsxs)("tr",{className:h.default.subRow,children:[(0,t.jsx)("th",{scope:"col",className:h.default.amcHead,children:(0,t.jsx)("span",{className:h.default.hidden,children:"AMC"})}),m.map(e=>(0,t.jsxs)(c.Fragment,{children:[(0,t.jsx)("th",{scope:"col",className:h.default.groupStart,children:"Min"}),(0,t.jsx)("th",{scope:"col",children:"Max"})]},e.key))]})]}),(0,t.jsx)("tbody",{className:h.default.body,children:e.map(e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"row",className:h.default.amc,children:e.amc}),m.map(i=>{let o=e[i.key];return(0,t.jsxs)(c.Fragment,{children:[(0,t.jsx)("td",{className:`${h.default.rate} ${h.default.groupStart}`,children:(0,t.jsx)(u,{value:o?.min??""})}),(0,t.jsx)("td",{className:h.default.rate,children:(0,t.jsx)(u,{value:o?.max??""})})]},i.key)})]},e.amc))})]})})}),o.length>0&&(0,t.jsx)("ul",{className:h.default.notes,children:o.map((e,i)=>(0,t.jsxs)("li",{className:h.default.note,children:[(0,t.jsx)("span",{"aria-hidden":!0,className:h.default.noteMark}),(0,t.jsx)("span",{children:e})]},i))})]})}var g=e.i(97053),f=e.i(38286);let y=g.default.section.withConfig({displayName:"legal__Root",componentId:"sc-1bbcd625-0"})`
  background: var(--color-canvas);
  padding-block: 1.9rem;

  @media (min-width: 640px) {
    padding-block: 2.25rem;
  }
`,b=g.default.div.withConfig({displayName:"legal__Layout",componentId:"sc-1bbcd625-1"})`
  display: grid;
  gap: 2.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 3.5rem;
  }
`,w=g.default.aside.withConfig({displayName:"legal__Rail",componentId:"sc-1bbcd625-2"})`
  min-width: 0;

  @media (min-width: 1024px) {
    grid-column: span 4 / span 4;
    position: sticky;
    top: 7rem;
    align-self: start;
  }
`,v=g.default.p.withConfig({displayName:"legal__RailLabel",componentId:"sc-1bbcd625-3"})`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-ink-faint);
`,_=g.default.ul.withConfig({displayName:"legal__RailList",componentId:"sc-1bbcd625-4"})`
  margin-top: 1rem;
  border-left: 1px solid var(--color-line);
`,x=g.default.a.withConfig({displayName:"legal__RailLink",componentId:"sc-1bbcd625-5"})`
  display: block;
  margin-left: -1px;
  border-left: 2px solid transparent;
  padding: 0.3rem 0 0.3rem 1rem;
  font-size: 13.5px;
  line-height: 1.35;
  color: var(--color-ink-soft);
  transition: color 0.25s, border-color 0.25s;

  &:hover {
    border-left-color: var(--color-gold-deep);
    color: var(--color-ink);
  }
`,k=g.default.div.withConfig({displayName:"legal__RailBlock",componentId:"sc-1bbcd625-6"})`
  margin-top: 2rem;
  border-top: 1px solid var(--color-line);
  padding-top: 1.5rem;
`,j=(0,g.default)(i.Link).withConfig({displayName:"legal__RailItem",componentId:"sc-1bbcd625-7"})`
  display: block;
  padding: 0.3rem 0;
  font-size: 13.5px;
  color: var(--color-ink-soft);
  transition: color 0.25s;

  &:hover { color: var(--color-ink); }
`,C=g.default.div.withConfig({displayName:"legal__Doc",componentId:"sc-1bbcd625-8"})`
  min-width: 0;

  @media (min-width: 1024px) {
    grid-column: span 8 / span 8;
  }
`,N=g.default.p.withConfig({displayName:"legal__Updated",componentId:"sc-1bbcd625-9"})`
  font-size: 12.5px;
  color: var(--color-ink-faint);
`,I=g.default.div.withConfig({displayName:"legal__Sections",componentId:"sc-1bbcd625-10"})`
  margin-top: 2rem;

  > * + * {
    margin-top: 1.875rem;
  }
`;function T(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}let $=g.default.section.withConfig({displayName:"legal__Section",componentId:"sc-1bbcd625-11"})`
  /* clears the sticky header when the rail links in */
  scroll-margin-top: 7rem;
`,W=g.default.h2.withConfig({displayName:"legal__Heading",componentId:"sc-1bbcd625-12"})`
  font-family: var(--font-serif);
  font-size: 19px;
  font-weight: 600;
  line-height: 1.35;
  color: var(--color-ink);

  @media (min-width: 640px) {
    font-size: 21px;
  }
`,A=g.default.p.withConfig({displayName:"legal__Paragraph",componentId:"sc-1bbcd625-13"})`
  margin-top: 0.875rem;
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--color-ink-soft);
`,S=g.default.ul.withConfig({displayName:"legal__Points",componentId:"sc-1bbcd625-14"})`
  margin-top: 1rem;

  > li + li {
    margin-top: 0.625rem;
  }
`,G=g.default.li.withConfig({displayName:"legal__Point",componentId:"sc-1bbcd625-15"})`
  display: flex;
  gap: 0.75rem;
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--color-ink-soft);
`,R=g.default.span.withConfig({displayName:"legal__Bullet",componentId:"sc-1bbcd625-16"})`
  margin-top: 9px;
  height: 0.375rem;
  width: 0.375rem;
  flex-shrink: 0;
  border-radius: 999px;
  background: var(--color-gold);
`,L=g.default.span.withConfig({displayName:"legal__PointText",componentId:"sc-1bbcd625-17"})`
  min-width: 0;
  overflow-wrap: break-word;
`;e.s(["default",0,function({docKey:e}){let i,c,h=(0,a.useConfig)(),{PageHeader:m}=(0,n.useTemplate)(),u=(i="privacy"===e?function(e){let{entity:t}=l(e),i=r(e),{contact:o,brand:a}=e;return[{heading:"Who this notice is from",body:[`${t} is an AMFI-registered mutual fund distributor (ARN ${a.arn}). This notice explains what personal information this website collects, why it is collected, and what you can ask us to do with it.`,`Questions about anything below can go to ${o.email}.`]},{heading:"What we collect",body:["We only ask for what we need to reply to you and, if you become a client, to serve you."],list:["Information you type into a form on this site: your name, mobile number, email address, the goal you selected and any message you write.","Basic technical information your browser sends with every request, such as the page you submitted from. We store an irreversible hash of your IP address to stop automated abuse of the form, never the address itself.","If you become a client, the documents and details required for KYC and for transacting on your behalf. Those are collected separately, not through this website."]},{heading:"Why we use it",list:["To respond to your enquiry and arrange a conversation.","To provide mutual fund distribution services if you choose to invest through us.","To meet record-keeping obligations that apply to registered distributors."],body:["We do not sell your information, and we do not share it with anyone for their own marketing."]},{heading:"Who else sees it",body:["When you invest, some of your information necessarily reaches the parties who process the transaction. That typically includes the asset management companies whose schemes you invest in, their registrars and transfer agents, the transaction platform used to place orders, and the KYC registration agency that holds your KYC record.","Each of these organisations is regulated in its own right and handles your information under its own obligations. Beyond them, we disclose information only where the law requires it."]},{heading:"How long we keep it",body:["Enquiries that do not become client relationships are kept only as long as they are useful for following up, and are then deleted.","Where you become a client, records are retained for the period that distributors are required to retain them, even after a relationship ends."]},{heading:"Your choices",list:["You can ask what information we hold about you and ask for a copy.","You can ask us to correct anything inaccurate.","You can withdraw consent and ask us to delete your information, except where we are required to keep it.","You can ask us to stop contacting you at any time. One message is enough."],body:[`Write to ${o.email} and we will act on it.`]},{heading:"Cookies and measurement",body:["This site does not use advertising cookies or cross-site tracking. Any measurement is limited to understanding which pages are read, and does not identify you personally."]},{heading:"Grievances",body:[`If something about the handling of your information is not right, contact ${i.officer} at ${i.email}${i.phone?` or ${i.phone}`:""}. We aim to acknowledge and respond within ${i.tat}.`]},{heading:"Changes to this notice",body:["If this notice changes materially, the updated version will be published on this page. Please check back from time to time."]}]}(h):"terms"===e?function(e){let{entity:t,jurisdiction:i}=l(e),{contact:o}=e;return[{heading:"What this site is",body:[`This website is published by ${t} to describe its mutual fund distribution services and to let you get in touch. By using it, you agree to what follows.`]},{heading:"Information, not advice",body:["Nothing on this site is investment advice, a recommendation, or an offer to buy or sell any security. The content is general in nature and takes no account of your particular circumstances, needs or objectives.","We act as a distributor of mutual fund schemes, not as an investment adviser. Before investing, please read the scheme information document and all other scheme-related documents, and take advice suited to your own situation."]},{heading:"Calculators and projections",body:["The calculators on this site are illustrations. They compound the numbers you enter at the rate you choose; they do not predict anything. Actual returns depend on market conditions and will differ, sometimes substantially.","Where fund names, returns or ratings appear in a comparison or screening tool, they are sample data for demonstration and are not live market figures. Do not rely on them to choose an investment."]},{heading:"Accuracy",body:["We take care to keep this site accurate and current, but we do not warrant that it is free of errors or that it is complete. Content may change without notice."]},{heading:"Links to other sites",body:["Some links lead to websites operated by others: fund houses, registrars, transaction platforms and regulators. We do not control those sites and are not responsible for their content, their security, or how they handle your information."]},{heading:"Intellectual property",body:[`The text, design and images on this site belong to ${t} or are used with permission. Please do not reproduce them without asking.`]},{heading:"Limitation of liability",body:["To the extent the law allows, we are not liable for any loss arising from your use of this site or from any decision taken on the basis of its general content. This does not limit any liability that cannot lawfully be limited, and it does not affect the obligations we owe you as your distributor if you become a client."]},{heading:"Governing law",body:[i?`These terms are governed by the laws of India, and the courts at ${i} have exclusive jurisdiction over any dispute.`:"These terms are governed by the laws of India, and the courts at the location of our registered office have exclusive jurisdiction over any dispute."]},{heading:"Contact",body:[`Questions about these terms can go to ${o.email}.`]}]}(h):"disclosure"===e?function(e){let{entity:t}=l(e),{brand:i}=e,o=r(e);return[{heading:"How we are paid",body:[`${t} is an AMFI-registered mutual fund distributor (${i.arn}). We do not charge you an advisory fee, and we do not deduct anything from the amount you invest. We are paid a commission by the asset management company whose scheme you invest in.`,"That commission is paid out of the scheme’s expense ratio, a cost already built into the scheme you hold, and reflected in its NAV. It is not an additional charge levied on top of your investment."]},{heading:"Trail, not upfront",body:["Commission is earned on a trail basis: a small annualised percentage of the value of your investment, for as long as you stay invested. There is no upfront brokerage, so nothing is earned simply by moving you into a scheme.","The practical consequence is worth stating plainly: we are paid more when your investment grows and stays invested, and paid nothing further if you redeem. Where our interest and yours could still diverge, we would rather you knew about it than trusted us not to notice."]},{heading:"What the rates depend on",list:["The scheme category. Equity schemes typically carry a higher trail than hybrid, debt or liquid schemes.","The individual scheme within a category, which is why each figure is published as a range.","The city an investment is sourced from. Rates for schemes sourced beyond the top thirty cities (B-30) can differ from those in the top thirty (T-30).","The AMC’s own commission structure, which each fund house revises from time to time."]},{heading:"Choosing a scheme",body:["Differences in commission between schemes are not a reason to recommend one over another, and are not how any recommendation here is arrived at. If you would prefer to invest without a distributor, every scheme mentioned on this site is also available as a direct plan, which carries a lower expense ratio and no commission."]},{heading:"Questions about this disclosure",body:[`Write to ${o.officer} at ${o.email||"the address on the contact page"} and we will respond within ${o.tat}. You can also raise a complaint with AMFI at ${e.compliance.amfiUrl} or through SEBI SCORES at ${e.compliance.sebiScoresUrl}.`]}]}(h):function(e){let{brand:t,advisor:i,compliance:o}=e,a=r(e);return[{heading:"Statutory disclaimer",body:[e.disclaimer]},{heading:"Our registration",list:[`AMFI Registration Number (ARN): ${t.arn}`,`EUIN: ${t.euin}`,`Distributor: ${i.name}, ${t.name}`],body:["We are registered with the Association of Mutual Funds in India as a mutual fund distributor. We are not registered as an investment adviser, and we do not provide investment advisory services for a fee."]},{heading:"How we are paid",body:["We do not charge you an advisory fee. We are paid a commission by the asset management company whose scheme you invest in, which is built into the expense ratio of regular plans. The commission varies between schemes and categories.","Direct plans of the same schemes are available without this commission, and without our services. You are entitled to choose either. We will tell you what we earn on anything we recommend if you ask, and we would rather you did ask."]},{heading:"No guaranteed returns",body:["Mutual funds do not offer guaranteed or assured returns. Past performance does not indicate future performance. The value of your investment can fall as well as rise, and you may get back less than you invested.","Any figure produced by a calculator on this site is an arithmetic illustration of the assumptions you entered. It is not a forecast, a promise, or a commitment."]},{heading:"Illustrative content",body:["Where this site shows fund names, returns, ratings or portfolio examples in a comparison or screening tool, that data is sample data for demonstration. It is not live market data and must not be used to select an investment. Please refer to the current scheme documents and the fund house’s own disclosures."]},{heading:"Grievance redressal",body:[`If you have a complaint, please write to ${a.officer} at ${a.email}${a.phone?` or call ${a.phone}`:""}. We aim to respond within ${a.tat}.`,"If your complaint is not resolved to your satisfaction, you may escalate it to the asset management company concerned, to the Association of Mutual Funds in India, or through the Securities and Exchange Board of India’s SCORES platform."],list:[o.amfiUrl?`AMFI: ${o.amfiUrl}`:"",o.sebiScoresUrl?`SEBI SCORES: ${o.sebiScoresUrl}`:""].filter(Boolean)}]}(h),(c="privacy"===e?h.legal.extraPrivacy:"terms"===e?h.legal.extraTerms:"").trim()&&i.push({heading:"Additional terms",body:c.split(/\n{2,}/).map(e=>e.trim()).filter(Boolean)}),{key:e,title:s.LEGAL_LABELS[e],updated:h.legal.effectiveDate.trim(),intro:d[e],sections:i}),g=s.LEGAL_KEYS.filter(t=>t!==e);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m,{eyebrow:"Legal",title:u.title,lead:u.intro}),(0,t.jsx)(y,{children:(0,t.jsx)(f.Shell,{children:(0,t.jsxs)(b,{children:[(0,t.jsxs)(w,{children:[u.updated&&(0,t.jsxs)(N,{children:["Last updated ",u.updated]}),u.sections.length>1&&(0,t.jsxs)("nav",{"aria-label":"On this page",style:{marginTop:"1.5rem"},children:[(0,t.jsx)(v,{children:"On this page"}),(0,t.jsx)(_,{children:u.sections.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(x,{href:`#${T(e.heading)}`,children:e.heading})},e.heading))})]}),(0,t.jsxs)(k,{children:[(0,t.jsx)(v,{children:"See also"}),(0,t.jsxs)("ul",{style:{marginTop:"1rem"},children:[g.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(j,{to:s.LEGAL_PATHS[e],children:s.LEGAL_LABELS[e]})},e)),(0,t.jsx)("li",{children:(0,t.jsx)(j,{to:"/contact",children:"Contact"})})]})]})]}),(0,t.jsxs)(C,{children:["disclosure"===e&&(0,t.jsx)(p,{rows:h.commissionDisclosure.rows,period:h.commissionDisclosure.period,notes:h.commissionDisclosure.notes}),(0,t.jsx)(I,{children:u.sections.map((e,i)=>(0,t.jsx)(o.Reveal,{delay:40*Math.min(i,6),children:(0,t.jsxs)($,{id:T(e.heading),children:[(0,t.jsx)(W,{children:e.heading}),e.body?.map((e,i)=>(0,t.jsx)(A,{children:e},i)),e.list&&e.list.length>0&&(0,t.jsx)(S,{children:e.list.map((e,i)=>(0,t.jsxs)(G,{children:[(0,t.jsx)(R,{"aria-hidden":!0}),(0,t.jsx)(L,{children:e})]},i))})]})},e.heading))})]})]})})})]})}],82344)}]);