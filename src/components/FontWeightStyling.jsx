import React from "react";

const FontWeightStyling = ({ sectionList, section, updateSectionStyle }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Font Weight
      </label>
      <div className="flex gap-2">
        <button
          onClick={() =>
            updateSectionStyle(
              section,
              "fontWeight",
              sectionList.find((s) => s.id === section).styles.fontWeight ===
                "font-bold"
                ? "font-normal"
                : "font-bold"
            )
          }
          className={`px-4 py-2 rounded ${
            sectionList.find((s) => s.id === section).styles.fontWeight ===
            "font-bold"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Bold
        </button>
        <button
          onClick={() =>
            updateSectionStyle(
              section,
              "textDecoration",
              sectionList.find((s) => s.id === section).styles
                .textDecoration === "underline"
                ? "none"
                : "underline"
            )
          }
          className={`px-4 py-2 rounded ${
            sectionList.find((s) => s.id === section).styles.textDecoration ===
            "underline"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Underline
        </button>
        <button
          onClick={() =>
            updateSectionStyle(
              section,
              "fontStyle",
              sectionList.find((s) => s.id === section).styles.fontStyle ===
                "italic"
                ? "normal"
                : "italic"
            )
          }
          className={`px-4 py-2 rounded ${
            sectionList.find((s) => s.id === section).styles.fontStyle ===
            "italic"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Italic
        </button>
      </div>
    </div>
  );
};

export default FontWeightStyling;
