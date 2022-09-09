import React, {useState} from 'react';
import Layout from "../../components/Layout";
import {format} from "date-fns";

interface Option {
    title: string
}

interface Poll {
    title: string,
    expireAt: string,
    options: Option[]
}

const Create: React.FC = () => {

    const initialState = {
        title: "",
        expireAt: format(new Date(), 'YYY-MM-dd'),
        options: [{title: ""}, {title: ""}],
    }

    const [poll, setPoll] = useState<Poll>(initialState);


    const addOption = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("aaaaaaaaa")
        event.preventDefault();
        const options = [...poll.options, {title: ""}];

        setPoll({...poll, options});
    }

    const handleOptionChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        let options = poll.options;
        options[index]['title'] = event.target.value;

        setPoll({
            ...poll,
            options: [...options]
        })
    }

    return (
        <Layout>
            <div className="p-4 w-2/3 mx-auto bg-white shadow rounded">
                <h2 className="text-xl font-bold">Create a Poll</h2>
                <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet.</p>
                <form>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                            <span className="block text-sm font-medium text-gray-700">Title</span>
                            <input type="text"
                                   className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                                   value={poll.title}
                                   onChange={(event) => setPoll({...poll, title: event.target.value})}
                            />
                        </div>
                        <div>
                            <span className="block text-sm font-medium text-gray-700">Expire At</span>
                            <input type="date"
                                   className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                                   value={poll.expireAt}
                                   onChange={(event) => setPoll({...poll, expireAt: event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="grid grid-cols-2 gap-2">
                            {poll.options.map((option, index) => (
                                <div key={index}>
                                    <span
                                        className="block text-sm font-medium text-gray-700">Options #{index + 1}</span>
                                    <input type="text"
                                           className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                                           value={option.title}
                                           onChange={(event) => handleOptionChange(index, event)}
                                    />
                                </div>
                            ))}
                            <div className="flex items-center">
                                <button className="px-2 py-2 bg-gray-700 text-white rounded" onClick={addOption}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                         className="w-5 h-5">
                                        <path
                                            d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 text-right">
                        <button className="px-4 py-2 bg-primary text-white rounded-full">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Create;