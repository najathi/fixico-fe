import Breadcrumbs from "../../components/Breadcrumbs";
import DamageReportForm from "../../components/DamageReportForm";
import Meta from "../../components/Meta";

const DamageReportSubmit = (props) => {
    return (
        <>
            <Meta />
            <div className="container py-12 mx-auto">
                <Breadcrumbs paths={[{ title: 'Create Damage Report', route: '/damage_report/submit' }]} />
                <DamageReportForm />
            </div>
        </>
    )
};

export default DamageReportSubmit;