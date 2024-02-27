import React from 'react'
import List from './list'
import "./board.css"

const Info = [
    {
        img: "https://t3.ftcdn.net/jpg/02/00/90/24/240_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
        name: "Rushikesh Tekale",
        birthday: "2001-02-10"
    },
    {
        img: "https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896",
        name: "Tekale Sandhya",
        birthday: "2001-3-10"
    },
    {
        img: "https://t3.ftcdn.net/jpg/02/00/90/24/240_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
        name: "Adinath Tekale",
        birthday: "2001-08-10"
    },
    {
        img: "https://t3.ftcdn.net/jpg/02/00/90/24/240_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
        name: "Rohan Tekale",
        birthday: "2004-3-10"
    },
    {
        img: "https://t3.ftcdn.net/jpg/02/00/90/24/240_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
        name: "Yash Tekale",
        birthday: "2008-02-10"
    },
    {
        img: "https://t3.ftcdn.net/jpg/02/00/90/24/240_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
        name: "Rushikesh Patil",
        birthday: "1999-3-10"
    },
    {
        img: "https://t3.ftcdn.net/jpg/02/00/90/24/240_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
        name: "Akash Shinde",
        birthday: "2001-02-10"
    },
    {
        img: "https://t3.ftcdn.net/jpg/02/00/90/24/240_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
        name: "Vaibhav Tambare",
        birthday: "2005-3-10"
    }
]



export default function board() {


    return (
        <main id='site-main'>
            <h1 className='text-dark title'>Birthday Reminder</h1>

            <div className='board'>
                <List info={Today(Info)} />
                <h2 className='upcoming text-dark upheading'>Upcomming Birthday</h2>
                <List info={Upcomming(Info, 10)} upcomming={true} />
            </div>
        </main>
    )
}

// Current birthday

function Today(person) {
    let currentDay = new Date().getDate();
    let currrentMonth = new Date().getMonth();

    let filter = person.filter(data => {
        let day = new Date(data.birthday).getDate();
        let month = new Date(data.birthday).getMonth();

        return currrentMonth === month && currentDay === day;
    })

    return filter;
}

function Upcomming(person, toMonth) {
    let currentDay = new Date().getDate();
    let currrentMonth = new Date().getMonth();

    let filter = person.filter(data => {
        let month = new Date(data.birthday).getMonth();
        let day = new Date(data.birthday).getDate();

        if (currentDay === day) return "";
        return month >= currrentMonth && month <= currrentMonth + toMonth;
    })

    return filter;
}