// components/MissionAndVisionSection.tsx
import Image from "next/image";

const MissionAndVisionSection: React.FC = () => {
  const visionPoints = [
    {
      title: "Empowering Financial Success",
      description:
        "Delivering innovative and tailored solutions to help clients achieve their financial goals.",
    },
    {
      title: "Commitment to Excellence",
      description:
        "Upholding integrity and precision in every service we provide.",
    },
    {
      title: "Building Trust",
      description:
        "Fostering long-term partnerships with a client-first approach.",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <Image
            src="/team-discussion.png" // Replace with actual image path
            alt="Team Discussion"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-green-500 text-lg font-semibold mb-4">
            OUR MISSION AND VISION
          </h2>
          <ul className="space-y-4">
            {visionPoints.map((point, index) => (
              <li key={index} className="flex gap-4">
                <span className="text-green-500 text-2xl">➔</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVisionSection;
