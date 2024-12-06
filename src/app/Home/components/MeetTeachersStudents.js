export default function MeetTeachersStudents() {
    const people = [
      { name: 'Alice', role: 'Teacher' },
      { name: 'Bob', role: 'Student' },
      { name: 'Carol', role: 'Teacher' },
      { name: 'David', role: 'Student' },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800">
            Meet Our Teachers and Students
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Get to know the brilliant minds who make up our learning community.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {people.map((person, idx) => (
              <div
                key={idx}
                className="p-6 bg-white text-center shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <h3 className="text-2xl font-semibold text-gray-800">{person.name}</h3>
                <p className="mt-2 text-gray-500">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  