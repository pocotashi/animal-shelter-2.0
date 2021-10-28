import React from 'react';

const profiles = [
    {
        "status": " Available for Adoption",
        "breed": "Domestic Short Hair",
        "color": "calico",
        "age": "1 year old"
}
] 

export default function Profile(){
    return (
        <div>
            <h3>My Profile</h3>
            {profiles.map((profile, idx) => (
                <div>
                <h6>Status: {profile.status}</h6>
            <h6>Breed: {profile.breed}</h6>
            <h6>Color: {profile.color}</h6>
            <h6>Age: {profile.age}</h6>
            
            </div>
            ))
            }
            

        </div>
    )
}

