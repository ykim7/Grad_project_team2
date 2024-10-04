import { useEffect, useState } from "react";

const Forum_vertical = ({ year, term }) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const url = `${process.env.REACT_APP_BACKEND_URL}/scraper/${term}/${year}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const filteredEvents = data.filter((event) => {
                    const eventDate = new Date(event.date + ", " + year);
                    const today = new Date();
                    return eventDate >= today;
                });
                setEvents(filteredEvents);
                //console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);


    // const samples = [
    //     {
    //         date: "July 6",
    //         content:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar nisl ipsum morbi diam scelerisque pulvinar elementum, viverra.",
    //     },
    //     {
    //         date: "July 6",
    //         content:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar nisl ipsum morbi diam scelerisque pulvinar elementum, viverra.",
    //     },
    //     {
    //         date: "July 6",
    //         content:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar nisl ipsum morbi diam scelerisque pulvinar elementum, viverra.",
    //     },
    //     {
    //         date: "July 6",
    //         content:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar nisl ipsum morbi diam scelerisque pulvinar elementum, viverra.",
    //     },
    // ];
    return (
        // <>
        //     <div className="h-60 w-full bg-white rounded-xl p-5 overflow-y-scroll shadow-lg">
        //         {samples.map(({ date, content }, index) => {
        //             return (
        //                 <div className="border-b h-20" key={index}>
        //                     <span className="font-semibold">{date}</span>
        //                     <p className="text-xs">{content}</p>
        //                 </div>
        //             );
        //         })}
        //     </div>
        // </>
        <div className="h-60 w-full bg-white rounded-xl p-5 overflow-y-scroll shadow-lg">
            {events.map(({ date, event }, index) => (
                <div className="border-b h-20" key={index}>
                    <span className="font-semibold">{date}</span>
                    <p className="text-xs">{event}</p>
                </div>
            ))}
        </div>
    );
};

export default Forum_vertical;
