import React,{useEffect,useState} from 'react'
import Navbar from "../components/Navbar";
import {Container,Title} from "./Editar_perfil.styles";
import { useAuth  } from "../contexts/AuthContext";
import {db} from "../firebase"
import { Link,useHistory } from "react-router-dom";


function ComprarLibros(params) {

    const initialStateValuesUser = {
        codigo: '',
        nombre: '',
        apellido: '',
        email: '',
        direccion: '',
        genero: '',
        nacimiento: '',
        clave: '',
        clave2: '',
        saldo: '0'
      };
    
      const initialStateValuesLibro = {

        titulo: '',
        autor: '', 
        issn: '',
        paginas: '', 
        editorial: '',
        fecha: '',
        genero: '', 
        estado: '',
        precio: '', 
        existencias: '', 
        portada: '', 
        descripcion: '',
      };

    const { currentUser ,editcollection,createCollection } = useAuth();
    const [user, setUser] = useState(initialStateValuesUser);
    const [libro, setLibro] = useState(initialStateValuesLibro);
    const [iduser, setIduser] = useState("");
    const history = useHistory();



    const getBooksandUsers = async() => {

        db.collection("libros").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.id === params.match.params.keyword) {
                    setLibro(doc.data());    
                    return;
                }
            });
        });

        db.collection("users").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              if (doc.data().email === currentUser.email) {
                setIduser(doc.id);
                setUser(doc.data());
                return;
              }
            });
          });
    };

    const onComprar = async() => {
        //Calcular saldo final
        var valor = parseFloat(libro.precio,10)
        var saldo = parseFloat(user.saldo,10)
        var existencias = parseFloat(libro.existencias,10)
        if(existencias >0 ){
            existencias -= 1
        }
        var total = saldo - valor

        //si el saldo es menor que el valor del libro
        if (saldo >= valor && existencias > 0){
            //sacar la fecha actual
            var fecha = new Date();;
            const añoActual = fecha.getFullYear();
            const hoy = fecha.getDate();
            const mesActual = fecha.getMonth() + 1;
            var fecha_actual = añoActual.toString()+'-'+hoy.toString()+'-'+mesActual.toString()
            
            createCollection({email: user.email,fecha:fecha_actual ,titulo: libro.titulo,url: libro.portada,valor: libro.precio,direccion: user.direccion},'pedidos')
            editcollection({...user,saldo:total.toString()},iduser,'users')
            editcollection({...libro,existencias:existencias.toString()},params.match.params.keyword,'libros')
            alert('compra exitosa')
        }else{
            alert('Saldo insuficiente o No hay existencias disponibles')
        }
        
        history.push("/")
    }

    useEffect(()=>{
        getBooksandUsers(); // eslint-disable-next-line
     },[]);

    return (
        <div>
            <Container>
                <Navbar/>
                <Title>Comprar Libros</Title>
                <div className="card" >
                            <div className="card-body">
                                <label><b>Libro a comprar:</b></label>
                                <p>{libro.titulo}</p>
                                <label><b>Direccion de envio:</b></label>
                                <p>{user.direccion}</p>
                                <label><b>Saldo disponible:</b></label>
                                <p>${user.saldo}</p>
                                <label><b>Total a pagar:</b></label>
                                <p>-${libro.precio}</p>
                                <i onClick={()=>{onComprar()}}><button type="button" className="btn btn-outline-warning">Comprar</button></i>
                                <Link to="/"><button type="button" className="btn btn-outline-warning">Cancelar</button></Link>
                            </div>
                        </div>
            </Container>
        </div>
    )
}

export default ComprarLibros
