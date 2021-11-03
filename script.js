
document.getElementById("form").addEventListener("submit", function(e){
    str = document.getElementById("text").value;
  
    e.preventDefault();
    alert(str.length);
})
;
