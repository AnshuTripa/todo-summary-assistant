# Todo Summary Assistant

A full-stack web app to manage to-do tasks, generate summaries using OpenAI, and send them to Slack.

## Tech Stack
- React (Frontend)
- Node.js + Express (Backend)
- PostgreSQL (Database)
- OpenAI API (LLM Summary)
- Slack Webhook (Notification)

## Features
- Add and delete to-dos
- View current tasks
- Generate and send summaries to Slack

## Setup

### 1. Clone & Install
```bash
git clone https://github.com/AnshuTripa/todo-summary-assistant.git
cd todo-summary-assistant

2. Backend (Node.js)
cd server
npm install
cp .env.example .env   # Add API keys and DB URL
npm start

3. Frontend (React)
cd ../client
npm install
npm start

.env Example
ini
Copy
Edit

OPENAI_API_KEY=your_openai_key
SLACK_WEBHOOK_URL=your_slack_webhook
DATABASE_URL=your_postgres_url
PORT=3001
