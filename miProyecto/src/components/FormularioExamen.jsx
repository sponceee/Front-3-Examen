import React, { useState } from "react";
import Card from "./Card";



const FormularioExamen = () => {


    const [nombre, setNombre] = useState("");
    const [serie, setSerie] = useState("");
    const [aviso, setAviso] = useState(false);

    const onSubmitForm = (e) => {

        e.preventDefault();

        const nombreValido = validacionNombre(nombre);
        const serieValida = validacionSerie(serie);


        if (nombreValido || serieValida) {

            setAviso(true)

        } else {

            setAviso(false)
            alert("Por favor chequea que la información sea correcta");
        }


    }

    const onChangeNombre = (e) => {

        setNombre(e.target.value)
    }

    const onChangeSerie = (e) => {

        setSerie(e.target.value)
    }

    const validacionNombre = (e) => {

        const sinEspacios = e.trim();

        if (sinEspacios.length > 3) {

            return true


        }
        else {

            return false
        }

    }

    const validacionSerie = (e) => {


        const serieCaracteres = e.trim();



        if (serieCaracteres.length >= 6) {
            return true
        }
        else {
            return false
        }
    }


    return (

        <>

            <form onSubmit={onSubmitForm} className="form">
                <label htmlFor="nombre">Hola! ¿Cómo te llamas?</label>
                <input name="nombre" type="text" value={nombre} onChange={onChangeNombre} />
                <label htmlFor="serie"> Cual es tu serie favorita?</label>
                <input name="serie" type="text" value={serie} onChange={onChangeSerie} />
                <button type="submit">Enviar</button>
            </form>

            {aviso ? <Card nombre={nombre} serie={serie}/> : null}
        </>
    )


}

export default FormularioExamen;