function restaurante(){

            let espacio = "<br>";

             //Variables billetes y monedas
            let unEuro = 1;
            let dosEuros = 2;
            let cincoEuros = 5;
            let diezEuros = 10;
            let veinteEuros = 20;
            let cincuentaEuros = 50;
            let cienEuros = 100;
            let docientosEuros = 200;
            let quinientosEuros = 500;

            //Declaración de arrays platos y precio
           let menu = new Array();
           let precio = new Array();



          

            //Poblar arrays de menu y precio
            for (var i = 0; i < 2; i++)
            {
                let plato = prompt("Introduce el plato: ");
                menu.push(plato)
                precioPlato = parseInt(prompt("Introduce el precio: "));
                precio.push(precioPlato);

            }


           

            //Mostrar menu con respectivos precios por consola
            for (var i = 0; i < menu.length; i++)
            {

                  document.write(`${menu[i]}  ${precio[i]}  Euros <br>`);

            }

            
             


              //Lista de pedidos
             let comanda = new Array();

              //Control de bucle
               let order = true;

              //Variable de incremento de bucle
              let j = 0;

            //Crear List de pedido y dar opción de seguir o parar el pedido
            while (order)
            {
                
                var pedido = prompt("Por favor haga su pedido \n Introduce el plato: ");
                comanda.push(pedido);

              
                let ordering =  prompt("Desea algo más? Teclea 'y' para seguir o 'n' para encerrar el pedido.");
                if (ordering == "n")
                {
                    order = false;
                }

            }
            j++;


            //Var total cuenta y si pedido está en el menú
            let total = 0;
            let inList = true;
        


            for (var plato of  comanda)
            {
                for (var i = 0; i < menu.length; i++)
                {
                    if (plato == menu[i])
                    {
                       total += precio[i];
                        inList = true;
                    }

                }

                if (!inList)
                {
                 document.write(espacio);
                 document.write(`El plato ${plato} no está en el menú. <br>`);

                 }
                 inList = false;
                }
              document.write(espacio);
              document.write(`Total despesas: ${total} Euros. <br>`);
     
            /*El proximo tramo de codigo es una adaptción de uno que encontré en internet,
           * no he podido llegar al algoritmo por cuenta propia */


            // Indicamos todas las monedas posibles
            var monedas = [ quinientosEuros,
                            docientosEuros,
                            cienEuros,
                            cincuentaEuros,
                            veinteEuros,
                            diezEuros,
                            cincoEuros,
                            dosEuros,
                            unEuro ];

            // Creamos un array con 0 de longitud igual a la cantidad de monedas
            // Este array contendra las monedas a devolver
             let cambio = [ 0, 0, 0, 0, 0, 0, 0, 0, 0];



            // Recorremos todas las monedas
              for(var i=0; i < monedas.length; i++)
              {
             
                // Si el total actual, es superior a la moneda
                if(total>=monedas[i])
                {
             
                    // obtenemos cantidad de monedas
                    cambio[i]=parseInt(total/monedas[i]);
             
                    // actualizamos el valor del total que nos queda por didivir
                    total=(total-(cambio[i]*monedas[i])).toFixed(2);
                  
                }
            }
             document.write(espacio);
             document.write("Desglose de billetes. <br>");
             document.write("Puedes pagar con. <br>");
             document.write(espacio);
            // Bucle para mostrar el resultado
            for(i=0; i<monedas.length; i++)
            {
                if(cambio[i]>0)
                {
                    if(monedas[i]>=5)
                        document.write(`${cambio[i]} billetes de: ${monedas[i]} &euro; <br>`);
                    else
                        document.write(`${cambio[i]} billetes de: ${monedas[i]} &euro; <br>`);
                }
            }
               


}
    


 
