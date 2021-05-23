function add(val){
    document.getElementById('input').value+=val;
}
function clr(){
    document.getElementById('input').value='';
}
function solve(){
    var y = eval(document.getElementById('input').value);
    document.getElementById('input').value = y;
}

