import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLocalStorage } from "../../utilities/localstorage";
import AppliedJobDesign from "../AppliedJobDesign/AppliedJobDesign";
import { Helmet } from "react-helmet-async";



const AppliedJobs = () => {
    const jobs = useLoaderData()
    const [newAppliedJobs, setNewAppliedJobs] = useState([]);
    const [disPlayJobs, setDisplayJobs] = useState([]);
    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(newAppliedJobs)

        }
        else if (filter === 'remote') {
            const remoteJobs = newAppliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'onsite') {
            const onsiteJobs = newAppliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }
    useEffect(() => {
        const storedJobs = getLocalStorage()
        if (jobs.length > 0) {
            //const appliedJobs = jobs.filter(job=>storedJobs.includes(job.id))

            // console.log(appliedJobs)
            const jobsapplied = []
            for (const id of storedJobs) {
                const appliedJobs = jobs.find(job => job.id === id)
                if (appliedJobs) {
                    jobsapplied.push(appliedJobs)
                }
            }
            setNewAppliedJobs(jobsapplied);
            setDisplayJobs(jobsapplied)
        }
    }, [jobs])


    return (
        <div>
            <Helmet>
                <title>Career Hub | Applied Jobs</title>
            </Helmet>
            <h2 className="text-2xl font-bold text-violet-600">Applied job {newAppliedJobs.length}</h2>

            <details className="dropdown mb-32">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>

            <div>
                {
                    disPlayJobs.map(job => <AppliedJobDesign key={job.id} job={job}></AppliedJobDesign>)
                }
            </div>


        </div>
    );
};

export default AppliedJobs;
