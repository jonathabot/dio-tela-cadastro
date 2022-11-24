import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleCadastro, SubtitleCadastro, TextCadastro, Row, Wrapper, WrapperForm, JaTenhoText, LoginText } from './styles';

const Cadastro = () => {

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }

            alert('Usuário ou senha inválido')
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleCadastro>Comece agora grátis</TitleCadastro>
                <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                <WrapperForm>
                    <form>
                        <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="nome" control={control} />
                        {errors.nome && <span>Nome completo é obrigatorio</span>}
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                        {errors.email && <span>Email é obrigatorio</span>}
                        <Input placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                        {errors.senha && <span>Senha é obrigatório</span>}
                        <Button title="Criar minha conta" variant="secondary" type="submit"/>
                    </form>
                </WrapperForm>
                <TextCadastro>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TextCadastro>
                <Row>
                <JaTenhoText onClick={handleClickSignIn}>Já tenho conta.</JaTenhoText>
                <LoginText onClick={handleClickSignIn}>Fazer Login</LoginText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }