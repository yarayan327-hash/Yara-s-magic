# Yara's Magic AI Workbench

A comprehensive AI-powered personal productivity suite with text analysis, generation, and educational features.

## 🚀 Features

### Core Functionality
- **AI Chat Interface**: Interactive conversation with multiple AI models
- **Text Analysis**: Advanced natural language processing capabilities
- **Document Processing**: PDF analysis and content extraction
- **Educational Tools**: Language learning and vocabulary enhancement
- **Productivity Suite**: Task management and note-taking features

### New: Nano Banana AI Integration 🍌
The latest version includes integration with **Nano Banana** (Google Gemini 2.5 Flash Image), a multimodal AI model from Google via OpenRouter!

#### Nano Banana Features:
- **Real-time AI Conversations**: Chat with Google's latest multimodal AI
- **Text + Image Understanding**: Supports both text and image inputs
- **Image Generation**: Create images from text descriptions
- **Multi-turn Dialogue**: Maintains conversation context for natural interactions
- **Fast Response Times**: Optimized for quick, efficient responses
- **No Backend Required**: Pure frontend implementation using OpenRouter API

## 🛠️ Setup Instructions

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- OpenRouter API key (for AI features)

### Quick Start
1. Clone this repository
2. Open `ai-workbench.html` in your web browser
3. For AI chat functionality, configure your OpenRouter API key (see below)

### Nano Banana Setup
1. Get your free OpenRouter API key from [openrouter.ai/keys](https://openrouter.ai/keys)
2. Open `ai-workbench.html` and find the `generateAIResponse` function
3. Replace the placeholder API key with your actual key
4. Refresh the page and start chatting!

Detailed setup instructions are available in [NANOBANANA_SETUP.md](NANOBANANA_SETUP.md)

## 📁 Project Structure

```
Yara-s-magic/
├── ai-workbench.html          # Main application file
├── package.json               # Node.js dependencies
├── NANOBANANA_SETUP.md        # Nano Banana setup guide
├── materialspng/              # UI assets and images
└── README.md                  # This file
```

## 🎯 Key Components

### AI Chat System
- **Model Selection**: Choose between GPT-4, GPT-3.5, Claude, and Nano Banana
- **Conversation History**: Persistent chat history with local storage
- **Voice Input**: Speech-to-text functionality
- **Export Features**: Save and share conversations

### Technical Implementation
- **Frontend**: Pure HTML, CSS, and JavaScript
- **Styling**: Tailwind CSS for responsive design
- **AI Integration**: OpenRouter API for multiple model support
- **Storage**: Local storage for user preferences and chat history

## 🔧 Configuration

### API Keys
The application supports multiple AI providers through OpenRouter:
- OpenAI models (GPT-4, GPT-3.5)
- Anthropic models (Claude)
- Open source models (Nano Banana)

### Customization
- Modify `ai-workbench.html` for UI changes
- Update styling in the embedded CSS section
- Configure API endpoints in the JavaScript functions

## 🚀 Development

### Local Development
```bash
# Start a local server
python3 -m http.server 8080

# Open in browser
open http://localhost:8080/ai-workbench.html
```

### Adding New Features
1. Follow the existing code structure in `ai-workbench.html`
2. Use the established patterns for UI components
3. Maintain compatibility with existing functionality

## 🔒 Security Notes

- API keys are stored in frontend code (suitable for personal/educational use)
- For production deployments, implement backend proxy for API key protection
- All data is stored locally in browser storage
- No user data is transmitted to external servers except AI API calls

## 📚 Documentation

- [Nano Banana Setup Guide](NANOBANANA_SETUP.md) - Detailed setup for AI features
- [OpenRouter Documentation](https://openrouter.ai/docs) - API reference
- Inline comments in `ai-workbench.html` - Code documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

MIT License - See LICENSE file for details

## 🙏 Acknowledgments

- OpenRouter for providing access to multiple AI models
- Tailwind CSS for the beautiful UI framework
- The open-source community for various libraries and tools

---

**Enjoy your AI-powered productivity suite!** 🎉

For questions or support, please check the documentation or create an issue in the repository."}