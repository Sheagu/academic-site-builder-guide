import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Calendar, Users } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Deep Reinforcement Learning for Adaptive Traffic Signal Control in Urban Intersections",
      authors: ["Your Name", "Supervisor Name", "Co-author Name"],
      venue: "IEEE Transactions on Intelligent Transportation Systems",
      year: "2024",
      type: "Journal Article",
      status: "Published",
      abstract: "This paper presents a novel approach to traffic signal control using deep reinforcement learning algorithms. The proposed method demonstrates significant improvements in traffic flow efficiency and reduction in average waiting times.",
      keywords: ["Reinforcement Learning", "Traffic Control", "Urban Planning", "Deep Learning"],
      doi: "10.1109/TITS.2024.xxxxx",
      url: "#"
    },
    {
      title: "Multi-Agent Reinforcement Learning for Autonomous Vehicle Coordination",
      authors: ["Your Name", "Research Partner", "Advisor Name"],
      venue: "International Conference on Robotics and Automation (ICRA)",
      year: "2024",
      type: "Conference Paper",
      status: "Accepted",
      abstract: "We propose a multi-agent reinforcement learning framework for coordinating autonomous vehicles in complex traffic scenarios, achieving improved safety and efficiency metrics.",
      keywords: ["Multi-Agent Systems", "Autonomous Vehicles", "Coordination", "Safety"],
      doi: "10.1109/ICRA.2024.xxxxx",
      url: "#"
    },
    {
      title: "Intelligent Transportation Systems: A Comprehensive Survey of Machine Learning Applications",
      authors: ["Your Name", "Co-researcher"],
      venue: "Transportation Research Part C: Emerging Technologies",
      year: "2023",
      type: "Review Article",
      status: "Published",
      abstract: "A comprehensive review of machine learning applications in intelligent transportation systems, covering current trends, challenges, and future research directions.",
      keywords: ["ITS", "Machine Learning", "Survey", "Transportation"],
      doi: "10.1016/j.trc.2023.xxxxx",
      url: "#"
    },
    {
      title: "Adaptive Control Strategies for Robotic Manipulation Using Reinforcement Learning",
      authors: ["Your Name", "Lab Partner", "Principal Investigator"],
      venue: "Robotics and Autonomous Systems",
      year: "2024",
      type: "Journal Article",
      status: "Under Review",
      abstract: "This work investigates adaptive control strategies for robotic manipulation tasks, leveraging reinforcement learning to improve performance in dynamic environments.",
      keywords: ["Robot Control", "Manipulation", "Adaptive Control", "RL"],
      doi: "Pending",
      url: "#"
    }
  ];

  const theses = [
    {
      title: "Reinforcement Learning Applications in Intelligent Transportation Systems",
      type: "Master's Thesis",
      institution: "University Name",
      year: "2024",
      supervisor: "Prof. Supervisor Name",
      abstract: "This thesis explores the application of reinforcement learning techniques to various problems in intelligent transportation systems, with a focus on traffic optimization and autonomous vehicle control.",
      keywords: ["Reinforcement Learning", "ITS", "Traffic Optimization", "Autonomous Vehicles"],
      url: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "default";
      case "Accepted": return "secondary";
      case "Under Review": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Publications</h1>
          <p className="text-xl text-muted-foreground">
            Research contributions in robotics, intelligent transportation, and reinforcement learning
          </p>
        </div>

        {/* Journal Articles & Conference Papers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-8 h-8 text-primary" />
            Peer-Reviewed Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight mb-2">
                        {pub.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{pub.authors.join(", ")}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{pub.year}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant={getStatusColor(pub.status)}>
                        {pub.status}
                      </Badge>
                      <Badge variant="outline">
                        {pub.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-1">Venue</h4>
                      <p className="text-sm text-muted-foreground">{pub.venue}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-1">Abstract</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pub.abstract}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-2">Keywords</h4>
                      <div className="flex flex-wrap gap-1">
                        {pub.keywords.map((keyword) => (
                          <Badge key={keyword} variant="secondary" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                      <div className="text-xs text-muted-foreground">
                        DOI: {pub.doi}
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={pub.url} target="_blank" rel="noopener noreferrer">
                          View Publication
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Theses */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Theses</h2>
          <div className="space-y-6">
            {theses.map((thesis, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{thesis.title}</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {thesis.type} • {thesis.institution} • {thesis.year}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-1">Supervisor</h4>
                      <p className="text-sm text-muted-foreground">{thesis.supervisor}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-1">Abstract</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {thesis.abstract}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-2">Keywords</h4>
                      <div className="flex flex-wrap gap-1">
                        {thesis.keywords.map((keyword) => (
                          <Badge key={keyword} variant="secondary" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={thesis.url} target="_blank" rel="noopener noreferrer">
                          View Thesis
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;