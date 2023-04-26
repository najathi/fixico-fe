import Breadcrumbs from "../../../components/Breadcrumbs";
import Meta from "../../../components/Meta";

const DamageReportStatusById = (props) => {
    return (
        <>
            <Meta />
            <div className="container py-12 mx-auto">
                <Breadcrumbs paths={[
                    { title: 'Damage Report', route: '/damage_report/status' },
                    { title: 'Single Overview', route: '/damage_report/overview/' + 1 }
                ]} />

                <p>Status by id</p>
            </div>
        </>
    )
};

// export const getStaticProps = async (context) => {
//     const donations = await DonateApi.list();
//     const donation = await DonateApi.getOne(context.params.slug);

//     return {
//         props: {
//             donation,
//             donations,
//         },
//     }
// }

// export const getStaticPaths = async () => {
//     const donations = await DonateApi.list();
//     const slugs = donations.map((donation) => donation.slug)
//     const paths = slugs.map((slug) => ({ params: { slug: slug } }))

//     return {
//         paths,
//         fallback: false,
//     }
// }

export default DamageReportStatusById;