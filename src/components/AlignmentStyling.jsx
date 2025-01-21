import React from "react";

const AlignmentStyling = ({ sectionList, section, updateSectionStyle }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Alignment
      </label>
      <div className="mt-1 flex justify-between">
        {["text-left", "text-center", "text-right"].map((align) => (
          <button
            key={align}
            className={`px-4 py-2 rounded ${
              sectionList.find((s) => s.id === section)?.styles.textAlign ===
              align
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => updateSectionStyle(section, "textAlign", align)}
          >
            {align.replace("text-", "").charAt(0).toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AlignmentStyling;
