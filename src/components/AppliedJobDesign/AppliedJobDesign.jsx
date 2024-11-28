

const AppliedJobDesign = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite} = job
    return (
        <div className="shadow  mt-8 p-8">
            {/* <li key={job.id} ><span>{job.job_title} {job.company_name}: {job.remote_or_onsite}</span></li> */}
           
            <img className="" src={logo} alt="" />
           
           <div className="mt-4">
           <p><span className="font-bold">Compnany Name:</span> <span className="text-[#757575]">{company_name}</span></p>
           <p><span className="font-bold">Job Title:</span> <span> <span className="text-[#757575]">{job_title}</span></span></p>
           <p><span className="font-bold">Remote or Onsite:</span> <span className="text-[#757575]" >{remote_or_onsite}</span></p>
           </div>
           
           

        </div>
    );
};

export default AppliedJobDesign;