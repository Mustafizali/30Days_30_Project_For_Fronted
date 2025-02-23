let input = document.getElementById("input")
let button = document.querySelectorAll('button')

button.forEach(elem => {
    elem.addEventListener('click', (e) => {
        console.log(e.target.innerText);

        if (e.target.innerText === "C") {
            input.innerText = " ";
        }
        else if(e.target.innerText === "~"){
                input.innerText = input.innerText.slice(0, -1);
        }               
        else if(e.target.innerText === "="){
                input.innerText = eval(input.innerText);
        }               
        else {
            input.innerText += e.target.innerText;
        }
        
            
          input.scrollLeft = input.scrollWidth;
    })
          

})