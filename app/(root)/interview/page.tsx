"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  MessageSquare,
  Play,
  Plus,
  Star,
} from "lucide-react";
import { useGetInterview } from "@/utils/hooks/use-get-interview";
import { useUser } from "@clerk/nextjs";

export default function InterviewContent() {
  const { user } = useUser();
  const { data: interview } = useGetInterview(user?.id ?? "");

  console.log("interview", interview);

  return (
    <main className="w-full h-full overflow-auto">
      <div className="space-y-6 p-4 md:p-6 w-full">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Interview Preparation
            </h1>
            <p className="text-gray-400">
              Practice and prepare for your upcoming interviews.
            </p>
          </div>
          <Button className="text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
            <Plus className="mr-2 h-4 w-4" />
            New Interview
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList className="bg-gray-800/50 text-gray-400">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              All Interviews
            </TabsTrigger>
            <TabsTrigger
              value="technical"
              className="data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              Technical
            </TabsTrigger>
            <TabsTrigger
              value="behavioral"
              className="data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              Behavioral
            </TabsTrigger>
            <TabsTrigger
              value="saved"
              className="data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              Saved
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="bg-purple-500/10 text-purple-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
                      Technical
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-400 hover:text-white"
                    >
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg text-white mt-2">
                    Frontend Developer Interview
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    React, JavaScript, CSS
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>30 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>25 questions</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    <Play className="mr-2 h-4 w-4" />
                    Start Interview
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="bg-blue-500/10 text-blue-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
                      Behavioral
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-400 hover:text-white"
                    >
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg text-white mt-2">
                    Leadership & Teamwork
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    STAR method, Conflict resolution
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>45 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>15 questions</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Play className="mr-2 h-4 w-4" />
                    Start Interview
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="bg-green-500/10 text-green-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
                      Technical
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-400 hover:text-white"
                    >
                      <Star className="h-4 w-4 text-yellow-500" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg text-white mt-2">
                    System Design Interview
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Architecture, Scalability, Database
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>60 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>10 questions</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                    <Play className="mr-2 h-4 w-4" />
                    Start Interview
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="flex items-center justify-center gap-2 py-4">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 bg-gray-800 border-gray-700 text-gray-400"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="h-8 bg-gray-800 border-gray-700 text-white"
              >
                1
              </Button>
              <Button
                variant="outline"
                className="h-8 bg-gray-800/50 border-gray-700 text-gray-400"
              >
                2
              </Button>
              <Button
                variant="outline"
                className="h-8 bg-gray-800/50 border-gray-700 text-gray-400"
              >
                3
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 bg-gray-800 border-gray-700 text-gray-400"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="technical" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="bg-purple-500/10 text-purple-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
                      Technical
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-400 hover:text-white"
                    >
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg text-white mt-2">
                    Frontend Developer Interview
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    React, JavaScript, CSS
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>30 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>25 questions</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    <Play className="mr-2 h-4 w-4" />
                    Start Interview
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="bg-green-500/10 text-green-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
                      Technical
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-400 hover:text-white"
                    >
                      <Star className="h-4 w-4 text-yellow-500" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg text-white mt-2">
                    System Design Interview
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Architecture, Scalability, Database
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>60 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>10 questions</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                    <Play className="mr-2 h-4 w-4" />
                    Start Interview
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="behavioral" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="bg-blue-500/10 text-blue-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
                      Behavioral
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-400 hover:text-white"
                    >
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg text-white mt-2">
                    Leadership & Teamwork
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    STAR method, Conflict resolution
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>45 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>15 questions</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Play className="mr-2 h-4 w-4" />
                    Start Interview
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="saved" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="bg-green-500/10 text-green-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
                      Technical
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-400 hover:text-white"
                    >
                      <Star className="h-4 w-4 text-yellow-500" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg text-white mt-2">
                    System Design Interview
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Architecture, Scalability, Database
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>60 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>10 questions</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                    <Play className="mr-2 h-4 w-4" />
                    Start Interview
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
