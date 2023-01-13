import axios from "axios";

export async function getRoles() {
    const res = await axios.get('/rol')
    try {
       return res.data;
    }
    catch {
        return -1;
    }
}