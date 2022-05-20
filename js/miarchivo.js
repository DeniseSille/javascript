alert ("Bienvenidxs");

        let nombreUsuario = prompt ("ingresar nombre de usuario");
        if (nombreUsuario == ""){
        alert ("no ingresaste nombre de ususario");
        }
        else{
        alert ("nombre de usuario ingresado" + " " + nombreUsuario);
        }

        let edad = prompt ("ingresar edad");
        if (edad >=18){
            alert ("bienvenido" + " " + nombreUsuario);

        }else {
            alert ("no podes ingresar a la pagina");
        }

        

        //ciclos, con while se detiene el ciclo
       
       let inicio = prompt ("ingresar ciudad de origen");
       while (inicio != "arg") {
          alert ("el usuario ingreso " + inicio);
          inicio = prompt ("ingresar nuevamente");
      }
          
        
