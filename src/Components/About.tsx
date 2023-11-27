import i1 from '/image/ftth.jpg'
import i2 from '/image/rakit-pc.jpg';
const About = () => {
    return(
        <section className="aslab-bg">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-white">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Bergabung bersama kami!</h2>
                    <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                    <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src={i1} alt="ftth" data-aos="fade-right" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src={i2} alt="rakit pc" data-aos="fade-left" />
                </div>
            </div>
        </section>
    );
}
export default About;