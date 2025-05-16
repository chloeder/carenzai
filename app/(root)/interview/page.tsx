"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetInterview } from "@/utils/hooks/use-get-interview";
import { useInitUser } from "@/utils/hooks/use-init-user";
import { useStoreInterviewSession } from "@/utils/hooks/use-store-interview-session";
import { InterviewSessionFormData } from "@/utils/types/interview";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { CardInterview } from "./_components/card-interview";
import { NewInterviewModal } from "./_components/new-interview-modal";

export default function InterviewContent() {
  const { data: user } = useInitUser();
  const { interviewSession, isPending } = useStoreInterviewSession();
  const [type, setType] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const { data: interviews } = useGetInterview(user?.id ?? "");

  async function handleSubmit(values: InterviewSessionFormData) {
    try {
      await interviewSession(values);
    } catch (error) {
      console;
    }
  }

  const filteredInterviews = interviews?.filter((interview) => {
    if (type === "all") return true;
    return interview.type.toLowerCase() === type;
  });

  // Calculate pagination
  const totalPages = Math.ceil(
    (filteredInterviews?.length || 0) / itemsPerPage
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedInterviews = filteredInterviews?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
          <NewInterviewModal onSubmit={handleSubmit} isPending={isPending} />
        </div>

        <Tabs defaultValue={type} onValueChange={setType} className="space-y-4">
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
          </TabsList>

          <TabsContent value={type} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {paginatedInterviews?.length ? (
                paginatedInterviews?.map((interview) => (
                  <CardInterview key={interview.id} interview={interview} />
                ))
              ) : (
                <div className="col-span-full text-center text-gray-400">
                  No interviews found
                </div>
              )}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 py-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 bg-gray-800 border-gray-700 text-gray-400"
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant="outline"
                      className={`h-8 ${
                        currentPage === page
                          ? "bg-gray-800 text-white"
                          : "bg-gray-800/50 text-gray-400"
                      } border-gray-700`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </Button>
                  )
                )}

                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 bg-gray-800 border-gray-700 text-gray-400"
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
