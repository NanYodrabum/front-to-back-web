function FormInput({register, name}) {
    return (
        <input
            placeholder={name}
            type="text"
            {...register(name)}
            className="border w-full border-gray-500 rounded-md p-1 px-4"
        />
    )
}

export default FormInput