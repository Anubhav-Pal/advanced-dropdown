import React, { useEffect, useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";

const MainComponent = () => {
    const allOptions = ["Frontend Developer", "Backend Developer", "UI/UX Designer", "Data Scientist", "Software Engineer", "Product Manager", "DevOps Engineer", "Machine Learning Engineer", "Full Stack Developer", "Cybersecurity Analyst", "Mobile App Developer", "Game Developer", "Cloud Architect", "QA Engineer", "Web Developer", "Database Administrator", "Network Engineer", "UI Developer", "UX Researcher", "System Administrator", "Software Architect", "Business Analyst", "Technical Writer", "Embedded Systems Engineer", "AI Engineer", "Blockchain Developer", "Computer Vision Engineer", "AR/VR Developer", "IT Support Specialist", "Data Analyst"];

    const [optionArray, setOptionArray] = useState(allOptions);
    const [inputChange, setInputChange] = useState("");
    const [clickedOptions, setClickedOptions] = useState([]);

    useEffect(() => {
        //filtered all the options similar to the input given by user
        const filteredOptionsArray = allOptions.filter(option => option.toLowerCase().includes(inputChange.toLowerCase()));

        if (inputChange === "") {
            setOptionArray(allOptions);
        }
        else if (inputChange !== "") {
            setOptionArray(filteredOptionsArray);
        }
    }, [inputChange]);

    useEffect(() => {
        //this is the array which does not have the options that have been clicked by the user and are now in the clickedOptions array
        const updatedOptionArray = allOptions.filter(option => !clickedOptions.includes(option))

        if (clickedOptions.length === 0) {
            setOptionArray(allOptions);
        }
        else {
            setOptionArray(updatedOptionArray);
        }

    }, [clickedOptions])


    return (
        <div className='flex w-4/5 sm:1/2 lg:w-4/12 flex-col gap-2 p-2 mt-20 sm:mt-40'>

            <div className='bg-[#F6F6F6] flex flex-wrap border-[1px] border-[#000000] border-opacity-50 rounded-md p-2 gap-1'>
                {clickedOptions.map((clickedOption, index) => (
                    <div className='bg-[#F6F6F6]  flex items-center justify-between font-semibold rounded-md text-gray-500 border-[1px] border-[#000000] border-opacity-20 p-1 gap-1' key={index}>
                        <div className='text-[12px] ' >
                            {clickedOption}
                        </div>
                        <div className='flex items-center opacity-50 hover:opacity-80 transition-all'>
                            <button onClick={() => setClickedOptions((prevClickedOption) => prevClickedOption.filter(option => option !== clickedOption))}><MdOutlineCancel /></button>
                        </div>
                    </div>
                ))}

                {/* input field */}
                <div className='bg-[#F6F6F6] rounded-md w-full'>
                    <input onChange={(e) => setInputChange(e.target.value)} className='bg-[#F6F6F6] rounded-md p-1 w-full outline-none placeholder:text-sm' type="text" placeholder='Enter your domain' />
                </div>
            </div>
            <div className='flex flex-col gap-1 items-center bg-[#F6F6F6] justify-between rounded-md max-h-56 scroll-m-0 overflow-y-auto
            scrollbar'>
                {optionArray.map((option, index) => {

                    //calculates the index at which the input occurs in the option
                    const indexOfInputInOption = option.toLowerCase().indexOf(inputChange.toLowerCase());
                    return (
                        <div onClick={() => setClickedOptions([...clickedOptions, option])} className='bg-[#F6F6F6] border-b-[1px] rounded- w-full cursor-pointer text-sm p-2 text-gray-500 hover:text-gray-700 transition-all' key={index}>
                            {indexOfInputInOption !== -1 ?
                                (<>
                                    {option.slice(0, indexOfInputInOption)}
                                    <span className='font-bold'>{inputChange}</span>
                                    {option.slice(indexOfInputInOption + inputChange.length)}
                                </>)
                                : (option)
                            }
                        </div>
                    );
                })
                }
            </div>
        </div>
    )
}

export default MainComponent