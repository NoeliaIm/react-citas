const Formulario = (props) => {
  return (
    <div className=" md:w-1/2 lg:w-2/5">
      <div className="font-black text-3xl text-center">Seguimiento pacientes</div>
      <p className="text-lg mt-5 text-center">
        Añade pacientes y {' '}
        <span className="text-indigo-600 font-bold">adminístralos</span>
      </p>
      <form className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-5" action="">
        <div className="mt-5">
          <label htmlFor="mascota" className="block text-gray-700 text-sm font-bold mb-2 uppercase">
            Nombre mascota
          </label>
          <input
            id="mascota"
            type="text"
            name="nombreMascota"
            className=" text-gray-700 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400"
            placeholder="Nombre de la mascota"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="propietario" className="block text-gray-700 text-sm font-bold mb-2 uppercase">
            Nombre propietario
          </label>
          <input
            id="propietario"
            type="text"
            name="nombrePropietario"
            className=" text-gray-700 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400"
            placeholder="Nombre del propietario"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 uppercase">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className=" text-gray-700 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400"
            placeholder="Email de contacto"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="alta" className="block text-gray-700 text-sm font-bold mb-2 uppercase">
            Fecha alta
          </label>
          <input
            id="alta"
            type="date"
            name="alta"
            className=" text-gray-700 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="sintomas" className="block text-gray-700 text-sm font-bold mb-2 uppercase">
            Síntomas
          </label>
         <textarea name="sintomas" className="border-2 w-full py-2 px-3" placeholder="Describe los síntomas" id="sintomas" cols="30" rows="5"/>
        </div>
        <input type="submit" className="bg-indigo-600 w-full p-3 mt-5 text-white font-semibold leading-tight uppercase hover:bg-indigo-800 cursor-pointer mb-5"  value="Agregar paciente"/>
      </form>
    </div>
  );
};

export default Formulario;
