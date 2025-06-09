const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Пример успешного запроса
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Привет с бэкенда!' });
});

// Эмуляция ошибки
app.get('/api/error', (req, res, next) => {
  const error = new Error('Что-то пошло не так!');
  error.status = 500;
  next(error); // передаём ошибку в централизованный обработчик
});

// Централизованный обработчик ошибок
app.use((err, req, res, next) => {
  console.error(err.stack); // для логов сервера
  res.status(err.status || 500).json({
    success: false,
    error: {
      message: err.message || 'Неизвестная ошибка сервера',
    },
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
