import SectionHeading from "@/app/components/sectionHeading";
import React from "react";

const FeeStructure = () => {
  const feeData = [
    {
      year: "1st Year",
      tuition: "₹45,000",
      hostel: "₹25,000",
      exam: "₹3,000",
      total: "₹73,000",
    },
    {
      year: "2nd Year",
      tuition: "₹45,000",
      hostel: "₹25,000",
      exam: "₹3,000",
      total: "₹73,000",
    },
    {
      year: "3rd Year",
      tuition: "₹45,000",
      hostel: "₹25,000",
      exam: "₹3,000",
      total: "₹73,000",
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <SectionHeading
          title="Fees"
          underlineTitle="Structure"
          description="Transparent and structured fee details to help you plan your nursing education with confidence."
        />

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white">
            <thead className="bg-pink-500 text-white">
              <tr>
                <th className="py-3 px-6 text-center">Year</th>
                <th className="py-3 px-6 text-center">Tuition Fee</th>
                <th className="py-3 px-6 text-center">Hostel Fee</th>
                <th className="py-3 px-6 text-center">Examination Fee</th>
                <th className="py-3 px-6 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {feeData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-t hover:bg-pink-50 transition ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="py-3 px-6 font-medium text-gray-700">
                    {row.year}
                  </td>
                  <td className="py-3 px-6 text-gray-600">{row.tuition}</td>
                  <td className="py-3 px-6 text-gray-600">{row.hostel}</td>
                  <td className="py-3 px-6 text-gray-600">{row.exam}</td>
                  <td className="py-3 px-6 font-semibold text-pink-600">
                    {row.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-500 text-sm mt-6 max-w-2xl mx-auto">
          * The above fees are indicative and subject to revision as per
          institutional policies. Additional charges (like uniforms, books,
          etc.) may apply.
        </p>
      </div>
    </section>
  );
};

export default FeeStructure;
