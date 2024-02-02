import React, { useEffect, useState } from 'react'

const MainComponent = () => {
    const allOptions = ["Frontend Developer", "Backend Developer", "UI/UX Designer", "Data Scientist", "Software Engineer", "Product Manager", "DevOps Engineer", "Machine Learning Engineer", "Full Stack Developer", "Cybersecurity Analyst", "Mobile App Developer", "Game Developer", "Cloud Architect", "QA Engineer", "Web Developer", "Database Administrator", "Network Engineer", "UI Developer", "UX Researcher", "System Administrator", "Software Architect", "Business Analyst", "Technical Writer", "Embedded Systems Engineer", "AI Engineer", "Blockchain Developer", "Computer Vision Engineer", "AR/VR Developer", "IT Support Specialist", "Data Analyst"];
    const similarOptionsArray = ["asa", "asd", "asad"];
    
    const [optionArray, setOptionArray] = useState(allOptions);
    const [inputChange, setInputChange] = useState("");

    
    useEffect(() => {
        const filteredOptionsArray=allOptions.filter(option=> option.toLowerCase().includes(inputChange.toLowerCase()));
        // Update optionArray only if inputChange is not empty
        if (inputChange !== "") {
            setOptionArray(filteredOptionsArray);
        }
    }, [inputChange]);
    

    return (
        <div className='flex w-1/3 flex-col gap-2 p-2'>

            <div className=' bg-[#F6F6F6] justify-between border-[1px] border-[#000000] border-opacity-50 rounded-md p-2'>
                <div className='bg-[#F6F6F6] rounded-md w-full'>
                    <input onChange={(e) => setInputChange(e.target.value)} className='bg-[#F6F6F6] rounded-md p-1 w-full outline-none' type="text" />
                </div>
            </div>
            <div className='flex flex-col gap-1 items-center bg-[#F6F6F6] justify-between rounded-md max-h-56 scroll-m-0 overflow-y-auto
            scrollbar'>
                {optionArray.map((option, index) => (
                    <div className='bg-[#F6F6F6] border-b-[1px] rounded- w-full p-1' key={index}>{option}</div>
                ))
                }
            </div>
        </div>

    )
}

export default MainComponent