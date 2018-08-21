var dice = document.querySelector('#dice');
dice.addEventListener('click', function(){
        alert(Math.floor(Math.random()*(6-1+1))+1);
});