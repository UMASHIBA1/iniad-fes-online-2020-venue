import axios from "axios";
import { questionnairePost } from "../constants/urls";
import { QuestionairePostProps, QuestionairePostResponseProps } from "../typings/QuestionaireProps";
const sendQuestionnaire = (props: QuestionairePostProps) => {
  return axios.post<QuestionairePostResponseProps>(questionnairePost(props.problem_id), {
    answer: props.answer,
  });
}

export default sendQuestionnaire;
