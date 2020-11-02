import Head from 'next/head';

import "../../styles/main.css";

import Input from '../../components/Input';

const Login = () => {
  return (
    <div className="h-auto sm:flex w-full bg-gray">
        <div className="sm:flex sm:flex-col hidden  items-end p-2 sm:w-1/2 w-full min-h-screen justify-center ">
        <div className="p-4 flex flex-col justify-end items-end">
          <h1 className="flex justify-end">Sleeknote Academy</h1>
          <p className="flex justify-end">Bem-vindo a nossa plataforma de estudos online</p>
          <button href="#" className="border p-2 hover:font-bold text-jungle rounded ">START ACADEMY</button>
        </div>
        <img className="w-8/12 mx-20" src="/ilustration.svg" alt=""/>
      </div>
      <div className="flex flex-col  items-center sm:w-1/2 w-full h-screen justify-center  bg-white">
        <h1 className="text-4xl font-bold color-text">Sleeknote Academy</h1>
        <h1 className="text-3xl font-bold">Bem-vindo</h1>

        <form className="flex flex-col my-10 w-9/12">
          <Input name={"E-mail"}/>
          <Input name={"Senha"}/>
          <div className="flex my-4 justify-between">
            <div className="">
              <input className="" type="checkbox"/>
              <label className="mx-2">Mantenha-me conectado</label>
            </div>
            <span className="color-text">Esqueceu sua senha?</span>
          </div>
          <a href="/profile" className=" rounded h-10 text-white bg-color">Login</a>
        </form>
        <div className="">
          <span>Não tem conta?</span>
          <a href="/signup">
            <span className="color-text font-bold">Cadastre-se</span>
          </a>
        </div>
      </div>


    </div>
  );
}

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login/>
    </div>
  )
}
