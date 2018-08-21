var coin = document.querySelector('#coin');
coin.addEventListener('click', function(){
        res = Math.floor(Math.random()*(2-1+1))+1;
        if (res == 1){
                alert("Head");
        }else{
                alert("Tail");
        }
});