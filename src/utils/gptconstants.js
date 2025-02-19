import OpenAI from 'openai';


export const gptapi = process.env.REACT_APP_GPT_API_KEY;
console.log(gptapi);

const openaimy = new OpenAI({
  apiKey: gptapi , dangerouslyAllowBrowser: true  // This is the default and can be omitted
});

export default openaimy;
