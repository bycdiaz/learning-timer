const questions = [
  {
    type: "TextArea",
    content: {
      prompt: "In 140 characters or less, please describe your reason for learning to code:",
    },
  },
  {
    type: 'NumberInput',
    content: {
      prompt: "How many hours a week can you dedicate to learning?",
    }
  },
  {
    question: 'question3',
    description: "Of the hours you can dedicate to learning, please indicate your level of focus for that duration.",
  },
  {
    question: 'question4',
    description: "Please rate your level of motivation.",
  },
  {
    question: 'question5',
    description: "Please indicate how quickly you learn or work through tasks of varying difficulty",
  },
];

export default questions;
