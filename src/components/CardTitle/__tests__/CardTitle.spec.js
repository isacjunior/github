import React from 'react'
import { mount } from 'enzyme'
import CardTitle from '../index'

describe('CardTitle', () => {
  it('CardTitle render', () => {
    mount(<CardTitle />)
  })

  it('Snapshot CardTitle', () => {
    const wrapper = mount(<CardTitle />)
    expect(wrapper).toMatchSnapshot
  })
})