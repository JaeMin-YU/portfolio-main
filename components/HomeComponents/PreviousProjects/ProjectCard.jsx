import { GoProject } from "react-icons/go";
import CardLayout from '../../Common/CardLayout'

const ProjectCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="flex flex-col justify-between card_stylings w-80 md:w-96 h-full  p-4 md:p-8">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-Snow font-bold">{data?.clientName}</span>
                        <div className="text-xs text-LightGray flex items-center gap-1 font-light">
                            <GoProject />
                            <em>{data?.clientLocation}</em>
                        </div>
                    </div>
                    <span className='text-sm text-LightGray font-light'>{data?.clientSource}</span>
                </div>
                <div className="text-sm mt-2 text-LightGray font-normal">
                    {data.clientReview}
                </div>
            </div>
        </CardLayout>
    )
}

export default ProjectCard