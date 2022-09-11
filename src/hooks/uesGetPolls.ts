import {useState} from "react";
import {getPolls} from "../services/PollService";


export const useGetPolls = () => {
    const [polls, setPolls] = useState<any>([]);
    const [canLoadMore, setCanLoadMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const appendPolls = (items: any) => {
        setPolls((prev: any) => [...prev, ...items]);
    }

    const loadPolls = (page: number) => {

        setIsLoading(true);

        getPolls(page)
            .then(response => {
                if (response.data.items.length === 0) {
                    setIsLoading(false);
                    setCanLoadMore(false);
                    return;
                }
                appendPolls(response.data.items);
                setCanLoadMore(true);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error)
            });
    }

    return [polls, isLoading, canLoadMore, loadPolls]
}