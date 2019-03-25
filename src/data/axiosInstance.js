import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://aurelie-calle.vpnuser.oclock.io/Spe/Apo/foodplanner/API_Backend/public/',
})

export default axiosInstance
