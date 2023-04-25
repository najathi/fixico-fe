import Breadcrumbs from "../../../components/Breadcrumbs";
import Meta from "../../../components/Meta";

const DamageReportOverview = (props) => {
    return (
        <>
            <Meta />
            <div className="container py-12 mx-auto">
                <Breadcrumbs paths={[{ title: 'Damage Report', route: '/damage_report/verview' }]} />

                <p>Overview</p>
            </div>
        </>
    )
};

export default DamageReportOverview;