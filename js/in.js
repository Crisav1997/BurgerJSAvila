const contraseña= document.getElementById("contra");
const nombre= document.getElementById("nombre");
const btn= document.getElementById("btnEnviar");
const newU=document.getElementById("newUsuario")
const form = document.querySelector('form');
const users =[]
form.addEventListener('submit', e => e.preventDefault());

//RecorriendoLocal

btn.addEventListener("click",runStorage)
function runStorage(){
    let buscar=nombre.value;
    let contrasena=contraseña.value
    let users1=localStorage.getItem("Usuario")
    let usersJson=JSON.parse(users1)
    let flag=0;
    
    usersJson.forEach(element => {

        if((element.usuario==buscar)&&(element.contraseña==contrasena))  {
        
            flag=1;
            window.location="../index.html";
            
        }  
        else{
           
        }
    
     });
if (flag==1){console.log("ok")}
else{console.log("no encontrado")}

}
