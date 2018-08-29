import { LINKS } from "../constants";
import Header from '../components/Header';
import Button from "../components/button";

const About = () => (
  <div>
    <Header links={LINKS} />
    <p>Abooot</p>
    <Button
      text="click"
      action={() => {console.log("hi")}}
    />
  </div>
)

export default About
