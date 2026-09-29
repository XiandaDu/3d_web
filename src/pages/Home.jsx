import React, { useState, useMemo } from "react";
import {
  researchExperiences,
  professionalExperiences,
  skills,
} from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TagSelector from "../components/TagSelector";

// A tag-filterable vertical timeline. Each section keeps its own filter state.
// `hiddenTags` are tags shared by every item in the section (e.g. "Research"),
// which would be useless as filters.
const ExperienceTimeline = ({ items, hiddenTags = [] }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  // Get all unique tags from this section's items
  const availableTags = useMemo(() => {
    const tags = new Set();
    items.forEach((exp) => {
      exp.tags.forEach((tag) => {
        if (!hiddenTags.includes(tag)) tags.add(tag);
      });
    });
    return Array.from(tags).sort();
  }, [items, hiddenTags]);

  // Filter items based on selected tags
  const filteredItems = useMemo(() => {
    if (selectedTags.length === 0) {
      return items;
    }
    return items.filter((exp) =>
      exp.tags.some((tag) => selectedTags.includes(tag))
    );
  }, [items, selectedTags]);

  return (
    <>
      {/* Tag Selector */}
      <TagSelector
        selectedTags={selectedTags}
        onTagChange={setSelectedTags}
        availableTags={availableTags}
      />

      {/* Use the vertical time line lib to create a time line of experiences */}
      <div className="mt-12 flex">
        <VerticalTimeline className="w-full">
          {filteredItems.map((experience) => (
            <VerticalTimelineElement
              key={`${experience.company_name}-${experience.title}`}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[80%] h-[80%] object-contain"
                  />
                </div>
              }
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experience.iconBg,
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              <div>
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title} {experience.link ? "🔗" : ""}
                  </h3>
                </a>
                <p
                  className="text-black-500 font-medium text-base"
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>

                {/* Tags display */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {experience.tags
                    .filter((tag) => !hiddenTags.includes(tag))
                    .map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, idx) => (
                  <li
                    key={`experience-point-${idx}`}
                    className="text-black-500 font-normal pl-1 text-sm"
                  >
                    {typeof point === "string" ? (
                      <span dangerouslySetInnerHTML={{ __html: point }} />
                    ) : (
                      point
                    )}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

const EXPERIENCE_TABS = [
  {
    id: "research",
    label: "Research",
    items: researchExperiences,
    // every research item carries this tag, so it is useless as a filter
    hiddenTags: ["Research"],
    description:
      "I have worked with research groups at the University of Waterloo, McGill University, and Université de Montréal on search agents, retrieval benchmarks, VLM evaluation, and generative models.",
  },
  {
    id: "professional",
    label: "Industry & Engineering",
    items: professionalExperiences,
    hiddenTags: [],
    description:
      "Through internships and engineering roles, I've continually enhanced my skills while collaborating with bright minds. Here's a glimpse into my journey:",
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState(EXPERIENCE_TABS[0].id);
  const currentTab = EXPERIENCE_TABS.find((tab) => tab.id === activeTab);

  return (
    <div>
      {/* welcome information */}
      <section className="max-container">
        <h1 className="head-text">
          Hello, I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            {" "}
            Xianda
          </span>{" "}
          👋
        </h1>

        {/* brief self-introduction */}
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I am a Computer Engineering student (AI Option) at the University of
            Waterloo and an Autonomy and Algorithm Engineer Intern at Waabi. My
            research spans search agents and information retrieval,
            vision-language model evaluation, and generative models, with papers
            at ACL 2025, SIGIR 2026, and a NeurIPS 2026 workshop, plus three
            ICLR 2027 submissions. I also enjoy building full-stack and ML
            systems end to end. For a concise academic CV, visit{" "}
            <a
              href="https://cv.allendu.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold"
            >
              cv.allendu.me
            </a>
            .
          </p>
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>
          {/*itrate through my skills, find different types*/}
          <div>
            {Array.from(new Set(skills.map((skill) => skill.type))).map(
              (type) => (
                <div className="mt-6" key={type}>
                  <h4 className="text-xl font-bold mb-4">{type}</h4>
                  {/*Based on the type, render the skills, so that skills are arranged in types, which is clearer */}
                  <div className="flex flex-wrap gap-12 mt-6">
                    {skills
                      .filter((skill) => skill.type === type)
                      .map((skill) => (
                        <div
                          className="block-container w-20 h-20"
                          key={skill.name}
                        >
                          <div className="btn-back rounded-xl" />
                          <div className="btn-front rounded-xl flex flex-col justify-center items-center">
                            <img
                              src={skill.imageUrl}
                              alt={skill.name}
                              className="w-1/2 h-1/2 object-contain"
                            />
                            <div className="text-center text-sm">
                              {skill.name}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Experience: research and professional roles as two tabs */}
        <div className="py-16">
          <h3 className="subhead-text">Experience.</h3>

          <div
            className="mt-6 inline-flex rounded-full bg-gray-200 p-1"
            role="tablist"
          >
            {EXPERIENCE_TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {tab.label}
                <span className="ml-2 text-xs opacity-80">
                  {tab.items.length}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>{currentTab.description}</p>
          </div>

          {/* key resets the tag filter when switching tabs */}
          <ExperienceTimeline
            key={currentTab.id}
            items={currentTab.items}
            hiddenTags={currentTab.hiddenTags}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
