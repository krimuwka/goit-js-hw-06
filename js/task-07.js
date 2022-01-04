const txtEl = document.getElementById('text')
const fontEl = document.getElementById('font-size-control')
fontEl.addEventListener('input', changeSize)
function changeSize(size) {
    txtEl.style.fontSize=`${size.target.value}px`;
}