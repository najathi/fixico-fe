import Breadcrumbs from "../../../components/Breadcrumbs";
import Meta from "../../../components/Meta";

const DamageReportStatus = (props) => {
    return (
        <>
            <Meta />
            <div className="container py-12 mx-auto">
                <Breadcrumbs paths={[{ title: 'Damage Report', route: '/damage_report/status' }]} />

                <p>Status</p>
            </div>
        </>
    )
};

export default DamageReportStatus;