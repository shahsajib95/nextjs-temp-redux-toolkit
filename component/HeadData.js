import Head from "next/head";

const HeadData = ({ title, description, image }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default HeadData;
