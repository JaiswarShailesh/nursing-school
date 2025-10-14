// components/Eligibility.tsx
import SectionHeading from "@/app/components/sectionHeading";
import {
  GraduationCap,
  FileCheck,
  UserCheck,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function Eligibility() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionHeading
          title="Eligibilty"
          underlineTitle="Criteria"
          description="Guidelines to help you prepare and meet the standards for admission into our programs."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <div className="bg-white backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:scale-[1.02] transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-tr from-pink-100 to-purple-100 rounded-full">
                  <GraduationCap className="text-pink-500 w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg">Basic Qualification</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-left">
                <li className="flex items-start">
                  <CheckCircle2
                    size={15}
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span>Minimum education required: 10+2 with English</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    size={15}
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span>
                    Must have obtained a minimum of 40% at the qualifying
                    examination and English individually from any recognized
                    board.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    size={15}
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span>
                    Candidates are also eligible from State Open School
                    recognized by State Government and National Institute of
                    Open School (NIOS) recognized by Central Government.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    size={15}
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span>Science is preferable.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:scale-[1.02] transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-tr from-pink-100 to-purple-100 rounded-full">
                  <FileCheck className="text-pink-500 w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg">
                  Vocational Qualifications
                </h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-left">
                <li className="flex items-start">
                  <CheckCircle2
                    size={15}
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span>
                    10+2 with English having 40% of marks in vocational ANM
                    course from the school recognized by Indian Nursing Council
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    size={15}
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span>
                    10+2 with English having 40% of marks in Vocational
                    Stream-Health care Science from a recognized CBSE
                    board/State/Centre
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    size={15}
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span>Registered ANM with pass mark.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            <div className="bg-white backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:scale-[1.02] transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-tr from-pink-100 to-purple-100 rounded-full">
                  <UserCheck className="text-pink-500 w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg">Special Eligibility</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-left">
                <li className="flex items-start">
                  <CheckCircle2
                    size={15}
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span>
                    For foreign nationals • The entry qualification equivalency
                    i.e., 12th standard will be obtained by Association of
                    Indian Universities, New Delhi. Institution, State Nursing
                    Council will be responsible to ensure that the qualification
                    and eligibility will be equivalent to what has been
                    prescribed as above.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:scale-[1.02] transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-tr from-pink-100 to-purple-100 rounded-full">
                  <ShieldCheck className="text-pink-500 w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg">
                  Reservation & Age Criteria
                </h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-left">
                <li className="flex items-start">
                  <CheckCircle2
                    size={15}
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span>
                    Reservation a) For disabled candidates: 3% Disability
                    reservation to be considered with a disability of locomotor
                    to the tune of 40% to 50% of the lower extremity and other
                    eligibility criteria with regard to age and qualification
                    will be same as prescribed for each nursing programme.
                  </span>
                </li>
                <li
                  className="flex items-start italic text-gray-600/80"
                  // className="italic text-white/80"
                >
                  <CheckCircle2
                    size={15}
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span>
                    Note: A committee to be formed consisting of medical officer
                    authorized by medical board of state government and a
                    nursing expert in the panel which may decide whether the
                    candidates have the disability of locomotor of 40% to 50%.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    size={15}
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span>5% of total marks is relaxed for SC/ST candidates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    size={15}
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span>Students shall be medically fit.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2
                    size={15}
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span>
                    Minimum age for admission will be 17 years (as on 31st
                    December of that year). The upper age limit is 35 yrs. For
                    ANM/for LHV, there is no age bar.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative gradient circle */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-pink-400/20 rounded-full blur-3xl"></div>
    </section>
  );
}
