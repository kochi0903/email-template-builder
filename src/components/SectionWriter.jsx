import React from "react";

const SectionWriter = ({ sectionList, section, updateSectionContent }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Content</label>
      <textarea
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        value={sectionList.find((s) => s.id === section)?.content}
        onChange={(e) => updateSectionContent(section, e.target.value)}
      />
    </div>
  );
};

export default SectionWriter;
