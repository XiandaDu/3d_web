import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences, skills } from "../constants";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const Introduction = () => {
  return (
    // welcome information
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
          Step into my tech universe, where precision meets passion. With a
          focus on practical solutions and streamlined development, I specialize
          in creating efficient, effective solutions. Explore my skills and
          discover the craftsmanship behind every project. Let's build something
          remarkable together!
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

      {/* Next Section, work exps */}
      <div className="py-16">
        <h3 className="subhead-text">Professional Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Through collaborations with diverse companies, I've continually
            enhanced my skills while collaborating with bright minds. Here's a
            glimpse into my journey:
          </p>
        </div>

        {/* Use the vertical time line lib to create a time line of my past work exps */}
        <div className="mt-12 flex">
          <VerticalTimeline className="w-full">
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
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
      </div>

      {/* In case someone wants to contact me from here, add a btn to jump to my contact */}
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Introduction;
