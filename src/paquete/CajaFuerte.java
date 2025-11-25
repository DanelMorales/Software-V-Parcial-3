package paquete;
import java.util.LinkedList;
public class CajaFuerte {
    private LinkedList <Integer> cajaF = new LinkedList<Integer>();


    //metodo para almacenar clave
    public void almaC (int c) {
        cajaF.add( c );
    }
    // metodo para asignar Clave
    public  String clave () {
        String clave = "";
        for (int i : cajaF) {
            clave = clave + i;
        }
        return clave;
    }
    // metodo para revisar lo que esta dentro de la lista
    public LinkedList<Integer> getCajaF(){
        return cajaF;
    }
    //;
}
