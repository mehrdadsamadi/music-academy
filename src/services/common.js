import axios from "axios"

/**
 * @description common delete
 * @method DELETE
 */
export const commonDelete = (url) => {
    return axios.delete(url)
}