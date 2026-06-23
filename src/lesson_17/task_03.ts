// 3.	Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. Зробити так, щоб не можна було зробити одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.

// 3. Створити клас Нагадувач

class Reminder {
  private static instance: Reminder

  private count = 0
  private timerId: number = 0

  private constructor(
    private message: string,
    private seconds: number,
  ) {}

  static getInstance(message: string, seconds: number): Reminder {
    if (!Reminder.instance) Reminder.instance = new Reminder(message, seconds)

    return Reminder.instance
  }

  start() {
    if (this.timerId) return

    this.timerId = setInterval(() => {
      this.count++

      document.write(`${this.count}. ${this.message}<br>`)
    }, this.seconds * 1000)
  }

  stop() {
    clearInterval(this.timerId)
    this.timerId = 0
  }

  changeMessage(newMessage: string) {
    this.message = newMessage
  }
}

// Створення єдиного нагадувача
const reminder = Reminder.getInstance("Прокинутися", 2)

// Запуск
reminder.start()

// Через 10 секунд змінити повідомлення
setTimeout(() => {
  reminder.changeMessage("Час зробити зарядку")
}, 10000)

// Через 20 секунд зупинити нагадування
setTimeout(() => {
  reminder.stop()
}, 20000)
