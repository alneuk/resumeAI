
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Marketing Manager",
    company: "TechStart Inc.",
    testimonial: "ResumePulse helped me completely revamp my resume. The AI suggestions made my experience sound so much more impactful, and I received interview calls from 3 companies within a week!",
    rating: 5
  },
  {
    name: "Michael Chang",
    position: "Software Engineer",
    company: "DataSys Solutions",
    testimonial: "As someone in tech, I was skeptical about AI writing my resume, but ResumePulse exceeded my expectations. The ATS optimization really works - I finally got past those automated systems.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    position: "Recent Graduate",
    company: "University of California",
    testimonial: "With limited work experience, I was struggling to create an impressive resume. ResumePulse helped highlight my relevant coursework and projects in a professional way that got me noticed.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Users Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of job seekers who've found success with ResumePulse
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-resume-primary text-resume-primary" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-6">"{testimonial.testimonial}"</p>
              
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
