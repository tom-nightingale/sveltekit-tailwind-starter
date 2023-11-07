export const extractMarks = (markDefs: any, child: any) => {
  let content = "";

  // If we don't have child marks then we're using plain text
  if (child.marks.length < 1) content = child.text;
  // if we have marks then we need to digest them
  child.marks.map((mark: any) => {
    if (mark === "strong" || mark === "em") {
      content = `<${mark}>${child.text}</${mark}>`;
      return;
    }
    markDefs.map((def: any) => {
      if (def._type === "link" && def._key === mark) {
        content = `<a href="${def.href}" target="${
          def.blank ? "_blank" : ""
        }">${child.text}</a>`;
        return;
      }
    });
  });
  return content;
};
