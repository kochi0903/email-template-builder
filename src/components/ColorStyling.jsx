import React from "react";

const ColorStyling = ({ section , updateSectionStyle }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Text Color
      </label>
      <div className="mt-1 flex gap-2">
        {[
          "text-gray-800",
          "text-blue-600",
          "text-green-600",
          "text-red-600",
          "text-teal-500",
        ].map((color) => (
          <button
            key={color}
            className={`w-8 h-8 rounded-full border ${color.replace(
              "text",
              "bg"
            )}`}
            onClick={() => updateSectionStyle(section, "color", color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorStyling;
