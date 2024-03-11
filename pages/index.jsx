import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import PreviousCompanys from '../components/HomeComponents/PreviousCompanys/PreviousCompanys';
import PreviousProjects from '../components/HomeComponents/PreviousProjects/PreviousProjects';
const home = () => {
    return (
        <div className="Home-Page -z-10">
            <Banner />
            <MyExpertise />
            <PreviousCompanys />
            <PreviousProjects />
            <Footer />

        </div>
    )
}

export default home