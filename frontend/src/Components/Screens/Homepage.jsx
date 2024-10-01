import React from 'react'
// import Header from '../Header';
import LandingPage from '../HomepageScreen/LandingPage';
import CodingPage from '../HomepageScreen/CodingPage'; 
import ImageCod from '../../assets/JavaScript frameworks-rafiki.svg'
import HtmlCod from '../../assets/Website Creator-amico.svg'
import Pycod from '../../assets/Man reading-pana.svg'
import SpeechCod from '../../assets/Speech to text-bro.svg'
//import CodJava from '../../assets/Coding-bro.svg'
import ImagCod from '../../assets/Writing on the wall-rafiki.svg'
// import MoreCod from '../../assets/Sponsor-rafiki.svg';
//import MoreCod from '../../assets/paralympic winners podium-pana.svg';
import Feedback from '../HomepageScreen/Feedback';
import Footer from '../HomepageScreen/Footer';

function Homepage() { 

  const width2 = window.outerWidth;

  return (
    <>
    <div className="smallScreen">
      <mark>The Screen is Visible with width more than 250px <br/><br/><hr/><br/>Screen Size: {width2}px</mark>
    </div>
    <div className="container">
        {/* <Header/>  */}
        <LandingPage/> 
        <CodingPage 
          title="World Of JavaScript"
          con="Run Your JavaScript Program"
          info={<> <mark> JavaScript: The Language of the Web </mark> Build interactive, dynamic websites and applications with ease using JavaScript, <mark> Try Now </mark> .</>} 
          path='/editor/javaScript' 
          image={ImageCod}
          // poss={{'flexDirection':'row'}}
          
        />
        <CodingPage
          title="World Of Python"
          con="Run Your Python Program"
          path="/editor/python"
          info={<>Discover <mark> Python </mark>, the easiest programming language, and start coding effortlessly using our <mark> simple web IDE</mark>  Logic and Understanding </>}
          image={Pycod}
          // poss={{'flexDirection':'row-reverse'}}
          uniId={"uni"}
        />
        <CodingPage
          title="Instant Web Page Editor "
          path="/editor/html"
          con="Try This Amazing Web Editor Now"
          info={<>
            Tired of Writing HTML and Refreshing the Browser Repeatedly?<br/>
            Try our<mark> Real-Time Browser</mark> that instantly updates your page as you code,<mark>no more manual refreshing needed!</mark>
          </>}
          image={HtmlCod}
          // poss={{'flexDirection':'row-reverse'}}
          uniId={"uni"}
        />
        <CodingPage
          title="Picture to Code Converter"
          path='/editor/image2text'
          image={ImagCod}
          con="Convert Any Image"
          info={<>
            Experience the power of our <mark>Image to Code tool!</mark> Transform any image into code effortlessly.<mark> Bring Your Designs to Life</mark>. 
          </>}
          // poss={{'flexDirection':'row'}}
        />
        <CodingPage
          title="Voice To Code Translator"
          path='/editor/voice2text'
          image={SpeechCod}
          info={<>
            <mark>"Words Speak more than Actions"</mark> Make this quote a reality with our latest tool.
            Convert your voice into text instantly.<mark>Try our Voice-to-Text feature today!</mark>
          </>}
          con="Convert Your Voice"
          // poss={{'flexDirection':'row-reverse'}}
          uniId={"uni"}
        />
        <Feedback/>
        <Footer/>
        {/* <a href="http://" target="_blank" rel="noopener noreferrer"></a> */}
    </div>
    </>
  )
}

export default Homepage