import exp from "constants";

const FetchAPI = async (url: string): Promise<any> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error in FetchAPI:", error);
        throw error;
    }
}

export default FetchAPI;