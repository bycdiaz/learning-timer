const questions = [
  {
    type: "TextArea",
    content: {
      prompt: "In at least 20 characters, please describe your reason for learning to code. Input must begin with capital letter and end with punctuation (., ?, !).",
      value: '',
    },
  },
  {
    type: "NumberInput",
    content: {
      prompt: "How many hours a week can you dedicate to learning? Please enter a number greater than 1.",
    }
  },
  {
    type: "RadioInput",
    content: {
      prompt: "Of the hours you can dedicate to learning, please select one value to indicate your average level of focus for that duration.",
      options: [
        {
          attributes: {
            type: "radio",
            name: "focusLevel",
            value: "High Focus",
          },
          text: "80% - 100%"
        },
        {
          attributes: {
            type: "radio",
            name: "focusLevel",
            value: "Moderate Focus",
          },
          text: "50% - 79%"
        },
        {
          attributes: {
            type: "radio",
            name: "focusLevel",
            value: "Low Focus",
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
            value: "Very Motivated",
          },
          text: "Very Motivated"
        },
        {
          attributes: {
            type: "radio",
            name: "motivationLevel",
            value: "Fairly Motivated",
          },
          text: "Fairly Motivated"
        },
        {
          attributes: {
            type: "radio",
            name: "motivationLevel",
            value: "Mildly Motivated",
          },
          text: "Mildly Motivated"
        },
        {
          attributes: {
            type: "radio",
            name: "motivationLevel",
            value: "Low Motivation",
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
              value: "Fast Pace",
              selectText: "Fast"
            },
            {
              value: "Medium Pace",
              selectText: "Medium"
            },
            {
              value: "Slow Pace",
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
