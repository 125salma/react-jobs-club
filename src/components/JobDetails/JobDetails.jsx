import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storageSave } from "../../utilities/localstorage";



const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();

    const idInt = parseInt(id)
    const job = jobs.find(jobA => jobA.id === idInt)


    const handleApplyJob = () => {
        storageSave(idInt)
        toast('Application successfull');
    }
    //console.log(job)
    return (
        <div>



            <div className="grid gap-4 md:grid-cols-4">

                <div className="border md:col-span-3">
                    <h2 className="text-4xl font-bold text-center text-violet-600">Job Details</h2>

                    <p className="p-6 "><span className="font-bold">Job Details of:</span> <span className="text-[#757575]">{job.job_title}</span> </p>

                    <p className="p-6 "><span className="font-bold">Company Name:</span> <span className="text-[#757575]">{job.company_name}</span> </p>

                    <p className="p-6 "><span className="font-bold">Job Description:</span> <span className="text-[#757575]">{job.job_description}</span> </p>

                    <p className="p-6 "><span className="font-bold">Job Responsibility:</span> <span className="text-[#757575]">{job.job_responsibility}</span></p>

                    <p className="p-6 "><span className="font-bold">Educational Requirements:</span> <span className="text-[#757575]"></span>{job.educational_requirements}</p>
                    <p className="p-6 "><span className="font-bold"> Experiences:</span> <span className="text-[#757575]">{job.experiences}</span></p>
                </div>
                <div className="border">
                    <h2 className="text-2xl font-bold mb-4 text-center">Side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>


            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;


