import Head from 'next/head';
import Link from 'next/link';
import LottieErrorAnimation from '../../components/LottieErrorAnimation';
import { productsDatabase } from '../../database/products';
import { mainStyles } from '../../util/styles';

export default function Product(props) {
  console.log(props.product);
  console.log('props.error:', props.error);

  if (props.error) {
    return (
      <div className="error-page-wrap">
        <div id="error-message-wrap">
          <LottieErrorAnimation />
          <h1>Page not found...</h1>
          <div>
            <Link href="/products">
              <a className="main-button">See our products</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Product page</title>
        <meta name="description" content="Product page" />
      </Head>
    </div>
  );
}

export function getServerSideProps(context) {
  const productId = context.params.productId;
  const products = productsDatabase;

  const currentProduct = products.find((product) => {
    return product.id === productId;
  });

  if (typeof currentProduct === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Product not found',
      },
    };
  }

  return {
    props: {
      product: currentProduct,
    },
  };
}
