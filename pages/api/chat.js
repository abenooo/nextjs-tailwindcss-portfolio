import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    const { message } = req.body;
  
    try {
        const completion = await openai.createCompletion({
            model: 'text-davinci-003', 
            prompt: `${message}`,
            max_tokens: 100 // Use max_tokens instead of maxTokens
          });
          
  
      const botMessage = completion.data.choices[0].text;
  
      res.status(200).json({
        message: botMessage
      });
    } catch (error) {
        console.error(error.response.data);
        res.status(500).json({ error: 'An error occurred while processing your request' });
      }
      
  }
  