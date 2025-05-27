import Link from 'next/link';

const projects = [

  {
    title: 'Predictive Modelling & Data Augmentation for Cricket Analytics',
    description:
      'Developed a machine learning pipeline for predictive modeling in niche sports analytics (WPL cricket), addressing sparse datasets. Applied SMOGN and feature engineering to improve prediction accuracy. Collaborated with faculty and evaluated regression models. Created Python CLI for data scraping and preprocessing.',
    tags: [
      'Python',
      'SMOGN',
      'Regression',
      'Feature Engineering',
      'Sports Analytics',
      'Machine Learning',
    ],
    link: 'https://docs.google.com/document/d/14HNHQ-XNDwT1Xysy7s41vyIKMKrlKzlob1ni2wmspdM/edit?tab=t.0',
    date: '10/2024 - 04/2025',
  },
  {
    title: 'RBI NEFT Data Analysis and Visualization Platform',
    description:
      'Developed a Flask web app to analyze and visualize large-scale RBI NEFT transaction datasets. Automated web scraping, processed data, and generated dynamic visualizations. Created interactive frontend using HTML, CSS, and Jinja2.',
    tags: [
      'Flask',
      'SQLAlchemy',
      'MySQL',
      'BeautifulSoup',
      'Jinja2',
      'Matplotlib',
      'Data Visualization',
    ],
    link: 'https://github.com/Harthik777/rbi_neft_graphs',
    date: '03/2025 - 04/2025',
  },
  {
    title:
      'A Validated Machine Learning Framework for Data-Scarce Regression: SMOGN Augmentation in Cricket Performance Prediction',
    description:
      'Manuscript Draft Completed, Pending Submission. This research focuses on applying SMOGN for data augmentation in regression tasks within data-scarce sports analytics, specifically cricket performance prediction, to enhance model accuracy and reliability.',
    tags: [
      'Publication',
      'SMOGN',
      'Regression',
      'Machine Learning',
      'Research',
    ],
    link: 'https://docs.google.com/document/d/14HNHQ-XNDwT1Xysy7s41vyIKMKrlKzlob1ni2wmspdM/edit?tab=t.0', // No direct link if it's part of another project's documentation
    date: '10/2024 - 04/2025',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Engineered a dynamic and responsive personal portfolio website leveraging Next.js, React, TypeScript, and Tailwind CSS to effectively showcase technical projects, skills (AI/ML, Data Science, Software Engineering), and professional background. Implemented key features including interactive project displays, skills section, and a functional contact form. Successfully deployed on Vercel, demonstrating proficiency in modern web development practices and UI/UX principles.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vercel',
      'UI/UX',
      'Web Development',
    ],
    link: 'https://portfolio-website1-harthik-s-projects.vercel.app/', // Link to the live portfolio
    githubLink: 'https://github.com/Harthik777/portfolio-website', // Link to the GitHub repo
    date: '05/2025', // Adjust date as per your development timeline
  },
  {
    title: 'Explainable AI for Fraud Detection with LLM-Enhanced Interpretability',
    description:
      'Leading a 4-member research team at IEEE Computer Society Bangalore Chapter developing an innovative Agentic AI system for interpretable SHAP explanations in financial fraud detection. Architecting a novel self-refinement loop using Langchain and lightweight LLMs (Ollama/Gemini API) to enhance clarity and accessibility of XAI summaries. Driving development of high-performance fraud detection models on IEEE-CIS dataset with deep XAI analysis using SHAP, targeting research paper publication.',
    tags: [
      'Research Leadership',
      'Explainable AI',
      'LightGBM/XGBoost', 
      'SHAP',
      'Langchain',
      'LLMs',
      'Fraud Detection',
      'Python',
      'IEEE-CIS Dataset'
    ],
    link: null, // Research in progress
    date: '05/2025 - Present',
    status: 'In Progress - IEEE Computer Society Bangalore Chapter',
    isResearch: true,
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <div className="relative isolate pt-20">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Enhanced Header Section */}            <div className="card mx-auto max-w-4xl animate-fade-in-up border border-indigo-100 bg-white/80 p-12 text-center shadow-2xl dark:border-indigo-900 dark:bg-gray-900/80">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full icon-gradient">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="gradient-text mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Projects & Publications
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Here are some of my key projects and publications, demonstrating my skills in 
                <span className="font-semibold text-indigo-600 dark:text-indigo-400"> AI/ML</span>, 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> data analysis</span>, and 
                <span className="font-semibold text-pink-600 dark:text-pink-400"> software development</span>.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-4">
                <div className="flex items-center space-x-2 rounded-full bg-indigo-100 px-3 py-2 sm:px-4 dark:bg-indigo-900/50">
                  <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                  <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300 sm:text-sm">Research Projects</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-purple-100 px-3 py-2 sm:px-4 dark:bg-purple-900/50">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 sm:text-sm">Publications</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-pink-100 px-3 py-2 sm:px-4 dark:bg-pink-900/50">
                  <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                  <span className="text-xs font-medium text-pink-700 dark:text-pink-300 sm:text-sm">Web Development</span>
                </div>
              </div>
            </div>
            
            <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:mt-24 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {projects.map((project, idx) => (
                <article
                  key={project.title}
                  className={`group relative overflow-hidden rounded-3xl border shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                    project.isResearch 
                      ? 'border-yellow-200 bg-gradient-to-br from-yellow-50/90 to-orange-50/90 dark:border-yellow-800 dark:from-yellow-900/20 dark:to-orange-900/20 dark:bg-gray-800/90' 
                      : 'border-indigo-200 bg-white/90 dark:border-indigo-800 dark:bg-gray-800/90'
                  } p-8`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    {project.isResearch && (
                      <div className="mb-4 inline-flex items-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                        🔬 Active Research
                      </div>
                    )}
                    <div className="group relative w-full">
                      <h3 className="mt-3 text-2xl font-bold leading-7 text-gray-900 dark:text-white">
                        {project.link ? (
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                          >
                            <span className="absolute inset-0" />
                            {project.title}
                          </Link>
                        ) : (
                          <span>{project.title}</span>
                        )}
                      </h3>
                      <div className="mt-2 flex items-center gap-2">
                        <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V7a1 1 0 00-1 1v9a1 1 0 001 1h6a1 1 0 001-1V8a1 1 0 00-1-1" />
                        </svg>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                      </div>
                      {project.status && (
                        <div className="mt-2 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 p-3 dark:from-indigo-900/20 dark:to-purple-900/20">
                          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                            {project.status}
                          </p>
                        </div>
                      )}
                      <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-300">
                        {project.description}
                      </p>
                    </div>
                    {/* GitHub link rendering */}
                    {project.githubLink && (
                      <div className="mt-4">
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-x-1.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition-all hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-600 dark:from-gray-700 dark:to-gray-600 dark:text-gray-300 dark:hover:from-indigo-900/50 dark:hover:to-purple-900/50 dark:hover:text-indigo-400"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-github"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                          View on GitHub
                        </Link>
                      </div>
                    )}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map(tag => (                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border border-indigo-300/30 bg-gradient-to-r from-indigo-50 to-purple-50 px-3 py-1 text-xs font-semibold text-indigo-700 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl hover:from-indigo-100 hover:to-purple-100 dark:border-indigo-400/20 dark:from-indigo-900/40 dark:to-purple-900/40 dark:text-indigo-300 dark:hover:from-indigo-900/60 dark:hover:to-purple-900/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
