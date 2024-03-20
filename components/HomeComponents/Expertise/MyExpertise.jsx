// MyExpertise.jsx

import ExpertiseCard from "./ExpertiseCard";
import CardLayout from "../../Common/CardLayout";

// expertise 데이터를 직접 가져오기
const expertise = [
    {
        id: 0,
        title: 'DEV Language',
        desc: 'I can handle languages such as C, Java, Python, Swift, HTML, CSS, XML, and JavaScript at a basic level. As a junior developer, I\'ve strived to understand the fundamentals of each language and gain an understanding of algorithms and data structures. Through continuous learning and growth, I aim to become a proficient developer.',
    },
    {
        id: 1,
        title: 'DB Management',
        desc: "I have basic knowledge of MS SQL and MySQL. Specifically, I have experience accessing and modifying databases using SSMS for restaurant/laundry Cleaning POS programs, managing risks associated with such modifications. Additionally, I have experience drawing Entity-Relationship Diagrams (ERD) and designing databases for personal projects.",
    },
    {
        id: 2,
        title: 'Product Management',
        desc: 'I have experience collaborating with development, design, sales, and support teams to enhance Restaurant, Laundry Cleaning, Retail, Salon POS Programs, as well as payment middleware and web/mobile applications for online orders.',
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 4,
        title: 'Adaptable',
        desc: "To broaden my horizons, I sought employment directly in Australia and the United States to gain work experience. This experience not only provided me with a broader perspective but also demonstrated my ability to adapt and thrive in any environment.",
    },
];

const MyExpertise = () => {
    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Expertise</div>
            <div className="grid justify-items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >

                {expertise.map((expertiseData) => (
                    <CardLayout key={expertiseData.id}>
                        <ExpertiseCard data={expertiseData} />
                    </CardLayout>
                ))}

            </div>
        </>
    );
};

export default MyExpertise;
