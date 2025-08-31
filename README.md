# GPT Kit

**Syntax highlighting for GPT-style prompt files in VS Code.**
Because prompts are code too.

---

## ✨ What is GPT Kit?

GPT Kit is a **minimal-but-mighty** extension that makes `.gpt`, `.prompt`, and related files feel like first-class citizens inside VS Code. If you spend your day iterating on prompts, building AI-driven workflows, or tinkering with your own GPT archives, this kit gives you the visual structure you deserve.

Think of it as a little extra brainpower for your editor: clean, clear, and tuned for the way *you* actually write with GPT.

---

## 🎯 Features

* **File support**: `.gpt`, `.prompt`, `.gptx`, `.chat`, `.gptlog`
* **Role headers**: `system:`, `user:`, `assistant:` — highlighted at the top of each line
* **Markdown integration**: headings, blockquotes, bullet lists, inline formatting
* **Fenced code blocks**: triple backticks with language hints (JS, Python, etc.)
* **Horizontal rules**: `---`, `===` for visual separation
* **Lightweight**: zero runtime dependencies, just a grammar and config
* **Future-ready**: foundation for custom patterns like `q.proc5`, `branch.dark`, and more

---

## 🚀 Why use it?

Because prompts aren’t plain text. They’re living documents, experiments, and sometimes production logic. Syntax highlighting helps you:

* **Think faster**: roles and structure pop visually instead of blending into a wall of text.
* **Debug easier**: spot misplaced code fences, missed colons, or broken blocks.
* **Stay organized**: keep prompts consistent across projects, repos, or knowledge archives.
* **Have fun**: yes, syntax highlighting can be fun. Prompts feel more like craft than chaos.

---

## 🛠️ Installation

### From VS Code Marketplace (recommended)

1. Open VS Code.
2. Go to **Extensions** (`Ctrl+Shift+X` / `Cmd+Shift+X`).
3. Search for **GPT Kit**.
4. Install. Done.

### Local install (development)

```bash
# Clone the repo
git clone https://github.com/rwsci/vscode-gpt-kit.git
cd vscode-gpt-kit

# Build the VSIX
npm install -g @vscode/vsce
npm run package

# Install the extension into VS Code
code --install-extension gpt-kit-0.1.0.vsix
```

---

## 🧭 Roadmap

* v0.1 → Roles + Markdown + fenced code blocks
* v0.2 → Embedded language highlighting (JS, Python, etc.)
* v0.3 → Alice-specific sugar (`q.proc5`, directive paths, custom annotations)
* v1.0 → Full-fledged prompt workspace support

---

## 🤝 Contributing

Contributions, issues, and ideas are always welcome.

* File issues on [GitHub](https://github.com/rwsci/vscode-gpt-kit/issues)
* PRs for grammar tweaks or new syntax features encouraged
* Have a weird use-case? Tell us. We love weird.

---

## 🧑‍🔬 About Rockwood Scientific

We’re **Rockwood Scientific** — builders at the edge of AI.
Our mission: make tools that feel as smart and playful as the systems they support.

---

## 📜 License

[MIT](LICENSE) © Rockwood Scientific

---

💡 *Prompts are code. Treat them with respect.*

---
