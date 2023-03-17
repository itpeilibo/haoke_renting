import axios from '@/utils/request'
export const getswiper = () => {
  return axios({
    url: '/home/swiper'
  })
}

export const RentHouse = (area) => {
  return axios({
    url: '/home/groups',
    params: {
      area
    }
  })
}

export const userlogin = (data) => {
  return axios({
    method: 'post',
    url: '/user/login',
    data
  })
}

export const user = (authorization) => {
  return axios({
    url: '/user',
    params: {
      authorization
    }
  })
}
