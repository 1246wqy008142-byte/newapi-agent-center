/**
 * AI 应用中心代理接口示例
 *
 * 用法：
 * 1. 在服务端设置环境变量 OPENAI_API_KEY。
 * 2. 将本接口部署为 POST /api/agent。
 * 3. 前端只请求 /api/agent，不在浏览器暴露 NewAPI token。
 *
 * 请求体：
 * {
 *   "scenarioTitle": "AI 写作工作台",
 *   "templateTitle": "小红书种草文案",
 *   "fields": ["产品", "人群", "卖点", "风格"]
 * }
 */

export async function handleAIRequest(req, res) {
  try {
    const body = await readJson(req);
    const messages = [
      {
        role: "developer",
        content:
          body.system ||
          "你是 NewAPI token 平台的场景 Agent。请把用户输入转成可直接使用的业务结果，输出中文，结构清晰，适合网页应用展示。"
      },
      {
        role: "user",
        content: [
          `场景：${body.scenarioTitle || "通用 Agent"}`,
          `模板：${body.templateTitle || "通用任务"}`,
          `用户输入：${JSON.stringify(body.fields || [])}`
        ].join("\n\n")
      }
    ];

    const baseUrl = process.env.NEWAPI_BASE_URL || "https://api.openai.com";
    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/v1/responses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEWAPI_API_KEY || process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: body.model || process.env.NEWAPI_MODEL || "gpt-4.1-mini",
        input: messages,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const detail = await response.text();
      res.writeHead(response.status, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "OpenAI request failed", detail }));
      return;
    }

    const data = await response.json();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ text: data.output_text || "我已经收到你的问题，但暂时没有生成有效文本。" }));
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: error.message }));
  }
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(raw || "{}"));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}
