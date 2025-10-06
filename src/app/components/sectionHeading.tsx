import React from "react";

interface Props {
  title: string;
  underlineTitle: string;
  description: string;
}

const SectionHeading = ({ title, underlineTitle, description }: Props) => {
  return (
    <>
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        {title} <span className="text-pink-600">{underlineTitle}</span>
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">{description}</p>
    </>
  );
};

export default SectionHeading;
