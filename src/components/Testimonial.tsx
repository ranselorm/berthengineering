import React from "react";
import { testimonials, Testimonial } from "../data";

const TestimonialCard: React.FC<Testimonial> = ({
  name,
  role,
  image,
  rating,
  feedback,
}) => {
  return (
    <div className="bg-secondary rounded-lg shadow-lg p-6 text-center text-white w-[300px] h-[300px] font-primary">
      <img
        src="/images/5.jpg" //change this dynamically later
        alt={name}
        className="w-16 h-16 mx-auto rounded-full mb-2 object-cover"
      />
      <h3 className="font-bold text-base">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
      <div className="flex justify-center my-2">
        {[...Array(rating)].map((_, index) => (
          <span key={index} className="text-yellow-500">
            ★
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-300">{feedback}</p>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  return (
    <section className="mt-0 font-primary bg-[url('/images/bg1.png')] bg-cover bg-center">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">What our clients say about us.</h2>
        <p className="text-gray-600">
          Don't just take our word for it - see what actual users of our service
          have to say about their experience.
        </p>
      </div>

      <div className="flex items-center justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      {/* Carousel navigation arrows */}
      <div className="flex justify-center mt-8">
        <button className="bg-orange-400 p-2 rounded-full mx-2">←</button>
        <button className="bg-orange-400 p-2 rounded-full mx-2">→</button>
      </div>

      <div className="mt-8">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
          Share Your Experience
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
