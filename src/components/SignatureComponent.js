import { Button, Tooltip } from 'antd';
import React, { useRef, useState } from 'react';
import SignaturePad from 'react-signature-canvas';

const SignatureComponent = () => {
  const sigPadRef = useRef(null);
  const [trimmedDataURL, setTrimmedDataURL] = useState(null);

  const clearSignature = () => {
    sigPadRef.current.clear();
    setTrimmedDataURL(null);
  };

  const trimSignature = () => {
    const trimmedCanvas = sigPadRef.current.getTrimmedCanvas();
    const dataURL = trimmedCanvas.toDataURL('image/png');
    setTrimmedDataURL(dataURL);
  };

  return (
    <div className='relative border-neutral-300 border border-solid rounded-md'>
      <Tooltip placement="top" title={'Clear Signature'} >
        <div className='z-50 right-0 m-1 absolute hover:bg-neutral-300 rounded' onClick={clearSignature}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
      </Tooltip>
      <div className='p-3'>
        <SignaturePad
          ref={sigPadRef}
          onEnd={trimSignature}
          canvasProps={{ className: 'max-w-xl w-full h-[15rem]' }}
        />
      </div>

    </div>
  );
};

export default SignatureComponent;