# Nano Banana AI Integration Setup

## Overview
Your AI Workbench now includes integration with the Nano Banana model from OpenRouter, providing real AI conversation capabilities in your chat interface.

## Features
- **Real AI Conversations**: Chat with the Nano Banana 3B model from OpenRouter
- **Multi-turn Dialogue**: Maintains conversation history for contextual responses
- **Model Selection**: Choose between different AI models (GPT-4, GPT-3.5, Claude, Nano Banana)
- **Error Handling**: Graceful error messages when API calls fail
- **Local Storage**: Chat history is saved locally and persists between sessions

## Setup Instructions

### 1. Get Your OpenRouter API Key
1. Visit [OpenRouter](https://openrouter.ai/)
2. Sign up for an account
3. Go to your [API Keys](https://openrouter.ai/keys) page
4. Generate a new API key (it should start with `sk-or-v1-`)

### 2. Configure the API Key
1. Open `ai-workbench.html` in a text editor
2. Find the `generateAIResponse` function (around line 1826)
3. Replace the placeholder API key:
   ```javascript
   const API_KEY = "sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; // Replace with your actual OpenRouter API key
   ```

### 3. Test the Integration
1. Open `ai-workbench.html` in your web browser
2. Click on the chat interface
3. Type a message and press Enter or click the send button
4. The AI should respond using the Nano Banana model

## Security Notes
⚠️ **Important**: This implementation stores the API key in the frontend code. This is suitable for:
- Personal use
- Educational projects
- Prototypes and testing

**For production applications**, consider:
- Implementing a backend proxy to protect your API key
- Adding rate limiting and user authentication
- Using environment variables for sensitive configuration

## Model Information
- **Model**: `google/gemini-2.5-flash-image-preview` (Nano Banana)
- **Provider**: Google
- **Type**: Multimodal AI (text + image)
- **Context Length**: 32,768 tokens
- **Capabilities**:
  - Text-to-image generation
  - Image-to-image editing
  - Multi-turn conversations with images
  - Character consistency across generations
  - Multiple aspect ratios (1:1, 3:2, 2:3, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9)
- **Use Case**: General conversation, Q&A, creative writing, image generation and editing
- **Max Output Images**: Up to 10 per prompt
- **Output Formats**: PNG, JPEG, WebP

## API Configuration
The integration uses the following settings:
- **Temperature**: 0.7 (balanced creativity)
- **Max Tokens**: 1000 (reasonable response length)
- **Endpoint**: `https://openrouter.ai/api/v1/chat/completions`

## Image Generation Features

### How to Generate Images
1. Simply ask the AI to generate an image in natural language
2. Examples of image prompts:
   - "生成一只可爱的机器猫，赛博朋克风格"
   - "Create a beautiful sunset over mountains"
   - "设计一个未来城市的概念图"
   - "Generate a cyberpunk robot cat with neon lights"

### Image Display
- Generated images appear directly in the chat interface
- Images are displayed at a maximum height of 300px
- Click on any image to view it in full size
- Multiple images can be generated in a single response

### Supported Prompt Types
- **Text-to-Image**: Generate images from text descriptions
- **Style Specifications**: Include art styles (impressionist, cyberpunk, minimalist, etc.)
- **Concept Art**: Design concepts for characters, vehicles, buildings
- **Character Design**: Create original characters with specific traits

### Tips for Better Image Generation
- Use specific descriptive words
- Include style preferences (art style, lighting, colors)
- Mention composition and framing details
- Request multiple variations if needed

## Troubleshooting

### Common Issues
1. **"Sorry, I encountered an error"**: Check your API key and internet connection
2. **No response**: Verify the API key is correctly formatted
3. **Slow responses**: This is normal for API calls - the typing indicator shows processing

### Console Debugging
Open browser developer tools (F12) to see detailed error messages in the console.

## Future Enhancements
Potential improvements for this integration:
- Streaming responses for real-time chat feel
- Multiple model support with different endpoints
- Conversation context management
- Rate limiting and quota management
- Backend proxy for API key protection

## Resources
- [OpenRouter Documentation](https://openrouter.ai/docs)
- [Nano Banana Model Info](https://openrouter.ai/openrouter/nanobanana-3b-gguf)
- [OpenRouter API Reference](https://openrouter.ai/docs/api-reference)