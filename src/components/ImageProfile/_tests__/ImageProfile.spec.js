import React from 'react'
import { mount } from 'enzyme'
import ImageProfile from '../index'

describe('ImageProfile', () => {
  it('ImageProfile render', () => {
    mount(<ImageProfile src="url" />)
  })

  it('Snapshot ImageProfile', () => {
    const wrapper = mount(<ImageProfile src="url" />)
    expect(wrapper).toMatchSnapshot()
  })
})
