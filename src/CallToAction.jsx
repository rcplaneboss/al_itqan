import Button from "./Button";
import Link from "./Link";
import { Link as RouterLink} from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
const CallToAction = () => {
  const isViewPortTab = useMediaQuery({ query: '(max-width: 600px)' })
    return (
        <div className={isViewPortTab ? "mobile-call-to-action montserrat" : "tab-call-to-action"}>
            <RouterLink to='/register'>
                <Button text={"Register Now"} link={''} />
            </RouterLink>
            <div className="or-box montserrat">Or</div>
            <div className="whatsapp-box">
                <Link text={"WhatApp Us"} link={"https://wa.me/2349078498281?text=Assalam%20aleikum%20warahmatullahi%20wabarakatuh,%20I%20want%20to%20register%20as%20a%20member%20of%20Al-Itqan%20school"} />
            </div>
        </div>
    );
}

export default CallToAction;