import Breadcrumbs from "../../../components/Breadcrumbs";
import CartStatusItem from "../../../components/CartStatusItem";
import Meta from "../../../components/Meta";

import { server } from "../../../config";

const DamageReportStatus = ({ damageReports }) => {

    return (
        <>
            <Meta />
            <div className="container py-12 mx-auto">
                <Breadcrumbs paths={[{ title: 'Damage Report', route: '/damage_report/status' }]} />

                {damageReports &&
                    damageReports.length > 0 &&
                    damageReports.map(item => (
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


export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/damage-report/list`)
    const damageReports = await res.json()

    return {
        props: {
            damageReports
        },
    }
}

export default DamageReportStatus;