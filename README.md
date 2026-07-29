# AI 应用中心

面向 NewAPI token 用户的场景化 Agent 增值模块。页面可以独立访问，也可以通过 `?embed=1` 嵌入现有 dashboard。

## 当前能力

- AI 场景首页
- Agent 工作台
- 使用历史
- 额度展示
- Dashboard 嵌入说明
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
http://127.0.0.1:5173/?embed=1
```

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
