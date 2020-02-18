const questions = [
  {
    type: "TextArea",
    content: {
      prompt: "In 140 characters or less, please describe your reason for learning to code:",
      value: '',
    },
  },
  {
    type: "NumberInput",
    content: {
      prompt: "How many hours a week can you dedicate to learning?",
    }
  },
  {
    type: "RadioInput",
    content: {
      prompt: "Of the hours you can dedicate to learning, please indicate your average level of focus for that duration.",
      options: [
        {
          attributes: {
            type: "radio",
            name: "focusLevel",
            value: "high",
          },
          text: "80% - 100%"
        },
        {
          attributes: {
            type: "radio",
            name: "focusLevel",
            value: "moderate",
          },
          text: "50% - 79%"
        },
        {
          attributes: {
            type: "radio",
            name: "focusLevel",
            value: "low",
          },
          text: "0% - 49%"
        },
      ],
    },
    
  },
  {
    type: "RadioInput",
    content: {
      prompt: "Please rate your level of motivation.",
      options: [
        {
          attributes: {
            type: "radio",
            name: "motivationLevel",
            value: "very",
          },
          text: "Very Motivated"
        },
        {
          attributes: {
            type: "radio",
            name: "motivationLevel",
            value: "fairly",
          },
          text: "Fairly Motivated"
        },
        {
          attributes: {
            type: "radio",
            name: "motivationLevel",
            value: "mildly",
          },
          text: "Mildly Motivated"
        },
        {
          attributes: {
            type: "radio",
            name: "motivationLevel",
            value: "low",
          },
          text: "Not Motivated"
        },
      ],
    },
  },
  {
    type: "DropDowns",
    content: {
      prompt: "Please indicate how quickly you learn concepts, or work through tasks, of average difficulty.",
      dropdowns: [
        {
          dropSelections: [
            {
              selected: true,
              disabled: true,
              selectText: "Please select one"
            },
            {
              value: "fast",
              selectText: "Fast"
            },
            {
              value: "medium",
              selectText: "Medium"
            },
            {
              value: "slow",
              selectText: "Slow"
            }
          ],
          text: "Select your pace: ",
          labelFor: "pace",
          SelectId: "pace",
        },
      ],
    },
  },
];

export default questions;
