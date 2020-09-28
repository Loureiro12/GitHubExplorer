import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api';

import logo from '../../assets/imagem_2.svg';
import Repository from '../Repository';

import { Title, Form, Repositories } from './styles';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>([]);

async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');
}

    return (
        <>
            <img src={logo} alt="GitHub Explorer" />
            <Title>Explore repositório no GitHub</Title>

            <Form onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome de repositorio"
                />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                {repositories.map(repository => (
                    <a key={repository.full_name} href="teste">
                    <img
                        src={repository.owner.avatar_url}
                        alt={repository.owner.login}
                    />
                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                ))}

            </Repositories>
        </>
    );
}

export default Dashboard;