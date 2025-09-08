import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import TagSelector from "../components/TagSelector";

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  // Build available tags grouped by category from the projects data
  const availableTagsByCategory = useMemo(() => {
    const categoryToTagsMap = new Map();

    projects.forEach((project) => {
      const projectTagsByCategory = project.tags || {};
      Object.entries(projectTagsByCategory).forEach(([category, tags]) => {
        if (!categoryToTagsMap.has(category)) {
          categoryToTagsMap.set(category, new Set());
        }
        const bucket = categoryToTagsMap.get(category);
        tags.forEach((tag) => bucket.add(tag));
      });
    });

    // Convert Set buckets to sorted arrays
    const result = {};
    categoryToTagsMap.forEach((value, key) => {
      result[key] = Array.from(value).sort();
    });
    return result;
  }, []);

  // Flattened list for convenience in some consumers
  const availableTags = useMemo(() => {
    return Object.values(availableTagsByCategory).flat().sort();
  }, [availableTagsByCategory]);

  // Filter projects based on selected tags (match ANY tag)
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) {
      return projects;
    }
    return projects.filter((project) => {
      const projectAllTags = Object.values(project.tags || {}).flat();
      return projectAllTags.some((tag) => selectedTags.includes(tag));
    });
  }, [selectedTags]);

  const handleTagChange = (newTags) => {
    setSelectedTags(newTags);
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        During my tenure as a sophomore Computer Engineering student at the
        University of Waterloo, I've engaged in a spectrum of tech projects,
        encompassing web development with React, Machine Learning and Spring.
        These projects represent my passion for technology and innovation.
        Notably, all of these initiatives are open-source, reflecting my belief
        in collaborative learning and knowledge sharing. I invite you to explore
        these projects, as your insights and feedback are invaluable for their
        continual improvement and evolution.
      </p>

      {/* Tag Selector */}
      <TagSelector
        selectedTags={selectedTags}
        onTagChange={handleTagChange}
        availableTags={availableTags}
        availableTagsByCategory={availableTagsByCategory}
      />

      <div className="flex flex-wrap my-20 gap-16">
        {filteredProjects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>

              {/* Tags display grouped by category */}
              <div className="flex flex-col gap-2 mt-2">
                {Object.entries(project.tags || {}).map(([category, tags]) => (
                  <div
                    key={category}
                    className="flex flex-wrap items-center gap-2"
                  >
                    <span className="text-[10px] uppercase tracking-wide text-slate-400 mr-1">
                      {category}
                    </span>
                    {tags.map((tag) => (
                      <span
                        key={`${category}-${tag}`}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ))}
              </div>

              <p className="mt-2 text-slate-500">
                <span
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </p>

              <div>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    View Code
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
                <div className="mt-2 flex items-center gap-2 font-poppins">
                  {project.demo && (
                    <Link
                      to={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600"
                    >
                      Live Demo Link
                    </Link>
                  )}
                  {project.demo && (
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4 object-contain"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
