# AI 应用中心

面向 NewAPI token 用户的场景化 Agent 增值模块。页面可以独立访问，也可以通过 `?embed=1` 嵌入现有 dashboard。

## 当前能力

- AI 场景首页
- Agent 工作台
- 使用历史
- 额度展示
- 模拟 ai-dashboard 容器交互
- Dashboard iframe 嵌入说明
- NewAPI 服务端代理示例

## 本地运行

```bash
npm install
npm run dev
```

默认预览地址：

```text
http://127.0.0.1:5173/
```

嵌入模式：

```text
http://127.0.0.1:5173/?embed=1&user=demo&quota=86000&group=default
```

## ai-dashboard 接入建议

在 `https://ai-dashboard.hkqlhnet.com/` 左侧菜单增加“AI 应用中心”，使用 iframe 嵌入：

```html
<iframe
  src="https://1246wqy008142-byte.github.io/newapi-agent-center/?embed=1&user={{user_id}}&quota={{quota}}&group={{group}}&return_url=https%3A%2F%2Fai-dashboard.hkqlhnet.com"
  style="width:100%;height:100%;border:0"
></iframe>
```

建议复用主平台能力：

- 登录态：主平台生成短期签名，Agent 后端验证。
- 额度：主平台传入展示额度，真实扣减由服务端完成。
- 模型：继续走 NewAPI 模型分组和渠道策略。
- 日志：`/api/agent` 代理在服务端写入调用日志。

## 构建

```bash
npm run build
```

## NewAPI 接入

前端默认请求：

```text
POST /api/agent
```

服务端代理示例见：

```text
server/ai-proxy.example.mjs
```

生产环境建议在服务端配置：

```bash
NEWAPI_BASE_URL=https://your-newapi-domain
NEWAPI_API_KEY=your-token
NEWAPI_MODEL=gpt-4.1-mini
```
