import React from 'react'
import { shallow } from 'enzyme'

import { LoginForm } from '../../components/login-form'

describe('<LoginForm />', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<LoginForm handleSubmit={() => console.log('handle submit')}/>)
    expect(wrapper.hasClass('login-form')).toEqual(true);
  })
})