import React, { useCallback, useEffect, useState } from "react";
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  TextFormatType,
} from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Button } from "@/components/ui/button";
import { mergeRegister } from "@lexical/utils";

const CustomTextActionPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isCode, setIsCode] = useState(false);
  const [isHighlight, setIsHighlight] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();

    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
      setIsCode(selection.hasFormat("code"));
      setIsHighlight(selection.hasFormat("highlight"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));
    }
  }, []);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
    );
  }, [updateToolbar, editor]);

  const handleOnClick = (formatType: TextFormatType) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, formatType);
  };

  return (
    <div className={"flex items-center gap-x-2"}>
      <Button
        key={"Bold"}
        variant={isBold ? "default" : "outline"}
        size={"icon"}
        onClick={() => handleOnClick("Bold".toLowerCase() as TextFormatType)}
      >
        {"Bold".slice(0, 1).toUpperCase()}
      </Button>
      <Button
        key={"Italic"}
        variant={isItalic ? "default" : "outline"}
        size={"icon"}
        onClick={() => handleOnClick("Italic".toLowerCase() as TextFormatType)}
      >
        {"Italic".slice(0, 1).toUpperCase()}
      </Button>
      <Button
        key={"Underline"}
        variant={isUnderline ? "default" : "outline"}
        size={"icon"}
        onClick={() =>
          handleOnClick("Underline".toLowerCase() as TextFormatType)
        }
      >
        {"Underline".slice(0, 1).toUpperCase()}
      </Button>

      <Button
        key={"Code"}
        variant={isCode ? "default" : "outline"}
        size={"icon"}
        onClick={() => handleOnClick("Code".toLowerCase() as TextFormatType)}
      >
        {"Code".slice(0, 1).toUpperCase()}
      </Button>
      <Button
        key={"Highlight"}
        variant={isHighlight ? "default" : "outline"}
        size={"icon"}
        onClick={() =>
          handleOnClick("Highlight".toLowerCase() as TextFormatType)
        }
      >
        {"Highlight".slice(0, 1).toUpperCase()}
      </Button>
      <Button
        key={"Strikethrough"}
        variant={isStrikethrough ? "default" : "outline"}
        size={"icon"}
        onClick={() =>
          handleOnClick("Strikethrough".toLowerCase() as TextFormatType)
        }
      >
        {"Strikethrough".slice(0, 1).toUpperCase()}
      </Button>
    </div>
  );
};

export default CustomTextActionPlugin;
