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
        else if(buttonText == '='){
            screenValue = screenValue * screenValue;
            screen.value = screenValue;

        }
        else {

            screenValue += buttonText;
            screen.value = screenValue;

        }
    })
}