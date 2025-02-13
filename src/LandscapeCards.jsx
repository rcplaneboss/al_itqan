import LandscapeCard from "./LandscapeCard";
import bookLeg from './assets/Img/bookLeg.jpg'
import openBook from './assets/Img/open-book.jpg'
import Apple from './assets/Img/apple.jpg'
import Heading from "./Heading";
import LandscapeCardBody from "./LandscapeCardBody";


const LandscapeCards = () => {
    const Benefit = [
        {
            heading: 'Arabic Language Learning',
            body: 'Live Classes and Recorded Lessons: Offer a mix of live lessons and recorded sessions for flexibility in learning. Vocabulary Quizzes: Regular, interactive quizzes to reinforce new vocabulary.',
            number: '1',
            img: bookLeg
        },
        {
            heading: 'Islamic Studies Curriculum',
            body: 'Comprehensive Course Structure: Organize the Islamic Studies syllabus by topics like Aqeedah, Fiqh, Tafseer, and Seerah, with clear learning outcomes. Discussion Forums: A space for students to ask questions and engage in discussions on Islamic topics.',
            number: '2',
            img: openBook
        },
        {
            heading: 'Instructor Interaction',
            body: 'Live Q&A Sessions: Regular sessions for students to ask questions and clarify doubts with their instructors. One-on-One Tutoring: Offer personalized tutoring sessions for students needing extra support. Instructor Feedback: Detailed feedback on recitation, memorization, and language skills through audio or written comments.',
            number: '3',
            img: Apple
        },
    ]

    return (
        <div className="LandscapeCardSection">
            <div className="what-header">
                <Heading text={"What You Will Get"} id={"benefits"} />
            </div>
            
            {/* <LandscapeCardBody body={"The Benefits You Can Derive Include"}/> */}
            <div className="landscapecards">
                {Benefit.map((benefit) => (
                    <LandscapeCard heading={benefit.heading} body={benefit.body} number={benefit.number} key={benefit.heading} image={benefit.img} />
                ))}
            </div>
        </div>
    );
}

export default LandscapeCards;