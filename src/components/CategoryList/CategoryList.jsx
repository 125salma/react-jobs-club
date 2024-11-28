import { useEffect, useState } from "react";
import CategorListJobs from "../CategoryListJobs/CategorListJobs";


const CategoryList = () => {
    const [categoryJobs,setCategoryJobs] =useState([]);
             
    useEffect(()=>{
        fetch('/categories.json')
        .then(res=>res.json())
        .then(data=>setCategoryJobs(data))
    },[])
    return (
        <div>
            <h2 className="text-5xl text-center font-bold mt-14 text-violet-600">Job Catagory List</h2>
            <p className="text-center mt-4 mb-12 text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            
            <div className="grid md:grid-cols-4 gap-6">
            {
                categoryJobs.map(categoryList=><CategorListJobs key={categoryList.id} categoryList={categoryList}></CategorListJobs>)
            }
            </div>
        </div>
    );
};

export default CategoryList;