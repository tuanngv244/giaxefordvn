import React from "react";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { NextPageLayout } from "@/models";
import MainLayout from "@/components/layout/main";

const PostDetailPage: NextPageLayout = (props: any) => {
  const { data } = props || {};
  const router = useRouter();

  if (router.isFallback)
    return <div className="p-[100px]">Loading time...!</div>;
  return (
    <div className="p-[100px] flex flex-col gap-[20px]">
      <div className="text-3xl bold"> {data?.id}</div>
      <div> {data?.author}</div>
      <div> {data?.description}</div>
    </div>
  );
};

interface PostDetailPageProps {
  data: any;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const { data } = await res.json();
  return {
    paths: data?.map((d: any) => ({ params: { id: d?.id } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postId = context?.params?.id;
  console.log(context, postId);
  if (!postId) return { notFound: true };
  const res = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );
  const data = await res?.json();
  return {
    props: {
      data: data,
    },
    revalidate: 60,
  };
};

PostDetailPage.Layout = MainLayout;

export default PostDetailPage;
