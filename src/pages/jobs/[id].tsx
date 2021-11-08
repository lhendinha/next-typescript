import React from "react";
import { GetStaticPaths, GetStaticProps, GetServerSideProps } from "next";

type JobItem = {
  id: string;
};

export default function JobItem(props: JobItem) {
  return <div>{props.id}</div>;
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      id: context.params?.id,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [
      {
        params: {
          id: "10-a",
        },
      },
    ],
    fallback: false,
  };
};
