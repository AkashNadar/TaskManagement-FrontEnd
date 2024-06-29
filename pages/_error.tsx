import { NextPageContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface ErrorProps {
    statusCode: number;
}

const ErrorPage = ({ statusCode }: ErrorProps) => {

    // const router = useRouter();

    // useEffect(() => {
    //     if (statusCode === 404) {
    //         router.push('/');
    //     }
    // }, [statusCode, router]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
            </h1>
            <p>
                {statusCode === 404
                    ? 'The page you are looking for was not found.'
                    : 'Something went wrong.'}
            </p>
            <p>
                <Link href="/">
                    <a>Go back to Home</a>
                </Link>
            </p>
        </div>
    );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default ErrorPage;
