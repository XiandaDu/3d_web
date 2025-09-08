import React from "react";

const TagSelector = ({
  selectedTags,
  onTagChange,
  availableTags,
  availableTagsByCategory,
}) => {
  const areAllCategoryTagsSelected = (category) => {
    if (!availableTagsByCategory || !availableTagsByCategory[category])
      return false;
    const categoryTags = availableTagsByCategory[category];
    return categoryTags.every((t) => selectedTags.includes(t));
  };

  const toggleCategory = (category) => {
    if (!availableTagsByCategory || !availableTagsByCategory[category]) return;
    const categoryTags = availableTagsByCategory[category];
    const allSelected = categoryTags.every((t) => selectedTags.includes(t));
    if (allSelected) {
      onTagChange(selectedTags.filter((t) => !categoryTags.includes(t)));
    } else {
      const merged = new Set([...selectedTags, ...categoryTags]);
      onTagChange(Array.from(merged));
    }
  };

  return (
    <div className="mt-8 mb-6">
      {/* Grouped view when categories provided */}
      {availableTagsByCategory ? (
        <div className="space-y-3">
          {/* Row: All */}
          <div className="flex items-start gap-3 flex-wrap">
            <div className="min-w-[140px]">
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
            </div>
          </div>

          {Object.entries(availableTagsByCategory).map(([category, tags]) => (
            <div key={category} className="flex items-start gap-3 flex-wrap">
              <div className="min-w-[140px]">
                <button
                  onClick={() => toggleCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
                    areAllCategoryTagsSelected(category)
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <button
                    key={`${category}-${tag}`}
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
          ))}
        </div>
      ) : (
        // Flat list fallback for backward compatibility
        <div className="flex flex-wrap gap-3">
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
          {availableTags?.map((tag) => (
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
      )}
    </div>
  );
};

export default TagSelector;
