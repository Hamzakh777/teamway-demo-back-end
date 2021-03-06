export interface Question {
  id: number;
  title: string;
  answers: Answer[];
}

export interface Answer {
  id: number;
  title: string;
  extrovertValue: number;
  questionId: number;
}
