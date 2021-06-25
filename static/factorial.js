let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
submit = document.getElementById('submit');
let screenValue = '';
  
for(item of buttons){
    item.addEventListener('click' , (e)=>{
        buttonText = e.target.innerText;
        console.log('the number is ' , buttonText);

        
        if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;

        }
        
            

        
        else {

            screenValue += buttonText;
            screen.value = screenValue;

        }
    })
    submit.addEventListener('click' , (e)=>{
        var mult = 1;
        for(var i = 1 ; i <=screenValue ; i++ ){
            mult = mult*i;
        }
        screen.value = mult;
    })
}
