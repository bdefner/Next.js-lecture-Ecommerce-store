export default function Product() {
  if (props.error) {
    return (
      <div>
        <Head>
          <title>Product not found</title>
          <meta name="description" content="Product not found" />
        </Head>
        <h1>{props.error}</h1>
        Sorry, try the <Link href="/products">Products page</Link>
      </div>
    );
  }
  return <></>;
}

export function getServerSideProps() {
  return {
    props: {},
  };
}
