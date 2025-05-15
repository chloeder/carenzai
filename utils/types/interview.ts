export interface InterviewFormData {
  position: string;
  duration: string;
  resume?: File;
}

export interface NewInterviewModalProps {
  onSubmit: (values: InterviewFormData) => void;
}
