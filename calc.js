function random(num){
let result = document.getElementById('input')
result.value += num
}
function result(){
    let result = document.getElementById('input')
    result.value= eval(result.value)
}
function clearresult(){
    let result = document.getElementById('input')
    result.value= ''
}
function dlt(){
    let del = document.getElementById('input')
     let rmv = del.value
     rmv = rmv.slice(0,-1)
     del.value = rmv
}