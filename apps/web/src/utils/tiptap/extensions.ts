import type { Extensions } from '@tiptap/core';
import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import Code from '@tiptap/extension-code';
import CodeBlock from '@tiptap/extension-code-block';
import Document from '@tiptap/extension-document';
import Focus from '@tiptap/extension-focus';
import Heading from '@tiptap/extension-heading';
import { Highlight } from '@tiptap/extension-highlight';
import History from '@tiptap/extension-history';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Image from '@tiptap/extension-image';
import Italic from '@tiptap/extension-italic';
import { Link } from '@tiptap/extension-link';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';
import { Placeholder } from '@tiptap/extension-placeholder';
import Strike from '@tiptap/extension-strike';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Text from '@tiptap/extension-text';
import Underline from '@tiptap/extension-underline';
import Youtube from '@tiptap/extension-youtube';

export const EXTENSIONS: Extensions = [
  Focus.configure({
    className: 'has-focus',
    mode: 'all',
  }),
  Blockquote,
  Document,
  Paragraph.configure({
    HTMLAttributes: {
      class: 'my-3',
    },
  }),
  Text,
  BulletList,
  CodeBlock,
  Heading,
  HorizontalRule.configure({ HTMLAttributes: { class: 'my-3' } }),
  ListItem,
  OrderedList,
  Underline,
  Bold,
  Code,
  Italic,
  Strike,
  Highlight,
  Link.configure({
    openOnClick: true,
    autolink: true,
    protocols: ['https', 'http'],
    HTMLAttributes: { class: 'text-primary' },
  }),
  TaskList.configure({}),
  TaskItem.configure({
    nested: true,
  }),
  Youtube.configure({
    HTMLAttributes: {
      class: 'rounded-lg overflow-hidden aspect-video w-full h-auto',
    },
  }),
  Image.configure({
    HTMLAttributes: {
      class: 'rounded-lg',
    },
  }),
  History,
  // FileHandler.configure({
  //   allowedMimeTypes: [
  //     "image/png",
  //     "image/jpeg",
  //     "image/gif",
  //     "image/webp",
  //   ],
  //   onDrop: (currentEditor: Editor, files: File[], pos: number | Range) => {
  //     files.forEach((file: File) => {
  //       const fileReader = new FileReader();
  //
  //       fileReader.readAsDataURL(file);
  //       fileReader.onload = () => {
  //         currentEditor
  //           .chain()
  //           .insertContentAt(pos, {
  //             type: "image",
  //             attrs: {
  //               src: fileReader.result,
  //             },
  //           })
  //           .focus()
  //           .run();
  //       };
  //     });
  //   },
  //   onPaste: (currentEditor: Editor, files: File[], htmlContent) => {
  //     files.forEach((file) => {
  //       if (htmlContent) {
  //         // if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
  //         // you could extract the pasted file from this url string and upload it to a server for example
  //         console.log(htmlContent); // eslint-disable-line no-console
  //         return false;
  //       }
  //
  //       const fileReader = new FileReader();
  //
  //       fileReader.readAsDataURL(file);
  //       fileReader.onload = () => {
  //         currentEditor
  //           .chain()
  //           .insertContentAt(currentEditor.state.selection.anchor, {
  //             type: "image",
  //             attrs: {
  //               src: fileReader.result,
  //             },
  //           })
  //           .focus()
  //           .run();
  //       };
  //     });
  //   },
  // }),
  Placeholder.configure({
    // emptyEditorClass: "prose-empty",
    emptyNodeClass:
      'before:content-[attr(data-placeholder)] before:float-left before:pointer-events-none before:text-muted-foreground before:h-0',
    // Use a placeholder:
    // placeholder: "Write something …",
    // Use different placeholders depending on the node type:
    placeholder: () =>
      // { node }
      {
        // if (node.type.name === "heading") {
        //   return "What’s the title?";
        // }

        return '여기에 내용을 적어 주세요 ✍️';
      },
  }),
];
