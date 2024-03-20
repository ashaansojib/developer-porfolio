import React from 'react';
import { useForm } from 'react-hook-form';

const Dashboard = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }
    return (
        <div className="max-w-screen-lg mx-auto">
            this is dashboard

            {/* add a project form */}
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 justify-between px-2 md:px-0 py-4'>
                        <input {...register("name", { required: true })} className='input input-bordered w-full' type="text" placeholder='Type Name' />
                        <input {...register("category", { required: true })} className='input input-bordered w-full' type="text" placeholder='Category' />
                        <input {...register("image", { required: true })} className='input input-bordered w-full' type="text" placeholder='Image Link' />
                    </div>
                    <input type="submit" value="Published" className='py-2 px-3 bg-blue-500 text-white font-semibold cursor-pointer' />
                </form>
            </div>
        </div>
    );
};

export default Dashboard;