I’ve been trying to make sense of prompts and prompts “engineering,” as it is. While fascinating, prompts have a bottle neck – the artificial intelligence is only as good as the user providing the prompts. Of course, we bar this capability and limitation toward the LLM’s own capabilities – but that is a separate topic and we can discuss that later.

What is interesting now, if you have Gemini, Claude, ChatGPT PRO even, it doesn’t matter what the technology is if you don’t have the tools and means and know how to actually truly utilize it.

This creates two vital implications: 
1. Code, natural language ability isn’t enough. Intellectual prowess is needed (in relation to the AI’s capabilities). You can’t just ask the LLM to build something that is useful. Instructions are important. Detail is important. If the user wants a working application, webpage, infographic or whatever it is – they can simply use basic prompts, but this then limits them to basic results.
2. 

# FlowAi

chore: initial scaffold   
This repository hosts FlowAi, a front-end for a memory-threaded prompting system with real-time context reminders, navigation pane, and interactive UI prompts.

## Overview
FlowAi captures and displays your ongoing work context as lightweight “memories” and reminders, helping you stay on task.

## Getting Started
```bash
git clone git@github.com:timedilationv2/flowai.git
cd flowai
npm install
npm start
```

## Folder Structure

– `.github/workflows/ci.yml` – CI/CD pipeline
– `docs/` – MkDocs documentation
– `public/` – static HTML/CSS assets
– `src/` – React components and entry points

## Scripts

```json
{
  "start": "react-scripts start",
  "build": "react-scripts build",
  "lint": "eslint src",
  "test": "jest",
  "docs:serve": "mkdocs serve",
  "docs:build": "mkdocs build"
}
```

## Contributing

Please open issues or pull requests on GitHub.
