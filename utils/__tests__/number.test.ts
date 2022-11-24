import { describe, expect, it } from 'vitest'

import { getSuffix } from '../number'

describe('getSuffix', () => {
  it('should return the st suffix for 1, 11, 21, 31, et...', () => {
    expect(getSuffix(1)).toBe('1st')
    expect(getSuffix(11)).toBe('11th')
    expect(getSuffix(21)).toBe('21st')
    expect(getSuffix(31)).toBe('31st')
    expect(getSuffix(41)).toBe('41st')
    expect(getSuffix(101)).toBe('101st')
    expect(getSuffix(111)).toBe('111th')
  })
})
