        var mensaje = `Hola mundo que tal`
        console.log(`Hola mundo hola que tal`);
        console.log(mensaje);
        console.log(document);
        console.log(localStorage);

        var viernes = true
        console.log(`huida`+ viernes)
        //debugger
        var alert = `p`;
        if(viernes == true){
        console.log(`si es una huida logica`);
        }
        function enviarform() {
            console.log(`llamando a la función enviarform`)
            var div = document.getElementById(`mensaje`).value;
            if (compropass){
                //var nombre = document.getElementById(`name`).value;
                //console.log(`el nombre de usuario es ` + nombre);
                //document.writeln (`<h1>` + nombre + `<\h1>`);
                //document.writeln(`<h1> password OK <\h1>`);
                var nombre = document.getElementById(`nombre`).value;
                div.innerHTMl = nombre + `password ok`
            } else {
            //    document.writeln(`<h1> not password OK <\h1>`);
            div.innerHTMl = nombre + `password not very ok`
            }
            
        }

        function compropass(){
            var pass1 = document.getElementById(`pass1`).value;
            var pass2 = document.getElementById(`pass2`).value;
            return pass1 == pass2
        }