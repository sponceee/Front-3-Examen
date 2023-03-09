import React from "react";




const Card = ({nombre, serie}) => {


    return (

        <>


        <div className="Card">
            <h2>La serie favorita de {nombre} es {serie}</h2>

        

        </div>



        </>


    )

}

export default Card;