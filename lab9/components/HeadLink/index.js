import Head from 'next/head';
import Link from 'next/link';

const Links = () => {
    return (
        <div>
            <Head>
                <title>POKEMON!</title>
            </Head>
            <Link href="/home">
                <a></a>
            </Link>
            <Link href="/id">
                <a></a>
            </Link>
            <Link href="/name">
                <a></a>
            </Link>
            <Link href="/type">
                <a></a>
            </Link>
        </div>
    )
}

export default Links;