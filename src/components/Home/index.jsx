import React, {useContext, useState} from 'react';
import { Container } from './styles';
import Footer from '../Footer';
import Header from '../Header';
import ChartMap from '../ChartMap';
import ReactTooltip from "react-tooltip";
import Slider from '../Slider';
import SelectButton from '../SelectButton';
import 'bootstrap/dist/css/bootstrap.min.css';
// import VariantTable from './../variantTable/';
import TableVariant from "../TableVariant"

import CovidContext from "../../contexts/CovidContext";
// import CovidContext from "../../../context/CovidContext";

const Home = () => {
  const [content, setContent] = useState("");
  
  const { data, country, currentCountryVariants } = useContext(CovidContext);
  return (
    <Container>
        <Header />
      <div className='main-container'>
        <SelectButton />
        <Slider />
        <ChartMap setTooltipContent={setContent} variantList={currentCountryVariants}/>
        <ReactTooltip className='custom-tooltip'><TableVariant country={country} variantList={currentCountryVariants}/></ReactTooltip>
      </div>
      <Footer />
    </Container>
  )
}

export default Home;