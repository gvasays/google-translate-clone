import React from 'react';
import {
  FormField,
  TextArea,
} from 'semantic-ui-react';

export default function Translate() {
  return (
    <div>
      <div className="app-header">
        <h2 className="header"> My bootleg ass translate app. </h2>

      </div>
      <div className='app-body'>
        <div>
        <FormField
          control={TextArea}
          label='About'
          placeholder='Tell us more about you...'
        />
        </div>

      </div>
    </div>
  )
}
