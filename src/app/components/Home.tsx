import { Link } from "react-router";
import { GraduationCap, Users, Award, TrendingUp, CheckCircle, ArrowRight, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import logo from "figma:asset/4f43b9c1e66f275ce86653e207aece8677c99c1b.png";

export function Home() {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8 text-[#003366]" />,
      title: "Quality Training",
      description: "Professional courses designed to provide practical skills for real-world employment",
    },
    {
      icon: <Users className="w-8 h-8 text-[#003366]" />,
      title: "Expert Instructors",
      description: "Learn from experienced professionals with industry knowledge and expertise",
    },
    {
      icon: <Award className="w-8 h-8 text-[#003366]" />,
      title: "Certified Programs",
      description: "Receive recognized certification upon successful completion of courses",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#003366]" />,
      title: "Career Growth",
      description: "Build skills that open doors to better employment opportunities",
    },
  ];

  const benefits = [
    "Flexible 6-month and 6-week course options",
    "Affordable pricing with bulk discount options",
    "Hands-on practical training",
    "Certification upon completion",
    "Career support and guidance",
    "Small class sizes for personalized attention",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003366] to-[#002147] py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 opacity-10" style={{ filter: 'blur(2px)' }}>
          <img 
            src={logo} 
            alt="" 
            className="w-full h-auto"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Empowering Communities Through Quality Skills Training
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Professional development courses for unemployed individuals, domestic workers, and gardeners.
              Build your skills and create a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button size="lg" className="bg-[#F97316] hover:bg-[#EA6A0A] text-white text-lg px-8">
                  View Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/quote">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing quality education and training that makes a real difference in people's lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-[#F97316] transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Training Programs</h2>
              <p className="text-gray-700 mb-6">
                We offer comprehensive training programs designed to equip you with practical skills
                for better employment opportunities. Choose from our 6-month intensive courses or
                6-week short courses.
              </p>
              
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F97316] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link to="/courses">
                <Button className="bg-[#003366] hover:bg-[#002147] text-white">
                  Explore All Courses
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-[#003366] text-white">
                <CardHeader>
                  <CardTitle className="text-white">6-Month Courses</CardTitle>
                  <CardDescription className="text-gray-200">Intensive Training</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-2">R1,500</p>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li>• First Aid</li>
                    <li>• Sewing</li>
                    <li>• Landscaping</li>
                    <li>• Life Skills</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#F97316] text-white">
                <CardHeader>
                  <CardTitle className="text-white">6-Week Courses</CardTitle>
                  <CardDescription className="text-gray-100">Short Courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-2">R750</p>
                  <ul className="space-y-2 text-sm text-gray-100">
                    <li>• Child Minding</li>
                    <li>• Cooking</li>
                    <li>• Garden Maintenance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Discount Section */}
      <section className="py-16 bg-gradient-to-r from-[#003366] to-[#002147] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Special Bulk Discounts Available!</h2>
            <p className="text-xl mb-8 text-gray-200">
              Enroll in multiple courses and save more on your training investment
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-[#004080] p-6 rounded-lg">
                <p className="text-4xl font-bold mb-2">0%</p>
                <p className="text-sm text-gray-300">1 Course</p>
              </div>
              <div className="bg-[#004080] p-6 rounded-lg">
                <p className="text-4xl font-bold mb-2">5%</p>
                <p className="text-sm text-gray-300">2 Courses</p>
              </div>
              <div className="bg-[#004080] p-6 rounded-lg">
                <p className="text-4xl font-bold mb-2">10%</p>
                <p className="text-sm text-gray-300">3 Courses</p>
              </div>
              <div className="bg-[#004080] p-6 rounded-lg">
                <p className="text-4xl font-bold mb-2">15%</p>
                <p className="text-sm text-gray-300">4+ Courses</p>
              </div>
            </div>

            <Link to="/quote">
              <Button size="lg" className="bg-[#F97316] hover:bg-[#EA6A0A] text-white text-lg px-8">
                Calculate Your Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to learn more about our courses and how we can help you build a better future.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-[#F97316] hover:bg-[#EA6A0A] text-white text-lg px-8">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}