
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeatureJobs from "../FeatureJobs/FeatureJobs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Career Hub | Home</title>
            </Helmet>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeatureJobs></FeatureJobs>
        </div>
    );
};

export default Home;