import { Dispatch, SetStateAction } from "react";
import { Post } from "../../../shared";

export interface Props {
    data?: Post[];
    isLoading: boolean;
    setPostStart: Dispatch<SetStateAction<number>>;
}
