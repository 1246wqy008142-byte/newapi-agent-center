(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const D=document.querySelector("#app"),T=location.protocol==="file:",r=new URLSearchParams(location.search),g=r.get("embed")==="1"||r.get("mode")==="embed",v=r.get("dashboard")||"https://ai-dashboard.hkqlhnet.com",k=r.get("user")||"NewAPI 用户",_=r.get("group")||"默认分组",G=r.get("return_url")||v,p=location.pathname.includes("/newapi-agent-center")?"/newapi-agent-center":"",P=v.replace(/^https?:\/\//,"").replace(/\/$/,""),N=T||location.hostname.endsWith("github.io"),E="newapi-agent-center-v1",R=new Date().toISOString().slice(0,10),C=[{id:"all",label:"全部"},{id:"content",label:"内容运营"},{id:"sales",label:"客服销售"},{id:"office",label:"办公提效"},{id:"growth",label:"增长诊断"}],m=[{id:"writing",group:"content",title:"AI 写作工作台",audience:"自媒体、运营、商家",summary:"把主题、产品和目标人群转成小红书、公众号、短视频脚本和商品卖点。",cost:1200,status:"已上线",templates:[{id:"xiaohongshu",title:"小红书种草文案",fields:["产品/主题","目标人群","核心卖点","语气风格"],output:"生成标题、正文、标签和评论区引导。"},{id:"article",title:"公众号长文大纲",fields:["文章主题","读者画像","关键观点","期望长度"],output:"生成标题、大纲、开头、分段要点和结尾 CTA。"},{id:"video",title:"短视频脚本",fields:["视频主题","账号定位","转化目标","时长"],output:"生成开场钩子、分镜脚本、口播词和结尾引导。"}]},{id:"sales",group:"sales",title:"客服销售助手",audience:"私域商家、客服、销售",summary:"快速生成客户回复、价格异议处理、售前介绍和微信跟进话术。",cost:900,status:"已上线",templates:[{id:"reply",title:"客户问题回复",fields:["客户问题","产品信息","期望语气","是否需要促单"],output:"生成简洁可信的客服回复和下一步引导。"},{id:"objection",title:"价格异议处理",fields:["客户顾虑","产品优势","优惠规则","底线要求"],output:"生成不生硬的解释、价值重申和成交话术。"},{id:"followup",title:"微信跟进话术",fields:["客户阶段","上次沟通","本次目标","可用权益"],output:"生成三段不同强度的跟进话术。"}]},{id:"document",group:"office",title:"文件分析助手",audience:"职场、财务、法务、学生",summary:"先以文本粘贴版上线，后续接 PDF/Word/Excel 上传、解析和问答。",cost:1800,status:"二期增强",templates:[{id:"summary",title:"资料摘要",fields:["资料正文","阅读目标","输出格式","关注风险"],output:"生成重点摘要、待确认问题和行动清单。"},{id:"contract",title:"合同要点提取",fields:["合同文本","我方身份","关注条款","风险偏好"],output:"生成关键条款、风险提示和沟通建议。"}]},{id:"resume",group:"office",title:"简历面试助手",audience:"求职者、应届生、转行人群",summary:"根据岗位 JD 优化简历表达，预测面试问题并生成回答思路。",cost:1400,status:"已上线",templates:[{id:"optimize",title:"简历优化",fields:["目标岗位","简历内容","优势经历","希望突出"],output:"生成简历修改建议、项目表达和关键词补强。"},{id:"interview",title:"模拟面试题",fields:["目标岗位","公司行业","个人经历","薄弱环节"],output:"生成高频问题、回答框架和追问提醒。"}]},{id:"business",group:"growth",title:"生意诊断顾问",audience:"门店、小老板、独立创业者",summary:"输入行业、产品、客单价和目标，生成增长诊断、活动方案和内容策略。",cost:1600,status:"已上线",templates:[{id:"diagnosis",title:"门店增长诊断",fields:["行业/门店","目标客户","当前问题","预算范围"],output:"生成问题诊断、增长动作、执行节奏和指标。"},{id:"campaign",title:"促销活动方案",fields:["产品服务","活动目标","优惠空间","渠道"],output:"生成活动主题、权益组合、推广文案和复盘指标。"}]}],f={credits:Number(r.get("quota"))||86e3,usedToday:7200,selectedGroup:"all",selectedScenarioId:"writing",selectedTemplateId:"xiaohongshu",result:"",loading:!1,toast:"",formValues:{},history:[{id:"seed-1",date:"2026-07-28 20:16",scenario:"客服销售助手",template:"价格异议处理",tokens:940,title:"把“太贵了”转成价值沟通"},{id:"seed-2",date:"2026-07-27 11:42",scenario:"AI 写作工作台",template:"小红书种草文案",tokens:1260,title:"新品上线种草文案"}]};function H(){try{const t=JSON.parse(localStorage.getItem(E)||"{}");return{...f,...t,credits:r.has("quota")?Number(r.get("quota"))||f.credits:t.credits||f.credits}}catch{return f}}const e=H();function h(){localStorage.setItem(E,JSON.stringify({credits:e.credits,usedToday:e.usedToday,selectedGroup:e.selectedGroup,selectedScenarioId:e.selectedScenarioId,selectedTemplateId:e.selectedTemplateId,formValues:e.formValues,history:e.history}))}function y(){if(N){const a=decodeURIComponent(location.hash.replace(/^#/,""));if(a.startsWith("/"))return a}const t=location.pathname.startsWith(p)?location.pathname.slice(p.length)||"/":location.pathname;return t==="/"?"/":t}e.route=y();const q=[["/","⌂","应用"],["/workspace","✦","工作台"],["/history","▤","历史"],["/billing","◷","额度"],["/integration","↗","嵌入"]];function L(t){if(T)location.hash=t;else if(N){const a=location.search||"",s=p?`${p}/`:"/";history.pushState({},"",`${s}${a}#${t}`)}else{const a=location.search||"";history.pushState({},"",`${p}${t}${a}`)}e.route=t,window.scrollTo({top:0,behavior:"smooth"}),c()}window.addEventListener("popstate",()=>{e.route=y(),c()});window.addEventListener("hashchange",()=>{e.route=y(),c()});function w(){return m.find(t=>t.id===e.selectedScenarioId)||m[0]}function O(){const t=w();return t.templates.find(a=>a.id===e.selectedTemplateId)||t.templates[0]}function U(){return e.selectedGroup==="all"?m:m.filter(t=>t.group===e.selectedGroup)}function l(t){return new Intl.NumberFormat("zh-CN").format(t)}function F(t){e.toast=t,c(),setTimeout(()=>{e.toast="",c()},1800)}function V(t){const a=m.find(s=>s.id===t);a&&(e.selectedScenarioId=a.id,e.selectedTemplateId=a.templates[0].id,h(),L("/workspace"))}function W(t){e.selectedTemplateId=t,e.result="",h(),c()}function b(t){return`<div class="app-shell ${g?"embedded":"module-mode"}">
    ${g?"":j()}
    <div class="dashboard-main">
      ${B()}
      <div class="layout">
        ${g?"":J()}
        ${t}
      </div>
    </div>
    ${M()}
    ${e.toast?`<div class="toast">${e.toast}</div>`:""}
  </div>`}function j(){return`<div class="dashboard-topbar">
    <button class="brand-button" data-nav="/" aria-label="返回应用中心首页">
      <span class="brand-mark">AI</span><strong>千禄匯 AI</strong>
    </button>
    <nav class="top-links">${[["首页","/"],["控制台","/workspace"],["模型广场","/"],["文档","/integration"]].map(([a,s])=>`<button class="${a==="首页"&&e.route==="/"||s===e.route&&a!=="模型广场"?"active":""}" data-nav="${s}">${a}</button>`).join("")}</nav>
    <div class="top-tools" aria-label="平台工具">
      <button title="语言">文</button>
      <button title="主题">◐</button>
      <button title="通知">○</button>
      <span>${d(k).slice(0,1).toUpperCase()||"N"}</span>
    </div>
  </div>`}function B(){return`<header class="header">
    <div>
      <p class="eyebrow">AI Dashboard Add-on · ${R}</p>
      <h1>AI 应用中心</h1>
      <p class="header-subtitle">复用 ${P} 的登录、额度、模型和调用日志。</p>
    </div>
    <div class="header-actions">
      <span class="quota-pill">剩余 ${l(e.credits)}</span>
      <button class="secondary-action" data-open-dashboard>返回主平台</button>
      <button class="secondary-action" data-nav="/integration">嵌入配置</button>
    </div>
  </header>`}function J(){return`<nav class="side-nav">${q.map(([t,a,s])=>`
    <button class="${e.route===t?"active":""}" data-nav="${t}">
      <span>${a}</span>${s}
    </button>`).join("")}</nav>`}function M(){return g?"":`<nav class="mobile-nav">${q.map(([t,a,s])=>`
    <button class="${e.route===t?"active":""}" data-nav="${t}">
      <span>${a}</span><small>${s}</small>
    </button>`).join("")}</nav>`}function x(){return`<section class="stat-grid">
    <article><span>可用场景</span><strong>${m.filter(a=>a.status==="已上线").length}</strong></article>
    <article><span>今日消耗</span><strong>${l(e.usedToday)}</strong></article>
    <article><span>平均单次</span><strong>1.2k</strong></article>
    <article><span>复用能力</span><strong>登录 / 额度 / 模型</strong></article>
  </section>`}function z(){return`<section class="bridge-panel">
    <div>
      <p class="eyebrow">主平台交互模拟</p>
      <h2>作为 ${P} 的增值服务入口运行</h2>
      <p>主平台负责登录、充值、模型路由和审计；本模块只负责场景模板、调用编排和结果沉淀。嵌入时可通过 URL 参数传入 user、quota、group、return_url。</p>
    </div>
    <div class="bridge-flow">
      <span>Dashboard 菜单</span><b>→</b><span>AI 应用中心</span><b>→</b><span>NewAPI 代理</span><b>→</b><span>调用日志</span>
    </div>
  </section>`}function I(){return g?b(`<main class="content">
      ${z()}
      ${S()}
    </main>`):`<div class="app-shell landing-shell">
    ${j()}
    <main class="landing-main">
      <section class="hero-section">
        <div class="hero-copy">
          <span class="foundation-pill"><i></i>人工智能应用基座</span>
          <h1>统一 API 网关，服务于<br><em>海量 AI 模型</em></h1>
          <p>通过统一、标准的接口协议接入海量模型。承载 AI 应用，高效管理数字资产，连接未来。</p>
          <div class="hero-actions">
            <button class="hero-primary" data-nav="/workspace">前往仪表板 <span>→</span></button>
            <button class="hero-secondary" data-nav="/integration">嵌入文档</button>
          </div>
        </div>
        <div class="hero-console" aria-label="AI 应用中心概览">
          <div class="console-head"><span></span><span></span><span></span><strong>AI 应用中心</strong></div>
          ${x()}
          <div class="console-flow">
            <span>登录态</span><b>→</b><span>场景模板</span><b>→</b><span>NewAPI</span><b>→</b><span>调用日志</span>
          </div>
        </div>
      </section>
      ${S()}
    </main>
    ${e.toast?`<div class="toast">${e.toast}</div>`:""}
  </div>`}function S(){return`<section class="intro-panel">
      <div>
        <p class="eyebrow">增值模块</p>
        <h2>把 token 平台包装成用户能直接使用的 Agent 场景</h2>
        <p>用户从现有 dashboard 进入这里，选择任务、填写表单、生成结果；生成前展示预计消耗，生成后回写调用日志和额度流水。</p>
      </div>
      <button class="primary-action" data-nav="/workspace">打开工作台</button>
    </section>
    ${x()}
    <section class="toolbar">
      ${C.map(t=>`<button class="${e.selectedGroup===t.id?"active":""}" data-group="${t.id}">${t.label}</button>`).join("")}
    </section>
    <section class="scenario-grid">${U().map(K).join("")}</section>`}function K(t){return`<article class="scenario-card">
    <div class="card-top">
      <span class="status">${t.status}</span>
      <span class="cost">约 ${l(t.cost)} tokens</span>
    </div>
    <h3>${t.title}</h3>
    <p>${t.summary}</p>
    <div class="card-meta">${t.audience}</div>
    <div class="template-list">${t.templates.slice(0,3).map(a=>`<span>${a.title}</span>`).join("")}</div>
    <button class="primary-action scenario-action" data-scenario="${t.id}">使用场景</button>
  </article>`}function Q(){const t=w(),a=O();return b(`<main class="content workspace">
    <section class="work-head">
      <div>
        <p class="eyebrow">${t.audience}</p>
        <h2>${t.title}</h2>
        <p>${t.summary}</p>
      </div>
      <div class="estimate">
        <span>预计从主平台扣减</span>
        <strong>${l(t.cost)}</strong>
      </div>
    </section>
    <section class="work-grid">
      <aside class="template-panel">
        <h3>选择模板</h3>
        ${t.templates.map(s=>`<button class="${s.id===a.id?"active":""}" data-template="${s.id}">
          <strong>${s.title}</strong><span>${s.output}</span>
        </button>`).join("")}
      </aside>
      <section class="runner-panel">
        <div class="sync-strip"><span>用户：${d(k)}</span><span>模型分组：${d(_)}</span><span>日志：生成后同步</span></div>
        <form id="agent-form">
          <div class="form-head">
            <h3>${a.title}</h3>
            <span>${a.output}</span>
          </div>
          ${a.fields.map((s,o)=>X(s,o)).join("")}
          <div class="form-actions">
            <button class="primary-action" ${e.loading?"disabled":""}>${e.loading?"生成中...":"生成方案"}</button>
            <button class="secondary-action" type="button" data-clear>清空</button>
          </div>
        </form>
      </section>
      <section class="result-panel">
        <div class="result-head">
          <h3>生成结果</h3>
          <button class="text-button" data-copy ${e.result?"":"disabled"}>复制</button>
        </div>
        <div class="result-box">${e.result?Y(e.result):'<span class="empty">填写左侧内容后生成。未接入服务端时会使用本地演示结果。</span>'}</div>
      </section>
    </section>
  </main>`)}function X(t,a){const s=`${e.selectedScenarioId}:${e.selectedTemplateId}:${a}`,o=e.formValues[s]||"";return t.includes("正文")||t.includes("简历")||t.includes("合同")||t.includes("资料")?`<label class="field"><span>${t}</span><textarea name="${s}" placeholder="请输入${t}">${d(o)}</textarea></label>`:`<label class="field"><span>${t}</span><input name="${s}" value="${d(o)}" placeholder="请输入${t}"></label>`}function Y(t){return d(t).replace(/\n/g,"<br>")}function d(t){return String(t).replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[a])}function Z(){return r.get("agent_endpoint")?r.get("agent_endpoint"):window.AGENT_AI_ENDPOINT?window.AGENT_AI_ENDPOINT:""}async function tt(t){const a=Z();if(!a)return null;const s=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!s.ok)throw new Error(`Agent endpoint failed: ${s.status}`);const o=await s.json();return o.text||o.output_text||o.message||null}function A(t){const a=t.fields.filter(Boolean).join(" / ")||"用户输入信息";return[`【${t.templateTitle}】`,"","1. 任务判断",`围绕「${a}」优先输出可直接复制使用的内容，减少用户反复调 prompt 的成本。`,"","2. 推荐结果","建议采用“明确对象 + 关键卖点 + 行动引导”的结构，先给用户一个可用版本，再提供 2-3 个可继续优化的方向。","","3. 可继续优化","可以让用户选择语气、长度、平台风格、是否加强成交感，并在每次生成后记录 token 消耗和结果历史。","","4. 平台落点","本次结果适合作为增值场景的一次调用记录，后续可沉淀为模板、套餐或行业专属 Agent。"].join(`
`)}async function et(t){if(e.loading)return;const a=new FormData(t);for(const[u,$]of a.entries())e.formValues[u]=$.toString();const s=w(),o=O(),n=o.fields.map((u,$)=>a.get(`${s.id}:${o.id}:${$}`)?.toString().trim()||"");e.loading=!0,e.result="",h(),c();const i={scenarioId:s.id,scenarioTitle:s.title,templateId:o.id,templateTitle:o.title,fields:n,system:"你是 NewAPI token 平台的场景 Agent。请把用户输入转成可直接使用的业务结果，输出中文，结构清晰，适合网页应用展示。"};try{e.result=await tt(i)||A(i)}catch{e.result=A(i)}e.loading=!1,e.credits=Math.max(0,e.credits-s.cost),e.usedToday+=s.cost,e.history.unshift({id:`run-${Date.now()}`,date:new Date().toLocaleString("zh-CN",{hour12:!1}),scenario:s.title,template:o.title,tokens:s.cost,title:n.find(Boolean)||o.title}),h(),c()}function at(){return b(`<main class="content">
    <section class="page-title">
      <p class="eyebrow">Usage History</p>
      <h2>生成历史</h2>
      <p>第一期先把历史保存在前端演示；生产环境建议写入 PostgreSQL，关联主平台用户 ID、模型、场景和 token 消耗。</p>
    </section>
    <section class="history-list">${e.history.map(t=>`
      <article>
        <div><strong>${d(t.title)}</strong><span>${t.scenario} · ${t.template}</span></div>
        <div><b>${l(t.tokens)}</b><small>${t.date}</small></div>
      </article>`).join("")}</section>
  </main>`)}function st(){return b(`<main class="content">
    <section class="page-title">
      <p class="eyebrow">复用主平台能力</p>
      <h2>额度与计费</h2>
      <p>这里不重新做充值和订单，只展示必要额度，并把购买动作跳回 ${v.replace(/^https?:\/\//,"")}。</p>
    </section>
    <section class="billing-grid">
      <article><span>当前剩余额度</span><strong>${l(e.credits)}</strong></article>
      <article><span>今日场景消耗</span><strong>${l(e.usedToday)}</strong></article>
      <article><span>计费方式</span><strong>场景倍率 + 模型倍率</strong></article>
    </section>
    <section class="reuse-panel">
      <h3>建议复用项</h3>
      <div><span>用户登录</span><b>从 dashboard SSO 传入 user_id / session</b></div>
      <div><span>余额充值</span><b>跳回主平台套餐中心</b></div>
      <div><span>模型路由</span><b>继续走 NewAPI 渠道和分组</b></div>
      <div><span>消耗日志</span><b>写入主平台调用日志或同步任务</b></div>
    </section>
    <button class="primary-action" data-open-dashboard>返回主平台充值 / 查看明细</button>
  </main>`)}function nt(){const t=location.origin==="null"?"https://agent.yourdomain.com":location.origin,s=`${t}${p||""}/?embed=1&user={{user_id}}&quota={{quota}}&group={{group}}&return_url=${encodeURIComponent(v)}`;return b(`<main class="content">
    <section class="page-title">
      <p class="eyebrow">独立地址 + 可嵌入</p>
      <h2>接入 ai-dashboard.hkqlhnet.com</h2>
      <p>推荐在主平台左侧菜单新增“AI 应用中心”：先 iframe 嵌入，后端再补 SSO 校验和 /api/agent 代理。</p>
    </section>
    <section class="integration-grid">
      <article>
        <h3>独立页面</h3>
        <p>部署到独立域名，适合外部推广、H5 分享和用户收藏。</p>
        <code>${t}</code>
      </article>
      <article>
        <h3>iframe 嵌入</h3>
        <p>嵌入主平台的增值模块，使用 embed 模式隐藏外层导航，并传入用户与额度。</p>
        <code>&lt;iframe src="${s}" style="width:100%;height:100%;border:0" /&gt;</code>
      </article>
      <article>
        <h3>后端接口</h3>
        <p>前端请求 /api/agent，服务端再调用 NewAPI，避免浏览器暴露 token。</p>
        <code>POST /api/agent</code>
      </article>
    </section>
    <section class="integration-grid compact">
      <article>
        <h3>在线预览</h3>
        <p>用于直接发给其他人体验，默认显示模拟 dashboard 容器。</p>
        <code>https://1246wqy008142-byte.github.io/newapi-agent-center/</code>
      </article>
      <article>
        <h3>嵌入预览</h3>
        <p>用于验证 iframe 状态，导航会自动隐藏。</p>
        <code>https://1246wqy008142-byte.github.io/newapi-agent-center/?embed=1&user=demo&quota=86000&group=default</code>
      </article>
      <article>
        <h3>安全说明</h3>
        <p>页面只加载同源构建资源，不在前端保存 NewAPI token；生产调用走服务端代理。</p>
        <code>no frontend token / no mixed content</code>
      </article>
    </section>
    <section class="roadmap">
      <h3>落地路线</h3>
      <ol>
        <li>一期：iframe 菜单、场景模板、额度展示、NewAPI 代理、结果历史。</li>
        <li>二期：SSO 签名校验、真实额度扣减、调用日志回写、后台模板配置。</li>
        <li>三期：文件上传解析、行业 Agent、套餐权益和场景数据看板。</li>
      </ol>
    </section>
  </main>`)}function ot(){return({"/":I,"/workspace":Q,"/history":at,"/billing":st,"/integration":nt}[e.route]||I)()}function it(){document.querySelectorAll("[data-nav]").forEach(t=>t.addEventListener("click",()=>L(t.dataset.nav))),document.querySelectorAll("[data-group]").forEach(t=>t.addEventListener("click",()=>{e.selectedGroup=t.dataset.group,h(),c()})),document.querySelectorAll("[data-scenario]").forEach(t=>t.addEventListener("click",()=>V(t.dataset.scenario))),document.querySelectorAll("[data-template]").forEach(t=>t.addEventListener("click",()=>W(t.dataset.template))),document.querySelector("#agent-form")?.addEventListener("submit",t=>{t.preventDefault(),et(t.currentTarget)}),document.querySelector("[data-clear]")?.addEventListener("click",()=>{Object.keys(e.formValues).forEach(t=>{t.startsWith(`${e.selectedScenarioId}:${e.selectedTemplateId}:`)&&delete e.formValues[t]}),e.result="",h(),c()}),document.querySelector("[data-copy]")?.addEventListener("click",async()=>{await navigator.clipboard.writeText(e.result),F("结果已复制")}),document.querySelectorAll("[data-open-dashboard]").forEach(t=>t.addEventListener("click",()=>{window.open(G,"_blank","noopener,noreferrer")}))}function c(){D.innerHTML=ot(),it()}c();
