import { Editor } from '@tiptap/core'
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import MenuBar from "./menu_bar_text_editor";
import "./text_editor.css"
import FloatingMenuBar from './floating_menu';

///
/// global variable of the Tiptap editor.
/// allow us to use get the editor outise of the component
///
var editor: any;

export function getEditor() : Editor | null {
    return editor;
}


///
/// We use React function component because 'useEditor' don't allow us to use class component
///
export function TextEditor() {
  editor = useEditor({
    extensions: [
        TextStyle,
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
    //   TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
    ],
    content: `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
      </p>
      <ul>
        <li>
          That’s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
      <p>
        Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
      </p>
      <pre><code class="language-css">body {
  display: none;
}</code></pre>
      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
      </p>
      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
    `,
  })

  return (
    <div className="text_editor">
      <MenuBar editor={editor} />
      <FloatingMenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}