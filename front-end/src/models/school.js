import axios from "axios";
export async function getAll() {
    try {
        const res = await axios.get('/schools');
        return res;
    }
    catch {
        return -1;
    }
}