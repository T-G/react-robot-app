import react from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className="bg-light-green dib pa3 ma2 grow bw2 shadow-5 tc">
            <div>
                <img alt="robot" src={`https://robohash.org/${id}?300x300`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </div>
        
    );
}

export default Card;