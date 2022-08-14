import { FC } from "react";
import { KeyPreviewCard } from "../components/KeyPreviewCard";
import { useKeys } from "../lib/useKeys";

export const Home: FC = () => {
    const { data, error } = useKeys("*");

    return (
        <div>
            <div>TODO: Searchbar here</div>
            <div className="grid px-4 gap-4 grid-cols-2 m:grid-cols-3 lg:grid-cols-4">
                {data &&
                    data.map((key, index) => (
                        <KeyPreviewCard data={key} key={index} />
                    ))}
            </div>
        </div>
    );
};