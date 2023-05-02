import { NextPage } from "next";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CartStatusItem from "../../../components/CartStatusItem";
import Meta from "../../../components/Meta";

import { server } from "../../../config";
import { DamageReportType } from "../../../components/DamageReportItem/DamageReportType";

interface DamageReportStatusProps {
    [key: string]: any;
    damageReports: DamageReportType[]
}

const DamageReportStatus: NextPage<DamageReportStatusProps> = ({ damageReports }) => {

    return (
        <>
            <Meta />
            <div className="container py-12 mx-auto">
                <Breadcrumbs paths={[{ title: 'Damage Report', route: '/damage_report/status' }]} />

                {damageReports &&
                    damageReports.length > 0 &&
                    damageReports.map((item: DamageReportType) => (
                        <CartStatusItem
                            key={item.uid}
                            customer={item.customer}
                            image={item.image}
                            description={item.description}
                            status={item.status}
                            vehicle={item.vehicle}
                            uid={item.uid}
                        />
                    ))
                }
            </div>
        </>
    )
};


export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/damage-report/list`)
    const damageReports: DamageReportType[] = await res.json()

    return {
        props: {
            damageReports
        },
    }
}

export default DamageReportStatus;