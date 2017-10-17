import React from 'react'
import { mount } from 'enzyme'
import Text from '../index'

describe('Text', () => {
  it('Text render', () => {
    mount(<Text>Children</Text>)
  })

  it('Snapshot Text', () => {
    const wrapper = mount(<Text>Children</Text>)
    expect(wrapper).toMatchSnapshot()
  })
})
