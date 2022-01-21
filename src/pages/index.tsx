import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { SubscribeButton } from '../components'
import { stripe } from '../services/stripe';

import styles from '../styles/home.module.scss';

type StripeProps = {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: StripeProps) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
        <span>👏 Hey, welcome</span>
          <h1>
            News about <br />
            the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1KJz2ZErOOJYPOTSeQQen3PV', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', { 
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      price,
      product, 
    }
  }
}
