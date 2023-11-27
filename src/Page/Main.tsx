import { useEffect } from 'react';
import About from '../Components/About';
import Footer from '../Components/Footer';
import Gallery from '../Components/Gallery';
import Nav from '../Components/Nav';
import Aos from 'aos';
import '../../node_modules/aos/dist/aos.css'

const Main = () => {
    useEffect(() => {
        Aos.init();
      }, []);
    return(
        <div className="base aslab-bg">
            <Nav/>
            <About/>
            <Gallery />
            <Footer/>
        </div>
    );
}
export default Main;