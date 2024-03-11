// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const previousCompanyCard = [
  {
    id: 0,
    name: 'Samsung in Australia NSW',
    image: "images/Samsung_Orig_Wordmark_WHITE_RGB.jpg",
    designation: 'Customer Services Team | TV Engineer',
    view: "Hey everyone! I wanted to take a moment to recommend Osama Javaid for any React.js opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of React.js and Next.js concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Osama is a reliable and dedicated team member who would be a great asset to any React.js team. Highly recommended! 👍! 🌟",
    linkednURL: "https://www.samsung.com/au/"
  },
  {
    id: 1,
    name: 'Bluu in USA NJ',
    image: "images/Bluu.jpg",
    designation: 'PM / QA Team | Intern',
    view: "I had the privilege of working alongside Osama on multiple university projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team at JMM Technologies, where Osama's professionalism and attention to detail shone brightly. I wholeheartedly endorse Osama for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: "https://ebluu.com/"
  },
  // {
  //   id: 2,
  //   name: 'TK - Rinde Korea Air Factory',
  //   image: "images/nasir.jpg",
  //   designation: 'Technical Support Manager',
  //   view: "I wholeheartedly recommend Osama as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Osama's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
  // },
]
export default function handler(req, res) {
  res.status(200).json(previousCompanyCard)
}