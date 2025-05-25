const axios = require('axios');

exports.getSummary = async (todos) => {
  const prompt = `Summarize the following to-dos:\n${todos.join('\n')}`;

  const response = await axios.post('https://api.openai.com/v1/completions', {
    model: 'text-davinci-003',
    prompt,
    max_tokens: 100
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data.choices[0].text.trim();
};
