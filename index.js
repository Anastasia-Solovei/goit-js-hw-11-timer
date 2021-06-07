class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.interval = null;
    this.selector = selector;
    this.targetDate = targetDate;
    this.setDate();
    this.updateDate();
  }

  getRefs() {
    return {
      days: document.querySelector(`${this.selector} [data-value="days"]`),
      hours: document.querySelector(`${this.selector} [data-value="hours"]`),
      mins: document.querySelector(`${this.selector} [data-value="mins"]`),
      sec: document.querySelector(`${this.selector} [data-value="secs"]`),
    };
  }

  setDate() {
    const { days, hours, mins, sec } = this.getRefs();
    const currentDate = Date.now();
    const time = this.targetDate - currentDate;

    function pad(value) {
      return String(value).padStart(2, "0");
    }

    days.textContent = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    hours.textContent = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    mins.textContent = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    sec.textContent = pad(Math.floor((time % (1000 * 60)) / 1000));
  }

  updateDate() {
    this.interval = setInterval(() => {
      this.setDate();
    }, 1000);
  }
}

const timer1 = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});
