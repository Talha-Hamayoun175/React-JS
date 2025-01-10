import React from "react";
import "./ProfileCard.css";

class ProfileCard extends React.Component {
    render() {
        const { name, title, image, description } = this.props;

        return (
            <div className="wrapper">
                <div className="card">
                    <img src={image} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
                        {/* <p className="card-text">{description}</p> */}
                        <a href="#" className="btn btn-primary">
                            View Profile
                        </a>
                    </div>
                </div>
                <div className="card-text-holder">
                    <p className="card-text">{description}</p>
                </div>
            </div>
        );
    }
}

export default ProfileCard;
