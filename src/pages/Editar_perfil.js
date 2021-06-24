import React, {useState,  useEffect} from 'react'
import Navbar from "../components/Navbar";
import {Container,Title,FormLabel, FormInput, FormGroup} from "./Editar_perfil.styles";
import { useAuth } from "../contexts/AuthContext";
import {db} from "../firebase"


function Editar_perfil() {
    
      const {currentUser} = useAuth()
      const [email, setEmail] = useState("");
      const[users,setUser]=useState([]);

      const getUser = async() => {
            db.collection("users").onSnapshot((querySnapshot) => {
              const docs = [];
              querySnapshot.forEach((doc) => {
                  //console.log(doc.data());
                  console.log(doc.data().email);
                  if (doc.data().email === currentUser.email) {
                      docs.push({ ...doc.data(), id: doc.id });
                  }
              });
              setUser(docs);
              console.log(docs);

          });
        };

      useEffect(()=>{
        getUser();
     },[]);
    return (
        <div>
            <Container>
                <Navbar/>
                <Title>Editar perfil</Title>
                <form action="">
                    {users.map(user =>(
                        <div key={user.id}>
                            <FormGroup>
                                <FormLabel>Nombre</FormLabel>
                                <FormInput
                                name='nombre'
                                onChange={(ev)=> setEmail(ev.target.value)}
                                value={user.nombre}
                                ></FormInput>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Apellidos</FormLabel>
                                <FormInput
                                name='apellido'
                                onChange={(ev)=> setEmail(ev.target.value)}
                                value={user.apellido}
                                ></FormInput>
                            </FormGroup>
                        </div>
                    ))}
                </form>
            </Container>
        </div>
    )
}

export default Editar_perfil
