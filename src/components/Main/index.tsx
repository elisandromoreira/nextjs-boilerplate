import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Tittle>NextJS Boilerplate</S.Tittle>
    <S.Description>
      Typescript, React JS, Next JS e Styles Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
  </S.Wrapper>
);

export default Main;
