import Head from 'next/head';
import { useRouter } from "next/router";

const Meta = ({ title, keywords, description, useRootUrl }) => {
    const { asPath } = useRouter();

    return (
        <Head>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='title' content={title} />
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <meta name="robots" content="index,follow" />
            <meta name="copyright" content="Fixico FE" />
            <meta name="language" content="en_GB" />
            <meta name="author" content="Fixico FE, info@fixico.co.uk" />
            <meta name="reply-to" content="info@fixico.co.uk" />
            <meta name="url" content={process.env.SITE_URL} />
            <meta name="identifier-URL" content={process.env.SITE_URL} />
            <meta name="directory" content="submission" />
            <meta name="coverage" content="Worldwide" />
            <meta name="distribution" content="Global" />
            <meta name="rating" content="General" />

            <meta name="msapplication-starturl" content={process.env.SITE_URL} />
            <meta name="application-name" content="Fixico FE" />
            <meta name="msapplication-tooltip" content={description} />

            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta httpEquiv="content-language" content="en_GB" />
            <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
            <base href={process.env.SITE_URL} />

            <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:url" content={useRootUrl ? process.env.SITE_URL : getCurrentUrl(asPath)} /> */}
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/images/site/logo.png" />
            <meta property="og:site_name" content="Fixico FE" />
            <meta property="og:locale" content="en_GB" />
            <meta property="og:email" content="info@fixico.co.uk" />
            <meta property="og:phone_number" content="01654 23789" />
            <meta property="og:fax_number" content="01654 23789" />
            <meta property="og:latitude" content="100.849383434334" />
            <meta property="og:longitude" content="-100.543542326576" />
            <meta property="og:street-address" content="Fixico FE, 71 Cherry Court SOUTHAMPTON SO53 5PD UK." />
            <meta property="og:locality" content="London" />
            <meta property="og:region" content="UK" />
            <meta property="og:postal-code" content="SO53 5PD" />
            <meta property="og:country-name" content="UK" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={`${title} | Fixico FE`} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:site" content="@AlBadrFdn" />
            <meta name="twitter:image" content="/images/site/logo.png" />
            <meta content="summary_large_image" name="twitter:card" />

            <meta property="fb:page_id" content={process.env.NEXT_PUBLIC_META_PIXEL_ID} />
            <meta property="article:publisher" content="https://www.facebook.com/sample_url" />

            <link
                rel="canonical"
                href={`${process.env.SITE_URL}`}
                key="canonical"
            />

            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Fixico | Shaping the future of car repair',
    description: 'The digital car repair management platform helping you find the best repair solution, always.',
    keywords: 'Fixico FE, car repair, digital',
}

export default Meta;


// function getCurrentUrl(path) {
//     let fullUrl = window?.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
//     return fullUrl + path;
// }
