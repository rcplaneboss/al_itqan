import Header from './Header'
import CardSection from './CardSection'
import LandscapeCards from './LandscapeCards'
import About from './About'
import Contact from './Contact'

const AppBody = () => {
    return (
        <div>
            <Header />
            <CardSection />
            <LandscapeCards />
            <About />
            <Contact />
        </div>
    );
}

export default AppBody;