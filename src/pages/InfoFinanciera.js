import React,{useEffect,useState} from 'react'
import Navbar from "../components/Navbar";
import {Title} from "./Mi_perfil.styles";
import {db} from "../firebase"
import '../App.css'
import { useAuth  } from "../contexts/AuthContext";

function InfoFinanciera() {
    const initialStateValues = {
        codigo: "",
        nombre: "",
        apellido: "",
        email: "",
        direccion: "",
        genero: "",
        nacimiento: "",
        clave: "",
        clave2: "",
        saldo: "0",
    };

    const [user, setUser] = useState(initialStateValues);
    const { currentUser} = useAuth();

    const getUser = () => {
        db.collection("users").onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.data().email === currentUser.email) {
              setUser(doc.data());
              return;
            }
          });
        });
      };

    useEffect(()=>{
        getUser();// eslint-disable-next-line
     },[]);
    return (
        <div className="container">
            
            <Navbar />
            <Title>Consultar saldo</Title>
            
            <div className="card">
                
                <div className="card-body text-center ">
                    <h5 className="card-title"><b>{user.email}</b></h5>
                    <div className="row">
                        <label><b>Saldo disponible:</b></label>
                        <p>${user.saldo}</p>
                        <label><b>A nombre de:</b></label>
                        <p>{user.nombre}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoFinanciera
