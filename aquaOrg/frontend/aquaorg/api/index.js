import axios from "axios";

const aquaOrgAPI = axios.create({
    baseURL: "http://10.0.2.2:5000/aqua-org/"
    // baseURL : "http://aqua-org.herokuapp.com/aqua-org/"
})

export const login = (data) => aquaOrgAPI.post(`users/login`, data);
export const registration = (data) => aquaOrgAPI.post(`users/register`, data);
export const resetPassword = (data) => aquaOrgAPI.put(`users/password-reset`, data);
export const getUser = (id) => aquaOrgAPI.get(`users/${id}`);
export const updateUser = (id, data) => aquaOrgAPI.put(`users/${id}`, data);


export const createQuestionAnswers = (data) => aquaOrgAPI.post(`question-answers/`, data)
export const getAllQuestionAnswers = () => aquaOrgAPI.get(`question-answers/`)
export const getQuestionAnswers = (id) => aquaOrgAPI.get(`question-answers/${id}`)
export const getQuestionAnswersAccordingToType = (type) => aquaOrgAPI.get(`question-answers/question-type/${type}`)


export const createMarks = (data) => aquaOrgAPI.post(`marks/`, data)
export const getAllMarks = () => aquaOrgAPI.get(`marks/`)
export const getMarksAccordingToUserId = (userId) => aquaOrgAPI.get(`marks/${userId}`)
export const deleteMarks = (id) => aquaOrgAPI.delete(`marks/${id}`)

export default aquaOrgAPI;