import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";


const Job = ({ job }) => {
    const { id, logo, job_title, company_name, salary, location, remote_or_onsite, job_type } = job;


    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src={logo} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex">
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                </div>

                <div className="flex mt-4">

                    <h2 className="flex mr-4"><MdLocationOn className="text-2xl mr-2" />{location}</h2>

                    <h2 className="flex"><AiOutlineDollar className="text-2xl" /> {salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}><button className="btn btn-primary bg-gradient-to-r from-indigo-400">View Details</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Job;