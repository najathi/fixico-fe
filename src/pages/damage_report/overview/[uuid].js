import Breadcrumbs from "../../../components/Breadcrumbs";
import Meta from "../../../components/Meta";

const DamageReportOverview = (props) => {
    return (
        <>
            <Meta />
            <div className="container py-12 mx-auto">
                <Breadcrumbs paths={[
                    { title: 'Damage Report', route: '/damage_report/overview' },
                    { title: 'Single Overview', route: '/damage_report/overview/' + 1 }
                ]} />

                <p>Overview by id</p>
            </div>
        </>
    )
};

export default DamageReportOverview;