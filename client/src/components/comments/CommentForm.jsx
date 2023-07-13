import React, { useState } from 'react';
import { images } from '../../constants';

const CommentForm = ({ formSubmitHandler, btnLabel }) => {
  const [value, setValue] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    formSubmitHandler(value); // textarea value를 인자로 전달
    setValue('');
  };

  return (
    <form onSubmit={submitHandler} className="border-full-2">
      {/* Login User Info */}
      <div className="flex items-center gap-2 p-3">
        <img src={images.PostProfileImage} alt="profile" className="w-8" />
        <p className="text-sm">
          qkrdmsgp_eh
          <span className="text-lg leading-3 primary-dot-2xl"> .</span>
        </p>
      </div>

      {/* Form */}
      <div>
        <textarea
          className="w-full p-3 font-sans bg-transparent resize-none focus:outline-none placeholder:font-crimson placeholder:opacity-50"
          placeholder="What are your thoughts?"
          rows="3"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex justify-end gap-3 p-3 text-sm font-semibold font-crimson">
          <button className="hover:font-sans">Cancel</button>
          <button
            className="opacity-70 primary-active-button-long hover:font-sans"
            type="submit"
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
