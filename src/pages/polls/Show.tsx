import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Layout from "../../components/Layout";
import {Poll} from "../../shared/interfaces/poll.interface";
import {getPollById} from "../../services/PollService";
import {Vote} from "../../shared/interfaces/vote.interface";
import {createVote} from "../../services/VoteService";
import {toast} from "react-toastify";
import {shuffle} from "lodash";
import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const chartConfig = {
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
    ],
    borderWidth: 1,
}

const Show = () => {

    const {id} = useParams();
    const [poll, setPoll] = useState<Poll | undefined>(undefined);
    const [vote, setVote] = useState<Vote | undefined>(undefined);

    const loadPoll = () => {
        if (id) {
            getPollById(+id)
                .then(response => {
                    const data = response.data;
                    data.options = shuffle(response.data.options);
                    setPoll({...data});

                    setVote({
                        ...vote,
                        pollId: data.id
                    })
                })
                .catch(error => {
                    console.log(error)
                });
        }
    }

    const handelOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setVote({...vote, optionId: +e.target.value})
    }

    const handelSubmitVote = (event: FormEvent) => {
        event.preventDefault();

        if (vote) {
            createVote(vote)
                .then(response => {
                    toast("Voted Successfully", {type: "success"});
                    loadPoll();
                })
                .catch(error => {
                    toast("Ops! Something went wrong.", {type: "error"});
                    console.log(error)
                })
        }
    }

    const isChecked = (optionId: number) => {
        if (poll?.vote) {
            return poll.vote.optionId === optionId;
        }
        return vote?.optionId === optionId;
    }

    const getTotal = () => {
        if (!poll) return 0;

        return poll.votesTotal?.data.reduce((initial, item) => {
            return initial + +item;
        }, 0)
    }

    useEffect(() => {
        loadPoll();
    }, []);

    return (
        <Layout>
            <div className="p-4 w-2/3 mx-auto bg-white shadow rounded">
                {poll && (
                    <>
                        <div className="grid grid-cols-2 h-96">
                            <div>
                                <h2 className="font-semibold text-lg">
                                    {poll.title}
                                </h2>
                                <form onSubmit={handelSubmitVote}>
                                    <div className="grid grid-cols-1 gap-2 mt-2">
                                        {poll.options.map(option => (
                                            <label className="flex items-center" key={option.id}>
                                                <input
                                                    type="radio"
                                                    value={option.id}
                                                    onChange={handelOptionChange}
                                                    checked={isChecked(option.id || 0)}
                                                    disabled={!!poll?.vote}
                                                />
                                                <span className=" ml-2 font-medium">{option.title}</span>
                                            </label>
                                        ))}
                                    </div>
                                    <div className="mt-4 flex justify-end">
                                        <button
                                            className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 text-white font-bold rounded-lg disabled:bg-indigo-400 disabled:cursor-not-allowed"
                                            disabled={!vote?.optionId || !!poll.vote}>Vote
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="px-4">
                                <div>
                                    <h2 className="text-xl text-gray-600">Total Votes</h2>
                                    <p className="text-4xl font-bold">{getTotal()} <span
                                        className="text-base text-gray-600">Votes</span></p>
                                    <span
                                        className="text-sm text-gray-600 font-bold">Last vote was at: 2020-12-30</span>
                                    <div className="flex justify-center items-center">
                                        <div>
                                            <Doughnut data={{
                                                labels: poll.votesTotal?.labels,
                                                datasets: [{data: poll.votesTotal?.data, ...chartConfig}]
                                            }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </Layout>
    );
};

export default Show;