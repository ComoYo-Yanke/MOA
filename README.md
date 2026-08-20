<span><a href="#english">English</a> | <a href="#chinese">中文</a></span>

# Minecraft Online Assistant (MOA)

一个帮助简化《我的世界》联机流程的桌面工具，支持内网穿透、局域网、VPN、服务器等多种联机方式，完全免费、非盈利。

- **技术栈**：Electron + Vue 3 + Vite + Element Plus + TypeScript
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

# 2. 启动开发环境
npm start
```

`npm start` 会自动完成以下步骤：
1. 清理旧的编译文件 (`dist/`)
2. 编译 TypeScript 主进程和预加载脚本
3. 启动 Vite 开发服务器（端口 5173）
4. 启动 Electron 窗口

### 开发命令

| 命令 | 说明 |
|------|------|
| `npm start` | 完整启动（清理 → 编译 → Vite → Electron） |
| `npm run dev` | 仅启动 Vite 开发服务器 |
| `npm run electron` | 仅启动 Electron（需先编译） |
| `npm run build` | 编译 TypeScript 到 `dist/` |
| `npm run watch` | 监听模式自动编译 TypeScript |
| `npm run clean` | 清理 `dist/` 编译目录 |

### 目录结构

```
my-mc-assistant/
├── src/
│   ├── main/           # Electron 主进程 (TypeScript)
│   │   └── main.ts
│   ├── preload/        # 预加载脚本 (TypeScript)
│   │   └── preload.ts
│   ├── renderer/       # Vue 渲染进程
│   │   ├── App.vue
│   │   ├── main.js
│   │   ├── components/
│   │   └── views/
│   ├── types/          # TypeScript 类型定义
│   │   └── electron.d.ts
│   └── assets/         # 静态资源（样式、图标等）
├── dist/               # TypeScript 编译输出（自动生成）
│   ├── main/
│   │   └── main.js
│   └── preload/
│       └── preload.js
├── package.json
├── tsconfig.json       # TypeScript 配置
├── vite.config.js      # Vite 配置
└── README.md
```

### 从 JS 迁移到 TS

本项目已从 JavaScript 迁移至 TypeScript：

- ✅ 主进程 (`main/`) 使用 TypeScript
- ✅ 预加载脚本 (`preload/`) 使用 TypeScript
- ✅ 完整的类型定义 (`types/`)
- ✅ 渲染进程保持 Vue + JavaScript（由 Vite 处理）

### 常见问题

#### 端口 5173 被占用

```bash
# 查找占用端口的进程
netstat -ano | findstr 5173

# 杀掉进程（替换 PID）
taskkill /PID <PID> /F
```

或修改 `vite.config.js` 中的端口号。

#### TypeScript 编译错误

```bash
# 查看详细错误
npx tsc --noEmit

# 清理后重新编译
npm run clean && npm run build
```

### 许可证

[MIT](LICENCE) © 2026 ComoYo-Yanke

---

<a id="english"></a>

## English

A desktop tool that simplifies the online multiplayer process for Minecraft, supporting LAN, VPN, server, and intranet penetration methods. Completely free and non-profit.

- **Stack**: Electron + Vue 3 + Vite + Element Plus + TypeScript
- **License**: MIT

### Requirements

- [Node.js](https://nodejs.org/) ≥ 18 (20+ recommended)
- npm (bundled with Node.js)

### Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev environment
npm start
```

`npm start` automatically:
1. Cleans old compiled files (`dist/`)
2. Compiles TypeScript (main + preload)
3. Starts Vite dev server (port 5173)
4. Launches Electron window

### Commands

| Command | Description |
|---------|-------------|
| `npm start` | Full start (clean → build → Vite → Electron) |
| `npm run dev` | Start Vite dev server only |
| `npm run electron` | Start Electron only (build first) |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm run watch` | Watch mode for TypeScript |
| `npm run clean` | Clean `dist/` directory |

### Project Structure

```
my-mc-assistant/
├── src/
│   ├── main/           # Electron main process (TypeScript)
│   │   └── main.ts
│   ├── preload/        # Preload script (TypeScript)
│   │   └── preload.ts
│   ├── renderer/       # Vue renderer process
│   │   ├── App.vue
│   │   ├── main.js
│   │   ├── components/
│   │   └── views/
│   ├── types/          # TypeScript type definitions
│   │   └── electron.d.ts
│   └── assets/         # Static assets (styles, icons, etc.)
├── dist/               # TypeScript compiled output (auto-generated)
│   ├── main/
│   │   └── main.js
│   └── preload/
│       └── preload.js
├── package.json
├── tsconfig.json       # TypeScript configuration
├── vite.config.js      # Vite configuration
└── README.md
```

### Migration to TypeScript

This project has been migrated from JavaScript to TypeScript:

- ✅ Main process (`main/`) uses TypeScript
- ✅ Preload script (`preload/`) uses TypeScript
- ✅ Full type definitions (`types/`)
- ✅ Renderer process stays Vue + JavaScript (handled by Vite)

### Troubleshooting

#### Port 5173 already in use

```bash
# Find process using port 5173
netstat -ano | findstr 5173

# Kill process (replace PID)
taskkill /PID <PID> /F
```

Or change the port in `vite.config.js`.

#### TypeScript compilation errors

```bash
# Check for errors without emitting
npx tsc --noEmit

# Clean and rebuild
npm run clean && npm run build
```

### License

[MIT](LICENCE) © 2026 ComoYo-Yanke
```

## 主要更新内容

1. **技术栈**：添加了 TypeScript
2. **启动方式**：说明 `npm start` 现在会先编译 TS
3. **开发命令**：新增 `build`、`watch`、`clean` 命令说明
4. **目录结构**：更新为 TS 版本的结构，添加 `types/` 和 `dist/`
5. **新增章节**："从 JS 迁移到 TS" 和 "常见问题"
6. **英文版**：同步更新所有内容