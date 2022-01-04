const valInEl = document.getElementById('validation-input')
valInEl.addEventListener('blur', checkVal)
function checkVal(input) {
    if (input.target.value.length !== parseInt(valInEl.getAttribute('data-length')))
    { valInEl.classList = "invalid" }
    else { valInEl.classList = "valid" }
}