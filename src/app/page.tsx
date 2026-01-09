"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sprout, 
  Droplets, 
  Wind, 
  Thermometer, 
  Brain, 
  ShieldCheck, 
  Smartphone, 
  CloudOff,
  ChevronRight,
  Database,
  Cpu,
  Layers,
  LineChart,
  Users,
  Mail,
  Phone,
  ArrowRight,
  Sun,
  Moon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  LineChart as ReChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

// --- Mock Data ---
const sensorData = [
  { time: "08:00", moisture: 35, temp: 24, humidity: 60 },
  { time: "10:00", moisture: 32, temp: 26, humidity: 55 },
  { time: "12:00", moisture: 28, temp: 29, humidity: 50 },
  { time: "14:00", moisture: 25, temp: 31, humidity: 45 },
  { time: "16:00", moisture: 45, temp: 28, humidity: 52 },
  { time: "18:00", moisture: 42, temp: 25, humidity: 58 },
  { time: "20:00", moisture: 40, temp: 23, humidity: 62 },
];

const teamMembers = [
  { name: "Arya Abinash Kumar", role: "Team Leader & ML Modelling", school: "School Of Computer Science Engineering" },
  { name: "Arpan Ganguly", role: "IoT Engineer", school: "School Of Computer Science Engineering" },
  { name: "Nilisha Srivastava", role: "IoT Engineer", school: "School Of Computer Science Engineering" },
  { name: "Soumyadip Mondal", role: "Interface Developer", school: "School Of Computer Science Engineering" },
];

// --- Sub-components ---

