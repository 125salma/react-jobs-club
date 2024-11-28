

const CategorListJobs = ({categoryList}) => {
    const {logo,category_name,availability} = categoryList
    return (
        <div className="shadow p-4">
            <img src={logo} alt="" />
            <div className="pt-6">
            <h2 className="font-bold">{category_name}</h2>
            <p>{availability}</p>
            </div>
            
        </div>
    );
};

export default CategorListJobs;