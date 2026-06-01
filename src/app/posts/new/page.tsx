'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import CharacterCount from '@tiptap/extension-character-count'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import { useState } from 'react'
import {
  Bold, Italic, Underline as UnderlineIcon,
  Heading1, Heading2, List, ListOrdered,
  Quote, Code, AlignLeft, AlignCenter,
  AlignRight, Save, Send, Eye, ArrowLeft
} from 'lucide-react'
import Link from 'next/link'

const predefinedTags = [
  'Technology', 'Writing', 'Culture', 'Design',
  'Africa', 'Productivity', 'Programming',
  'Startups', 'Mental Health', 'Finance', 'Career', 'Science',
]

export default function NewPostPage() {
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [status, setStatus] = useState<'draft' | 'published'>('draft')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [preview, setPreview] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Placeholder.configure({
        placeholder: 'Tell your story...',
      }),
      CharacterCount,
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-lg dark:prose-invert max-w-none min-h-[400px] outline-none',
      },
    },
  })

  const wordCount = editor
    ? editor.storage.characterCount.words()
    : 0

  const readingTime = Math.ceil(wordCount / 200)

  function toggleTag(tag: string) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else if (selectedTags.length < 5) {
      setSelectedTags([...selectedTags, tag])
    }
  }

  async function handleSave(publishStatus: 'draft' | 'published') {
    setSaving(true)
    setStatus(publishStatus)
    await new Promise((r) => setTimeout(r, 1000))
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  if (!editor) return null

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F1E]">

      {/* Top Bar */}
      <div className="sticky top-16 z-40 border-b border-gray-200 dark:border-white/10 bg-white dark:bg-[#0A0F1E]">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-4">
            <Link
              href="/feed"
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-white/50 hover:text-[#0F2B5B] dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                status === 'published'
                  ? 'bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400'
                  : 'bg-gray-100 text-gray-500 dark:bg-white/10 dark:text-white/50'
              }`}>
                {status === 'published' ? 'Published' : 'Draft'}
              </span>
              {saved && (
                <span className="text-xs text-green-500 font-medium">
                  ✓ Saved
                </span>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 dark:text-white/30 hidden sm:block">
              {wordCount} words · {readingTime} min read
            </span>
            <button
              onClick={() => setPreview(!preview)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-gray-200 dark:border-white/10 text-sm font-semibold text-gray-600 dark:text-white/60 hover:border-[#0F2B5B] dark:hover:border-white/30 transition-all"
            >
              <Eye className="h-4 w-4" />
              {preview ? 'Edit' : 'Preview'}
            </button>
            <button
              onClick={() => handleSave('draft')}
              disabled={saving}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-gray-200 dark:border-white/10 text-sm font-semibold text-gray-600 dark:text-white/60 hover:border-[#0F2B5B] dark:hover:border-white/30 transition-all disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              {saving ? 'Saving...' : 'Save Draft'}
            </button>
            <button
              onClick={() => handleSave('published')}
              disabled={saving || !title || !editor.getText()}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA6C0A] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
              Publish
            </button>
          </div>

        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">

        {preview ? (
          /* Preview Mode */
          <div className="space-y-6">
            <div className="space-y-2">
              {selectedTags.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {selectedTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold px-3 py-1 rounded-full bg-[#0F2B5B]/10 dark:bg-white/10 text-[#0F2B5B] dark:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <h1
                className="text-4xl font-bold text-[#0F2B5B] dark:text-white"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {title || 'Your title here'}
              </h1>
              {excerpt && (
                <p className="text-xl text-gray-500 dark:text-white/50">
                  {excerpt}
                </p>
              )}
              <div className="flex items-center gap-4 text-sm text-gray-400 dark:text-white/30 pt-2">
                <span>{wordCount} words</span>
                <span>{readingTime} min read</span>
              </div>
            </div>
            <hr className="border-gray-200 dark:border-white/10" />
            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: editor.getHTML() }}
            />
          </div>
        ) : (
          /* Edit Mode */
          <div className="space-y-6">

            {/* Title */}
            <textarea
              placeholder="Your post title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              rows={2}
              className="w-full text-4xl font-bold text-[#0F2B5B] dark:text-white placeholder:text-gray-300 dark:placeholder:text-white/20 bg-transparent outline-none resize-none leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            />

            {/* Excerpt */}
            <textarea
              placeholder="Write a short excerpt (optional)..."
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={2}
              className="w-full text-xl text-gray-500 dark:text-white/50 placeholder:text-gray-300 dark:placeholder:text-white/20 bg-transparent outline-none resize-none"
            />

            <hr className="border-gray-200 dark:border-white/10" />

            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-1 p-2 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">

              {/* Text Formatting */}
              <ToolbarButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                active={editor.isActive('bold')}
                title="Bold"
              >
                <Bold className="h-4 w-4" />
              </ToolbarButton>

              <ToolbarButton
                onClick={() => editor.chain().focus().toggleItalic().run()}
                active={editor.isActive('italic')}
                title="Italic"
              >
                <Italic className="h-4 w-4" />
              </ToolbarButton>

              <ToolbarButton
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                active={editor.isActive('underline')}
                title="Underline"
              >
                <UnderlineIcon className="h-4 w-4" />
              </ToolbarButton>

              <div className="w-px h-6 bg-gray-300 dark:bg-white/10 mx-1" />

              {/* Headings */}
              <ToolbarButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                active={editor.isActive('heading', { level: 1 })}
                title="Heading 1"
              >
                <Heading1 className="h-4 w-4" />
              </ToolbarButton>

              <ToolbarButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                active={editor.isActive('heading', { level: 2 })}
                title="Heading 2"
              >
                <Heading2 className="h-4 w-4" />
              </ToolbarButton>

              <div className="w-px h-6 bg-gray-300 dark:bg-white/10 mx-1" />

              {/* Lists */}
              <ToolbarButton
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                active={editor.isActive('bulletList')}
                title="Bullet List"
              >
                <List className="h-4 w-4" />
              </ToolbarButton>

              <ToolbarButton
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                active={editor.isActive('orderedList')}
                title="Numbered List"
              >
                <ListOrdered className="h-4 w-4" />
              </ToolbarButton>

              <div className="w-px h-6 bg-gray-300 dark:bg-white/10 mx-1" />

              {/* Quote and Code */}
              <ToolbarButton
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                active={editor.isActive('blockquote')}
                title="Quote"
              >
                <Quote className="h-4 w-4" />
              </ToolbarButton>

              <ToolbarButton
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                active={editor.isActive('codeBlock')}
                title="Code Block"
              >
                <Code className="h-4 w-4" />
              </ToolbarButton>

              <div className="w-px h-6 bg-gray-300 dark:bg-white/10 mx-1" />

              {/* Alignment */}
              <ToolbarButton
                onClick={() => editor.chain().focus().setTextAlign('left').run()}
                active={editor.isActive({ textAlign: 'left' })}
                title="Align Left"
              >
                <AlignLeft className="h-4 w-4" />
              </ToolbarButton>

              <ToolbarButton
                onClick={() => editor.chain().focus().setTextAlign('center').run()}
                active={editor.isActive({ textAlign: 'center' })}
                title="Align Center"
              >
                <AlignCenter className="h-4 w-4" />
              </ToolbarButton>

              <ToolbarButton
                onClick={() => editor.chain().focus().setTextAlign('right').run()}
                active={editor.isActive({ textAlign: 'right' })}
                title="Align Right"
              >
                <AlignRight className="h-4 w-4" />
              </ToolbarButton>

            </div>

            {/* Editor */}
            <EditorContent editor={editor} />

            <hr className="border-gray-200 dark:border-white/10" />

            {/* Tags */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-[#0F2B5B] dark:text-white">
                  Add Tags
                </p>
                <p className="text-xs text-gray-400 dark:text-white/30">
                  {selectedTags.length}/5 selected
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {predefinedTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
                      selectedTags.includes(tag)
                        ? 'bg-[#0F2B5B] text-white border-[#0F2B5B]'
                        : 'bg-white dark:bg-white/5 text-gray-600 dark:text-white/60 border-gray-200 dark:border-white/10 hover:border-[#0F2B5B] dark:hover:border-white/30'
                    } ${selectedTags.length >= 5 && !selectedTags.includes(tag) ? 'opacity-40 cursor-not-allowed' : ''}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}

function ToolbarButton({
  onClick,
  active,
  title,
  children,
}: {
  onClick: () => void
  active: boolean
  title: string
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`p-2 rounded-lg transition-all ${
        active
          ? 'bg-[#0F2B5B] text-white'
          : 'text-gray-600 dark:text-white/60 hover:bg-gray-200 dark:hover:bg-white/10'
      }`}
    >
      {children}
    </button>
  )
}