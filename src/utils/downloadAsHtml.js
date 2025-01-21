const downloadTemplateasHTML = (sectionList, imageURL) => {
  const htmlContent = sectionList
    .map((section) => {
      return `<div style="font-size: ${section.styles.fontSize}; color: ${section.styles.color}; text-align: ${section.styles.textAlign}; font-weight: ${section.styles.fontWeight};">
                ${section.content}
              </div>`;
    })
    .join("");

  const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Template</title>
        <style>
          body { font-family: Arial, sans-serif; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          img { max-width: 100%; height: auto; }
        </style>
      </head>
      <body>
        <div class="container">
          ${imageURL ? `<img src="${imageURL}" alt="Logo" />` : ""}
          ${htmlContent}
        </div>
      </body>
      </html>
    `;

  const blob = new Blob([htmlTemplate], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "email-template.html";
  a.click();
  URL.revokeObjectURL(url);
};

export default downloadTemplateasHTML;
