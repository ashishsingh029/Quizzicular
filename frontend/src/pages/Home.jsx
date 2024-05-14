import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className = 'home_page'>
            <p className = 'text-center custom_text my-2 text-light-emphasis'>
                Quizzicular
            </p>
            <div className = 'd-flex align-items-center home_page pt-2 pb-2'>
                <div className = 'col-md-6 p-2'>
                    <h4 className = 'text-center'>Design a Quiz</h4>
                    <p className = 'text-justify fs-6'>
                        Here, you have the opportunity to craft a quiz tailored to your specific needs. Whether you're creating an educational assessment, a fun trivia challenge, or a skill-testing exercise. Let your creativity shine as you design the perfect quiz for your project!
                    </p>
                    <span className = 'text-center d-block '>
                        <Link to = '/createquiz' className = 'btn text-light fs-5 fw-medium create_button'>Create Quiz </Link>
                    </span>
                </div>
                <div className = 'col-md-6 p-2'>
                    <h4 className = 'text-center'>Participate in a Quiz</h4>
                    <p className = 'text-justify fs-6'>
                        Answer thought-provoking questions, unlock hidden treasures of knowledge, and expand your horizons with every click. With user-friendly navigation and interactive features, participating in a quiz has never been more enjoyable. So, dive in, embrace the excitement, and let the quest for wisdom begin!
                    </p>
                    <span className = 'text-center d-block '>
                        <Link to = '' className = 'btn text-light fs-5 fw-medium create_button'>Participate Quiz </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Home