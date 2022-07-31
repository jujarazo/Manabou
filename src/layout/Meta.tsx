import Head from 'next/head';

const Meta = () => {
  return (
    <Head>
      <title>Manabou</title>
      <meta
        name="description"
        content="Save the japanese vocabulary you find in the wild"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export { Meta };
