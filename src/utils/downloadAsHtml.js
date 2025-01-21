function generateHTMLCSS(sections, imageURL) {
  let htmlContent = "";
  let cssContent = "";

  sections.forEach((section) => {
    // Extract styles
    const {
      fontSize,
      color,
      textAlign,
      fontWeight,
      textDecoration,
      fontStyle,
    } = section.styles;

    // Generate unique class name
    const className = `section-${section.id}`;

    // Append CSS
    cssContent += `
      .${className} {
        font-size: var(--${fontSize});
        color: var(--${color});
        text-align: var(--${textAlign});
        font-weight: var(--${fontWeight});
        font-style:var(--${fontStyle});
        textDecoration:var(--${textDecoration});
      }
    `;

    // Append HTML
    htmlContent += `
      <div class="${className}">
        ${section.content}
      </div>
    `;
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Generated Email</title>
      <style>
        :root {
    /* Font Sizes */
    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.5rem;

    /* Colors */
    --text-gray-800: #1F2937;
    --text-blue-600: #2563EB;
    --text-green-600: #16A34A;
    --text-red-600: #DC2626;
    --text-teal-500: #14B8A6;

    /* Text Alignments */
    --text-left: left;
    --text-center: center;
    --text-right: right;

    /* Font Weights */
    --font-normal: normal;
    --font-bold: bold;

    /* Text Styles */
    --italic: italic;
    --underline: underline;

        ${cssContent}
      </style>
    </head>
    <body>
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="${imageURL}" alt="Logo" style="max-width: 200px; height: auto;" />
      </div>
      ${htmlContent}
    </body>
    </html>
  `;
}

function downloadTemplateasHTML(sections, imageURL) {
  const content = generateHTMLCSS(sections, imageURL);
  console.log(content);
  const blob = new Blob([content], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "email.html";
  link.click();
}

export default downloadTemplateasHTML;
