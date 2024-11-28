import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import './App.css';

function App() {
  const [form] = Form.useForm(); //Correct form initialization
  const [name,setName] = useState('')
  const submit= () => {
    const name = form.getFieldValue('name')
    setName(name)
  }
  
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
      Hello! {name}
      <Form
        form={form}
        name="basic"
        autoComplete="off"
        className='max-w-80 w-full flex flex-col px-2'
      >
        <div className='max-w-80 w-full flex flex-col px-2'>
          <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
            Name
          </label>
          <Form.Item
            name="name"
            className='w-full'
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input id='name' className="mt-2 w-full" />
          </Form.Item>

          <Button type='primary' htmlType='submit' className=' ml-auto' onClick={submit}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default App;
