import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/imagem_2.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logo} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronsLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://lh3.googleusercontent.com/ogw/ADGmqu-Cf4sx2swvjcXgPs-cOfb2hhP9SehTqUgSLgYv=s64-c-mo" alt="Teste" />
                    <div>
                        <strong>Rocketseat/unform</strong>
                        <p>descrição do repositorio</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Start</span>
                    </li>

                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>

                <Issues>
                    <Link to="dasda">
                        <div>
                            <strong>fdafa</strong>
                            <p>fafdasdf</p>
                        </div>

                        <FiChevronRight size={20} />
                    </Link>
                </Issues>
            </RepositoryInfo>
        </>
    );
}

export default Repository;