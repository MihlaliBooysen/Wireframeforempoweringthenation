import { useState } from "react";
import { Calculator, CheckCircle, Info, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Alert, AlertDescription } from "./ui/alert";

interface Course {
  id: string;
  name: string;
  duration: string;
  price: number;
  category: "6-month" | "6-week";
}

export function QuoteCalculator() {
  const courses: Course[] = [
    { id: "first-aid", name: "First Aid", duration: "6 Months", price: 1500, category: "6-month" },
    { id: "sewing", name: "Sewing", duration: "6 Months", price: 1500, category: "6-month" },
    { id: "landscaping", name: "Landscaping", duration: "6 Months", price: 1500, category: "6-month" },
    { id: "life-skills", name: "Life Skills", duration: "6 Months", price: 1500, category: "6-month" },
    { id: "child-minding", name: "Child Minding", duration: "6 Weeks", price: 750, category: "6-week" },
    { id: "cooking", name: "Cooking", duration: "6 Weeks", price: 750, category: "6-week" },
    { id: "garden-maintenance", name: "Garden Maintenance", duration: "6 Weeks", price: 750, category: "6-week" },
  ];

  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const handleCourseToggle = (courseId: string) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const calculateQuote = () => {
    const selectedCourseObjects = courses.filter((course) =>
      selectedCourses.includes(course.id)
    );
    const subtotal = selectedCourseObjects.reduce((sum, course) => sum + course.price, 0);
    const courseCount = selectedCourses.length;

    let discountPercentage = 0;
    if (courseCount === 2) discountPercentage = 5;
    else if (courseCount === 3) discountPercentage = 10;
    else if (courseCount >= 4) discountPercentage = 15;

    const discountAmount = (subtotal * discountPercentage) / 100;
    const total = subtotal - discountAmount;

    return {
      subtotal,
      discountPercentage,
      discountAmount,
      total,
      courseCount,
      selectedCourses: selectedCourseObjects,
    };
  };

  const quote = calculateQuote();

  const getDiscountBadge = (count: number) => {
    if (count === 2) return { text: "5% Discount Applied", variant: "default" as const };
    if (count === 3) return { text: "10% Discount Applied", variant: "default" as const };
    if (count >= 4) return { text: "15% Discount Applied", variant: "default" as const };
    return null;
  };

  const discountBadge = getDiscountBadge(quote.courseCount);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Calculator className="w-16 h-16 text-[#003366]" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Quote Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the courses you're interested in and see your personalized quote with automatic bulk discounts applied.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Selection */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Select Your Courses</CardTitle>
                <CardDescription>Choose one or more courses to get started. Discounts are automatically applied for multiple courses.</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Discount Info */}
                <Alert className="mb-6 bg-[#003366] border-[#004080] text-white">
                  <Info className="h-4 w-4 text-[#F97316]" />
                  <AlertDescription className="text-sm text-white">
                    <strong>Bulk Discounts:</strong> 2 courses = 5% off • 3 courses = 10% off • 4+ courses = 15% off
                  </AlertDescription>
                </Alert>

                {/* 6-Month Courses */}
                <div className="mb-8">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    6-Month Intensive Courses
                    <Badge variant="outline">R1,500 each</Badge>
                  </h3>
                  <div className="space-y-3">
                    {courses
                      .filter((course) => course.category === "6-month")
                      .map((course) => (
                        <div
                          key={course.id}
                          className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedCourses.includes(course.id)
                              ? "border-[#F97316] bg-orange-50"
                              : "border-gray-200 hover:border-[#F97316]/50"
                          }`}
                          onClick={() => handleCourseToggle(course.id)}
                        >
                          <Checkbox
                            id={course.id}
                            checked={selectedCourses.includes(course.id)}
                            onCheckedChange={() => handleCourseToggle(course.id)}
                          />
                          <Label
                            htmlFor={course.id}
                            className="flex-1 cursor-pointer flex justify-between items-center"
                          >
                            <div>
                              <div className="font-semibold">{course.name}</div>
                              <div className="text-sm text-gray-600">{course.duration}</div>
                            </div>
                            <div className="font-bold text-gray-900">R{course.price.toLocaleString()}</div>
                          </Label>
                        </div>
                      ))}
                  </div>
                </div>

                {/* 6-Week Courses */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    6-Week Short Courses
                    <Badge variant="outline">R750 each</Badge>
                  </h3>
                  <div className="space-y-3">
                    {courses
                      .filter((course) => course.category === "6-week")
                      .map((course) => (
                        <div
                          key={course.id}
                          className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedCourses.includes(course.id)
                              ? "border-[#F97316] bg-orange-50"
                              : "border-gray-200 hover:border-[#F97316]/50"
                          }`}
                          onClick={() => handleCourseToggle(course.id)}
                        >
                          <Checkbox
                            id={course.id}
                            checked={selectedCourses.includes(course.id)}
                            onCheckedChange={() => handleCourseToggle(course.id)}
                          />
                          <Label
                            htmlFor={course.id}
                            className="flex-1 cursor-pointer flex justify-between items-center"
                          >
                            <div>
                              <div className="font-semibold">{course.name}</div>
                              <div className="text-sm text-gray-600">{course.duration}</div>
                            </div>
                            <div className="font-bold text-gray-900">R{course.price.toLocaleString()}</div>
                          </Label>
                        </div>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader className="bg-gradient-to-r from-[#003366] to-[#002147] text-white rounded-t-lg">
                <CardTitle>Your Quote</CardTitle>
                <CardDescription className="text-gray-200">
                  {quote.courseCount} {quote.courseCount === 1 ? "course" : "courses"} selected
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                {quote.courseCount === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Calculator className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p>Select courses to see your quote</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Selected Courses List */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm text-gray-600">SELECTED COURSES</h4>
                      <div className="space-y-2">
                        {quote.selectedCourses.map((course) => (
                          <div key={course.id} className="flex justify-between items-start text-sm">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#F97316] mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="font-medium">{course.name}</div>
                                <div className="text-xs text-gray-500">{course.duration}</div>
                              </div>
                            </div>
                            <span className="font-semibold">R{course.price.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4 space-y-3">
                      {/* Subtotal */}
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold">R{quote.subtotal.toLocaleString()}</span>
                      </div>

                      {/* Discount */}
                      {quote.discountPercentage > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-[#F97316]">
                            Discount ({quote.discountPercentage}%)
                          </span>
                          <span className="font-semibold text-[#F97316]">
                            -R{quote.discountAmount.toLocaleString()}
                          </span>
                        </div>
                      )}

                      {/* Discount Badge */}
                      {discountBadge && (
                        <div className="flex justify-center">
                          <Badge className="bg-[#F97316] text-white">
                            {discountBadge.text}
                          </Badge>
                        </div>
                      )}

                      {/* Total */}
                      <div className="border-t pt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold">Total</span>
                          <span className="text-2xl font-bold text-[#003366]">
                            R{quote.total.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2 pt-4">
                      <Button className="w-full bg-[#F97316] hover:bg-[#EA6A0A] text-white">
                        <Download className="mr-2 w-4 h-4" />
                        Download Quote
                      </Button>
                      <Button variant="outline" className="w-full border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white">
                        Request Information
                      </Button>
                    </div>

                    {/* Next Discount Info */}
                    {quote.courseCount < 4 && (
                      <Alert className="bg-orange-50 border-[#F97316]">
                        <Info className="h-4 w-4 text-[#F97316]" />
                        <AlertDescription className="text-xs">
                          {quote.courseCount === 1 && "Add 1 more course to get 5% off!"}
                          {quote.courseCount === 2 && "Add 1 more course to get 10% off!"}
                          {quote.courseCount === 3 && "Add 1 more course to get 15% off!"}
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}