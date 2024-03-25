import React from "react";
import '../CSS/App.css';
import '../CSS/index.css';
import ebook from '../image/ebook_livro.png';
import saudavel from '../image/saudavel.jpg';
import { FaExclamationCircle } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { FaHourglassStart } from "react-icons/fa";
import { LiaDumbbellSolid } from "react-icons/lia";
import { IoCartOutline } from "react-icons/io5";
import { CgCopyright } from "react-icons/cg";

//componentes
import Button from "../Buttons/button";
import Comecar from '../Buttons/comecar';

export default function App(){
    return(
        <div className="body">
            <div className="main-page">
                <section className="section-page">
                    <div className="row">
                        <div className="colum">
                            <span className="caixa-texto">
                                <span className="texto">
                                    <p className="t1">Lançamento</p>
                                </span>
                                <span className="texto">
                                    <p className="titulo">50 Receiras Saudáveis para Secar</p>
                                </span>
                                <span className="texto">
                                    <p>Este guia repleto de sabor apresenta uma coleção cuidadosamente selecionada de receitas nutritivas e equilibradas, projetadas para impulsionar seu metabolismo, controlar o apetite e ajudar na queima de gordura.</p>
                                </span>
                                <Button />
                            </span>
                        </div>
                        <div className="colum">
                            <span id="img">
                                <img src={ ebook } alt="50 Receitas Saudáveis para Secar" id="ebook" />
                            </span>
                        </div>
                    </div>
                </section>
            </div>
            <div className="main1">
            <section className="section-main1">
                    <div className="row">
                        <div className="colum">
                            <span className="caixa-texto">
                                <span className="texto">
                                    <p className="t1">Sobre esse ebook</p>
                                </span>
                                <span className="texto">
                                    <p className="titulo2">É um ótimo aliado para as pessoas que desejam emagrecer com 50 receitas de dar água na boca</p>
                                </span>
                                <span className="texto">
                                    <span className="lista">
                                        <span className="org">
                                            <p><FaExclamationCircle />Variedade nutricional</p>
                                        </span>
                                        <span className="org">
                                            <p><FaExclamationCircle />Controle de Porções e Calorias</p>
                                        </span>
                                        <span className="org">
                                            <p><FaExclamationCircle />Preparo Simples e Prático</p>
                                        </span>
                                        <span className="org">
                                            <p><FaExclamationCircle />Inovação e Criatividade</p>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </div>
                        <div className="colum">
                            <span id="img">
                                <img src={ saudavel } alt="imagem saudável" id="saudavel"/>
                            </span>
                        </div>
                    </div>
                </section>
            </div>
            <div className="main2">
                <section className="section-main2">
                    <h2>Esse ebook é para você, que...</h2>
                    <div className="box-cards">
                        <div className="card">
                            <FaBowlFood />
                            <h3>Quer mudar sua alimentação!!</h3>
                            <p>Cansado(a) de comer besteiras o dia todo ? Esse ebook é para você!</p>
                        </div>
                        <div className="card">
                            <LiaDumbbellSolid />
                            <h3>Quer emagrecer!!</h3>
                            <p>Quer receitas para ajudar a perder peso ? Esse ebook é para você!</p>
                        </div>
                        <div className="card">
                            <FaHourglassStart />
                            <h3>Decidiu mudar!!</h3>
                            <p>Não perca tempo e comece agora mesmo a montar sua dieta com as receitas que contém no ebook</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="main3" id="main3">
                <section className="section-main3">
                    <div className="row">
                        <div className="colum">
                            <span className="caixa-texto">
                                <span className="oferta">
                                    <IoCartOutline />
                                    <h1>Não perca essa oferta imperdível e já garanta o seu!!</h1>
                                </span>
                            </span>
                        </div>
                        <div className="colum">
                            <div className="caixa">
                                <div className="conteudo-caixa">
                                    <span className="txt">
                                        <p>Por apenas 3x de</p>
                                    </span>
                                    <span className="valor">
                                        <h2>R$ 5, 12</h2>
                                    </span>
                                    <span className="txt">
                                        <p>ou a vista por R$ 39,90</p>
                                    </span>
                                    <Comecar />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="footer">
                <span>
                    <p>copyright<CgCopyright /></p>
                    <p>todos os direitos reservardos</p>
                </span>
            </div>
        </div>
    )
}