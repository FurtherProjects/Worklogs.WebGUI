import React, { useEffect, useState } from 'react';
import styles from './login.module.scss';
import { Button, Form } from 'semantic-ui-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import * as authenticationApi from '../../api/authentication';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const queryClient = useQueryClient();
    const { isPending, isError, error, data, mutate: login } = useMutation({
        mutationFn: async ({ identity, password }: { identity: string, password: string }) => {
            const result = await authenticationApi.login({
                identity,
                password
            });
            if (!result.ok) throw new Error("Not ok");
            return result.body;
        },
        onError: (error, request, context) => {
            
        },
        onSuccess: (data, request, context) => {
            localStorage.setItem('access-token-expiration', data['AccessToken']['Expiration']);
            localStorage.setItem('refresh-token-exipration', data['RefreshToken']['Expiration']);
            navigate('/');
        }
    });

    useEffect(() => {
        
    }, [data]);

    const navigate = useNavigate();

    const [identity, setIdentity] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={styles['login-container']}>
            <div className={styles['login-form']}>
                <Form>
                    <Form.Field>
                        <label>User Name:</label>
                        <input onChange={e => setIdentity(e.target.value)} type='text' />
                    </Form.Field>
                    <Form.Field>
                        <label>Password:</label>
                        <input onChange={e => setPassword(e.target.value)} type='password' />
                    </Form.Field>
                    <Button positive onClick={() => { login({ identity, password }) }}>Login</Button>
                </Form>
            </div>
        </div>
    )
}
