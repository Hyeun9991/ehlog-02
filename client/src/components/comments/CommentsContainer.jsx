import React, { useEffect, useState } from 'react';
import { getCommentsData } from '../../data/comments';
import CommentForm from './CommentForm';
import Comment from './Comment';

const CommentsContainer = ({ className, loggedInUserId }) => {
  const [comments, setComments] = useState([]);
  const [affectedComment, setAffectedComment] = useState(null);

  // 기본 댓글
  const mainComments = comments.filter((comment) => comment.parent === null);

  console.log(comments);

  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })();
  }, []);

  // 댓글 추가
  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: Math.random().toString(),
      user: {
        _id: 'a',
        name: 'Apple',
      },
      desc: value,
      post: '1',
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: new Date().toISOString(),
    };
    setComments((curState) => {
      return [newComment, ...curState];
    });
    setAffectedComment(null);
  };

  // 댓글 수정
  const updateCommentHandler = (value, commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment._id === commentId) {
        return { ...comment, desc: value };
      }

      return comment;
    });
    setComments(updatedComments);
    setAffectedComment(null);
  };

  // 댓글 삭제
  const deleteCommentHandler = (commentId) => {
    const updatedComments = comments.filter((comment) => {
      return comment._id !== commentId;
    });
    setComments(updatedComments);
  };

  const getRepliesHandler = (commentId) => {
    return comments
      .filter((comment) => comment.parent === commentId)
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
  };

  return (
    <div className="bg-bgColor-light dark:bg-bgColor-dark border-bottom-2">
      <div className={`${className} px-4 main-container sm:px-0`}>
        <p className="mb-6 text-sm">댓글 1490개</p>
        <CommentForm
          btnLabel="Respond"
          formSubmitHandler={(value) => addCommentHandler(value)}
        />
        <div className="mt-8 space-y-4">
          {mainComments.map((comment) => (
            <Comment
              key={comment._id}
              comment={comment}
              loggedInUserId={loggedInUserId}
              affectedComment={affectedComment}
              setAffectedComment={setAffectedComment}
              addComment={addCommentHandler}
              updateComment={updateCommentHandler}
              deleteComment={deleteCommentHandler}
              replies={getRepliesHandler(comment._id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentsContainer;
