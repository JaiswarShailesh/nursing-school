import SectionHeading from "@/app/components/sectionHeading";
import { Briefcase, Heart, Hospital, Users } from "lucide-react";
import React from "react";

const CareerOpportunity = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionHeading
          title="Career"
          underlineTitle="Opportunity"
          description="Opening doors to rewarding careers in hospitals, clinics, research, and community healthcare."
        />

        <div className="relative flex justify-center items-center gap-16 flex-wrap md:flex-nowrap">
          {[
            {
              icon: <Hospital className="w-12 h-12 text-pink-500" />,
              title: "Staff Nurse",
            },
            {
              icon: <Users className="w-12 h-12 text-indigo-500" />,
              title: "Community Health Nurse",
            },
            {
              icon: <Heart className="w-12 h-12 text-pink-400" />,
              title: "Midwife",
            },
            {
              icon: <Briefcase className="w-12 h-12 text-indigo-400" />,
              title: "Healthcare Educator/Admin",
            },
          ].map((career, i) => (
            <div
              key={i}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-3">{career.icon}</div>

              {/* Title + Hover underline */}
              <div className="relative">
                <span className="text-lg font-semibold text-indigo-900 group-hover:text-pink-500 transition-colors">
                  {career.title}
                </span>
                <div className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-pink-400 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunity;
