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

export default DamageReportStatusById;