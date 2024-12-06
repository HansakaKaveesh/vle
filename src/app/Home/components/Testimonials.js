import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    { 
      name: 'Jane Doe', 
      feedback: 'This platform is amazing!', 
      image: '/Men.jpg' 
    },
    { 
      name: 'John Smith', 
      feedback: 'The courses are top-notch.', 
      image: '/Men.jpg' 
    },
    { 
      name: 'Emily Johnson', 
      feedback: 'The community is incredibly supportive.', 
      image: '/Women.jpg' 
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 tracking-tight">
          What Our Learners Say
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          Hear from the people who have experienced success with us.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 bg-white shadow-lg rounded-xl transform transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative">
                <FaQuoteLeft className="absolute top-0 left-0 text-3xl text-blue-500" />
                <FaQuoteRight className="absolute bottom-0 right-0 text-3xl text-blue-500" />
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-blue-500"
                />
              </div>
              <p className="text-center text-lg italic text-gray-700">{`"${testimonial.feedback}"`}</p>
              <h4 className="mt-4 text-center font-semibold text-xl text-gray-800">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
