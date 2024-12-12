import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import './App.css';
import { get } from 'aws-amplify/api';
import SignatureComponent from './components/SignatureComponent';
import SignaturePage from './pages/Signature';
const myAPI = 'apie659201d'
const path = '/testing'


function App() {
  // const [form] = Form.useForm(); //Correct form initialization
  // const [name, setName] = useState('')
  // const submit = () => {
  //   const name = form.getFieldValue('name')
  //   setName(name)
  // }

  // useEffect(() => {
  //   async function getTodo() {
  //     try {
  //       const restOperation = get({
  //         apiName: myAPI,
  //         path: path
  //       });
  //       const response = await restOperation.response;
  //       console.log('GET call succeeded: ', response);
  //     } catch (e) {
  //       console.log('GET call failed: ', e);
  //     }
  //   }

  //   getTodo();
  // }, [])

  return (
    <div className='w-full  flex flex-col justify-center items-center px-2 font-sans mt-20'>
      {/* Hi! {name} */}
      {/* <Form
        form={form}
        name="basic"
        autoComplete="off"
        className='max-w-xl w-full flex flex-col px-2'
      >
        <div className='max-w-xl w-full flex flex-col px-2'>
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

          

          <Button type='primary' htmlType='submit' className=' ml-auto mt-2' onClick={submit}>
            Submit
          </Button>
        </div>
      </Form> */}
      <div className='max-w-xl w-full flex flex-col px-2'><SignaturePage></SignaturePage></div>

    </div>
  );
}

export default App;
