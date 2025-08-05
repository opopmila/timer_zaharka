// Таймер для отслеживания времени
class Timer {
    constructor() {
        this.startDate = new Date('2025-07-09T00:00:00');
        this.endDate = new Date('2026-07-09T00:00:00');
        
        // Получаем элементы для оставшегося времени
        this.remainedDays = document.getElementById('remained-days');
        this.remainedHours = document.getElementById('remained-hours');
        this.remainedMinutes = document.getElementById('remained-minutes');
        this.remainedSeconds = document.getElementById('remained-seconds');
        
        // Получаем элементы для прошедшего времени
        this.passedDays = document.getElementById('passed-days');
        this.passedHours = document.getElementById('passed-hours');
        this.passedMinutes = document.getElementById('passed-minutes');
        this.passedSeconds = document.getElementById('passed-seconds');
        
        this.init();
    }

    init() {
        this.updateTimers();
        // Обновляем таймеры каждую секунду
        setInterval(() => {
            this.updateTimers();
        }, 1000);
    }

    formatTime(ms) {
        const days = Math.floor(ms / (1000 * 60 * 60 * 24));
        const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((ms % (1000 * 60)) / 1000);

        return {
            days: days.toString().padStart(2, '0'),
            hours: hours.toString().padStart(2, '0'),
            minutes: minutes.toString().padStart(2, '0'),
            seconds: seconds.toString().padStart(2, '0')
        };
    }

    updateTimers() {
        const now = new Date();
        
        // Вычисляем оставшееся время
        const remainingTime = this.endDate - now;
        const remaining = this.formatTime(Math.max(0, remainingTime));
        
        // Вычисляем прошедшее время
        const passedTime = now - this.startDate;
        const passed = this.formatTime(Math.max(0, passedTime));

        // Обновляем значения для оставшегося времени
        this.remainedDays.textContent = remaining.days;
        this.remainedHours.textContent = remaining.hours;
        this.remainedMinutes.textContent = remaining.minutes;
        this.remainedSeconds.textContent = remaining.seconds;

        // Обновляем значения для прошедшего времени
        this.passedDays.textContent = passed.days;
        this.passedHours.textContent = passed.hours;
        this.passedMinutes.textContent = passed.minutes;
        this.passedSeconds.textContent = passed.seconds;
    }
}

// Инициализация таймера после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    new Timer();
}); 