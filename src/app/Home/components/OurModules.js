import { FaCalculator, FaFlask, FaLandmark, FaCode, FaPalette, FaShoppingCart } from 'react-icons/fa';

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
      name: 'Programming',
      description: 'Learn coding skills to create innovative software and applications.',
      icon: <FaCode className="text-4xl text-red-500" />,
    },
    {
      name: 'Art',
      description: 'Unleash your creativity with various art techniques and media.',
      icon: <FaPalette className="text-4xl text-purple-500" />,
    },
    {
      name: 'Commerce',
      description: 'Develop business acumen and entrepreneurial skills.',
      icon: <FaShoppingCart className="text-4xl text-teal-500" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-wide">Our Modules</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-4">
        {modules.map((module, idx) => (
          <div
            key={idx}
            className="transition-transform transform hover:scale-105 p-8 bg-white shadow-lg rounded-xl text-center hover:shadow-xl hover:shadow-indigo-500/50 cursor-pointer"
          >
            <div className="mb-6 p-4 bg-gradient-to-t from-white to-gray-200 rounded-full inline-block">
              {module.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">{module.name}</h3>
            <p className="text-gray-600 mt-3 text-lg">{module.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
