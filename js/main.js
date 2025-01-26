




document.getElementById("toggle").addEventListener("click", function(){
    
    if(localStorage.currentTheme === "light"){
        localStorage.currentTheme = "dark";
        this.innerHTML="Light Mode"
    }
    else if(localStorage.currentTheme === "dark"){
        localStorage.currentTheme = "light";
        this.innerHTML="Dark Mode"
        
    }
    
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC

  setMode();
})

function setMode(){
    document.documentElement.classList.toggle(
        "dark",
        localStorage.currentTheme === "dark" 
      );
      console.log(localStorage.currentTheme);
}