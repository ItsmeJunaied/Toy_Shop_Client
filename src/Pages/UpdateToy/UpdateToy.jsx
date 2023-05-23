import { useLoaderData } from 'react-router-dom';
import './UpdateToy.css';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const toydata = useLoaderData();
    const { _id,name, sname, email, categoty, price, rating, quantity, detail, photo } = toydata;
    console.log(toydata);
    const handleUpdateHero = event => {
        event.preventDefault();

        const form = event.target;

        const name = form?.name?.value;
        const sname = form?.sname?.value;
        const email = form?.email?.value;
        const categoty = form?.categoty?.value;
        const price = form?.price?.value;
        const rating = form?.rating?.value;
        const quantity = form?.quantity?.value;
        const detail = form?.detail?.value;
        const photo = form?.photo?.value;

        const updateToydata = { name, sname, email, categoty, price, rating, quantity, detail, photo }


        fetch(`https://toy-hero-server-ten.vercel.app/toy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToydata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'SuccessFully Updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else{
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
        <div>
            <div>
                <h1 className=' text-center mt-14 '>Update Toy: {name}</h1>
            </div>
            <div>
                <form onSubmit={handleUpdateHero} className='mb-36 mt-20'>
                    <div className='cardx' >
                        <div className='flex '>
                            <div className=' flex-grow'>
                                <label className="input">
                                    <input className="input__field" type="text" name='name' defaultValue={name} placeholder=" " required readOnly />
                                    <span className="input__label">Hero Toy Name</span>
                                </label>
                            </div>
                            <div className=' flex-grow'>

                                <label className="input">
                                    <input className="input__field" type="text" name='sname' defaultValue={sname}  placeholder=" " required  readOnly/>
                                    <span className="input__label">Seller Name</span>
                                </label>
                            </div>
                        </div>
                        <div className='flex '>
                            <div className=' flex-grow'>
                                <label className="input">
                                    <input className="input__field" type="email" name='email' defaultValue={email} placeholder=" " required  readOnly/>
                                    <span className="input__label">Seller Email</span>
                                </label>
                            </div>
                            <div className=' flex-grow'>

                                    <label className="input">
                                        <input className="input__field" type="text" name='categoty' defaultValue={categoty} placeholder=" " required readOnly />
                                        <span className="input__label">Sub-category</span>
                                    </label>
                                </div>
                        </div>
                        <div className='flex '>
                            <div className=' flex-grow'>
                                <label className="input">
                                    <input className="input__field" type="number" name='price' defaultValue={price} placeholder=" " required />
                                    <span className="input__label">Price <span className=' font-extrabold text-red-700'>[Update]*</span></span>
                                </label>
                            </div>
                            <div className=' flex-grow'>

                                <label className="input">
                                    <input className="input__field" type="number" step="0.1" name='rating' defaultValue={rating} placeholder=" " required readOnly/>
                                    <span className="input__label">Rating</span>
                                </label>
                            </div>
                        </div>
                        <div className='flex '>
                            <div className=' flex-grow'>
                                <label className="input">
                                    <input className="input__field" type="number" name='quantity' defaultValue={quantity} placeholder=" " required />
                                    <span className="input__label">Available quantity <span className=' font-extrabold text-red-700'>[Update]*</span></span>
                                </label>
                            </div>
                            <div className=' flex-grow'>
                                <div className=''>
                                    <label className="input">
                                        <input className="input__field" type="text" name='photo' defaultValue={photo} placeholder=" " required readOnly />
                                        <span className="input__label">Photo URL</span>
                                    </label>
                                </div>

                            </div>
                        </div>
                        <div className=''>
                            <label className="input">
                                <textarea className="input__field" type="text" name='detail' defaultValue={detail} placeholder=" " required id="" cols="54" rows="5"></textarea>
                                {/* <input className="input__field" type="text" name='detail' defaultValue={detail}  placeholder=" " required /> */}
                                <span className="input__label">Detail description <span className=' font-extrabold text-red-700'>[Update]*</span></span>
                            </label>

                        </div>

                        <div className='button-group flex justify-center'>
                            <input className='bt' type="submit" value="Update" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;