let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click' , (e)=>{
        buttonText = e.target.innerText;
        console.log('the number is ' , buttonText);
    
        if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;

        }
        else if(buttonText == 'F'){
            screenValue = screenValue * 1.8 + 32;
            screen.value = screenValue;

        }
        else if(buttonText == 'K'){
            screenValue = screenValue + 273.15;
            screen.value = screenValue;
        }
        else {

            screenValue += buttonText;
            screen.value = screenValue;

        }
    })
}