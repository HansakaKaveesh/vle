import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    { 
      name: 'Jane Doe', 
      feedback: 'This platform is amazing!', 
      image: '/images/jane.jpg' 
    },
    { 
      name: 'John Smith', 
      feedback: 'The courses are top-notch.', 
      image: '/images/john.jpg' 
    },
    { 
        name: 'John Smith', 
        feedback: 'The courses are top-notch.', 
        image: '/images/john.jpg' 
      },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-center text-gray-800">What Our Learners Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-8">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="transition-all transform hover:scale-105 p-6 bg-white shadow-lg rounded-lg hover:shadow-xl">
            <div className="relative">
              <div className="absolute top-0 left-0 text-4xl text-black">
                <FaQuoteLeft />
              </div>
              <div className="absolute bottom-0 right-0 text-4xl text-black">
                <FaQuoteRight />
              </div>
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-16 h-16 rounded-full mx-auto mb-4" 
              />
              <p className="text-center text-lg italic text-black">{`"${testimonial.feedback}"`}</p>
              <h4 className="mt-4 text-center font-semibold text-xl text-black">{testimonial.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
