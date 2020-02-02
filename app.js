window.addEventListener('load', e => {
  if ('serviceWorker' in navigator) {
    try {
      navigator.serviceWorker.register('serviceWorker.js')
    } catch {
      console.log('Sw FAILED')
    }
  }
})
