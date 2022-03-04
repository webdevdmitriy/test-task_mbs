let buttonsShowResult = document.querySelectorAll('button[data-task]')
let results = document.querySelectorAll('div[data-sol]')

buttonsShowResult.forEach(item => {
  item.addEventListener('click', e => {
    let data = e.target.dataset.task
    results.forEach(elem => {
      if (elem.dataset.sol === data) {
        if (elem.style.display === 'block') elem.style.display = 'none'
        else elem.style.display = 'block'
        return
      }
    })
  })
})