const Hero = () => (
  <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4 px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            Smart Agriculture & Nutrition
          </Badge>
        </motion.div>
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary/80 to-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Seed2Soul
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          AI-Driven Adaptive Irrigation System for Sustainable Agriculture & Crop Nutrition. 
          Bridging the gap between raw data and actionable farming wisdom.
        </motion.p>
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" className="rounded-full px-8 text-lg" onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}>
            View Dashboard <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 text-lg" onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}>
            Learn More
          </Button>
        </motion.div>
      </div>
    </div>
    
    {/* Decorative Elements */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
    <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />
  </section>
);

const ProblemSection = () => (
  <section id="problem" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The Challenge in Modern Farming</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Farmers often receive raw soil and climate data without intelligent guidance on crop suitability, 
            future weather impact, or soil nutrient improvement. This forces reliance on guesswork, 
            leading to poor crop selection, soil degradation, and inefficient resource use.
          </p>
          <div className="grid gap-4">
            {[
              "Raw data lacks actionable intelligence",
              "Unpredictable environmental changes",
              "Inefficient use of water and nutrients",
              "Lack of soil nutrition correction strategies"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <ChevronRight className="h-4 w-4 text-primary" />
                </div>
                <span className="text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Card className="border-none shadow-xl bg-white/50 backdrop-blur">
            <CardContent className="pt-6">
              <div className="mb-4 h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
                <CloudOff className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Data Overload</h3>
              <p className="text-sm text-muted-foreground">Raw numbers without context lead to confusion.</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-xl bg-white/50 backdrop-blur translate-y-8">
            <CardContent className="pt-6">
              <div className="mb-4 h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                <Droplets className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Water Waste</h3>
              <p className="text-sm text-muted-foreground">Fixed schedules ignore actual soil needs.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur group">
    <CardHeader>
      <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
        <Icon className="h-7 w-7" />
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
    </CardHeader>
  </Card>
);

const FeaturesSection = () => (
  <section id="features" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Innovation at Its Core</h2>
        <p className="text-lg text-muted-foreground">
          Seed2Soul combines real-time IoT sensing with advanced ML to provide an offline-first, affordable solution.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          icon={Brain}
          title="AI-Based Prediction"
          description="Uses ML models (Linear Regression/Decision Trees) to study moisture patterns and predict irrigation needs instead of static thresholds."
        />
        <FeatureCard 
          icon={Layers}
          title="Soil Type Inference"
          description="Identifies soil type through behavioral moisture analysis, helping farmers understand how their land holds nutrients."
        />
        <FeatureCard 
          icon={Sprout}
          title="Nutrient Advisory"
          description="Provides specific crop recommendations based on pH and NPK values, correcting soil deficiencies for sustainable farming."
        />
        <FeatureCard 
          icon={CloudOff}
          title="Offline-First Design"
          description="Engineered to work in remote areas with limited internet, using on-device processing and OLED displays for transparency."
        />
        <FeatureCard 
          icon={Cpu}
          title="IoT Integration"
          description="Low-cost sensors (Soil Moisture, DHT11/22, pH, NPK) paired with ESP32/Arduino for real-time monitoring."
        />
        <FeatureCard 
          icon={ShieldCheck}
          title="Water Conservation"
          description="Automatic relay-based pump control ensures water is used only when necessary, promoting long-term ecological balance."
        />
      </div>
    </div>
  </section>
);

const DashboardPreview = () => {
  const [moisture, setMoisture] = useState(38);
  const [pumpStatus, setPumpStatus] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setMoisture(prev => {
        const next = prev + (pumpStatus ? 1 : -0.5);
        if (next > 80) setPumpStatus(false);
        if (next < 30 && !pumpStatus) setPumpStatus(true);
        return Math.min(Math.max(next, 0), 100);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [pumpStatus]);

  return (
    <section id="dashboard" className="py-24 bg-zinc-900 text-white overflow-hidden rounded-[2.5rem] my-12 mx-4 lg:mx-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3 space-y-8">
            <div>
              <Badge className="mb-4 bg-primary text-white border-none">Live Simulation</Badge>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Smart Dashboard</h2>
              <p className="text-zinc-400 text-lg">
                Experience how Seed2Soul analyzes your soil in real-time. The AI identifies patterns and takes action automatically.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-zinc-400 font-medium">Pump Status</span>
                  <Badge className={pumpStatus ? "bg-emerald-500" : "bg-zinc-700"}>
                    {pumpStatus ? "RUNNING" : "STANDBY"}
                  </Badge>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center ${pumpStatus ? "bg-emerald-500/20 text-emerald-500 animate-pulse" : "bg-zinc-700 text-zinc-500"}`}>
                    <Droplets className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{pumpStatus ? "Irrigating..." : "Soil Moist"}</p>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Automated Control</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-zinc-400 font-medium">Soil Moisture</span>
                  <span className="text-xl font-bold text-primary">{Math.round(moisture)}%</span>
                </div>
                <Progress value={moisture} className="h-2 bg-zinc-700" />
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <Card className="bg-zinc-800 border-zinc-700 text-white shadow-2xl overflow-hidden">
              <CardHeader className="border-b border-zinc-700">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <CardTitle>Field Analysis - Plot #01</CardTitle>
                    <CardDescription className="text-zinc-400">Sensor readings and AI predictions</CardDescription>
                  </div>
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
                    <TabsList className="bg-zinc-900 border-zinc-700">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <AnimatePresence mode="wait">
                  {activeTab === "overview" ? (
                    <motion.div 
                      key="overview"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { label: "Temp", value: "28°C", icon: Thermometer, color: "text-orange-400" },
                          { label: "Humidity", value: "52%", icon: Wind, color: "text-blue-400" },
                          { label: "pH Level", value: "6.8", icon: Sprout, color: "text-emerald-400" },
                          { label: "AI Forecast", value: "Optimal", icon: Brain, color: "text-purple-400" },
                        ].map((stat, i) => (
                          <div key={i} className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-700/50">
                            <stat.icon className={`h-5 w-5 ${stat.color} mb-2`} />
                            <p className="text-xs text-zinc-500 uppercase">{stat.label}</p>
                            <p className="text-lg font-bold">{stat.value}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="h-[300px] w-full mt-6" style={{ minHeight: '300px' }}>
                        {mounted && (
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={sensorData}>
                              <defs>
                                <linearGradient id="colorMoisture" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3}/>
                                  <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                              <XAxis dataKey="time" stroke="#666" fontSize={12} />
                              <YAxis stroke="#666" fontSize={12} />
                              <Tooltip 
                                contentStyle={{ backgroundColor: "#18181b", borderColor: "#3f3f46", color: "#fff" }}
                                itemStyle={{ color: "#4ade80" }}
                              />
                              <Area type="monotone" dataKey="moisture" stroke="#4ade80" fillOpacity={1} fill="url(#colorMoisture)" strokeWidth={2} />
                            </AreaChart>
                          </ResponsiveContainer>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="nutrition"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="bg-primary/10 border border-primary/20 p-6 rounded-2xl">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                          <Brain className="h-6 w-6 text-primary" />
                          AI Recommendation
                        </h3>
                        <p className="text-zinc-300 mb-6">
                          Based on current NPK (20:10:10) and pH (6.8), your soil is highly suitable for leafy greens.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-700">
                            <p className="text-primary font-bold mb-1">Suitable Crops</p>
                            <p className="text-sm text-zinc-400">Spinach, Lettuce, Mint, Basil</p>
                          </div>
                          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-700">
                            <p className="text-orange-400 font-bold mb-1">Corrective Action</p>
                            <p className="text-sm text-zinc-400">Add organic compost to maintain Nitrogen levels.</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="font-bold text-zinc-400 uppercase tracking-widest text-xs">Soil Nutrient Balance (NPK)</p>
                        {[
                          { label: "Nitrogen (N)", value: 75, color: "bg-blue-500" },
                          { label: "Phosphorus (P)", value: 45, color: "bg-orange-500" },
                          { label: "Potassium (K)", value: 60, color: "bg-purple-500" },
                        ].map((nutrient, i) => (
                          <div key={i} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>{nutrient.label}</span>
                              <span className="font-bold">{nutrient.value}%</span>
                            </div>
                            <Progress value={nutrient.value} className={`h-1.5 bg-zinc-700 ${nutrient.color}`} />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => (
  <section id="team" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">The Team Behind Seed2Soul</h2>
        <div className="space-y-1">
          <p className="text-lg font-bold text-primary">Mentor: Prof. Mohit Ranjan Panda</p>
          <p className="text-muted-foreground">School of Computer Science Engineering, KIIT</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, i) => (
          <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
            <div className="h-2 bg-primary w-full" />
            <CardHeader className="text-center pt-8">
              <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center text-primary mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <CardTitle className="text-lg">{member.name}</CardTitle>
              <CardDescription className="font-medium text-primary/80">{member.role}</CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-8">
              <p className="text-xs text-muted-foreground uppercase tracking-widest leading-relaxed">
                {member.school}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-zinc-50 border-t border-zinc-200 py-16 dark:bg-zinc-950 dark:border-zinc-800">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Sprout className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold tracking-tight">Seed2Soul</span>
          </div>
          <p className="text-muted-foreground">
            Empowering farmers with AI-driven insights for a sustainable and nutrient-rich future.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact Team Leader</h4>
          <div className="space-y-2 text-muted-foreground">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> 24155012@kiit.ac.in
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> 8424006870
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Track</h4>
          <p className="text-muted-foreground">
            Smart Agriculture and Nutrition for Health
          </p>
        </div>
      </div>
      <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Seed2Soul KIIT. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 dark:bg-black/80 dark:border-zinc-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sprout className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight">Seed2Soul</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm font-medium hover:text-primary transition-colors">Problem</a>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Innovation</a>
            <a href="#dashboard" className="text-sm font-medium hover:text-primary transition-colors">Dashboard</a>
            <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">Team</a>
            <Button size="sm" className="rounded-full" onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <DashboardPreview />
        <TeamSection />

        <section className="py-24 bg-primary text-white text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your farm?</h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Join the Seed2Soul initiative and start making data-driven decisions today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full px-10">
                Contact Team
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 border-white text-white hover:bg-white hover:text-primary">
                View Source
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
