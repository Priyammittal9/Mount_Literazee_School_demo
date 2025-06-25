import axios from "axios";


export interface FormsPopProps {
    parentName: string;
    childName: string;
    email?: string;
    phone: string;
    previousSchoolName?: string;
    class: string;

}
const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

const popForm = async (data: FormsPopProps) => {
    const res = await api.post('', data)
    return res
}

export {
    popForm
}