
function fChange(){
    let grid= document.getElementById("mainContainer");
    for (let i=0; i<(16*16); i++){
      let item=document.createElement("DIV");
      item.className="item";
      item.id=i;
      grid.appendChild(item);
    }

    changeColor()
    
  }

function changeColor(){
    let items = Array.from(document.querySelectorAll(".item"));  
    items.forEach(function(elem) {
        elem.addEventListener("mouseover", function() {
            elem.style.backgroundColor = "blue"; console.log("asd")   })  })
}


function gridChanger(input){
    let value="1fr";
    for (let i=1; i<input; i++){
        value=value+" 1fr"
    }
    return value;
}

function sizeChange(){
    let size=Number(prompt("Enter the size - eg 50"));
    let grid= document.getElementById("mainContainer");
    grid.style.gridTemplateColumns=gridChanger(size);
    grid.style.gridTemplateRows=gridChanger(size);
    grid.innerHTML="";

    for (let i=0; i<(size*size); i++){
        let item=document.createElement("DIV");
        item.className="item";
        item.id=i;
        grid.appendChild(item);
      }
  
      changeColor()

}


const resetbtn = document.getElementById('reset')
    resetbtn.addEventListener("click", function() {
    let items = Array.from(document.querySelectorAll(".item"));
    items.forEach(  item=>  item.style.backgroundColor="orange"    )
  })

fChange();