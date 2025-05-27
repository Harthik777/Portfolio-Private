'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Resume() {
  const [isViewing, setIsViewing] = useState(false);

  const handleView = () => {
    setIsViewing(true);
    // Only run on client side
    if (typeof window !== 'undefined') {
      window.open('/Harthik_Resume.pdf', '_blank');
    }
    setIsViewing(false);
  };

  const handleDownload = () => {
    // Direct download approach for mobile
    const url = '/Harthik_Resume.pdf';
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <div className="relative isolate pt-20">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Enhanced Header Section */}
            <div className="card mx-auto max-w-4xl animate-fade-in-up border border-indigo-100 bg-white/80 p-12 text-center shadow-2xl dark:border-indigo-900 dark:bg-gray-900/80">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="gradient-text mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Resume
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                View or download my latest resume below. For more details about my 
                <span className="font-semibold text-indigo-600 dark:text-indigo-400"> experience</span>, 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> skills</span>, and 
                <span className="font-semibold text-pink-600 dark:text-pink-400"> projects</span>, feel free to explore the rest of this portfolio or{' '}
                <Link
                  href="/contact"
                  className="underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-300"
                >
                  contact me
                </Link>
                .
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-4">
                <div className="flex items-center space-x-2 rounded-full bg-indigo-100 px-3 py-2 sm:px-4 dark:bg-indigo-900/50">
                  <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                  <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300 sm:text-sm">Professional Experience</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-purple-100 px-3 py-2 sm:px-4 dark:bg-purple-900/50">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 sm:text-sm">Education & Skills</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-pink-100 px-3 py-2 sm:px-4 dark:bg-pink-900/50">
                  <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                  <span className="text-xs font-medium text-pink-700 dark:text-pink-300 sm:text-sm">Achievements</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <button
                  onClick={handleView}
                  disabled={isViewing}
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative z-10">
                    {isViewing ? 'Opening...' : 'View Resume (PDF)'}
                  </span>
                </button>
                <a
                  href="/Harthik_Resume.pdf"
                  download="Harthik_Resume.pdf"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative z-10">Download Resume (PDF)</span>
                </a>
              </div>
            </div>
        
            {/* Experience Section */}
            <div className="card mx-auto mt-16 animate-fade-in-up border border-indigo-100 bg-white/80 p-8 shadow-xl dark:border-indigo-900 dark:bg-gray-900/80">
              <h3 className="gradient-text mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
                Experience
              </h3>
              <div className="space-y-8">
                <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L7 12.5l2.091 2.091a2.25 2.25 0 01.659 1.591v5.714M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Student Intern (Team Lead)
                        </h4>
                        <span className="mt-1 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                          05/2025 - Present
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        IEEE Computer Society Bangalore Chapter
                      </p>
                      <div className="mt-3 space-y-2">
                        <p className="text-gray-600 dark:text-gray-300">
                          <strong>Research Project:</strong> XFIA 2.0 - Explainable AI for Fraud Detection with LLM-Enhanced Interpretability
                        </p>
                        <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-300">
                          <li>Leading a 4-member research team developing an Agentic AI system for interpretable SHAP explanations in financial fraud detection</li>
                          <li>Architecting and implementing a novel self-refinement loop using Langchain and lightweight LLMs (Ollama/Gemini API) to enhance clarity and accessibility of XAI summaries</li>
                          <li>Driving development of high-performance fraud detection models (LightGBM/XGBoost) on IEEE-CIS dataset, conducting deep XAI analysis with SHAP, and spearheading research paper publication</li>
                          <li>Engineering prompts and orchestrating LLM workflows for automated generation, critique, and refinement of natural language explanations from complex SHAP data</li>
                        </ul>                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="inline-flex items-center rounded-full border border-indigo-300/30 bg-gradient-to-r from-indigo-50 to-purple-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:shadow-md hover:from-indigo-100 hover:to-purple-100 dark:border-indigo-400/20 dark:from-indigo-900/40 dark:to-purple-900/40 dark:text-indigo-300 dark:hover:from-indigo-900/60 dark:hover:to-purple-900/60">
                            Python
                          </span>
                          <span className="inline-flex items-center rounded-full border border-indigo-300/30 bg-gradient-to-r from-indigo-50 to-purple-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:shadow-md hover:from-indigo-100 hover:to-purple-100 dark:border-indigo-400/20 dark:from-indigo-900/40 dark:to-purple-900/40 dark:text-indigo-300 dark:hover:from-indigo-900/60 dark:hover:to-purple-900/60">
                            LightGBM/XGBoost
                          </span>
                          <span className="inline-flex items-center rounded-full border border-indigo-300/30 bg-gradient-to-r from-indigo-50 to-purple-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:shadow-md hover:from-indigo-100 hover:to-purple-100 dark:border-indigo-400/20 dark:from-indigo-900/40 dark:to-purple-900/40 dark:text-indigo-300 dark:hover:from-indigo-900/60 dark:hover:to-purple-900/60">
                            SHAP/XAI
                          </span>
                          <span className="inline-flex items-center rounded-full border border-indigo-300/30 bg-gradient-to-r from-indigo-50 to-purple-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:shadow-md hover:from-indigo-100 hover:to-purple-100 dark:border-indigo-400/20 dark:from-indigo-900/40 dark:to-purple-900/40 dark:text-indigo-300 dark:hover:from-indigo-900/60 dark:hover:to-purple-900/60">
                            Langchain
                          </span>
                          <span className="inline-flex items-center rounded-full border border-indigo-300/30 bg-gradient-to-r from-indigo-50 to-purple-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:shadow-md hover:from-indigo-100 hover:to-purple-100 dark:border-indigo-400/20 dark:from-indigo-900/40 dark:to-purple-900/40 dark:text-indigo-300 dark:hover:from-indigo-900/60 dark:hover:to-purple-900/60">
                            Ollama/Gemini API
                          </span>
                          <span className="inline-flex items-center rounded-full border border-indigo-300/30 bg-gradient-to-r from-indigo-50 to-purple-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:shadow-md hover:from-indigo-100 hover:to-purple-100 dark:border-indigo-400/20 dark:from-indigo-900/40 dark:to-purple-900/40 dark:text-indigo-300 dark:hover:from-indigo-900/60 dark:hover:to-purple-900/60">
                            Research Leadership
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="card mx-auto mt-16 animate-fade-in-up border border-indigo-100 bg-white/80 p-8 shadow-xl dark:border-indigo-900 dark:bg-gray-900/80">
              <h3 className="gradient-text mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
                Certifications
              </h3>
              <div className="space-y-8">
                {/* Add your certifications here */}
                <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Coming Soon
                      </h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                        -
                      </p>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Certifications will be added here.
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
