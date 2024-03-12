// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const previousCompanyCard = [
  {
    id: 0,
    name: 'Samsung in Australia NSW',
    image: "images/samsung.png",
    designation: 'Customer Services Team | TV Engineer',
    view: "Worked as a technician at a Samsung authorized service center in Sydney, Australia, primarily providing tech support services at customers' homes based on specialized knowledge of electronic devices like TVs, PCs, and monitors. It was a valuable experience for understanding the software/hardware needs of various international customers.",
    // 호주 시드니의 삼성 공식 서비스 센터에서 테크니션으로 일했습니다. 주로, TV / PC / Mornitor 등의 전자기기에 대한 전문 지식을 바탕으로 고객의 집에 방문하여 Tech Support Service를 제공 했습니다. 해외의 다양한 일반 고객들의 SW/HW 사용 니즈를 파악할 수 있는 소중한 경험 이었습니다.
    linkednURL: "https://www.samsung.com/au/"
  },
  {
    id: 1,
    name: 'Bluu in USA NJ',
    image: "images/bluu.png",
    designation: 'PM / QA Team | Intern',
    view: "Worked in the IT QA team of a POS solution company providing services nationwide in the United States, performing tasks such as development planning, and providing test feedback. The main program I handled was the Windows-based laundry POS program, which provided an opportunity to understand the life cycle of the program's operation and learn how to collaborate with other teams.",
    // 미국 전국에 서비스를 제공하는 POS Solution 회사의 IT QA팀에서 개발 기획, 테스트 피드백 등의 작업을 하였으며 메인으로 담당한 프로그램은 윈도우 세탁소 POS 프로그램이었습니다. 프로그램이 동작하기 위한 Life Cycle을 이해하고 다른 팀과 협업하는 방법을 배우는 기회가 되었습니다.
    linkednURL: "https://ebluu.com/"
  },
]
export default function handler(req, res) {
  res.status(200).json(previousCompanyCard)
}
