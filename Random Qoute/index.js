const btn = document.getElementById('btn')

const output = document.querySelector('.output')

 let api = 'https://api.quotable.io/random';
     async function getquotes(url) {
        const res = await fetch(url)
            var data = await res.json()
           // console.log(data);
            output.innerHTML = data.content;
        }
        
        btn.addEventListener('click' , () =>{
            
            getquotes(api)
    
})