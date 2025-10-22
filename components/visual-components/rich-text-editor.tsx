"use client"

import { useState } from "react"
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Link,
  ImageIcon,
  Code,
  Quote,
  Undo,
  Redo,
  Type,
  Palette,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function RichTextEditor() {
  const [content, setContent] = useState(`<h2>Welcome to the Rich Text Editor</h2>
<p>This is a <strong>powerful</strong> and <em>intuitive</em> rich text editor that supports:</p>
<ul>
<li>Text formatting (bold, italic, underline)</li>
<li>Lists and alignment options</li>
<li>Links and images</li>
<li>Code blocks and quotes</li>
</ul>
<blockquote>
<p>"The best way to predict the future is to create it." - Peter Drucker</p>
</blockquote>
<p>Start typing to see the magic happen!</p>`)

  const [activeFormats, setActiveFormats] = useState<string[]>([])

  const toolbarGroups = [
    {
      name: "Format",
      tools: [
        { icon: Bold, name: "bold", title: "Bold (Ctrl+B)" },
        { icon: Italic, name: "italic", title: "Italic (Ctrl+I)" },
        { icon: Underline, name: "underline", title: "Underline (Ctrl+U)" },
        { icon: Strikethrough, name: "strikethrough", title: "Strikethrough" },
      ],
    },
    {
      name: "Align",
      tools: [
        { icon: AlignLeft, name: "alignLeft", title: "Align Left" },
        { icon: AlignCenter, name: "alignCenter", title: "Align Center" },
        { icon: AlignRight, name: "alignRight", title: "Align Right" },
      ],
    },
    {
      name: "Lists",
      tools: [
        { icon: List, name: "bulletList", title: "Bullet List" },
        { icon: ListOrdered, name: "orderedList", title: "Numbered List" },
      ],
    },
    {
      name: "Insert",
      tools: [
        { icon: Link, name: "link", title: "Insert Link" },
        { icon: ImageIcon, name: "image", title: "Insert Image" },
        { icon: Code, name: "code", title: "Code Block" },
        { icon: Quote, name: "quote", title: "Quote" },
      ],
    },
    {
      name: "Actions",
      tools: [
        { icon: Undo, name: "undo", title: "Undo (Ctrl+Z)" },
        { icon: Redo, name: "redo", title: "Redo (Ctrl+Y)" },
      ],
    },
  ]

  const handleToolClick = (toolName: string) => {
    // Toggle active state for formatting tools
    if (["bold", "italic", "underline", "strikethrough"].includes(toolName)) {
      setActiveFormats((prev) => (prev.includes(toolName) ? prev.filter((f) => f !== toolName) : [...prev, toolName]))
    }

    // Simulate tool action
    console.log(`[v0] Tool clicked: ${toolName}`)
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg border shadow-sm">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Rich Text Editor</h3>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Type className="w-4 h-4 mr-2" />
              Aa
            </Button>
            <Button variant="ghost" size="sm">
              <Palette className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="p-3 border-b bg-gray-50">
        <div className="flex items-center gap-1 flex-wrap">
          {toolbarGroups.map((group, groupIndex) => (
            <div key={group.name} className="flex items-center">
              {group.tools.map((tool) => (
                <Button
                  key={tool.name}
                  variant="ghost"
                  size="sm"
                  title={tool.title}
                  onClick={() => handleToolClick(tool.name)}
                  className={`h-8 w-8 p-0 ${
                    activeFormats.includes(tool.name) ? "bg-blue-100 text-blue-700" : "hover:bg-gray-200"
                  }`}
                >
                  <tool.icon className="w-4 h-4" />
                </Button>
              ))}
              {groupIndex < toolbarGroups.length - 1 && <div className="w-px h-6 bg-gray-300 mx-2" />}
            </div>
          ))}
        </div>
      </div>

      {/* Editor Content */}
      <div className="relative">
        <div
          className="min-h-[400px] p-6 prose prose-sm max-w-none focus:outline-none"
          contentEditable
          dangerouslySetInnerHTML={{ __html: content }}
          onInput={(e) => setContent(e.currentTarget.innerHTML)}
          style={{
            lineHeight: "1.6",
            fontSize: "14px",
          }}
        />

        {/* Placeholder when empty */}
        {!content.trim() && (
          <div className="absolute top-6 left-6 text-gray-400 pointer-events-none">
            Start typing your content here...
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t bg-gray-50 rounded-b-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>Words: 47</span>
            <span>Characters: 312</span>
            <span>Reading time: ~1 min</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Save Draft
            </Button>
            <Button size="sm">Publish</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
