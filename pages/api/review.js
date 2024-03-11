const review = [
    {
        id: 0,
        clientName: 'Bluu Restaurant Pro',
        clientLocation: 'Window | POS Program | Restaurant',
        clientSource: 'Bluu',
        clientReview: 'It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does. I look forward to our next collaboration.'
    },
    {
        id: 2,
        clientName: 'Bluu Royal Touch Bluu',
        clientLocation: 'Window | POS Program | Dry Cleaning',
        clientSource: 'Bluu',
        clientReview: 'He is very good with communication and experienced website developer, great experience to work with him. '
    },
    {
        id: 4,
        clientName: 'UCharge MiddleWare',
        clientLocation: 'Window | Payment M/W',
        clientSource: 'Bluu',
        clientReview: 'I have worked with Osama and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    },
    {
        id: 3,
        clientName: 'Bluu Cloud',
        clientLocation: 'Web Cloud',
        clientSource: 'Bluu',
        clientReview: "Osama is extremely knowledgeable and helpful. He knows in and out of web app development . His understanding of different technologies and frameworks in the space is also very impressive. I hope I get the chance to work with him again"
    },
    {
        id: 4,
        clientName: 'Epipay',
        clientLocation: 'PC & Mobile | Online Order',
        clientSource: 'Bluu',
        clientReview: 'I have worked with Osama and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    },
    {
        id: 4,
        clientName: 'Epiday Online Appointment',
        clientLocation: 'PC & Mobile | Online Appointment',
        clientSource: 'Bluu',
        clientReview: 'I have worked with Osama and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    },
    {
        id: 4,
        clientName: 'Epipay Smarter',
        clientLocation: 'PC & Mobile | Online Order',
        clientSource: 'Bluu',
        clientReview: 'I have worked with Osama and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    },
    {
        id: 4,
        clientName: 'Bluu Order',
        clientLocation: 'Android | 3rd party program for Bluu Restaurant Pro',
        clientSource: 'Bluu',
        clientReview: 'I have worked with Osama and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    },
    {
        id: 4,
        clientName: 'Bluu Queue',
        clientLocation: 'Android | 3rd party program for Bluu Restaurant Pro',
        clientSource: 'Bluu',
        clientReview: 'I have worked with Osama and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    },
    {
        id: 4,
        clientName: 'Bluu Point',
        clientLocation: 'Android | POS Program',
        clientSource: 'Bluu',
        clientReview: 'I have worked with Osama and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    },
    {
        id: 4,
        clientName: 'Bluu PATT',
        clientLocation: 'Android | POS Program',
        clientSource: 'Bluu',
        clientReview: 'I have worked with Osama and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    },
    {
        id: 4,
        clientName: 'Bluu Kiosk',
        clientLocation: 'Window | POS Program',
        clientSource: 'Bluu',
        clientReview: 'I have worked with Osama and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
