import React from "react";
import { useForm } from "react-hook-form";





const Form = ({ onActualizarNombre, onActualizarProfesion }) => {
    const { register, formState: { errors }, handleSubmit } = useForm({

    });

    const onSubmit = (data) => {
        console.log(data);
        onActualizarNombre(data.name, data.lastname);
        onActualizarProfesion(data.profession);


    };
    return (
        <div className="flex-1 bg-[#182637] shadow-[0_20px_40px_rgba(255,255,255,0.3)]">
            <form className="grid grid-cols-2 gap-2" onSubmit={handleSubmit(onSubmit)}>

                <section className="border p-4 bg-[#4A5568] border-white border-opacity-40 rounded-md">

                    <h3 className="font-bold text-white mb-2">Información personal</h3>

                    <input
                        type="text"
                        name="name"
                        placeholder="Nombres"
                        className="mb-2 p-2 border w-full px-4 py-2 rounded-full bg-gray-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('name', { required: true, maxLength: 20 })}
                    />
                    {errors.name?.type === 'required' && <p className="text-red-500 font-bold text-sm">El campo nombre es requerido</p>}
                    {errors.name?.type === 'maxLength' && <p className="text-red-500 font-bold text-sm">El campo nombre debe tener menos de 20 caracteres</p>}


                    <input
                        type="text"
                        name="lastname"
                        placeholder="Apellidos"
                        className="mb-2 p-2 border w-full px-4 py-2 rounded-full bg-gray-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('lastname', { required: true, maxLength: 20 })}
                    />
                    {errors.lastname?.type === 'required' && <p className="text-red-500 font-bold text-sm">El campo Apellidos es requerido</p>}
                    {errors.lastname?.type === 'maxLength' && <p className="text-red-500 font-bold text-sm">El campo Apellidos debe tener menos de 20 caracteres</p>}


                </section>
                <section className="border p-4 bg-[#4A5568] border-white border-opacity-40 rounded-md">
                    <h3 className="font-bold text-white mb-2">Contacto</h3>
                    <input
                        type="text"
                        name="email"
                        placeholder="Correo electrónico"
                        className=" mb-2 p-2 border w-full px-4 py-2 rounded-full bg-gray-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"

                        {...register('email', {
                            required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                        },
                        )}
                    />

                    {errors.email?.type === 'required' && <p className="text-red-500 font-bold text-sm">El campo email es requerido</p>}
                    {errors.email?.type === 'pattern' && <p className="text-red-500 font-bold text-sm">El formato del email es incorrecto</p>}

                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Número telefónico"
                        className="mb-2 p-2 border w-full px-4 py-2 rounded-full bg-gray-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"

                        {...register('phoneNumber', { required: true })}
                    />
                    {errors.phoneNumber?.type === 'required' && <p className="text-red-500 font-bold text-sm">El campo del numero telefónico es requerido</p>}

                </section>
                <section className="border p-4 bg-[#4A5568] border-white border-opacity-40 rounded-md">
                    <h3 className="font-bold text-white mb-2">Estudios</h3>
                    <input
                        type="text"
                        name="location"
                        placeholder="Lugar"
                        className="mb-2 p-2 border w-full px-4 py-2 rounded-full bg-gray-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"

                        {...register('location', { required: true })}
                    />
                    {errors.location?.type === 'required' && <p className="text-red-500 font-bold text-sm">El campo del lugar de estudio es requerido</p>}

                    <input
                        type="text"
                        name="profession"
                        placeholder="Profesión"
                        className="mb-2 p-2 border w-full px-4 py-2 rounded-full bg-gray-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"

                        {...register('profession', { required: true })}
                    />
                    {errors.phoneNumber?.type === 'required' && <p className="text-red-500 font-bold text-sm">El campo de profesión es requerido</p>}

                </section>
                <section className="border p-4 bg-[#4A5568] border-white border-opacity-40 rounded-md">

                    <h3 className="font-bold text-white mb-2">Opciones</h3>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        <input type="button" value="Soporte" className="cursor-pointer flex items-center space-x-2 bg-[#ff914d] text-white px-4 py-2 rounded-lg hover:bg-orange-800" />
                        <input type="button" value="Volver" className="cursor-pointer flex items-center space-x-2 bg-[#ff914d] text-white px-4 py-2 rounded-lg hover:bg-orange-800" />
                        <input type="button" value="Eliminar cuenta" className="cursor-pointer flex items-center space-x-2 bg-[#ff914d] text-white px-4 py-2 rounded-lg hover:bg-orange-800" />
                    </div>
                </section>
                <input type="submit" value='Acutalizar Información' className="bg-[#ff914d] text-white font-bold py-2 px-4 rounded col-span-2 cursor-pointer"></input>
            </form>
        </div>
    )

}

export default Form;