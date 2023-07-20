import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import SuggestedPosts from './container/SuggestedPosts';
import PostInfo from './container/PostInfo';
import CommentsContainer from '../../components/comments/CommentsContainer';

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <PostInfo />
      <CommentsContainer loggedInUserId="a" />
      <SuggestedPosts />
    </MainLayout>
  );
};

export default ArticleDetailPage;
