import React, { useState } from 'react';
import { images } from '../../constants';
import CommentForm from './CommentForm';
import { BsFillCaretDownFill } from 'react-icons/bs';

// 원댓글
const Comment = ({
  comment,
  loggedInUserId,
  affectedComment,
  setAffectedComment,
  addComment,
  parentId = null,
  updateComment,
  deleteComment,
  replies,
}) => {
  const isUserLoggedIn = Boolean(loggedInUserId); // 현재 사용자가 로그인이 되어있는지 확인
  const commentBelongsToUser = loggedInUserId === comment.user._id; // 로그인된 사용자가 댓글을 작성했는지 확인
  const isReplying = // 현재 댓글이 달리고 있는 상황인지 확인
    affectedComment &&
    affectedComment.type === 'replying' &&
    affectedComment._id === comment._id;
  const isEditing = // 현재 댓글을 수정하고 있는 상황인지 확인
    affectedComment &&
    affectedComment.type === 'editing' &&
    affectedComment._id === comment._id;
  const repliedCommentId = parentId ? parentId : comment._id; // 대댓글의 아이디
  const replyOnUserId = comment.user._id; // 대댓글의 유저 아이디

  const [clicked, setClicked] = useState(false);

  const renderReplies = () => {
    return replies.map((reply) => (
      <Comment
        key={reply._id}
        addComment={addComment}
        affectedComment={affectedComment}
        setAffectedComment={setAffectedComment}
        comment={reply}
        deleteComment={deleteComment}
        loggedInUserId={loggedInUserId}
        replies={[]}
        updateComment={updateComment}
        parentId={comment._id}
      />
    ));
  };

  return (
    <div className="flex items-start mt-3 bg-transparent flex-nowrap gap-x-3">
      <img
        src={images.PostProfileImage}
        alt="user profile"
        className="object-cover w-10 h-10 rounded-full"
      />
      <div className="flex flex-col flex-1 gap-1">
        <div className="flex items-center flex-1 gap-1">
          <h5 className="text-sm text-color ">{comment.user.name}</h5>
          <span className="text-lg primary-dot-2xl">·</span>
          <span className="text-sm opacity-50 text-color">
            {new Date(comment.createdAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </span>
        </div>
        {!isEditing && <p className="text-sm text-color">{comment.desc}</p>}
        {isEditing && (
          <CommentForm
            btnLabel="Update"
            formSubmitHandler={(value) => updateComment(value, comment._id)}
            formCancelHandler={() => setAffectedComment(null)}
            initialText={comment.desc}
          />
        )}
        <div className="flex items-center my-1 gap-x-1 ">
          {isUserLoggedIn && (
            <button
              className="mr-2 rounded-full secondary-button-xs"
              onClick={() =>
                setAffectedComment({ type: 'replying', _id: comment._id })
              }
            >
              Reply
            </button>
          )}
          {commentBelongsToUser && (
            <>
              <button
                className="flex items-center text-xs font-semibold opacity-50 text-color font-crimson hover-text hover:opacity-100"
                onClick={() =>
                  setAffectedComment({
                    type: 'editing',
                    _id: comment._id,
                  })
                }
              >
                Edit
              </button>
              <span className="text-base primary-dot-2xl">·</span>
              <button
                className="flex items-center text-xs font-semibold opacity-50 text-color font-crimson hover-text hover:opacity-100"
                onClick={() => deleteComment(comment._id)}
              >
                Delete
              </button>
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            btnLabel="Reply"
            formSubmitHandler={(value) =>
              addComment(value, repliedCommentId, replyOnUserId)
            }
            formCancelHandler={() => setAffectedComment(null)}
          />
        )}
        {replies.length > 0 && (
          <div>
            <button
              onClick={() => setClicked(!clicked)}
              className="flex items-center gap-3"
            >
              <span>
                <BsFillCaretDownFill
                  className={`transition-transform ${
                    clicked ? 'transform rotate-180' : ''
                  }`}
                />
              </span>{' '}
              <span
                className={`text-sm hover-text ${
                  clicked
                    ? 'font-sans text-transparent transition-all duration-200 bg-clip-text bg-gradient-to-tr from-primaryColor-fromColor to-primaryColor-toColor'
                    : 'text-color'
                }`}
              >
                Replies {replies.length}
              </span>
            </button>
            {clicked && renderReplies()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
