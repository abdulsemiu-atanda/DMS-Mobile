import {List, Map} from 'immutable'

import {ucFirst, makeImmutable, noop, isTokenExpired} from '../../util/util'

describe('Util functions', () => {
  describe.only('ucFirst', () => {
    it('capitalizes first letter in a string', () => {
      expect(ucFirst('happy')).toEqual('Happy')
    })
  })

  describe.only('makeImmutable', () => {
    it('converts a javascript array to immutable list', () => {
      const data = [1, 2, 3]
      const immutableData = makeImmutable(data)

      expect(List.isList(immutableData)).toBeTruthy()
      expect(immutableData.size).toEqual(data.length)
    })

    it('converts javascript object to an immutable map and does not modify it', () => {
      const data = {name: 'Jane Doe', age: 32}
      const immutableData = makeImmutable(data)

      expect(Map.isMap(immutableData)).toBeTruthy()
      expect(immutableData.get('name')).toEqual(data.name)
    })
  })

  describe.only('noop', () => {
    it('is a function', () => {
      expect(noop).toBeInstanceOf(Function)
    })

    it('returns undefined when called', () => {
      expect(noop()).toBeUndefined()
    })
  })

  describe.only('isTokenExpired', () => {
    it('returns true for expired token', () => {
      const expiredToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc\
        3ROYW1lIjoiQW5nZWxhIiwibGFzdE5hbWUiOiJTaW1tb25zIiwiZW1haWwiOiJhbmdlbGEuc2ltbW9uc0\
        BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFuZ2VsYS5zaW1tb25zIiwicGFzc3dvcmQiOiIkMmEkMDgkWGNGdm\
        51Qkg0QjdCRWFWNFhDZ2o2Ty5FZ3RrVmxSNEYyc0lPMzdIa0t1UGtJY2Q2VXVjYmkiLCJyb2xlSWQiOjEsImlhd\
        CI6MTUzMDkyMzE4NCwiZXhwIjoxNTMxMDA5NTg0fQ.6fMNuM8uG73ypeehmGNBgcLzrhPFGBGcy_SaRluqxiQ'

      expect(isTokenExpired(expiredToken)).toBeTruthy()
    })
  })
})
