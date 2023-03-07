import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

export const RichText = ({ data }) => {
  if (typeof data === "object" && "blocks" in data) {
    return (
      <Editor
        readOnly
        toolbarHidden
        contentState={{ entityMap: {}, ...data }}
      />
    );
  }
  return data;
};
