import { NextPage } from "next";

import Hero from "../components/Hero";
import Meta from "../components/Meta";
import CardItem from '../components/CardItem';
import Breadcrumbs from "../components/Breadcrumbs";

interface HomePageProps {

}

const HomePage: NextPage<HomePageProps> = ({ }) => {
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