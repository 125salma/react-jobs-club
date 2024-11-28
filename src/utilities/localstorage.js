const getLocalStorage =() =>{
    const sotreData = localStorage.getItem('jobApplied');
    if(sotreData){
        return JSON.parse(sotreData)
    }
    return []
}



const storageSave =(id) =>{
    const sotreDatajobs = getLocalStorage()
    const exist = sotreDatajobs.find(jobId =>jobId===id)
    if(!exist){
        sotreDatajobs.push(id)
        localStorage.setItem('jobApplied',JSON.stringify(sotreDatajobs))
    }

    
}
export {storageSave,getLocalStorage}