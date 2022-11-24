import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  max-width: 350px;
`;

export const WrapperForm = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
  margin-left: 100px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  max-width: 100%;
  margin-bottom: 20px;
  line-height: 44px;
  max-width: 500px;
  margin-left: 100px;

  color: #ffffff;
`;

export const TitleCadastro = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 8px;
`;

export const SubtitleCadastro = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 35px;
`;

export const TextCadastro = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-top: 35px;
  margin-bottom: 35px;
`;

export const JaTenhoText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  margin-right: 5px;

  color: #fafafa;
`;

export const LoginText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: #23dd7a;
`;
