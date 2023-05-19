import './AddToys.css';
import back from '../../../Images/back4.png'
const AddToys = () => {
    const handleAddHero=event=>{
        event.preventDefault();

        const form =event.target;

        const name= form.name.value;
        const sname= form.sname.value;
        const email= form.email.value;
        const categoty= form.categoty.value;
        const price= form.price.value;
        const rating= form.rating.value;
        const quantity= form.quantity.value;
        const detail= form.detail.value;
        const photo= form.photo.value;

        const newHero={name,sname,email,categoty,price,rating,quantity,detail,photo}
        console.log(newHero);
    }
    return (
        <div className='addtoybd'>
            <img className='imgback' src={back} alt="" />
            <div className="">
                <div className="l-design-widht">
                    <h1 className=' text-center '>ADD Toys</h1>

                    <p className='ml-60 mr-60'>Most of the projects I work on have about <mark>3</mark> important colors: Main- , Accent-  and Background-Color. Naturally tons of other colors are used in a typical Project, but they are mostly used within specific components.</p>

                    {/* <p>I find it useful to set those 3 colors as vars on the root and change them in specific contexts. It turns out that the complexity of the components I build is dramatically cut down by this. And also gives me a lot of control over the cascade.</p> */}
                    <form onSubmit={handleAddHero}>
                        <div className='card' >
                            <div className='flex '>
                                <div className=' flex-grow'>
                                    <label className="input">
                                        <input className="input__field" type="text" name='name' placeholder=" " />
                                        <span className="input__label">Hero Toy Name</span>
                                    </label>
                                </div>
                                <div className=' flex-grow'>

                                    <label className="input">
                                        <input className="input__field" type="text" name='sname' placeholder=" " />
                                        <span className="input__label">Seller Name</span>
                                    </label>
                                </div>
                            </div>
                            <div className='flex '>
                                <div className=' flex-grow'>
                                    <label className="input">
                                        <input className="input__field" type="email" name='email' placeholder=" " />
                                        <span className="input__label">Seller Email</span>
                                    </label>
                                </div>
                                <div className=' flex-grow'>

                                    <label className="input">
                                        <input className="input__field" type="text" name='categoty' placeholder=" " />
                                        <span className="input__label">Sub-category</span>
                                    </label>
                                </div>
                            </div>
                            <div className='flex '>
                                <div className=' flex-grow'>
                                    <label className="input">
                                        <input className="input__field" type="number" name='price' placeholder=" " />
                                        <span className="input__label">Price</span>
                                    </label>
                                </div>
                                <div className=' flex-grow'>

                                    <label className="input">
                                        <input className="input__field" type="number" name='rating' placeholder=" " />
                                        <span className="input__label">Rating</span>
                                    </label>
                                </div>
                            </div>
                            <div className='flex '>
                                <div className=' flex-grow'>
                                    <label className="input">
                                        <input className="input__field" type="number" name='quantity' placeholder=" " />
                                        <span className="input__label">Available quantity</span>
                                    </label>
                                </div>
                                <div className=' flex-grow'>

                                    <label className="input">
                                        <input className="input__field" type="text" name='detail' placeholder=" " />
                                        <span className="input__label">Detail description</span>
                                    </label>
                                </div>
                            </div>
                            <div className='flex '>
                                <div className=' flex-grow'>
                                    <label className="input">
                                        <input className="input__field" type="text" name='photo' placeholder=" " />
                                        <span className="input__label">Photo URL</span>
                                    </label>
                                </div>

                            </div>

                            <div className='button-group flex justify-center'>
                                <input className=' btn' type="submit" value="Send" />
                            </div>
                        </div>
                    </form>
                </div>

            </div>


        </div>

    );
};

export default AddToys;