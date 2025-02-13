import About from "../../About/About";
import Contact from "../../Contact/Contact";
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
            <Contact></Contact>
        </div>
    );
};

export default Home;