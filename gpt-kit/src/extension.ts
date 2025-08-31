// Minimal VS Code extension activation for syntax-only plugins

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // No commands registered — GPT-Kit is a pure grammar extension
  console.log('GPT-Kit syntax highlighter activated.');
}

export function deactivate() {
  // No cleanup needed
}
