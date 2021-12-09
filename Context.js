import React, { createContext, useState } from 'react';
import { ToastAndroid } from 'react-native';

export const CineContext = createContext();
const CineProvider = (props) => {

    const [compra, setCompra] = useState({})
    const [cartelera, setCartelera] = useState([
        { codigo: 1, nombre: "Halloween Kills", idioma: 'SUB', clasificacion: 'C', horarios: ['13:00', '17:50', '20:30'], duracion: '106', url: 'https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg'},
        { codigo: 2, nombre: "Los Locos Addams 2", idioma: 'ESP', clasificacion: 'A', horarios: ['9:00', '11:30', '13:30'], duracion: '93', url: 'https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg'},
        { codigo: 3, nombre: "Sin Tiempo Para Morir", idioma: 'ESP', clasificacion: 'B', horarios: ['11:00', '13:50', '19:40'], duracion: '164', url: 'https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg'},
        { codigo: 4, nombre: "Venom: Carnage Liberado", idioma: 'ESP', clasificacion: 'B', horarios: ['10:30', '14:20', '18:30'], duracion: '98', url: 'https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg'},
    ]);

    const fun_compra = (cod, hor) => {
        const temporal = cartelera.find(a => a.codigo === cod);
        const newA = {
            codigo: temporal.codigo,
            nombre: temporal.nombre,
            idioma: temporal.idioma,
            clasificacion: temporal.clasificacion,
            horario: hor,
            duracion: temporal.duracion,
            url2: temporal.url2,
            cantidad: 0,
            total: 0,
        }

        setCompra(newA)
    }


    const calcular = (e, comp) => {
        let pr;
        if (comp.duracion >= 100)
            pr = 100;
        if (comp.duracion <= 100)
            pr = 50;

        const newA = {
            codigo: comp.codigo,
            nombre: comp.nombre,
            idioma: comp.idioma,
            clasificacion: comp.clasificacion,
            horario: comp.horario,
            duracion: comp.duracion,
            url2: comp.url2,
            cantidad: e,
            total: e * pr
        }
        setCompra(newA)
    }

    const cancelar = (comp) => {
        setCompra({})
    }

    const comprar = (comp) => {
        if (comp.cantidad <= 0) {
            ToastAndroid.show('compra no exitosa', ToastAndroid.SHORT);
        } else if (comp.cantidad > 0) {
            ToastAndroid.show('compra exitosa', ToastAndroid.SHORT);

            setCompra({})
        }
    }
    return (
        <CineContext.Provider
            value={{
                cartelera,
                compra,
                fun_compra,
                calcular,
                cancelar,
                comprar
            }}>
            {props.children}

        </CineContext.Provider>
    );
}
export default CineProvider;
