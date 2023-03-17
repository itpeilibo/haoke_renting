import axios from '@/utils/request'
export const getIndexBar = (level) => {
  return axios({
    url: '/area/city',
    params: {
      level
    }
  })
}

export const areahot = () => {
  return axios({
    url: '/area/hot'
  })
}

export const housesimage = (data) => {
  return axios({
    url: '/houses/image',
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  })
}
