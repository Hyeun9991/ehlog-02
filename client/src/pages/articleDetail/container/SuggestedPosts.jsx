import React from 'react';
import { images } from '../../../constants';
import EmptyImage from '../../../components/EmptyImage';

const postsData = [
  {
    id: 1,
    name: 'qkrdmsgp_eh',
    date: 'Jul 4',
    title: 'post 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur veniam eius expedita quo dolores vero! Hic, corporis veritatis a eaque nihil, ad sed aut officia aperiam obcaecati distinctio. Et a quibusdam officiis deleniti eos earum doloribus non fugiat maiores eaque!',
    imgPath: 'img',
    profileImagePath: <div className="w-5 h-5 bg-black rounded-full"></div>,
    commentCount: '0',
  },
  {
    id: 2,
    name: 'qkrdmsgp_eh',
    date: 'Jul 4',
    title: 'post 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sed ab corrupti consequatur non! Quae optio voluptas beatae quis exercitationem, delectus fugiat. Qui voluptatem unde illo aspernatur eaque atque odio, sapiente vitae amet odit repudiandae molestias voluptate dicta modi temporibus placeat, deleniti dolorem distinctio perferendis officia dolor? Exercitationem, omnis voluptatum est, temporibus modi, impedit architecto aliquam deserunt ipsum magni voluptatibus sed nulla. Maiores distinctio iste ad soluta earum officiis fuga ducimus blanditiis, vero pariatur laboriosam aspernatur optio ea animi nam.',
    imgPath: '',
    profileImagePath: <div className="w-5 h-5 bg-black rounded-full"></div>,
    commentCount: '0',
  },
  {
    id: 3,
    name: 'qkrdmsgp_eh',
    date: 'Jul 3',
    title: 'post 3',
    content: 'content 3',
    imgPath: 'img',
    profileImagePath: <div className="w-5 h-5 bg-black rounded-full"></div>,
    commentCount: '4',
  },
  {
    id: 5,
    name: 'qkrdmsgp_eh',
    date: 'Jul 5',
    title: 'post 5',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sed ab corrupti consequatur non! Quae optio voluptas beatae quis exercitationem, delectus fugiat. Qui voluptatem unde illo aspernatur eaque atque odio, sapiente vitae amet odit repudiandae molestias voluptate dicta modi temporibus placeat, deleniti dolorem distinctio perferendis officia dolor? Exercitationem, omnis voluptatum est, temporibus modi, impedit architecto aliquam deserunt ipsum magni voluptatibus sed nulla. Maiores distinctio iste ad soluta earum officiis fuga ducimus blanditiis, vero pariatur laboriosam aspernatur optio ea animi nam.',
    imgPath: '',
    profileImagePath: <div className="w-5 h-5 bg-black rounded-full"></div>,
    commentCount: '0',
  },
  {
    id: 6,
    name: 'qkrdmsgp_eh',
    date: 'Jul 6',
    title: 'post 6',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sed ab corrupti consequatur non! Quae optio voluptas beatae quis exercitationem, delectus fugiat. Qui voluptatem unde illo aspernatur eaque atque odio, sapiente vitae amet odit repudiandae molestias voluptate dicta modi temporibus placeat, deleniti dolorem distinctio perferendis officia dolor? Exercitationem, omnis voluptatum est, temporibus modi, impedit architecto aliquam deserunt ipsum magni voluptatibus sed nulla. Maiores distinctio iste ad soluta earum officiis fuga ducimus blanditiis, vero pariatur laboriosam aspernatur optio ea animi nam.',
    imgPath: '',
    profileImagePath: <div className="w-5 h-5 bg-black rounded-full"></div>,
    commentCount: '0',
  },
  {
    id: 7,
    name: 'qkrdmsgp_eh',
    date: 'Jul 7',
    title: 'post 7',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sed ab corrupti consequatur non! Quae optio voluptas beatae quis exercitationem, delectus fugiat. Qui voluptatem unde illo aspernatur eaque atque odio, sapiente vitae amet odit repudiandae molestias voluptate dicta modi temporibus placeat, deleniti dolorem distinctio perferendis officia dolor? Exercitationem, omnis voluptatum est, temporibus modi, impedit architecto aliquam deserunt ipsum magni voluptatibus sed nulla. Maiores distinctio iste ad soluta earum officiis fuga ducimus blanditiis, vero pariatur laboriosam aspernatur optio ea animi nam.',
    imgPath: '',
    profileImagePath: <div className="w-5 h-5 bg-black rounded-full"></div>,
    commentCount: '0',
  },
  {
    id: 8,
    name: 'qkrdmsgp_eh',
    date: 'Jul 8',
    title: 'post 8',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sed ab corrupti consequatur non! Quae optio voluptas beatae quis exercitationem, delectus fugiat. Qui voluptatem unde illo aspernatur eaque atque odio, sapiente vitae amet odit repudiandae molestias voluptate dicta modi temporibus placeat, deleniti dolorem distinctio perferendis officia dolor? Exercitationem, omnis voluptatum est, temporibus modi, impedit architecto aliquam deserunt ipsum magni voluptatibus sed nulla. Maiores distinctio iste ad soluta earum officiis fuga ducimus blanditiis, vero pariatur laboriosam aspernatur optio ea animi nam.',
    imgPath: '',
    profileImagePath: <div className="w-5 h-5 bg-black rounded-full"></div>,
    commentCount: '0',
  },
];

const SuggestedPosts = () => {
  return (
    <section className="bg-secondColor-light/5 dark:bg-secondColor-dark/5 border-bottom-2">
      <div className="w-full main-container">
        <h2 className="pb-6 title-2xl">
          More from qkrdmsgp_eh
          <span className="text-4xl primary-dot-2xl">.</span>
        </h2>
        <ul className="grid grid-cols-1 pt-8 md:p-4 gap-x-8 gap-y-8 sm:gap-y-14 md:grid-cols-2 xl:grid-cols-4">
          {postsData.map((post) => (
            <li key={post.id} className="flex flex-col border-full-2">
              {/* Post Preview Image */}
              {post?.imgPath ? (
                <div className="w-full">
                  <div className="">
                    <img
                      src={images.PostImage}
                      alt="postImage"
                      className="w-full h-[251.66px] sm:h-[173.33px] md:h-[190px]"
                    />
                  </div>
                </div>
              ) : (
                <EmptyImage className="h-[251.66px] sm:h-[173.33px] md:h-[190px]" />
              )}

              {/* Post Info */}
              <div className="flex-1 p-4 border-bottom-2">
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold font-nanum">{post.title}</p>
                  <p className="overflow-hidden text-xs leading-6 whitespace-normal sm:text-sm line-clamp-2 text-color opacity-80">
                    {post.content}
                  </p>
                </div>
              </div>

              {/* Written Info */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <div className="mr-1">{post.profileImagePath}</div>
                  <span className="text-xs font-crimson text-textColor-light/40 dark:text-textColor-dark/40">
                    by
                  </span>
                  <p className="text-xs font-semibold text-color">
                    {post.name}{' '}
                    <span className="text-base leading-3 text-primary-gradient">
                      .
                    </span>
                  </p>
                </div>
                <div className="flex gap-1.5 items-center">
                  <span className="text-xs font-crimson text-color opacity-40">
                    {post.date}
                  </span>
                  <span className="text-primary-gradient">·</span>
                  <span className="text-xs text-color opacity-40">
                    {post.commentCount}개의 댓글
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center pt-14">
          <button className="secondary-button-sm sm:secondary-button">
            See all from qkrdmsgp_eh <span className="primary-dot-2xl">.</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuggestedPosts;
