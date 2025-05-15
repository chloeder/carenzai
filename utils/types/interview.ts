export interface InterviewSessionFormData {
  position: string;
  duration: string;
  resume: File;
}

export interface NewInterviewModalProps {
  onSubmit: (values: InterviewSessionFormData) => void;
  isPending: boolean;
}

export interface InterviewAnswerFormData {
  sessionId: string;
  question: string;
  answer: string;
  feedback: string;
  score: number;
}
