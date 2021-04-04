const { nanoid } = require('nanoid')

const TABLA = 'post'

module.exports = function (injectdStore) {
  let store = injectdStore
  if(!store){
    store = require('../../../store/dummy')
  }

  function list(){
    return store.list(TABLA)
  }

  return {
    list
  }
}