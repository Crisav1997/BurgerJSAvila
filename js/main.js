//Guardar y leer en Local y session
    //localStorage.setItem("hola","cristian");
    //localStorage.setItem("hola1","cristian1");
    //localStorage.setItem("hola2","cristian2");
    //localStorage.setItem("hola3","cristian3");
    // let nombre=localStorage.getItem("hola");
    // sessionStorage.setItem("chau","cristian");
    // let chau=localStorage.getItem("chau")

//RECORRER STORAGE

    // for(let i=0;i<localStorage.length;i++){
    //     let clave=localStorage.key(i);
    //     console.log("clave: "+ clave)
    //     console.log("valor: "+ localStorage.getItem(clave))
    // }

// REMOVER ITEM
    //localStorage.removeItem("hola");

//JSON PARA AGUARDAR CUALQUIER TIPO DE ARCHIVO
 //stringify
    //const producto={id:1,mercaderia:"arroz"} //en js
    //const productoJSON=JSON.stringify(producto);
    //localStorage.setItem("producto",productoJSON);
 //parse
    //const producto1=JSON.parse(productoJSON)
    //console.log(producto1)



const contraseña= document.getElementById("contra");
const nombre= document.getElementById("nombre");
const btn= document.getElementById("btnEnviar");
const newU=document.getElementById("newUsuario")
const form = document.querySelector('form');
const users =[]
form.addEventListener('submit', e => e.preventDefault());

// btn.addEventListener("click",respuesta(contraseña,nombre));
// function respuesta(contra,nombre){
// }

//Datos PreCargados
const admin1=("admin1","admin");
const admin2=("admin2","admin");
const admin1Json=JSON.stringify(admin1)
const admin2Json=JSON.stringify(admin2)
localStorage.setItem("Admin1",admin1Json)
localStorage.setItem("Admin2",admin2Json)

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
            
        }  
        else{
           
        }
    
     });
if (flag==1){console.log("ok")}
else{console.log("no encontrado")}

}





//Guardando Usuario Nuevo
newU.addEventListener("click",crearUsuario)
function crearUsuario(){
    class usuario{
        constructor(usuario,contraseña){
            this.usuario=usuario;
            this.contraseña=contraseña;
        }
    } 
    const usuario1=new usuario(nombre.value,contraseña.value);
    users.push(usuario1);
    const usuarioJson=JSON.stringify(users)
    localStorage.setItem("Usuario",usuarioJson)
}

//Comparando Resultados
//btn.addEventListener("click",consulta)
function consulta(){
let nombreIng = nombre.value;
let contraIng = contraseña.value;
let admin1J=localStorage.getItem("Admin1")
let admin1=JSON.parse(admin1J);
//if(localStorage.getItem("Admin1"))
}
//localStorage.setItem("nombre", nombre)

function adentro(x,y){
    if(x==y){
        console.log("adentro")
    }
    else{
        console.log("afuera")
    }
}