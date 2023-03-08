const text = document.querySelector(".multitext");

const textLoader = () =>{
    setTimeout(() => {
        text.textContent = "Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Developer";
    }, 4000);
}

textLoader();