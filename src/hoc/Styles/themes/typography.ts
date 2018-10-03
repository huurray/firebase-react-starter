import { css } from 'styled-components';

const h1 = css`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 1.7;
  color: ${(props: any) => (props.white ? '#fff' : '#222')};
`;

const h2 = css`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1.7;
  color: ${(props: any) => (props.white ? '#fff' : '#222')};
`;

const h3 = css`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.7;
  color: ${(props: any) => (props.white ? '#fff' : '#222')};
`;

const p1 = css`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.7;
  color: ${(props: any) => (props.white ? '#fff' : '#222')};
`;

const p2 = css`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.7;
  color: ${(props: any) => (props.white ? '#fff' : '#222')};
`;

const p3 = css`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.7;
  color: ${(props: any) => (props.white ? '#fff' : '#222')};
`;

export default {
  h1,
  h2,
  h3,
  p1,
  p2,
  p3
};
