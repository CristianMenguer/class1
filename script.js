function getEl(id) {
    return document.getElementById(id);
}

function getVal(id) {
    return parseFloat(document.getElementById(id).value);
}

//
const finalResult = getEl('finalResult')
//
const btAdd = getEl('buttonAdd')
const btSub = getEl('buttonSub')
const btMul = getEl('buttonMul')
const btDiv = getEl('buttonDiv')
//
btAdd.onclick = () => {
    const val1 = getVal('input1')
    const val2 = getVal('input2')
    const  result = val1 + val2
    //
    finalResult.innerHTML = `<p>${result}</p>`
}
//
btSub.onclick = () => {
    const val1 = getVal('input1')
    const val2 = getVal('input2')
    const  result = val1 - val2
    //
    finalResult.innerHTML = `<p>${result}</p>`
}
//
btMul.onclick = () => {
    const val1 = getVal('input1')
    const val2 = getVal('input2')
    const  result = val1 * val2
    //
    finalResult.innerHTML = `<p>${result}</p>`
}
//
btDiv.onclick = () => {
    const val1 = getVal('input1')
    const val2 = getVal('input2')
    const  result = val1 / val2
    //
    finalResult.innerHTML = `<p>${result}</p>`
}