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
  },
  {
    id: 3,
    name: 'qkrdmsgp_eh',
    date: 'Jul 4',
    title: 'post 3',
    content: 'content 3',
    imgPath: 'img',
    profileImagePath: <div className="w-5 h-5 bg-black rounded-full"></div>,
  },
  {
    id: 4,
    name: 'qkrdmsgp_eh',
    date: 'Jul 4',
    title: 'post 4',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sed ab corrupti consequatur non! Quae optio voluptas beatae quis exercitationem, delectus fugiat. Qui voluptatem unde illo aspernatur eaque atque odio, sapiente vitae amet odit repudiandae molestias voluptate dicta modi temporibus placeat, deleniti dolorem distinctio perferendis officia dolor? Exercitationem, omnis voluptatum est, temporibus modi, impedit architecto aliquam deserunt ipsum magni voluptatibus sed nulla. Maiores distinctio iste ad soluta earum officiis fuga ducimus blanditiis, vero pariatur laboriosam aspernatur optio ea animi nam.',
    imgPath: '',
    profileImagePath: <div className="w-5 h-5 bg-black rounded-full"></div>,
  },
];

const SuggestedPosts = () => {
  return (
    <section className="bg-secondColor-light/5 dark:bg-secondColor-dark/5 border-bottom-2">
      <div className="main-container">
        <h2 className="font-medium">
          More from qkrdmsgp_eh <span className="primary-dot-2xl">.</span>
        </h2>
        <ul className="grid grid-cols-1 pt-8 gap-x-8 gap-y-8 sm:gap-y-14 sm:grid-cols-2">
          {postsData.map((post) => (
            <li key={post.id} className="flex flex-col gap-4 pb-4 sm:p-0">
              {/* Post Preview Image */}
              {post?.imgPath ? (
                <div className="w-full">
                  <div className="">
                    <img
                      src={images.PostImage}
                      alt="postImage"
                      className="w-full"
                    />
                  </div>
                </div>
              ) : (
                // <div className="w-full h-[251.66px] sm:h-[173.33px] md:h-[190px] bg-black"></div>
                <EmptyImage className="h-[251.66px] sm:h-[173.33px] md:h-[190px]" />
              )}

              {/* Written Info */}
              <div className="flex items-center gap-2 mt-2">
                <div>{post.profileImagePath}</div>
                <p className="text-sm text-textColor-light dark:text-textColor-dark">
                  {post.name}{' '}
                  <span className="text-2xl leading-3 text-primary-gradient">
                    {' '}
                    .
                  </span>
                </p>
              </div>

              {/* Post Info */}
              <div className="flex flex-col gap-2">
                <p className="text-xl font-bold">{post.title}</p>
                <p className="overflow-hidden text-sm leading-6 whitespace-normal text-textColor-light/60 sm:text-base line-clamp-2 dark:text-textColor-dark/60">
                  {post.content}
                </p>
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
