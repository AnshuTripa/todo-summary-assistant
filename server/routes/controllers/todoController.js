const db = require('../db');
const { getSummary } = require('../services/openaiService');
const { postToSlack } = require('../services/slackService');

exports.getTodos = async (req, res) => {
  const { rows } = await db.query('SELECT * FROM todos ORDER BY id DESC');
  res.json(rows);
};

exports.addTodo = async (req, res) => {
  const { text } = req.body;
  await db.query('INSERT INTO todos (text) VALUES ($1)', [text]);
  res.sendStatus(201);
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM todos WHERE id = $1', [id]);
  res.sendStatus(200);
};

exports.summarizeTodos = async (req, res) => {
  const { rows } = await db.query('SELECT text FROM todos');
  const summary = await getSummary(rows.map(row => row.text));
  const slackRes = await postToSlack(summary);
  res.json({ success: slackRes });
};
