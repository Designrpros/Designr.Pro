import axios from 'axios';

class GPTAPI {
  constructor() {
    this.openAiApiKey = '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';
    this.baseURL = 'https://api.openai.com/v1/chat/completions';
  }

  async generateResponse(model, messages, maxTokens, temperature, stop) {
    const requestData = {
      model: model,
      messages: messages,
      max_tokens: maxTokens,
      temperature: temperature,
      stop: stop
    };

    try {
      const response = await axios.post(this.baseURL, requestData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.openAiApiKey}`
        }
      });

      if (response.data && response.data.choices && response.data.choices.length > 0) {
        return response.data.choices[0].message.content;
      } else {
        console.error('No response from GPT-3. Response:', response.data);
        return '';
      }
    } catch (error) {
      console.error('Error calling GPT-3 API:', error);
      return '';
    }
  }
}

export default GPTAPI;
