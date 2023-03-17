import axios from '@/utils/request'

export const houses = (id) => {
  return axios({
    url: '/area',
    params: {
      id
    }
  })
}
export const areainfo = (name) => {
  return axios({
    url: '/area/info',
    params: {
      name
    }
  })
}

export const housescondition = (id) => {
  return axios({
    url: '/houses/condition',
    params: {
      id
    }
  })
}
export const gethouses = (params) => {
  return axios({
    url: '/houses',
    params: params
  })
}

export const gethousesfangwu = (id) => {
  return axios({
    url: `/houses/${id}`
  })
}
export const areamap = (id) => {
  return axios({
    url: '/area/map',
    params: {
      id
    }
  })
}

export const areason = (id) => {
  return axios({
    url: '/area',
    params: {
      id
    }
  })
}
export const areacommunity = (params) => {
  return axios({
    url: '/area/community',
    params
  })
}

export const shangchuan = (data, authorization) => {
  return axios({
    url: '/user/houses',
    method: 'POST',
    headers: {
      authorization
    },
    data
  })
}

export const homegroups = (area) => {
  return axios({
    url: '/home/groups',
    params: {
      area
    }
  })
}

export const getuserfavorites = (authorization) => {
  return axios({
    url: '/user/favorites',
    headers: {
      authorization
    }
  })
}

export const userfavorites = (authorization, id) => {
  return axios({
    url: `/user/favorites/${id}`,
    method: 'POST',
    headers: {
      authorization
    }
  })
}

export const getauserhouses = (authorization) => {
  return axios({
    url: '/user/houses',
    headers: {
      authorization
    }
  })
}
