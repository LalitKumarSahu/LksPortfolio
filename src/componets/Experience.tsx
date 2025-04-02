import { useState } from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Softricity Pvt Ltd",
      role: "Software Developer Intern",
      duration: "Jan 2025 - Mar 2025",
      work: [
        "Developed and optimized scalable web applications using the MERN stack, improving performance and user experience.",
        "Designed and implemented RESTful APIs, enhancing backend efficiency and reducing response time by 30%.",
        "Implemented secure authentication and authorization using JWT, ensuring data integrity and user access control.",
        "Optimized database queries and integrated third-party APIs to improve application functionality and efficiency.",
      ],
    },
    {
      company: "GSSoC'24",
      role: "Open Source Contributor",
      duration: "May 2024 - Aug 2024",
      work: [
        "Contributed to multiple open-source projects, fixing bugs, adding new features, and optimizing codebases.",
        "Improved project documentation, making repositories more accessible and beginner-friendly.",
        "Collaborated with maintainers and fellow developers to follow best coding practices and adhere to project guidelines.",
        "Worked extensively with Git, GitHub, and CI/CD pipelines, ensuring seamless integration and deployment.",
        "Participated in code reviews, enhancing code quality, readability, and maintainability.",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mt-16 w-[90%] md:w-[80%] mx-auto flex flex-col gap-10 py-8">
      {/* Heading */}
      <div className="flex items-center gap-4 w-2/3">
        <h1 className="text-3xl font-bold text-lightGary whitespace-nowrap">
          <span className="font-mono text-lightNavy">02.</span> Experience
        </h1>
        <div className="h-[1px] w-full bg-lightGary"></div>
      </div>

      {/* Experience List */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Side: Companies */}
        <div className="relative md:w-1/4">
          <div className="absolute left-0 top-0 w-[1px] h-full bg-lightGary"></div>
          <div className="flex flex-col font-mono">
            {experiences.map((exp, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative cursor-pointer text-md px-4 py-2 text-lightGary transition-all duration-300 ease-in-out 
                  ${
                    activeIndex === index
                      ? "border-l-2 border-lightNavy bg-lightNavy/10 text-lightNavy"
                      : "border-l-2 border-transparent hover:border-lightNavy hover:bg-lightNavy/10"
                  }`}
              >
                {exp.company}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="md:w-3/4 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-lightNavy">
            {experiences[activeIndex].role}{" "}
            <span className="text-lightGary">
              @ {experiences[activeIndex].company}
            </span>
          </h2>
          <p className="text-sm text-lightGary">
            {experiences[activeIndex].duration}
          </p>
          <ul className="list-disc ml-6 text-lightGary">
            {experiences[activeIndex].work.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
