import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, MapPin, Calendar, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const skills = [
    "Reinforcement Learning",
    "Intelligent Transportation",
    "Robot Control",
    "Automation Systems",
    "Machine Learning",
    "Control Theory"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-accent to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
              <GraduationCap className="w-16 h-16 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Your Name
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              PhD Candidate in Robot Control
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>University Location</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>your.email@university.edu</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Starting PhD September 2024</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/research">
              <Button size="lg" className="w-full sm:w-auto">
                View Research
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/publications">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Publications
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">PhD in Robot Control</h4>
                    <p className="text-sm text-muted-foreground">University Name • Starting September 2024</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Master in Automation</h4>
                    <p className="text-sm text-muted-foreground">University Name • 2024</p>
                    <p className="text-sm mt-1">Focus: Intelligent Transportation & Reinforcement Learning</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Research Interests</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  My research focuses on the intersection of artificial intelligence and robotics, 
                  with particular emphasis on developing intelligent control systems for autonomous 
                  vehicles and robotic systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Highlights */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Completed Master's thesis on intelligent transportation systems using reinforcement learning</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Accepted for PhD program in Robot Control starting September 2024</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Published research on reinforcement learning applications in autonomous systems</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;