import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {
    const [jobsApplied, setJobsApplied] = useState([])
    const [dataLengthJobs, setDataLengthJobs] = useState(4)

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setJobsApplied(data))
    }, [])



    return (
        <div>
            <div>
                <h2 className="text-5xl text-center font-bold mt-12 text-violet-600">Featured Jobs: {jobsApplied.length}</h2>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                {
                    jobsApplied.slice(0, dataLengthJobs).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

            <div className="grid justify-items-center mt-4">
                <div className={dataLengthJobs === jobsApplied.length ? 'hidden' : ''}>
                    <button onClick={() => setDataLengthJobs(jobsApplied.length)} className="btn btn-primary bg-gradient-to-r from-indigo-400">Show all jobs</button>

                </div>
            </div>
        </div>
    );
};

export default FeatureJobs;