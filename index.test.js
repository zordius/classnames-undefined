const cn = require('./index')

describe('classnames-undefined', () => {
  it('behaves like classnames when classname exists', () => {
    expect(cn('abc', 'def')).toEqual('abc def')
  })

  it('returns undefined when classname is false', () => {
    expect(cn(false)).toEqual(undefined)
  })

  it('returns undefined when classname is null', () => {
    expect(cn(null)).toEqual(undefined)
  })

  it('returns undefined when classname is 0', () => {
    expect(cn(0)).toEqual(undefined)
  })

  it('returns string "1" when classname is 1', () => {
    expect(cn(1)).toEqual('1')
  })
})
