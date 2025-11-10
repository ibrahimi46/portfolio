"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { ResumeHeader } from "./components/ResumeHeader";
import { TimelineItem } from "./components/TimelineItem";
import { SkillsSection } from "./components/SkillsSection";
import { TabButton } from "./components/TabButton";
import {
  languages,
  experienceData,
  softSkills,
  educationData,
  technicalSkills,
} from "@/lib/data/resume";

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <Link
              href="/"
              className="inline-flex items-center text-white/70 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold">Resume</h1>
          </div>
          <a
            href="https://drive.google.com/file/d/1a5rjo-lyvIbHb0fZGzXoIEJoCSPR6iNS/view?usp=share_link"
            target="__blank"
            download
            className="mt-6 md:mt-0 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-all flex items-center"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </div>

        <ResumeHeader />

        {/* Tabs */}
        <div className="w-full">
          <div className="grid grid-cols-3 gap-2 mb-8">
            <TabButton
              active={activeTab === "education"}
              onClick={() => setActiveTab("education")}
            >
              Education
            </TabButton>
            <TabButton
              active={activeTab === "experience"}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </TabButton>
            <TabButton
              active={activeTab === "skills"}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </TabButton>
          </div>

          {/* Tab Content */}
          {activeTab === "education" && (
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <TimelineItem
                  key={index}
                  index={index}
                  title={edu.degree}
                  subtitle={edu.institution}
                  period={edu.period}
                  description={edu.description}
                  items={edu.courses}
                  itemsLabel="Relevant Courses:"
                />
              ))}
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-8">
              {experienceData.map((job, index) => (
                <TimelineItem
                  key={index}
                  index={index}
                  title={job.title}
                  subtitle={job.company}
                  period={job.period}
                  description={job.description}
                  items={job.achievements}
                />
              ))}
            </div>
          )}

          {activeTab === "skills" && (
            <SkillsSection
              technicalSkills={technicalSkills}
              softSkills={softSkills}
              languages={languages}
            />
          )}
        </div>
      </div>
    </div>
  );
}
