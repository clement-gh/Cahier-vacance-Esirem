import { Editor } from '@tiptap/core'
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import MenuBar from "./menu_bar_text_editor";
import "./text_editor.css"
import FloatingMenuBar from './floating_menu';


type TextEditorProps = {
  content?: string,
};

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
export function TextEditor(props: TextEditorProps) {
  const content: string = props.content ? props.content : ("<h2>Bienvenue !</h2>"
      +"<p>Créer ton propre cours avec cet éditeur</p>");
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
    content: content,
  })

  return (
    <div className="text_editor">
      <MenuBar editor={editor} />
      <FloatingMenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}