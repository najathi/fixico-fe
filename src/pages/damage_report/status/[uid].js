import useSWR from 'swr'

import Breadcrumbs from "../../../components/Breadcrumbs";
import DamageReportItem from "../../../components/DamageReportItem";
import Meta from "../../../components/Meta";
import { server } from "../../../config";
import CartStatusItem from '../../../components/CartStatusItem';

const fetcher = (url) => fetch(url).then((res) => res.json());

const DamageReportStatusById = ({ damageReport }) => {
    const { data: reportByEmail } = useSWR(`/api/damage-report/filter-by?email=${damageReport.customer.email}`, fetcher);

    return (
        <>
            <Meta />
            <div className="container py-12 mx-auto">
                {damageReport &&
                    <Breadcrumbs paths={[
                        { title: 'Damage Report', route: '/damage_report/status' },
                        { title: damageReport.customer.name, route: '/damage_report/status/' + damageReport.uid }
                    ]} />
                }

                <DamageReportItem damageReport={damageReport} />
                <div className="divider"></div>

                <h2 className='text-lg font-bold'>Previous Damage Reports..</h2>
                {reportByEmail &&
                    reportByEmail.length > 1 &&
                    reportByEmail.map(item => (
                        <CartStatusItem
                            key={item.uid}
                            customer={item.customer}
                            image={item.image}
                            description={item.description}
                            status={item.status}
                            vehicle={item.vehicle}
                            uuid={item.uid}
                        />
                    ))
                }
            </div>
        </>
    )
};

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/damage-report/get/${context.params.uid}`)
    const damageReport = await res.json()

    return {
        props: {
            damageReport,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/damage-report/list`)
    const damageReports = await res.json()

    const uids = damageReports.map((report) => report.uid)
    const paths = uids.map((uid) => ({ params: { uid: uid } }))

    return {
        paths,
        fallback: false,
    }
}

export default DamageReportStatusById;