import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $createHeadingNode,
  $isHeadingNode,
  HeadingTagType,
} from "@lexical/rich-text";
import { $getSelection, $isRangeSelection } from "lexical";
import { mergeRegister } from "@lexical/utils";
import { $setBlocksType } from "@lexical/selection";

export const SupportedBlockType = {
  paragraph: "Paragraph",
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  h5: "Heading 5",
  h6: "Heading 6",
} as const;

type BlockType = keyof typeof SupportedBlockType;

const BLOCK_LIST: HeadingTagType[] = ["h1", "h2", "h3"];

const CustomBlockTypePlugin = () => {
  const [editor] = useLexicalComposerContext();
  const [currentBlockType, setCurrentBlockType] =
    useState<BlockType>("paragraph");

  const formatHeading = useCallback(
    (type: HeadingTagType) => {
      if (currentBlockType !== type) {
        editor.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            $setBlocksType(selection, () => $createHeadingNode(type));
          }
        });
      }
    },
    [currentBlockType, editor],
  );

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          const selection = $getSelection();

          if (!$isRangeSelection(selection)) return;

          const anchorNode = selection.anchor.getNode();
          const targetNode =
            anchorNode.getKey() === "root"
              ? anchorNode
              : anchorNode.getTopLevelElementOrThrow();

          if ($isHeadingNode(targetNode)) {
            const tag = targetNode.getTag();
            console.log({ tag });
            setCurrentBlockType(tag);
          } else {
            const nodeType = targetNode.getType();
            if (nodeType in SupportedBlockType) {
              setCurrentBlockType(nodeType as BlockType);
            } else {
              setCurrentBlockType("paragraph");
            }
          }
        });
      }),
    );
  }, [editor]);

  return (
    <div className={"flex items-center gap-x-2"}>
      {BLOCK_LIST.map((blockType) => (
        <Button
          key={blockType}
          variant={currentBlockType === blockType ? "default" : "outline"}
          size={"icon"}
          title={SupportedBlockType[blockType]}
          aria-label={SupportedBlockType[blockType]}
          aria-checked={blockType === blockType}
          onClick={() => formatHeading(blockType)}
        >
          {blockType.toUpperCase()}
        </Button>
      ))}
    </div>
  );
};

export default CustomBlockTypePlugin;
