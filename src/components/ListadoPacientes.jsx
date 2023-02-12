const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
    
        <p className="text-lg mt-5 text-center">
          Administra tus{" "}
          <span className="text-indigo-600 font-bold">pacientes y citas</span>
        </p>
        <div className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-5 ml-5">
        <div >
          <p className="mt-5 font-bold text-gray-700 uppercase">
            Nombre: <span className="normal-case font-normal">Hook</span>
          </p>
          <p className="mt-5 font-bold text-gray-700 uppercase">
            Propietario: <span className="normal-case font-normal">Hook</span>
          </p>
          <p className="mt-5 font-bold text-gray-700 uppercase">
            Email: <span className="normal-case font-normal">email@emal.com</span>
          </p>
          <p className="mt-5 font-bold text-gray-700 uppercase">
            Fecha alta: <span className="normal-case font-normal">12/05/2021</span>
          </p>
          <p className="mt-5 font-bold text-gray-700 uppercase">
            Síntomas: <span className="normal-case font-normal">No come</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListadoPacientes;
