// /api/questionaire/:id

interface QuestionaireProps {
  chat_id: string;
  id: string; // 設問の識別子
  problem: string;
  choices: string[];
  is_judge_required: boolean;
  is_save: boolean;
  created_at: {
    iso8601: string;
    timestamp: number;
  };
  open?: boolean; // 回答の可否
}

export default QuestionaireProps;

export interface QuestionairePostProps {
  problem_id: string;
  answer: string;
}

export interface QuestionairePostResponseProps {
  status: "success" | "error";
  description?: string;
  is_correct?: boolean;
  correct_answer?: string;
}
