import { NextRequest, NextResponse } from "next/server";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { Resume } from "@prisma/client";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const resume = formData.get("resume") as File;

    if (!resume) {
      return NextResponse.json({
        error: "No resume file provided",
        status: 400,
      });
    }

    const arrayBuffer = await resume.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    const result = await generateText({
      model: google("gemini-2.0-flash"),
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Please extract the following information from this resume/CV:
              1. Title/Position
              2. Professional Summary
              3. Work Experience (for each position):
                 - Company Name
                 - Role/Position
                 - Start Date
                 - End Date
                 - Description of responsibilities
              4. Education (for each entry):
                 - Institution Name
                 - Degree
                 - Start Year
                 - End Year
              5. Skills (for each skill):
                 - Skill Name
                 - Level (beginner: 0-2 years, intermediate: 2-5 years, advanced: 5+ years)

              Please format the response as a JSON object with the following structure:
              {
                "title": string,
                "summary": string,
                "experience": [
                  {
                    "companyName": string,
                    "role": string,
                    "startDate": string,
                    "endDate": string,
                    "description": string
                  }
                ],
                "education": [
                  {
                    "institution": string,
                    "degree": string,
                    "startYear": string,
                    "endYear": string
                  }
                ],
                "skills": [
                  {
                    "name": string,
                    "level": "beginner" | "intermediate" | "advanced"
                  }
                ]
              }`,
            },
            {
              type: "file",
              data: uint8Array,
              mimeType: "application/pdf",
            },
          ],
        },
      ],
    });

    // Parse the response text as JSON
    const parsedData: Resume = JSON.parse(
      result.text.split("```json")[1].split("```")[0]
    );

    return NextResponse.json(
      { data: parsedData },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
