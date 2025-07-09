import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, GitBranch, Target, Zap } from "lucide-react";

const Research = () => {
  const researchAreas = [
    {
      title: "Reinforcement Learning for Autonomous Vehicles",
      description: "Developing intelligent decision-making algorithms for autonomous vehicles in complex traffic scenarios using deep reinforcement learning techniques.",
      tags: ["Reinforcement Learning", "Autonomous Vehicles", "Deep Learning", "Traffic Systems"],
      icon: <Target className="w-6 h-6" />,
      status: "Ongoing"
    },
    {
      title: "Intelligent Transportation Systems",
      description: "Research focused on optimizing traffic flow and reducing congestion through AI-powered traffic management systems and predictive analytics.",
      tags: ["ITS", "Traffic Optimization", "Machine Learning", "Smart Cities"],
      icon: <Zap className="w-6 h-6" />,
      status: "Master's Research"
    },
    {
      title: "Robot Control Systems",
      description: "Investigating advanced control algorithms for robotic manipulation and navigation, with emphasis on adaptive and learning-based approaches.",
      tags: ["Robot Control", "Adaptive Systems", "Control Theory", "Robotics"],
      icon: <GitBranch className="w-6 h-6" />,
      status: "PhD Focus"
    }
  ];

  const projects = [
    {
      title: "RL-Based Traffic Signal Control",
      description: "Implementation of a multi-agent reinforcement learning system for adaptive traffic signal control in urban intersections.",
      technologies: ["Python", "TensorFlow", "SUMO", "OpenAI Gym"],
      link: "#"
    },
    {
      title: "Autonomous Vehicle Path Planning",
      description: "Development of a path planning algorithm for autonomous vehicles using deep Q-learning in simulated environments.",
      technologies: ["PyTorch", "ROS", "Gazebo", "Python"],
      link: "#"
    },
    {
      title: "Robotic Arm Control Optimization",
      description: "Optimization of robotic arm trajectories using reinforcement learning for improved efficiency and safety.",
      technologies: ["MATLAB", "Simulink", "Python", "Control Systems"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Research</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of artificial intelligence, robotics, and intelligent systems 
            to create more autonomous and efficient technological solutions.
          </p>
        </div>

        {/* Research Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Research Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {area.icon}
                    </div>
                    <Badge variant={area.status === "Ongoing" ? "default" : "secondary"}>
                      {area.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {area.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Current Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Current Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Details
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Philosophy */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Research Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                My research is driven by the belief that intelligent systems should be designed to work 
                seamlessly with human needs and environmental constraints. I focus on developing practical, 
                scalable solutions that bridge the gap between theoretical advances in AI and real-world 
                applications in transportation and robotics. Through interdisciplinary collaboration and 
                rigorous experimentation, I aim to contribute to the development of safer, more efficient, 
                and more adaptive autonomous systems.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Research;