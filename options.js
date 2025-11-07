let m_error = document.getElementById('m_error');
let i_interval = document.getElementById('i_interval');
let m_interval = document.getElementById('m_interval');
let i_notify = document.getElementById('i_notify');
let m_notify = document.getElementById('m_notify');
let i_sound = document.getElementById('i_sound');
let m_sound = document.getElementById('m_sound');

browser.storage.sync.get(['interval', 'notify', 'sound'])
  .then(res => {
    i_interval.value = res.interval;
    i_notify.checked = res.notify;
    i_sound.value = res.sound;
  });
i_interval.addEventListener('input', function() {
  browser.storage.sync.set({ interval: this.value })
    .then(() => m_interval.innerText = 'Saved ' + this.value,
      () => error => m_error.innerText = error);
});
i_notify.addEventListener('input', function() {
  browser.storage.sync.set({ notify: this.checked })
    .then(() => m_notify.innerText = (this.checked ? 'Will' : "Won't"
    ) + " notify about new emails",
      () => error => m_error.innerText = error);
});
i_sound.addEventListener('input', function() {
  browser.storage.sync.set({ sound: this.value })
    .then(() => m_sound.innerText = 'Saved ' + this.value,
      () => error => m_error.innerText = error);
});
