let stock= document.getElementById("stock")
let pedir=document.getElementById("pedir")
let out=document.getElementById("out")
let id=document.getElementById("id")
let pan=document.getElementById("pan")
let carne=document.getElementById("carne")
let cheddar=document.getElementById("cheddar")
let cebolla=document.getElementById("cebolla")
let crear=document.getElementById("inner")
let iniciado=0;
//Array
let almacen=[]
let almacenLS=JSON.parse(localStorage.getItem("Almacen"))
if(almacenLS){
    almacen=almacenLS
}
else{
    iniciado=1;
}

//LogOut
out.addEventListener("click",salir)
function salir(){
    window.location="pages/ident.html"
}
crearHtml(almacen) 
//AgregarStock
stock.addEventListener("click",verStock)
function verStock(){
    class box{
        constructor(id,pan,carne,cheddar,cebolla){
            this.id=id;
            this.pan=pan;
            this.carne=carne;
            this.cheddar=cheddar;
            this.cebolla=cebolla;
        }
    }
    //Traigo Inputs  
    let idB=id.value 
    let panB=pan.value
    let carneB=carne.value
    let cheddarB=cheddar.value
    let cebollaB=cebolla.value;
    //Traigo LocalStorage y guardo en boxesJson
    let boxes=localStorage.getItem("Almacen")
    let boxesJson=JSON.parse(boxes)
    let flag=0;
    console.log(iniciado)
    if(iniciado==1){boxesJson=[]}
    for(let i=0;i<boxesJson.length;i++){
        if(boxesJson[i].id==idB){
            flag=1;
        }
    }
    if(flag==1){
      Toastify({
        text: "BOX ya cargada",
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center", 
        stopOnFocus: true,
        style: {
          background: "red",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    }
    else{
 //Guardar en array
    const nuevaBox=new box(idB,panB,carneB,cheddarB,cebollaB)
    almacen.push(nuevaBox)
    const almacenJSON=JSON.stringify(almacen)
    localStorage.setItem("Almacen",almacenJSON)
    console.log(almacenJSON)
    }
    
    guardarLS(almacen)
    crearHtml(almacen) 
}

//Imprimir Arrays


  //Agregando funcion lista
  function guardarLS(arr) {
    localStorage.setItem("Almacen", JSON.stringify(arr));
  }

  function crearHtml(arr) {
    crear.innerHTML = "";
    let html = "";
    for (const item of arr) {
          html =`<tr>
            <th scope="row">${item.id}</th>
            <td>${item.pan}</td>
            <td>${item.carne}</td>
            <td>${item.cheddar}</td>
            <td>${item.cebolla}</td>
            <td><button class="btn btn-danger"id="${item.id}"> Borrar </button></td>
            </tr>
          `

    crear.innerHTML += html;
    }
    const arrayBotones = document.querySelectorAll('td .btn');
    arrayBotones.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        almacen= almacen.filter(el=>el.id != btn.id);
        guardarLS(almacen);
        crearHtml(almacen)
      })
    })
  }

  //Fetch
  fetch('./data/data.json')
  .then((response)=>response.json())
  .then((data=>{
  console.log(data);
  }))
    
