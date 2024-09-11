import axios from "axios";

export const baseApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTJlZmQyZjM5NzE0MDk1NTE4MTMxZWRhYjRjZTA2YiIsIm5iZiI6MTcyNjAzNzI1OC43NTM1ODIsInN1YiI6IjY2ZTEzYjc1YzM2MGQyN2IyNzVmMDMxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r-FfTd83uKNaJWP2VRj0e4AHv9exqxtKwizsEw3UPgE'
    }
})