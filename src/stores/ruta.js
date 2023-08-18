import { defineStore } from "pinia";
import axios from "axios";

export const useRutaStore = defineStore("ruta", () => {

    const getRutas = async () => {
        try {
            return axios.get("https://admiventas.onrender.com/ruta");
        } catch (error) {
            throw new Error("No se pudieron obtener las rutas");
        }
    };

    const postRuta = async (datos) => {
        try {
            return axios.post("https://admiventas.onrender.com/ruta", datos);
        } catch (error) {
            throw new Error("No se pudo agregar la ruta");
        }
    };

    return {
        getRutas,
        postRuta
    };

});
