import axios from "axios";

export const feedback = async (name, email, message) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/form/feedback`, {
            name,
            email,
            message
        })
        alert(response.data.message)
    } catch (error) {
        alert(error.response.data.message)
    }

}