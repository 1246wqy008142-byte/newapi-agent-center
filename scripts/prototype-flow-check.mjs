import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const read = (path) => readFileSync(join(root, path), "utf8");
const app = read("src/app.js");
const css = read("src/styles.css");
const html = read("index.html");
const aiProxyExample = read("server/ai-proxy.example.mjs");

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
  "embed=1"
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
add("前端不暴露 NewAPI token", !app.includes("NEWAPI_API_KEY") && aiProxyExample.includes("NEWAPI_API_KEY"));
add("代理示例支持 NewAPI base url", aiProxyExample.includes("NEWAPI_BASE_URL") && aiProxyExample.includes("/v1/responses"));
add("首页标题已更新", html.includes("AI 应用中心"));
add("样式采用工作台布局", css.includes(".scenario-grid") && css.includes(".work-grid") && css.includes(".side-nav"));
add("dist 入口存在", existsSync(join(root, "dist/index.html")));

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
