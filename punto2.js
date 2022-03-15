
let boton= document.getElementById("boton") 
boton.addEventListener("click",escuchar);
function escuchar(event){
    event.preventDefault()
    console.log("Hizo clilck")
   let producto= document.getElementById("producto").value
   console.log(producto)
   let edad= document.getElementById("edad").value
   console.log(edad)
   let cantidad= document.getElementById("cantidad").value
   console.log(cantidad)
   if(edad>=18){

        let total=producto*cantidad
        alert (total)
   }
   else{
       alert("eres menor de edad")
   }
}