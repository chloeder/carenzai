import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InterviewSession, InterviewAnswer } from "@prisma/client";
import { Clock, MessageSquare, Play } from "lucide-react";
import Image from "next/image";

export function CardInterview({
  interview,
}: {
  interview: InterviewSession & { answers: InterviewAnswer[] };
}) {
  return (
    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div
            className={`${
              interview.type.toLowerCase() === "technical"
                ? "bg-yellow-500/10 text-yellow-500 px-2.5 py-0.5 rounded-full text-xs font-medium"
                : "bg-green-500/10 text-green-500 px-2.5 py-0.5 rounded-full text-xs font-medium"
            }`}
          >
            {interview.type}
          </div>
        </div>
        <CardTitle className="text-lg text-white mt-2">
          {interview.positionApplied} Interview
        </CardTitle>
        <CardDescription className="text-gray-400 flex items-center gap-2">
          Language :
          {interview.language === "english" ? (
            <div className="flex items-center gap-2">
              <Image
                width="20"
                height="20"
                className="rounded-lg"
                alt="Flag of the United Kingdom"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/512px-Flag_of_the_United_Kingdom_%283-5%29.svg.png?20230715230526"
              />
              <span>English</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Image
                width="20"
                height="20"
                className="rounded-lg"
                alt="Flag of Indonesia"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/512px-Flag_of_Indonesia.svg.png?20200822164827"
              />
              <span>Indonesia</span>
            </div>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Clock className="h-4 w-4" />
          <span>{interview.duration} minutes</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
          <MessageSquare className="h-4 w-4" />
          <span>
            {interview.answers
              .map((answer) => (answer.question?.match(/-/g) || []).length)
              .reduce((a, b) => a + b, 0)}{" "}
            questions
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="text-white w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 cursor-pointer">
          <Play className="mr-2 h-4 w-4" />
          Start Interview
        </Button>
      </CardFooter>
    </Card>
  );
}
