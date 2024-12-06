import { FaLaptopCode, FaDatabase, FaBrain } from 'react-icons/fa';

export default function OurCourses() {
  const courses = [
    { 
      title: 'Web Development', 
      description: 'Learn to build modern websites.', 
      icon: <FaLaptopCode className="text-4xl mb-4" />
    },
    { 
      title: 'Data Science', 
      description: 'Analyze data effectively.', 
      icon: <FaDatabase className="text-4xl mb-4" />
    },
    { 
      title: 'Machine Learning', 
      description: 'Explore AI technologies.', 
      icon: <FaBrain className="text-4xl mb-4" />
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-center text-gray-800">Our Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-8">
        {courses.map((course, idx) => (
          <div key={idx} className="transition-transform transform hover:scale-105 p-6 bg-white text-gray-900 shadow-lg rounded-lg hover:bg-blue-500 hover:text-white">
            <div className="text-center">
              {course.icon}
              <h3 className="text-2xl font-semibold mt-4">{course.title}</h3>
            </div>
            <p className="mt-2 text-center">{course.description}</p>
            <div className="flex justify-center mt-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-all">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
