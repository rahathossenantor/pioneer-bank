function getElement(id){
  let element = document.getElementById(id)
  return element
}

let userEmail = 'md.rahathossenantor@gmail.com'
let userPassword = '12345'

let error = getElement('errorMsg')
let wrong = getElement('wrongMsg')

getElement('submit-btn').addEventListener('click', function(){
  let email = getElement('email').value
  let password = getElement('password').value
  
  // Checking login form is empty or not.
  if (email != '' && password != '') {
    // Checking email or password is correct or not.
    if (email == userEmail && password == userPassword){
      getElement('login-area').style.display = 'none'
      getElement('transaction-area').style.display = 'block'
      error.style.display = 'none'
      wrong.style.display = 'none'
    }else{
      wrong.style.display = 'block'
      error.style.display = 'none'
    }
  }else{
    error.style.display = 'block'
    getElement('email').focus()
  }
})

// Updating balances.
// Get input field values.
function getInputNum(id){
  let inputAmount = getElement(id).value
  inputAmount = parseFloat(inputAmount)
  return inputAmount
}
// Get current status values.
function getCurrentStatus(id){
  let currentStatus = getElement(id).innerText
    currentStatus = parseFloat(currentStatus)
    return currentStatus
}
// Update balance status.
function updateBalance(id, amount){
    let currentStatus = getCurrentStatus(id)
    let total = amount + currentStatus
    getElement(id).innerText = total
  }
// Clear input field values.
function clearInputTab(id){
  getElement(id).value = ''
}

// Add diposit section.
let dipositButton = getElement('dipositBtn')
// Adding event handler on deposit button.
dipositButton.addEventListener('click', function(){
  // Checking input field is empty or not.
  if (dipositAmount.value != '') {
    let dipositAmount = getInputNum('dipositAmount')
    
    updateBalance('current-diposit-status', dipositAmount)
    updateBalance('current-balance-status', dipositAmount)
    // Cleaning input field.
    clearInputTab('dipositAmount')
  }else{
    dipositAmount.focus()
  }
})

// Get withdrawal section.
let withdrawButton = getElement('withdrawBtn')
// Adding event handler on withdraw button
withdrawButton.addEventListener('click', function(){
  // Checking input field is empty or not.
  if (withdrawAmount.value != '') {
    let withdrawAmount = getInputNum('withdrawAmount')
    
    updateBalance('current-withdraw-status', withdrawAmount)
  
    let totalBalance = getElement('current-balance-status').innerText
    getElement('current-balance-status').innerText = totalBalance - withdrawAmount
    // Cleaning input field.
    clearInputTab('withdrawAmount')
  }else{
    withdrawAmount.focus()
  }
})
