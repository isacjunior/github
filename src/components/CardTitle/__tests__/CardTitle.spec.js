import React from 'react'
import { mount } from 'enzyme'
import CardTitle from '../index'

describe('CardTitle', () => {
  it('CardTitle render', () => {
    mount(<CardTitle title="Title" />)
  })

  it('Snapshot CardTitle', () => {
    const wrapper = mount(<CardTitle title="Title" />)
    expect(wrapper).toMatchSnapshot()
  })
})