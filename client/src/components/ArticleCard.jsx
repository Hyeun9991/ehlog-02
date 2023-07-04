import React from 'react';
import { images } from '../constants';

const postsData = [
  {
    id: 1,
    name: 'qkrdmsgp_eh',
    date: 'Jul 4',
    title: 'post 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur veniam eius expedita quo dolores vero! Hic, corporis veritatis a eaque nihil, ad sed aut officia aperiam obcaecati distinctio. Et a quibusdam officiis deleniti eos earum doloribus non fugiat maiores eaque!',
    imgPath: 'img',
    profileImagePath: <div className="w-6 h-6 bg-black rounded-full">.</div>,
  },
  {
    id: 2,
    name: 'qkrdmsgp_eh',
    date: 'Jul 4',
    title: 'post 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sed ab corrupti consequatur non! Quae optio voluptas beatae quis exercitationem, delectus fugiat. Qui voluptatem unde illo aspernatur eaque atque odio, sapiente vitae amet odit repudiandae molestias voluptate dicta modi temporibus placeat, deleniti dolorem distinctio perferendis officia dolor? Exercitationem, omnis voluptatum est, temporibus modi, impedit architecto aliquam deserunt ipsum magni voluptatibus sed nulla. Maiores distinctio iste ad soluta earum officiis fuga ducimus blanditiis, vero pariatur laboriosam aspernatur optio ea animi nam.',
    imgPath: '',
    profileImagePath: <div className="w-6 h-6 bg-black rounded-full">.</div>,
  },
  {
    id: 3,
    name: 'qkrdmsgp_eh',
    date: 'Jul 4',
    title: 'post 3',
    content: 'content 3',
    imgPath: 'img',
    profileImagePath: <div className="w-6 h-6 bg-black rounded-full">.</div>,
  },
  {
    id: 4,
    name: 'qkrdmsgp_eh',
    date: 'Jul 4',
    title: 'post 4',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sed ab corrupti consequatur non! Quae optio voluptas beatae quis exercitationem, delectus fugiat. Qui voluptatem unde illo aspernatur eaque atque odio, sapiente vitae amet odit repudiandae molestias voluptate dicta modi temporibus placeat, deleniti dolorem distinctio perferendis officia dolor? Exercitationem, omnis voluptatum est, temporibus modi, impedit architecto aliquam deserunt ipsum magni voluptatibus sed nulla. Maiores distinctio iste ad soluta earum officiis fuga ducimus blanditiis, vero pariatur laboriosam aspernatur optio ea animi nam.',
    imgPath: '',
    profileImagePath: <div className="w-6 h-6 bg-black rounded-full">.</div>,
  },
  {
    id: 5,
    name: 'qkrdmsgp_eh',
    date: 'Jul 5',
    title: 'post 5',
    content: 'content 5',
    imgPath: 'img',
    profileImagePath: <div className="w-6 h-6 bg-black rounded-full">.</div>,
  },
];

const ArticleCard = () => {
  return (
    <>
      {postsData.map((post, index) => (
        <div
          key={post.id}
          className={`flex flex-col gap-2 ${
            index !== postsData.length - 1 ? 'border-b' : ''
          } py-14`}
        >
          {/* Writer Info */}
          <div className="flex items-center gap-2">
            <div>{post.profileImagePath}</div>
            <div className="flex items-center gap-1 text-sm text-textColor-light dark:text-textColor-dark">
              <span>{post.name}</span>
              <span className="text-2xl text-primary-gradient">·</span>
              <span className="opacity-60 ">{post.date}</span>
            </div>
          </div>

          {/* Post Container */}
          <div className="flex justify-between gap-6 sm:gap-10">
            {/* Content */}
            <div className="flex flex-col w-full gap-2">
              <h1 className="text-lg font-semibold sm:text-xl">{post.title}</h1>
              <p className="overflow-hidden text-sm leading-6 whitespace-normal sm:text-base font-nanum line-clamp-3">
                {post.content}
              </p>
            </div>

            {/* Post Image */}
            {post?.imgPath && (
              <div className="flex items-center justify-center w-1/6">
                <div className="w-[80px] h-[56px] sm:w-[112px] sm:h-[112px]">
                  <img
                    src={images.PostImage}
                    alt="postImage"
                    className="object-none h-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ArticleCard;
