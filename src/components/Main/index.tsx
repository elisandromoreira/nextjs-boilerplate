import * as S from './styles';

const Main = ({
  title = 'NextJS Boilerplate',
  description = 'Typescript, React JS, Next JS e Styles Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Tittle>{title}</S.Tittle>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
  </S.Wrapper>
);

export default Main;
