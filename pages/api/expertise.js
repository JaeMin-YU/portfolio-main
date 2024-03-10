const expertise = [
    {
        id: 0,
        title: 'DEV Language',
        desc: 'I can handle languages such as C, Java, Python, Swift, HTML, CSS, XML, and JavaScript at a basic level. As a junior developer, I\'ve strived to understand the fundamentals of each language and gain an understanding of algorithms and data structures. Through continuous learning and growth, I aim to become a proficient developer.',
        // 나는 C, Java, Python, Swift, HTML, CSS, XML, JavaScript 등의 언어를 기초 수준으로 다룰 수 있습니다. 주니어 개발자로서 각 언어의 기본을 이해하고, 알고리즘과 데이터 구조에 대해 이해하도록 노력 하였습니다. 지속적인 학습과 성장을 통해 능숙한 개발자로 성장하고자 합니다.
    },
    {
        id: 1,
        title: 'DB Management',
        desc: "I have basic knowledge of MS SQL and MySQL. Specifically, I have experience accessing and modifying databases using SSMS for restaurant/laundry Cleaning POS programs, managing risks associated with such modifications. Additionally, I have experience drawing Entity-Relationship Diagrams (ERD) and designing databases for personal projects.",
        // MS SQL, My SQL에 대한 기본 지식을 가지고 있습니다. 특히, 레스토랑 / 세탁소 POS 프로그램을 위한 DB에 SSMS로 접근하여 수정 및 위험성에 대한 관리 경험이 있습니다. 또한, 개인 프로젝트를 위해 ERD를 그려 DB 설계에 대한 경험이 있습니다.
    },
    {
        id: 2,
        title: 'Product Management',
        desc: 'I have experience collaborating with development, design, sales, and support teams to enhance Restaurant, Laundry Cleaning, Retail, Salon POS Programs, as well as payment middleware and web/mobile applications for online orders.',
        // Restaurant, Laundry Cleaning, Retail, Salon POS Program 및 결제 Middleware 그리고 Online Order를 위한 Web과 모바일 프로그램에 대한 개선을 개발, 디자인, 영업, Support 팀과 협업 하여 진행한 경험이 있습니다.
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
        // 
    },
    {
        id: 4,
        title: 'Adaptable',
        desc: "To broaden my horizons, I sought employment directly in Australia and the United States to gain work experience. This experience not only provided me with a broader perspective but also demonstrated my ability to adapt and thrive in any environment.",
        // 경험을 쌓아 더 넓은 시야를 얻기 위해서, 직접 호주와 미국에서 취업하여 업무 경험을 쌓았습니다. 이 경험은 저에게 더 넓은 시야를 주었을 뿐만 아니라. 어떤 환경에서도 적응하고 해낼 수 있음을 증명하게 하였습니다.
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
