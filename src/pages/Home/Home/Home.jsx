import About from "../../About/About";
import CTA from "../../CTA/CTA";
import Portfolio from "../../Portfolio/Portfolio";
import Services from "../../Services/Services";
import Testimonials from "../../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <About></About>
            <Services></Services>
            <Portfolio></Portfolio>
            <Testimonials></Testimonials>
            <CTA></CTA>
        </div>
    );
};

export default Home;