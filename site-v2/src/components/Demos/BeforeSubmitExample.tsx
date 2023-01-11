import React, { useState } from 'react';
import Form from '../Form/Form';
import JustValidate from 'just-validate';
import Input from '@site/src/components/UI/Input';

const BeforeSubmitExample = () => {
  return (
    <Form
      id="before-submit_form"
      init={(onSuccess) => {
        const validator = new JustValidate('#before-submit_form', {
          validateBeforeSubmitting: true,
        });

        validator
          .addField('#before-submit_email', [
            {
              rule: 'required',
            },
            {
              rule: 'email',
            },
          ])
          .onSuccess(onSuccess);
      }}
    >
      <Input
        id="before-submit_email"
        label="Email"
        placeholder="Start typing..."
      />
    </Form>
  );
};

export default BeforeSubmitExample;
