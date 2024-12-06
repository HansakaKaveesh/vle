import { FaCalculator, FaFlask, FaLandmark, FaCode, FaPalette } from 'react-icons/fa';

export default function OurModules() {
  const modules = [
    {
      name: 'Mathematics',
      description: 'Enhance your problem-solving skills with advanced math concepts.',
      icon: <FaCalculator className="text-4xl text-blue-500" />,
    },
    {
      name: 'Science',
      description: 'Explore the wonders of the natural world through experiments.',
      icon: <FaFlask className="text-4xl text-green-500" />,
    },
    {
      name: 'History',
      description: 'Dive into the past to understand how it shapes our present.',
      icon: <FaLandmark className="text-4xl text-yellow-500" />,
    },
    {
      name: 'Programming',
      description: 'Learn coding skills to create innovative software and applications.',
      icon: <FaCode className="text-4xl text-red-500" />,
    },
    {
      name: 'Art',
      description: 'Unleash your creativity with various art techniques and media.',
      icon: <FaPalette className="text-4xl text-purple-500" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-center text-gray-800">Our Modules</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-8 px-8">
        {modules.map((module, idx) => (
          <div
            key={idx}
            className="transition-all transform hover:scale-105 p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl"
          >
            <div className="mb-4">{module.icon}</div>
            <h3 className="text-xl font-bold text-black">{module.name}</h3>
            <p className="text-black mt-2">{module.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
