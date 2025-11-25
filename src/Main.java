import paquete.CajaFuerte;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
// Abraham Alcedo 8-1034-2454 Danel Morales 8-1006-2453

public class Main {
    public static void main(String[] args) {
        String linea = "";
        String clave = "";
        int c = 0;
        BufferedReader br = new BufferedReader( new InputStreamReader (System.in));
        CajaFuerte cf = new CajaFuerte();
        try {
           System.out.println(" Introduzca una clave de 4 digitos");
            for (int i = 1; i <= 4; i++ ) {
                linea = br.readLine();
                c = Integer.parseInt(linea);
                cf.almaC(c);
            }
            System.out.println("Su clave es: "+ cf.clave());
            System.out.println("Guardada en la lista " + cf.getCajaF());
            System.out.println("Introduzca la clave");
            clave = br.readLine();
                if (clave.equals(cf.clave())) {
                    System.out.println("Ha accedido a la caja fuerte ");
                } else {
                    System.out.println(" Lo siento, no tiene acceso a la caja fuerte");
                }

        } catch (IOException e) {
            System.out.println("Error :c");
        }

    }

}