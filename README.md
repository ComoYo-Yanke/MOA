<span><a href="#english">English</a> | <a href="#chinese">中文</a></span>

# Minecraft Online Assistant (MOA)

一个帮助简化《我的世界》联机流程的桌面工具，支持内网穿透、局域网、VPN、服务器等多种联机方式，完全免费、非盈利。

- **技术栈**：Electron + Vue 3 + Vite + Element Plus
- **许可证**：MIT

---

<a id="chinese"></a>

## 中文

### 环境要求

- [Node.js](https://nodejs.org/) ≥ 18（推荐 20+）
- npm（随 Node.js 自带）

### 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 启动开发环境（同时运行 Vite 与 Electron）
npm start
```

`npm start` 会先启动 Vite 开发服务器（端口 5173），再启动 Electron 窗口加载该地址。

如需分别启动：

```bash
npm run dev       # 启动 Vite
npm run electron  # 启动 Electron
```

### 目录结构

```
src/
├── main/       # Electron 主进程
├── preload/    # 预加载脚本
└── renderer/   # Vue 渲染进程
```

### 许可证

[MIT](LICENCE) © 2026 ComoYo-Yanke

---

<a id="english"></a>

## English

A desktop tool that simplifies the online multiplayer process for Minecraft, supporting LAN, VPN, server, and intranet penetration methods. Completely free and non-profit.

- **Stack**: Electron + Vue 3 + Vite + Element Plus
- **License**: MIT

### Requirements

- [Node.js](https://nodejs.org/) ≥ 18 (20+ recommended)
- npm (bundled with Node.js)

### Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev environment (runs Vite and Electron together)
npm start
```

`npm start` launches the Vite dev server (port 5173) first, then opens an Electron window pointing to it.

To run them separately:

```bash
npm run dev       # Start Vite
npm run electron  # Start Electron
```

### Structure

```
src/
├── main/       # Electron main process
├── preload/    # Preload script
└── renderer/   # Vue renderer
```

### License

[MIT](LICENCE) © 2026 ComoYo-Yanke
