import Head from "next/head";

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
        <meta
          name="google-site-verification"
          content="hlPu7lB022DbQnOkXVM1QHT1uZ1FVl_IN9yOuDOeHt0"
        />
      </Head>
      <main className={`main`}>{children}</main>
    </>
  );
}
