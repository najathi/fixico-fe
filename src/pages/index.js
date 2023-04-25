import Hero from "../components/Hero";
import Meta from "../components/Meta";
import Breadcrumbs from '../components/Breadcrumbs';
import CardItem from '../components/CardItem';

const HomePage = (props) => {
    return (
        <>
            <Meta />
            <Hero
                title="Submit Damage Report"
                desc="Our customers would like to submit their Damage Report"
                linkName="Get Started"
                link="/damage_report/submit"
            />
            <div className="container py-12 mx-auto">
                <Breadcrumbs />
                <CardItem />
            </div>
        </>
    )
};

export default HomePage;