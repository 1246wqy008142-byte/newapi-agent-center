(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const E=document.querySelector("#app"),S=location.protocol==="file:",b=new URLSearchParams(location.search),g=b.get("embed")==="1"||b.get("mode")==="embed",I="newapi-agent-center-v1",N=new Date().toISOString().slice(0,10),P=[{id:"all",label:"全部"},{id:"content",label:"内容运营"},{id:"sales",label:"客服销售"},{id:"office",label:"办公提效"},{id:"growth",label:"增长诊断"}],d=[{id:"writing",group:"content",title:"AI 写作工作台",audience:"自媒体、运营、商家",summary:"把主题、产品和目标人群转成小红书、公众号、短视频脚本和商品卖点。",cost:1200,status:"已上线",templates:[{id:"xiaohongshu",title:"小红书种草文案",fields:["产品/主题","目标人群","核心卖点","语气风格"],output:"生成标题、正文、标签和评论区引导。"},{id:"article",title:"公众号长文大纲",fields:["文章主题","读者画像","关键观点","期望长度"],output:"生成标题、大纲、开头、分段要点和结尾 CTA。"},{id:"video",title:"短视频脚本",fields:["视频主题","账号定位","转化目标","时长"],output:"生成开场钩子、分镜脚本、口播词和结尾引导。"}]},{id:"sales",group:"sales",title:"客服销售助手",audience:"私域商家、客服、销售",summary:"快速生成客户回复、价格异议处理、售前介绍和微信跟进话术。",cost:900,status:"已上线",templates:[{id:"reply",title:"客户问题回复",fields:["客户问题","产品信息","期望语气","是否需要促单"],output:"生成简洁可信的客服回复和下一步引导。"},{id:"objection",title:"价格异议处理",fields:["客户顾虑","产品优势","优惠规则","底线要求"],output:"生成不生硬的解释、价值重申和成交话术。"},{id:"followup",title:"微信跟进话术",fields:["客户阶段","上次沟通","本次目标","可用权益"],output:"生成三段不同强度的跟进话术。"}]},{id:"document",group:"office",title:"文件分析助手",audience:"职场、财务、法务、学生",summary:"先以文本粘贴版上线，后续接 PDF/Word/Excel 上传、解析和问答。",cost:1800,status:"二期增强",templates:[{id:"summary",title:"资料摘要",fields:["资料正文","阅读目标","输出格式","关注风险"],output:"生成重点摘要、待确认问题和行动清单。"},{id:"contract",title:"合同要点提取",fields:["合同文本","我方身份","关注条款","风险偏好"],output:"生成关键条款、风险提示和沟通建议。"}]},{id:"resume",group:"office",title:"简历面试助手",audience:"求职者、应届生、转行人群",summary:"根据岗位 JD 优化简历表达，预测面试问题并生成回答思路。",cost:1400,status:"已上线",templates:[{id:"optimize",title:"简历优化",fields:["目标岗位","简历内容","优势经历","希望突出"],output:"生成简历修改建议、项目表达和关键词补强。"},{id:"interview",title:"模拟面试题",fields:["目标岗位","公司行业","个人经历","薄弱环节"],output:"生成高频问题、回答框架和追问提醒。"}]},{id:"business",group:"growth",title:"生意诊断顾问",audience:"门店、小老板、独立创业者",summary:"输入行业、产品、客单价和目标，生成增长诊断、活动方案和内容策略。",cost:1600,status:"已上线",templates:[{id:"diagnosis",title:"门店增长诊断",fields:["行业/门店","目标客户","当前问题","预算范围"],output:"生成问题诊断、增长动作、执行节奏和指标。"},{id:"campaign",title:"促销活动方案",fields:["产品服务","活动目标","优惠空间","渠道"],output:"生成活动主题、权益组合、推广文案和复盘指标。"}]}],$={credits:86e3,usedToday:7200,selectedGroup:"all",selectedScenarioId:"writing",selectedTemplateId:"xiaohongshu",result:"",loading:!1,toast:"",formValues:{},history:[{id:"seed-1",date:"2026-07-28 20:16",scenario:"客服销售助手",template:"价格异议处理",tokens:940,title:"把“太贵了”转成价值沟通"},{id:"seed-2",date:"2026-07-27 11:42",scenario:"AI 写作工作台",template:"小红书种草文案",tokens:1260,title:"新品上线种草文案"}]};function L(){try{return{...$,...JSON.parse(localStorage.getItem(I)||"{}")}}catch{return $}}const e=L();function u(){localStorage.setItem(I,JSON.stringify({credits:e.credits,usedToday:e.usedToday,selectedGroup:e.selectedGroup,selectedScenarioId:e.selectedScenarioId,selectedTemplateId:e.selectedTemplateId,formValues:e.formValues,history:e.history}))}function h(){if(S){const t=decodeURIComponent(location.hash.replace(/^#/,""));return t.startsWith("/")?t:"/"}return location.pathname==="/"?"/":location.pathname}e.route=h();const T=[["/","⌂","应用"],["/workspace","✦","工作台"],["/history","▤","历史"],["/billing","◷","额度"],["/integration","↗","嵌入"]];function A(t){S?location.hash=t:history.pushState({},"",t),e.route=t,window.scrollTo({top:0,behavior:"smooth"}),r()}window.addEventListener("popstate",()=>{e.route=h(),r()});window.addEventListener("hashchange",()=>{e.route=h(),r()});function v(){return d.find(t=>t.id===e.selectedScenarioId)||d[0]}function k(){const t=v();return t.templates.find(a=>a.id===e.selectedTemplateId)||t.templates[0]}function O(){return e.selectedGroup==="all"?d:d.filter(t=>t.group===e.selectedGroup)}function c(t){return new Intl.NumberFormat("zh-CN").format(t)}function j(t){e.toast=t,r(),setTimeout(()=>{e.toast="",r()},1800)}function q(t){const a=d.find(s=>s.id===t);a&&(e.selectedScenarioId=a.id,e.selectedTemplateId=a.templates[0].id,u(),A("/workspace"))}function x(t){e.selectedTemplateId=t,e.result="",u(),r()}function p(t){return`<div class="app-shell ${g?"embedded":""}">
    ${G()}
    <div class="layout">
      ${g?"":D()}
      ${t}
    </div>
    ${C()}
    ${e.toast?`<div class="toast">${e.toast}</div>`:""}
  </div>`}function G(){return`<header class="header">
    <div>
      <p class="eyebrow">NewAPI Value Apps · ${N}</p>
      <h1>AI 应用中心</h1>
    </div>
    <div class="header-actions">
      <span class="quota-pill">剩余 ${c(e.credits)}</span>
      <button class="secondary-action" data-nav="/integration">嵌入配置</button>
    </div>
  </header>`}function D(){return`<nav class="side-nav">${T.map(([t,a,s])=>`
    <button class="${e.route===t?"active":""}" data-nav="${t}">
      <span>${a}</span>${s}
    </button>`).join("")}</nav>`}function C(){return g?"":`<nav class="mobile-nav">${T.map(([t,a,s])=>`
    <button class="${e.route===t?"active":""}" data-nav="${t}">
      <span>${a}</span><small>${s}</small>
    </button>`).join("")}</nav>`}function R(){return`<section class="stat-grid">
    <article><span>可用场景</span><strong>${d.filter(a=>a.status==="已上线").length}</strong></article>
    <article><span>今日消耗</span><strong>${c(e.usedToday)}</strong></article>
    <article><span>平均单次</span><strong>1.2k</strong></article>
    <article><span>复用能力</span><strong>登录 / 额度 / 模型</strong></article>
  </section>`}function y(){return p(`<main class="content">
    <section class="intro-panel">
      <div>
        <p class="eyebrow">定位</p>
        <h2>把 token 平台包装成用户能直接使用的 Agent 场景</h2>
        <p>用户从现有 dashboard 进入这里，选择任务、填写表单、生成结果；登录、充值、额度、模型列表继续复用主平台，新增模块只负责场景编排和结果沉淀。</p>
      </div>
      <button class="primary-action" data-nav="/workspace">打开工作台</button>
    </section>
    ${R()}
    <section class="toolbar">
      ${P.map(t=>`<button class="${e.selectedGroup===t.id?"active":""}" data-group="${t.id}">${t.label}</button>`).join("")}
    </section>
    <section class="scenario-grid">${O().map(V).join("")}</section>
  </main>`)}function V(t){return`<article class="scenario-card">
    <div class="card-top">
      <span class="status">${t.status}</span>
      <span class="cost">约 ${c(t.cost)} tokens</span>
    </div>
    <h3>${t.title}</h3>
    <p>${t.summary}</p>
    <div class="card-meta">${t.audience}</div>
    <div class="template-list">${t.templates.slice(0,3).map(a=>`<span>${a.title}</span>`).join("")}</div>
    <button class="primary-action" data-scenario="${t.id}">使用场景</button>
  </article>`}function F(){const t=v(),a=k();return p(`<main class="content workspace">
    <section class="work-head">
      <div>
        <p class="eyebrow">${t.audience}</p>
        <h2>${t.title}</h2>
        <p>${t.summary}</p>
      </div>
      <div class="estimate">
        <span>预计消耗</span>
        <strong>${c(t.cost)}</strong>
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
        <form id="agent-form">
          <div class="form-head">
            <h3>${a.title}</h3>
            <span>${a.output}</span>
          </div>
          ${a.fields.map((s,o)=>H(s,o)).join("")}
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
        <div class="result-box">${e.result?_(e.result):'<span class="empty">填写左侧内容后生成。未接入服务端时会使用本地演示结果。</span>'}</div>
      </section>
    </section>
  </main>`)}function H(t,a){const s=`${e.selectedScenarioId}:${e.selectedTemplateId}:${a}`,o=e.formValues[s]||"";return t.includes("正文")||t.includes("简历")||t.includes("合同")||t.includes("资料")?`<label class="field"><span>${t}</span><textarea name="${s}" placeholder="请输入${t}">${m(o)}</textarea></label>`:`<label class="field"><span>${t}</span><input name="${s}" value="${m(o)}" placeholder="请输入${t}"></label>`}function _(t){return m(t).replace(/\n/g,"<br>")}function m(t){return String(t).replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[a])}function J(){return window.AGENT_AI_ENDPOINT?window.AGENT_AI_ENDPOINT:location.protocol!=="file:"?"/api/agent":""}async function M(t){const a=J();if(!a)return null;const s=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!s.ok)throw new Error(`Agent endpoint failed: ${s.status}`);const o=await s.json();return o.text||o.output_text||o.message||null}function w(t){const a=t.fields.filter(Boolean).join(" / ")||"用户输入信息";return[`【${t.templateTitle}】`,"","1. 任务判断",`围绕「${a}」优先输出可直接复制使用的内容，减少用户反复调 prompt 的成本。`,"","2. 推荐结果","建议采用“明确对象 + 关键卖点 + 行动引导”的结构，先给用户一个可用版本，再提供 2-3 个可继续优化的方向。","","3. 可继续优化","可以让用户选择语气、长度、平台风格、是否加强成交感，并在每次生成后记录 token 消耗和结果历史。","","4. 平台落点","本次结果适合作为增值场景的一次调用记录，后续可沉淀为模板、套餐或行业专属 Agent。"].join(`
`)}async function U(t){if(e.loading)return;const a=new FormData(t);for(const[l,f]of a.entries())e.formValues[l]=f.toString();const s=v(),o=k(),n=o.fields.map((l,f)=>a.get(`${s.id}:${o.id}:${f}`)?.toString().trim()||"");e.loading=!0,e.result="",u(),r();const i={scenarioId:s.id,scenarioTitle:s.title,templateId:o.id,templateTitle:o.title,fields:n,system:"你是 NewAPI token 平台的场景 Agent。请把用户输入转成可直接使用的业务结果，输出中文，结构清晰，适合网页应用展示。"};try{e.result=await M(i)||w(i)}catch{e.result=w(i)}e.loading=!1,e.credits=Math.max(0,e.credits-s.cost),e.usedToday+=s.cost,e.history.unshift({id:`run-${Date.now()}`,date:new Date().toLocaleString("zh-CN",{hour12:!1}),scenario:s.title,template:o.title,tokens:s.cost,title:n.find(Boolean)||o.title}),u(),r()}function W(){return p(`<main class="content">
    <section class="page-title">
      <p class="eyebrow">Usage History</p>
      <h2>生成历史</h2>
      <p>第一期先把历史保存在前端演示；生产环境建议写入 PostgreSQL，关联主平台用户 ID、模型、场景和 token 消耗。</p>
    </section>
    <section class="history-list">${e.history.map(t=>`
      <article>
        <div><strong>${m(t.title)}</strong><span>${t.scenario} · ${t.template}</span></div>
        <div><b>${c(t.tokens)}</b><small>${t.date}</small></div>
      </article>`).join("")}</section>
  </main>`)}function z(){return p(`<main class="content">
    <section class="page-title">
      <p class="eyebrow">复用主平台能力</p>
      <h2>额度与计费</h2>
      <p>这里不重新做充值和订单，只展示必要额度，并把购买动作跳回 ai-dashboard.hkqlhnet.com。</p>
    </section>
    <section class="billing-grid">
      <article><span>当前剩余额度</span><strong>${c(e.credits)}</strong></article>
      <article><span>今日场景消耗</span><strong>${c(e.usedToday)}</strong></article>
      <article><span>计费方式</span><strong>场景倍率 + 模型倍率</strong></article>
    </section>
    <section class="reuse-panel">
      <h3>建议复用项</h3>
      <div><span>用户登录</span><b>从 dashboard SSO 传入 user_id / session</b></div>
      <div><span>余额充值</span><b>跳回主平台套餐中心</b></div>
      <div><span>模型路由</span><b>继续走 NewAPI 渠道和分组</b></div>
      <div><span>消耗日志</span><b>写入主平台调用日志或同步任务</b></div>
    </section>
  </main>`)}function B(){const t=location.origin==="null"?"https://agent.yourdomain.com":location.origin,a=`${t}/?embed=1`;return p(`<main class="content">
    <section class="page-title">
      <p class="eyebrow">独立地址 + 可嵌入</p>
      <h2>接入 ai-dashboard.hkqlhnet.com</h2>
      <p>第一期建议主平台增加一个“AI 应用中心”菜单，打开独立地址；需要无缝体验时再 iframe 嵌入并接入 SSO。</p>
    </section>
    <section class="integration-grid">
      <article>
        <h3>独立页面</h3>
        <p>部署到独立域名，适合外部推广、H5 分享和用户收藏。</p>
        <code>${t}</code>
      </article>
      <article>
        <h3>iframe 嵌入</h3>
        <p>嵌入主平台的增值模块，使用 embed 模式隐藏侧边导航。</p>
        <code>&lt;iframe src="${a}" /&gt;</code>
      </article>
      <article>
        <h3>后端接口</h3>
        <p>前端请求 /api/agent，服务端再调用 NewAPI，避免浏览器暴露 token。</p>
        <code>POST /api/agent</code>
      </article>
    </section>
    <section class="roadmap">
      <h3>落地路线</h3>
      <ol>
        <li>一期：场景模板、工作台、历史、额度展示、NewAPI 代理。</li>
        <li>二期：文件上传解析、团队空间、后台配置模板。</li>
        <li>三期：行业 Agent、套餐权益、管理员上架和数据看板。</li>
      </ol>
    </section>
  </main>`)}function K(){return({"/":y,"/workspace":F,"/history":W,"/billing":z,"/integration":B}[e.route]||y)()}function Q(){document.querySelectorAll("[data-nav]").forEach(t=>t.addEventListener("click",()=>A(t.dataset.nav))),document.querySelectorAll("[data-group]").forEach(t=>t.addEventListener("click",()=>{e.selectedGroup=t.dataset.group,u(),r()})),document.querySelectorAll("[data-scenario]").forEach(t=>t.addEventListener("click",()=>q(t.dataset.scenario))),document.querySelectorAll("[data-template]").forEach(t=>t.addEventListener("click",()=>x(t.dataset.template))),document.querySelector("#agent-form")?.addEventListener("submit",t=>{t.preventDefault(),U(t.currentTarget)}),document.querySelector("[data-clear]")?.addEventListener("click",()=>{Object.keys(e.formValues).forEach(t=>{t.startsWith(`${e.selectedScenarioId}:${e.selectedTemplateId}:`)&&delete e.formValues[t]}),e.result="",u(),r()}),document.querySelector("[data-copy]")?.addEventListener("click",async()=>{await navigator.clipboard.writeText(e.result),j("结果已复制")})}function r(){E.innerHTML=K(),Q()}r();
