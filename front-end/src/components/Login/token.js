import axios from "axios";

export async function login(user_name, user_password) {
    try {
        // Metodo para poder ingresar a la API
        const res = await axios.post("/login", {
            // Necesita tener los siguientes campos
            user_name,
            user_password
        })
        return res;
    }
    catch {
        return null;
    }
}

export async function logout() {

}