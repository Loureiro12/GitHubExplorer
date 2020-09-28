import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logo from '../../assets/imagem_2.svg';
import Repository from '../Repository';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logo} alt="GitHub Explorer" />
            <Title>Explore repositório no GitHub</Title>

            <Form>
                <input placeholder="Digite o nome de repositorio" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars0.githubusercontent.com/u/65689062?s=460&u=f5fa736dcab08e9f129bacb749d590c9187daaa1&v=4"
                        alt="André Loureiro"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJs</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars0.githubusercontent.com/u/65689062?s=460&u=f5fa736dcab08e9f129bacb749d590c9187daaa1&v=4"
                        alt="André Loureiro"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJs</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars0.githubusercontent.com/u/65689062?s=460&u=f5fa736dcab08e9f129bacb749d590c9187daaa1&v=4"
                        alt="André Loureiro"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJs</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars0.githubusercontent.com/u/65689062?s=460&u=f5fa736dcab08e9f129bacb749d590c9187daaa1&v=4"
                        alt="André Loureiro"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJs</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
}

export default Dashboard;