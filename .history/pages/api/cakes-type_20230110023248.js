import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration);



export default async function handler(req, res) {
    
    const response = await openai.createCompletion({
        
      model: "text-davinci-003",
      prompt:  generatePrompt(req.body.message),
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
  
    res.status(200).json({ result: response.data.choices[0].text })
    console.log(response.data)
}
function generatePrompt({message}) {
    return`lists of cakes and their recipes`
}