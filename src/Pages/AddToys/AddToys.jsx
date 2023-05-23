import './AddToys.css';
import back from '../../../Images/back4.png'
import Swal from 'sweetalert2';
const AddToys = () => {
    const handleAddHero = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const sname = form.sname.value;
        const email = form.email.value;
        const categoty = form.categoty.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;
        const photo = form.photo.value;

        const newHero = { name, sname, email, categoty, price, rating, quantity, detail, photo }
        console.log(newHero);

        fetch('https://toy-hero-server-ten.vercel.app/toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newHero)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'SuccessFully Added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else if ("") {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
                }
            })
    }
    return (
        <div className='addtoybd'>
            <img className='imgback' src={back} alt="" />
            <div className="">
                <div className="l-design-widht">
                    <h1 className=' text-center '>ADD Toys</h1>

                    <p className='ml-60 mr-60'> In the Add Toy section, ensure all input fields are filled and submitted as the information will be recorded and <mark> visible</mark> to others.</p>

                    <form onSubmit={handleAddHero}>
                        <div className='cardx' >
                            <div className='flex '>
                                <div className=' flex-grow'>
                                    <label className="input">
                                        <input className="input__field" type="text" name='name' placeholder=" " required />
                                        <span className="input__label">Hero Toy Name</span>
                                    </label>
                                </div>
                                <div className=' flex-grow'>

                                    <label className="input">
                                        <input className="input__field" type="text" name='sname' placeholder=" " required />
                                        <span className="input__label">Seller Name</span>
                                    </label>
                                </div>
                            </div>
                            <div className='flex '>
                                <div className=' flex-grow'>
                                    <label className="input">
                                        <input className="input__field" type="email" name='email' placeholder=" " required />
                                        <span className="input__label">Seller Email</span>
                                    </label>
                                </div>
                                <div className=' flex-grow'>

                                    <label className="input">
                                        <input className="input__field" type="text" name='categoty' placeholder=" " required />
                                        <span className="input__label">Sub-category</span>
                                    </label>
                                </div>
                            </div>
                            <div className='flex '>
                                <div className=' flex-grow'>
                                    <label className="input">
                                        <input className="input__field" type="number" name='price' placeholder=" " required />
                                        <span className="input__label">Price</span>
                                    </label>
                                </div>
                                <div className=' flex-grow'>

                                    <label className="input">
                                        <input className="input__field" type="number" step="0.1" name='rating' placeholder=" " required />
                                        <span className="input__label">Rating</span>
                                    </label>
                                </div>
                            </div>
                            <div className='flex '>
                                <div className=' flex-grow'>
                                    <label className="input">
                                        <input className="input__field" type="number" name='quantity' placeholder=" " required />
                                        <span className="input__label">Available quantity</span>
                                    </label>
                                </div>
                                <div className=' flex-grow'>
                                    <div className=''>
                                        <label className="input">
                                            <input className="input__field" type="text" name='photo' placeholder=" " required />
                                            <span className="input__label">Photo URL</span>
                                        </label>
                                    </div>

                                </div>
                            </div>
                            <div className=''>
                                <label className="input">
                                    <textarea className="input__field" type="text" name='detail' placeholder=" " required id="" cols="54" rows="5"></textarea>
                                    
                                    <span className="input__label">Detail description</span>
                                </label>

                            </div>

                            <div className='button-group flex justify-center'>
                                <input className='bt' type="submit" value="Add" />
                            </div>
                        </div>
                    </form>
                </div>

            </div>


        </div>

    );
};

export default AddToys;