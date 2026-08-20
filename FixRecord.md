<span><a href="#english">English</a> | <a href="#chinese">中文</a></span>
# Project Bug & Defect Tracking Record

Unified tracking record for project bugs and defects, used for full lifecycle management of problem discovery, repair, iteration and closure.

**Rule**: Bug refers to original functional exceptions; Defect refers to new problems generated after fixing original bugs.
**Update Date**: 2026-08-18

---
<a id="chinese"></a>
## 中文

### 文档说明
本文档用于统一记录项目迭代过程中出现的功能Bug、缺陷，实现问题全生命周期闭环管理，保障项目稳定性迭代。

### 编号规范
- **Bug**：项目原有功能异常问题，属于初始缺陷
- **Defect**：修复原有Bug过程中产生的新缺陷

### 问题跟踪记录表
| 问题编号 | 问题类型 | 后续跟进计划 | 备注 |
|---------|---------|-------------|------|
| bug#26-81701 | 初始功能Bug | 持续跟进优化，结合缺陷统一迭代整改，推进问题完全闭环 | 已完成临时修复，核心功能可用；临时修复引入defect#26-81801 |
| defect#26-81801 | 缺陷 | 持续跟踪问题复现规律，调试优化代码，迭代修复缺陷，直至问题完全解决 | bug#26-81701临时修复后产生，拖拽窗口调整位置时窗口尺寸抖动，尚未修复 |


### 更新日志
- 2026-08-17：录入bug#26-81701，项目原有核心业务功能异常，完成问题登记。
- 2026-08-18：bug#26-81701执行临时修复；新增录入defect#26-81801，拖拽窗口调整位置出现窗口尺寸抖动，为临时修复引入的缺陷；更新两条工单跟进计划与备注信息。
- 2026-08-20: defect#26-81801 缺陷修复，使用 electron-click-drag-plugin 插件替代纯自定义窗口拖拽逻辑，完全修复 bug 以及 缺陷

---
<a id="english"></a>
## English

### Document Description
This document uniformly records functional bugs and defects during project iteration, realizes full life‑cycle closed‑loop management of problems, and ensures stable project iteration.

### Numbering Rules
- **Bug**: Original functional abnormal problems of the project, initial defects
- **Defect**: New defects generated during the repair of original bugs

### Problem Tracking Record
| Problem ID | Problem Type | Follow‑up Plan | Remarks |
|-----------|-------------|----------------|---------|
| bug#26-81701 | Original Functional Bug | Continue to follow up optimization, conduct iterative rectification together with defects, and promote complete problem closure | Temporary repair completed, core functions available; defect#26-81801 introduced by temporary fix |
| defect#26-81801 | Defect | Continuously track the recurrence rule of the problem, optimize and debug the code, iteratively repair the defect until the problem is completely resolved | Introduced after temporary fix of bug#26-81701. Window size jitters when dragging window position, not fixed yet |


### Update Log
- 2026-08-17: Recorded bug#26-81701, the original core business function of the project was abnormal, problem registered.
- 2026-08-18: Performed temporary fix for bug#26-81701; Added defect#26-81801, window size jitter occurs when dragging window, introduced by temporary fix; Updated follow‑up plan and remarks for both records.
- 2026-08-20: defect#26-81801 Defect fix: replace fully‑custom window‑dragging logic with electron‑click‑drag‑plugin to completely resolve bugs and defects.