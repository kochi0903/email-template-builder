import React, { useState } from "react";
import {
  ArrowUp,
  ArrowDown,
  Download,
  Plus,
  Upload,
  CircleX,
} from "lucide-react";
import ColorStyling from "./components/ColorStyling";
import AlignmentStyling from "./components/AlignmentStyling";
import TextSizeStyling from "./components/TextSizeStyling";
import SectionWriter from "./components/SectionWriter";
import downloadTemplateasJSON from "./utils/downloadAsJson";
import downloadTemplateasHTML from "./utils/downloadAsHtml";
import FontWeightStyling from "./components/FontWeightStyling";

const EmailBuilder = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [sections, setSections] = useState([
    {
      id: 1,
      type: "text",
      content: "Email has never been easier",
      styles: {
        fontSize: "text-xl",
        color: "text-gray-800",
        textAlign: "text-left",
        fontWeight: "font-normal",
      },
    },
    {
      id: 2,
      type: "text",
      content: "Create beautiful and sophisticated emails in minutes",
      styles: {
        fontSize: "text-base",
        color: "text-gray-600",
        textAlign: "text-left",
        fontWeight: "font-normal",
      },
    },
  ]);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const moveSection = (index, direction) => {
    const newSections = [...sections];
    const temp = newSections[index];
    if (direction === "up" && index > 0) {
      newSections[index] = newSections[index - 1];
      newSections[index - 1] = temp;
    } else if (direction === "down" && index < newSections.length - 1) {
      newSections[index] = newSections[index + 1];
      newSections[index + 1] = temp;
    }
    setSections(newSections);
  };

  const updateSectionStyle = (id, styleKey, value) => {
    setSections(
      sections.map((section) =>
        section.id === id
          ? { ...section, styles: { ...section.styles, [styleKey]: value } }
          : section
      )
    );
  };

  const updateSectionContent = (id, content) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, content } : section
      )
    );
  };

  const addNewSection = () => {
    const newSection = {
      id: Date.now(),
      type: "text",
      content: "New Section",
      styles: {
        fontSize: "text-base",
        color: "text-gray-800",
        textAlign: "text-left",
        fontWeight: "font-normal",
        fontStyle:"none",
        textDecoration:"none"
      },
    };
    setSections([...sections, newSection]);
  };

  const deleteSection = (id) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  return (
    <>
      <header className="bg-rgb(221 231 250) text-center text-blue-800 font-semibold mb-3 p-4 rounded">
        EMAIL TEMPLATE BUILDER
      </header>
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
        <div className="w-full lg:w-2/3 p-6">
          <div className="bg-white rounded-lg shadow-lg p-8 min-h-[600px]">
            <div className="mb-4">
              {/* Image Upload Button */}
              <div className="mt-6">
                {imageUrl ? (
                  <div className="relative mt-2">
                    <button
                      onClick={() => setImageUrl(null)}
                      className="p-1 bg-red-100 rounded-full hover:bg-red-200"
                    >
                      <CircleX size={12} />
                    </button>
                    <img
                      src={imageUrl}
                      alt="Uploaded"
                      className="w-full h-auto max-h-64 object-contain rounded"
                    />
                  </div>
                ) : (
                  <>
                    <h2 className="font-semibold mb-3">Add Logo</h2>
                    <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload
                      <input
                        type="file"
                        onChange={handleImageUpload}
                        className="hidden"
                        accept="image/*"
                      />
                    </label>
                  </>
                )}
              </div>
            </div>
            {/* Sections Display  */}
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`relative p-2 my-2 cursor-pointer ${
                  selectedSection === section.id
                    ? "ring-2 ring-blue-500 rounded"
                    : ""
                }`}
                onClick={() => setSelectedSection(section.id)}
              >
                <div
                  className={`${section.styles.fontSize} ${section.styles.color} 
                 ${section.styles.textAlign} ${section.styles.fontWeight} ${section.styles.fontStyle} ${section.styles.textDecoration}`}
                >
                  {section.content}
                </div>
                <div className="absolute right-2 top-2 flex gap-2 opacity-0 hover:opacity-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      moveSection(index, "up");
                    }}
                    className="p-1 bg-gray-100 rounded-full hover:bg-gray-200"
                  >
                    <ArrowUp size={12} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      moveSection(index, "down");
                    }}
                    className="p-1 bg-gray-100 rounded-full hover:bg-gray-200"
                  >
                    <ArrowDown size={12} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteSection(section.id);
                    }}
                    className="p-1 bg-red-100 rounded-full hover:bg-red-200"
                  >
                    <CircleX size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Editor Panel */}
        <div className="w-full lg:w-1/3 bg-white p-6 shadow-lg">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Edit Section</h2>

            {selectedSection && (
              <div className="space-y-4">
                <SectionWriter
                  sectionList={sections}
                  section={selectedSection}
                  updateSectionContent={updateSectionContent}
                />
                <TextSizeStyling
                  sectionList={sections}
                  section={selectedSection}
                  updateSectionStyle={updateSectionStyle}
                />
                <AlignmentStyling
                  sectionList={sections}
                  section={selectedSection}
                  updateSectionStyle={updateSectionStyle}
                />
                <ColorStyling
                  section={selectedSection}
                  updateSectionStyle={updateSectionStyle}
                />
                <FontWeightStyling
                  sectionList={sections}
                  section={selectedSection}
                  updateSectionStyle={updateSectionStyle}
                />
              </div>
            )}

            <div className="flex flex-wrap justify-between gap-2 pt-4">
              <button
                onClick={addNewSection}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                <Plus size={16} /> Add Section
              </button>
              <button
                onClick={() => downloadTemplateasJSON(sections, imageUrl)}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                <Download size={16} /> Download as JSON
              </button>
              <button
                onClick={() => downloadTemplateasHTML(sections, imageUrl)}
                className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-green-600"
              >
                <Download size={16} /> Download as HTML
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailBuilder;
