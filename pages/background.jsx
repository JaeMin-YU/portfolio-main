import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import CardLayout from "../components/Common/CardLayout";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { Skeleton } from "antd";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

const eduCards = [
    {
        id: 0,
        title: 'Daegu Catholic University',
        degree: 'Korean Language Education(include Curriculum for Teaching Profession)',
        detail: "It aims to cultivate excellent teachers who fulfill their duties as educators by learning basic theories on Korean language and Korean literature, focusing on Korean language education, and conducting practical and practical education.",
        year: '2017-2025(Expected)'
    },
    {
        id: 1,
        title: 'Daegu Catholic University',
        degree: 'Computer Science with Curriculum for Teaching Profession',
        detail: "Computer engineering majors learn various fields of developing and operating optimal software based on relevant knowledge across computers.",
        year: '2017-2025(Expected)'
    },
];

const expCards = [
    {
        id: 1,
        title: 'BLUU',
        role: 'IT QA Intern',
        url: 'https://ebluu.com/',
        desc: 'I collaborated with the marketing, tech support, and development teams for Windows-based POS solutions, managing sprints, designing functionalities, and evaluating risks.',
        // 윈도우 기반의 POS 솔루션들에 대해 마케팅, Tech Support, 개발 팀과 협업 하여 스프린트 관리, 동작 설계, 위험성 평가 등의 업무를 하였습니다. 
        year: '11/2022 - 11/2023',
        location: 'New Jersey, USA'
    },
    {
        id: 2,
        title: 'Samsung',
        role: 'TV Engineer',
        url: 'https://www.samsung.com/au/',
        desc: 'Based on my knowledge of Smart TV operating systems and expertise in OLED, LED, and electronic sensors, I provided technical services directly to customers through in-person visits.',
        // Smart TV OS에 대한 지식과 OLED, LED 및 전자 센서에 대한 지식을 바탕으로 고객에게 직접 방문하여, Technical 한 서비스를 제공 하였습니다. 
        year: '03/2022 - 11/2022',
        location: 'NSW Granville, Australia'
    },
];

function Background() {
    return (
        <BannerLayout>
            <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
                <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
                    <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</div>
                    {eduCards.map((backgroundData) => (
                        <CardLayout key = {backgroundData.title}>
                            <Edu_Card data={backgroundData} />
                        </CardLayout>

                    ))}

                </div>
                <div className="order-1 md:order-2">
                    <div className="flex flex-col gap-y-4 md:ml-12">
                        <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">Experience</div>
                        {expCards.map((backgroundData) => (
                        <CardLayout key = {backgroundData.title}>
                            <Exp_Card data={backgroundData} />
                        </CardLayout>

                    ))}

                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
}

export default Background;
