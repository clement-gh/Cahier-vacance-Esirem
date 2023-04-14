import { Editor } from '@tiptap/core'
import "./menu_bar_text_editor.css"


///
/// Menu bar of the Tiptap editor
/// react function component because the lib don't support class components
///
const MenuBar = ( { editor }: { editor : Editor | null} ) => {
    if (!editor) {
      return null
    }
  
    return (
    <div className="menu_bar_text_editor">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          strike
        </button>
        <input
          type="color"
          onInput={event => editor.chain().focus().setColor((event.target as any).value).run()}
          value={editor.getAttributes('textStyle').color}
        />
        <button onClick={() => editor.chain().focus().unsetColor().run()}>unsetColor</button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          h2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          h3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          ordered list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
        >
          code block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          blockquote
        </button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          hr
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()}>
          br
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
        >
          undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
        >
          redo
        </button>
    </div>
)}

export default MenuBar;