
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

export function Faculty() {
  const teachers = [
    {
      name: "Dr. Priya Sharma",
      position: "Principal",
      subject: "Educational Leadership",
      experience: "20+ Years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b25bd15b?w=300&h=300&fit=crop&crop=faces",
      email: "principal@mountliterazee.edu",
      phone: "+91 98765 43210"
    },
    {
      name: "Mr. Rajesh Kumar",
      position: "Vice Principal",
      subject: "Mathematics & Physics",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b25bd15b?w=300&h=300&fit=crop&crop=faces",
      email: "rajesh@mountliterazee.edu",
      phone: "+91 98765 43211"
    },
    {
      name: "Ms. Sunita Verma",
      position: "Head Teacher",
      subject: "English & Literature",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces",
      email: "sunita@mountliterazee.edu",
      phone: "+91 98765 43212"
    },
    {
      name: "Mr. Amit Patel",
      position: "Science Teacher",
      subject: "Chemistry & Biology",
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces",
      email: "amit@mountliterazee.edu",
      phone: "+91 98765 43213"
    }
  ];

  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Dedicated Faculty
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced and qualified teachers are committed to providing the best education and guidance to every student.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6 overflow-hidden rounded-full mx-auto w-24 h-24">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">{teacher.name}</h3>
                  <div className="space-y-1">
                    <p className="text-primary font-semibold">{teacher.position}</p>
                    <p className="text-gray-600 text-sm">{teacher.subject}</p>
                    <p className="text-gray-500 text-sm">{teacher.experience}</p>
                  </div>
                  
                  <div className="pt-4 space-y-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm">
                      <Mail className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{teacher.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <span>{teacher.phone}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Teaching Team</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We are always looking for passionate educators who want to make a difference in students' lives. 
            Join our team and be part of shaping the future.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            View Career Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}
