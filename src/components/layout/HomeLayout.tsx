// components/layout/HomeLayout.tsx
import Image from "next/image";

const HomeLayout: React.FC = () => {
  return (
    <div className="bg-blue-900 dark:bg-gray-800 text-white transition-colors duration-300">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 py-12 gap-8">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h2 className="text-green-300 text-lg font-semibold">
            EMPOWER YOUR BRAND
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold mt-4">
            Unlock the Secret of Tax Savings
          </h1>
          <p className="text-gray-300 dark:text-gray-400 text-lg mt-4">
            Our tax experts will help you discover every deduction and credit
            available to you, so you can save big on your taxes.
          </p>
          <button className="bg-green-400 text-blue-900 font-semibold px-6 py-3 rounded mt-6 hover:bg-green-500 dark:bg-green-500 dark:text-gray-900 transition">
            Know More
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          <Image
            src="/team-image.png" // Replace with the actual image path
            alt="Team of experts"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
