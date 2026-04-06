import { Link } from "react-router";
import { Clock, Calendar, Award, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Courses() {
  const sixMonthCourses = [
    {
      title: "First Aid",
      duration: "6 Months",
      price: "R1,500",
      description: "Comprehensive first aid training covering emergency response, CPR, wound care, and basic life support. Learn to handle medical emergencies with confidence and obtain certification recognized by employers across various industries.",
      topics: [
        "CPR and Basic Life Support",
        "Wound Care and Bandaging",
        "Emergency Response Procedures",
        "Medical Emergency Recognition",
        "Safety and Prevention",
      ],
    },
    {
      title: "Sewing",
      duration: "6 Months",
      price: "R1,500",
      description: "Master the art of sewing from basic stitching to advanced garment construction. Learn to use sewing machines, read patterns, and create professional-quality clothing and alterations. Perfect for those seeking employment in the fashion and textile industry.",
      topics: [
        "Sewing Machine Operation",
        "Pattern Reading and Cutting",
        "Garment Construction",
        "Alterations and Repairs",
        "Quality Control and Finishing",
      ],
    },
    {
      title: "Landscaping",
      duration: "6 Months",
      price: "R1,500",
      description: "Develop professional landscaping skills including garden design, plant care, irrigation systems, and landscape maintenance. Learn sustainable practices and gain practical experience in creating and maintaining beautiful outdoor spaces.",
      topics: [
        "Garden Design Principles",
        "Plant Selection and Care",
        "Irrigation and Drainage",
        "Lawn Maintenance",
        "Tool Safety and Usage",
      ],
    },
    {
      title: "Life Skills",
      duration: "6 Months",
      price: "R1,500",
      description: "Essential life skills training covering communication, financial literacy, time management, problem-solving, and professional development. Build confidence and competence to navigate both personal and professional challenges successfully.",
      topics: [
        "Effective Communication",
        "Financial Management",
        "Time and Stress Management",
        "Problem-Solving Skills",
        "Professional Development",
      ],
    },
  ];

  const sixWeekCourses = [
    {
      title: "Child Minding",
      duration: "6 Weeks",
      price: "R750",
      description: "Professional childcare training covering child development, safety, nutrition, and age-appropriate activities. Learn to provide quality care in home or childcare center settings. Ideal for those seeking employment as childminders or nannies.",
      topics: [
        "Child Development Stages",
        "Health and Safety",
        "Nutrition and Meal Planning",
        "Educational Activities",
        "Emergency Procedures",
      ],
    },
    {
      title: "Cooking",
      duration: "6 Weeks",
      price: "R750",
      description: "Comprehensive cooking course covering food preparation, nutrition, menu planning, and kitchen safety. Learn essential culinary techniques, hygiene standards, and meal preparation for various dietary needs and occasions.",
      topics: [
        "Food Preparation Techniques",
        "Kitchen Safety and Hygiene",
        "Menu Planning",
        "Nutritional Awareness",
        "Dietary Requirements",
      ],
    },
    {
      title: "Garden Maintenance",
      duration: "6 Weeks",
      price: "R750",
      description: "Practical garden maintenance training focusing on essential gardening tasks, plant care, pest control, and seasonal maintenance. Learn to maintain gardens professionally and gain skills for employment in garden services.",
      topics: [
        "Basic Gardening Techniques",
        "Plant Care and Watering",
        "Pest and Weed Control",
        "Tool Maintenance",
        "Seasonal Garden Care",
      ],
    },
  ];

  const CourseCard = ({ course, type }: { course: any; type: "intensive" | "short" }) => (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant={type === "intensive" ? "default" : "secondary"} className="mb-2">
            {course.duration}
          </Badge>
          <span className="text-2xl font-bold text-[#003366]">{course.price}</span>
        </div>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <Award className="w-4 h-4 text-[#F97316]" />
          What You'll Learn:
        </h4>
        <ul className="space-y-2">
          {course.topics.map((topic: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-[#F97316] mt-0.5">•</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link to="/quote" className="w-full">
          <Button className="w-full bg-[#F97316] hover:bg-[#EA6A0A] text-white">
            Get Quote
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Training Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive 6-month intensive programs or practical 6-week short courses.
            All courses include hands-on training and certification upon completion.
          </p>
        </div>

        {/* Discount Info Banner */}
        <div className="bg-gradient-to-r from-[#003366] to-[#002147] border-2 border-[#004080] rounded-lg p-6 mb-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg mb-2">💰 Bulk Discount Offer</h3>
              <p className="text-gray-200">
                Save up to 15% when you enroll in multiple courses! 2 courses = 5% off • 3 courses = 10% off • 4+ courses = 15% off
              </p>
            </div>
            <Link to="/quote">
              <Button className="bg-[#F97316] hover:bg-[#EA6A0A] text-white whitespace-nowrap">
                Calculate Savings
              </Button>
            </Link>
          </div>
        </div>

        {/* 6-Month Courses */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-[#003366]" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">6-Month Intensive Courses</h2>
              <p className="text-gray-600">Comprehensive training programs - R1,500 per course</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {sixMonthCourses.map((course, index) => (
              <CourseCard key={index} course={course} type="intensive" />
            ))}
          </div>
        </section>

        {/* 6-Week Courses */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-[#F97316]" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">6-Week Short Courses</h2>
              <p className="text-gray-600">Fast-track skill development - R750 per course</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sixWeekCourses.map((course, index) => (
              <CourseCard key={index} course={course} type="short" />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Choosing the Right Course?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our team is here to help you select the courses that best match your career goals and interests.
            Contact us for personalized guidance.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#F97316] hover:bg-[#EA6A0A] text-white">
              Contact Us
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}