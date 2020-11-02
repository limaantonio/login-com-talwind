import '../../styles/main.css';

import Input from '../../components/Input';

const Profile = () => {
  return (
    <div className=" h-full">
      <div className="flex flex-1 items-center w-full h-10 bg-blue-700">
          <a href="/login">
            <img src="/arrow-left.svg" alt=""/>
          </a>
          <h1 className="flex flex-1 justify-center my-2 text-white">Perfil</h1>
          <p className="text-white m-2">LOGO</p>
        </div>
      <div className="flex max-h-full bg-color">

        <div className="w-full flex-col flex h-64 m-8 justify-center items-center ">
          <img className=" w-40 h-40 rounded-full border-purple-700 border-8" src="https://avatars3.githubusercontent.com/u/40245102?s=460&u=e0a4a756b23faa7fb2828213f1fbed6875a035ba&v=4" alt=""/>
          <p className="text-4xl">Antonio</p>
          <span>Geografia</span>
        </div>
      </div>
      <div className="h-full">
      <form className="container shadow-md flex flex-col sm:w-6/12 w-11/12 justify-center bg-form  bg-white rounded -my-10 h-auto p-4" action="">
          <Input name={"Nome"}/>
          <Input name={"E-mail"}/>
          <Input name={"Endereço"}/>
          <Input name={"Senha"}/>

          <div className="flex flex-row">
            <div className="flex flex-col w-1/2 p-2">
              <label htmlFor="">Data de nascimento</label>
              <input className="p-2 h-10  w-full bg-input box-border bg-input border-color rounded" type="text"/>
            </div>
            <div className="flex flex-col w-1/2 p-2">
              <label htmlFor="">Idade</label>
              <input className="p-2 h-10  w-full bg-input box-border bg-input border-color rounded" type="text"/>
            </div>
          </div>
          <button className="bg-indigo-700 sm:w-4/12 m-2 text-white rounded p-2 shadow-xs">Salvar cadastro</button>
        </form>

      </div>

    </div>
  )
}

export default Profile;
