import React from 'react';
import { images } from '../../../constants';
import BreadCrumbs from '../../../components/BreadCrumbs';
import EmptyImage from '../../../components/EmptyImage';
import { Link } from 'react-router-dom';

const breadCrumbsData = [
  {
    id: 1,
    name: 'Home',
    to: '/',
  },
  {
    id: 2,
    name: 'Blog',
    to: '/blog',
  },
  {
    id: 3,
    name: 'Article title',
    to: '/blog/1',
  },
];

const PostInfo = () => {
  return (
    <section className="min-h-screen bg-bgColor-light dark:bg-bgColor-dark">
      <div className="relative flex items-center justify-end h-[350px]">
        <EmptyImage className="absolute object-cover h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
        <article className="absolute flex-1 transform -translate-x-1/2 top-10 left-1/2">
          <BreadCrumbs data={breadCrumbsData} />
        </article>
        <div className="absolute bottom-0 flex flex-col items-center gap-3 transform -translate-x-1/2 main-container left-1/2">
          <h1 className="text-2xl sm:text-3xl font-nanum md:text-4xl lg:text-5xl title-2xl">
            게시글 제목 Post Title 1
            <span className="text-4xl leading-3 primary-dot-2xl"> .</span>
          </h1>
          <div className="flex gap-1.5">
            <span className="text-xs font-crimson text-textColor-light/40 dark:text-textColor-dark/40">
              by
            </span>
            <p className="font-sans text-xs font-light text-color">
              qkrdmsgp_eh
              <span className="text-xl leading-3 primary-dot-2xl"> ·</span>
            </p>
            <span className="text-xs font-light text-textColor-light/40 dark:text-textColor-dark/40">
              1시간전
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 main-container">
        {/* BreadCrumbs */}

        {/* Preview Image */}
        {/* <img src={images.PostImage} alt="post" className="w-full" /> */}

        {/* Post Title */}
        {/* <h1 className="pt-4 text-3xl sm:pt-8 md:text-4xl title-2xl">
            게시글 제목 Post Title 1
            <span className="text-4xl primary-dot-2xl"> .</span>
          </h1> */}

        {/* Writer Info */}
        {/* <div className="flex items-center gap-2">
            <img src={images.PostProfileImage} alt="profile" className="w-10" />
            <div className="flex items-center gap-1 text-sm text-textColor-light dark:text-textColor-dark">
              <span>qkrdmsgp_eh</span>
              <span className="primary-dot-2xl">·</span>
              <span className="opacity-60 ">Jul 5</span>
            </div>
          </div> */}

        {/* Post Content */}
        <div className="flex flex-col gap-8 pb-8 text-lg leading-8">
          <p>
            한글도 한 줄 <br /> Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptas facilis harum cupiditate rerum
            necessitatibus enim odit mollitia accusantium similique aperiam
            eveniet ipsa quaerat adipisci vitae, placeat magnam atque! Iste,
            omnis! Iure dolore repellendus iusto at impedit inventore illo, qui
            fuga earum temporibus, perferendis molestias voluptas? Non facilis
            error similique tempora ad a corporis delectus inventore iste quidem
            neque repudiandae rerum aliquid accusantium voluptate alias quasi
            asperiores nesciunt natus optio, dolore id perspiciatis? Provident
            cumque, animi ab ullam explicabo placeat totam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            debitis repellat voluptatum sed, sit iure expedita nulla dignissimos
            provident eius, exercitationem, odit reiciendis consectetur labore
            doloremque eum inventore. Dignissimos, dolorem!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            debitis repellat voluptatum sed, sit iure expedita nulla dignissimos
            provident eius, exercitationem, odit reiciendis consectetur labore
            doloremque eum inventore. Dignissimos, dolorem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            debitis repellat voluptatum sed, sit iure expedita nulla dignissimos
            provident eius, exercitationem, odit reiciendis consectetur labore
            doloremque eum inventore. Dignissimos, dolorem!
          </p>
        </div>

        {/* Category */}
        <ul className="flex flex-wrap gap-x-1 gap-y-4 sm:gap-y-6">
          <li>
            <Link className="/blog?category=selectedCategory px-6 rounded-full secondary-button-sm">
              Education
            </Link>
          </li>
          <li>
            <Link className="/blog?category=selectedCategory px-6 rounded-full secondary-button-sm">
              EducationEducation
            </Link>
          </li>
          <li>
            <Link className="/blog?category=selectedCategory px-6 rounded-full secondary-button-sm">
              Educa
            </Link>
          </li>
          <li>
            <Link className="/blog?category=selectedCategory px-6 rounded-full secondary-button-sm">
              Educationtiontion
            </Link>
          </li>
          <li>
            <Link className="/blog?category=selectedCategory px-6 rounded-full secondary-button-sm">
              Edu
            </Link>
          </li>
          <li>
            <Link className="/blog?category=selectedCategory px-6 rounded-full secondary-button-sm">
              Educa
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PostInfo;
