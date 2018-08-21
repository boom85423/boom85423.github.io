function round_dicimal(x, decimal){
        var size = Math.pow(10, decimal);
        return Math.round(x * size) / size;
}
var sentiment = round_dicimal(Math.random(), 1);
var magnitude = round_dicimal(Math.random(), 1);
window.onload = function(){
        var content = document.getElementById("content");
        var btn = document.querySelector('#btn');
        var result = document.getElementById("result");
        btn.onclick = function(){
                if (content.value.trim() == ""){
                        alert("There are empty.")
                }
                result.append('{"sentiment":'+sentiment+', '+'"magnitude":'+magnitude+'}'+" ");
                alert("Refresh the page for next analyse.")
                content.value = "";
        };
}
