
import React from 'react';
import SignatureComponent from '../components/SignatureComponent';
import { Checkbox, Form, Input } from 'antd';

const SignaturePage = () => {
    const [form] = Form.useForm(); //Correct form initialization

    const today = new Date();
    // Get day, month, and year
    const day = today.getDate();
    const month = today.getMonth() + 1; // Months are 0-indexed
    const year = today.getFullYear();

    // Format the date as a string
    const formattedDate = `${day}/${month}/${year}`;

    return (
        <div className='flex flex-col' >
            <span className='text-3xl font-semibold mb-1 text-gray-800'>Confirm Details</span>
            <span className='text-base font-medium mb-10 text-gray-600'>Please confirm your name, position and signature.</span>

            <Form
                form={form}
                name="basic"
                autoComplete="off"
                className='w-full flex flex-col '
            >
                <div className=' w-full flex flex-col '>
                    <label htmlFor="name" className="block text-base font-semibold text-gray-800 mb-1">
                        Full Name <span className='text-red-500'>*</span>
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
                        <Input id='name' className="w-full text-lg" />
                    </Form.Item>

                </div>

                <div className=' w-full flex flex-col '>
                    <label htmlFor="position" className="block text-base font-semibold text-gray-800 mb-1">
                        Position <span className='text-red-500'>*</span>
                    </label>
                    <Form.Item
                        name="position"
                        className='w-full'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your position!',
                            },
                        ]}
                    >
                        <Input id='position' className="w-full text-lg" />
                    </Form.Item>

                </div>

                <div className=' w-full flex flex-col '>
                    <label htmlFor="terms" className="block text-base font-semibold text-gray-800 mb-1">
                        Terms and Conditions  <span className='text-red-500'>*</span>
                    </label>
                    <span className='text-sm text-neutral-600'>
                        As the director, representative, associate, partner, manager, or administrator of the company identified above, i declare
                        that the information provided on this record is correct and complete in all respects. I take full responsibility for any
                        erroneous information provided.
                    </span>

                    <Form.Item
                        name="position"
                        class="flex items-center my-5"
                        rules={[
                            {
                                required: true,
                                message: 'Please agree to the terms and conditions',
                            },
                        ]}
                    >
                        <Checkbox id="link-checkbox" />
                        <label for="link-checkbox" class="ms-2 text-sm font-medium text-black">I agree with the terms and conditions.</label>

                    </Form.Item>


                </div>
            </Form>


            <label htmlFor="signature" className="block text-base font-semibold text-gray-800 mb-1 flex">
                Signature <span className='text-red-500'>*</span>
                <span className='ml-auto text-sm font-medium text-neutral-600'>Date: {formattedDate}</span>
            </label>
            <SignatureComponent></SignatureComponent>
            <span className='text-sm text-neutral-600 mt-1'>
                By providing your electronic signature and initials, you acknowledge that they are legally binding and equivalent to a physical signature.
            </span>
        </div>
    );
};

export default SignaturePage;