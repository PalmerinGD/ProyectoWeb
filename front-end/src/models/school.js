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

export async function getByUserId(id) {
    try {
        const res = await axios.get(`/schools?user_id=${id}`);
        return res;
    }
    catch {
        return -1;
    }
}