import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import SecondaryHeader from '../../components/Layout/Header/Section/SecondaryHeader';
import WriterInfo from './container/WriterInfo';
import SuggestedPosts from './container/SuggestedPosts';
import PostInfo from './container/PostInfo';
import CommentsContainer from '../../components/comments/CommentsContainer';

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <SecondaryHeader />
      <PostInfo />
      <CommentsContainer loggedInUserId="a" />
      <WriterInfo />
      <SuggestedPosts />
    </MainLayout>
  );
};

export default ArticleDetailPage;
