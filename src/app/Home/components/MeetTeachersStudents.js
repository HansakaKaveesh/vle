export default function MeetTeachersStudents() {
  const people = [
    { name: 'Alice', role: 'Teacher', image: '/Men.jpg' },
    { name: 'Bob', role: 'Student', image: '/Men.jpg' },
    { name: 'Carol', role: 'Teacher', image: '/Women.jpg' },
    { name: 'David', role: 'Student', image: '/Women.jpg' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 tracking-tight">
          Meet Our Teachers and Students
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Get to know the brilliant minds who make up our vibrant learning community.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {people.map((person, idx) => (
            <div
              key={idx}
              className="p-6 bg-white text-center shadow-lg rounded-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-2 duration-300 ease-in-out"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 rounded-full object-cover shadow-md"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">{person.name}</h3>
              <p className="mt-2 text-gray-500">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
