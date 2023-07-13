import React from 'react';
import CommentForm from './CommentForm';
import getCommentsData from './comments';

const CommentsContainer = ({ className }) => {
  // 전달받은 인자(text = value)는 addCommentHandler() value로 들어감.
  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: '10',
      user: {
        _id: 'a',
        name: 'Apple',
      },
      desc: '사과 좋아해!!',
      post: '1',
      parent: null,
      replyOnUser: null,
      createdAt: '2023-07-10',
    };
  };

  return (
    <div className="bg-bgColor-light dark:bg-bgColor-dark">
      <div className={`${className} px-4 pb-24 secondary-container sm:px-0`}>
        <CommentForm
          btnLabel="Respond"
          formSubmitHandler={(value) => addCommentHandler(value)}
        />
      </div>
    </div>
  );
};

export default CommentsContainer;
