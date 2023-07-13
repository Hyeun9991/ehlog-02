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
      <div className="flex flex-col gap-5 main-container">
        {/* BreadCrumbs */}
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
        </article>

        {/* Preview Image */}
        {/* <img src={images.PostImage} alt="post" className="w-full" /> */}
        <EmptyImage className="h-[350px]" />

        {/* Post Title */}
        <h1 className="pt-4 text-3xl sm:pt-8 md:text-4xl title-2xl">
          게시글 제목 Post Title 1
          <span className="text-4xl primary-dot-2xl"> .</span>
        </h1>

        {/* Writer Info */}
        <div className="flex items-center gap-2">
          <img src={images.PostProfileImage} alt="profile" className="w-10" />
          <div className="flex items-center gap-1 text-sm text-textColor-light dark:text-textColor-dark">
            <span>qkrdmsgp_eh</span>
            <span className="primary-dot-2xl">·</span>
            <span className="opacity-60 ">Jul 5</span>
          </div>
        </div>

        {/* Post Content */}
        <div className="flex flex-col gap-8 pt-8 text-lg font-semibold leading-8 border-t pb-14 font-nanum">
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
        <div>
          <ul className="flex flex-wrap gap-x-1 gap-y-4 sm:gap-y-6">
            <li>
              <Link className="/blog?category=selectedCategory font-semibold text-xs px-4 py-2 sm:text-sm  sm:px-6 sm:py-2.5 rounded-full text-textColor-light font-crimson dark:text-textColor-dark  border-2 border-secondColor-light hover:bg-transparent hover:font-sans hover:text-primary-gradient">
                Education
              </Link>
            </li>
            <li>
              <Link className="/blog?category=selectedCategory font-semibold text-xs px-4 py-2 sm:text-sm  sm:px-6 sm:py-2.5 rounded-full text-textColor-light font-crimson dark:text-textColor-dark  border-2 border-secondColor-light hover:bg-transparent hover:font-sans hover:text-primary-gradient">
                EducationEducation
              </Link>
            </li>
            <li>
              <Link className="/blog?category=selectedCategory font-semibold text-xs px-4 py-2 sm:text-sm  sm:px-6 sm:py-2.5 rounded-full text-textColor-light font-crimson dark:text-textColor-dark  border-2 border-secondColor-light hover:bg-transparent hover:font-sans hover:text-primary-gradient">
                Educa
              </Link>
            </li>
            <li>
              <Link className="/blog?category=selectedCategory font-semibold text-xs px-4 py-2 sm:text-sm  sm:px-6 sm:py-2.5 rounded-full text-textColor-light font-crimson dark:text-textColor-dark  border-2 border-secondColor-light hover:bg-transparent hover:font-sans hover:text-primary-gradient">
                Educationtiontion
              </Link>
            </li>
            <li>
              <Link className="/blog?category=selectedCategory font-semibold text-xs px-4 py-2 sm:text-sm  sm:px-6 sm:py-2.5 rounded-full text-textColor-light font-crimson dark:text-textColor-dark  border-2 border-secondColor-light hover:bg-transparent hover:font-sans hover:text-primary-gradient">
                Edu
              </Link>
            </li>
            <li>
              <Link className="/blog?category=selectedCategory font-semibold text-xs px-4 py-2 sm:text-sm  sm:px-6 sm:py-2.5 rounded-full text-textColor-light font-crimson dark:text-textColor-dark  border-2 border-secondColor-light hover:bg-transparent hover:font-sans hover:text-primary-gradient">
                Educa
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PostInfo;
