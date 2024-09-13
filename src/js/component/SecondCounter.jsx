import React from "react";


function SecondCounter({ uno, dos, tres, cuatro, cinco, seis }) {

    return (
        <div className="container d-flex flex-wrap justify-content-center text-center p-3 bg-dark text-white">
            <div className="icono col-12 col-md"><i className="fa fa-clock"></i></div>
            <div className="seis col-6 col-md">{seis % 10}</div>
            <div className="cinco col-6 col-md">{cinco % 10}</div>
            <div className="cuatro col-6 col-md">{cuatro % 10}</div>
            <div className="tres col-6 col-md">{tres % 10}</div>
            <div className="dos col-6 col-md">{dos % 10}</div>
            <div className="uno col-6 col-md">{uno % 10}</div>

        </div>

    )
}


export default SecondCounter;