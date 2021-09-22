import { Link } from 'react-router-dom';

interface Props<T> {
  title: string;
  prevDest?: string;
  prevState?: T;
}

export const PageHeader = <T,>(props: Props<T>): JSX.Element => {
  const { title, prevDest, prevState } = props;

  return (
    <div className='col-12'>
      <h2>{title}</h2>
      {prevDest && (
        <h6>
          <Link
            to={{
              pathname: prevDest,
              state: prevState
            }}
            className='text-decoration-none text-dark'
          >
            &lt;- Go back
          </Link>
        </h6>
      )}
    </div>
  );
};
