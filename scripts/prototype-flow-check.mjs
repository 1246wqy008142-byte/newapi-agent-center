import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const read = (path) => readFileSync(join(root, path), "utf8");
const app = read("src/app.js");
const css = read("src/styles.css");
const html = read("index.html");
const aiProxyExample = read("server/ai-proxy.example.mjs");
const distHtml = existsSync(join(root, "dist/index.html")) ? read("dist/index.html") : "";

const checks = [];
const add = (name, pass) => checks.push({ name, pass: Boolean(pass) });

const requiredRoutes = ["/", "/workspace", "/history", "/billing", "/integration"];
const requiredViews = ["HomePage", "WorkspacePage", "HistoryPage", "BillingPage", "IntegrationPage"];
const requiredFeatures = [
  "scenarioGroups",
  "scenarios",
  "selectScenario",
  "runAgent",
  "callRemoteAgent",
  "localAgentResult",
  "AI 写作工作台",
  "客服销售助手",
  "文件分析助手",
  "ai-dashboard.hkqlhnet.com",
  "embed=1",
  "DashboardSidebar",
  "DashboardTopbar",
  "DashboardBridge",
  "千禄匯 AI",
  "前往仪表板",
  "landing-shell",
  "ScenarioHub",
  "basePath",
  "data-open-dashboard",
  "return_url"
];

for (const route of requiredRoutes) {
  add(`主路由存在 ${route}`, app.includes(`"${route}"`));
}

for (const view of requiredViews) {
  add(`页面存在 ${view}`, app.includes(`function ${view}`));
}

for (const feature of requiredFeatures) {
  add(`能力存在 ${feature}`, app.includes(feature));
}

add("本地 file 预览支持 hash 路由", app.includes("location.protocol === \"file:\"") && app.includes("location.hash = path"));
add("导航包含五个落地入口", app.includes("应用") && app.includes("工作台") && app.includes("历史") && app.includes("额度") && app.includes("嵌入"));
add("额度与历史使用本地持久化", app.includes("localStorage.setItem(storageKey") && app.includes("state.history.unshift"));
add("GitHub Pages 子路径路由兼容", app.includes("newapi-agent-center") && app.includes("`${basePath}${path}${query}`"));
add("Dashboard 容器交互存在", app.includes("控制台总览") && app.includes("AI 应用中心") && app.includes("返回主平台"));
add("默认入口适配主站首页交互", app.includes("landing-shell") && app.includes("统一 API 网关") && app.includes("前往仪表板"));
add("进入工作台仍保留模块能力", app.includes("module-mode") && app.includes("SideNav()") && app.includes("WorkspacePage"));
add("嵌入参数可接收用户额度分组", app.includes("params.get(\"user\")") && app.includes("params.get(\"quota\")") && app.includes("params.get(\"group\")"));
add("路由保留嵌入查询参数", app.includes("const query = location.search || \"\"") && app.includes("`${basePath}${path}${query}`"));
add("前端不暴露 NewAPI token", !app.includes("NEWAPI_API_KEY") && aiProxyExample.includes("NEWAPI_API_KEY"));
add("代理示例支持 NewAPI base url", aiProxyExample.includes("NEWAPI_BASE_URL") && aiProxyExample.includes("/v1/responses"));
add("首页标题已更新", html.includes("AI 应用中心"));
add("首页包含基础安全策略", html.includes("Content-Security-Policy") && html.includes("object-src 'none'") && html.includes("base-uri 'self'"));
add("首页无内联端点配置脚本", !html.includes("window.AGENT_AI_ENDPOINT"));
add("样式采用主站入口与模块布局", css.includes(".landing-shell") && css.includes(".hero-section") && css.includes(".bridge-panel") && css.includes(".work-grid"));
add("布局防横向溢出", css.includes("overflow-x: hidden") && css.includes("@media (max-width: 1260px)") && css.includes("grid-template-columns: 1fr"));
add("dist 入口存在", existsSync(join(root, "dist/index.html")));
add("dist 不包含非 HTTPS 或第三方脚本", !distHtml.includes("http://") && !distHtml.includes("fonts.googleapis.com") && !distHtml.includes("unpkg.com"));

const forbiddenLegacy = ["AI 综合学习平台", "学习导师", "成长档案", "知识雷达"];
for (const phrase of forbiddenLegacy) {
  add(`旧业务文案未出现在核心前端：${phrase}`, !app.includes(phrase) && !html.includes(phrase));
}

const failed = checks.filter((item) => !item.pass);

console.log("AI 应用中心自动化流程检查");
console.log(`通过：${checks.length - failed.length}/${checks.length}`);
for (const item of checks) {
  console.log(`${item.pass ? "✓" : "✗"} ${item.name}`);
}

if (failed.length > 0) {
  process.exitCode = 1;
}
