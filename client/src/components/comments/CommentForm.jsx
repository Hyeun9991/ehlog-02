import React, { useState, useRef, useCallback, useEffect } from 'react';
import { images } from '../../constants';

const CommentForm = ({
  formSubmitHandler,
  btnLabel,
  formCancelHandler = null,
  initialText = '',
}) => {
  const textRef = useRef();

  const [value, setValue] = useState(initialText);
  const [clicked, setClicked] = useState(false);
  const [resetForm, setResetForm] = useState(false);

  // form의 value를 부모 컴포넌트인 Comment로 전달
  const submitHandler = (event) => {
    event.preventDefault();
    formSubmitHandler(value); // textarea value를 인자로 전달
    setValue('');
    setResetForm(true); // form을 reset하기 위해 resetForm 상태를 true로 설정
    // event.target.reset();
  };

  // form 초기화
  const handleReset = () => {
    setClicked(false);
    setValue('');
    setResetForm(true); // form을 reset하기 위해 resetForm 상태를 true로 설정
  };

  useEffect(() => {
    if (resetForm) {
      textRef.current.style.height = 'auto'; // form reset 전에 textarea의 높이를 자동으로 조절하기 위해 초기화
      setResetForm(false); // resetForm 상태를 다시 false로 설정하여 초기화 완료
    }
  }, [resetForm]);

  // textarea 크기 자동조절, input 될때마다 함수가 호출되므로 useCallback을 이용하여 함수를 재사용
  const handleResizeHeight = useCallback(() => {
    // Element.scrollHeight 읽기 전용 속성은 요소 콘텐츠의 총 높이를 나타내며, 바깥으로 넘쳐서 보이지 않는 콘텐츠도 포함
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, [[]]);

  return (
    <div className="flex items-start gap-3">
      <img
        src={images.PostProfileImage}
        alt="profile"
        className={`object-cover rounded-full 
        ${btnLabel === 'Reply' ? 'w-7.5' : 'w-10'} 
        ${btnLabel === 'Update' ? 'hidden' : ''} `}
      />
      <form onSubmit={submitHandler} className="flex flex-col flex-1 gap-3">
        <textarea
          ref={textRef}
          className="w-full py-1 font-sans text-sm bg-transparent resize-none border-bottom-2 focus:outline-none placeholder:font-crimson placeholder:opacity-50 focus:border-primaryColor-defaultColor"
          placeholder="What are your thoughts?"
          rows="1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onInput={handleResizeHeight}
          onClick={() => setClicked(!clicked)}
        />
        {clicked && (
          <div className="flex justify-end gap-3">
            {btnLabel === 'Respond' && (
              // 기본 댓글일때 Cancel 버튼
              <button
                className="text-sm opacity-50 hover:font-sans hover-text text-color hover:opacity-100"
                onClick={handleReset}
              >
                Cancel
              </button>
            )}
            {formCancelHandler && (
              // 대댓글일때 Cancel 버튼
              <button
                className="text-sm opacity-50 hover:font-sans hover-text text-color hover:opacity-100"
                onClick={formCancelHandler}
              >
                Cancel
              </button>
            )}
            <button className="opacity-70 primary-button-text" type="submit">
              {btnLabel}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default CommentForm;
