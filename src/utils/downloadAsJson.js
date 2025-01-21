const downloadTemplateasJSON = (sectionList) => {
  const template = {
    imageURL,
    sectionList,
    metadata: {
      createdAt: new Date().toISOString(),
      version: "1.0",
    },
  };
  const blob = new Blob([JSON.stringify(template, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "email-template.json";
  a.click();
  URL.revokeObjectURL(url);
};

export default downloadTemplateasJSON;
