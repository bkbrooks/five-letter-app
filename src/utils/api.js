import axios from 'axios'

export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 400) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

// intended to be thrown in async action promise chain to standardize parsing and error handling
export const parseResponse = (response) => {
  checkStatus(response)
  return response
}

const token = 'notokenyet'

const config = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
}

const authConfig = {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
} 

const urlprefix = process.env.REACT_APP_API_URI || 'http://localhost:3001'

const createUrl = (endpoint) => {
  return `${urlprefix}${endpoint}`
}

export const apiNoAuth = {
  get: (endpoint) => {
    return axios.get(createUrl(endpoint), config)
  },
  post: (endpoint, data) => {
    return axios.post(createUrl(endpoint), JSON.stringify(data), config)
  },
  put: (endpoint, data) => {
    return axios.put(createUrl(endpoint), JSON.stringify(data), config)
  },
  del: (endpoint) => {
    return axios.delete(createUrl(endpoint), config)
  }
}

export default {
  get: (endpoint) => {
    return axios.get(createUrl(endpoint), authConfig)
  },
  post: (endpoint, data) => {
    return axios.post(createUrl(endpoint), JSON.stringify(data), authConfig)
  },
  put: (endpoint, data) => {
    return axios.put(createUrl(endpoint), JSON.stringify(data), authConfig)
  },
  del: (endpoint) => {
    return axios.delete(createUrl(endpoint), authConfig)
  }
}
