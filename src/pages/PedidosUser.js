import React,{useEffect,useState} from 'react'
import Navbar from "../components/Navbar";
import {Title} from "./Mi_perfil.styles";
import {db} from "../firebase"
import '../App.css'
import { useAuth  } from "../contexts/AuthContext";
function PedidosUser() {

    const[pedidos,setPedidos]=useState([]);
    const { currentUser} = useAuth();

    const deletePedido = async( id)=>{
        if (window.confirm('Estas seguro que desear cancelar este pedido ?')){
             await db.collection('pedidos').doc(id).delete();  
        }
     }

    const getPedidos = () => {
        
        db.collection("pedidos").onSnapshot((querySnapshot) =>{
            const docs =[];
            querySnapshot.forEach((doc)=>{
                if(currentUser.email === doc.data().email){
                    docs.push({...doc.data(), id:doc.id});
                }
            })
            docs.sort(function(a,b){
                return a.fecha - b.fecha;
            })
            setPedidos(docs);
        });
    };

    useEffect(()=>{
        getPedidos();// eslint-disable-next-line
     },[]);
    return (
        <div className="container">
            
                <Navbar />
                <Title>Pedidos</Title>
                {pedidos.map(pedido =>(
                    <div className="card" key={pedido.id} >
                        
                        <div className="card-body text-center ">
                            <h5 className="card-title"><b>{pedido.titulo}</b></h5>
                            <img className="" src={pedido.url} alt={pedido.titulo} />
                            <div className="row">
                                <label><b>Fecha pedido:</b></label>
                                <p>{pedido.fecha}</p>
                                <label><b>Direccion envio:</b></label>
                                <p>{pedido.direccion}</p>
                                <i onClick={()=>{deletePedido(pedido.id)}}><button type="button" className="btn btn-outline-warning">Cancelar</button></i>
                            </div>
                        </div>
                    </div>
                ))}
            
        </div>
    )
}

export default PedidosUser
