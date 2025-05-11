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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Edit,
  Eye,
  FileText,
  MoreHorizontal,
  Plus,
  Trash2,
} from "lucide-react";

export default function ResumeContent() {
  return (
    <main className="flex-1 overflow-auto p-4 md:p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Resume Builder
            </h1>
            <p className="text-gray-400">
              Create and manage your professional resumes.
            </p>
          </div>
          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
            <Plus className="mr-2 h-4 w-4" />
            New Resume
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList className="bg-gray-800/50 text-gray-400">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              All Resumes
            </TabsTrigger>
            <TabsTrigger
              value="tech"
              className="data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              Tech
            </TabsTrigger>
            <TabsTrigger
              value="design"
              className="data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              Design
            </TabsTrigger>
            <TabsTrigger
              value="management"
              className="data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              Management
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="bg-indigo-500/10 text-indigo-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
                      Tech
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-white"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="bg-gray-800 border-gray-700 text-gray-200"
                      >
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                          <Download className="mr-2 h-4 w-4" />
                          <span>Download</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 text-red-400 hover:text-red-400 focus:text-red-400">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardTitle className="text-lg text-white mt-2">
                    Frontend Developer Resume
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Last updated: May 5, 2025
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FileText className="h-4 w-4" />
                    <span>2 pages</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 bg-gray-700/50 border-gray-600 text-white hover:bg-gray-700 hover:text-white"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="bg-purple-500/10 text-purple-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
                      Design
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-white"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="bg-gray-800 border-gray-700 text-gray-200"
                      >
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                          <Download className="mr-2 h-4 w-4" />
                          <span>Download</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 text-red-400 hover:text-red-400 focus:text-red-400">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardTitle className="text-lg text-white mt-2">
                    UX Designer Resume
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Last updated: May 2, 2025
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FileText className="h-4 w-4" />
                    <span>1 page</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 bg-gray-700/50 border-gray-600 text-white hover:bg-gray-700 hover:text-white"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="bg-blue-500/10 text-blue-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
                      Management
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-white"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="bg-gray-800 border-gray-700 text-gray-200"
                      >
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                          <Download className="mr-2 h-4 w-4" />
                          <span>Download</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 text-red-400 hover:text-red-400 focus:text-red-400">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardTitle className="text-lg text-white mt-2">
                    Product Manager Resume
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Last updated: April 28, 2025
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FileText className="h-4 w-4" />
                    <span>2 pages</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 bg-gray-700/50 border-gray-600 text-white hover:bg-gray-700 hover:text-white"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
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
                size="icon"
                className="h-8 w-8 bg-gray-800 border-gray-700 text-gray-400"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="tech" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="bg-indigo-500/10 text-indigo-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
                      Tech
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-white"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="bg-gray-800 border-gray-700 text-gray-200"
                      >
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                          <Download className="mr-2 h-4 w-4" />
                          <span>Download</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 text-red-400 hover:text-red-400 focus:text-red-400">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardTitle className="text-lg text-white mt-2">
                    Frontend Developer Resume
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Last updated: May 5, 2025
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FileText className="h-4 w-4" />
                    <span>2 pages</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 bg-gray-700/50 border-gray-600 text-white hover:bg-gray-700 hover:text-white"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="design" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="bg-purple-500/10 text-purple-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
                      Design
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-white"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="bg-gray-800 border-gray-700 text-gray-200"
                      >
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                          <Download className="mr-2 h-4 w-4" />
                          <span>Download</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 text-red-400 hover:text-red-400 focus:text-red-400">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardTitle className="text-lg text-white mt-2">
                    UX Designer Resume
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Last updated: May 2, 2025
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FileText className="h-4 w-4" />
                    <span>1 page</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 bg-gray-700/50 border-gray-600 text-white hover:bg-gray-700 hover:text-white"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="management" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="bg-blue-500/10 text-blue-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
                      Management
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-white"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="bg-gray-800 border-gray-700 text-gray-200"
                      >
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                          <Download className="mr-2 h-4 w-4" />
                          <span>Download</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 text-red-400 hover:text-red-400 focus:text-red-400">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardTitle className="text-lg text-white mt-2">
                    Product Manager Resume
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Last updated: April 28, 2025
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FileText className="h-4 w-4" />
                    <span>2 pages</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 bg-gray-700/50 border-gray-600 text-white hover:bg-gray-700 hover:text-white"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <Card className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Resume Templates</CardTitle>
              <CardDescription className="text-gray-300">
                Choose from our professionally designed resume templates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="relative overflow-hidden rounded-lg border border-gray-700 bg-gray-800/50 p-2">
                  <div className="aspect-[3/4] bg-gray-700/50 rounded-md flex items-center justify-center">
                    <FileText className="h-12 w-12 text-indigo-400" />
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-sm font-medium text-white">Modern</p>
                    <p className="text-xs text-gray-400">
                      Clean and professional
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-lg border border-gray-700 bg-gray-800/50 p-2">
                  <div className="aspect-[3/4] bg-gray-700/50 rounded-md flex items-center justify-center">
                    <FileText className="h-12 w-12 text-purple-400" />
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-sm font-medium text-white">Creative</p>
                    <p className="text-xs text-gray-400">
                      Stand out from the crowd
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-lg border border-gray-700 bg-gray-800/50 p-2">
                  <div className="aspect-[3/4] bg-gray-700/50 rounded-md flex items-center justify-center">
                    <FileText className="h-12 w-12 text-blue-400" />
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-sm font-medium text-white">Executive</p>
                    <p className="text-xs text-gray-400">
                      For senior positions
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                Browse All Templates
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-6">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">AI Resume Tips</CardTitle>
              <CardDescription className="text-gray-400">
                Get AI-powered suggestions to improve your resume
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border border-gray-700 p-4">
                <h3 className="text-sm font-medium text-white">
                  Optimize for ATS
                </h3>
                <p className="mt-1 text-xs text-gray-400">
                  Our AI can analyze your resume against job descriptions to
                  ensure it passes through Applicant Tracking Systems.
                </p>
              </div>

              <div className="rounded-lg border border-gray-700 p-4">
                <h3 className="text-sm font-medium text-white">
                  Keyword Analysis
                </h3>
                <p className="mt-1 text-xs text-gray-400">
                  Get suggestions for industry-specific keywords to include
                  based on your target role.
                </p>
              </div>

              <div className="rounded-lg border border-gray-700 p-4">
                <h3 className="text-sm font-medium text-white">
                  Achievement Enhancer
                </h3>
                <p className="mt-1 text-xs text-gray-400">
                  Transform your job duties into impressive achievements with
                  quantifiable results.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                Get AI Resume Analysis
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
