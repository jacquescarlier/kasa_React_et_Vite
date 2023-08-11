import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HousingCarousel from "../components/carousel/HousingCarousel";
import HousingDetail from "../components/housing/HousingDetail";
import HousingDropdown from "../components/housing/HousingDropdown";
import { useParams, Navigate } from "react-router-dom"
//import logements from '../datas/logements.json'

const HousingFile = () => {

  const { id } = useParams();
  const logement = logements.find((item) => item.id === id)
  
  return (
    <div>
      {!logement && (<Navigate to='Page404' replace={true} />)}
      {logement && (
        <div>
          <div className="container-general">
            <Header />
            <HousingCarousel pictures={logement.pictures} title={logement.title} />
            <HousingDetail logement={logement} />
            <HousingDropdown description={logement.description} equipments={logement.equipments} />
          </div>
          <Footer />
        </div>
      )} 
    </div>
  );
};
export default HousingFile;
