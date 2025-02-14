import Heading from "./Heading";
import CardContainer from "./CardContainer";
const CardSection = () => {
    const Features = [
        {
            heading: 'Flexible Learning Schedule',
            para: 'Students can learn at their own pace and choose times that fit their schedules, making it easier for working professionals, students, or those with family commitments.',
            icon: 'fa-solid fa-book'
        },
        {
            heading: 'Personalized Attention',
            para: 'With one-on-one or small group sessions, students receive more personalized guidance compared to traditional classroom settings.',
            icon: 'fa-solid fa-bell'
        },
        {
            heading: 'Qualified Instructors',
            para: 'Your program likely provides access to experienced teachers who specialize in Quranic memorization (Hifz), Arabic language, and Islamic Studies, ensuring high-quality education.',
            icon: ' fa-solid fa-thumbs-up '
        },
        {
            heading: 'Comprehensive Curriculum',
            para: 'Your school covers multiple aspects of Islamic education, from mastering Quranic recitation and memorization to understanding Arabic and foundational Islamic knowledge.',
            icon: 'fa-solid fa-arrows'
        },
        {
            heading: 'Accessible from Anywhere',
            para: 'With an online platform, students can join from anywhere in the world, removing geographical barriers to gaining Islamic knowledge.',
            icon: 'fa-solid fa-user'
        },
        {
            heading: 'Islamic Environment',
            para: 'The focus on Islamic values, morals, and ethics in your teaching helps students to not only learn the Quran and Arabic but also to grow spiritually and build character in accordance with Islamic principles.',
            icon: 'fa-solid fa-leaf'
        },
    ]
    return (
        <div className="card-section">
            <Heading text={"Our Features"} id={"features"}/>
            <CardContainer features={Features} />
        </div>
    );
}

export default CardSection;
