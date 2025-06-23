
let display = document.getElementById('display');


let buttons = Array.from(document.getElementsByClassName('button'));


buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                
                display.innerText = '';
                break;
                
            case '=':
                
                try{
                    
                    display.innerText = eval(display.innerText);
                } catch {
                    
                    display.innerText = "Error"
                }
                break;
                
            case '←':
                
                if (display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
                
            default:
                
                display.innerText += e.target.innerText;
        }
    });
});


document.addEventListener('keydown', function(event) {
    const key = event.key;

    if ('0123456789+-*/.()'.includes(key)) {
        display.innerText += key;
    }
    
    
    else if (key === 'Enter') {
        try {
            display.innerText = eval(display.innerText);
        } catch {
            display.innerText = "Error";
        }
    }
    
   
    else if (key === 'Escape') {
        display.innerText = '';
    }
    
    else if (key === 'Backspace') {
        if (display.innerText) {
            display.innerText = display.innerText.slice(0, -1);
        }
    }
});