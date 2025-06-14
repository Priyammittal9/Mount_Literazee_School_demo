
import { CheckCircle, Heart, Star, Target } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Target,
      title: "Excellence in Education",
      description: "We strive for academic excellence while nurturing individual talents and capabilities."
    },
    {
      icon: Heart,
      title: "Caring Environment",
      description: "A supportive and inclusive environment where every child feels valued and safe."
    },
    {
      icon: Star,
      title: "Holistic Development",
      description: "Focus on overall personality development including academics, sports, and arts."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About Mount Literazee School
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Established with a vision to provide quality education in Tikamgarh, Mount Literazee School has been a beacon of learning excellence for over 15 years.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in nurturing young minds through innovative teaching methods, state-of-the-art facilities, and a curriculum that prepares students for the challenges of tomorrow.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "CBSE Affiliated Institution",
                "Qualified and Experienced Faculty",
                "Modern Infrastructure & Facilities",
                "Co-curricular Activities"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
