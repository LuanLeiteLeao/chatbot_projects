const { Pagination } = require('../libs/pagination')
const { users } = require('./dataForTeste')
const { expect, describe, test } = require('@jest/globals')

let listOfNumbersLength10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

describe('Teste de Paginacao com uma lista de 10 elemetos, 3 elementos por pagina', () => {

  let listOfNumbersLength0 = []
  let listOfNumbersLength1 = [1, 2]
  let listOfNumbersLength2 = [1, 2]
  let listOfNumbersLength3 = [1, 2, 3]
  let listOfNumbersLength11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  let listOfNumbersLength12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  let listOfNumbersLength13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  beforeAll(() => {
    // pagination = new Pagination([], 10)
  })

  let pag = new Pagination(listOfNumbersLength10, 3)

  test('Deve Paginar para a pagina 1 e apresentar os elementos [1,2,3]', () => {

    expect(pag._getListSize()).toEqual(10)
    expect(pag._getTotalPages()).toEqual(4)
    expect(pag.getPage()).toEqual({ "currentPage": 1, "elements": [1, 2, 3], "numberforPages": 3, "totalOfPage": 4 })
  })

  test('Deve Paginar para a pagina 2 e apresentar os elementos [4,5,6]', () => {

    expect(pag._getListSize()).toEqual(10)
    expect(pag._getTotalPages()).toEqual(4)
    pag.setNextPage()
    expect(pag.getPage()).toEqual({ "currentPage": 2, "elements": [4, 5, 6], "numberforPages": 3, "totalOfPage": 4 })
  })

  test('Deve Paginar para a pagina 3 e apresentar os elementos [7,8,9]', () => {

    expect(pag._getListSize()).toEqual(10)
    expect(pag._getTotalPages()).toEqual(4)
    pag.setNextPage()
    expect(pag.getPage()).toEqual({ "currentPage": 3, "elements": [7, 8, 9], "numberforPages": 3, "totalOfPage": 4 })
  })

  test('Deve Paginar para a pagina 4 e apresentar os elementos [10]', () => {

    expect(pag._getListSize()).toEqual(10)
    expect(pag._getTotalPages()).toEqual(4)
    pag.setNextPage()
    expect(pag.getPage()).toEqual({ "currentPage": 4, "elements": [10], "numberforPages": 3, "totalOfPage": 4 })
  })

  test('Deve Paginar para a pagina 1 quando chegar ao final da paginacao e apresentar os elementos [1,2,3]', () => {

    expect(pag._getListSize()).toEqual(10)
    expect(pag._getTotalPages()).toEqual(4)
    pag.setNextPage()
    expect(pag.getPage()).toEqual({ "currentPage": 1, "elements": [1, 2, 3], "numberforPages": 3, "totalOfPage": 4 })
  })

  test('Deve Paginar para a pagina 2 e apresentar os elementos [4,5,6]', () => {

    expect(pag._getListSize()).toEqual(10)
    expect(pag._getTotalPages()).toEqual(4)
    pag.setNextPage()
    expect(pag.getPage()).toEqual({ "currentPage": 2, "elements": [4, 5, 6], "numberforPages": 3, "totalOfPage": 4 })
  })

})

describe('Teste de Paginacao para páginas anteriores com uma lista de 10 elemetos, 4 elementos por pagina', () => {

  let pag = new Pagination(listOfNumbersLength10, 4)

  test('Deve Paginar para a pagina 1 e apresentar os elementos [1,2,3,4]', () => {

    expect(pag._getListSize()).toEqual(10)
    expect(pag._getTotalPages()).toEqual(3)
    expect(pag.getPage()).toEqual({ "currentPage": 1, "elements": [1, 2, 3, 4], "numberforPages": 4, "totalOfPage": 3 })
  })

  test('Deve Paginar para a pagina 2 e apresentar os elementos [5, 6, 7, 8]', () => {

    expect(pag._getListSize()).toEqual(10)
    expect(pag._getTotalPages()).toEqual(3)
    pag.setNextPage()
    expect(pag.getPage()).toEqual({ "currentPage": 2, "elements": [5, 6, 7, 8], "numberforPages": 4, "totalOfPage": 3 })
  })

  test('Deve Paginar para a pagina 3 e apresentar os elementos [9, 10]', () => {

    expect(pag._getListSize()).toEqual(10)
    expect(pag._getTotalPages()).toEqual(3)
    pag.setNextPage()
    expect(pag.getPage()).toEqual({ "currentPage": 3, "elements": [9, 10], "numberforPages": 4, "totalOfPage": 3 })
  })

  test('Deve Paginar para a pagina 1 e apresentar os elementos [1, 2, 3, 4]', () => {

    expect(pag._getListSize()).toEqual(10)
    expect(pag._getTotalPages()).toEqual(3)
    pag.setNextPage()
    expect(pag.getPage()).toEqual({ "currentPage": 1, "elements": [1, 2, 3, 4], "numberforPages": 4, "totalOfPage": 3 })
  })

  test('Deve Paginar para a pagina 1 e apresentar os elementos [1, 2, 3, 4]', () => {

    expect(pag._getListSize()).toEqual(10)
    expect(pag._getTotalPages()).toEqual(3)
    pag.setBackPage()
    expect(pag.getPage()).toEqual({ "currentPage": 3, "elements": [9, 10], "numberforPages": 4, "totalOfPage": 3 })
  })

  test('Deve Paginar para a pagina 1 e apresentar os elementos [5, 6, 7, 8]', () => {

    expect(pag._getListSize()).toEqual(10)
    expect(pag._getTotalPages()).toEqual(3)
    pag.setBackPage()
    expect(pag.getPage()).toEqual({ "currentPage": 2, "elements": [5, 6, 7, 8], "numberforPages": 4, "totalOfPage": 3 })
  })

  test('Deve Paginar para a pagina 1 e apresentar os elementos [1, 2, 3, 4]', () => {

    expect(pag._getListSize()).toEqual(10)
    expect(pag._getTotalPages()).toEqual(3)
    pag.setBackPage()
    expect(pag.getPage()).toEqual({ "currentPage": 1, "elements": [1, 2, 3, 4], "numberforPages": 4, "totalOfPage": 3 })
  })

  test('Deve Paginar para a pagina 1 e apresentar os elementos [1, 2, 3, 4]', () => {

    expect(pag._getListSize()).toEqual(10)
    expect(pag._getTotalPages()).toEqual(3)
    pag.setBackPage()
    expect(pag.getPage()).toEqual({ "currentPage": 3, "elements": [9, 10], "numberforPages": 4, "totalOfPage": 3 })
  })
})

describe('Execoes de argumentos nulos', () => {
  test('Caso os 2 argumentos sejma nulos deve retornar execao', () => {

    try {
      new Pagination()
      expect(false).toBe(true)
    } catch (err) {

      expect(error.message).toEqual("Os argumentos list e perPage são obrigatórios")
    }

  })

  test('Caso 1 argumento sejma nulos deve retornar execao', () => {

    try {
      new Pagination(listOfNumbersLength10)
      expect(false).toBe(true)
    } catch (err) {

      expect(error.message).toEqual("Os argumentos list e perPage são obrigatórios")
    }

  })

  test('Caso 1 argumento sejma nulos deve retornar execao', () => {

    try {
      new Pagination(null, 10)
      expect(false).toBe(true)
    } catch (err) {

      expect(error.message).toEqual("Os argumentos list e perPage são obrigatórios")
    }

  })
})