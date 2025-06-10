async function fetchHello() {
  try {
    const response = await fetch('https://backend-api-1-bzuu.onrender.com/api/hello');
    const data = await response.json();
    console.log('Ответ от /api/hello:', data);
  } catch (error) {
    console.error('Ошибка при fetchHello:', error);
  }
}

async function fetchError() {
  try {
    const response = await fetch('https://backend-api-1-bzuu.onrender.com/api/error');
    const data = await response.json();
    console.log('Ответ от /api/error:', data);
  } catch (error) {
    console.error('Ошибка при fetchError:', error);
  }
}

// Вызываем функции для проверки
fetchHello();
fetchError();
