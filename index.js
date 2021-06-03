const refs = {
  timer01: document.querySelector("#timer-1"),
  fieldDays: document.querySelector('#timer-1 .field span[data-value="days"]'),
  fieldHours: document.querySelector(
    '#timer-1 .field span[data-value="hours"]'
  ),
  fieldMins: document.querySelector('#timer-1 .field span[data-value="mins"]'),
  fieldSecs: document.querySelector('#timer-1 .field span[data-value="secs"]'),
};

class CountdownTimer {
  constructor(selector, targetDate) {
    this.intervalId = null;
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
  }

  start() {
    this.intervalId = setInterval(() => {
      const currentDate = Date.now();
      const time = this.targetDate - currentDate;

      function pad(value) {
        return String(value).padStart(2, "0");
      }

      refs.fieldDays.textContent = pad(
        Math.floor(time / (1000 * 60 * 60 * 24))
      );
      refs.fieldHours.textContent = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      refs.fieldMins.textContent = pad(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
      );
      refs.fieldSecs.textContent = pad(Math.floor((time % (1000 * 60)) / 1000));
    }, 1000);
  }
}

const timer01 = new CountdownTimer("#timer-1", new Date("Jul 17, 2021"));
