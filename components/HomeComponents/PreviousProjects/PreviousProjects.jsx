import ProjectCard from "./ProjectCard"
import CardLayout from "../../Common/CardLayout";
import ExpertiseCard from "../Expertise/ExpertiseCard";

const review = [
    {
        id: 0,
        clientName: 'Bluu Restaurant Pro',
        clientLocation: 'Window | POS Program | Restaurant',
        clientSource: 'Bluu',
        clientReview: 'This is a Windows-based POS solution that covers not only general restaurants but also fast casual, quick serve, and food court businesses.'
        // 윈도우 기반의 POS Solution입니다. 일반 Restaurant 뿐만 아니라, fast casual, quick serve, food court business를 커버할 수 있습니다.
    },
    {
        id: 1,
        clientName: 'Bluu Royal Touch Bluu',
        clientLocation: 'Window | POS Program | Dry Cleaning',
        clientSource: 'Bluu',
        clientReview: 'It is a Windows-based POS solution that supports small to medium-sized laundry businesses. It is equipped with features for various tasks performed in the back, such as rack tracking and customer management, in addition to counter jobs.'
        // 윈도우 기반의 POS Solution입니다. 중소규모의 세탁소 business를 지원 할 수 있습니다. Counter Job 뿐만 아니라 Rack 추적, 고객 관리 등 Back에서 이루어지는 다양한 작업에 대한 기능이 준비 되어있습니다.
    },
    {
        id: 2,
        clientName: 'UCharge MiddleWare',
        clientLocation: 'Window | Payment M/W',
        clientSource: 'Bluu',
        clientReview: 'It is a payment system based on Windows and Android designed to align with payment methods in the United States, utilizing APIs from GP, TSYS, and FDMS.'
        // 윈도우 및 안드로이드 기반의 결제 시스템입니다. 미국 현지의 결제 방식에 맞추어 설계 되었으며 GP, TSYS, FDMS의 API를 받아 동작 합니다.
    },
    {
        id: 3,
        clientName: 'Bluu Cloud',
        clientLocation: 'Web Cloud',
        clientSource: 'Bluu',
        clientReview: "All solutions provided by Bluu are designed to utilize Bluu Cloud, allowing for configuration and tracking of various histories from setup onwards"
        // Bluu에서 제공되는 모든 솔루션은 Bluu Cloud를 활용하여, 설정 부터 다양한 히스토리를 수정 및 추적 할 수 있도록 고안 되었습니다.
    },
    {
        id: 4,
        clientName: 'Epiday Online Appointment',
        clientLocation: 'PC & Mobile | Online Appointment',
        clientSource: 'Bluu',
        clientReview: 'An Android-based third-party program for Bluu Salon enables reservation schedule management and booking requests.'
        // Bluu Salon을 위한 안드로이드 기반의 3rd party 프로그램으로 예약 스케줄 관리 및 예약 신청을 할 수 있습니다.
    },
    {
        id: 5,
        clientName: 'Epipay Smarter',
        clientLocation: 'PC & Mobile | Online Order',
        clientSource: 'Bluu',
        clientReview: 'A web-based online ordering program for Bluu Restaurant and Bluu Restaurant Pro.'
        // Bluu Restaurant 및 Bluu Restaurant Pro를 위한 웹 기반의 온라인 오더 프로그램입니다.
    },
    {
        id: 6,
        clientName: 'Bluu Order & Queue',
        clientLocation: 'Android | 3rd party program for Bluu Restaurant Pro',
        clientSource: 'Bluu',
        clientReview: 'An Android-based customer number calling system that, when integrated with Bluu Restaurant Pro, automates management from order reception to customer calling.'
        // 안드로이드 기반의 고객 번호 호출 시스템입니다. Bluu Restaurant Pro와 연동 시, 주문 접수 부터 고객 호출 까지 자동으로 관리됩니다.
    },
    {
        id: 7,
        clientName: 'Bluu Point',
        clientLocation: 'Android | POS Program',
        clientSource: 'Bluu',
        clientReview: 'A portable multi-POS solution based on Android, suitable for various small-scale industries.'
        // 안드로이드 기반의 휴대용 멀티 POS Solution입니다. 중소형의 다양한 업종에서 사용 가능 합니다.
    },
    {
        id: 8,
        clientName: 'Bluu PATT',
        clientLocation: 'Android | POS Program',
        clientSource: 'Bluu',
        clientReview: 'A portable POS solution based on Android that, when integrated with Bluu Restaurant Pro, allows for item ordering and payment at tables without needing to move.'
        // 안드로이드 기반의 휴대용 POS Solution입니다. Bluu Restaurant Pro와 연동하여 테이블에서 이동하지 않고 아이템 주문 및 결제가 가능합니다.
    },
    {
        id: 9,
        clientName: 'Bluu Kiosk',
        clientLocation: 'Window | POS Program',
        clientSource: 'Bluu',
        clientReview: 'A Windows-based Kiosk POS solution developed for yogurt shops, cafes, Bentos, and similar quick serve and fast casual establishments, with integration capability with Bluu Restaurant Pro.'
        // 윈도우 기반의 Kiosk POS Solution입니다. 요거트 전문점, 카페, Bento 등 Quick Serve 및 Fast Casual에 맞추어 개발되었으며 Bluu Restaurant Pro와 연동 가능합니다.
    },
];

const PreviousPrjects = () => {
    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Previous Projects</div>
            <div className="overflow-x-auto w-full grid  justify-items-center grid-flow-col gap-4 px-2 md:px-8 pt-2 pb-4">

                {review.map((reviewData) => (
                    <CardLayout key={reviewData.clientName}>
                        <ProjectCard data={reviewData} />
                    </CardLayout>
                ))}

            </div>

        </>
    )
}

export default PreviousPrjects