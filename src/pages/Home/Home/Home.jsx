import About from "../../About/About";
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
        </div>
    );
};

export default Home;