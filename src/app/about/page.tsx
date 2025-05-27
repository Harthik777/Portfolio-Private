export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <div className="relative isolate pt-20">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="card mx-auto max-w-4xl animate-fade-in-up border border-indigo-100 bg-white/80 p-12 text-center shadow-2xl dark:border-indigo-900 dark:bg-gray-900/80">              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full icon-gradient">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="gradient-text mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                About Me
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Hi! I'm Harthik Manichandra Vanumu, an 
                <span className="font-semibold text-indigo-600 dark:text-indigo-400"> AI/ML Research Intern & Team Lead</span> passionate about building intelligent systems and solving real-world problems. I am currently pursuing my B.Tech in Computer Science and Engineering (Artificial Intelligence) at 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> Manipal Institute of Technology (MIT) Bengaluru</span>.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-4">
                <div className="flex items-center space-x-2 rounded-full bg-indigo-100 px-3 py-2 sm:px-4 dark:bg-indigo-900/50">
                  <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                  <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300 sm:text-sm">Research Leadership</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-purple-100 px-3 py-2 sm:px-4 dark:bg-purple-900/50">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 sm:text-sm">AI/ML Engineering</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-pink-100 px-3 py-2 sm:px-4 dark:bg-pink-900/50">
                  <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                  <span className="text-xs font-medium text-pink-700 dark:text-pink-300 sm:text-sm">Data Science</span>
                </div>
              </div>
            </div>

            {/* Enhanced Three-Column Layout */}
            <div className="mx-auto mt-16 grid max-w-2xl animate-fade-in-up grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              
              {/* Education Section */}
              <div className="group relative overflow-hidden rounded-3xl border border-indigo-200 bg-white/90 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl dark:border-indigo-800 dark:bg-gray-800/90">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full icon-gradient">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 p-4 dark:from-indigo-900/20 dark:to-purple-900/20">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Manipal Institute of Technology (MIT) Bengaluru
                      </h4>
                      <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        B.Tech in Computer Science and Engineering (Artificial Intelligence)
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0V7a1 1 0 00-1 1v9a1 1 0 001 1h6a1 1 0 001-1V8a1 1 0 00-1-1" />
                        </svg>
                        <span className="text-sm text-gray-500 dark:text-gray-400">07/2023 - 07/2027</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Achievements Section */}
              <div className="group relative overflow-hidden rounded-3xl border border-purple-200 bg-white/90 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl dark:border-purple-800 dark:bg-gray-800/90">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full icon-gradient">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Key Achievements</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 p-4 dark:from-purple-900/20 dark:to-pink-900/20">
                      <div className="mb-2 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        <span className="text-xs font-semibold text-yellow-600 dark:text-yellow-400">1ST PLACE</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        RoboRun Competition & TechTatva Selection
                      </h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                        09/2024 - 10/2024
                      </p>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        Won MAHE Bengaluru's university-wide 'RoboRun' competition and selected for MIT Bengaluru's official TechTatva team.
                      </p>
                    </div>

                    <div className="rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 p-4 dark:from-purple-900/20 dark:to-pink-900/20">
                      <div className="mb-2 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">FINALIST</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        MaRRS International Spelling Bee
                      </h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                        05/2015
                      </p>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        Finalist in the international competition held in Abu Dhabi, UAE.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Volunteering Section */}
              <div className="group relative overflow-hidden rounded-3xl border border-pink-200 bg-white/90 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl dark:border-pink-800 dark:bg-gray-800/90">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-indigo-600">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Volunteering</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="rounded-lg bg-gradient-to-r from-pink-50 to-indigo-50 p-4 dark:from-pink-900/20 dark:to-indigo-900/20">
                      <div className="mb-2 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-xs font-semibold text-green-600 dark:text-green-400">CURRENT</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        IEEE Student Branch Executive
                      </h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                        01/2025 - Present
                      </p>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        Leading IEEE Student Branch activities and serving as liaison with IEEE CS Society.
                      </p>
                    </div>

                    <div className="rounded-lg bg-gradient-to-r from-pink-50 to-indigo-50 p-4 dark:from-pink-900/20 dark:to-indigo-900/20">
                      <div className="mb-2 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-xs font-semibold text-green-600 dark:text-green-400">CURRENT</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Radar Robotics Club - Outreach Head
                      </h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                        10/2024 - Present
                      </p>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        Leading 5-person outreach team, securing partnerships and organizing industry visits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
