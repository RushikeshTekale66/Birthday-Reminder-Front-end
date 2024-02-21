import React from 'react'

export default function list({info, upcomming}) {
    // console.log(info);
    return (
        <ul>
            {iterate(info, upcomming)}

        </ul>
    )
}

//Iterate all the persons

function iterate(data, flag) {
    if (!data) return;
    const bgcolor = flag ? {backgroundColor:"#ffe66d"} : {};
    return (
        <>
            {
                data.map((person, index) => {
                    Old(person.birthday)
                    return (
                        <li key={index}>
                            <div className='flex' style={bgcolor}>
                                <img src={person.img} alt='img' />
                                <div className='title'>
                                    <h3 className='name'>{person.name}</h3>
                                    <h5 className='age'>{Old(person.birthday)} Years</h5>
                                </div>
                            </div>
                        </li>
                        )
                })
            }
        </>
    )
}

//How old the person is
function Old(personAge){
    let year = new Date(personAge).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear-year;
    return(age);
}

