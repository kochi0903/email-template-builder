import React from "react";

const TextSizeStyling = ({ sectionList, section, updateSectionStyle }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Text Size
      </label>
      <select
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        value={sectionList.find((s) => s.id === section)?.styles.fontSize}
        onChange={(e) =>
          updateSectionStyle(section, "fontSize", e.target.value)
        }
      >
        <option value="text-xs">Extra Small</option>
        <option value="text-sm">Small</option>
        <option value="text-base">Medium</option>
        <option value="text-lg">Large</option>
        <option value="text-xl">Extra Large</option>
        <option value="text-2xl">2XL</option>
      </select>
    </div>
  );
};

export default TextSizeStyling;
