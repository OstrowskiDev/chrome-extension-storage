console.log('[test]: Popup script loaded')

window.onload = function () {
  console.log(document.getElementById('saveButton'))
  document.getElementById('saveButton').addEventListener('click', () => {
    console.log('[test]: save button clicked')
    document.getElementById('testCounter').innerText = 'clicked!'
    chrome.storage.local.set({ car: 'volvo', house: 'tiny' }, function () {
      console.log('Data is set.')
    })
  })

  document.getElementById('loadButton').addEventListener('click', () => {
    console.log('[test]: load button clicked')
    chrome.storage.local.get(['car', 'house'], function (result) {
      console.log('Value for car is ' + result.car)
      console.log('Value for house is ' + result.house)
    })
  })

  document.getElementById('clearButton').addEventListener('click', () => {
    console.log('[test]: clear button clicked')
    chrome.storage.local.clear(function () {
      console.log('Data has been cleared.')
    })
  })
}
