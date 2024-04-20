import { DataContext } from './../providers/DataProvider';
import { useContext } from 'react';

export const useData = () => {
    const {data , setData} = useContext(DataContext);
    return { data, setData };
}
