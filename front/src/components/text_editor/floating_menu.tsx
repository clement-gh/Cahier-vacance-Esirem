import { BubbleMenu, Editor, FloatingMenu } from "@tiptap/react";
import "./floating_menu.css"

///
/// Menu Flottant de l'éditeur de texte.
/// react function component because the lib don't support class components
///
const FloatingMenuBar = ({editor} : {editor: Editor |null} ) => {
    if(!editor)
        return null;

    return (
    <div className="floating_menu_div">
        <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
            >
                Bold
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active' : ''}
            >
                Italic
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'is-active' : ''}
            >
                Strike
            </button>
            <input
                type="color"
                onInput={event => editor.chain().focus().setColor((event.target as any).value).run()}
                value={editor.getAttributes('textStyle').color}
            />
        </BubbleMenu>

        <FloatingMenu className="floating-menu" tippyOptions={{ duration: 100 }} editor={editor}>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
            >
                H2
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
            >
                H3
            </button>
            
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
                Bullet List
            </button>
        </FloatingMenu>
    </div>
    );
};

export default FloatingMenuBar;