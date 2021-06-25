import React from 'react'
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import {Container,Title,FormLabel, FormInput, FormGroup} from "./Editar_perfil.styles";
import { Link } from "react-router-dom";
function Admin_libros() {
    return (
        <div>
            <Container>
                <Navbar/>
                <Title>Administracion de Libros</Title>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>&nbsp;</th>
                                <th>ID</th>
                                <th>Portada</th>
                                <th>Titulo</th>
                                <th>Autor(a)</th>
                                <th>Genero</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>&nbsp;</th>
                                <th>ID</th>
                                <th>Portada</th>
                                <th>Titulo</th>
                                <th>Autor(a)</th>
                                <th>Genero</th>
                                <th>Estado</th>
                                <th><Link to='/'>Editar</Link><th>
                                    <Link to='/'>Administrar Existencias</Link><th>
                                    <Link to='/'>Eliminar</Link></th></th>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    )
}

export default Admin_libros
