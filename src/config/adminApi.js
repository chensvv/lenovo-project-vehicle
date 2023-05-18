
import fetch from './http'
import {Base64} from 'js-base64'

export function login (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/user/login',
    method: 'post',
    data: data
  })
}

export function logout (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/user/logout',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function logImgCode (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/user/getImgCode',
    method: 'post',
    data: data
  })
}

export function userMenu (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/user/getMenu',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function userList (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/user/list',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function userReg (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/user/add',
    method: 'post',
    data: data
  })
}

export function userAdd (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/user/add',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function userUpd (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/user/update',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function userCheckPass (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/user/updatePassword',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function userDel (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/user/del',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function userInfoOne (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/user/userInfo',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function userRole (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/role/rolelistpage',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function userRoleEcho (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/user/queryRole',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function userRoleSave (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/user/editRole',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function roleList (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/role/list',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function roleAdd (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/role/add',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function roleDel (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/role/del',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function roleEcho (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/role/queryOne',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function roleUpd (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/role/update',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function authList (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/Rule/queryone',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function akskList (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/userinfo/list',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function akskDetail (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/userinfo/detail',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function modinfy (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/userinfo/modify',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function activitiList (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/activiti/list',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function activitiPass (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/activiti/pass',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function activitinList (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/activiti/nlist',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function activitiStatus (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/activiti/status',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function userinfoUpdate (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/userinfo/update',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function authAdd (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/Rule/add',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function authDel (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/Rule/delete',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function authUpdate (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/Rule/update',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function ruleList (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/Rule/fetch',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}

export function ruleInfoList (data) {
  return fetch.service_head({
    url: '/vehicle-mgr/Rule/queryone',
    method: 'post',
    data: data,
    headers: {
      't': Base64.decode(JSON.parse(sessionStorage.getItem('token')).t),
      'u':sessionStorage.getItem('username')
    }
  })
}
