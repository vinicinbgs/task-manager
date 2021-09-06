import Head from 'next/head'

type Props = {
  title?: string,
  description?: string
}

const Header: React.FC<Props> = ({ title, description }: Props): JSX.Element => {

  return (
    <Head>
        <title>{ title ?? 'Home'}</title>
        <meta name="description" content={ description ?? 'App'} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Header;