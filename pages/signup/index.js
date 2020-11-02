import Input from "../../components/Input";
import "../../styles/main.css";

const SignUp = () => {
  return (
    <div className="h-auto sm:flex w-full bg-gray">
        <div className="flex flex-col  items-center sm:w-1/2 w-full h-screen justify-center  bg-white">
        <a className="relative  w-11/12" href="/login">
          <img src="arrow-left.svg" alt=""/>
        </a>
        <h1 className="text-4xl font-bold color-text">Sleeknote Academy</h1>
        <h1 className="text-3xl font-bold">Cadastro</h1>
        <p>Preencha todos os dados para fazer o cadastro.</p>

        <form className="flex flex-col my-10 w-9/12">
          <Input name={"Nome"}/>
          <Input name={"E-mail"}/>
          <Input name={"Senha"}/>
          <div className="flex my-2">
            <div className="flex  flex-col ">
             <Input name={"Idade"}/>
            </div>
            <div className="flex flex-col ">
             <Input name={"Data de nascimento"}/>
            </div>
          </div>
          <div className="flex my-4 justify-between">
          </div>
          <button className=" rounded h-10 text-white bg-color">Cadastrar</button>
        </form>
      </div>
        <div className="sm:flex sm:flex-col hidden  items-end p-2 sm:w-1/2 w-full min-h-screen justify-center ">
        <div className="p-4 flex flex-col justify-end items-end">
          <h1 className="flex justify-end">Sleeknote Academy</h1>
          <p className="flex justify-end">Bem-vindo a nossa plataforma de estudos online</p>
          <button href="#" className="border p-2 hover:font-bold text-jungle rounded ">START ACADEMY</button>
        </div>
        <img className="w-8/12 mx-20" src="/ilustration.svg" alt=""/>
      </div>


    </div>
  );
}

export default SignUp;
