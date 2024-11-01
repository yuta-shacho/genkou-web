import { useState } from "react";
import MDEditor, { commands } from "@uiw/react-md-editor";
const Editor = () => {
  const [markdown, setMarkdown] = useState<string | undefined>("# h1");

  const customCommands = [
    commands.bold,
    commands.italic,
    commands.strikethrough,
    commands.link,
    commands.image,
    commands.group(
      [
        commands.title1,
        commands.title2,
        commands.title3,
        commands.title4,
        commands.title5,
        commands.title6,
      ],
      {
        name: "title",
        groupName: "title",
        buttonProps: { "aria-label": "Insert title" },
      }
    ),
  ];
  return (
    <div className="full-screen-container" data-color-mode="dark">
      <MDEditor
        value={markdown}
        height="100%"
        fullscreen={true}
        onChange={(val) => {
          setMarkdown(val!);
        }}
        enableScroll={true}
        commands={customCommands}
        extraCommands={[commands.codeEdit, commands.codePreview]}
        preview="edit"
      />
    </div>
  );
};

export default Editor;
