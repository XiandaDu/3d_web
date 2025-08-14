import React from "react";

const TagSelector = ({ selectedTags, onTagChange, availableTags }) => {
  return (
    <div className="mt-8 mb-6">
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => onTagChange([])}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedTags.length === 0
              ? "bg-blue-500 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          All
        </button>
        {availableTags.map((tag) => (
          <button
            key={tag}
            onClick={() => {
              if (selectedTags.includes(tag)) {
                onTagChange(selectedTags.filter((t) => t !== tag));
              } else {
                onTagChange([...selectedTags, tag]);
              }
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedTags.includes(tag)
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagSelector;
