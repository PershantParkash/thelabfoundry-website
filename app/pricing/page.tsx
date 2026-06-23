import PricingComponent from '../components/Pricing'
import SolutionsSection from "../components/solution";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Pricing(){
    return (
        <>
          <Navbar />
              <PricingComponent />
              <Footer />
        </>
    )
}