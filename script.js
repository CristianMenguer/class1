function getEl(id) {
    return document.getElementById(id);
}

function getVal(obj) {
    return parseFloat(obj.value);
}

function getValues() {
    val1 = getVal(input1)
    val2 = getVal(input2)
}
//
const finalResult = getEl('finalResult')
//
const btAdd = getEl('buttonAdd')
const btSub = getEl('buttonSub')
const btMul = getEl('buttonMul')
const btDiv = getEl('buttonDiv')
//
const input1 = getEl('input1')
const input2 = getEl('input2')
//
var val1, val2 = 0
//
btAdd.onclick = () => {    
    getValues()
    const result = val1 + val2
    //
    finalResult.innerHTML = `<p>${result}</p>`
}
//
btSub.onclick = () => {
    getValues()
    const result = val1 - val2
    //
    finalResult.innerHTML = `<p>${result}</p>`
}
//
btMul.onclick = () => {
    getValues()
    const result = val1 * val2
    //
    finalResult.innerHTML = `<p>${result}</p>`
}
//
btDiv.onclick = () => {
    getValues()
    const result = val1 / val2 ? val1 / val2 : 'Invalid Operation'
    //
    finalResult.innerHTML = `<p>${result}</p>`
}

document.body.onload = () => {
    finalResult.innerHTML = '<p>0</p>'
}