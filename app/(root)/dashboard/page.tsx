"use client";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowUpRight,
  BarChart3,
  FileText,
  MessageSquare,
  Users,
} from "lucide-react";

export default function Dashboard() {
  return (
    <main className="flex-1 overflow-auto p-4 md:p-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Dashboard
          </h1>
          <p className="text-gray-400">
            Welcome back to your AI Career Guide dashboard.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-200">
                Interview Sessions
              </CardTitle>
              <MessageSquare className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">12</div>
              <p className="text-xs text-gray-400">+2 from last week</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-200">
                Resumes Created
              </CardTitle>
              <FileText className="h-4 w-4 text-indigo-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">4</div>
              <p className="text-xs text-gray-400">+1 from last week</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-200">
                Performance Score
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">85%</div>
              <p className="text-xs text-gray-400">+5% from last assessment</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-200">
                Job Applications
              </CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">7</div>
              <p className="text-xs text-gray-400">+3 from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm col-span-4">
            <CardHeader>
              <CardTitle className="text-gray-100">Weekly Activity</CardTitle>
              <CardDescription className="text-gray-400">
                Your interview and resume activity for the past week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-end gap-2">
                {[40, 25, 55, 32, 80, 45, 60].map((height, i) => (
                  <div key={i} className="relative flex-1 group">
                    <div
                      className="absolute bottom-0 w-full bg-gradient-to-t from-purple-600 to-indigo-500 rounded-sm"
                      style={{ height: `${height}%` }}
                    ></div>
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                      {height}%
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-400">
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
                <div>Sun</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm col-span-3">
            <CardHeader>
              <CardTitle className="text-gray-100">
                Upcoming Interviews
              </CardTitle>
              <CardDescription className="text-gray-400">
                Your scheduled mock interviews
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  company: "Tech Solutions Inc",
                  role: "Frontend Developer",
                  date: "Tomorrow, 2:00 PM",
                },
                {
                  company: "Digital Innovations",
                  role: "UX Designer",
                  date: "May 15, 10:30 AM",
                },
                {
                  company: "Future Systems",
                  role: "Product Manager",
                  date: "May 18, 4:00 PM",
                },
              ].map((interview, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm text-white">
                      {interview.company}
                    </p>
                    <p className="text-xs text-gray-400">{interview.role}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-gray-400">
                      {interview.date}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-gray-400 hover:text-white"
                    >
                      <ArrowUpRight className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">
                Interview Preparation
              </CardTitle>
              <CardDescription className="text-gray-300">
                Practice with AI-powered mock interviews
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-300">
                Our AI-powered interview simulator helps you prepare for
                technical and behavioral interviews with real-time feedback.
              </p>
              <Button className="text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                Start Practice Interview
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Resume Builder</CardTitle>
              <CardDescription className="text-gray-300">
                Create ATS-optimized resumes with AI assistance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-300">
                Our AI resume builder helps you create professional,
                ATS-optimized resumes tailored to specific job descriptions.
              </p>
              <Button className="text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                Create New Resume
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
