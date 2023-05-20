import './ViewDetails.css';

const ViewDetails = () => {
    return (
        <div id="container">
            <div class="custom-card" id="hulk">
                <div class="card-image">
                    <img src="https://res.cloudinary.com/dsgvp2wmj/image/upload/v1636769866/466-4665707_hulk-png-avengers-earths-mightiest-heroes-hulk-transparent-removebg-preview_hxdclj.png" />
                </div>
                <div class="card-text">
                    <h2>MARVEL</h2>
                    <p>COMICS<br />GROUP</p>
                    <div>
                        <div>
                            <span>15</span>
                            <span>&cent;</span>
                        </div>
                        <div>
                            <span>27</span>
                            <span>May</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ViewDetails;