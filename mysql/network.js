const express = require('express')

const response =  require('../network/response')
const store = require('../store/mysql')

const router = express.Router()

router.get('/:tabla', list)
router.get('/:tabla/:id', get)
router.post('/:tabla', insert)
router.put('/:tabla', upsert)

async function list(req, res, next){
  const datos = await store.list(req.params.tabla)
  response.success(req, res, datos, 200)
}

async function get(req, res, next){
  const datos = await store.get(req.params.tabla, req.params.id)
  response.success(req, res, datos, 200)
}

async function insert(req, res, next){
  const datos = await store.insert(req.params.tabla, req.params.body)
  response.success(req, res, datos, 200)
}

async function upsert(req, res, next){
  const datos = await store.upsert(req.params.tabla, req.params.body)
  response.success(req, res, datos, 200)
}

module.exports = router