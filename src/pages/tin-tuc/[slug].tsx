import { GetStaticPaths } from "next";
import useSWR from "swr";
import { IBlog } from "@/models/news";
import { Header } from "@/components/Header";
import { SmartFeature } from "@/components/SmartFeature";
import React from "react";
import { Footer } from "@/components/Footer";
import { NewCard } from "@/components/NewCard";

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/posts`);
  const posts = await res.json();

  const paths = posts.map((post: IBlog) => ({
    params: { slug: post.slug.toString() },
  }));

  return { paths, fallback: "blocking" };
};

export async function getStaticProps({ params }: { params: any }) {
  const resDetailPost = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts?slug=${params?.slug}`
  ).then((res) => res.json());

  const resPosts = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts`
  ).then((res) => res.json());

  return {
    props: {
      post: resDetailPost,
      allPost: resPosts,
    },
    revalidate: 60,
  };
}
const NewDetail = (props: { post: IBlog[]; allPost: IBlog[] }) => {
  const { post, allPost } = props || {};
  const { content, title, date } = (post && post[0]) || {};

  const textSection = `text-main relative text-uppercase text-5xl my-0  after after:absolute after:top-[50%] after:left-[20%] after:translate-y-[-50%] after:content-[''] after:w-[20rem] after:h-[0.1rem] after:bg-main before:absolute before:top-[50%] before:right-[20%] before:translate-y-[-50%] before:content-[''] before:w-[20rem] before:h-[0.1rem] before:bg-main mobile:after:opacity-0 mobile:before:opacity-0 tablet:after:opacity-100 tablet:before:opacity-100 `;

  return (
    <React.Fragment>
      <Header />
      <SmartFeature />
      <main className="max-w-9/10 mx-auto ">
        <section className="flex flex-col text-center my-[10rem]">
          <h3 className={`relative  text-5xl text-uppercase text-black`}>
            {title?.rendered}
          </h3>
          <div
            className="text-2xl"
            dangerouslySetInnerHTML={{ __html: content?.rendered as string }}
          />

          <h3 className={`${textSection} my-[4rem]`}>Tin tức liên quan</h3>
          <div className="grid mobile:grid-cols-1  tablet:grid-cols-2 mobile:gap-[2rem] tablet:gap-[5rem] ">
            {allPost &&
              allPost.map((blog) => {
                return <NewCard key={blog.id} data={blog} />;
              })}
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default NewDetail;
